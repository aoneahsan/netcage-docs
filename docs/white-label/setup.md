---
title: Setting up a licensed copy
description: The order a licensed NetCage copy is set up in, from the licence email to the first published build.
sidebar_position: 3
tags: [white-label, setup]
---

The steps happen in this order. None of them has a fixed duration here, because the slowest step is usually
Google's review of the listing.

1. **The licence.** The buyer pays by bank transfer to our Wise account and sends us the transfer reference.
   Once we have confirmed the transfer, the buyer receives a licence key and a certificate by email.
2. **The brand.** The buyer sends the app name, icon, colours and package name, and the details of the
   developer account the app will be published under.
3. **The domain.** We connect the buyer's domain. It serves the privacy policy, the file Android reads to open
   NetCage's links in the app (`/.well-known/assetlinks.json`), and the licence file described in
   [Checking a licence](./verify-a-licence.md).
4. **The build.** We build and sign the app under the buyer's name and publish it: to the buyer's Google Play
   listing, or as a signed APK on the buyer's site.
5. **Updates.** Each new NetCage release is rebuilt under the buyer's name for the six months that come with the
   licence, then for as long as a renewal runs. See [Updates and renewals](./updates-and-renewals.md).
