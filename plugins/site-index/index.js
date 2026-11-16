const fs = require('node:fs');
const path = require('node:path');

/**
 * Supplies the two fleet surfaces Docusaurus does not: a browsable `/sitemap` page and an RSS
 * `/feed.xml`.
 *
 * Both are read from the repository at build time rather than hand-listed, because a hand-listed
 * index is a second source of truth that drifts the first time someone adds a page and forgets. The
 * page list comes from the front matter of `docs/*.md`; the releases come from the `##` headings of
 * `docs/changelog.md`.
 *
 * Why not the blog plugin, which is the usual way to get a feed: this site is product documentation
 * and deliberately has no blog (`blog: false`, with the reason written beside it). Turning the
 * changelog into blog posts to obtain an RSS file would restructure the site to satisfy a mechanism.
 * This produces the same two URLs without touching the information architecture.
 */
const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

function field(block, name) {
  const match = new RegExp(`^${name}:\\s*(.+)$`, 'm').exec(block);
  return match ? match[1].trim().replace(/^["']|["']$/g, '') : '';
}

/**
 * `exclude` is the docs plugin's own list (globs relative to `docs/`), so a file Docusaurus does not build
 * is never listed on /sitemap as a page that 404s.
 */
function readPages(docsDir, exclude, prefix = '') {
  const entries = fs.readdirSync(docsDir, {withFileTypes: true});
  const excluded = (name) => {
    const relative = prefix === '' ? name : `${prefix.slice(1)}/${name}`;
    return exclude.some((pattern) => path.matchesGlob(relative, pattern));
  };
  // One level of folders: `docs/compare/` is a sidebar category whose routes carry its name.
  const nested = entries
    .filter((entry) => entry.isDirectory() && prefix === '')
    .flatMap((entry) => readPages(path.join(docsDir, entry.name), exclude, `/${entry.name}`));
  const pages = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md') && !excluded(entry.name))
    .map((entry) => {
      const name = entry.name;
      const raw = fs.readFileSync(path.join(docsDir, name), 'utf8');
      const block = FRONT_MATTER.exec(raw)?.[1] ?? '';
      const base = name.replace(/\.md$/, '');
      const slugField = field(block, 'slug');
      return {
        // `index.md` carries `slug: /`, and routeBasePath is '/', so the route is the bare name.
        slug: slugField || (base === 'index' ? prefix || '/' : `${prefix}/${base}`),
        title: field(block, 'title') || base,
        description: field(block, 'description'),
        tags: (field(block, 'tags').replace(/^\[|\]$/g, '').split(',').map((t) => t.trim()).filter(Boolean)),
        // A folder's own positions restart at 1; its pages list after the top-level ones.
        position: Number(field(block, 'sidebar_position') || '999') + (prefix === '' ? 0 : 100),
      };
    });
  return [...pages, ...nested].sort((a, b) => a.position - b.position);
}

/**
 * Each `## <version>` in the changelog is one release. The summary is the first non-empty
 * paragraph under it, which is written as a standalone sentence precisely so it can be lifted.
 *
 * 🔴 Only a PUBLISHED release carries its date in the heading: `## 1.3.0 — 2026-11-20`. A release
 * with no date was built, superseded or sideloaded and is never a feed item (SA-NETCAGE-003): a
 * subscriber reads an item as "this shipped". The date is written by whoever publishes it, never
 * invented by the build.
 */
const PUBLISHED_HEADING = /^(.+?)\s+—\s+(\d{4}-\d{2}-\d{2})\s*$/;

/**
 * A dated heading pins its anchor with an explicit id, `## 1.4.0 — 2026-11-13 {/* #140 *\/}` (the MDX comment
 * form; the site runs with Docusaurus's v4 flags, which reject `{#140}`), so dating a release never moves the
 * fragment a feed item or an outside link already points at.
 */
const EXPLICIT_ID = /\s*\{\/\*\s*#(\S+)\s*\*\/\}\s*$/;

function readReleases(changelog) {
  const releases = [];
  const sections = changelog.split(/^## /m).slice(1);
  for (const section of sections) {
    const [line, ...rest] = section.split('\n');
    const anchor = EXPLICIT_ID.exec(line)?.[1] ?? null;
    const heading = line.replace(EXPLICIT_ID, '').trim();
    const body = rest.join('\n');
    const summary = body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p.length > 0 && !p.startsWith('#'));
    const dated = PUBLISHED_HEADING.exec(heading);
    if (dated && Number.isNaN(Date.parse(`${dated[2]}T00:00:00Z`))) {
      throw new Error(`site-index: changelog heading "${heading}" carries an invalid date.`);
    }
    releases.push({
      version: dated ? dated[1].trim() : heading,
      date: dated ? dated[2] : null,
      anchor,
      summary: (summary ?? '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim(),
    });
  }
  return releases;
}

/** The changelog's opening paragraph: its own words for the release status, shown while no release is dated. */
function readStatus(changelog) {
  const body = changelog.replace(/^---[\s\S]*?\n---\n/, '');
  const intro = body.split(/^## /m)[0];
  return intro.replace(/\s+/g, ' ').trim();
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = function siteIndexPlugin(context, options = {}) {
  const docsDir = path.join(context.siteDir, 'docs');
  const exclude = options.exclude ?? [];

  return {
    name: 'site-index',

    async loadContent() {
      const pages = readPages(docsDir, exclude);
      // 🔴 Throw rather than emit an empty index. A sitemap page that silently lists nothing looks
      // exactly like one that is working, and would be cited as the fleet surface being present.
      if (pages.length === 0) {
        throw new Error('site-index found no pages in docs/ — the sitemap page would ship empty.');
      }
      const changelogPath = path.join(docsDir, 'changelog.md');
      const changelog = fs.existsSync(changelogPath) ? fs.readFileSync(changelogPath, 'utf8') : '';
      const all = readReleases(changelog);
      // 🔴 Still throw on a changelog that parses to nothing: that is a broken file, not "no releases".
      if (all.length === 0) {
        throw new Error('site-index found no `## <version>` sections in docs/changelog.md.');
      }
      const status = readStatus(changelog);
      if (status.length === 0) {
        throw new Error('site-index: docs/changelog.md lost its opening status paragraph.');
      }
      // Newest first, as the changelog is written; only dated (published) releases are kept.
      const releases = all.filter((release) => release.date !== null);
      return {pages, releases, status};
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },

    async postBuild({content, outDir, siteConfig}) {
      const site = siteConfig.url.replace(/\/$/, '');
      // Docusaurus's own heading slug: lowercase, drop anything not alphanumeric/space/hyphen,
      // then spaces to hyphens. `2.0.0` -> `200`. A fragment cannot 404, so a slug that ever
      // drifted still lands the reader on the changelog page.
      //
      // Every item carries the <pubDate> written in its changelog heading; a release without one
      // never reaches this list (see readReleases). Zero items is a valid RSS 2.0 channel. There is
      // no <lastBuildDate>: it is optional, and the build time would claim a change on every deploy.
      const anchorFor = (version) =>
        version
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, '')
          .trim()
          .replace(/\s+/g, '-');

      const items = content.releases
        .map(
          (release) => `    <item>
      <title>NetCage ${escapeXml(release.version)}</title>
      <link>${site}/changelog#${escapeXml(release.anchor ?? anchorFor(release.version))}</link>
      <guid isPermaLink="false">netcage-${escapeXml(release.version)}</guid>
      <pubDate>${new Date(`${release.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(release.summary)}</description>
    </item>`,
        )
        .join('\n');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NetCage releases</title>
    <link>${site}/changelog</link>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Release notes for NetCage, the per-app Android firewall.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
      fs.writeFileSync(path.join(outDir, 'feed.xml'), xml, 'utf8');
    },
  };
};
