# FamilyKeepsake — App Preview (video) Storyboard

Companion to `APP_STORE_COPY.md`. One hero App Preview, 28 seconds, built to
Apple's App Preview rules and to the same story arc as the listing copy.

---

## Why video is the right lead for this app

The core differentiator is *time*: photo taken → fields fill themselves → filed,
in six seconds. A screenshot shows a filled-in form; only motion proves nobody
typed it. The App Preview autoplays (muted) in search results before a user ever
reads a word of the listing — for FamilyKeepsake it can carry the entire pitch.

## Apple's rules that shape everything below

- **15–30 seconds**, up to 3 previews per locale. The **first** preview is the
  one that autoplays in search results — it must work alone.
- **Autoplays muted.** Design for silence: every beat needs an on-screen caption.
  Sound (a child's voice!) is a bonus for the tap-to-unmute minority.
- **Footage must be captured from the app itself** (screen recordings of real UI).
  Brief device-in-hand framing is fine; marketing-only animation is not. No
  mock UI that doesn't exist in the build — App Review checks.
- **The poster frame** is what non-players see forever. Choose it deliberately.
- Capture on device at native resolution; App Store Connect needs deliverables
  for the 6.9″ iPhone size (and 13″ iPad if you ship iPad screenshots).
- Captions must be legible at search-result thumbnail size: short, high-contrast,
  nothing critical in the outer 10% (corners get rounded/cropped).

---

## Hero preview — "Six seconds from fridge door to filed" (28s)

One continuous story, matching the listing's arc: magic → ownership → payoff.

| Time | On screen (real app footage) | Caption |
|---|---|---|
| 0–3s | Camera viewfinder framing a real kid's painting propped on a kitchen bench. Amber corners lock on; shutter fires. | **Point it at anything they make** |
| 3–9s | The review card — *the money shot*. Fields visibly populate themselves one after another: signature found → child chip "Kieran" ✓ → date ✓ → description types itself. Show the "Read on this iPhone in 6 seconds" line. | **It reads who, what and when — on your iPhone** |
| 9–13s | Thumb taps **Save keepsake**. Cut to the Files app: `iCloud Drive › FamilyKeepsake › Artwork`, the new file appears — `Kieran – Artwork – 3 Jul 2026.jpg`. | **Saved as a real file, in your own iCloud** |
| 13–17s | Search screen. "kieran swimming" typed fast; three results snap in (certificate, ribbon, pool painting). | **Find it in your own words — years later** |
| 17–23s | Rewind. Dark stage, cards flying past with each flick, year rail sliding 2026 → 2023, a year boundary announcing itself full-screen. | **Rewind through the years** |
| 23–26s | A saved keepsake with its voice-note waveform playing; the transcript line visible: *"…the dog is driving because the astronaut is having his lunch."* (This is the audio moment for unmuted viewers.) | **Their story, in their voice** |
| 26–28s | Settle on the app icon + wordmark over the archive grid. | **Everything they make, kept.** · *No subscription* |

**Poster frame:** the review card at ~7s, fully populated with the green
"Read on this iPhone" line visible — it's the differentiator as a still image,
and it doubles as screenshot #1's message for anyone who never presses play.

**Pacing rule:** the 3–9s beat is the conversion moment. Everything before it is
three seconds; never let a logo sting or title card delay it — search-results
autoplay may only get 5–8 seconds of attention.

**Audio (for the unmuted minority):** no music bed needed until 23s; let the real
child's voice note be the only sound that matters. If you want music, keep it
under the voice, never over it.

## Optional previews 2 and 3 (product page only)

Most visitors see only the first preview; ship these later if at all.

- **Preview 2 — "The archive you own" (20s):** Files app walk-through: folders,
  readable filenames, opening a keepsake in Quick Look on a Mac, ending on
  *"Delete the app. Keep everything."* Speaks to the anti-lock-in buyer who
  reads comparison tables.
- **Preview 3 — "The back-catalogue" (20s):** bulk import: album selected in
  Photos → inbox reading items in the background → a stack of ready-to-review
  cards. Ends on *"One price. Once."* — this one sells the paid unlock.

## Production checklist

- [ ] Record on a real iPhone (iOS 27 beta) via QuickTime/ReplayKit at native res;
      Apple Intelligence reading must be the real feature, not a staged fill.
- [ ] Use real, physical kid art with a legible signature — the wobbly signature
      being *found* is the emotional beat.
- [ ] Keep every caption ≤ 6 words; captions are localised text — keep them in a
      side file, not burned into a master without a clean version.
- [ ] Check legibility at thumbnail size (search results) before export.
- [ ] Export per-device sizes required by App Store Connect (6.9″ iPhone set
      minimum; 13″ iPad set if iPad screenshots ship).
- [ ] Poster frame set explicitly in App Store Connect — don't accept the default.
- [ ] The child's voice note needs a parent's consent you're comfortable with
      publishing worldwide — or record a scripted stand-in.
