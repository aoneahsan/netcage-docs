---
title: Widgets and the Quick Settings tile
description: Control the cage without opening the app — a Quick Settings tile for the master switch, and a home-screen widget with per-app toggles for the apps you pin.
sidebar_position: 7
tags: [widgets, quick-settings, usage]
---

Two surfaces work without opening NetCage: a **Quick Settings tile** in the notification shade, and
a **home-screen widget**.

## The Quick Settings tile

The tile is the master switch. Tapping it turns the whole cage on or off, and its subtitle says
which state you are in — the number of apps caged when it is active, or why it is not.

It reflects **verified** state rather than a remembered setting. Android routinely draws a tile in a
process created seconds earlier with the app long dead, so the tile asks the engine what is actually
running before it renders. That is why it never offers to "turn on" a cage that is already up, and
never reports success over a tunnel that has been revoked.

Two cases behave specially:

- **VPN permission not yet granted.** Consent needs a visible screen and a tile is not one, so the
  tile opens NetCage instead of silently doing nothing.
- **Nothing caged.** There is nothing to establish, so the tile stays inactive.

The subtitle is shown on Android 10 and newer; on Android 8 and 9 the tile shows its label and state
only.

### Adding it

On **Android 13 and newer**, **Settings ▸ Advanced ▸ Add the NetCage tile from the prompt** asks
Android to offer the tile directly.

Below Android 13 the tile still exists — open the shade, edit the tile layout, and drag **NetCage**
in from the available tiles.

## The home-screen widget

Add it the usual way: long-press the home screen ▸ Widgets ▸ NetCage.

There is one widget with two genuinely different layouts, chosen by the size you give it:

- **Small** — the master control and the caged count, and nothing else. Anything more would be
  clipped at that size, and a clipped row is worse than an absent one.
- **Medium** — the master row, plus a direct toggle for each app you have pinned. Up to three are
  listed; beyond that the widget says **+N more apps**.

When nothing is caged it reads *Nothing is caged*. When the VPN permission has not been granted it
reads *Open NetCage to allow the VPN*. When no apps are pinned, the medium widget reads *Pin apps
from the detail sheet*.

Like the tile, the widget reads live state from the engine rather than a stored flag, so a widget
rebuilt in a fresh process shows what is really running.

### Pinning apps

Open an app's detail view and use **Pin to widget**; **Unpin from widget** removes it. A pinned row
on the widget toggles that one app's cage directly, without opening NetCage.

Pinned apps are part of your configuration, so they are exported, imported and synced along with
everything else.

## While an import is being finished

If a configuration import was interrupted, both surfaces say **Finishing an import** and go inert
until it completes. There is nothing safe for a tap to do while the two halves of a configuration
disagree, so neither offers a control it could not honour.
