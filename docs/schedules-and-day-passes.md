---
title: Schedules and day passes
description: Recurring windows that cage a profile or a single app, day passes that let one app back online briefly, the global pause, and what happens at a boundary.
sidebar_position: 6
tags: [schedules, day-pass, timing]
---

Two mechanisms move apps in and out of the cage on their own: **schedules**, which recur, and **day
passes**, which are one-off. A **global pause** stops everything for a quarter of an hour.

## How do I create a repeating schedule?

A schedule is a recurring window during which a target is caged. Open the list from the overflow
menu (⋮) on the app list ▸ **Schedules**, then **New schedule**.

| Field | Meaning |
|---|---|
| **Applies to** | Exactly one of **A profile** or **A single app** — never both, never neither |
| **Start**, **End** | Times of day, in the device's local time |
| **Days** | Which days of the week the window starts on |
| **Enabled** | Turn a schedule off without deleting it |

The editor tells you what it has understood:

- **Overnight** — the end time is at or before the start time, so the window runs into the next day.
- **Runs all day** — start and end are the same, so the window covers the whole day.

Validation happens at the field: *Choose a profile or an app*, *Choose at least one day*.

### How do schedules combine?

Schedules **union together and never cancel one another out**. Two overlapping windows on the same
app keep it caged for the whole of both; neither one releases it.

A schedule also never touches your manual selection. An app you caged by hand stays caged when a
schedule's window closes — the schedule only ever *adds* while it is open. An app contributed by a
schedule that has no rule of its own is treated as blocked on both transports, the same default a
fresh manual cage gets.

### How do I run a schedule overnight?

An overnight window is anchored to the day it **starts**. A Friday 22:00–06:00 window is still the
Friday schedule at 02:00 on Saturday, so Saturday not being one of its days does not close it early.

### What happens when the clock changes?

Windows are evaluated as instants, not as wall-clock comparisons, so the two days a year the clock
is not monotonic resolve unambiguously:

- A window that **opens inside a skipped hour** (spring forward) opens as soon as time resumes.
- A window that **spans a repeated hour** (autumn fall-back) covers the whole of it — its start
  uses the earlier occurrence and its end the later one.

## What happens at a boundary

At a start boundary the target's apps join the caged set; at an end boundary they leave it. Either
way NetCage recomputes the whole set and re-establishes the tunnel in place. The service is not
restarted, and apps that were already caged are not disturbed.

The boundary itself is scheduled as an alarm. With **Precise timing** granted (see
[Install and setup](./install-and-setup.md#when-should-i-use-precise-timing)) it fires at the exact minute,
even while the phone is asleep. Without Precise timing, WorkManager and an inexact alarm provide the
fallback, so the boundary may run later than the selected minute. When the fallback runs, it evaluates the
current clock and recomputes the whole caged set instead of replaying an old prediction.

Only the single earliest deadline is ever scheduled at once, and it is re-armed after each one, so
a phone with many schedules does not wake up repeatedly.

Deadlines are also honoured while the phone is still locked after a reboot.

## How do I grant a day pass?

A day pass lets one caged app back online for a set time, after which it re-cages itself with no
further action from you.

Open the app's detail view and use the **Day pass** row:

- Presets: **5m**, **15m**, **1h**.
- **Custom** — any value from 1 to 720 minutes.

The app must be caged first. If it is not, the buttons are disabled and the row says so: *Cage this
app first — a pass interrupts caging*.

While a pass is running, the app's row shows a **Released for …** pill, and the detail view reads
*Released for 12m · re-cages at 14:20* with a **Cancel** that ends the pass immediately.

**Settings ▸ Behaviour ▸ Default day pass duration** (5, 15, 30 or 60 minutes; 15 by default) is the
value the **Custom** dialog opens with.

If every eligible app is on a day pass at once, the cage goes inactive until the first one expires —
there is nothing left to route, and an empty allow-list is never established. See
[How it works](./how-it-works.md#why-must-the-allow-list-contain-an-app).

## How do I pause every cage for 15 minutes?

The cage notification carries a **Pause 15m** action. It suspends enforcement everywhere for
fifteen minutes; the header reads **Paused** and names the time it resumes, and the notification
offers **Resume** to end it early.

A pause leaves every selection, profile and schedule exactly as it is. So does turning the master
switch off, which is the indefinite version of the same idea.

:::note Neither day passes nor the pause are part of your configuration
Both are live deadlines measured against this phone's clock, so neither is exported, imported or stored
in account backup. Restoring “released until 14:20” after that moment could release an app unexpectedly.
:::
