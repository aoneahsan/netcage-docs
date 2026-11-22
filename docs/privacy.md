---
title: Privacy
description: What the local firewall reads, what NetCage and its optional features send, which providers receive it, and how account deletion works.
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

Each sign-in also adds a line to Recent sign-ins under Security: the kind of browser or app, its operating
system, the time and, with two-step sign-in on, how the second step was met. NetCage names them from what the
browser reports about itself. The list keeps no IP address, place or copy of that report. Lines older than 90
days are deleted. Supabase Auth, which runs sign-in, keeps each signed-in session's browser report and IP
address until that session ends: when you sign out, use Sign out everywhere else or delete your account.

## What happens when I turn on two-step sign-in?

Two-step sign-in is optional. Turn it on under **Settings ▸ Account ▸ Security** in the app, or on the
Security tab of your account on the website, and Supabase Auth keeps the setup key your authenticator uses so
it can check each six-digit code. NetCage makes ten recovery codes at a time and stores only keyed hashes of
them, so it can't show you a set twice. It logs the time of each recovery-code try and use, each new set of
codes, each remembered or forgotten device and each authenticator replacement or reset. No code goes into that
log. Five wrong codes in a row start a five-minute wait, and NetCage keeps that count and the time the wait
ends.

In the Android app, **Remember this device for 7 days** starts unticked. Tick it and the app keeps a random
token, encrypted with a key that stays in Android's keystore, while NetCage's server keeps a hash of that
token, the app and system names Recent sign-ins shows, and the dates it starts and ends. Signing out, or
**Forget this one** or **Forget all** in Security, ends it sooner. **Sign out everywhere else** ends your
other sign-ins and leaves remembered devices as they are. The website does not remember browsers, so it asks
for a code after every Google sign-in.

NetCage emails your account's address through the developer's own email service when two-step sign-in is
turned on, when a recovery code is used and when NetCage support turns it off. Two-step sign-in stays on. To
turn it off, ask for a support reset through the public contact page. The developer checks your identity
before removing your authenticator, recovery codes and remembered devices and signing you out everywhere. The
admin audit log keeps your contact message's reference and a note of how they checked. The developer's staff
see only whether two-step sign-in is on, when it was added, how many recovery codes and remembered devices
remain and when a code was last typed or a support reset made, never a code, key or token.

## Which providers can receive data?

| Provider | What it can receive | Gate |
|---|---|---|
| Supabase | Account, contact, backup, support, device and Cage Pack records | Sign-in or an explicit account action |
| The developer's own file storage | The custom-icon image you selected | Sign-in and a custom icon |
| Google Analytics for Firebase | Bounded screen and feature events, app/install identifiers, advertising ID, and approximate region | First launch; no switch |
| Amplitude | Bounded events, sessions and a random identifier for this app installation; no advertising ID, App Set ID, IP address or location fields | First launch; no switch |
| Microsoft Clarity | Interaction data from Setup, Help and Other apps by developer; sensitive and unknown routes stay masked and paused | Opening a replay-safe screen; no switch |
| Sentry | Exception type, stack frames, bounded tags, device, OS and app version; no event message, exception value, breadcrumb or request data | First launch; no switch |
| Native Update, the developer's own update service | A random ID for this installation, the app and word-file versions, the platform, the package name and a signing-certificate fingerprint | Opening NetCage 1.5.0 or later; no switch |
| Polar | Checkout for Plus and Family: your account ID and email address from NetCage; your name, billing country and payment details on its own pages | Choosing a paid plan |
| OneSignal | Push subscription, sessions, notification interactions, device/app metadata, country and IP address | **Announcements** |

Usage analytics and crash reporting are on from the first launch, with no switch to turn them off, and
NetCage says so once. Announcements start off. NetCage does not send those providers your Supabase account
ID, name or email address, and makes no OneSignal login or alias call.

From 1.5.0, NetCage asks Native Update for newer word files each time you open or return to it. A check
carries no account details, app names or cages. Newer files download from the developer's own file storage
and are used from the next start only if their signature matches NetCage's key. They change words only;
new features and permissions still need a new APK.

Polar runs checkout for Plus and Family on the website and is the seller of record. To open your checkout,
NetCage sends Polar your account ID and email address with the plan, period and seats you chose. Polar
collects your name, billing country and payment details on its own pages. NetCage never sees a card number.
Polar then tells NetCage about each order and subscription: its reference, plan, seats, amounts and currency,
the period it covers, any refund and the renewal date. NetCage keeps those records so your plan applies.
Deleting your account stops any renewal at the end of the period already paid for.

The public website measures page views, bounded actions and errors through Google Analytics, Amplitude and
Sentry from your first visit. A short bar says so once. There is no setting to turn any of it off. Website
Sentry removes error messages, breadcrumbs, request fields and user fields; Microsoft Clarity never loads on
a signed-in page and masks all form text before session replay capture.

## What does this documentation site collect?

This site is separate from the app and from the product website, and it is worth stating on its own because
a reader arrives here without signing in to anything.

This site loads Google Analytics, Amplitude and Microsoft Clarity to measure which pages are read and where
readers get stuck. A short bar says so once. There is no setting to turn any of it off. These three receive
the page path, bounded browser and device details and an analytics identifier. Google Analytics and Clarity
also receive the referrer and an approximate region derived from the connection, and Clarity records a replay
of your visit. Each provider is loaded only when its identifier is present in the build, so an unconfigured
site loads none of them and reports nothing.

This site has no account, sign-in or contact form, and what you type into its search stays in your browser.
It never receives a NetCage account ID, an email address, a phone number or the name of any app you have
caged — those never leave the app except through the features described above.

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
and Microsoft Clarity can receive country or region. A custom icon is
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

Recent sign-ins are deleted after 90 days. A session's browser report and IP address go when the session ends.
Order and subscription records from Polar stay after account deletion, without the link to the account, as the
record of what was sold and refunded. Two-step sign-in records stay until account deletion. A support reset removes the setup key, recovery codes
and remembered-device records sooner. The log of security events stays. Replacing your authenticator deletes
the old setup key and ends every remembered device, and making new recovery codes replaces the old set.
Administrator audit entries, including a support reset's note, are deleted once they are older than 365
days. Native Update uses what a check sends to count active installations and failed starts, and NetCage
promises no fixed deletion period for it.

Provider telemetry and crash data follow each provider's retention period. Turning Announcements off
stops new OneSignal collection. Website contact email and mailbox notification copies of in-app
support requests sit outside the NetCage database and may remain until the developer deletes them
manually; NetCage promises no fixed mailbox deletion period. Device-only settings, the report token, the
random ID used for wording checks and a remembered-device token disappear when you clear NetCage's app data
or uninstall it.

## Where can data be processed?

Supabase runs the account database and server functions. Custom icons, word files, website contact email and
two-step sign-in emails use the developer's own storage and email service, and Native Update, the developer's
own update service, answers the checks for wording fixes. Google, Microsoft, Amplitude, Sentry, OneSignal and Polar can process
their respective data in more than one country under their own terms. NetCage cannot promise that every
optional service uses one jurisdiction.

## Is NetCage for children?

NetCage is intended for people aged 18 and over. It is not directed at children and does not knowingly
collect their data. If you believe a child has created an account, use the public contact page so the
developer can remove it and its associated records.

## How can I access, correct or delete my data?

Sign in on the website to export the configuration stored for your account. Correct it in NetCage and
sync again, or turn off announcements in Settings.

Delete the cloud account under **Settings ▸ Account ▸ Delete account**. The public deletion page links to
the Google sign-in and deletion-confirmation flow on the account page. A completed request removes the
account and its cloud records; a custom-icon storage failure preserves them and returns a retryable
failure. Your phone's cages stay unchanged. Clear the app's data or uninstall it to remove device-only
records. Use the contact page for a question or complaint.
