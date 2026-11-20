/**
 * Every place NetCage is released — the ONLY place a store or surface URL lives in this docs site
 * (standard aoneahsan-cccs-platform-links). Each surface passed its release proof on `verified`:
 * the website and this site answered 200. The Android app is not on Google Play yet, so it is not listed.
 */
export type PlatformId = 'web' | 'docs';

export interface Platform {
  id: PlatformId;
  /** Store or surface name (a proper name, not copy). */
  name: string;
  href: string;
  /** What this surface is for, in NetCage's words. */
  title: string;
  text: string;
  cta: string;
  primary?: boolean;
  verified: string;
}

export const PLATFORMS: readonly Platform[] = [
  {id: 'web', name: 'NetCage website', href: 'https://netcage.aoneahsan.com', title: 'The website', text: 'What NetCage does on your Android phone, the plans, and your account.', cta: 'Open the website', primary: true, verified: '2026-11-20'},
  {id: 'docs', name: 'Documentation', href: 'https://netcage-docs.aoneahsan.com', title: 'These docs', text: 'How the per-app firewall works, what it keeps private, and its limits.', cta: 'Read the docs', verified: '2026-11-20'},
];

export const APPS_PAGE = {
  title: 'Get NetCage',
  description: 'Every place NetCage is released: the website and these docs.',
  lead: 'The Android app is on its way to Google Play. Until then, read about it on the website and keep these docs a tab away.',
} as const;

/** This site is the docs surface. */
export const CURRENT_SURFACE: PlatformId = 'docs';
export const OTHER_PLATFORMS: readonly Platform[] = PLATFORMS.filter((platform) => platform.id !== CURRENT_SURFACE);
export const PRIMARY_PLATFORM: Platform = PLATFORMS.find((platform) => platform.primary) ?? PLATFORMS[0];
export function platformHref(id: PlatformId): string {
  const found = PLATFORMS.find((platform) => platform.id === id);
  if (!found) throw new Error(`Unknown platform: ${id}`);
  return found.href;
}
/** `/apps` changes only when this list does: its sitemap date is the newest proof date. */
export const APPS_LASTMOD: string = PLATFORMS.map((platform) => platform.verified).sort().at(-1) ?? '2026-11-20';
