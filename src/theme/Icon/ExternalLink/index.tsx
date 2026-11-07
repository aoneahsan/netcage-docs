import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/Icon/ExternalLink';

import styles from './styles.module.css';

/**
 * The theme's external-link icon, ejected for one reason: its label.
 *
 * The navbar and footer draw this icon after every link that leaves the site, and its `aria-label` is how
 * those links announce the new tab. The stock label reads "(opens in new tab)"; this one uses the words
 * every other new-tab link on both NetCage sites uses, under the same id as `src/components/NewTabHint`.
 * The sprite reference and the size are the theme's own.
 */
export default function IconExternalLink({width = 13.5, height = 13.5}: Props): ReactNode {
  return (
    <svg
      width={width}
      height={height}
      aria-label={translate({
        id: 'netcage.link.opensInNewTab',
        message: '(opens in a new tab)',
        description: 'Visually hidden, inside every link that opens a new tab',
      })}
      className={styles.iconExternalLink}>
      <use href="#theme-svg-external-link" />
    </svg>
  );
}
