import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

/**
 * NetCage documentation site.
 *
 * Deployed to GitHub Pages on the custom domain in `static/CNAME`. The domain is derived from the
 * product's own domain, `netcage.aoneahsan.com`, by the fleet rule for a subdomain project:
 * `<sub>-docs.<base>.<tld>`. The product site is not live yet — that is a separate session — so the
 * derivation is recorded here rather than probed green.
 *
 * There is no Firebase here and there must never be: a docs site is not a Firebase app.
 */

/** Analytics is optional and env-gated. No key in the environment means the plugin is not loaded. */
const gtag = process.env.GOOGLE_ANALYTICS_ID;

const config: Config = {
  title: 'NetCage',
  tagline: 'Cage any app’s internet',
  favicon: 'img/logo.png',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://netcage-docs.aoneahsan.com',
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'netcage-docs',
  trailingSlash: false,

  // The build IS the link checker. A page that links to something that does not exist is a defect,
  // not a warning to scroll past.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/netcage-docs/tree/main/',
          showLastUpdateTime: true,
        },
        // No blog: this is product documentation. Release notes live on the Changelog page.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          // 🔴 Only real pages. The generated sitemap carried 47 URLs: 13 documents and 34 pieces
          // of chrome - 32 tag pages, /tags and /search - each ~10 KB of navigation with no unique
          // prose. Submitting 34 empty URLs beside 13 real ones is how a site earns
          // "Crawled - currently not indexed" on the pages that matter.
          ignorePatterns: ['/tags/**', '/tags', '/search'],
        },
        ...(gtag ? {gtag: {trackingID: gtag, anonymizeIP: true}} : {}),
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Supplies the browsable /sitemap page and the RSS /feed.xml - the two fleet surfaces
    // Docusaurus does not generate here, since this site deliberately has no blog.
    './plugins/site-index',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  // 🔴 Structured data. Until 2026-08-28 every page carried only Docusaurus's default
  // `BreadcrumbList` — nothing said what the product actually is. `SoftwareApplication` is the
  // schema an Android app's documentation should emit, and it is what lets a search or answer
  // engine state the platform and price without inferring them.
  headTags: [
    /*
     * 🔴 Keep the github.io copy out of search results.
     *
     * The site is built for `netcage-docs.aoneahsan.com`, so `baseUrl` is '/' — which means the copy
     * GitHub also serves at `aoneahsan.github.io/netcage-docs/` loads its HTML but 404s every asset,
     * while its canonical and og:url point at the custom domain. An unstyled duplicate with a
     * canonical to a different host is the worst of both readings.
     *
     * 🔴 WHAT THIS DOES AND DOES NOT COVER, precisely — because a partial mitigation described as a
     * fix is worse than none:
     *   ✅ Googlebot renders JavaScript, so it sees the noindex. That is the highest-volume crawler
     *      and the one that would otherwise index the duplicate.
     *   ❌ GPTBot, ClaudeBot, PerplexityBot and CCBot run NO JavaScript. They do not see this at all.
     *   ❌ A robots.txt cannot help either: crawlers read it only at the ORIGIN root, and
     *      `aoneahsan.github.io/robots.txt` is not ours — it 404s.
     *
     * 🔴 UPDATE, same day, measured after deploying: registering the Pages custom domain
     * (`gh api -X PUT .../pages -f cname=...`) made GitHub start 301-ing the github.io path to
     * `netcage-docs.aoneahsan.com` IMMEDIATELY — it did not wait for the DNS CNAME, which is what
     * the first version of this comment assumed. So the redirect, not this script, is what actually
     * closes the exposure, and it closes it for the AI crawlers too.
     *
     * This guard therefore stays as defence in depth rather than as the mitigation: it costs nothing
     * and it is what would cover a future host that serves the build without that redirect (a
     * preview deploy, a mirror, a reverted Pages setting).
     *
     * ⚠️ The redirect has a cost worth stating: its target does not resolve yet, so the docs site is
     * unreachable at every address until the CNAME exists. Nothing user-facing regressed — the app
     * and all three repos only ever linked to the custom domain — but it does make that one DNS
     * record the thing standing between offline and live. `netcage/docs/MANUAL-TASKS.md` row 15.
     */
    {
      tagName: 'script',
      innerHTML: `(function () {
        if (location.hostname !== 'netcage-docs.aoneahsan.com' && location.hostname !== 'localhost') {
          var meta = document.createElement('meta');
          meta.name = 'robots';
          meta.content = 'noindex, nofollow';
          document.head.appendChild(meta);
        }
      })();`,
      attributes: {},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'NetCage',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Android 8.0+',
        description:
          'A per-app Android firewall. Cut any installed app off from the internet — foreground ' +
          'and background, Wi-Fi and mobile — with one switch.',
        url: 'https://netcage.aoneahsan.com',
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
      }),
    },
  ],

  themeConfig: {
    image: 'img/netcage-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for NetCage, a per-app Android firewall that cuts any installed ' +
          'app’s internet access on Wi-Fi and mobile.',
      },
      // Both were absent from every page. `og:type` is what makes a share card render as an
      // article rather than falling back to a bare link, and `og:site_name` is what puts the
      // product's name on it.
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'NetCage documentation'},
    ],
    navbar: {
      title: 'NetCage',
      logo: {
        alt: 'NetCage',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {href: 'https://netcage.aoneahsan.com', label: 'Website', position: 'right'},
        {
          href: 'https://github.com/aoneahsan/netcage-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'How it works', to: '/how-it-works'},
            {label: 'Privacy', to: '/privacy'},
            {label: 'Limitations', to: '/limitations'},
          ],
        },
        {
          title: 'NetCage',
          items: [
            {label: 'Website', href: 'https://netcage.aoneahsan.com'},
            {label: 'Changelog', to: '/changelog'},
            {label: 'FAQ', to: '/faq'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'aoneahsan.com', href: 'https://aoneahsan.com'},
            {label: 'GitHub', href: 'https://github.com/aoneahsan/netcage-docs'},
            {label: 'For agents', to: '/for-agents'},
          ],
        },
        {
          // The fleet standard: all four discovery surfaces, reachable from every page.
          title: 'Index',
          items: [
            {label: 'Sitemap', to: '/sitemap'},
            {label: 'sitemap.xml', href: 'https://netcage-docs.aoneahsan.com/sitemap.xml'},
            {label: 'Release feed', to: '/feed'},
            {label: 'feed.xml', href: 'https://netcage-docs.aoneahsan.com/feed.xml'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['kotlin', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
