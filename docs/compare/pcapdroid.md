---
title: "Coming from PCAPdroid"
description: "How PCAPdroid and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From PCAPdroid"
sidebar_position: 11
tags: [comparison]
last_update:
  date: 2026-11-07
---

NetCage can’t be installed today. It has no store listing and no public download, so this page ends without an install step. It covers how the two apps differ and which pages here to read first.

## How does PCAPdroid differ from NetCage?

PCAPdroid is for looking at traffic: captures, TLS decryption and PCAP exports, with blocking as a paid extra. NetCage is the opposite kind of tool. It reads only the header fields it needs to address a refusal, in memory, and it has no capture, no log and no export of traffic at all.

Android allows one VPN at a time. If PCAPdroid holds that slot on your phone, NetCage can’t hold it as well.

Choose PCAPdroid if you want to see the packets, decrypt TLS and export PCAP files, and block apps as a paid extra on top.

Choose NetCage if you do not want to inspect anything; NetCage reads only the header it needs to send a refusal and never records your traffic.

## What should I read first?

NetCage imports nothing from PCAPdroid, so there’s no settings file to bring across. You’d choose your apps again.

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

NetCage publishes no price.

## Where can I check this?

- [PCAPdroid’s own page](https://github.com/emanuele-f/PCAPdroid)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/pcapdroid)
- [All comparisons](./index.md)
