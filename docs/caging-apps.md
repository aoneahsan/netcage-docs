---
title: Caging apps
description: The app list, search, filter chips, sort orders, bulk cage and release with undo, the detail view, per-app icons, hiding apps, and rules for apps that are no longer installed.
sidebar_position: 4
tags: [usage, app-list, icons]
---

Caging an app is one toggle on its row in the list. Everything else on this page is about finding
the right app quickly and managing a lot of them at once.

## What appears in the list

NetCage lists enabled, currently installed apps that request Android's `INTERNET` permission. That
includes apps with no launcher icon and other background packages: if an enabled package can connect, it
belongs in the picker.

NetCage excludes:

- **NetCage itself.** It is never listed and can never be caged.
- **System apps**, unless you turn on **Settings ▸ Behaviour ▸ Show system apps**.
- **Disabled and archived apps.** An app frozen with a device-admin or developer tool, or one Play
  has auto-archived (the record and data remain, the APK does not), cannot run — so it is not shown
  as cageable.

This is why NetCage requests full package visibility. A launcher-only query would omit the background and
non-launcher packages a per-app firewall must let you choose. The full installed inventory stays on this
phone; only package names you act on can leave through an explicit backup or Cage Pack publication.

Android explains the difference between targeted app queries and broader visibility in its
[package-visibility guidance](https://developer.android.com/training/package-visibility).

## How do I cage one app?

Tap the toggle on the row. The row gains a **Caged** badge, and the header at the top of the screen
switches to **Cage active** with a count of how many apps are blocked.

Toggling the master switch off leaves your selections exactly as they are — it stops enforcing,
it does not clear anything.

## How do I find the right app?

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
granted; see [Install and setup](./install-and-setup.md#how-do-i-show-on-device-data-totals).

## How do I cage or release several apps?

Once a chip or a search has narrowed the list to two or more apps, an action bar appears at the
bottom offering **Cage all N** and **Release all N**. Both act on **everything currently shown** —
the chip and the search box together decide what that is. Each button appears only when it would do
something: **Cage all** when at least one shown app is not caged, **Release all** when at least one
is.

The bar deliberately does not appear on the unfiltered list, so there is no way to cage the whole
phone by mistake.

So "cage every browser" is: tap **Browsers**, tap **Cage all**. The confirmation reads *Selection
updated* and carries an **Undo**, which restores exactly what was selected before.

## How do I change one app's rule?

Tapping a row opens the app's detail view.

| Control | What it does |
|---|---|
| **Block on** — Wi-Fi, Mobile data | Restricts the rule to one transport. An app caged on mobile only still has Wi-Fi |
| **Day pass** | Lets this app back online briefly — see [Schedules and day passes](./schedules-and-day-passes.md#how-do-i-grant-a-day-pass) |
| **Note** | Why you caged it. Yours; nothing reads it |
| **Data used** | Total, Wi-Fi and mobile, over Today / 7 days / 30 days. Needs Usage Access |
| **Pin to widget** | Adds a direct toggle for this app to the home-screen widget |
| **Set a custom icon** | Pick an image for this app |
| **Hide from list** | Removes it from the list without deleting its rule |
| **Open app info**, **Launch app**, **Uninstall** | Hand off to Android's own screens |

It also shows the app's version, UID, install and update dates, and which store installed it.

### Why are some apps caged together?

Some apps are installed under one shared user ID. Android blocks by user ID, so those apps get
caged together — there is no way to separate them. When this applies, the detail view names the
siblings so you can see exactly what else is affected.

The same is true of the **Data used** figures: Android's accounting is per user ID, so where apps
share one, the totals cover all of them. The detail view says so on the spot.

## How do I choose a custom app icon?

**Settings ▸ Appearance ▸ App icons** chooses between:

- **Installed app icons** — the app's real launcher icon.
- **Generic by category** — a neutral glyph per category, for a calmer list.

Independently of that setting, any app can be given a **custom icon** from its detail view. The
image is chosen through Android's system photo picker, which hands NetCage the one image you
selected — the app holds no storage or media permission and cannot see anything else. **Remove
custom icon** puts it back.

A custom icon stays on this phone while you are signed out. If you sign in, the selected image can be
stored with your backup so another phone can restore it. Icon restoration requests the signed-in user's
own icon rows, then matches their package names against the eligible apps on this phone; it does not send
the phone's full eligible installed-app inventory in the icon request. Removing an uploaded icon is
fail-closed: if the storage request fails, NetCage keeps its reference and lets you retry. See
[Support, backup and account](./account-and-sync.md).

## How do I hide or restore an app?

**Hide from list** is for apps you never want to think about again. The app disappears from the
list; its rule is untouched.

They are listed under **Settings ▸ Data ▸ Hidden apps (N)**, where **Unhide** brings one back. The
row only appears when something is hidden.

## What happens to a rule when an app is uninstalled?

Uninstalling an app does not delete its rule. If you use account backup, a rule for an app missing from
this phone may still belong in the stored configuration and appear after a restore; deleting it here would
remove it from the next backup.

Those rules are collected under **Settings ▸ Data ▸ Rules for apps not on this device (N)**, which
opens a **Rules for missing apps** screen where each one can be **Remove**d. The row only appears
when such rules exist.
