---
title: "Coming from AFWall+"
description: "How AFWall+ and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From AFWall+"
sidebar_position: 4
tags: [comparison]
last_update:
  date: 2026-11-07
---

NetCage can’t be installed today. It has no store listing and no public download, so this page ends without an install step. It covers how the two apps differ and which pages here to read first.

## How does AFWall+ differ from NetCage?

AFWall+ writes iptables rules and needs a rooted phone. It leaves Android’s VPN slot free, which NetCage does not. NetCage’s supported engine uses that slot and needs no root. It does carry a root engine, but that one is opt-in, experimental and has never run on rooted hardware, so don’t plan around it.

This is the real cost of moving: with NetCage up, you can’t run any other VPN, and AFWall+ never asked you to choose.

Choose AFWall+ if your phone is rooted and you want iptables rules, profiles and Tasker hooks without taking Android’s VPN slot.

Choose NetCage if your phone is not rooted; NetCage’s supported engine uses the VPN slot and asks for nothing more.

## What should I read first?

NetCage imports nothing from AFWall+, so there’s no settings file to bring across. You’d choose your apps again.

- [Why can only one VPN run?](../limitations.md#why-can-only-one-vpn-run): the trade you’d be making for not needing root.
- [How it works](../how-it-works.md): what replaces iptables here.
- [Schedules and day passes](../schedules-and-day-passes.md): the nearest thing NetCage has to AFWall+ profiles and Tasker hooks.

## What does each one state?

Checked 7 November 2026. The AFWall+ column comes from the linked pages, and NetCage’s from its code.

| Feature | AFWall+ | NetCage |
|---|---|---|
| Blocks one chosen app’s internet | Yes ([play.google.com](https://play.google.com/store/apps/details?id=dev.ukanth.ufirewall)) | Yes |
| Keeps blocking while the app is in the background | Not stated on the pages we checked | Yes |
| Needs no root | No ([f-droid.org](https://f-droid.org/en/packages/dev.ukanth.ufirewall/)) | Yes |
| Open source | Yes ([f-droid.org](https://f-droid.org/en/packages/dev.ukanth.ufirewall/)) | No |
| Shows ads | No ([play.google.com](https://play.google.com/store/apps/details?id=dev.ukanth.ufirewall)) | Partly. Promotions for the developer’s own apps only, no ad network |
| In-app purchases | No ([play.google.com](https://play.google.com/store/apps/details?id=dev.ukanth.ufirewall)) | No |

## What does AFWall+ cost?

| Plan | Price | As stated | Source | Checked |
|---|---|---|---|---|
| App | Free | Free install on Google Play with no ads or in-app purchase label; the GitHub README offers a separate paid unlocker key on Google Play, price not confirmed on the pages we read | [play.google.com](https://play.google.com/store/apps/details?id=dev.ukanth.ufirewall) | 7 November 2026 |

NetCage publishes no price.

## Where can I check this?

- [AFWall+’s own page](https://github.com/ukanth/afwall)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/afwall-plus)
- [All comparisons](./index.md)
