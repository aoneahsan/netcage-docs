---
title: FAQ
description: Common questions about NetCage — whether it is an ad blocker (it is not), performance, the "VPN has no internet access" notice, other VPNs, root, cached content and handoff.
sidebar_position: 12
tags: [faq, troubleshooting]
---

<head>
  {/* FAQPage structured data for the 14 question headings below.
      🔴 HAND-MAINTAINED, NOT generated. Editing an answer below does NOT update this blob.
      Change an answer and you must change its `text` here in the SAME commit, or the two drift
      silently -- which is what happened before 2026-08-28, when three `text` values here were
      truncated mid-sentence at a markdown line break and one carried raw `**` bold markers.
      Keep every `text` plain prose: no markdown, no link syntax, and finish every sentence. */}
  <script type="application/ld+json">
    {JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is NetCage an ad blocker?", "acceptedAnswer": {"@type": "Answer", "text": "No. NetCage is not an ad blocker and not a content blocker."}}, {"@type": "Question", "name": "Does it slow my phone down, or use battery?", "acceptedAnswer": {"@type": "Answer", "text": "Apps you have not caged never enter the tunnel — their traffic does not pass through NetCage's process at all, so there is no latency cost and no battery cost for them. Caged apps' packets are refused immediately rather than left to time out."}}, {"@type": "Question", "name": "Why does Android say \"VPN has no internet access\"?", "acceptedAnswer": {"@type": "Answer", "text": "Because it is true. Android probes VPN networks, and NetCage's tunnel genuinely has nothing at the far end — that absence is the whole design. The notice is cosmetic; nothing is broken. See Limitations."}}, {"@type": "Question", "name": "Can I use another VPN at the same time?", "acceptedAnswer": {"@type": "Answer", "text": "No. Android allows one VPN at a time. Connecting another VPN revokes NetCage, which reports Another VPN took over. NetCage stopped. rather than fighting for the slot."}}, {"@type": "Question", "name": "Does it need root?", "acceptedAnswer": {"@type": "Answer", "text": "No. The supported mechanism is Android's own VPN slot and works on any phone running Android 8.0 or newer."}}, {"@type": "Question", "name": "Why can a caged app still show content?", "acceptedAnswer": {"@type": "Answer", "text": "Two reasons, and both are expected: Cache. Blocking the network does not erase what the app already downloaded.; Handoff. If the caged app opens a link in your browser, the browser is doing the fetching, and the browser is not caged."}}, {"@type": "Question", "name": "Why is an app missing from the list?", "acceptedAnswer": {"@type": "Answer", "text": "One of these: It does not request Android's INTERNET permission, so caging it would do nothing.; It is a system app, and Settings ▸ Behaviour ▸ Show system apps is off.; It is disabled, or Play has auto-archived it — it cannot run, so it cannot be caged.; You hid it. Settings ▸ Data ▸ Hidden apps brings it back.; It is NetCage, which is never listed and can never be caged."}}, {"@type": "Question", "name": "Does NetCage see my browsing?", "acceptedAnswer": {"@type": "Answer", "text": "No. To refuse a connection NetCage has to know who to answer, so it reads the address and port at the front of each packet \u2014 never what is inside one, and never the hostname you asked for. It sets no DNS server and keeps no DNS log, no URL log and no traffic record. Apps you have not caged never enter the tunnel at all. The full answer, including what NetCage's own connections carry, is on Privacy."}}, {"@type": "Question", "name": "Do I need an account?", "acceptedAnswer": {"@type": "Answer", "text": "No. Every feature works signed out. An account only syncs your setup to your other phones — see Account and sync."}}, {"@type": "Question", "name": "Does caging an app change the app itself?", "acceptedAnswer": {"@type": "Answer", "text": "No. Caging affects network routing only. The app is not modified, disabled, cleared or uninstalled, and releasing it restores its network access immediately."}}, {"@type": "Question", "name": "Can I block mobile data but allow Wi-Fi?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Block on row in an app's detail view has a switch for each transport. The rule is evaluated against the phone's current default network — see Limitations."}}, {"@type": "Question", "name": "Will the cage survive a reboot?", "acceptedAnswer": {"@type": "Answer", "text": "Turn on Settings ▸ Behaviour ▸ Auto-start on boot, and set up Always-on VPN so the cage is up before your apps start. Both are covered in Install and setup."}}, {"@type": "Question", "name": "The cage stopped by itself. Why?", "acceptedAnswer": {"@type": "Answer", "text": "The usual causes: Another VPN was connected. Android revoked NetCage, and it says so.; Android killed the service. Grant the battery exemption in setup so Doze leaves it alone, and allow the notification, which Android requires while a VPN is active.; Everything eligible is on a day pass, or the cage is paused. The header says which."}}, {"@type": "Question", "name": "What happens when I uninstall an app I had caged?", "acceptedAnswer": {"@type": "Answer", "text": "Its rule is kept rather than deleted, because on a synced account that rule may still be doing work on another phone. Such rules are listed under Settings ▸ Data ▸ Rules for apps not on this device, where you can remove them."}}]})}
  </script>
</head>

## Is NetCage an ad blocker?

**No.** NetCage is not an ad blocker and not a content blocker.

It does no domain filtering, no hosts file, no DNS interception and no inspection of packet
contents. It
has one unit of control: an app, blocked entirely or not at all. There is no mechanism in it that
could filter anything inside an app's traffic, and none is planned.

## Does it slow my phone down, or use battery?

Apps you have not caged never enter the tunnel — their traffic does not pass through NetCage's
process at all, so there is no latency cost and no battery cost for them.

Caged apps' packets are refused immediately. NetCage reads the destination address and port from
the packet header so it can send back a refusal, and nothing more: no packet contents, no hostname,
nothing buffered, forwarded or written to disk.

## Why does Android say "VPN has no internet access"?

Because it is true. Android probes VPN networks, and NetCage's tunnel genuinely has nothing at the
far end — that absence is the whole design. The notice is cosmetic; nothing is broken. See
[Limitations](./limitations.md#vpn-has-no-internet-access).

## Can I use another VPN at the same time?

No. Android allows one VPN at a time. Connecting another VPN revokes NetCage, which reports
*Another VPN took over. NetCage stopped.* rather than fighting for the slot.

## Does it need root?

No. The supported mechanism is Android's own VPN slot and works on any phone running Android 8.0 or
newer.

There is an opt-in root engine, but it is labelled experimental and has never run on rooted
hardware — see [Limitations](./limitations.md#root-mode-is-experimental).

## Why can a caged app still show content?

Two reasons, and both are expected:

- **Cache.** Blocking the network does not erase what the app already downloaded.
- **Handoff.** If the caged app opens a link in your browser, the browser is doing the fetching, and
  the browser is not caged.

## Why is an app missing from the list?

One of these:

- It does not request Android's `INTERNET` permission, so caging it would do nothing.
- It is a system app, and **Settings ▸ Behaviour ▸ Show system apps** is off.
- It is disabled, or Play has auto-archived it — it cannot run, so it cannot be caged.
- You hid it. **Settings ▸ Data ▸ Hidden apps** brings it back.
- It is NetCage, which is never listed and can never be caged.

## Does NetCage see my browsing?

No. To refuse a connection NetCage has to know who to answer, so it reads the address and port at
the front of each packet — never what is inside one, and never the hostname you asked for. It sets
no DNS server and keeps no DNS log, no URL log and no traffic record. Apps you have not caged never enter the tunnel
at all. The full answer, including what NetCage's *own* connections carry, is on
[Privacy](./privacy.md).

## Do I need an account?

No. Every feature works signed out. An account only syncs your setup to your other phones — see
[Account and sync](./account-and-sync.md).

## Does caging an app change the app itself?

No. Caging affects network routing only. The app is not modified, disabled, cleared or uninstalled,
and releasing it restores its network access immediately.

## Can I block mobile data but allow Wi-Fi?

Yes. The **Block on** row in an app's detail view has a switch for each transport. The rule is
evaluated against the phone's current default network — see
[Limitations](./limitations.md#transport-rules-follow-the-default-network).

## Will the cage survive a reboot?

Turn on **Settings ▸ Behaviour ▸ Auto-start on boot**, and set up **Always-on VPN** so the cage is
up before your apps start. Both are covered in
[Install and setup](./install-and-setup.md#always-on-vpn).

## The cage stopped by itself. Why?

The usual causes:

- **Another VPN was connected.** Android revoked NetCage, and it says so.
- **Android killed the service.** Grant the battery exemption in
  [setup](./install-and-setup.md#battery) so Doze leaves it alone, and allow the notification, which
  Android requires while a VPN is active.
- **Everything eligible is on a day pass, or the cage is paused.** The header says which.

## What happens when I uninstall an app I had caged?

Its rule is kept rather than deleted, because on a synced account that rule may still be doing work
on another phone. Such rules are listed under **Settings ▸ Data ▸ Rules for apps not on this
device**, where you can remove them.
