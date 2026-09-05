import siteConfig from '@generated/docusaurus.config';

/**
 * Analytics for the documentation site.
 *
 * Google Analytics is NOT here — Docusaurus's own `gtag` preset option handles it, and running a
 * second loader beside it would double every page view. This module carries the two destinations
 * the preset has no option for: Amplitude and Microsoft Clarity.
 *
 * 🔴 Every SDK is dynamically imported and gated on its own identifier. A missing identifier is not
 * an error — it is that destination switched off, and it then costs the reader zero bytes rather
 * than downloading a disabled SDK. With none configured this module does nothing at all, which is
 * the state the site shipped in until 2026-09-05.
 *
 * 🔴 The identifiers arrive as build-time `customFields`, injected from repository **Actions
 * variables**. They are public identifiers by design — a GA4 measurement id, an Amplitude API key
 * and a Clarity project id are all readable in any page that loads them — but this repository is
 * public, so they still never sit in source.
 *
 * 🔴 Collection here is disclosed in `docs/privacy.md` under "What does this documentation site
 * collect?". If this file gains or loses a destination, that section moves in the same commit.
 */

interface TelemetryFields {
  readonly amplitudeApiKey?: string;
  readonly clarityProjectId?: string;
}

const fields = (siteConfig.customFields ?? {}) as TelemetryFields;
const amplitudeApiKey = fields.amplitudeApiKey ?? '';
const clarityProjectId = fields.clarityProjectId ?? '';

/**
 * 🔴 A PROMISE, not a boolean.
 *
 * A boolean flag is still false when the first route update fires, because `init()` resolves
 * asynchronously — so the very first page view, the one every visitor generates, is the one that
 * gets dropped. Measured here on 2026-09-05: GA4 and Clarity both landed on a live page load while
 * Amplitude landed nothing, for exactly that reason.
 *
 * Holding the promise instead means an early page view is QUEUED behind init rather than discarded.
 * `null` means Amplitude is not configured at all, which is a different thing from not-ready-yet.
 */
let amplitudeReady: Promise<void> | null = null;
let started = false;

function start(): void {
  if (started || typeof window === 'undefined') return;
  started = true;

  if (amplitudeApiKey !== '') {
    amplitudeReady = import('@amplitude/analytics-browser')
      .then(async (amplitude) => {
        // 🔴 Await the init PROMISE, never just the call. `init()` returns before its destination
        // plugins attach, so any track() in that window is discarded with only a console warning —
        // measured on the product website as 1 dropped event in 88 loads.
        await amplitude.init(amplitudeApiKey, {
          // A docs site reads; it does not need form, element or attribution autocapture, and those
          // read text out of the page. Page views are emitted explicitly below.
          autocapture: false,
          trackingOptions: {ipAddress: false},
        }).promise;
      })
      .catch(() => {
        /* telemetry never breaks the page it measures */
      });
  }

  if (clarityProjectId !== '') {
    void import('@microsoft/clarity')
      .then(({default: clarity}) => {
        clarity.init(clarityProjectId);
      })
      .catch(() => {
        /* as above */
      });
  }
}

/**
 * Docusaurus calls this on every client-side route change, including the first render.
 *
 * The path is sent, never the full URL: this site has no query parameters that carry meaning, and
 * sending the whole location is how a search term or a token ends up in an analytics property.
 */
export function onRouteDidUpdate({location}: {location: {pathname: string}}): void {
  start();
  if (amplitudeReady === null) return;
  const path = location.pathname;
  void amplitudeReady
    .then(() => import('@amplitude/analytics-browser'))
    .then((amplitude) => {
      amplitude.track('page_viewed', {path});
    })
    .catch(() => {
      /* as above */
    });
}
