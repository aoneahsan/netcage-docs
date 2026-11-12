---
title: "Coming from PCAPdroid"
description: "How PCAPdroid and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage is available as a signed APK."
sidebar_label: "From PCAPdroid"
sidebar_position: 11
tags: [comparison]
last_update:
  date: 2026-11-12
---

PCAPdroid is the tool for seeing packets: captures, TLS decryption and PCAP exports, with app blocking as a paid extra on top. NetCage is for people who don’t want to inspect anything. It reads only the header it needs to send a refusal and never records your traffic.

NetCage for Android is ready to install from its website. [Download the signed APK](https://netcage.aoneahsan.com/download), then check its SHA-256 against the value on the home page before opening it.

## What does NetCage look at, compared with PCAPdroid?

Almost nothing. It reads only the header fields it needs to address a refusal, in memory, and has no capture, no log and no export of traffic. If you open PCAPdroid to understand what an app is doing, NetCage won’t tell you.

There’s one VPN slot on Android. With PCAPdroid in it, NetCage stays off.

## Which pages matter to a PCAPdroid user?

No capture settings carry over; NetCage imports nothing from PCAPdroid. You’ll want the precise answers first:

- [How it works](../how-it-works.md): exactly which header fields the tunnel reads.
- [Limitations](../limitations.md): the system networking and shared user ID cases.
- [Caging apps](../caging-apps.md): the switch itself.

## What does each one state?

Checked 7 November 2026. The PCAPdroid column comes from the linked pages, and NetCage’s from its code.

| Feature | PCAPdroid | NetCage |
|---|---|---|
| Blocks one chosen app’s internet | Partly ([github.com](https://github.com/emanuele-f/PCAPdroid)) | Yes |
| Keeps blocking while the app is in the background | Not stated on the pages we checked | Yes |
| Needs no root | Yes ([github.com](https://github.com/emanuele-f/PCAPdroid)) | Yes |
| Open source | Yes ([f-droid.org](https://f-droid.org/en/packages/com.emanuelef.remote_capture/)) | No |
| Shows ads | No ([play.google.com](https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture)) | Partly. Promotions for the developer’s own apps only, no ad network |
| In-app purchases | Yes ([play.google.com](https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture)) | No |

## What does PCAPdroid cost?

| Plan | Price | As stated | Source | Checked |
|---|---|---|---|---|
| App | Free | Free install on Google Play; the listing carries an In-app purchases label at $2.99 - $11.99 per item. The firewall is listed as a paid feature | [play.google.com](https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture) | 7 November 2026 |

NetCage’s prices are on its [pricing page](https://netcage.aoneahsan.com/pricing), which shows whether each plan is on sale.

## Where can I check this?

- [PCAPdroid’s own page](https://github.com/emanuele-f/PCAPdroid)
- [PCAPdroid on F-Droid](https://f-droid.org/en/packages/com.emanuelef.remote_capture/)
- [PCAPdroid on Google Play](https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/pcapdroid)
- [All comparisons](./index.md)
