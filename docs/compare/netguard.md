---
title: "Coming from NetGuard"
description: "How NetGuard and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From NetGuard"
sidebar_position: 2
tags: [comparison]
last_update:
  date: 2026-11-07
---

NetCage can’t be installed today. It has no store listing and no public download, so this page ends without an install step. It covers how the two apps differ and which pages here to read first.

## How does NetGuard differ from NetCage?

Both decide internet access app by app without root. NetGuard goes further inside an app: its paid features add filtering by address, and it can keep traffic logs. NetCage has no address rules and keeps no traffic log. A caged app is refused outright and an uncaged app isn’t touched.

Android allows one VPN at a time. If NetGuard holds that slot on your phone, NetCage can’t hold it as well.

Choose NetGuard if you want an open-source firewall that is on Google Play and F-Droid today, with optional per-address filtering and traffic logs.

Choose NetCage if you want one switch per app and nothing to tune: the caged app is refused on this phone, in the foreground and the background, and the rest of your phone stays online.

## What should I read first?

NetCage imports nothing from NetGuard, so there’s no settings file to bring across. You’d choose your apps again.

- [How it works](../how-it-works.md): the sinkhole tunnel, which is the part closest to what you already know.
- [Caging apps](../caging-apps.md): the list and the one switch.
- [Limitations](../limitations.md): what you’d give up by having no address rules.

## What does each one state?

Checked 7 November 2026. The NetGuard column comes from the linked pages, and NetCage’s from its code.

| Feature | NetGuard | NetCage |
|---|---|---|
| Blocks one chosen app’s internet | Yes ([netguard.me](https://netguard.me/)) | Yes |
| Keeps blocking while the app is in the background | Yes ([netguard.me](https://netguard.me/)) | Yes |
| Needs no root | Yes ([netguard.me](https://netguard.me/)) | Yes |
| Open source | Yes ([f-droid.org](https://f-droid.org/en/packages/eu.faircode.netguard/)) | No |
| Shows ads | No ([netguard.me](https://netguard.me/)) | Partly. Promotions for the developer’s own apps only, no ad network |
| In-app purchases | Yes ([play.google.com](https://play.google.com/store/apps/details?id=eu.faircode.netguard)) | No |

## What does NetGuard cost?

| Plan | Price | As stated | Source | Checked |
|---|---|---|---|---|
| App | Free | Free install on Google Play; the listing carries an In-app purchases label at $0.99 - $8.49 per item | [play.google.com](https://play.google.com/store/apps/details?id=eu.faircode.netguard) | 7 November 2026 |
| Pro features outside Google Play | €0.10 once | A one-time donation of EUR 0.10 or more unlocks the pro features once; EUR 7 or more unlocks them on every device you own | [netguard.me](https://netguard.me/) | 7 November 2026 |

NetCage publishes no price.

## Where can I check this?

- [NetGuard’s own page](https://netguard.me/)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/netguard)
- [All comparisons](./index.md)
