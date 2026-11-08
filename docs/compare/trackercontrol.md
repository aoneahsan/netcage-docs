---
title: "Coming from TrackerControl"
description: "How TrackerControl and NetCage differ, what to read first in these docs, and the dated facts behind the comparison. NetCage cannot be installed today."
sidebar_label: "From TrackerControl"
sidebar_position: 6
tags: [comparison]
last_update:
  date: 2026-11-07
---

TrackerControl is for watching which companies an app talks to and blocking the trackers while the app stays online. NetCage is for taking the whole app offline instead. It doesn’t filter inside an app you leave online.

You can’t try that today; NetCage isn’t listed in a store or offered for download.

## What would you stop seeing?

Everything TrackerControl shows you. It looks inside an app’s traffic to name the companies it contacts; NetCage doesn’t resolve a hostname or keep a record of what an app tried to reach. An app is either caged and offline, or left alone.

TrackerControl runs as a local VPN too, so the two would compete for Android’s single VPN slot.

## Which pages explain the difference?

There’s no tracker list to bring over; NetCage imports nothing from TrackerControl, and you’d pick whole apps again. Read these in order:

- [How it works](../how-it-works.md): what the tunnel reads, which is much less than you may be used to.
- [Caging apps](../caging-apps.md): choosing an app and closing its gate.
- [Limitations](../limitations.md): why a caged app can still show content it fetched earlier.

## What does each one state?

Checked 7 November 2026. The TrackerControl column comes from the linked pages, and NetCage’s from its code.

| Feature | TrackerControl | NetCage |
|---|---|---|
| Blocks one chosen app’s internet | Not stated on the pages we checked | Yes |
| Keeps blocking while the app is in the background | Not stated on the pages we checked | Yes |
| Needs no root | Yes ([trackercontrol.org](https://trackercontrol.org/)) | Yes |
| Open source | Yes ([f-droid.org](https://f-droid.org/en/packages/net.kollnig.missioncontrol.fdroid/)) | No |
| Shows ads | No ([play.google.com](https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play)) | Partly. Promotions for the developer’s own apps only, no ad network |
| In-app purchases | No ([play.google.com](https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play)) | No |

## What does TrackerControl cost?

| Plan | Price | As stated | Source | Checked |
|---|---|---|---|---|
| App | Free | F-Droid says it will always be free and open source; the Google Play edition is TrackerControl Slim, free install with no ads or in-app purchase label | [f-droid.org](https://f-droid.org/en/packages/net.kollnig.missioncontrol.fdroid/) | 7 November 2026 |

NetCage hasn’t published a price.

## Where can I check this?

- [TrackerControl’s own page](https://trackercontrol.org/)
- [The comparison on the NetCage website](https://netcage.aoneahsan.com/compare/trackercontrol)
- [All comparisons](./index.md)
