---
title: NetCage
description: A per-app firewall for Android. Pick any installed app and cut its internet access, foreground and background, Wi-Fi and mobile, with one switch.
slug: /
sidebar_position: 1
sidebar_label: Overview
tags: [overview, android, firewall]
---

NetCage is a per-app firewall for Android. Pick any installed app and cut its internet
access — foreground and background, Wi-Fi and mobile — with one switch.

It works through Android's VPN slot. NetCage builds a local tunnel that goes nowhere and routes
only the apps you cage into it. Their packets are discarded on your device: nothing is forwarded,
inspected or logged. Apps you have not caged are untouched.

Package `com.aoneahsan.netcage`. Version 2.0.0 is the first release on Google Play.

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
- **Sync your setup** across your own phones with optional Google sign-in.

## Who it is for

Someone who wants a specific app off the network and does not want to uninstall it: a game that
phones home, an app that syncs in the background, something you are trying to use less. NetCage
blocks that app and leaves the rest of the phone alone.

It needs **Android 8.0 or newer**. It does not need root.

## What it is not

- **Not an ad blocker or a content blocker.** NetCage does no domain filtering, no hosts file, no
  DNS interception and no content blocking of any kind. It blocks an app entirely, or not at all.
- **Not a packet inspector.** Packets from caged apps are read and discarded. Nothing is parsed,
  stored, forwarded or transmitted.
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
| Sync between two phones | [Account and sync](./account-and-sync.md) |
| Know exactly what is seen and sent | [Privacy](./privacy.md) |
| Know what it cannot do | [Limitations](./limitations.md) |
| Ask a specific question | [FAQ](./faq.md) |
