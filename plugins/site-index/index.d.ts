/**
 * Types for the `site-index` plugin's global data.
 *
 * The plugin itself is CommonJS `.js` because Docusaurus resolves plugin paths with `require` and
 * cannot load an uncompiled `.ts` module. The types live here so the two pages that consume the
 * data (`/sitemap` and `/feed`) stay type-checked.
 */
export interface SitePage {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly position: number;
}

export interface Release {
  readonly version: string;
  /** ISO date from the changelog heading; only published releases are in the data. */
  readonly date: string;
  readonly summary: string;
}

export interface SiteIndex {
  readonly pages: readonly SitePage[];
  readonly releases: readonly Release[];
  /** The changelog's opening paragraph, shown while no release is published. */
  readonly status: string;
}

declare const siteIndexPlugin: (context: unknown) => unknown;
export default siteIndexPlugin;
