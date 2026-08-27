# Contributing

Thanks for reading. This repository holds the **documentation** for
[NetCage](https://netcage.aoneahsan.com), a per-app firewall for Android. The app's own source is
not here.

## What is most useful

- **Corrections.** A step that does not match what the app actually does, a control named
  differently from its label on screen, a stale version number, a broken link. These are the most
  valuable reports, because a wrong instruction is worse than a missing one.
- **Gaps.** Something the app does that no page explains.
- **Clarity.** A paragraph that is technically right and still leaves you unsure what to do.

## What will be declined

- **Framing NetCage as an ad blocker or a content blocker.** It does no domain filtering, no hosts
  file and no DNS interception; it blocks an app entirely or not at all. Play's Device and Network
  Abuse policy treats per-app firewalling as a device-security exception, and ad-blocking framing is
  not covered by it. This is a product boundary, not a wording preference.
- **Claims the app does not support.** Every fact here comes from the app's behaviour. If a page
  cannot say something truthfully, it says less.
- **Marketing language.** No superlatives, no "best" or "fastest". Plain, factual, checkable.
- **Feature requests for the app itself.** Those belong with the app, not its docs.

## Reporting something

Open an [issue](https://github.com/aoneahsan/netcage-docs/issues). Please include the page URL, what
it says, and what you observed instead — and your Android version and NetCage version if the
difference might be device-specific.

## Making a change

```bash
yarn install
yarn start      # hot reload while you write
yarn build      # the gate — this must pass
```

`yarn build` is also the link checker: broken links, anchors and images all fail the build rather
than shipping. Run it before opening a pull request.

Every page carries `title`, `description` and `sidebar_position` front matter. Keep the voice
factual and the pages short.

## Style

- One H1 per page, supplied by the front-matter `title` — do not add a second.
- Name controls exactly as the app labels them on screen.
- Relative links between pages.
- Every code fence names its language.
- Prefer a short page someone finishes over a long one they abandon.

## Licence and support

This repository carries no open-source licence, so the documentation is the author's copyright by
default. Contributions are accepted on the understanding that they may be published here as part of
it. If you need different terms, ask before opening a pull request.

If NetCage is useful to you and you would like to support the work:
**https://aoneahsan.com/payment?project-id=netcage&project-identifier=com.aoneahsan.netcage**
