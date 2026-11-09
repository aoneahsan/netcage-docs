---
title: "Coming from NetGuard"
description: "How NetGuard and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From NetGuard"
sidebar_position: 2
tags: [comparison]
last_update:
  date: 2026-11-07
---

NetGuard is the one to keep if you want an open-source firewall you can get today, from Google Play or F-Droid, with optional per-address filtering and traffic logs. NetCage is narrower: one switch per app and nothing to tune. A caged app is refused on this phone, in the foreground and the background, and the rest of your phone stays online.

You can’t switch yet. NetCage has no store listing and no public download, so this page stops at reading, not installing.

## Where does NetGuard go further?

Inside an app. Both decide internet access app by app without root, but NetGuard’s paid features add filtering by address, and it can keep traffic logs. NetCage has no address rules and keeps no traffic log: a caged app is refused outright and an uncaged app isn’t touched.

Android gives its VPN slot to one app at a time. If NetGuard has it on your phone, NetCage can’t run beside it.

## Which pages here map to NetGuard?

NetCage imports none of NetGuard’s settings, so you pick your apps again. These three pages cover what changes:

- [How it works](../how-it-works.md): the sinkhole tunnel, the part closest to what you already know from NetGuard.
- [Caging apps](../caging-apps.md): the list and the switch, with Wi-Fi and mobile rules beside it as NetGuard has.
- [Limitations](../limitations.md): what you give up with no address rules.

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

NetCage's prices are on its [pricing page](https://netcage.aoneahsan.com/pricing), which shows whether each plan is on sale.

## Where can I check this?

- [NetGuard’s own page](https://netguard.me/)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/netguard)
- [All comparisons](./index.md)
