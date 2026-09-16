---
title: "LifeLens"
tagline: "A private photo intelligence app that finds clutter, protects important memories, and helps you understand your library without uploading it."
status: shipped
tags: ["Flutter", "On-device ML", "Android", "Privacy-first", "English / Hindi / Gujarati"]
order: 1
demo: "https://lifelens.darshankansara.com"
---

## What it does

LifeLens turns a crowded Android photo library into a reviewable set of decisions. It groups exact duplicates, similar shots, bursts, screenshots, large videos, and messaging clutter while keeping deletion under the user's control.

The app is available on [Google Play](https://play.google.com/store/apps/details?id=com.darshankansara.lifelens). A browser-based photo analyzer is also available at [lifelens.darshankansara.com](https://lifelens.darshankansara.com).

## What it finds

- **Duplicates and near-duplicates** using perceptual and visual signals rather than filenames alone.
- **Similar photos and bursts** presented for review, never silently selected as disposable.
- **Screenshots, large videos, and messaging clutter** organized into focused cleanup groups.
- **Important documents and memories** kept out of casual cleanup recommendations.
- **Ask LifeLens** queries across dates, media types, visual concepts, and available photo location metadata.

## Why it is different

LifeLens is designed around a conservative rule: detect broadly, recommend narrowly. Exact duplicates can produce a clear cleanup recommendation. Similar-looking photos remain review-only. Potentially important content is protected when the app is uncertain.

The result is not an automatic deletion engine. It is a calmer way to inspect a library, understand why something was surfaced, and make the final decision yourself.

## Private by design

Photo analysis runs on the device. Photos are not uploaded to a LifeLens account or cloud library. Deletion uses Android's system confirmation flow, so the user sees and approves what leaves the library.

## Stack

Flutter and Dart, native Android media APIs, perceptual hashing, color histograms, Google ML Kit image labeling, on-device indexes, and Cloudflare for the public web experience.

## Status

**Live on Android.** English, Hindi, and Gujarati are supported. iOS and desktop editions are not currently offered.
