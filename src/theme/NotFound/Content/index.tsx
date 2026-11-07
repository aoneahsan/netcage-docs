import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';

import NewTabHint from '@site/src/components/NewTabHint';
import {externalLinkPolicy} from '@site/src/lib/linkPolicy';

import styles from './styles.module.css';

/** The website's contact page, where a reader can report the link that brought them here. */
const CONTACT_URL = 'https://netcage.aoneahsan.com/contact';

/**
 * The body of the docs 404, ejected from theme-classic's `NotFound/Content`.
 *
 * The stock text told the reader to find "the owner of the site that linked you", which leaves them
 * with nowhere to go. This version keeps the theme's markup and grid, and gives two exits instead:
 * the docs home, and the NetCage team. The theme's `NotFound` page still wraps it in `Layout`, so
 * only what sits inside the page changes.
 *
 * The ids are this site's own rather than the theme's `theme.NotFound.*`: `NotFound` still passes
 * `theme.NotFound.title`, with the stock message, to its page metadata, and one id must not carry
 * two different messages.
 */
export default function NotFoundContent({className}: Props): ReactNode {
  // The markdown link override never sees a theme component, so the outbound policy is applied by
  // hand, as on the custom pages. Non-null: the contact page is on a different host from this site.
  const contactPolicy = externalLinkPolicy(CONTACT_URL)!;

  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate id="netcage.notFound.heading" description="The heading of the docs 404 page">
              That page isn’t in the docs
            </Translate>
          </Heading>
          <p>
            <Translate
              id="netcage.notFound.cause"
              description="The docs 404 page: why the page could not be found">
              The link may be old, or the address may have a typo.
            </Translate>
          </p>
          <p>
            <Translate
              id="netcage.notFound.next"
              description="The docs 404 page: the two ways forward, which the buttons below offer">
              Start from the docs home, or tell the NetCage team which link brought you here.
            </Translate>
          </p>
          <div className={styles.exits}>
            <Link className="button button--primary" to="/">
              <Translate
                id="netcage.notFound.home"
                description="The docs 404 page: the button back to the docs home">
                Go to the docs home
              </Translate>
            </Link>
            <a
              className="button button--outline button--primary"
              href={CONTACT_URL}
              target={contactPolicy.target}
              rel={contactPolicy.rel}>
              <Translate
                id="netcage.notFound.contact"
                description="The docs 404 page: the button to the website's contact page">
                Contact
              </Translate>
              <NewTabHint />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
