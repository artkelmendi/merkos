# AUTO MERKOS

Premium, Albanian-language automotive showroom website built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run typecheck
npm run build
npm run preview
```

## Content architecture

- Vehicle data: `src/data/vehicles.ts`
- Vehicle model: `src/types/vehicle.ts`
- Dealership contact data: `src/data/business.ts`
- Routes and pages: `src/App.tsx` and `src/pages/`
- Design system and responsive styling: `src/index.css`

Every vehicle card and detail page is generated from the centralized vehicle data. The current records and generated photography are demonstrative and are visibly identified as such in the interface.

## Replace before publication

1. Add the official AUTO MERKOS logo assets and replace the text-only wordmark where appropriate.
2. Replace all records in `src/data/vehicles.ts` with verified live inventory.
3. Replace generated photography under `public/images/` with approved dealership/vehicle photography, or confirm that the generated set is licensed for production use.
4. Fill the verified address, phone, email, Instagram, and Facebook values in `src/data/business.ts`.
5. Add the production domain to hosting, canonical, sitemap, and Open Graph configuration.
6. Configure SPA route fallback for the selected hosting platform.

## Image conventions

- Hero: `/public/images/hero-auto-merkos.webp` with `/public/images/hero-mobile-wagon.webp` below 600px
- Vehicle cards: `/public/images/inventory-*.webp` plus documented fallback crops under `/public/images/vehicles/`
- Featured vehicle gallery: `/public/images/hero-detail-*.webp`
- Showroom/about image: `/public/images/showroom-architecture.webp`

Keep the hero and first visible inventory images optimized and preload only the hero. All later imagery is lazy-loaded.
