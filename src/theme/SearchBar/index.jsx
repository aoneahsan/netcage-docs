/*
 * Ejected from @easyops-cn/docusaurus-search-local 0.55.3 (MIT) on 2026-11-08 to keep search terms
 * out of URLs and recordings. On every update of that package, re-diff this file against the new
 * version's dist/client/client/theme/SearchBar/index.jsx.
 */
import React from "react";
import "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated";
import SearchBar from "./SearchBar";
import { DocsPreferredVersionContextProvider } from "@docusaurus/plugin-content-docs/client";
export default function SearchBarWrapper(props) {
    return (<DocsPreferredVersionContextProvider>
      <SearchBar {...props}/>
    </DocsPreferredVersionContextProvider>);
}
