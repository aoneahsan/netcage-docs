---
title: Profiles
description: Group apps into a named set — work, travel, study — and cage the whole set in one action, either replacing your current selection or adding to it.
sidebar_position: 5
tags: [profiles, usage]
---

A profile is a named group of apps with an optional emoji. It is a saved selection, not a mode:
creating one changes nothing on its own, and activating one is a single action you can undo.

Open it from the overflow menu (⋮) on the app list ▸ **Profiles**.

## Creating a profile

**New profile** asks for a name and, optionally, an emoji from a small palette. **Save current
selection** creates a profile from whatever is caged right now, which is usually the fastest route:
cage the apps you want, then save the result as *Evening* or *Focus*.

A profile needs a name and at least one app. Both are checked at the field, so you find out before
you tap save:

- *Give the profile a name*
- *You already have a profile with that name*
- *Choose at least one app*

## Editing a profile

Each profile's menu offers:

| Action | What it does |
|---|---|
| **Edit apps** | Opens the member list, with a search box |
| **Rename** | Changes the name |
| **Duplicate** | Copies it, so a variant does not cost you the original |
| **Delete** | Removes the profile |

Editing a profile's members does not change what is caged right now. Activate it again to apply
the new set.

## Activating a profile

Activating asks how it should combine with what is already caged:

- **Replace selection** — your manual selection becomes exactly this profile's apps. This is the
  default.
- **Add to selection** — the profile's apps are added to what is already caged; nothing is
  released.

The confirmation names the profile — *Activated Evening* — and offers **Undo**, which restores the
selection exactly as it was before.

:::note Activation touches only your manual selection
Schedules contribute their apps independently. Activating a profile can never silently cancel a
schedule, and a schedule can never overwrite the selection you made by hand.
:::

## Profiles and schedules

A [schedule](./schedules-and-day-passes.md) can target a profile rather than a single app. That is
the usual way to run something like "cage the *Focus* profile on weekdays from 09:00 to 17:00" —
edit the profile's members and every schedule pointing at it follows.

## Profiles across devices

A profile carries a device-independent identity, so the same profile stays the same profile through
an export and import, and across two phones sharing an account. Schedules reference that identity
rather than a name, so two profiles with similar names never get confused for one another.

See [Account and sync](./account-and-sync.md).
