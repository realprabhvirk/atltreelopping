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

## Domain

Canonical tags, Open Graph tags, `sitemap.xml`, `robots.txt` and the JSON-LD all use `https://atl-treelopping.odoo.com`. If ATL moves to its own domain, find and replace that one string across the project.

## Open items to confirm with Ali before launch

1. **Image rights.** Three photos are Adobe Stock (IDs 210495692, 1564623098, 1613125144). Confirm ATL holds a licence or replace them. Real crew and job photos are the best fix.
2. **Photo of Ali.** The old "Meet The Man" image is AI-generated and is not used. The About page shows a typographic panel until a real photo is supplied.
3. **Years in business.** The old site said 30+ and 35+. The site now says "since 1985" everywhere. Confirm 1985.
4. **Testimonial.** Confirm Ray Benson's review is genuine and can be republished. The reviewer's Google avatar is deliberately not used.
5. **Address.** Confirm 6 Peter St, Slacks Creek is fine to publish (it was already on the old footer).
6. **Service area.** Only "the entire Logan area" is claimed. Get a suburb list for suburb-level SEO.
7. **Opening hours and storm callouts.** Not shown until confirmed (marked `TO CONFIRM` in `contactus.html`).
8. **Prices and firewood stock.** Not shown.
9. **Licences and insurance.** None claimed. Add to the trust strip once confirmed.
10. **Socials and Google Business Profile.** None found. Add if they exist.
11. **Domain.** See above.
12. **Contact method.** Tap-to-call and email only, no form. Confirm that suits ATL.
13. **White logo.** The "white logo" on the old site is actually the full-colour logo, so the footer shows `logo.png` on a white panel. A true white version would be a nice upgrade.
