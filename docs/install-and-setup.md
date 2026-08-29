---
title: Install and setup
description: First launch, the VPN consent, the Finish setup card, Always-on VPN, battery, notifications, precise timing and optional Usage Access.
sidebar_position: 3
tags: [setup, permissions, always-on-vpn]
---

NetCage needs **Android 8.0 or newer**. It does not need root, and it does not need a computer.

## First launch

The app list is the first screen. You can browse and search every app before granting anything.

At the top sits a card reading **One tap to start** — *NetCage needs Android's VPN slot* — with a
**Grant permission** button. Tapping it shows NetCage's own disclosure first:

> NetCage uses Android's VPN slot
>
> Only the apps you cage are routed into NetCage's tunnel, where their connections are refused
> straight away — so a caged app reports no internet instead of hanging. Nothing you send is read,
> stored or forwarded anywhere. Every other app connects normally. Android will now ask you to
> allow the VPN connection.

Choose **Continue** and Android's own VPN consent dialog appears. That dialog is the system's, not
NetCage's; it is where Android tells you the app can monitor network traffic, which is the warning
it shows for every VPN app. Choose **Not now** and nothing is requested — you can come back to the
card whenever you like.

The disclosure is shown once. After you have accepted it, the consent dialog opens directly.

## The "Finish setup" card

Once the VPN permission is granted, a **Finish setup** card appears at the top of the list whenever
a useful grant is still missing. It lists only the steps that are actually open, and offers:

- **All steps** — opens the full setup screen.
- **Not now** — snoozes the card. It remembers which steps were open when you dismissed it.

The full screen is **Settings ▸ Advanced ▸ Setup & permissions**, and it re-reads every grant
from the system each time you open it, so changing something in Android's settings and coming back
shows the truth rather than a cached answer.

## The setup steps

The screen lists them in this order. Steps that do not apply to your Android version are not shown.

### VPN permission

*NetCage routes caged apps into a dead end using Android's VPN slot. Their traffic is discarded on
this phone — nothing is inspected, stored or sent anywhere.*

Required. Nothing can be caged without it.

### Battery

*Exempt NetCage from battery optimisation so Android never kills the cage in the background.*

Strongly recommended. Without the exemption, Doze can stop the service and the cage silently drops.

### Notifications

*Android shows a notification while the cage is up. Allow it so the cage is not killed.*

Android 13 and newer. The notification is not optional decoration: Android requires a visible
notification while a VPN is active, and it is also where the **Pause 15m**, **Stop** and **Resume**
actions live.

### Precise timing

*Let day passes and schedules change at the exact minute, even while the phone sleeps.*

Optional. Without it, schedules and day passes still work — they are backed by an inexact
fallback and may fire a little late.

### Always-on VPN

This is the persistence mechanism worth setting up: it brings the cage up at boot, before your apps
start.

```text
Settings ▸ Network & internet ▸ VPN ▸ ⚙ next to NetCage ▸ Always-on VPN
```

The setup screen has an **Open VPN settings** button that takes you there.

:::warning Leave "Block connections without VPN" off
That switch tells Android to drop all traffic that is not going through the VPN. NetCage's tunnel
carries **only the apps you caged**, so turning it on would cut off every app that is *not* caged —
the exact opposite of what NetCage is for.
:::

Android exposes no way for an app to read whether Always-on is enabled, so NetCage never marks this
step as done and never nags you about it.

## Optional: Usage Access

**Settings ▸ Advanced ▸ Grant Usage Access for data totals.**

This unlocks the per-app **Data used** figures in the detail view, and the "Data used (7 days)" sort
order. It is granted in Android's own settings, as an app op, so there is no in-app dialog for it.

Caging never depends on it. Denying it changes nothing except that the totals are not shown.

## Optional: start with the phone

**Settings ▸ Behaviour ▸ Auto-start on boot** restores the cage after a restart. Combined with
Always-on VPN, the cage is up before your apps get a chance to reach the network.

## Next

- [Caging apps](./caging-apps.md) — the list, filters, bulk actions and icons.
- [Widgets and the Quick Settings tile](./widgets-and-tile.md) — control it without opening the app.
