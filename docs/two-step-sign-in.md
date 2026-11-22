---
title: Two-step sign-in
description: Add an authenticator code after Google sign-in, keep recovery codes, remember an Android device, read Recent sign-ins and get help when the codes are gone.
sidebar_position: 8.1
tags: [account, privacy]
---

Two-step sign-in adds an authenticator code after Google sign-in. It guards the NetCage account, which holds
your backup, support requests, published Cage Packs and plan, while the firewall on your phone never needs it,
signed in or not.

## How do I turn it on?

Open **Settings ▸ Account ▸ Security** in the app, or the Security tab of your account on the website, and
choose **Add a code**. Scan the QR code with an authenticator app, or type the setup key into it by hand, then
enter the six-digit code the app shows to finish.

NetCage then shows ten recovery codes. You see them once. Copy or download them and keep them somewhere you
can reach without this phone. Each one works once.

## What happens when I sign in?

After Google sign-in, **Check your authenticator** asks for the current code. Five wrong codes in a row start
a five-minute wait.

In the Android app you can tick **Remember this device for 7 days**. It starts unticked. A remembered device
skips the code for up to seven days but never opens administration; the website remembers no browser, so it
asks for a code after every Google sign-in.

## What can I see under Security?

**Recent sign-ins** lists your last ten sign-ins with the browser or app, its system, the time and how the
second step was met, so a sign-in you did not make stands out. It never shows a place. **Sign out everywhere
else** ends every other sign-in, while remembered devices stay remembered until you choose **Forget this one**
or **Forget all**. **Make new codes** replaces your recovery codes. The old set stops working.

## What if I lose my phone?

Sign in with Google, choose **Use a recovery code** and enter one unused code. Then choose **Set up a new
phone** within ten minutes; after that it asks for another code.

## What if the codes are gone too?

Two-step sign-in stays on once it is set up. Only NetCage support turns it off. Write through the public
contact page from the email address on the account. The developer checks it is you, removes the authenticator,
recovery codes and remembered devices and signs you out everywhere, and NetCage emails the account's address
once it is done.

## What does NetCage keep?

The setup key sits with Supabase Auth so it can check your codes. NetCage keeps only keyed hashes of the
recovery codes and a log of when codes were tried or used. The [privacy
page](./privacy.md#what-happens-when-i-turn-on-two-step-sign-in) lists every record and how long it stays.
