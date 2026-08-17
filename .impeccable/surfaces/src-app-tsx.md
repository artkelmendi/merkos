---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["src/pages/HomePage.tsx","src/pages/InventoryPage.tsx","src/pages/VehicleDetailPage.tsx","src/pages/AboutPage.tsx","src/pages/ContactPage.tsx"]
---

# AUTO MERKOS public showroom

## Scope and mode

All five public routes in `src/App.tsx`. Primary visitor mode is Persuade with an Experience-led showroom opening: visitors browse the selection, inspect one vehicle, then contact the dealership.

## Audience, job, action, and proof

Kosovo-based visitors evaluating premium European vehicles. The main job is rapid visual and factual evaluation without marketplace density. The primary action is `Shiko veturat`; the vehicle-page action is `Kontakto për këtë veturë`. Proof is the vehicle photography, concise central data model, and clear specification layout. Sample inventory is explicitly identified as demonstrative.

## Chosen direction

Midnight Contact Sheet remains the site-wide language. The homepage opening is now a mobile-first photographic campaign frame: enormous filled MERKOS lettering is sandwiched between a graded road scene and a masked BMW G30 M Sport foreground layer. Concise Albanian copy and one dominant mobile action occupy the lower field. The first-load sequence reveals the word, advances the car from the right, then stages the offer.

## Component grammar

- Corners: square throughout; circles only for compact gallery controls and filter count.
- Lines: one-pixel neutral rules separate content, never card borders around photography.
- Elevation: flat layered planes; no shadows or decorative blur.
- Type ramp: Archivo Narrow display from 2rem to 6rem; Archivo body from 0.72rem to 1.05rem, with limited 400/500/600 weights.
- Controls: outlined or solid rectangular actions, border-bottom text links, native selects in a ruled horizontal filter row.
- Motion: one right-to-left hero shutter; quiet copy entrance; local line, clip, or lift reveals; no smooth-scroll dependency.

## Visible ingredient inventory

| Ingredient | Composition commitment | Medium |
| --- | --- | --- |
| Navigation | Wordmark left; three direct links right; full-screen ruled mobile list | Semantic HTML/CSS |
| Hero | Full-bleed editorial BMW G30 M Sport scene, filled MERKOS lettering physically masked by the vehicle, concise offer, and one dominant mobile action | Semantic HTML/CSS + responsive editorial photo crops |
| Hero motion | MERKOS mask reveal, car depth arrival, then sequenced copy; reduced-motion final state | CSS transform, opacity, blur, and clip-path |
| Featured inventory | Four large 3:2 images in a quiet two-column contact sheet | Data-driven HTML + generated raster |
| Inventory filters | One slim ruled row; bottom sheet on small screens | Semantic form controls/CSS |
| Vehicle detail gallery | One dominant frame, six numbered thumbnails, accessible lightbox | React/HTML + generated raster |
| Specifications | Two-column ruled definition list, one column on mobile | Semantic `dl`/CSS |
| About/contact image | Wide architectural showroom image with no people or invented signage | Generated raster |
| Primary actions | Square black/white border inversion with a drawn arrow | HTML + authored SVG |

## Unresolved replacement data

Real logo assets, address, phone, email, social links, live inventory, prices, specifications, and dealership photography remain intentionally unconfirmed and must be replaced before publication.
