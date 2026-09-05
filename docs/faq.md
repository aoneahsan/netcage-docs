---
title: FAQ
description: Answers about NetCage's local VPN, app eligibility, accounts, Cage Packs, battery, notifications and recovery.
sidebar_position: 12
tags: [faq, troubleshooting]
---

<head>
  <script type="application/ld+json">
    {JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is NetCage an ad blocker?","acceptedAnswer":{"@type":"Answer","text":"No. NetCage is not an ad blocker or content blocker. It refuses a whole app's network route and does not filter ads, trackers, domains, websites, DNS answers or content inside an app you leave online."}},{"@type":"Question","name":"Does it slow my phone down, or use battery?","acceptedAnswer":{"@type":"Answer","text":"Apps outside a caged Android UID do not enter NetCage's tunnel, so NetCage does not process their traffic. Android still runs the VPN foreground service while a cage is active, so NetCage does not promise an exact zero cost for the phone as a whole."}},{"@type":"Question","name":"Why does Android say \"VPN has no internet access\"?","acceptedAnswer":{"@type":"Answer","text":"Android may report no internet access because NetCage's local tunnel has no remote network path. For the apps you cage, that is the intended boundary. If the cage is shown as down or revoked, check NetCage's own state."}},{"@type":"Question","name":"Can I use another VPN at the same time?","acceptedAnswer":{"@type":"Answer","text":"No. Android allows one active VPN at a time, so connecting another one replaces NetCage and its cages stop applying until you switch back. NetCage reports the revoked state and does not retry against the VPN you chose."}},{"@type":"Question","name":"Does it need root?","acceptedAnswer":{"@type":"Answer","text":"No. The supported engine uses Android's VPN slot on Android 8.0 and newer. The optional root engine is experimental, off by default and unverified on rooted hardware."}},{"@type":"Question","name":"Why can a caged app still show content?","acceptedAnswer":{"@type":"Answer","text":"Caging stops new internet connections; it does not erase content the app already cached. Local playback can continue, and a link handed to an app outside the caged Android UID uses that app's normal network route."}},{"@type":"Question","name":"Why is an app missing from the list?","acceptedAnswer":{"@type":"Answer","text":"NetCage lists enabled, currently installed apps that request Android's INTERNET permission. It excludes itself, disabled or archived apps, and packages without internet capability; system apps appear only when Show system apps is on."}},{"@type":"Question","name":"Does NetCage see my browsing?","acceptedAnswer":{"@type":"Answer","text":"NetCage reads destination and transport-header fields in memory so it can address a local refusal. It does not inspect packet payloads, resolve hostnames, or keep a DNS, URL or traffic log."}},{"@type":"Question","name":"Do I need an account?","acceptedAnswer":{"@type":"Answer","text":"The firewall, Cage Pack import and Cage Pack reporting work signed out. Cloud backup, in-app support and publishing a Cage Pack need Google sign-in because their records need an owner."}},{"@type":"Question","name":"Does caging an app change the app itself?","acceptedAnswer":{"@type":"Answer","text":"No. Caging affects network routing only. The app is not modified, disabled, cleared or uninstalled. Releasing the last active package for a shared Android UID gives that UID its normal route back."}},{"@type":"Question","name":"Can I block mobile data but allow Wi-Fi?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Block on row in an app's detail view has a switch for each transport. The rule is evaluated against the phone's current default network, not the transport of each individual socket."}},{"@type":"Question","name":"Will the cage survive a reboot?","acceptedAnswer":{"@type":"Answer","text":"It can when Auto-start on boot is enabled, the master cage is on, and a saved rule or schedule is active. Android's Always-on VPN setting is a separate way to start the service; phone-maker background controls can still interfere."}},{"@type":"Question","name":"The cage stopped by itself. Why?","acceptedAnswer":{"@type":"Answer","text":"Check whether another VPN took the slot, whether Android stopped the foreground service, and whether every selected app is currently released or paused. Resolve the cause shown in NetCage, then start the cage again; selected apps use their normal route while the VPN service is stopped, provided Android's Block connections without VPN setting remains off."}},{"@type":"Question","name":"What happens when I uninstall an app I had caged?","acceptedAnswer":{"@type":"Answer","text":"NetCage keeps the rule. If you use account backup, a rule for an app missing from this phone may still belong in the stored configuration and appear after a restore. You can remove it under Rules for apps not on this device."}},{"@type":"Question","name":"Why does NetCage need full installed-app access?","acceptedAnswer":{"@type":"Answer","text":"A per-app firewall must list enabled internet-capable apps, including background and non-launcher packages that targeted launcher queries omit. The full inventory stays on this phone; only package names you act on can leave through backup or Cage Pack publication."}},{"@type":"Question","name":"Does NetCage send caged traffic to a VPN server?","acceptedAnswer":{"@type":"Answer","text":"No. NetCage returns a local refusal and forwards no caged traffic. Its optional account, support, backup, telemetry, announcement, update and Cage Pack connections are separate."}},{"@type":"Question","name":"What happens when I import a Cage Pack?","acceptedAnswer":{"@type":"Answer","text":"Importing creates an editable profile and leaves it switched off. You can review the matching apps before choosing whether to activate it."}},{"@type":"Question","name":"Why does Android show an ongoing VPN notification?","acceptedAnswer":{"@type":"Answer","text":"Android requires the active VPN to run as a foreground service. If that service stops, selected apps regain their normal network route until you start the cage again, provided Android's Block connections without VPN setting remains off."}}]})}
  </script>
</head>

## Is NetCage an ad blocker?

No. NetCage is not an ad blocker or content blocker. It refuses a whole app's network route and does not filter ads, trackers, domains, websites, DNS answers or content inside an app you leave online.

## Does it slow my phone down, or use battery?

Apps outside a caged Android UID do not enter NetCage's tunnel, so NetCage does not process their traffic. Android still runs the VPN foreground service while a cage is active, so NetCage does not promise an exact zero cost for the phone as a whole.

## Why does Android say "VPN has no internet access"?

Android may report no internet access because NetCage's local tunnel has no remote network path. For the apps you cage, that is the intended boundary. If the cage is shown as down or revoked, check NetCage's own state.

## Can I use another VPN at the same time?

No. Android allows one active VPN at a time, so connecting another one replaces NetCage and its cages stop applying until you switch back. NetCage reports the revoked state and does not retry against the VPN you chose.

## Does it need root?

No. The supported engine uses Android's VPN slot on Android 8.0 and newer. The optional root engine is experimental, off by default and unverified on rooted hardware.

## Why can a caged app still show content?

Caging stops new internet connections; it does not erase content the app already cached. Local playback can continue, and a link handed to an app outside the caged Android UID uses that app's normal network route.

## Why is an app missing from the list?

NetCage lists enabled, currently installed apps that request Android's INTERNET permission. It excludes itself, disabled or archived apps, and packages without internet capability; system apps appear only when Show system apps is on.

## Does NetCage see my browsing?

NetCage reads destination and transport-header fields in memory so it can address a local refusal. It does not inspect packet payloads, resolve hostnames, or keep a DNS, URL or traffic log.

## Do I need an account?

The firewall, Cage Pack import and Cage Pack reporting work signed out. Cloud backup, in-app support and publishing a Cage Pack need Google sign-in because their records need an owner.

## Does caging an app change the app itself?

No. Caging affects network routing only. The app is not modified, disabled, cleared or uninstalled. Releasing the last active package for a shared Android UID gives that UID its normal route back.

## Can I block mobile data but allow Wi-Fi?

Yes. The Block on row in an app's detail view has a switch for each transport. The rule is evaluated against the phone's current default network, not the transport of each individual socket.

## Will the cage survive a reboot?

It can when Auto-start on boot is enabled, the master cage is on, and a saved rule or schedule is active. Android's Always-on VPN setting is a separate way to start the service; phone-maker background controls can still interfere.

## The cage stopped by itself. Why?

Check whether another VPN took the slot, whether Android stopped the foreground service, and whether every selected app is currently released or paused. Resolve the cause shown in NetCage, then start the cage again; selected apps use their normal route while the VPN service is stopped, provided Android's Block connections without VPN setting remains off.

## What happens when I uninstall an app I had caged?

NetCage keeps the rule. If you use account backup, a rule for an app missing from this phone may still belong in the stored configuration and appear after a restore. You can remove it under Rules for apps not on this device.

## Why does NetCage need full installed-app access?

A per-app firewall must list enabled internet-capable apps, including background and non-launcher packages that targeted launcher queries omit. The full inventory stays on this phone; only package names you act on can leave through backup or Cage Pack publication.

## Does NetCage send caged traffic to a VPN server?

No. NetCage returns a local refusal and forwards no caged traffic. Its optional account, support, backup, telemetry, announcement, update and Cage Pack connections are separate.

## What happens when I import a Cage Pack?

Importing creates an editable profile and leaves it switched off. You can review the matching apps before choosing whether to activate it.

## Why does Android show an ongoing VPN notification?

Android requires the active VPN to run as a foreground service. If that service stops, selected apps regain their normal network route until you start the cage again, provided Android's Block connections without VPN setting remains off.
