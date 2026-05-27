---
title: "LifeLens AI"
tagline: "A private, on-device photo organizer for Windows. Plug in your iPhone or Android over USB — built to import 30,000+ photo libraries that Windows Photos can't handle."
status: active
tags: ["Flutter", "AI", "On-device ML", "iPhone import", "USB / MTP", "Privacy-first"]
order: 1
---

## What it does

LifeLens is a desktop app that connects to your **iPhone or Android over USB**, copies your photos into a private local folder, and uses on-device AI to surface what you can safely delete.

It's built specifically to handle libraries Windows Photos chokes on. Windows Photos tries to thumbnail every HEIC during import, holds 30K file references in memory, and offers no resume — so it hangs around 2,000 photos. LifeLens does the opposite:

- **Streams enumeration** — no 30K-object array in memory.
- **Pure file copy** during import — no decoding, no thumbnailing.
- **Skip-on-error** — one bad HEIC doesn't kill 29,999 others.
- **Persistent manifest** after every successful file — resume is one tap.
- **Per-file timeout** — a stuck file gets skipped, not the whole batch.
- **Live stats** — copied / total, MB/s, ETA, error count.

## What you get after import

- **Duplicates** — multi-signal detector (perceptual hash + color histogram + aspect-ratio bucketing). Doesn't false-positive every white document.
- **WhatsApp Detox** — every photo, sticker and forward WhatsApp saved, in one screen. Reclaim several GB in a sweep.
- **Screenshots cleanup** — OTPs, recipes, cricket scores, forwarded memes.
- **Documents pile** — Aadhaar, PAN, receipts, prescriptions auto-grouped.
- **Recoverable storage** — see GB you'd reclaim, not just photo counts.

## Why it exists

I had 15,000+ photos sprawling across OneDrive, an iPhone, an Android phone, and an SD card. Google Photos and Apple Photos missed obvious duplicates while flagging totally different images as the same. Windows Photos hung at 2,000 photos when I tried to import 30K from iPhone. Cloud services wanted the whole library uploaded just to organize it. So I started building my own — local-first, USB-friendly, no cloud uploads.

## What's private about it

Everything runs on your computer. No cloud upload. No telemetry. No analytics about what's in your library. Deletes go to an in-app **Recycle Bin** you control — nothing is hard-deleted by the app.

## Stack

Flutter (Windows shipping now · macOS / Android / iOS in progress) · embedded PowerShell + `Shell.Application` COM for MTP enumeration & resumable copy · `photo_manager` for native gallery access on mobile · pure-Dart `image` package for hashing · SQLite via `sqflite_common_ffi` for the local index · Provider state.

## Status

**Windows v0.2.0 shipping today** — runs end-to-end: iPhone & Android USB import via MTP (resumable, skip-on-error), drive-letter import for SD cards / older Android, library scan, duplicate detection, WhatsApp Detox, Screenshots cleanup, Documents pile, soft-delete recycle bin. Android / iOS app builds being set up on a separate machine to keep mobile and desktop dev independent.
