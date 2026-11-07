import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';

/**
 * The words a screen reader hears inside every link that opens a new tab.
 *
 * WCAG G201: a reader who lands in a new tab without warning has lost their Back button. The hint is
 * visually hidden and sits INSIDE the anchor, so it joins the link's accessible name ("Contact (opens in a
 * new tab)"). The NetCage website's link component says the same five words, so both sites read alike.
 *
 * The theme's external-link icon (`src/theme/Icon/ExternalLink`) carries the same id as its label, for the
 * navbar and footer links that the theme draws itself.
 */
export default function NewTabHint(): ReactNode {
  return (
    <span className="visually-hidden">
      {' '}
      <Translate
        id="netcage.link.opensInNewTab"
        description="Visually hidden, inside every link that opens a new tab">
        (opens in a new tab)
      </Translate>
    </span>
  );
}
