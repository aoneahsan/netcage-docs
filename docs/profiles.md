---
title: Profiles
description: Group apps into a named set — work, travel, study — and cage the whole set in one action, either replacing your current selection or adding to it.
sidebar_position: 5
tags: [profiles, usage]
---

A profile is a named group of apps with an optional emoji. It is a saved selection, not a mode:
creating one changes nothing on its own, and activating one is a single action you can undo.

Open it from the overflow menu (⋮) on the app list ▸ **Profiles**.

## How do I create a profile?

**New profile** asks for a name and, optionally, an emoji from a small palette. **Save current
selection** creates a profile from whatever is caged right now, which is usually the easiest
route: cage the apps you want, then save the result as *Evening* or *Focus*.

A profile needs a name and at least one app. Both are checked at the field, so you find out before
you tap save:

- *Give the profile a name*
- *You already have a profile with that name*
- *Choose at least one app*

## How do I edit a profile?

Each profile's menu offers:

| Action | What it does |
|---|---|
| **Edit apps** | Opens the member list, with a search box |
| **Rename** | Changes the name |
| **Duplicate** | Copies it, so a variant does not cost you the original |
| **Delete** | Removes the profile |

Editing a profile's members does not change what is caged right now. Activate it again to apply
the new set.

## How do I activate a profile?

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

## How do I use a profile in a schedule?

A [schedule](./schedules-and-day-passes.md) can target a profile rather than a single app. That is
the usual way to run something like "cage the *Focus* profile on weekdays from 09:00 to 17:00" —
edit the profile's members and every schedule pointing at it follows.

### Share a profile as a Cage Pack

A signed-in user can publish a profile as a Cage Pack after accepting the current publishing terms. The
link exposes the pack name, emoji and Android package list, plus an opaque publisher ID used for blocking;
it does not expose the publisher's Google or Supabase identity.

Importing needs no account. It creates an editable profile and leaves it switched off, so the recipient
reviews the installed matches before choosing whether to activate it. Reporting and publisher blocking
are covered on [Cage Packs](./cage-packs.md).

## How do I restore a profile from backup?

Profiles keep a device-independent identity through export, import and optional account backup. A
schedule refers to that identity rather than the profile name, so renaming a profile does not detach its
schedule. See [Support, backup and account](./account-and-sync.md).
