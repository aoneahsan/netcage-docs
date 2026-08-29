---
title: Settings and your data
description: Backing up and restoring your NetCage setup, reading the event log, appearance options, and the settings that do not sync.
sidebar_position: 9
tags: [settings, backup, export, import, event-log, appearance]
---

Everything on this page lives under **Settings**, reached from the icon in the top bar of the app
list. The groups below match the group headings in the app.

## Behaviour

| Setting | What it does |
| --- | --- |
| **Auto-start on boot** | Brings the cage back up after a restart. Pair it with Always-on VPN so caged apps never get a window of connectivity before you unlock — see [Install and setup](/install-and-setup). |
| **Show app count in notification** | Puts the number of caged apps in the ongoing VPN notification. The notification itself is required by Android and cannot be hidden. |
| **Default day pass duration** | How long a day pass lasts when you grant one from an app's detail screen. |

## Appearance

**Theme** (System, Light, Dark), **Dynamic colour** (Android 12+ takes its accent from your
wallpaper), **AMOLED black** (a true-black dark theme, which saves power on OLED screens) and
**Haptics** (the small vibration when a cage toggles).

These are per-device preferences and, unlike your rules, they are **not** synced to another phone —
see [Account and sync](/account-and-sync).

## Data

### Export configuration

Writes your whole setup to a single JSON file: every rule and its transports, your profiles and
their members, your schedules, your hidden apps, your pinned widgets and your preferences. You
choose where it goes with the system file picker, so it can land in Drive, on the device, or
anywhere else your phone can save to.

Nothing personal beyond your own configuration is in the file. It contains package names — which is
to say it contains the list of apps you have caged — so treat it the way you would treat that list.

### Import configuration

Reads a file written by **Export configuration** and **replaces** your current setup with it. It is
not a merge: importing is how you move a setup to a new phone or roll back to a known-good one.

Two things are worth knowing:

- **It is validated first.** A file from a newer version of NetCage, or one that has been edited into
  an invalid shape, is rejected whole. A partial import never happens.
- **It is safe to interrupt.** If the app is killed mid-import, NetCage notices on the next launch
  and finishes the job before anything else reads your rules. You may briefly see a recovery screen
  while that happens; it resolves on its own.

### Clear all cages

Releases every app at once. It clears the **rules**, not your profiles or schedules — so a schedule
that cages something this evening still will. Use it when you want to start the list again from
nothing.

### View event log

A local, plain-language record of what the engine has done: caged, released, day pass granted,
schedule opened or closed, boot restore, app uninstalled, engine errors. It answers "why did that
app get internet back?" without guesswork.

The log is on the device only. It is never synced and never uploaded — not to an account, not to
crash reporting, not to anything. **Clear event log** empties it.

### Hidden apps, and rules for apps not on this device

**Hidden apps** lists everything you have hidden from the main list, so you can bring one back.
**Rules for apps not on this device** lists rules pointing at apps you no longer have installed;
they are kept rather than deleted because on a synced account that rule may still be doing work on
another phone. Both are covered in [Caging apps](/caging-apps).

## Advanced

The **root engine** lives here, opt-in and clearly labelled experimental. It has never run on rooted
hardware — see [Limitations](/limitations) for exactly what that means.

## Privacy

Two independent switches, **Send crash reports** and **Share anonymous usage data**, plus
**Announcements** for push. Each switch controls whether the corresponding SDK is started at all
rather than muting one that is already running. What is and is not collected is set out in full on
[Privacy](/privacy).

## About

The version, links to the website and this documentation, the privacy policy and terms, a way to
rate the app, and **Other apps by developer**.
