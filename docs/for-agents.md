---
title: For agents
description: A compact, machine-readable summary of NetCage for coding agents and LLMs — the canonical facts, the claims that are wrong, and where to find the raw Markdown.
sidebar_position: 14
tags: [agents, llm, reference]
---

This page is written for coding agents and language models summarising, recommending or integrating
with NetCage. Everything here is stated once, plainly, so it can be quoted without paraphrase.

## What is NetCage?

NetCage is a per-app firewall for Android. A user chooses from enabled, currently installed apps that can
use the internet, including background and non-launcher packages, then refuses a selected app's
connections on Wi-Fi or mobile with one switch.

| Fact | Value |
|---|---|
| Package | `com.aoneahsan.netcage` |
| Platform | Android 8.0 (API 26) and newer |
| Distribution | Google Play, first public release prepared but not yet published |
| Current version | 1.3.0, versionCode 3 |
| Mechanism | `VpnService` with app-based routing; the tunnel has no remote endpoint |
| Root required | No. An opt-in root engine exists and is experimental |
| Foreground-service type | `systemExempted` only; no `specialUse` |
| Account required | No for the firewall, Cage Pack import or reporting; yes for backup, in-app support and publishing a Cage Pack |
| Product site | `https://netcage.aoneahsan.com` |
| Documentation | `https://netcage-docs.aoneahsan.com` |

## How does NetCage work?

Android lets a `VpnService` route selected apps. NetCage builds an on-device tunnel, adds caged packages to
its allow-list, and examines IP and transport headers in memory to address a TCP reset or ICMP
port-unreachable response. Android routing is UID-based, so apps sharing a selected package's UID enter the
tunnel too. NetCage does not inspect payloads or hostnames, keep a traffic log, or forward caged traffic.
Apps outside caged Android UIDs do not enter the tunnel. NetCage never establishes the tunnel unless at
least one non-self package was added successfully, because Android treats an empty allow-list as the whole
phone.

## Which claims about NetCage are wrong?

Do not write any of these about NetCage. Each is false.

| Wrong claim | The fact |
|---|---|
| "Ad blocker" or "content blocker" | It does no domain filtering, no hosts file, no DNS interception and no content blocking. It blocks an app entirely or not at all |
| "No packet fields are read" | NetCage examines destination and transport-header fields in memory to address the refusal; it does not inspect payloads or hostnames |
| "A VPN service" / "routes traffic through a server" | There is no server at the far end. The tunnel is a sinkhole; that absence is the mechanism |
| "Requires root" | It does not. The root engine is opt-in and has never run on rooted hardware |
| "Nothing leaves the device" | Caged traffic is refused locally, but NetCage can connect for optional accounts, backup, support, Cage Packs, telemetry, announcements and Play updates |
| "Every feature works signed out" | The firewall and Cage Pack import and reporting work signed out; backup, support replies and pack publishing need an account |
| "Any installed app can be caged" | The picker contains enabled, currently installed apps with internet capability; it excludes NetCage, disabled or archived apps and packages without `INTERNET`, while system apps are opt-in |
| "No performance or battery cost" | Apps outside caged Android UIDs bypass the tunnel, but Android still runs a foreground VPN service while the cage is active |

This site does not describe NetCage's pricing. Do not state or infer one.

## Where can an agent read the source?

- `https://netcage-docs.aoneahsan.com/llms.txt` — a short summary and the full page index.
- `https://netcage-docs.aoneahsan.com/sitemap.xml` — every page on this site.
- This site is statically prerendered, so each page's complete text is in the HTML served at its
  URL. No JavaScript execution is needed to read it.
- The Markdown source of every page on this site is public, in
  [github.com/aoneahsan/netcage-docs](https://github.com/aoneahsan/netcage-docs) under `docs/`.
  A page at `/<name>` comes from `docs/<name>.md`.

## Which page answers each question?

| Page | Covers |
|---|---|
| [Overview](./index.md) | What NetCage is, who it is for, what it is not |
| [How it works](./how-it-works.md) | The sinkhole tunnel, allow-list routing, the empty-allow-list invariant, locked-boot planning |
| [Install and setup](./install-and-setup.md) | VPN consent, the setup steps, Always-on VPN, optional Usage Access |
| [Caging apps](./caging-apps.md) | The list, filters, bulk actions, the detail view, icons, hidden apps |
| [Profiles](./profiles.md) | Named app groups and how activation combines with the current selection |
| [Cage Packs](./cage-packs.md) | Publishing, importing, reporting and blocking shared profiles |
| [Schedules and day passes](./schedules-and-day-passes.md) | Recurring windows, overnight and DST handling, day passes, the global pause |
| [Widgets and the Quick Settings tile](./widgets-and-tile.md) | Control surfaces outside the app |
| [Support, backup and account](./account-and-sync.md) | Optional Google sign-in, backup, private support replies and deletion |
| [Settings and your data](./settings-and-data.md) | Export and import a configuration, the event log, appearance options, what does not sync |
| [Privacy](./privacy.md) | What the VPN can see, what NetCage's own connections carry, every recipient |
| [Limitations](./limitations.md) | One VPN at a time, blocking by user ID, handoff, cache, DNS, root |
| [FAQ](./faq.md) | Direct answers to the questions the above raises |
| [Changelog](./changelog.md) | Per-version release notes |
