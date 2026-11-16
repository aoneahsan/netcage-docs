# Packages — NetCage docs

Last Updated: 2026-11-16

Node 26.13.1 LTS (`.nvmrc`, `engines.node >=26.13.1`), Yarn 4.18.1 (`packageManager`), node-modules linker,
`npmMinimalAgeGate: 0`. Upgraded with `npx -y npm-check-updates -u`, latest stable. This file is excluded from the
published site (`docusaurus.config.ts` → docs `exclude`).

| Package | Range | Kind | Purpose |
|---|---|---|---|
| `@docusaurus/core`, `faster`, `plugin-content-docs`, `preset-classic`, `theme-common` | 3.10.2 | runtime | Site generator, Rspack build, docs plugin and theme |
| `@easyops-cn/docusaurus-search-local` | ^0.55.3 | runtime | Offline search |
| `@amplitude/analytics-browser`, `@microsoft/clarity` | ^2.49.2 / ^1.0.2 | runtime | Analytics, on only when the build-time ids are set |
| `@mdx-js/react` | ^3.1.1 | runtime | MDX rendering |
| `clsx` | ^2.1.1 | runtime | Class names |
| `prism-react-renderer` | ^2.4.1 | runtime | Code highlighting themes |
| `react`, `react-dom` | ^19.3.1 | runtime | UI runtime |
| `strata-storage` | 3.1.4 | runtime | The only storage layer |
| `@docusaurus/module-type-aliases`, `@docusaurus/types` | 3.10.2 | dev | Types for `@site/*`, `@theme/*` and the config |
| `@types/react` | ^19.3.0 | dev | React types |
| `typescript` | ~7.0.2 | dev | `yarn typecheck`; no typescript-eslint or Capacitor here, so the fleet's 6.0 pin does not apply |

## Notes

- The build runs with `NODE_OPTIONS=--no-experimental-webstorage`: Docusaurus' SSG loads through the `eval` package,
  which copies every global and touches Node 26's disabled `localStorage` (ExperimentalWarning). Re-check on each
  Docusaurus minor; drop the flag when a build without it prints nothing.
- `@docusaurus/tsconfig` was removed: it sets `baseUrl`, which TypeScript 7 removed (TS5102). `tsconfig.json` carries
  its options without `baseUrl`; relative `paths` still resolve.

## History

- 2026-11-16: Node 26.13.1 pin (`engines.node` was `>=20.0`); Yarn 4.10.3 → 4.18.1, because 4.10.3's built-in
  TypeScript patch fails on TS 7 (`ENOENT … typescript/lib/_tsc.js`). Yarn 4.18 wrote `enableScripts: true` and
  `approvedGitRepositories` into `.yarnrc.yml`. TypeScript 6.0 → 7.0.2, React 19.3.1, Amplitude 2.49.2. `yarn dedupe`
  collapsed a stale `@types/react@*` 19.2.18 entry that clashed with 19.3.0 in `yarn typecheck`. A planted type error
  in `sidebars.ts` fails `yarn typecheck`; the build prints no warning.
