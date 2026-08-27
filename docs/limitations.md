---
title: Limitations
description: What NetCage cannot do, and why — one VPN at a time, blocking by user ID, handoff to another app, cached content, DNS, transport rules, and the experimental root engine.
sidebar_position: 10
tags: [limitations, troubleshooting]
---

These are properties of the approach, not bugs. Most of them follow directly from
[how it works](./how-it-works.md), and none of them has a workaround inside NetCage.

## One VPN at a time

Android allows a single VPN. While NetCage is up you cannot run another one, and connecting another
VPN revokes NetCage.

That case is handled rather than hidden: the app reports *Another VPN took over. NetCage stopped.
Android only allows one VPN at a time.* and does not retry in a loop.

## Blocking is by user ID

Android's app-based routing works on user IDs, not on packages. Apps installed under one shared
user ID are therefore caged together, and there is no way to separate them.

When this applies, the detail view names the siblings so you can see exactly what else is affected.

## Handoff is not blocked

If a caged app opens a link in your browser, the browser is doing the fetching — and the browser is
not caged. The same applies to anything else handed to another app.

## Cached content still renders

Blocking the network does not erase what an app already downloaded. A caged app can keep showing
articles, images or a feed it fetched earlier.

## "VPN has no internet access"

Android probes VPN networks and may report this. It is correct — the tunnel genuinely has no
internet, because there is nothing at the far end. The notice is cosmetic and nothing is broken.

## DNS

NetCage sets no DNS server. A caged app may still inherit the default network's resolvers, but its
DNS queries take the default route into the tunnel and are discarded with everything else.

## Transport rules follow the default network

"Block on mobile only" is evaluated against Android's **current default network**. A third-party app
cannot see which transport an individual socket is using, so the rule is as precise as Android
allows an app to be — not per-connection.

## Core system networking

Some system components can bypass a third-party VPN. That is irrelevant to what NetCage does: it
cages ordinary apps you choose, not the platform.

## Data totals are per user ID

The **Data used** figures come from Android's own accounting, which is per user ID. Where apps share
one, the figure covers all of them, and the detail view says so.

Usage Access is optional; denying it changes nothing about caging — you simply do not see the
totals.

## Not every app can be caged

The list shows only apps that request Android's `INTERNET` permission, and only apps that can
actually run. Disabled apps, apps Play has auto-archived, and NetCage itself are never listed. See
[Caging apps](./caging-apps.md#what-appears-in-the-list).

## Always-on VPN has a switch you must leave alone

Android's **Block connections without VPN** option would drop all traffic outside the VPN. Since
NetCage's tunnel carries only the apps you caged, turning it on cuts off every app that is *not*
caged. Leave it off — see [Install and setup](./install-and-setup.md#always-on-vpn).

## Root mode is experimental

NetCage carries an alternative engine that writes firewall rules directly on a rooted device
instead of holding the VPN slot. It is opt-in, under **Settings ▸ Root engine**, and the app labels
it *Experimental — not verified on rooted hardware*.

That label is literal: **it has never run on rooted hardware**, because none was available to test
it. Its command construction is unit tested, which is not the same thing as being verified. The VPN
engine remains the supported default and the fallback.

If you do enable it, two things are worth knowing, and the app says both:

- NetCage never asks `su` for permission until you tap **Check for root**.
- Root rules live in the kernel and are not removed with the app. Before uninstalling, turn root off
  or use **Clean root rules**. A reboot also clears them.
