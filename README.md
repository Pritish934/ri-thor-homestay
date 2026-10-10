# Ri Thor Homestay — Next.js booking website

A modern, mobile-first homestay website built with:
- Next.js 16 App Router
- JavaScript
- Tailwind CSS v4
- Framer Motion

## Run locally

1. Install Node.js 20.9+.
2. Copy `.env.example` to `.env.local`.
3. Replace the WhatsApp number and production domain.
4. Run:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Important before launch

1. Replace all placeholder/sample business details in `lib/site.js`.
2. Replace sample Unsplash images with the property's real compressed images.
3. Add the real phone/WhatsApp number.
4. Add the real email and exact address.
5. Verify the exact Google Maps location.
6. Replace placeholder About/Privacy/Terms copy.
7. Connect a real booking engine if the property wants online payment and guaranteed inventory.
8. Add Google Search Console and submit `/sitemap.xml`.
9. Add Google Business Profile links and real reviews only.
10. Do not claim Forbes/press coverage unless it actually exists.

## SEO already included

- Unique page metadata
- Canonical URLs
- robots.js
- sitemap.js
- 404 page
- Noindex for legal pages
- Breadcrumbs
- FAQPage JSON-LD
- LodgingBusiness JSON-LD
- Article JSON-LD for blog posts
- Image alt text
- Internal links
- SEO-friendly blog routes
- Open Graph metadata

## Performance notes

The site uses reserved image aspect ratios, lazy loading below the fold, limited animation, and a lightweight component structure. A sub-2-second load is a target, not a guarantee: final performance depends on image sizes, hosting, network and third-party embeds.

## Booking

This starter uses WhatsApp as the primary direct-conversion channel. For real-time availability, payment and automated confirmations, connect a booking provider or custom backend after the property's inventory rules are confirmed.
