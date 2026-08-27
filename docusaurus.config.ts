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
        },
        ...(gtag ? {gtag: {trackingID: gtag, anonymizeIP: true}} : {}),
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
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
