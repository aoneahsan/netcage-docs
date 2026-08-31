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

/**
 * Every markdown table gets its own horizontally scrolling wrapper.
 *
 * 🔴 Docusaurus does NOT wrap MDX tables in anything, so `custom.css`'s
 * `.markdown > div:has(> table)` and `.markdown .tableWrapper` rules matched no element on any page
 * — the `overflow-x: auto` they carry had never applied, while the comment above them claimed
 * tables "never push the page sideways". Measured on the live site 2026-08-31: `/for-agents` at a
 * 320px viewport had a 400px table taking `document.scrollWidth` to 416, so the whole page scrolled
 * sideways on a small phone. `/faq`, which has no wide table, was clean at the same width.
 *
 * Wrapping here rather than switching the table to `display: block` keeps `width: 100%` table
 * layout intact on wide screens, and makes the CSS that was already written do what it says.
 */
function Table(props: ComponentProps<'table'>): ReactElement {
  return (
    <div className="tableWrapper">
      <table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  a: Anchor,
  table: Table,
};
