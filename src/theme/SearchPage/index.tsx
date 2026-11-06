import React, {type ComponentProps} from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';

/**
 * The local-search page writes `<meta property="robots">`, which no search engine reads as a
 * directive. This wrapper adds the real `name="robots"` tag; the page stays out of sitemap.xml
 * through the preset's `ignorePatterns` (SA-NETCAGE-005, 2026-11-06).
 */
export default function SearchPageWrapper(props: ComponentProps<typeof SearchPage>): React.ReactElement {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchPage {...props} />
    </>
  );
}
