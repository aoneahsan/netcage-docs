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

function readPages(docsDir) {
  return fs
    .readdirSync(docsDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const raw = fs.readFileSync(path.join(docsDir, name), 'utf8');
      const block = FRONT_MATTER.exec(raw)?.[1] ?? '';
      const base = name.replace(/\.md$/, '');
      const slugField = field(block, 'slug');
      return {
        // `index.md` carries `slug: /`, and routeBasePath is '/', so the route is the bare name.
        slug: slugField || (base === 'index' ? '/' : `/${base}`),
        title: field(block, 'title') || base,
        description: field(block, 'description'),
        tags: (field(block, 'tags').replace(/^\[|\]$/g, '').split(',').map((t) => t.trim()).filter(Boolean)),
        position: Number(field(block, 'sidebar_position') || '999'),
      };
    })
    .sort((a, b) => a.position - b.position);
}

/**
 * Each `## <version>` in the changelog becomes one feed item. The summary is the first non-empty
 * paragraph under it, which is written as a standalone sentence precisely so it can be lifted.
 */
function readReleases(changelog) {
  const releases = [];
  const sections = changelog.split(/^## /m).slice(1);
  for (const section of sections) {
    const [heading, ...rest] = section.split('\n');
    const body = rest.join('\n');
    const summary = body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p.length > 0 && !p.startsWith('#'));
    releases.push({
      version: heading.trim(),
      summary: (summary ?? '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim(),
    });
  }
  return releases;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = function siteIndexPlugin(context) {
  const docsDir = path.join(context.siteDir, 'docs');

  return {
    name: 'site-index',

    async loadContent() {
      const pages = readPages(docsDir);
      // 🔴 Throw rather than emit an empty index. A sitemap page that silently lists nothing looks
      // exactly like one that is working, and would be cited as the fleet surface being present.
      if (pages.length === 0) {
        throw new Error('site-index found no pages in docs/ — the sitemap page would ship empty.');
      }
      const changelogPath = path.join(docsDir, 'changelog.md');
      const releases = fs.existsSync(changelogPath)
        ? readReleases(fs.readFileSync(changelogPath, 'utf8'))
        : [];
      if (releases.length === 0) {
        throw new Error('site-index found no releases in docs/changelog.md — feed.xml would be empty.');
      }
      return {pages, releases};
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },

    async postBuild({content, outDir, siteConfig}) {
      const site = siteConfig.url.replace(/\/$/, '');
      const items = content.releases
        .map(
          (release) => `    <item>
      <title>NetCage ${escapeXml(release.version)}</title>
      <link>${site}/changelog</link>
      <guid isPermaLink="false">netcage-${escapeXml(release.version)}</guid>
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
