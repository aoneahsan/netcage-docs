import React, {type ReactNode} from 'react';

import FirstVisitNotice from '@site/src/components/FirstVisitNotice';

/**
 * The site's root, wrapped only to carry the first-visit bar. Root stays mounted across client-side
 * navigation, so the bar lives through page changes until it closes or its timer ends.
 */
export default function Root({children}: {readonly children: ReactNode}): ReactNode {
  return (
    <>
      {children}
      <FirstVisitNotice />
    </>
  );
}
