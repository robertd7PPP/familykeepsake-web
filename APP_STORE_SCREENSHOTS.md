# FamilyKeepsake — App Store Screenshot Set

Companion to `APP_STORE_COPY.md` and `APP_PREVIEW_STORYBOARD.md`. Rendered comps
live in `app-store/screenshots/` at Apple's exact 6.9″ portrait size (1320×2868);
the source is `app-store/screenshots/frames.html` (open with `?frame=N`, render at
2× device scale). They reuse the landing page's design system, so the store listing
and website read as one product.

> **Comps, not final uploads.** Apple requires screenshots to show the app's real
> UI. The frame layouts, captions and colours are final; the phone-screen contents
> are recreations of the app's screens and must be replaced with true captures
> from the iOS 27 build before submission. Keep the composition identical.

---

## The strategy

**Only the first three matter to most people.** In search results and at the top
of the product page, roughly three portrait screenshots are visible without
scrolling. Ours carry the entire pitch in order of persuasive weight:

1. the magic (it reads who/what/when — the thing no competitor has),
2. the trust (on your iPhone, nothing uploaded),
3. the ownership (real files in your own iCloud).

Everything after that is for people already interested: search, Rewind, voice,
and the closer — no subscription, which competitors cannot say.

**Caption-first design.** Each frame is a large headline (readable at thumbnail
size), one supporting line, and one phone showing exactly the UI that proves the
claim. One idea per frame, no feature lists.

## The set

| # | File | Headline | Support line | UI shown |
|---|---|---|---|---|
| 1 | `screenshot-01.png` | It reads **who, what and when.** | The signature, the date, what it's for — you just tap Save. | Review card, fields populated, "Read on this iPhone in 6 seconds" |
| 2 | `screenshot-02.png` | On your iPhone. **Nothing uploaded.** | The AI reads on the device in your hand. It even works in flight mode. | Camera viewfinder mid-read, flight-mode pill |
| 3 | `screenshot-03.png` | Real files, in **your own iCloud.** | Readable names, ordinary photos and PDFs. Delete the app — keep everything. | Files app: folders + readable filenames |
| 4 | `screenshot-04.png` | Find it in **your own words.** | "Kieran swimming" just… finds it. No tagging homework, ever. | Search with three results |
| 5 | `screenshot-05.png` | Flick back **through the years.** | The whole collection on one stage. One flick = one step back in time. | Rewind dark stage, year rail |
| 6 | `screenshot-06.png` | Their story, **in their voice.** | Recorded beside the artwork, transcribed on your device, searchable forever. | Keepsake with voice note + transcript |
| 7 | `screenshot-07.png` | **No subscription.** Ever. | Capture is free forever. One purchase unlocks the back-catalogue. | Free vs one-time unlock cards |

Frame 7 deliberately shows "One-time purchase" rather than a currency amount, so
the asset works in every storefront and survives price changes.

## Production checklist before submission

- [ ] Replace each phone's screen contents with real captures from the iOS 27 build
      (composition, captions and backgrounds stay as-is).
- [ ] Re-render at the sizes App Store Connect requires: 6.9″ (1320×2868) is the
      mandatory iPhone set; add the 13″ iPad set (2064×2752) if shipping iPad.
- [ ] Keep this exact upload order — it mirrors the description's arc and the
      App Preview's beats (video first, then these as stills).
- [ ] Localise captions per storefront (en-GB/en-AU: "organise" etc.) alongside
      the localisation plan in `APP_STORE_COPY.md`.
- [ ] Re-check headline legibility at search-result thumbnail size after any edit.

## Regenerating the comps

```bash
cd app-store/screenshots
CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome   # any Chromium works
for i in 1 2 3 4 5 6 7; do
  "$CHROME" --headless --disable-gpu --force-device-scale-factor=2 \
    --window-size=660,1521 --hide-scrollbars \
    --screenshot="screenshot-0$i.png" "file://$PWD/frames.html?frame=$i"
done
# headless Chrome paints ~87 CSS px short of the window; crop to exact size:
python3 -c "
from PIL import Image
import glob
for f in sorted(glob.glob('screenshot-0*.png')):
    Image.open(f).crop((0, 0, 1320, 2868)).save(f)"
```
