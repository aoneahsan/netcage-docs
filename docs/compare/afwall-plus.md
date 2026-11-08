---
title: "Coming from AFWall+"
description: "How AFWall+ and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From AFWall+"
sidebar_position: 4
tags: [comparison]
last_update:
  date: 2026-11-07
---

AFWall+ is the right tool on a rooted phone: iptables rules, profiles and Tasker hooks, without taking Android’s VPN slot. NetCage is for a phone that isn’t rooted. Its supported engine uses the VPN slot and asks for nothing more.

NetCage can’t be installed today. There’s no store listing and no public download, so treat this page as reading for later.

## What do you give up by leaving iptables?

The free VPN slot. AFWall+ writes iptables rules on a rooted phone and leaves that slot alone; NetCage’s supported engine takes it and needs no root. With NetCage up you can’t run any other VPN, and AFWall+ never asked you to make that choice.

NetCage does carry a root engine, but it’s opt-in, experimental and has never run on rooted hardware. Don’t plan a move around it.

## Where do your AFWall+ habits land?

Your rules stay in AFWall+, since NetCage has no importer for them. These pages show what you’d set up in their place:

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

There’s no NetCage price to compare against.

## Where can I check this?

- [AFWall+’s own page](https://github.com/ukanth/afwall)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/afwall-plus)
- [All comparisons](./index.md)
