---
title: "LifeLens AI"
tagline: "An AI photo organizer that finds duplicates, near-duplicates, and useless screenshots in 15K+ photo libraries."
status: active
tags: ["Flutter", "AI", "On-device ML", "Image hashing"]
order: 1
---

## What it does

LifeLens scans your local photo library and groups truly identical or visually similar shots so you can clean up years of camera roll bloat in minutes.

Unlike basic duplicate finders that rely on a single perceptual hash (and confuse every white document for every other), LifeLens uses a **multi-signal detector** that combines a perceptual hash, color histogram, and aspect-ratio bucketing — with stricter thresholds for screenshots and scanned documents.

## Why it exists

I had 15,000+ photos piling up in OneDrive and Google Photos / Apple Photos kept missing obvious duplicates while flagging completely different images as the same. So I started building my own.

## Stack

Flutter (Windows / macOS / Android / iOS) · `photo_manager` for gallery access · pure-Dart `image` package for hashing · Provider state.

## Status

Early build. Library browsing and duplicate detection working on Windows; expanding to mobile and adding Memories + GPS-based Places next.
