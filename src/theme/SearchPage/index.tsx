import React from 'react';
import Head from '@docusaurus/Head';
import SearchPage from './SearchPage';

/**
 * The local-search page, ejected beside this file on 2026-11-08 so a search term never reaches a
 * URL or a session recording, still writes `<meta property="robots">`, which no search engine reads
 * as a directive. This wrapper adds the real `name="robots"` tag; the page stays out of sitemap.xml
 * through the preset's `ignorePatterns` (SA-NETCAGE-005, 2026-11-06).
 *
 * No route props are forwarded: the page reads its query from history state and takes none.
 */
export default function SearchPageWrapper(): React.ReactElement {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchPage />
    </>
  );
}
