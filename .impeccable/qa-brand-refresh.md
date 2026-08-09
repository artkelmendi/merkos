# Brand refresh visual QA

## Validated viewports

- 1920×1080
- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 430×932
- 390×844
- 375×812

All tested homepage viewports finished with zero horizontal overflow and no broken images visible in the viewport. The mobile menu opens, locks body scroll, exposes the correct expanded state, and closes normally. Reduced-motion emulation removes the launch delay, resolves reveal content immediately, and reduces hero animation duration.

## Issues found and fixed

| Viewport | Symptom | Root cause | Verified fix |
| --- | --- | --- | --- |
| 390×844 | Company wordmark clipped at the right edge | Mobile wordmark size exceeded its content column | Reduced the mobile brand-story scale; measured mark right edge at 334px inside a 359px column |
| 390×844 | Contact page created 163px of horizontal scrolling | Contact wordmark inherited an oversized mobile heading size | Added a dedicated responsive wordmark scale; final overflow is 0px |
| All scrolled states | One clipped vehicle card never revealed and its lazy image remained unloaded | A 100% clip-path left no observable area for IntersectionObserver/lazy loading | Kept a 10% geometric intersection while opacity remains zero; all clip reveals activate and all progressive images load |

## Interaction and content checks

- Opening sequence: independent letter rise, rule expansion, curtain exit, one run per document load.
- Header/footer/company/contact wordmarks use the same identity treatment.
- Published phone links resolve to `tel:+38348125057` and `tel:+38344125107`.
- Location links to a Google Maps search for AUTO MERKOS on Magjistralja Pejë–Deçan.
- Instagram links to `https://www.instagram.com/automerkos/`.
- TypeScript check and production build both pass.
