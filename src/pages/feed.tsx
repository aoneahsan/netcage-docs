import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {usePluginData} from '@docusaurus/useGlobalData';
import type {SiteIndex} from '../../plugins/site-index';

/**
 * The browsable half of the feed pair, alongside the generated `/feed.xml`.
 *
 * Both are built from the changelog, so subscribing and reading the page can never disagree about
 * what shipped.
 */
export default function FeedPage(): React.ReactElement {
  const {releases} = usePluginData('site-index') as SiteIndex;

  return (
    <Layout title="Release feed" description="Every NetCage release, newest first, with an RSS feed.">
      <main className="container margin-vert--lg">
        <h1>Release feed</h1>
        <p>
          Subscribe with <a href="/feed.xml">feed.xml</a>, or read the full notes on the{' '}
          <Link to="/changelog">changelog</Link>.
        </p>

        <ul>
          {releases.map((release) => (
            <li key={release.version} style={{marginBottom: '1rem'}}>
              <Link to="/changelog">
                <strong>NetCage {release.version}</strong>
              </Link>
              {release.summary ? (
                <div style={{opacity: 0.75, fontSize: '0.9em'}}>{release.summary}</div>
              ) : null}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
