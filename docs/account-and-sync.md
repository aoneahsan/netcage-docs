---
title: Support, backup and account
description: Restore a NetCage setup, contact in-app support, understand what sign-in owns, and delete the cloud account.
sidebar_position: 8
tags: [account, backup, support, deletion]
---

The firewall works signed out. Google sign-in is for features whose private records need an owner: cloud
backup, in-app support replies and Cage Pack publishing. Importing and reporting a Cage Pack do not need
an account.

## How do I sign in?

Open **Settings ▸ Account** and choose **Continue with Google**. Google supplies the name and email address
for authentication; Supabase stores the account identifier, contact row and versioned configuration.

If account features are unavailable in the build, caging still works. Use the public
[contact page](https://netcage.aoneahsan.com/contact) for account help.

## How does backup work?

When **Sync this device** is enabled, NetCage can store a versioned copy of the phone's rules, profiles,
schedules, preferences, hidden apps, pinned apps, device details and custom-icon references. The phone
remains the working source of truth.

If this phone and the stored account configuration differ, NetCage asks which one to keep: **Use account
setup** or **Use this phone**. It replaces the other only after that choice. A sync failure leaves the
current setup on this phone unchanged.

Live day passes and the global pause are not backed up. They are deadlines tied to this phone's clock.

## How are custom icons restored?

A custom icon stays on this phone while you are signed out. If you sign in, the selected image can be
stored with the backup. Restoration requests only this account's icon rows, then matches their package
names against eligible apps on the phone; it does not send the phone's installed-app inventory in that
request.

Removing an uploaded icon is fail-closed. If storage cannot confirm deletion, NetCage keeps the local icon
and cloud reference so you can retry.

## How do I contact in-app support?

Open **Settings ▸ Account ▸ Get help**, sign in, choose **Report an issue** or **Request a feature**, and
send the message. Google sign-in gives the request an owner and gives any reply a private place to return.
The reply appears on the same screen.

The request stores its message and category, app version, Android version and phone model. Bounded details
from the last sync failure can be included in the developer notification. NetCage never attaches caged app
names.

## Is a phone number required?

No. You may type one or choose **Use mine** to open Google's Phone Number Hint sheet. NetCage stores a
number only after you choose it and holds no phone-reading permission.

## How do I delete the account?

Choose **Settings ▸ Account ▸ Delete account**, or use the public
[account-deletion page](https://netcage.aoneahsan.com/delete-account).

The server first asks storage to delete every referenced custom icon. Only a 2xx response or a 404
confirming an object is already absent allows deletion to continue. Any other response preserves the
identity, icon references and other account rows so you can retry.

A completed deletion removes the identity, backup, contact and support rows, stored-icon references,
publisher record and published Cage Packs. Cages stored on this phone do not change. Separate contact and
support mailbox copies may remain until the developer deletes them manually.

## What can I do while signed out?

The firewall, local profiles, schedules, day passes, widgets, export, import, Cage Pack import and Cage
Pack reporting continue to work. Backup, private support replies and Cage Pack publishing require sign-in.
