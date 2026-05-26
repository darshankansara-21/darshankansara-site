---
title: "LifeLens AI"
tagline: "An AI photo organizer that finds duplicates, near-duplicates, and useless screenshots in 10K+ photo libraries."
status: active
tags: ["Flutter", "AI", "On-device ML", "Image hashing"]
order: 1
---

## What it does

LifeLens scans your local photo library and groups truly identical or visually similar shots so you can clean up years of camera roll bloat in minutes.

Unlike basic duplicate finders that rely on a single perceptual hash (and confuse every white document for every other), LifeLens uses a **multi-signal detector**:

- **dHash16** — 16×16 difference hash for layout similarity
- **Color histogram** — 4×4×4 RGB bins, cosine-compared
- **Aspect-ratio bucketing** — never compares portrait vs landscape
- **Document-like heuristic** — treats screenshots and scanned docs with stricter thresholds

## Why it exists

I had 30,000 photos in OneDrive after 10 years and Google Photos / Apple Photos kept missing obvious duplicates while flagging completely different images as the same. So I built my own.

## Stack

Flutter (Windows / macOS / Android / iOS) · sqflite · pure-Dart `image` package · Provider state.

## Status

Library tab, duplicate detection, and cleanup flows are live. Currently working on Memories and adding GPS-based Places.
