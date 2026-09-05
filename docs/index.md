---
title: NetCage
description: A per-app firewall for Android. Choose a listed app that can use the internet and refuse its connections on Wi-Fi and mobile while the rest of your phone stays online.
slug: /
sidebar_position: 1
sidebar_label: Overview
tags: [overview, android, firewall]
---

NetCage is a per-app firewall for Android. Pick a listed app that can use the internet and close its
route with one switch. Your phone stays online. The caged app does not.

NetCage uses Android's VPN slot to route selected apps into an on-device tunnel. It examines IP and
transport-header fields in memory so it can return a local refusal; it does not inspect packet payloads
or hostnames, keep a traffic log, or forward caged traffic to a VPN server. Apps outside a caged Android
UID do not enter the tunnel.

Package `com.aoneahsan.netcage`. Version 1.3.0, versionCode 3, is the first public release prepared for
Google Play. It has not been published yet.

## What you can do with it

- **Cage an app** with one toggle, and release it just as fast.
- **Cage on one transport only** — an app that may use Wi-Fi but never mobile data, or the reverse.
- **Cage a whole category** — every browser, game or social app currently shown, in one tap, with
  undo.
- **Group apps into profiles** for work, travel or study, and activate a profile in one action.
- **Run schedules**: recurring windows that cage a profile or a single app, including overnight.
- **Grant a day pass**: let one caged app back online for a few minutes, after which it re-cages
  itself.
- **Control it without opening the app** — a Quick Settings tile and home-screen widgets.
- **Restore a setup on another phone** with optional Google sign-in and cloud backup.
- **Share an editable profile** as a Cage Pack. Publishing needs an account; importing does not switch the
  cage on.
- **Write to support in the app** and read the reply there. A support request needs an account so the reply
  has an owner.

## Who should use NetCage?

NetCage is for someone who wants one listed app off the network without uninstalling it: a launcher app,
a background service, or another enabled package on this phone that can use the internet.

It needs **Android 8.0 or newer**. It does not need root.

## What doesn't NetCage do?

- **Not an ad blocker or a content blocker.** NetCage does no domain filtering, no hosts file, no
  DNS interception and no content blocking of any kind. It blocks an app entirely, or not at all.
- **Not a packet-content inspector.** NetCage reads the destination address and transport fields needed to
  address a local refusal. It does not read the payload, resolve the hostname, or keep a DNS, URL or traffic
  log.
- **Not a proxy or a remote VPN.** There is no server on the other end of the tunnel. That absence
  *is* the mechanism — see [How it works](./how-it-works.md).

## Where to go next

| If you want to | Read |
|---|---|
| Understand the mechanism | [How it works](./how-it-works.md) |
| Get it running properly, including at boot | [Install and setup](./install-and-setup.md) |
| Use the list, filters, bulk actions and icons | [Caging apps](./caging-apps.md) |
| Group apps together | [Profiles](./profiles.md) |
| Cage on a timetable, or let one app out briefly | [Schedules and day passes](./schedules-and-day-passes.md) |
| Control it from the shade or the home screen | [Widgets and the Quick Settings tile](./widgets-and-tile.md) |
| Publish, import, report or block a shared profile | [Cage Packs](./cage-packs.md) |
| Restore a setup, write to support or delete an account | [Support, backup and account](./account-and-sync.md) |
| Know exactly what is seen and sent | [Privacy](./privacy.md) |
| Know what it cannot do | [Limitations](./limitations.md) |
| Ask a specific question | [FAQ](./faq.md) |
