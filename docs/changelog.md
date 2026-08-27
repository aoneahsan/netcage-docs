---
title: Changelog
description: What changed in each release of NetCage, latest first.
sidebar_position: 12
tags: [changelog, releases]
---

Latest first. Version 2.0.0 is the first release published on Google Play.

## 2.0.0

**The first public release.** Everything before it was sideloaded and offline-only.

- Sign in to sync your rules, profiles and schedules across devices
- Filter by category and cage every browser, game or social app in one tap
- Real app icons, generic category icons, or your own custom icon per app
- A cleaner list that hides archived and disabled apps
- Now on the Play Store, so updates arrive automatically

In more detail:

- The app list is the first screen. The old first-launch permission gate became a dismissible
  **Finish setup** card at the top of that list.
- A disclosure sheet explains what the tunnel does, and does not do, before Android's own VPN
  consent dialog appears.
- Category detection with filter chips, and one-tap cage or release for everything currently shown,
  with undo.
- Real app icons render at last — the image loader's package fetcher was never registered in 1.x,
  which is why icons were blank. Generic category glyphs are the fallback, and any app can be given
  a custom icon.
- Archived and disabled apps no longer clutter the list, and an app can be hidden outright.
- Optional Google sign-in with cross-device sync of rules, profiles, schedules, preferences, hidden
  apps and custom icons.
- One banner ad on the list and detail screens, behind a consent form where consent is required.
- In-app updates from Play, and an in-app review prompt.
- Crash and anonymous usage reporting, each behind its own switch in **Settings ▸ Privacy**.

The root engine remains opt-in and labelled experimental. It has never run on rooted hardware.

## 1.2.0

Not published to Play. A sideloaded, offline-only build that held no `INTERNET` permission and made
no network call of any kind.

- Schedule evaluation moved to instants, so daylight-saving gaps and repeated hours resolve
  correctly.
- Direct Boot restores the cage from a device-protected snapshot carrying the engine mode.
- Timed grants now expire while the phone is still locked.
- The root engine became transactional.
- Import validation became version-specific, behind a reclosable consistency gate.

## 1.0.0

Not published to Play. The first working build: per-app caging over the sinkhole `VpnService`,
profiles, schedules, day passes, the Quick Settings tile and home-screen widgets.
