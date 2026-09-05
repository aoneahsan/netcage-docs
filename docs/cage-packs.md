---
title: Cage Packs
description: Publish, import, report, block and unblock shared NetCage profiles without exposing the publisher's account identity.
sidebar_position: 6
tags: [cage-packs, profiles, sharing, moderation]
---

A Cage Pack is a shareable, editable profile containing a name, emoji and Android package list. Importing
creates a profile and leaves it switched off. Review the apps first, then decide whether to activate it.

## How do I publish a Cage Pack?

Sign in, open **Profiles**, choose a profile and select **Publish Cage Pack**. Review what becomes public,
accept the current Cage Pack Terms, then choose **Publish**.

Anyone with the link can read the pack's name, emoji and Android package list. Opening the link also
returns an opaque publisher ID so another phone can recognise and block packs from the same publisher. It
does not return your Google identity or Supabase user ID.

Do not publish hate, harassment, sexual or violent content, illegal instructions, impersonation, malware
promotion or deceptive links. Reports can remove a pack from new imports while it is reviewed.

## How do I import a Cage Pack?

Open the link in NetCage. Importing needs no account. The preview shows the apps installed on this phone
and counts package names that are not installed. NetCage skips missing packages.

Choose **Import** to create an editable profile. It stays switched off until you inspect it and choose to
activate it.

## How do I report a Cage Pack?

Choose **Report** in the import preview, select a reason, add optional details and send. Reporting needs no
account. The first valid report disables new imports while the developer reviews the pack. Import stays
disabled on the reporting installation.

NetCage sends the pack code, reason, optional details and a random token for this installation. The report
service stores an HMAC-derived hash of the token to suppress duplicates and limit report volume.

## How do I block a publisher?

Choose **Block** in the import preview. Import is disabled for that pack, and this phone refuses future
packs carrying the same opaque publisher ID. The ID stays on this phone; blocking does not send your
choice to the publisher.

An immediate **Undo** is available. Later, open **Settings ▸ Data ▸ Blocked publishers** and choose
**Unblock**. Removing the local block does not restore a pack its author removed or moderation made
unavailable.

## Why is a Cage Pack unavailable?

Its publisher may have removed it, a report may have placed it under review, the developer may have
removed it after review, or the publisher may have deleted the account. A suspended publisher cannot
publish again by deleting and recreating the local publisher record.

## Do I need an account?

Publishing needs a signed-in account so the pack has an owner. Importing, reporting and local publisher
blocking work signed out.

Read the binding [Cage Pack Terms](https://netcage.aoneahsan.com/terms) and the complete
[privacy explanation](./privacy.md) before publishing.
