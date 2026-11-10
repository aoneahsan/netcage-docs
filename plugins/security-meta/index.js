const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

/**
 * Writes a Content-Security-Policy `<meta>` into every built page (product audit F-SEC-005).
 *
 * GitHub Pages sends no custom headers, so the policy has to travel inside the HTML. Each page's own
 * inline scripts are hashed after the build rather than listed by hand: the gtag snippet carries the
 * GA id from the build environment and Docusaurus writes the theme and base-URL scripts, so a
 * hand-kept hash would block analytics the first time either changed. The tag goes straight after
 * `<meta charset>`, ahead of every script it governs.
 *
 * Style attributes are allowed (`'unsafe-inline'` in `style-src`): Docusaurus renders dozens of them.
 * `frame-ancestors` is left out because a browser ignores it in a `<meta>` and logs a warning.
 * Clarity's Bing cookie-sync image stays blocked, as it is on the website.
 */
const HOSTS = {
  script: ['https://www.googletagmanager.com', 'https://*.clarity.ms'],
  img: ['https://*.clarity.ms', 'https://www.googletagmanager.com', 'https://*.google-analytics.com'],
  connect: [
    'https://www.google-analytics.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
    'https://*.amplitude.com',
    'https://*.clarity.ms',
  ],
};

/** Inline `<script>` bodies, skipping external scripts and JSON data blocks. */
function inlineScripts(html) {
  const bodies = [];
  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/type="?application\/(ld\+)?json/.test(match[1])) continue;
    bodies.push(match[2]);
  }
  return bodies;
}

/** The policy for one page, given its inline script bodies. */
function policyFor(bodies) {
  const hashes = [...new Set(bodies.map((body) => crypto.createHash('sha256').update(body, 'utf8').digest('base64')))]
    .sort()
    .map((hash) => `'sha256-${hash}'`);
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    ['script-src', "'self'", ...hashes, ...HOSTS.script].join(' '),
    "style-src 'self' 'unsafe-inline'",
    ['img-src', "'self'", 'data:', ...HOSTS.img].join(' '),
    "font-src 'self' data:",
    ['connect-src', "'self'", ...HOSTS.connect].join(' '),
    "worker-src 'self'",
    "manifest-src 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
  ].join('; ');
}

/** Every `.html` file under the build directory. */
function htmlFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

module.exports = function securityMetaPlugin() {
  return {
    name: 'netcage-security-meta',
    async postBuild({outDir}) {
      // The minifier drops the quotes (`<meta charset=UTF-8>`); accept both spellings.
      const anchor = /<meta charset="?utf-8"?>/i;
      for (const file of htmlFiles(outDir)) {
        const html = fs.readFileSync(file, 'utf8');
        if (!anchor.test(html)) {
          // Failing the build beats shipping a page with no policy and nobody noticing.
          throw new Error(`security-meta: no <meta charset> in ${path.relative(outDir, file)}`);
        }
        const tag = `<meta http-equiv="Content-Security-Policy" content="${policyFor(inlineScripts(html))}">`;
        fs.writeFileSync(file, html.replace(anchor, (charset) => `${charset}${tag}`), 'utf8');
      }
    },
  };
};
