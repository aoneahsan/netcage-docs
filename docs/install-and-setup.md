---
title: Install and setup
description: First launch, the VPN consent, the Finish setup card, Always-on VPN, battery, notifications, precise timing and optional Usage Access.
sidebar_position: 3
tags: [setup, permissions, always-on-vpn]
---

NetCage needs **Android 8.0 or newer**. It does not need root, and it does not need a computer.

## How do I set up NetCage for the first time?

To set up NetCage, choose an app, read the VPN disclosure, grant Android's VPN consent, and keep the
foreground notification available while the cage is active.

The app list is the first screen. Before granting anything, you can browse enabled, currently installed
apps that can use the internet, including background and non-launcher packages. System apps appear only
when **Show system apps** is on.

At the top sits a card reading **One tap to start** — *NetCage needs Android's VPN slot* — with a
**Grant permission** button. Tapping it shows NetCage's own disclosure first:

> NetCage uses Android's VPN slot
>
> Only apps in a caged Android UID enter NetCage's tunnel; apps outside those UIDs connect. NetCage
> examines IP and transport-header fields to address a local refusal, without inspecting payloads or
> hostnames. That traffic is neither logged nor forwarded. Without Android's VPN consent, the cage cannot
> start.

Choose **Continue** and Android's own VPN consent dialog appears. That dialog is the system's, not
NetCage's; it is where Android tells you the app can monitor network traffic, which is the warning
it shows for every VPN app. Choose **Not now** and nothing is requested — you can come back to the
card whenever you like.

The disclosure is shown once. After you have accepted it, the consent dialog opens directly.

## What setup is still required?

Once the VPN permission is granted, a **Finish setup** card appears at the top of the list whenever
a useful grant is still missing. It lists only the steps that are actually open, and offers:

- **All steps** — opens the full setup screen.
- **Not now** — snoozes the card. It remembers which steps were open when you dismissed it.

The full screen is **Settings ▸ Advanced ▸ Setup & permissions**, and it re-reads every grant
from the system each time you open it, so changing something in Android's settings and coming back
shows the truth rather than a cached answer.

## Which setup steps should I complete?

The screen lists them in this order. Steps that do not apply to your Android version are not shown.

### Why does NetCage need VPN permission?

Only apps in a caged Android UID enter NetCage's tunnel; apps outside those UIDs connect. NetCage examines
IP and transport-header fields to address a local refusal, without inspecting payloads or hostnames. That
traffic is neither logged nor forwarded. Without Android's VPN consent, the cage cannot start.

Android documents the consent and app-based routing flow in its
[VPN developer guide](https://developer.android.com/develop/connectivity/vpn).

Required. Nothing can be caged without it.

### How do I keep the cage active in the background?

*Exempt NetCage from battery optimisation so Android never kills the cage in the background.*

Strongly recommended. Without the exemption, Doze can stop the service and the cage silently drops.

### Why does Android show an ongoing VPN notification?

Android requires NetCage's VPN to run as a foreground service while the cage is active. The release
declares `systemExempted`, the eligible foreground-service type for that configured `VpnService`; it does
not declare `specialUse`. The type declaration does not by itself keep the service running or make its
notice visible.

On Android 13 and newer, allow notifications so the active VPN notice and its **Pause 15m** and **Stop**
actions remain visible. After you pause the cage, the paused notice offers **Resume** and **Stop**. If
Android stops the foreground service, every selected app regains its normal network route until you start
the cage again, provided Android's **Block connections without VPN** setting remains off.

Android lists `systemExempted` and its eligibility conditions in the
[foreground-service type reference](https://developer.android.com/develop/background-work/services/fgs/service-types#system-exempted).

### When should I use precise timing?

*Let day passes and schedules change at the exact minute, even while the phone sleeps.*

Optional. Without it, schedules and day passes still work — they are backed by an inexact
fallback and may fire a little late.

### How do I turn on Always-on VPN?

This is the persistence mechanism worth setting up: it brings the cage up at boot, before your apps
start.

```text
Settings ▸ Network & internet ▸ VPN ▸ ⚙ next to NetCage ▸ Always-on VPN
```

The setup screen has an **Open VPN settings** button that takes you there.

:::warning Leave "Block connections without VPN" off
That switch tells Android to drop all traffic that is not going through the VPN. NetCage's tunnel
carries **only caged Android UIDs**, so turning it on would cut off every app outside those UIDs — the
exact opposite of what NetCage is for.
:::

Android exposes no way for an app to read whether Always-on is enabled, so NetCage never marks this
step as done and never nags you about it.

## How do I show on-device data totals?

**Settings ▸ Advanced ▸ Grant Usage Access for data totals.**

This unlocks the per-app **Data used** figures in the detail view, and the "Data used (7 days)" sort
order. It is granted in Android's own settings, as an app op, so there is no in-app dialog for it.

Caging never depends on it. Denying it changes nothing except that the totals are not shown.

## How do I start the cage with the phone?

**Settings ▸ Behaviour ▸ Auto-start on boot** restores the cage after a restart. Combined with
Always-on VPN, the cage is up before your apps get a chance to reach the network.

## What should I set up next?

- [Caging apps](./caging-apps.md) — the list, filters, bulk actions and icons.
- [Widgets and the Quick Settings tile](./widgets-and-tile.md) — control it without opening the app.
