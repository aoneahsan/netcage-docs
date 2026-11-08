/*
 * Ejected from @easyops-cn/docusaurus-search-local 0.55.3 (MIT) on 2026-11-08 to keep search terms
 * out of URLs and recordings. On every update of that package, re-diff this file against the new
 * version's dist/client/client/theme/hooks/useSearchQuery.js.
 *
 * What differs: the query lives in this history entry's state (`{ q }`), written with
 * `history.replace`, never in `location.search`. `generateSearchPageLink`, which built `?q=` links
 * and had no caller, is gone.
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useHistory, useLocation } from "@docusaurus/router";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { searchContextByPaths } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated";
// Links made before 2026-11-08 carried the query in this parameter. It is never read, only
// dropped from the address bar.
const SEARCH_PARAM_QUERY = "q";
const SEARCH_PARAM_CONTEXT = "ctx";
const SEARCH_PARAM_VERSION = "version";
const STATE_KEY_QUERY = "q";
function readQuery(state) {
    return typeof state?.[STATE_KEY_QUERY] === "string" ? state[STATE_KEY_QUERY] : "";
}
function useSearchQuery() {
    const isBrowser = useIsBrowser();
    const history = useHistory();
    const location = useLocation();
    const params = isBrowser ? new URLSearchParams(location.search) : null;
    const searchValue = isBrowser ? readQuery(location.state) : "";
    const searchContext = params?.get(SEARCH_PARAM_CONTEXT) || "";
    const searchVersion = params?.get(SEARCH_PARAM_VERSION) || "";
    return {
        searchValue,
        searchContext: searchContext &&
            Array.isArray(searchContextByPaths) &&
            searchContextByPaths.some((item) => typeof item === "string"
                ? item === searchContext
                : item.path === searchContext)
            ? searchContext
            : "",
        searchVersion,
        updateSearchPath: (searchValue) => {
            // The entry as it stands now, not as this render saw it: the previous keystroke's
            // replace may not have rendered yet.
            const current = history.location;
            const searchParams = new URLSearchParams(current.search);
            searchParams.delete(SEARCH_PARAM_QUERY);
            const search = searchParams.toString();
            const storedQuery = readQuery(current.state);
            // Until hydration finishes, the page holds the server render's empty query rather than
            // the reader's. Keep the one this entry already stores, so a reload brings it back.
            const query = isBrowser ? searchValue : storedQuery;
            if (query === storedQuery && current.search === (search ? `?${search}` : "")) {
                return;
            }
            history.replace({
                pathname: current.pathname,
                search,
                state: query ? { [STATE_KEY_QUERY]: query } : undefined,
            });
        },
        updateSearchContext: (value) => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set(SEARCH_PARAM_CONTEXT, value);
            history.replace({
                search: searchParams.toString(),
            });
        },
    };
}
export default useSearchQuery;
