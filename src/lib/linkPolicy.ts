/**
 * The one place this site decides what an outbound link does.
 *
 * Fleet rule §15: every link that LEAVES this origin opens in a new tab, and only the owner's own
 * products and profiles are do-follow — everything else third-party is `nofollow`.
 *
 * 🔴 It is a host AND path question, not a host question. `github.com` hosts everybody; only
 * `github.com/aoneahsan/*` is his. A host-only allow-list would hand do-follow to every repo on
 * GitHub the moment somebody links one.
 *
 * Consumed by `src/theme/MDXComponents.tsx` (every markdown link on every docs page) and by the
 * custom pages under `src/pages/`. Adding a link anywhere picks this up automatically; that is the
 * point of it living here rather than in the call sites.
 */

/** This site's own host. An absolute link to it is internal, not external. */
export const SITE_HOST = 'netcage-docs.aoneahsan.com';

/** Hosts wholly owned by the developer — the apex and every subdomain under it. */
const OWN_HOST_SUFFIX = 'aoneahsan.com';

/**
 * Shared hosts where only certain paths are his. Each entry is `host` plus the path prefix that
 * makes it his; anything else on that host is third-party.
 */
const OWN_HOST_PATHS: ReadonlyArray<{ host: string; pathPrefix: string }> = [
  { host: 'github.com', pathPrefix: '/aoneahsan' },
  { host: 'www.npmjs.com', pathPrefix: '/~aoneahsan' },
  { host: 'npmjs.com', pathPrefix: '/~aoneahsan' },
  { host: 'www.linkedin.com', pathPrefix: '/in/aoneahsan' },
  { host: 'linkedin.com', pathPrefix: '/in/aoneahsan' },
  { host: 'play.google.com', pathPrefix: '/store/apps/dev' },
];

export interface LinkPolicy {
  /** Always `_blank` — an external link never replaces the page the reader is on. */
  readonly target: '_blank';
  /** `noopener noreferrer`, plus `nofollow` when the destination is not the owner's. */
  readonly rel: string;
  /** True when the destination is one of the developer's own products or profiles. */
  readonly isOwn: boolean;
}

function isOwnDestination(url: URL): boolean {
  const host = url.hostname.toLowerCase();
  if (host === OWN_HOST_SUFFIX || host.endsWith(`.${OWN_HOST_SUFFIX}`)) {
    return true;
  }
  return OWN_HOST_PATHS.some(
    (entry) =>
      host === entry.host &&
      (url.pathname === entry.pathPrefix || url.pathname.startsWith(`${entry.pathPrefix}/`)),
  );
}

/**
 * Returns the policy for an outbound link, or `null` when the href is internal and should keep
 * Docusaurus's own client-side routing.
 *
 * Internal means: a relative href, a root-relative href, a fragment, a non-http scheme
 * (`mailto:`, `tel:`), or an absolute href pointing back at this very site.
 */
export function externalLinkPolicy(href: string | undefined): LinkPolicy | null {
  if (!href) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(href, `https://${SITE_HOST}`);
  } catch {
    return null;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return null;
  }
  if (url.hostname.toLowerCase() === SITE_HOST) {
    return null;
  }

  const isOwn = isOwnDestination(url);
  return {
    target: '_blank',
    rel: isOwn ? 'noopener noreferrer' : 'noopener noreferrer nofollow',
    isOwn,
  };
}
