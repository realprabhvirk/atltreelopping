# ATL Tree Lopping

Rebuild of the ATL Tree Lopping website (Logan, since 1985). Plain HTML, CSS and JS: no framework, no build step.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/our-services` | `our-services.html` |
| `/about-us` | `about-us.html` |
| `/contactus` | `contactus.html` |
| any missing page | `404.html` |

URLs match the old Odoo site so search rankings carry over. GitHub Pages, Netlify, Vercel and Cloudflare Pages all serve the `.html` files at extensionless URLs.

Preview locally with `npx serve .`

## Swapping in real photos

Every photo is stock carried over from the old site. Replace a file in `images/` with a real job photo using the same name (both the `.webp` and the `.jpg`). `images/manifest.json` lists what each slot is for.

## Local SEO

Titles, descriptions, headings, the "Where we work" section and the JSON-LD (`areaServed`) all target Slacks Creek, Springwood and Logan. Slacks Creek is the only business address.

## Icons

Icons are inline SVG (stroke style, drawn in the page, no icon font or extra requests). The generator that wrote the HTML is not in the repo, so edit the HTML files directly.

## Domain

Canonical tags, Open Graph tags, `sitemap.xml`, `robots.txt` and the JSON-LD all use `https://atl-treelopping.odoo.com`. If ATL moves to its own domain, find and replace that one string across the project.

## Open items to confirm with Ali before launch

1. **Image rights.** Three photos are Adobe Stock (IDs 210495692, 1564623098, 1613125144). Confirm ATL holds a licence or replace them. Real crew and job photos are the best fix.
2. **Photo of Ali.** The old "Meet The Man" image is AI-generated and is not used. The About page shows a typographic panel until a real photo is supplied.
3. **Years in business.** The old site said 30+ and 35+. The site now says "since 1985" everywhere. Confirm 1985.
4. **Testimonial.** Confirm Ray Benson's review is genuine and can be republished. The reviewer's Google avatar is deliberately not used.
5. **Address.** Confirm 6 Peter St, Slacks Creek is fine to publish (it was already on the old footer).
6. **Service area.** The site now targets Slacks Creek (the base), Springwood and Logan, as requested. Get the full suburb list if ATL wants more suburb-level SEO, and confirm Springwood is a real service area.
7. **Opening hours and storm callouts.** Not shown until confirmed (marked `TO CONFIRM` in `contactus.html`).
8. **Prices and firewood stock.** Not shown.
9. **Licences and insurance.** None claimed. Add to the trust strip once confirmed.
10. **Socials and Google Business Profile.** None found. Add if they exist.
11. **Domain.** See above.
12. **Contact method.** Tap-to-call and email only, no form. Confirm that suits ATL.
13. **Logo.** The "white logo" on the old site is the full-colour logo again, so `images/logo-transparent.png` (and `.webp`) was made by removing the near-white background from `logo.png`. It is used in the header and footer so the logo sits cleanly on both light and dark. `logo.png` itself is untouched.
