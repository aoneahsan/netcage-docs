---
title: "Coming from InviZible Pro"
description: "How InviZible Pro and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From InviZible Pro"
sidebar_position: 5
tags: [comparison]
last_update:
  date: 2026-11-07
---

If you want Tor, encrypted DNS and I2P routing, with a firewall as one part of the package, InviZible Pro is built for that. NetCage is for not routing your traffic anywhere: caged connections end on this phone, and everything else takes its normal path.

For now that’s a comparison only, since NetCage has neither a store listing nor a download.

## Does NetCage do any of InviZible Pro’s routing?

None of it. InviZible Pro sends traffic through Tor, DNSCrypt and I2P; NetCage routes nothing anywhere. A caged app’s connection ends on the phone and every other app goes out as usual, so NetCage gives you no anonymity and no encrypted DNS.

And if InviZible Pro is using Android’s VPN slot, NetCage can’t take it too; Android allows one VPN at a time.

## What should an InviZible Pro user read here?

Nothing transfers from InviZible Pro, so you’d choose your apps again. Read these with the routing question in mind:

- [How it works](../how-it-works.md): why no traffic leaves through NetCage.
- [Caging apps](../caging-apps.md): the switch and how to find an app quickly.
- [Limitations](../limitations.md): what NetCage won’t do for your other apps' traffic.

## What does each one state?

Checked 7 November 2026. The InviZible Pro column comes from the linked pages, and NetCage’s from its code.

| Feature | InviZible Pro | NetCage |
|---|---|---|
| Blocks one chosen app’s internet | Yes ([f-droid.org](https://f-droid.org/en/packages/pan.alexander.tordnscrypt.stable/)) | Yes |
| Keeps blocking while the app is in the background | Not stated on the pages we checked | Yes |
| Needs no root | Yes ([f-droid.org](https://f-droid.org/en/packages/pan.alexander.tordnscrypt.stable/)) | Yes |
| Open source | Yes ([f-droid.org](https://f-droid.org/en/packages/pan.alexander.tordnscrypt.stable/)) | No |
| Shows ads | No ([play.google.com](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp)) | Partly. Promotions for the developer’s own apps only, no ad network |
| In-app purchases | Yes ([play.google.com](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp)) | No |

## What does InviZible Pro cost?

| Plan | Price | As stated | Source | Checked |
|---|---|---|---|---|
| App | Free | Free install on Google Play; the listing carries an In-app purchases label at $6.99 per item | [play.google.com](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp) | 7 November 2026 |

NetCage has no published price.

## Where can I check this?

- [InviZible Pro’s own page](https://invizible.net/en/)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/invizible-pro)
- [All comparisons](./index.md)
