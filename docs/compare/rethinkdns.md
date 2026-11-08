---
title: "Coming from Rethink"
description: "How Rethink: DNS + Firewall + VPN and NetCage differ, what to read first in these docs, and the dated facts behind it. NetCage cannot be installed today."
sidebar_label: "From Rethink"
sidebar_position: 3
tags: [comparison]
last_update:
  date: 2026-11-07
---

Rethink suits you if you want encrypted DNS, blocklists and WireGuard in the same app, and you’re happy to configure them. NetCage suits you if you only want to take the internet away from chosen apps and leave DNS, VPN servers and blocklists out of it.

Moving isn’t possible yet in any case: NetCage isn’t in any store and has no public download.

## What would NetCage replace in Rethink?

One of its three parts. Rethink combines an encrypted DNS resolver, a firewall and WireGuard connections; NetCage is a per-app firewall only, and a narrower one than Rethink’s. It sets no DNS server, connects to no VPN server and has no block lists. If you use Rethink for DNS or WireGuard, nothing here takes that over.

Running both may not work either. Android allows one VPN at a time, so while Rethink holds that slot, NetCage can’t.

## Which pages answer a Rethink user’s questions?

Rethink settings don’t carry over, so you’d choose your apps again. Start with DNS, because that’s the habit that changes most:

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

NetCage doesn’t publish a price.

## Where can I check this?

- [Rethink: DNS + Firewall + VPN’s own page](https://rethinkdns.com/)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/rethinkdns)
- [All comparisons](./index.md)
