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

Midnight Contact Sheet: a matte-black photographic viewing room with mineral off-white passages, fine silver rules, narrow editorial typography, and square unboxed controls. The memorable moment is the first viewport’s 28/72 caption rail and shutter-revealed car photograph. Approved comp: `.impeccable/mocks/homepage-b-caption-rail.png`.

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
| Hero | 28% black caption rail, 72% uninterrupted vehicle image, headline under 6rem, one action | Semantic HTML/CSS + generated raster |
| Hero motion | Dark plane retracts rightward once while image settles | CSS transform |
| Featured inventory | Four large 3:2 images in a quiet two-column contact sheet | Data-driven HTML + generated raster |
| Inventory filters | One slim ruled row; bottom sheet on small screens | Semantic form controls/CSS |
| Vehicle detail gallery | One dominant frame, six numbered thumbnails, accessible lightbox | React/HTML + generated raster |
| Specifications | Two-column ruled definition list, one column on mobile | Semantic `dl`/CSS |
| About/contact image | Wide architectural showroom image with no people or invented signage | Generated raster |
| Primary actions | Square black/white border inversion with a drawn arrow | HTML + authored SVG |

## Unresolved replacement data

Real logo assets, address, phone, email, social links, live inventory, prices, specifications, and dealership photography remain intentionally unconfirmed and must be replaced before publication.
