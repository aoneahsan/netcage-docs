---
title: Privacy
description: What the VPN can and cannot see, why a caged app's package name is never sent to any analytics or crash reporter, what NetCage's own connections carry, and the switches that turn them off.
sidebar_position: 9
tags: [privacy, data, telemetry]
---

An app that holds the VPN slot is exactly the app you should suspect of logging your browsing. This
page is the honest answer, including the parts that are not "nothing leaves your device".

The binding version is the privacy policy at
[netcage.aoneahsan.com/privacy](https://netcage.aoneahsan.com/privacy). This page explains the same
facts.

## What the VPN can see

Nothing.

NetCage reads the packets caged apps send and drops them without looking inside. It never inspects,
parses, stores or forwards traffic, and it sets no DNS server of its own. Apps you have not caged
never enter the tunnel at all.

Concretely, none of these exist anywhere in NetCage:

- No DNS log, no URL log, no traffic record.
- No domain, hosts or content filtering — see [How it works](./how-it-works.md).
- No proxy, and no server at the far end of the tunnel to send anything to.

The per-app **Data used** figures, when you grant Usage Access, come from Android's own accounting
rather than from anything NetCage observed.

## A caged app's package name is never sent to a third party

Which apps you have cut off is about as revealing as app data gets. The crash reporter, the
analytics services, the push provider and the ad SDK receive **none** of it, ever.

That is enforced by the app's own type system rather than by a rule somebody has to remember: an
analytics property can only be a count, a flag, or a token from a fixed vocabulary of screen names,
outcomes and *categories* such as `browser` or `social`. There is no way to pass an arbitrary
string, so a package name cannot be sent even by accident. Free-text crash messages — the one
surface that could still carry one — are run through a redactor that rewrites anything
package-shaped before it leaves the process. Profile names, notes and search text are covered by the
same mechanism.

**The one place package names do travel, and only if you ask for it:** when you sign in, the
packages you have caged, hidden or given a custom icon are stored in *your own account*, because
that is what syncing a firewall between two phones means. Signed out, nothing about your apps leaves
the device. See [Account and sync](./account-and-sync.md).

The full list of installed apps is never uploaded in any case. It is read on the device to draw the
list, and stays there.

## What NetCage's own connections are for

Version 1.x held no `INTERNET` permission at all and made no network call of any kind. 2.0 does hold
it, and the list of what it is for is short. **None of these carries a caged app's traffic** — that
still never leaves the phone.

| Connection | Optional? | Carries |
|---|---|---|
| **Account and sync** | Yes — signed out by default | Your rules, profiles, schedules, settings and custom icons, so a second phone matches |
| **Custom icons** | Yes — only icons you pick yourself | The image, and a reference to it |
| **Ads** | No, but the consent choice is yours | The standard ad request |
| **Crash reports** | Yes — one switch | The exception type and where it happened |
| **Usage statistics** | Yes — one switch | Screen names and counts |
| **Announcements** | Yes — one switch | A push token. NetCage only receives; it sends nothing |
| **Update checks** | No | Google Play's own version check |

## The switches

**Settings ▸ Privacy** holds:

- **Share anonymous usage data**
- **Send crash reports**
- **Announcements** — shown only when push is configured in the build
- **Ad privacy options** — shown only where the consent framework requires a privacy choice

:::info The switches gate initialisation, not sending
Turning one off shuts its SDK down rather than muting it. A queued-but-unsent event has still been
collected, so an opt-out here is an absence of data rather than a promise not to look at it.
:::

The same is true one level down: each provider is gated on its own key, and a build without that key
never constructs the SDK at all.

Nothing that talks to the network is started before the phone has been unlocked for the first time
after a restart. NetCage's process is Direct Boot aware so it can restore the cage on a locked phone,
and the auto-initialisers of the network SDKs are switched off in the manifest precisely so none of
them can run there. Each is started by hand later, after the unlock and after its switch has been
read.

## Who receives what

Every third party the shipped app can contact. Each is gated on its own key; with no key the SDK is
never constructed and none of these calls happen.

| Provider | Receives | Gated on |
|---|---|---|
| **Google AdMob** | Advertising ID, ad request and device context, consent state | The ad configuration and your consent choice |
| **Google Analytics for Firebase** | Screen views, bounded event names and counts, advertising ID, app instance id | *Share anonymous usage data* |
| **Sentry** | Exception type, a bounded call-site label, redacted message, device, OS and app version | *Send crash reports* |
| **Amplitude** | The same bounded event set as Analytics | *Share anonymous usage data* |
| **Microsoft Clarity** | Session interaction data | *Share anonymous usage data* |
| **OneSignal** | Push token and subscription state | *Announcements* |
| **Supabase** | Email, name, account id, and the synced configuration — which includes caged package names | Only when you sign in |
| **FilesHub** | Custom icon images | Only when you sign in and set a custom icon |

Supabase and FilesHub are the developer's own backend and file storage. The credential needed to
reach storage lives on the server side and is not shipped inside the app.

## What is never collected

No location, financial, health, contacts, calendar, SMS, call-log, microphone or video data. NetCage
holds no permission for any of them.

**No web browsing history.** The tunnel discards packets without parsing them, so there is nothing to
record — no DNS log, no URL log, no traffic record.

Photos are touched only if you set a custom icon, and then only the one image you picked: it is
chosen through Android's system photo picker, which requires no storage or media permission, and
NetCage holds none.

## The permissions it does hold

Every permission in the released app is checked against a committed allow-list at build time, in the
merged manifest **and** in the packaged APK — a permission a dependency tries to inject fails the
build by name.

| Permission | Why |
|---|---|
| `INTERNET` | The optional account and sync, ads, crash and usage reports, Play update checks |
| `ACCESS_NETWORK_STATE` | Wi-Fi versus mobile rules |
| `QUERY_ALL_PACKAGES` | The installed-app list *is* the product; any app on the phone can be caged |
| `FOREGROUND_SERVICE`, plus its VPN service types | The cage runs as a foreground service |
| `POST_NOTIFICATIONS` | The notification Android requires while a VPN is active |
| `RECEIVE_BOOT_COMPLETED` | Restore the cage after a restart |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | One-tap battery exemption so Doze does not kill the cage |
| `PACKAGE_USAGE_STATS` | Optional per-app data totals. You grant it in Android's own settings |
| `SCHEDULE_EXACT_ALARM` | Optional precise timing for schedules and day passes |
| `WAKE_LOCK` | The background-work deadline fallback |
| Advertising ID and Privacy Sandbox permissions | Required by the ad and analytics SDKs |
| Push delivery permissions | Required to receive an announcement |

Two permissions the credential library tries to inject — `USE_BIOMETRIC` and `USE_FINGERPRINT` — are
stripped from the build. NetCage only ever asks Android for a Google sign-in token and shows no
biometric prompt.

## Deleting what is stored

If you signed in, **Settings ▸ Account ▸ Delete account** permanently removes the account, the
configuration stored for it and any custom icons you uploaded. The same is available at
[netcage.aoneahsan.com/delete-account](https://netcage.aoneahsan.com/delete-account).
