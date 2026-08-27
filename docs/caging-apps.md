---
title: Caging apps
description: The app list, search, filter chips, sort orders, bulk cage and release with undo, the detail view, per-app icons, hiding apps, and rules for apps that are no longer installed.
sidebar_position: 4
tags: [usage, app-list, icons]
---

Caging an app is one toggle on its row in the list. Everything else on this page is about finding
the right app quickly and managing a lot of them at once.

## What appears in the list

Only apps that **request Android's `INTERNET` permission** are listed. An app that never asks for
network access cannot be meaningfully caged, so it is not offered.

Also excluded:

- **NetCage itself.** It is never listed and can never be caged.
- **System apps**, unless you turn on **Settings ▸ Behaviour ▸ Show system apps**.
- **Disabled and archived apps.** An app frozen with a device-admin or developer tool, or one Play
  has auto-archived (the record and data remain, the APK does not), cannot run — so it is not shown
  as cageable.

If you are looking for an app and cannot find it, one of those four is almost always the reason.

## Caging one app

Tap the toggle on the row. The row gains a **Caged** badge, and the header at the top of the screen
switches to **Cage active** with a count of how many apps are blocked.

Toggling the master switch off leaves your selections exactly as they are — it stops enforcing,
it does not clear anything.

## Search, filters and sorting

**Search apps** matches on the app's name.

**Filter chips** sit above the list. A chip is only offered when the list actually contains
something it would match, so you never tap a chip that returns nothing:

| Group | Chips |
|---|---|
| Scope | All · Caged · User · System |
| Transport | Wi-Fi only · Mobile only |
| Category | Browsers · Games · Social · Media · Shopping · Finance · News · Maps · Productivity |

**Caged** means *effectively blocked right now* — by hand or by a schedule.

**Sort by** is in the overflow menu (⋮) at the top right: Name, Caged first, Recently installed,
Data used (7 days), Recently caged. The usage sort is offered only when Usage Access has been
granted; see [Install and setup](./install-and-setup.md#optional-usage-access).

## Caging many apps at once

Once a chip or a search has narrowed the list to two or more apps, an action bar appears at the
bottom offering **Cage all N** and **Release all N**. Both act on **everything currently shown** —
the chip and the search box together decide what that is. Each button appears only when it would do
something: **Cage all** when at least one shown app is not caged, **Release all** when at least one
is.

The bar deliberately does not appear on the unfiltered list, so there is no way to cage the whole
phone by mistake.

So "cage every browser" is: tap **Browsers**, tap **Cage all**. The confirmation reads *Selection
updated* and carries an **Undo**, which restores exactly what was selected before.

## The detail view

Tapping a row opens the app's detail view.

| Control | What it does |
|---|---|
| **Block on** — Wi-Fi, Mobile data | Restricts the rule to one transport. An app caged on mobile only still has Wi-Fi |
| **Day pass** | Lets this app back online briefly — see [Schedules and day passes](./schedules-and-day-passes.md#day-passes) |
| **Note** | Why you caged it. Yours; nothing reads it |
| **Data used** | Total, Wi-Fi and mobile, over Today / 7 days / 30 days. Needs Usage Access |
| **Pin to widget** | Adds a direct toggle for this app to the home-screen widget |
| **Set a custom icon** | Pick an image for this app |
| **Hide from list** | Removes it from the list without deleting its rule |
| **Open app info**, **Launch app**, **Uninstall** | Hand off to Android's own screens |

It also shows the app's version, UID, install and update dates, and which store installed it.

### Apps that share a user ID

Some apps are installed under one shared user ID. Android blocks by user ID, so those apps get
caged together — there is no way to separate them. When this applies, the detail view names the
siblings so you can see exactly what else is affected.

The same is true of the **Data used** figures: Android's accounting is per user ID, so where apps
share one, the totals cover all of them. The detail view says so on the spot.

## Icons

**Settings ▸ Appearance ▸ App icons** chooses between:

- **Installed app icons** — the app's real launcher icon.
- **Generic by category** — a neutral glyph per category, for a calmer list.

Independently of that setting, any app can be given a **custom icon** from its detail view. The
image is chosen through Android's system photo picker, which hands NetCage the one image you
selected — the app holds no storage or media permission and cannot see anything else. **Remove
custom icon** puts it back.

If you are signed in, custom icons travel to your other devices; see
[Account and sync](./account-and-sync.md).

## Hidden apps

**Hide from list** is for apps you never want to think about again. The app disappears from the
list; its rule is untouched.

They are listed under **Settings ▸ Data ▸ Hidden apps (N)**, where **Unhide** brings one back. The
row only appears when something is hidden.

## Rules for apps that are no longer installed

Uninstalling an app does not delete the rule you made for it. That is deliberate: if you sync
between two phones, a rule for an app that is missing *here* may be the rule that is doing the work
*there*, and deleting it locally would delete it everywhere.

Those rules are collected under **Settings ▸ Data ▸ Rules for apps not on this device (N)**, which
opens a **Rules for missing apps** screen where each one can be **Remove**d. The row only appears
when such rules exist.
