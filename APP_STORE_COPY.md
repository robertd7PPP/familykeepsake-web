# FamilyKeepsake — App Store Copy (iOS 27 launch)

Final copy for App Store Connect. Every field is written to Apple's exact limits and
verified by character count. Rationale for each choice is at the bottom.

---

## 1. App Name (Title) — 30 characters max

```
FamilyKeepsake: Kids Creations
```

**30 / 30 characters.**

The title is the single strongest ranking field. `FamilyKeepsake` carries the brand
(and the high-value tokens *family* and *keepsake*); *Kids Creations* tells the true
breadth of the story — art, certificates, reports, builds — and matches the website's
hero tag ("The catalogue for everything your kids create"). The high-volume *art*
cluster isn't lost: it moves to the subtitle, which Apple indexes just as heavily.

## 2. Subtitle — 30 characters max

```
Art, awards & school memories
```

**29 / 30 characters.**

The subtitle is indexed as heavily as the title, so it must not repeat title words.
This adds four fresh high-intent tokens — *art*, *awards*, *school*, *memories* —
and reads as a plain-language list of what goes in the app, sitting directly under
"Kids Creations".

## 3. Promotional Text — 170 characters max

```
Launching with iOS 27. Point your camera at anything your kids make — Apple Intelligence reads who, what and when on your iPhone, and files it in your own iCloud.
```

**162 / 170 characters.**

Promo text is not indexed for search but sits at the top of the description on the
product page — it's pure conversion copy and can be changed any time without a new
build. This version rides the iOS 27 / Apple Intelligence launch moment. After
launch week, swap it for a benefit-led line, e.g.:

```
Photograph the painting, the certificate, the Lego build. It's named, dated and filed in your family's own iCloud in six seconds. No account. No subscription.
```
(158 / 170 characters.)

## 4. Keywords — 100 characters max

```
child,artwork,drawing,painting,craft,certificate,report,archive,portfolio,organizer,scan,saver,vault
```

**100 / 100 characters.**

Rules applied: comma-separated with no spaces (spaces waste characters); no word
already indexed from the title or subtitle (*family, keepsake, kids, creations,
art, awards, school, memories* are all free rankings — repeating them here would
waste a third of the field); no "app", no plurals of words already present (Apple
matches singular/plural). Apple builds combinations across all three fields, so
this set also earns phrases like "kids art organizer", "child artwork portfolio",
"school certificate scanner", "kids memory vault", "school report archive",
"kids art saver".

## 5. Description — 4,000 characters max

**3,673 / 4,000 characters.**

```
Everything they make, kept.

Point your camera at the painting, the swimming certificate, the Lego build. FamilyKeepsake reads who made it, what it is and when — on your iPhone, with Apple Intelligence — and files it as a real photo with a readable name in your family's own iCloud. Findable forever.

YOU CAN'T KEEP IT ALL. AND YOU CAN'T BIN IT.
Every week they bring home more: a painting still wet at the corners, a certificate, a creation you're not allowed to touch. Photographing it should be the answer — but those photos sink into a camera roll full of screenshots, unnamed, undated, unfindable. FamilyKeepsake makes the photo do the work.

SIX SECONDS FROM FRIDGE DOOR TO FILED
• Reads the signature — even a wobbly one in the corner — and matches it to your kids
• Reads the date written on it, and never invents one it can't see
• Knows a certificate from a masterpiece, and reads what it's actually for — "1st place, engineering challenge", not "a blue certificate"
• Works out school and year from your family's own timeline, not a guess
• You review before anything saves — every field is one tap to fix

AN ARCHIVE THAT OUTLIVES THE APP
Every keepsake is an ordinary photo or PDF with a readable name — "Aidan – Certificate – 14 Jun 2025.jpg" — organised into folders in your family's own iCloud Drive. Open them in Files. Copy them anywhere. Delete the app; keep everything. The archive outlives the app, by design.

FIND IT IN YOUR OWN WORDS
Every word on a keepsake or about it is searchable — the words printed on it, the description the AI wrote, the story you told about it. "Kieran swimming certificate" just… finds it. Filter by kid, by year, by type — with no tagging homework, because it all happened at capture.

REWIND: FLICK BACK THROUGH THE YEARS
Rewind puts the whole collection on a dark stage, newest at the front, the past receding behind. One flick is one step back in time. Jump straight to 2022 on the year rail, scope to one child and watch just their story, or press play and let it drift. It's the shoebox moment, minus the attic.

THEIR STORY, IN THEIR VOICE
Tap the mic while you save and let them explain why the dog is driving the rocket. The recording is kept beside the artwork forever; the words are transcribed on your device and become searchable. In ten years, that voice will be worth more than the painting.

SCHOOL REPORTS TOO
Import reports as PDFs. The real multi-page document is archived in your iCloud Drive, every page is read, and school, year and term are filled in from your family's timeline.

PRIVATE BY ARCHITECTURE
• The AI reads on your device — it even works in flight mode
• No account, no sign-up, no email. The app never asks who you are
• No analytics, no ads, nothing tracked, measured or sold
• Your files live in your family's iCloud — FamilyKeepsake has no servers at all. There is nowhere for your kids' things to go, and that isn't a policy that could change one day. It's the architecture.

ONE PRICE. ONCE.
Capturing their things as they make them is free forever — full-quality AI reading, unlimited keepsakes, search, Rewind and voice notes, with no item caps and no trial clocks. A single one-time purchase unlocks the bulk lanes for everything they've already made: import whole albums from Photos, import school reports as PDFs, and share into the app from anywhere. No subscription, ever — there are no servers for one to fund.

REQUIREMENTS
FamilyKeepsake is built on Apple Intelligence, so it needs iOS 27 on an iPhone 15 Pro or newer, or an iPad with an M-series chip. That's what makes on-device reading — and the privacy promise — possible.

The fridge door is temporary. This isn't.
```

---

## ASO strategy notes

**The story the listing tells.** One narrative, in order: the pile problem every
parent recognises → the six-second capture magic → you own the archive (anti-lock-in)
→ the emotional payoffs (search, Rewind, voice) → privacy as architecture → one price,
once. The first three lines of the description (visible before "more") carry the whole
pitch on their own, because most visitors never tap "more".

**Where the ranking comes from.** Apple indexes title + subtitle + keyword field and
combines tokens across them. This set covers the core search clusters with zero
duplicated words across the three indexed fields:

| Cluster | Covered by |
|---|---|
| kids art / kids artwork / child art | title + subtitle + keywords |
| kids art organizer / saver / storage | title + subtitle + keywords |
| kids creations / child creations | title |
| school memories / memory keeper | subtitle + keywords |
| certificate & award scanner | subtitle + keywords |
| school report archive | subtitle + keywords |
| kids art portfolio | title + subtitle + keywords |

**Launch-timing lever.** Promotional text is editable without a release — on launch
day it should ride the iOS 27 / Apple Intelligence news cycle (copy above), then
switch to the evergreen benefit line once the news moment passes.

**Category suggestion.** Primary: Lifestyle (matches the website's schema.org
category). Secondary: Productivity. Avoid Photo & Video — far heavier competition
for the same tokens.

**Localisation for free keyword coverage.** In the US storefront Apple also indexes
several secondary locales. Adding English (U.K.) and English (Australia) metadata
with British spellings and different keyword sets (e.g. `organiser,nursery,mum,
playschool,mementos,keepsakes`) roughly doubles indexed keyword coverage at no cost —
and NZ/AU users see native spelling. Given NZ$ pricing, this is home-market polish too.

**What to keep out of the keyword field.** "app", category names, competitor brand
names (rejection risk), and anything already in title/subtitle. Update keywords each
release cycle based on App Store Connect search-terms data once live.
