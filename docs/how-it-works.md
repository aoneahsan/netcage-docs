---
title: How it works
description: NetCage routes only the apps you cage into a VpnService tunnel that goes nowhere, and discards their packets unread. The mechanism, and the invariant that keeps it safe.
sidebar_position: 2
tags: [mechanism, vpnservice, architecture]
---

Android does not let an ordinary app revoke another app's `INTERNET` permission or write firewall
rules. What it *does* allow is a `VpnService` with **app-based routing**, and that is the lever
NetCage uses.

## The sinkhole tunnel

NetCage builds a VPN tunnel that goes nowhere:

1. A private address and a default route (`0.0.0.0/0`, `::/0`).
2. `addAllowedApplication()` for **caged apps only**. With a non-empty allow-list, Android routes
   only those apps through the tunnel; every other app uses the network as if no VPN existed.
3. Packets that arrive are read and discarded. Nothing is forwarded, parsed, inspected or logged.

A caged app's traffic therefore vanishes on the device. It is not slowed, redirected or filtered —
it goes into the tunnel and stops there.

Everything else is untouched. Apps that are not caged never enter the tunnel at all, so there is no
latency cost, no battery cost and no inspection for them: their traffic never enters NetCage's
process in the first place.

Because there is no server at the far end, Android's own connectivity probe reports that the VPN
has no internet access. That report is correct, and it is cosmetic — see
[Limitations](./limitations.md).

## The invariant that matters

**An empty allow-list is not "cage nothing" — it is "route the entire phone into the sinkhole".**

Android's rule is simple: with no allowed applications, the default route applies to everything. A
tunnel established with an empty allow-list would take the whole device offline.

So NetCage never reaches `establish()` unless at least one non-self package was **successfully
added**. Counting successes rather than inputs is the point: five caged apps that have all since
been uninstalled would pass a naive emptiness check, and then take the device offline.

When the effective set is empty, the service is torn down instead — the cage goes inactive and the
app says why.

:::note
NetCage's own package is never added to the allow-list, and the tunnel never uses `allowBypass()`.
:::

## One decision, computed once

Which packages the tunnel should route is decided by a single pure function. The order of its
stages is deliberate, because each one produces a different reason for an empty result, and the app
shows you that reason rather than a blank screen:

1. **Master switch**, then **global pause**. Both leave your selections intact rather than clearing
   them.
2. **Eligibility** — an app is eligible if you caged it by hand, or if a schedule is contributing it
   right now.
3. **Day passes** — an active pass removes an otherwise-eligible app from the set.
4. **Transport** — a rule only applies on the transports it was configured for, evaluated against
   the device's current default network.
5. **Defensive filtering** — blanks, duplicates, and NetCage itself.

If the result is empty at any stage, the cage goes inactive. It is never handed to `establish()`.

A change to your rules does not restart the service. The tunnel is re-established in place, after a
short debounce, so a run of quick toggles produces one re-establish rather than a dozen.

## Before the phone is unlocked

After a reboot, and before the device has been unlocked for the first time, the app's own database
is unreadable — Android's file-based encryption has not been opened yet. NetCage still needs to
know what to cage.

It plans that first tunnel from a device-protected snapshot instead, and feeds that snapshot
through **the same** decision function described above. The locked-boot path and the ordinary path
therefore cannot disagree about what is caged.

No network component is started on that path. Nothing that talks to the internet — sign-in, sync,
analytics, crash reporting, ads — is initialised before the device is unlocked.

## The two engines

The supported mechanism is the VPN described above, and it is the default.

There is also an opt-in **root engine**, which writes firewall rules directly instead of holding
the VPN slot. It is labelled experimental in the app because it has never run on rooted hardware.
Read [Limitations](./limitations.md#root-mode-is-experimental) before enabling it.

Nothing above the engine layer knows which engine it got. The set of caged apps is computed the
same way either way.
