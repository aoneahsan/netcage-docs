---
title: Changelog
description: What changed in each release of NetCage, latest first.
sidebar_position: 13
tags: [changelog, releases]
---

Latest first. Version 1.3.0, versionCode 3, is the first public release prepared for Google Play; it has
not been published yet. The 1.0.0/code 1 and 1.2.0/code 2 store candidates were built and superseded before
upload, so both codes are spent. Earlier sideloaded builds remain recorded under the numbers they used at
the time.

## 1.3.0

**The first public release.** It includes the firewall, profiles, schedules, day passes, backup, in-app
support and Cage Packs. Before submission, Cage Packs gained versioned publishing terms, report, block,
unblock, immediate quarantine and publisher-suspension controls. Importing still creates an inactive,
editable profile.

- Close an enabled, installed app's internet route on Wi-Fi and mobile
- Use profiles, schedules, day passes and a global pause
- Restore your setup on another phone with optional account backup
- Publish or import editable Cage Packs; imports stay inactive
- Contact support in the app and read the reply there

The release removes the redundant `specialUse` foreground-service type and keeps `systemExempted`,
Android's documented type for the configured VPN service. Usage analytics, crash reporting and
announcements start off. Clarity records only approved replay-safe screens after analytics consent;
Settings, app lists, app details, support and Cage Pack moderation remain excluded.

In more detail:

- The app list is the first screen. Setup is a dismissible **Finish setup** card at the top of that
  list, and a disclosure sheet explains what the tunnel does — and does not do — before Android's
  own VPN consent dialog appears.
- Category detection with filter chips, and one-tap cage or release for everything currently shown,
  with undo.
- Real app icons, generic category glyphs as the fallback, and a custom icon per app. Archived and
  disabled apps no longer clutter the list, and any app can be hidden outright.
- Optional Google sign-in with cross-device sync of rules, profiles, schedules, preferences, hidden
  apps and custom icons — which also means a broken or replaced phone gets its whole setup back by
  signing in once.
- **In-app support.** Write in from inside the app and read the answer there. A message carries the
  app version, Android version and device model so a report is actionable — never the names of
  caged apps. An optional phone number can be attached from Google's own picker; NetCage holds no
  phone permission of any kind.
- **Cage Packs.** Publish a profile as a link; anyone opening it adds the same set in one tap.
  Publishing needs an account, importing does not. Nothing is applied on arrival: the link opens a
  preview, and the import creates an inert profile rather than an active cage.
- Sync failures name their own cause. A refusal says it is a refusal and that retrying will not
  help, and a failure can be copied as a diagnostics block.
- A promotion for another app by the same developer on the list and detail screens. It is bundled
  in the app, so it makes no network request and reads no advertising identifier.
- In-app updates from Play, and an in-app review prompt.
- Crash reporting, usage analytics and announcements, each off by default and behind its own switch in
  **Settings ▸ Privacy**.

The root engine remains opt-in and labelled experimental. It has never run on rooted hardware.

## 1.2.0

Built and signed, then superseded before upload. Its account backup, in-app support and first Cage Pack
implementation ship in 1.3.0 with the moderation controls required for public release.

## 1.0.0

Built and signed for the store, then superseded before it was ever uploaded — never published.
Everything it contained ships in 1.3.0, so no device ever ran a public 1.0.0.

## Pre-Play builds — sideloaded only, never published

These ran on the developer's own device before the version reset and reused the numbers 1.0.0,
1.2.0 and 2.0.0. They are not store releases.

### "2.0.0" (sideloaded)

The build that became the foundation of the later store candidates: sign-in and sync, category filters
with one-tap bulk caging, real app icons, the cleaner list and in-app updates.

### "1.2.0" (sideloaded)

Offline-only; held no `INTERNET` permission and made no network call of any kind.

- Schedule evaluation moved to instants, so daylight-saving gaps and repeated hours resolve
  correctly.
- Direct Boot restores the cage from a device-protected snapshot carrying the engine mode.
- Timed grants now expire while the phone is still locked.
- The root engine became transactional.
- Import validation became version-specific, behind a reclosable consistency gate.

### "1.0.0" (sideloaded)

The first working build: per-app caging over the sinkhole `VpnService`, profiles, schedules, day
passes, the Quick Settings tile and home-screen widgets.
