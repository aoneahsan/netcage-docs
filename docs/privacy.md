---
title: Privacy
description: What the local firewall reads, which optional features send data, which providers receive it, and how account deletion works.
sidebar_position: 10
tags: [privacy, data, telemetry]
---

The binding version is the privacy policy at
[netcage.aoneahsan.com/privacy](https://netcage.aoneahsan.com/privacy). This page explains the same
facts.

## What does the local firewall read?

NetCage receives packets only from apps in Android UIDs you cage. To return a refusal, it examines the
destination address and port in the IP and transport headers in memory. It does not inspect packet
payloads, resolve a hostname, or keep a DNS, URL or traffic log. Apps outside a caged Android UID do not
enter NetCage's tunnel.

## Do package names leave this phone?

The full installed inventory stays on this phone. If you remain signed out, the firewall does not upload
the apps you cage. Account backup can store package names you acted on, including caged or hidden apps and
apps with custom icons. Publishing a Cage Pack makes its chosen package list readable to anyone with the
link. Analytics, crash reporting and announcements receive no package names, profile names, notes or
search text. Custom-icon restoration requests the signed-in user's icon rows and intersects package
membership locally; it does not send the eligible installed-app inventory in that icon query.

## Which features need an account?

The firewall, Cage Pack import and Cage Pack reporting work signed out. Cloud backup, in-app support and
publishing a Cage Pack require Google sign-in because each stored record needs an owner. A support request
can include the message, issue or request category, app version, Android version, phone model and an
optional phone number you choose through Google's Phone Number Hint sheet. NetCage holds no phone-reading
permission and attaches no caged package names.

## Which providers can receive data?

| Provider | What it can receive | Gate |
|---|---|---|
| Supabase | Account, contact, backup, support, device and Cage Pack records | Sign-in or an explicit account action |
| The developer's own file storage | The custom-icon image you selected | Sign-in and a custom icon |
| Google Analytics for Firebase | Bounded screen and feature events, app/install identifiers, advertising ID, and approximate region | **Usage analytics** |
| Amplitude | Bounded events, sessions and a random identifier for this app installation; no advertising ID, App Set ID, IP address or location fields | **Usage analytics** |
| Microsoft Clarity | Interaction data from Setup, Help and Other apps by the same developer; sensitive and unknown routes stay masked and paused | **Usage analytics** |
| Sentry | Exception type, stack frames, bounded tags, device, OS and app version; no event message, exception value, breadcrumb or request data | **Send crash reports** |
| OneSignal | Push subscription, sessions, notification interactions, device/app metadata, country and IP address | **Announcements** |
| Google Play | Update availability and the Play update flow | Play-installed build |

Usage analytics, crash reports and announcements start off. NetCage does not send those providers your
Supabase account ID, name or email address, and makes no OneSignal login or alias call. The website can use
Google Analytics, Amplitude, Microsoft Clarity and Sentry only after website consent; website Sentry removes
error messages, breadcrumbs, request fields and user fields. Clarity records a replay of a website visit and
masks text typed into form fields.

## What does this documentation site collect?

This site is separate from the app and from the product website, and it is worth stating on its own because
a reader arrives here without signing in to anything.

If the developer has configured them, this site loads Google Analytics, Amplitude and Microsoft Clarity to
measure which pages are read and where readers get stuck. They receive the page path, referrer, bounded
browser and device details, an analytics identifier and an approximate region derived from the connection;
Clarity additionally records a replay of the visit to this site. Each provider is loaded only when its
identifier is present in the build, so an unconfigured site loads none of them and reports nothing.

This site has no account, no sign-in and no form. It never receives a NetCage account ID, an email address,
a phone number or the name of any app you have caged — those never leave the app except through the features
described above.

## What is collected for Cage Pack safety?

Reporting a Cage Pack needs no account. NetCage sends the pack code, a reason, optional details and a
random installation token. The report service stores an HMAC-derived hash of that token to limit volume
and duplicate reports. The first valid report makes the pack unavailable for new imports while the
developer reviews it. Blocking a publisher is local: the opaque publisher ID stays on this phone until
you unblock it.

## Which permissions define the boundary?

`QUERY_ALL_PACKAGES` fills the picker with enabled, currently installed apps capable of internet access,
including background and non-launcher packages. `FOREGROUND_SERVICE_SYSTEM_EXEMPTED` is the eligible
foreground-service type declared for the configured VPN service; the release does not declare
`FOREGROUND_SERVICE_SPECIAL_USE`. Usage Access is optional and powers on-device data totals. NetCage holds
no camera, microphone, location, contacts, SMS, call-log, phone-number, media or storage permission.

Android documents the picker boundary in its
[package-visibility guidance](https://developer.android.com/training/package-visibility) and the VPN type
in its
[`systemExempted` reference](https://developer.android.com/develop/background-work/services/fgs/service-types#system-exempted).

## How does deletion work?

Delete the cloud account under **Settings ▸ Account ▸ Delete account**, or use the public deletion page.
The server first asks the developer's own storage to delete every referenced custom icon. Only a 2xx
response or a 404 confirming an object is already absent allows deletion to continue. Any other response
preserves the identity, icon references and other account rows so you can retry. A completed deletion
removes the account's backup, contact and support rows, publisher record, published Cage Packs and records
attached through those packs. The cages on this phone do not change.

Provider telemetry follows each provider's retention period. Mailbox copies of website contact messages
and in-app support notifications sit outside the NetCage database and may remain until the developer
deletes them manually; NetCage promises no fixed mailbox deletion period.

## What does NetCage not collect?

NetCage does not collect precise location, financial information, health or fitness data, contacts,
calendar entries, audio, video, SMS or email content from your messaging accounts, files and documents,
or web browsing history. It holds no permission for those data types.

Approximate region is different: Google Analytics for Firebase can derive it from a masked IP address,
and Microsoft Clarity can receive country or region after you enable Usage analytics. A custom icon is
also a photo you choose through Android's system picker. Export and import use the system document picker
on this phone; NetCage does not upload the selected backup file.

## How long is data kept?

Your contact row and backup configuration remain until you change them or delete the account. Device and
support records remain until account deletion. The publisher record and published Cage Packs remain until
account deletion, unless the developer removes a pack or publisher record for moderation.

Account deletion removes database rows only after every referenced custom icon is confirmed deleted or
already absent. Until then, the identity, references and other account rows remain so you can retry. A
completed deletion includes published packs and reports attached to those packs. A report can remain with
the moderation record after review while its pack exists.

Provider telemetry and crash data follow each provider's retention period. Turning a Settings switch off
stops new collection by that category. Website contact email and mailbox notification copies of in-app
support requests sit outside the NetCage database and may remain until the developer deletes them
manually; NetCage promises no fixed mailbox deletion period. Device-only settings and the report token
disappear when you clear NetCage's app data or uninstall it.

## Where can data be processed?

Supabase runs the account database and server functions. Custom icons and website contact email use the
developer's own storage and email service. Google, Microsoft, Amplitude, Sentry and OneSignal can process
their respective data in more than one country under their own terms. NetCage cannot promise that every
optional service uses one jurisdiction.

## Is NetCage for children?

NetCage is intended for people aged 18 and over. It is not directed at children and does not knowingly
collect their data. If you believe a child has created an account, use the public contact page so the
developer can remove it and its associated records.

## How can I access, correct or delete my data?

Sign in on the website to export the configuration stored for your account. Correct it in NetCage and
sync again, or turn off Usage analytics, crash reports and announcements separately in Settings.

Delete the cloud account under **Settings ▸ Account ▸ Delete account**. The public deletion page links to
the Google sign-in and deletion-confirmation flow on the account page. A completed request removes the
account and its cloud records; a custom-icon storage failure preserves them and returns a retryable
failure. Your phone's cages stay unchanged. Clear the app's data or uninstall it to remove device-only
records. Use the contact page for a question or complaint.
