---
title: "LifeLens AI"
tagline: "A private, on-device photo organizer for Windows that imports straight from your phone over USB and finds the gigabytes worth deleting."
status: active
tags: ["Flutter", "AI", "On-device ML", "USB import", "Privacy-first"]
order: 1
---

## What it does

LifeLens is a desktop app that connects to your Android phone or iPhone over USB, copies your photos into a private local folder, and uses on-device AI to surface what you can safely delete:

- **Duplicates & near-duplicates** — perceptual hash + color histogram + aspect-ratio bucketing. Stricter thresholds for screenshots and scanned documents.
- **WhatsApp Detox** — every photo, sticker and forwarded image saved by WhatsApp, in one screen. Reclaim several GB in one sweep.
- **Screenshots cleanup** — recipes, cricket scores, OTPs, forwarded memes — surfaced as a separate pile.
- **Documents pile** — Aadhaar, PAN, receipts, prescriptions auto-grouped (heuristic today, OCR landing next).
- **Recoverable storage** — see at a glance how many GB you'd reclaim, not just photo counts.

## Why it exists

I had 15,000+ photos sprawling across OneDrive, Google Photos, an Android phone, and an SD card. Google Photos and Apple Photos kept missing obvious duplicates while flagging totally different images as the same. Cloud services also wanted my entire library uploaded just to organize it. So I started building my own — local-first, USB-friendly, no cloud uploads.

## What's private about it

Everything runs on your computer. No cloud upload, no telemetry about what's in your library, no analytics on which photos you delete. Deletes are soft-deletes into an in-app recycle bin you control.

## Stack

Flutter (Windows shipping now · macOS / Android / iOS in progress) · `photo_manager` for native gallery access · pure-Dart `image` package for hashing · SQLite via `sqflite_common_ffi` for the local index · Provider state.

## Status

Windows v1 builds and runs end-to-end: library scan, duplicate detection, WhatsApp Detox, Screenshots cleanup, Documents pile, USB phone-import wizard, soft-delete recycle bin. Android / iOS builds being set up on a separate machine to keep mobile and desktop dev independent.
