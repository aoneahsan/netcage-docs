import React, {useCallback, useEffect, useRef, useState, type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';

import NewTabHint from '@site/src/components/NewTabHint';
import {externalLinkPolicy} from '@site/src/lib/linkPolicy';
import {readSync, writeSync} from '@site/src/lib/storage';

import styles from './styles.module.css';

/** The website's binding policy pages: the bar binds a docs reader to them. */
const PRIVACY_URL = 'https://netcage.aoneahsan.com/privacy';
const TERMS_URL = 'https://netcage.aoneahsan.com/terms';

/** When this browser first showed the bar. Marked the moment it shows, never on dismissal. */
const SEEN_KEY = 'notice.seen';

/** Leaves by itself after 10 seconds; hovering or focusing it holds the timer (WCAG 2.2.1). */
const AUTO_CLOSE_MS = 10_000;

/**
 * The first-visit bar, the docs twin of the website's: one quiet bar at the bottom, `role="status"`,
 * one sentence, the line that says the site counts how it is used, and Okay. Never a dialog: no
 * scrim, no focus trap, no heading, and the page stays usable under it.
 *
 * It is also the telling for this site's analytics, which run from the first visit with no switch.
 * The docs have no accounts, so the browser's mark is the whole once-only rule.
 */
export default function FirstVisitNotice(): ReactNode {
  const [open, setOpen] = useState(false);

  // Client only: the server render never shows it, so a reader never sees it flash and vanish.
  useEffect(() => {
    if (readSync<string | null>(SEEN_KEY, null) !== null) return;
    writeSync(SEEN_KEY, new Date().toISOString());
    setOpen(true);
  }, []);

  return open ? <NoticeBar onClose={() => setOpen(false)} /> : null;
}

function NoticeBar({onClose}: {readonly onClose: () => void}): ReactNode {
  const barRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | undefined>(undefined);

  const hold = useCallback((): void => {
    window.clearTimeout(timerRef.current);
    timerRef.current = undefined;
  }, []);
  const arm = useCallback((): void => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(onClose, AUTO_CLOSE_MS);
  }, [onClose]);

  useEffect(() => {
    arm();
    return hold;
  }, [arm, hold]);

  return (
    <div className={styles.wrap}>
      <div
        ref={barRef}
        role="status"
        aria-live="polite"
        className={styles.bar}
        onPointerEnter={hold}
        onPointerLeave={() => {
          if (!barRef.current?.contains(document.activeElement)) arm();
        }}
        onFocus={hold}
        onBlur={(event) => {
          if (!barRef.current?.contains(event.relatedTarget as Node | null)) arm();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onClose();
        }}>
        <p className={styles.text}>
          <NoticeSentence />
          <span className={styles.counts}>
            <Translate
              id="netcage.notice.counts"
              description="The first-visit bar: the second line, that the docs count how they are used">
              NetCage counts how these docs are used, to make them better.
            </Translate>
          </span>
        </p>
        <button type="button" className="button button--primary button--sm" onClick={onClose}>
          <Translate id="netcage.notice.okay" description="The first-visit bar: its one button">
            Okay
          </Translate>
        </button>
      </div>
    </div>
  );
}

/** The one sentence, with both links placed by name so a translation may order them freely. */
function NoticeSentence(): ReactNode {
  return (
    <span>
      <Translate
        id="netcage.notice.body"
        description="The first-visit bar: the one sentence; {privacy} and {terms} are the two links"
        values={{
          privacy: (
            <OwnLink href={PRIVACY_URL}>
              <Translate id="netcage.notice.privacyLink" description="The first-visit bar: the privacy link">
                Privacy Policy
              </Translate>
            </OwnLink>
          ),
          terms: (
            <OwnLink href={TERMS_URL}>
              <Translate id="netcage.notice.termsLink" description="The first-visit bar: the terms link">
                Terms of Service
              </Translate>
            </OwnLink>
          ),
        }}>
        {'By using NetCage, you agree to our {privacy} and {terms}.'}
      </Translate>
    </span>
  );
}

/** A link to the NetCage website: a new tab with its spoken hint, through the site's link policy. */
function OwnLink({href, children}: {readonly href: string; readonly children: ReactNode}): ReactNode {
  // Non-null: both URLs are on the website, a different host from this site.
  const policy = externalLinkPolicy(href)!;
  return (
    <a className={styles.link} href={href} target={policy.target} rel={policy.rel}>
      {children}
      <NewTabHint />
    </a>
  );
}
