import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';
import type {Props} from '@theme/EditThisPage';

import NewTabHint from '@site/src/components/NewTabHint';

/**
 * The theme's "Edit this page" link, ejected only to carry the new-tab hint.
 *
 * It opens the page's source on GitHub in a new tab, and it was the one outbound link on every docs page
 * that did not say so. The markup, class and label are the theme's own.
 */
export default function EditThisPage({editUrl}: Props): ReactNode {
  return (
    <Link to={editUrl} className={ThemeClassNames.common.editThisPage}>
      <IconEdit />
      <Translate id="theme.common.editThisPage" description="The link label to edit the current page">
        Edit this page
      </Translate>
      <NewTabHint />
    </Link>
  );
}
