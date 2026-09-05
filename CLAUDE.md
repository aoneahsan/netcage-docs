# netcage-docs — CLAUDE.md

> Mirror: `AGENTS.md` — keep byte-identical except this header block.

**Last Updated:** 2026-09-05

The **public** documentation site for NetCage, a per-app Android firewall. Docusaurus 3.10.2, React 19,
TypeScript ~6, yarn 4, GitHub Pages. 15 docs pages plus two custom pages (`/sitemap`, `/feed`).

`README.md` is the working guide — local dev, the front-matter contract, the two content rules. **This file
carries only what a fresh session must hold before its first edit.** Do not restate the README here.

## 🔴 This repo is PUBLIC. The app repo is PRIVATE.

`github.com/aoneahsan/netcage` (the app) and `netcage-web` (the website) are both **private**. This one is
public, and that asymmetry is the standard, not an oversight.

**Nothing from those repos may be copied here** — no secret, no key, no credential, no internal task record,
no owner filesystem path, no private-tooling name. A leak here is public the moment it is pushed.

- Never name the owner's private tooling (the file-storage/email provider) — say "the developer's own file
  storage". `docs/privacy.md` already does; keep it that way.
- Never cite a path inside the app repo (`netcage/docs/…`). Say "the app repo's task record".
- Sweep before every commit: `git ls-files` for `.env`, key/token shapes, `D:/work`, `C:/Users`.
- There is deliberately no `docs/MANUAL-TASKS.md` in this repo. Do not create one — it would ship publicly.

## Single authority for what the app actually does

**The app repo is the source of truth. This site describes it; it never decides it.** Before writing any
claim about behaviour, check it against the app:

| Claim about | Check against |
|---|---|
| A permission and its justification | `netcage` → `config/release-permissions.txt` (18 entries, each with its reason) |
| A UI label, menu path or message | `netcage` → `app/src/main/res/values/strings.xml` — quote it **verbatim** |
| What is collected and shared | `netcage` → `docs/play-store/DATA-SAFETY.md` + `DECLARATIONS.md` (they are a pair) |

🔴 **A menu path invented here is worse than a page that omits it.** (`README.md` states this too.)

### Facts that have already gone stale once — re-check before repeating them

- **There is no AdMob, no ad SDK, no ad request and no consent framework.** The ad slot shows a promotion of
  the developer's other apps, **bundled in the app**: it makes no network request and reads no advertising
  identifier. Removed 2026-08-27. On 2026-08-28 four lines in `docs/privacy.md`, one in `docs/for-agents.md`
  and one in `docs/how-it-works.md` were still describing the removed world — including an
  *"Ad privacy options"* Settings control that exists in no build. Fixed; do not reintroduce.
  ⚠️ The advertising **ID** is still read, by Firebase Analytics, for **analytics only** — `privacy.md`
  lines about that are correct and must stay.
- **`netcage-ai` was deleted.** `netcage` is the only Firebase project. Zero references belong here.
- **Sign-in is Google-only**, through Credential Manager. No password, no email sign-up.
- **Push is receive-only** — the app subscribes and routes taps; it sends nothing.
- **The root engine has never run on rooted hardware.** It ships opt-in and labelled experimental, and every
  page that mentions it must keep saying so.
- **Never frame NetCage as an ad blocker or content blocker** — Play's Device and Network Abuse policy. It
  does no domain, hosts, DNS or content filtering. `docs/for-agents.md` holds the correction table.

## Two mechanisms that do not defend themselves

1. 🔴 **The FAQ's `FAQPage` JSON-LD is HAND-MAINTAINED, not generated** (`docs/faq.md`, in `<head>`).
   Editing an answer does **not** update it. Change an answer → change its `text` in the same commit.
   Its comment used to claim the two "cannot disagree"; they did — three answers were truncated
   mid-sentence at a markdown line break and one carried raw `**`. Keep every `text` plain prose.
2. **Outbound-link policy lives in `src/lib/linkPolicy.ts`**, applied to every markdown link by
   `src/theme/MDXComponents.tsx`. Links leaving this origin open in a new tab; only the owner's own
   products and profiles are do-follow. It is a host **and path** question — `github.com/aoneahsan/*` is
   his, the rest of `github.com` is not. A React page outside MDX applies it by hand (`src/pages/sitemap.tsx`).

## Domain and deploy

`netcage-docs.aoneahsan.com`, pinned by `static/CNAME`; `url`/`baseUrl` in `docusaurus.config.ts` match it.
Derived from the product site `netcage.aoneahsan.com` per the fleet `<sub>-docs.<base>.<tld>` rule.

**The site is LIVE** on that domain since 2026-08-31, with a valid certificate and Pages
**enforce-HTTPS** on. `aoneahsan.github.io/netcage-docs/` answers **301** to the custom domain, so no
duplicate copy is indexable.

**Analytics are wired** (2026-09-05). Three destinations, matching the fleet standard: GA4 through the
`gtag` preset option, and Amplitude + Clarity through `src/clientModules/telemetry.ts`. Every id arrives
as a build-time `customField` from a repository **Actions variable** — they are public identifiers by
design, but this repo is public, so they still never sit in source. A missing id switches that
destination off and costs the reader zero bytes; with none set this module does nothing at all.

🔴 **Amplitude holds a PROMISE, not a boolean.** `init()` resolves asynchronously, so a ready
*flag* is still `false` when the first route update fires — and that is the one page view every visitor
generates. Measured here on 2026-09-05: GA4 and Clarity both landed on a live page load while Amplitude
landed **nothing**, then **two** once the promise was held and the early view queued behind it.
Collection here is disclosed in `docs/privacy.md` → "What does this documentation site collect?"; if this
module gains or loses a destination, that section moves in the same commit.

🔴 **`i18n.defaultLocale` is `en-GB`, and it is a DATE setting as much as a language one.** That tag
is what Docusaurus hands `Intl`, so a bare `en` resolved to US conventions and every page footer read
*"Sep 5, 2026"* until 2026-09-05 — on a site whose Story Bible has specified `en-GB` since GATE 1. It also
reaches `<html lang>`. The search plugin's lunr stemmer stays **pinned to `en`**: a stemmer is a property
of the language, not the region, and `en-GB` is not one it ships. There is still exactly one language and
no `i18n/` tree.

Deploy is `.github/workflows/deploy-pages.yml` on push to `main` — **GitHub Pages only, never Firebase**.
There is no `deploy` script in `package.json` on purpose: `docusaurus deploy` would push a `gh-pages` branch
outside the Actions flow and give the site two deployment paths.

## Gates

`yarn typecheck && yarn build` — **zero warnings**. The build **is** the link checker:
`onBrokenLinks`, `onBrokenAnchors`, `onDuplicateRoutes` and both markdown hooks are all `'throw'`.
`yarn serve` afterwards to check the real build. Test light + dark and 320→1920.

The `site-index` plugin fails closed — it throws when the page or release list is empty, so a generator that
silently emits nothing cannot pass.

🔴 **Sweep before every commit** — this repository is public:
`git ls-files | grep -iE '(^|/)\.env$|secret|credential|token|\.pem$|\.jks$|\.keystore$|\.p8'` must come
back empty, and no diff may carry a local filesystem path or the name of a private tool.

## Git

Remote **`o`**, branch `main`, **direct push — no PRs** (own project). ONE commit per prompt; explicit paths,
never `add -A`; never stash. Before the first edit: `git fetch o main`, `git status --short`,
`git rev-list --left-right --count o/main...HEAD` (expect two zeros). After: stage → commit → fetch → merge
if behind → push → re-check two zeros.

⚠️ A direct push here can **silently bypass** the repo's review ruleset via the Repository-admin role with no
flag passed. Read the push output and quote `Bypassed rule violations` when it appears — never report it as a
clean push. Never `--force`, never `--admin`.

## Fixed paths

Working guide `README.md` · contribution rules `CONTRIBUTING.md` (states the repo carries **no licence**, so
the content is the author's copyright by default — an open owner decision) · content `docs/*.md` ·
custom pages `src/pages/` · generator `plugins/site-index/` · crawler surfaces `static/robots.txt`,
`static/llms.txt`, `static/CNAME`.

## Links

| | |
|---|---|
| This site | **https://netcage-docs.aoneahsan.com — LIVE** |
| Product site | **https://netcage.aoneahsan.com — LIVE** |
| App repo | `github.com/aoneahsan/netcage` — **PRIVATE**, do not link it from these pages |
| This repo | `github.com/aoneahsan/netcage-docs` — public |

**Context verification:** 2026-09-05 (10-day cadence). The site went live on 2026-08-31 and was verified
over its real domain that day: 16 sitemap URLs all 200, plus `robots.txt`, `llms.txt`, `/sitemap` and
`/feed`, and a 64-combination browser pass that found and fixed one real defect (a wide table scrolling
the whole page sideways at 320 px). The 2026-09-05 content pass adds the Cage Packs page, taking the
sitemap to 17, confirmed 200 after the Pages run. **Still owed here:** only the licence decision in
`CONTRIBUTING.md` (owner) — the analytics wiring that used to sit on this line landed on 2026-09-05.
