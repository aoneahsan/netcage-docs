---
title: Account and sync
description: Optional Google sign-in that keeps your rules, profiles, schedules, settings, hidden apps and custom icons the same on every phone — what syncs, what never does, and how to delete the account.
sidebar_position: 8
tags: [account, sync, google-sign-in]
---

Everything in NetCage works signed out. An account adds exactly one thing: your setup follows you
to your other phones.

Everything on this page lives under **Settings ▸ Account**.

## Signing in

Sign-in is **Google only**, through Android's Credential Manager — the account picker Android
itself shows. There is no password, and no other sign-in method.

> Sync across your devices
>
> Sign in to keep your caged apps, profiles, schedules, hidden apps and custom icons the same on
> every phone. Everything works without an account — this only adds sync.

What is stored for the account itself is your email address, your display name and an account id,
taken from the Google sign-in token.

Once signed in the section shows **Signed in as …** plus:

| Control | What it does |
|---|---|
| **Sync this device** | Turn syncing on or off for this phone without signing out |
| **Sync now** | Run a sync immediately instead of waiting for the next change |
| **Sign out** | Ends the session. Nothing on the phone is changed or deleted |
| **Delete account** | Removes the account and everything stored for it — see below |

Sync status is shown plainly, including the states that are not errors: *Not syncing*, *Syncing…*,
*Not synced yet*, *Last synced …*. Failures say what to do — *Could not reach the server. It will
retry.*, *Your session expired. Sign in again.*

## What syncs

Your **whole configuration**, as one document:

- Every cage rule — which apps, which transports, and the note you wrote.
- Profiles and their members.
- Schedules.
- Preferences: auto-start on boot, show system apps, theme, dynamic colour, AMOLED, haptics,
  sort order, notification app count, default day pass duration, icon style, root engine.
- Hidden apps.
- Widget pins.
- Custom icons.

## What never syncs

Anything that describes *this phone at this moment* rather than your configuration:

- Day passes and the global pause. Both are deadlines against a clock; restoring "released until
  14:20" days later would silently release an app.
- Permission grants, and whether setup is finished.
- The setup-reminder snooze and the VPN disclosure acknowledgement.
- The privacy switches.
- The event log.

## Rules for apps you do not have here

A rule for an app that is not installed on this phone is **kept**, not deleted. If you cage an app
on your tablet that is not on your phone, the phone must not push a configuration that erases it.

Those rules stay out of the way — they are not shown in the list — and are managed under
**Settings ▸ Data ▸ Rules for apps not on this device**. See
[Caging apps](./caging-apps.md#rules-for-apps-that-are-no-longer-installed).

## When two phones both have a setup

Sync is last-writer-wins on the whole document, which is unambiguous once both devices have synced
at least once. The awkward case is the first time, and it is asked rather than guessed:

> Two setups found
>
> This phone and your account both have a NetCage setup, and they are different. Choose which one
> to keep — the other is replaced.

The answers are **Use my account's setup** and **Use this phone's setup**. There is no automatic
rule that could get this right, and any automatic rule would silently discard someone's real work.

You are asked **once per phone per account**. After that the question is settled and the later
write wins. The other cases never ask, because nothing can be lost:

| Situation | What happens |
|---|---|
| The two are identical | Nothing to do |
| Nothing stored for the account yet | This phone's setup is uploaded |
| Fresh install signing in | The account's setup is applied |
| This phone wrote what is stored, and has drifted since | This phone's setup is uploaded |
| Both real and different, and this phone has never synced | **You are asked** |
| Steady state, the account changed after this phone's last sync | The account's setup is applied |

## Custom icons

An icon you set for an app is stored on the phone. When you are signed in it is also uploaded, so
the same icon appears on your other devices; the configuration document holds a reference to it
rather than the image itself.

Signed out, custom icons stay local and are never uploaded.

## Deleting the account

**Settings ▸ Account ▸ Delete account**:

> This permanently deletes your account, the configuration stored in the cloud and any custom icons
> you uploaded. It cannot be undone.
>
> The apps caged on this phone are not changed, and NetCage keeps working signed out.

Confirm with **Delete permanently**. The uploaded icons are removed first, then the account and
every row belonging to it.

The same deletion is available on the web at
[netcage.aoneahsan.com/delete-account](https://netcage.aoneahsan.com/delete-account).

## Related

[Privacy](./privacy.md) covers what leaves the device in every other case, including when you are
signed out.
