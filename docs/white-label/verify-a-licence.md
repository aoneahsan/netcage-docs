---
title: Checking a licence
description: How anyone can check a NetCage white-label licence by its key or by the domain a licensed copy runs on, and what the check shows.
sidebar_position: 5
tags: [white-label, verification]
---

Every licensed copy carries a licence key, and its website serves a licence file. Anyone can check either on
the [verify page](https://netcage.aoneahsan.com/verify-license). Verification is run by our licensing service.

## By key

Paste the key. The answer is one of: valid, issued and still being set up, revoked, or no licence with that
key. A valid licence shows who it is for, its platforms, its domains, when it was issued and when its updates
run until.

## By domain

Enter the host the copy's website runs on, such as `app.example.com`. The service fetches the licence file from
that host over HTTPS and checks the key it names. The answer says whether the domain is licensed, serves a
licence the domain is not covered by, serves a file that names no valid licence, serves no file, or could not
be reached.

## The licence file

A licensed copy's website serves `/.well-known/netcage-white-label-license.json`:

```json
{
  "$schema": "netcage-white-label-license",
  "product": "NetCage",
  "publicKey": "NETCAGE-WL-…",
  "client": "The buyer's company",
  "domain": "app.example.com",
  "verifyUrl": "https://netcage.aoneahsan.com/verify-license?key=NETCAGE-WL-…",
  "issuedAt": "…"
}
```

The same folder serves the licence certificate as `netcage-white-label-license.pdf`. We add both files when we
deploy the copy; the buyer does not write them.

## What a check never shows

An email address, a phone number or a price. Only what is public: the client's name, the licensed domains, the
platforms, the status and the dates.
