---
title: "Coming from Rethink"
description: "How Rethink: DNS + Firewall + VPN and NetCage differ, what to read first in these docs, and the dated facts behind it. NetCage cannot be installed today."
sidebar_label: "From Rethink"
sidebar_position: 3
tags: [comparison]
last_update:
  date: 2026-11-07
---

NetCage can’t be installed today. It has no store listing and no public download, so this page ends without an install step. It covers how the two apps differ and which pages here to read first.

## How does Rethink differ from NetCage?

Rethink is three tools in one app: an encrypted DNS resolver, a firewall and WireGuard connections. NetCage is one of those, and a narrower one. It sets no DNS server, connects to no VPN server and has no block lists. If you use Rethink for its DNS or WireGuard, NetCage replaces none of that.

Android allows one VPN at a time. If Rethink holds that slot on your phone, NetCage can’t hold it as well.

Choose Rethink if you also want encrypted DNS, blocklists and WireGuard in the same app, and you are happy to configure them.

Choose NetCage if you only want to take the internet away from chosen apps and leave DNS, VPN servers and blocklists out of it.

## What should I read first?

NetCage imports nothing from Rethink, so there’s no settings file to bring across. You’d choose your apps again.

- [What happens to DNS?](../limitations.md#what-happens-to-dns): the first question if you’re used to choosing a resolver.
- [Caging apps](../caging-apps.md): the per-app switch, which is all NetCage has.
- [How it works](../how-it-works.md): why the tunnel has nothing at the far end.

## What does each one state?

Checked 7 November 2026. The Rethink column comes from the linked pages, and NetCage’s from its code.

| Feature | Rethink: DNS + Firewall + VPN | NetCage |
|---|---|---|
| Blocks one chosen app’s internet | Yes ([f-droid.org](https://f-droid.org/en/packages/com.celzero.bravedns/)) | Yes |
| Keeps blocking while the app is in the background | Yes ([f-droid.org](https://f-droid.org/en/packages/com.celzero.bravedns/)) | Yes |
| Needs no root | Not stated on the pages we checked | Yes |
| Open source | Yes ([f-droid.org](https://f-droid.org/en/packages/com.celzero.bravedns/)) | No |
| Shows ads | No ([play.google.com](https://play.google.com/store/apps/details?id=com.celzero.bravedns)) | Partly. Promotions for the developer’s own apps only, no ad network |
| In-app purchases | Yes ([play.google.com](https://play.google.com/store/apps/details?id=com.celzero.bravedns)) | No |

## What does Rethink cost?

| Plan | Price | As stated | Source | Checked |
|---|---|---|---|---|
| App | Free | Free install on Google Play; the listing carries an In-app purchases label at $0.99 - $48.99 per item. The site says the app is free and open source and the cloud DNS service will have a free and a paid tier | [play.google.com](https://play.google.com/store/apps/details?id=com.celzero.bravedns) | 7 November 2026 |

NetCage publishes no price.

## Where can I check this?

- [Rethink: DNS + Firewall + VPN’s own page](https://rethinkdns.com/)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/rethinkdns)
- [All comparisons](./index.md)
