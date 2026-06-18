# SIGNATURE.md — Berkeley Liquors & Deli

## §S1 derivation

**VERB HARVEST** (physical, transitive, owner's hands; evidence from recon):
1. **POUR** — wine/spirits into a glass. Evidence: it is a wine/liquor shop; review
   "great selection of wines." The defining act of the bottle side.
2. **STACK** — cold cuts and bread into a sandwich. Evidence: "& Deli," category
   delicatessen, a real sub menu.
3. **SLICE** — cold cuts at the counter. Evidence: deli operation.
4. **WRAP** — the sandwich in paper. Evidence: deli operation, paper-wrapped subs.
5. **CHILL / BAG** — bottles into the cooler / a bag. Evidence: retail bottle shop.

**STATE CHANGE:** POUR acts on wine; the visible before/after is **empty glass ->
full glass** (rising claret line, a settling meniscus). That state change IS the
shop's promise: you walk in empty-handed, you leave with the bottle poured into your
evening. Chosen verb: **POUR.**

**FINGER MAPPING:** POUR maps to **vertical drag / scroll-scrub**. The visitor drags
down (or scrolls) over the hero glass; drag distance = fill height. The finger
becomes the bottle tipping. Not a tap-to-play-video; the liquid level tracks the
finger in real time.

**ARC / POSITION / CTA:**
- signature_arc: **build** (fill rises from empty to full).
- signature_position: **cover** (the first thing painted and touched is the glass).
- completion_threshold: fill reaches >= 92% ("topped off").
- completion_cta: crossing the threshold settles the meniscus and reveals the primary
  CTA, "See the shelves" + the tap-to-call; cta_shape: **earned**.

## Required fields
- craft_verb: pour
- evidence: wine/liquor shop; "great selection of wines" (Google review, Nov 2024)
- material: red wine (claret)
- state_change: empty glass -> full glass, rising fill + settling meniscus
- touch_primitive: vertical drag / scroll-scrub
- signature_arc: build
- signature_position: cover
- cta_shape: earned
- idle_behavior: **reactive-on-approach** — glass holds a composed ~20% rest pour
  with a slow meniscus shimmer; on first pointer entry within 300ms the surface
  brightens and a thin pour stream hints from the bottle lip.
- completion_threshold: fill >= 92%
- completion_cta: reveal "See the shelves" + tap-to-call, settle meniscus
- fallback_chain: full (SVG clip-path fill + spring meniscus) -> mid (clip-path fill,
  no spring) -> static (pre-filled glass at ~70%, no interaction)
- reduced_motion_composition: glass renders pre-filled at ~70% with a still claret
  surface and the CTA visible from load; no fill animation, no scrub. An art-directed
  rest state, never blank.
- sound_moments: none (no on-site audio recorded; stock sound is banned).
- haptic_device: none (no verified device gesture; Android may garnish completion with
  navigator.vibrate(<=20ms), optional).

## Blocklist check
(craft_verb, touch_primitive) = (pour, vertical-drag/scroll-scrub). This is a
contained glass FILL, deliberately NOT the burned "fluid-drench" (saucy-bitez, a full
-screen liquid wash) — a discrete vessel, not a drench. Diverges from neighbor
Brandy's signature (a passive amber caustic light field; no verb, no touch). No
collision.

## Implementation note
SVG glass + bottle silhouette. A single clip-path rectangle's height is driven by a
scroll/drag progress value (0..1), eased. Meniscus = a thin <ellipse> riding the top
of the fill with a 2px highlight. Pointer handlers ENQUEUE, one rAF DRAINS. Rect
cached at pointer capture (no getBoundingClientRect in the move handler). Pauses via
IntersectionObserver when offscreen. No canvas/WebGL, so the §S4 GPU-shader gates
(items 1,3,4) do not apply; items 2 and 5 (hot-path greps, real-device feel) do.
