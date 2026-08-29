import type { ComponentProps, ReactElement } from 'react';
import MDXComponents from '@theme-original/MDXComponents';

import { externalLinkPolicy } from '@site/src/lib/linkPolicy';

/**
 * Anchor override for every markdown link on every docs page.
 *
 * Docusaurus maps markdown `[text](href)` to this component, so applying the outbound-link policy
 * here covers all fourteen pages at once — and covers the next link somebody writes, which a set of
 * hand-edited anchors would not. Internal links fall through to the original, keeping Docusaurus's
 * client-side routing and its build-time broken-link checking.
 *
 * Policy lives in `src/lib/linkPolicy.ts`; this file only applies it.
 */

const OriginalAnchor = MDXComponents.a as (props: ComponentProps<'a'>) => ReactElement;

function Anchor(props: ComponentProps<'a'>): ReactElement {
  const policy = externalLinkPolicy(props.href);

  if (!policy) {
    return <OriginalAnchor {...props} />;
  }

  // A plain anchor rather than the themed Link: Docusaurus's Link is for in-app navigation, and an
  // external destination is a full page load in a new tab by definition.
  return <a {...props} target={policy.target} rel={policy.rel} />;
}

export default {
  ...MDXComponents,
  a: Anchor,
};
