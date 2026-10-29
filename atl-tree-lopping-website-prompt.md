# ATL Tree Lopping - Website Rebuild Brief

Paste this entire document into Claude Code as your first message in a fresh session, in this project's folder. Don't summarize it - execute it. Required first step before any code: run the asset pipeline in section 3 (download and inventory every image).

---

## 1. Role & Project Overview

You are building a real, paid-studio-quality replacement for the current ATL Tree Lopping website, which was made in Odoo and looks like an Odoo template. This is a rebuild, not a restyle. Same business, same facts, same page URLs, a far better site.

**Working directory rule (non-negotiable):** Work entirely inside the root folder this Claude Code session is already running in. Do not create a new project folder inside Downloads, OneDrive, Desktop, or anywhere else - this session's current folder IS the project root. All files, images, and assets for ATL Tree Lopping live inside it, and nothing gets written outside it unless you're explicitly told otherwise mid-session.

**Git rule:** If this folder is a git repo (check with `git rev-parse --is-inside-work-tree`), commit and push everything to `main`, always. No feature branches, no pull requests, no preview deployments, and no preview URLs anywhere. If it is not a git repo, ignore this paragraph and just update the website files in place. The target repo is github.com/realprabhvirk/atltreelopping.

**The story to lean on hard:** In 1985 the founder, Ali, arrived in Australia with little more than a chainsaw and tree knowledge passed down through generations from a family tradition in Fiji. That became Ali's Tree Lopping, which is where the "ATL" comes from. The business has been cutting trees in Logan since 1985. That is the one true angle no competitor can copy. Every page should feel like it comes from a family crew with 40 years of dirt under the fingernails, not a franchise.

**The audience:** Many customers are older homeowners in Logan with a storm-damaged or overgrown tree and a worry about cost and safety. They want a big phone number, plain words, and to feel safe handing over the job. The site must be easy for older eyes and thumbs. This is a hard requirement, not a nice-to-have (see 5.6 and 8).

**Current site (the source of truth for content and URLs):** https://atl-treelopping.odoo.com/

---

## 2. Client Snapshot (all confirmed from the live Odoo site on 29 Oct 2026)

| Field | Value |
|---|---|
| Trading name | ATL Tree Lopping (logo also carries the tag "Tree Service") |
| Former name | Ali's Tree Lopping (origin of "ATL") |
| Founder / owner | Ali |
| Founded | 1985 (arrived in Australia; family tradition from Fiji) |
| Address | 6 Peter St, Slacks Creek QLD 4127, Australia |
| Mobile | 0411 309 659 (tel:+61411309659) |
| Landline | (07) 3208 1568 (tel:+61732081568) |
| Email | atltreelopping@icloud.com |
| Service area | "The entire Logan area", Logan, Queensland |
| Socials | None found. Do not add social icons or links. |
| Reviews | One customer testimonial on the live site (Ray Benson). No star rating or review count is confirmed. Never show a rating or count. |
| Hours | Not published anywhere. Do not show hours. |
| Pricing | Not published. Free, no-obligation quotes. Do not show prices. |

**Services (exactly these six, from the live site):**
1. Tree Removal: safe removal of trees of any size, hazardous trunks, clearing space for a new project.
2. Tree Lopping: expert pruning and branch removal, dangerous overgrowth, shaping the canopy.
3. Stump Grinding & Removal: stumps ground well below the surface, ground left level and ready for replanting.
4. Mulching: trees chipped and mulched on-site, tidy finish, nutrient-rich cover for garden beds.
5. Rubbish Removal: green waste and general garden debris removed fast.
6. Firewood Sale: sustainably sourced hardwood, pre-split, seasoned, ready for a fireplace or fire pit.

**Facts stated on the live site worth using:** "We arrive on time, fully equipped, and ready to restore your outdoor space." "Get a free, no-obligation quote today." "Our team is fully equipped and ready to come to you." Committed to sustainable practices and protecting the local environment.

**The one testimonial (use as-is, attributed exactly like this):**
> "The response to my request for a quote was attended to quickly, and they attended the site within a few hours and gave me the quote which was very reasonable. They started work on the same day, and had the entire job done within 3 days, 8 trees removed and the area tidied after. Wish that I had taken some photos...."
> Ray Benson, Happy Customer

**Content conflicts found on the live site (do not copy these blindly):**
- Home page says "30+ years". Services and About pages say "35+ years" and "35 years ago". The founding year is stated as 1985, which is 41 years before today (2026). Use "since 1985" as the headline fact and avoid a counted number anywhere. Never print "30+" or "35+".
- The live About copy contains long dashes. Rewrite those sentences with a comma, colon, or a normal hyphen. See the em dash rule in 5.7.

---

## 3. Assets: Logo & Images

### 3.1 Logo
The real logo is already placed at `images/logo.png` (1024 x 452, shield with a tree, a branch and a chainsaw, green "ATL Tree Lopping" wordmark and an orange "TREE SERVICE" line). Use it exactly as-is. Do not redraw, recolor, trace or reinterpret it. Colors for the whole site are sampled straight from this file (see 5.2).
- The logo's background is near-white with faint shading, so place it on a white or very light surface (white header bar). Do not drop it onto a dark or colored background.
- For dark sections (footer), use the white variant from the old site: `https://atl-treelopping.odoo.com/web/image/493-cf0c9eba/small%20white%20logo%20atl.webp`. Save as `images/logo-white.webp`. Check it on the dark background. If it is unusable, put `logo.png` inside a white rounded panel instead.
- Generate a favicon set from the shield portion of `logo.png` (crop the shield, do not redraw it): `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` (180x180), and link them in every page head.

### 3.2 Image pipeline (do this before writing any HTML)
Download every URL below with `curl -L` into `images/_source/`. If the network is blocked or any download fails, STOP and ask me what to do. Do not substitute stock photos or invent images.

Then for each file: view it, confirm what it actually shows, rename to `lowercase-kebab-case-descriptive.jpg` (never keep `AdobeStock_*`, `240_F_*`, `Gemini_*`, `ACg8oc*`), save a `.webp` next to the original at sensible sizes (max 1600px wide, 1000px for cards), write specific alt text, and log every decision (original URL, new name, alt text, used or skipped, and why) in `images/manifest.json`. Delete `images/_source/` from the final commit once processed.

**Images currently on the live site (full URLs, query strings removed):**

| # | URL | Alt text on live site | Size | Notes |
|---|---|---|---|---|
| 1 | https://atl-treelopping.odoo.com/unsplash/Dn_KGNk2IoY/448/tree%20cutting.jpg | man in red and black shirt climbing on brown tree during daytime | 690x1138 portrait | Unsplash photo ID Dn_KGNk2IoY. Good tall crop. |
| 2 | https://atl-treelopping.odoo.com/unsplash/5vKQOaAL3IQ/444/tree%20cutting.jpg | A man with a chainsaw in the woods | 720x404 | Unsplash ID 5vKQOaAL3IQ. Low res, use at card size or inside the shield crop, never full-bleed. |
| 3 | https://atl-treelopping.odoo.com/unsplash/ChgvIm7GtzU/445/tree%20chopping.jpg | a man in an orange safety vest working on a tree | 690x457 | Unsplash ID ChgvIm7GtzU. |
| 4 | https://atl-treelopping.odoo.com/unsplash/9wZCTO4SiMU/449/tree%20cutting.jpg | a man cutting a tree with a chainsaw | 690x449 | Unsplash ID 9wZCTO4SiMU. |
| 5 | https://atl-treelopping.odoo.com/web/image/471-dbac90f6/AdobeStock_210495692.webp | tree falling after been cut | 962x641 | Adobe Stock ID 210495692. Same photo also at `/web/image/475-5225103c/AdobeStock_210495692.webp` (services page). |
| 6 | https://atl-treelopping.odoo.com/web/image/470-5aac1f1d/AdobeStock_1564623098.webp | man lopping tree in logan queensland | 962 wide | Adobe Stock ID 1564623098. Same photo also at `/web/image/474-ef596af1/AdobeStock_1564623098.webp`. |
| 7 | https://atl-treelopping.odoo.com/web/image/472-a9976598/AdobeStock_1613125144.webp | (none captured) | ~962 wide | Adobe Stock ID 1613125144. Same photo also at `/web/image/476-37136c11/AdobeStock_1613125144.webp`. |
| 8 | https://atl-treelopping.odoo.com/web/image/487-f7797be0/AdobeStock_595195179_Preview.webp | (none captured) | unknown | Filename says "Preview". Likely a watermarked comp. Inspect before using. |
| 9 | https://atl-treelopping.odoo.com/web/image/485-927420da/240_F_658850665_1z8ShU2u2DaNw0mr3yNfWxbS62rHQrAk.webp | (none captured) | ~240px | Adobe Stock thumbnail pattern. Probably tiny and watermarked. Inspect before using. |
| 10 | https://atl-treelopping.odoo.com/web/image/486-239effb2/240_F_928802520_ERZwrp9Y7EQTaB7dV7mgewVNBWkoiOy5.webp | (none captured) | ~240px | Same as #9. |
| 11 | https://atl-treelopping.odoo.com/web/image/477-redirect/treecare.jpg | (none captured) | unknown | About page image. Inspect. |
| 12 | https://atl-treelopping.odoo.com/web/image/491-a3f9b380/Gemini_Generated_Image_o59lkbo59lkbo59l.webp | (none captured) | unknown | About page "Meet The Man". The filename says it is AI-generated. See rule below. |
| 13 | https://atl-treelopping.odoo.com/web/image/489-31bfae06/ACg8ocIlW1aqJhireopR2rrLgC6BruaqXwcHVtv_07pFkQ6Wv8sIkw%3Dw90-h90-p-rp-mo-ba3-br100 | (none) | 90x90 | A Google reviewer's profile avatar attached to the testimonial. DO NOT USE. It is a private person's photo. |

Optional quality upgrade for #1 to #4 only: try `https://unsplash.com/photos/<ID>/download?force=true` for the higher-resolution original of each Unsplash photo. If it fails, keep the Odoo copy. Do not spend more than one attempt per photo.

**Rules for image use:**
- Everything on the live site is stock or AI-generated. There are no photos of ATL's real crew or real jobs. Build the layouts so each image slot is a named, easy-to-swap file (for example `images/hero-crew.webp`) because real job photos will replace these later. Say so in a comment at the top of `main.js`.
- Skip #8, #9, #10 if they are watermarked, labelled "Preview", or narrower than 600px.
- Skip #13 always. The testimonial gets a plain styled initial circle ("R") instead.
- #12: look at it. If it is an AI-generated person, do NOT present it as a photo of Ali or caption it "Ali". Use a neutral working-tree image on the About page instead and list this in the open items.
- Match images to services by what they actually show (falling tree = Tree Removal, someone aloft with a saw = Tree Lopping, and so on). If a service has no fitting image, use a typographic card with the service name, never a mismatched photo and never an emoji.
- Naming examples: `tree-falling-after-felling-logan.webp`, `arborist-climbing-tree-with-chainsaw.webp`.

---

## 4. Required File Structure

Exactly this, no more, no less:

```
index.html
our-services.html
about-us.html
contactus.html
styles.css
main.js
robots.txt
sitemap.xml
404.html
favicon-32.png, favicon-192.png, apple-touch-icon.png
images/   (logo.png, logo-white.webp, processed photos, manifest.json)
atl-tree-lopping-website-prompt.md   (this brief, leave it alone, never link it)
```

Vanilla HTML, CSS and JS only. No framework, no build step, no npm dependency, no bundler. One `styles.css` and one `main.js` shared by every page. No inline styles, no inline scripts (JSON-LD `<script type="application/ld+json">` is the only allowed script block).

**URLs must match the old site exactly** so existing search rankings carry over: `/`, `/our-services`, `/about-us`, `/contactus`. Use the extensionless form in all internal links (`href="/our-services"`) and in canonical tags. The files are flat `.html`, which GitHub Pages, Netlify, Vercel and Cloudflare Pages all serve extensionless. For local preview run `npx serve .` (it handles extensionless URLs). Do not add `.html` to any link.

---

## 5. Design Direction

### 5.1 What to avoid
- No warm-cream background with a terracotta/clay accent and a big serif headline.
- No near-black background with a single neon-green or acid accent used everywhere.
- No hairline-rule "broadsheet" layout with dense newspaper columns.
- No centered hero with a gradient-blob background and a generic stock photo of unrelated smiling people.
- No numbered "01 / 02 / 03" feature cards unless there is a real sequence being described.
- No emoji in copy or UI, no generic icon-pack icons standing in for real photography.
- No filler marketing copy: "world-class," "premier," "unlock your potential," "passionate about delivering excellence." Every claim must trace back to section 2.
- No tiny grey text, no thin light-weight fonts, no hover-only interactions, no autoplay carousels, no parallax. Older visitors get lost in all of these.
- No Odoo-style look: no generic three-card row followed by a generic "Discover more" button.

### 5.2 Color palette (sampled from the real logo, then made accessible)
Define as CSS custom properties in `:root`. The logo greens and oranges fail contrast as text on white (2.6:1 and 2.7:1), so each logo color is paired with an accessible partner:

| Token | Hex | Job | Contrast |
|---|---|---|---|
| `--ink` | #14210f | Body text, dark sections. A green-black, not pure black. | 15.6:1 on `--paper` |
| `--canopy` | #2c6414 | Headings, links, text-green on light surfaces. Darkened logo green. | 7.1:1 on white |
| `--leaf` | #62b238 | The exact logo green. Fills, shield shapes, accents on dark. Never as text on white. | 6.9:1 on `--ink` |
| `--ember` | #f07020 | The exact logo orange. Call-to-action button fill, always with `--ink` text, never white text. | 6.1:1 with `--ink` text |
| `--ember-deep` | #c2540a | Orange text or borders on light surfaces. | 4.6:1 on white |
| `--paper` | #f6f8f2 | Page background, a very light green-tinted white. | |

Re-verify every text/background pair you actually ship with a contrast check script. WCAG AA minimum (4.5:1 body, 3:1 large text), aim for AAA on body text and on the phone numbers.

### 5.3 Typography
- **Display:** Barlow Condensed, weights 700 and 800. It matches the heavy condensed letterforms of the logo wordmark and reads sturdy and trade-honest.
- **Body:** Atkinson Hyperlegible, 400 and 700. It was designed by the Braille Institute for low-vision readers, which is exactly this audience.
- Load both from Google Fonts with `display=swap` and `preconnect`. Fall back to `system-ui`.
- Body text 20px (1.25rem) minimum on every screen size, line-height 1.65, max line length about 65 characters. Headings fluid with `clamp()`. Phone numbers set in Barlow Condensed 800 at 40px minimum on mobile and 64px or more on the contact page.

### 5.4 Signature element (spend all the boldness here, keep everything else disciplined)
**The shield and the call block.** The logo's shield shape becomes the site's recurring frame: hero and About photos are cropped into a shield-style `clip-path` (flat top corners with a pointed bottom), and a "Since 1985" badge uses the same silhouette. Beside the hero image sits a huge, impossible-to-miss call block: "Call for a free quote" with both phone numbers as giant tap-to-call links on an `--ember` panel with `--ink` text. A visitor must be able to find a phone number within one second of landing, with zero scrolling, on every screen size. Everything else on the site stays plain, spacious and quiet around it.

### 5.5 Motion
Sparse and deliberate: a gentle scroll reveal on sections and a clear hover/focus lift on buttons. Everything must switch off completely under `prefers-reduced-motion: reduce` (no motion at all, not "reduced" motion). No carousels, no marquees, no scroll-jacking.

### 5.6 Accessibility for older visitors (non-negotiable)
- Tap targets 56px tall minimum, 12px or more between targets.
- All phone numbers and the email are real text, never an image, and always paired with a word label ("Call", "Email"), never an icon alone.
- Links are underlined, not colored-only. Buttons look like buttons.
- Visible focus ring on every interactive element: 3px `--ember-deep` outline with 3px offset, on light and dark surfaces. Never `outline: none`.
- A "skip to main content" link as the first focusable element.
- Sticky bottom call bar on mobile (under 768px) with a big "Call 0411 309 659" button. It must not cover content or the footer (add bottom padding to the body).
- A text size control in the header: three buttons labelled "A", "A+", "A++" (accessible names "Normal text", "Large text", "Extra large text"), which scale the root font size. Persist the choice with `localStorage`, wrapped in try/catch, and the page must work fine without it.
- Layout must hold at 200 percent browser zoom with no horizontal scrolling.
- Plain Australian English, short sentences, no jargon.

### 5.7 Hard copy rule: no em dashes
**The character U+2014 (the long dash) must not appear anywhere in the site:** not in page copy, headings, meta tags, alt text, JSON-LD, comments, filenames or `README` text. Also no `&mdash;` or `&#8212;`. Normal hyphens (-) are fine and encouraged. Check with `grep -rnE "$(printf '\xe2\x80\x94')|&mdash;|&#8212;|&#x2014;" --include="*.html" --include="*.css" --include="*.js" --include="*.xml" --include="*.json" .` and make it return nothing before you finish.

### 5.8 Quality floor
Fully responsive from 320px up, visible keyboard focus everywhere, real descriptive alt text on every image, semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page, correct heading order.

---

## 6. Location / Map

This is a mobile/service business that also has a real address on the live site. Handle it like this:
- **Contact page:** one responsive Google Maps iframe, no API key, using the real address (the old embed searched "ATL Tree Lopping Logan", which can drop the pin in the wrong place):
  `https://www.google.com/maps?q=6+Peter+St,+Slacks+Creek+QLD+4127,+Australia&output=embed`
  Give it `title="Map showing ATL Tree Lopping at 6 Peter St, Slacks Creek"`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`, 16:10 aspect ratio on mobile and 450px tall on desktop. Put the address as readable text next to it and a large "Get directions" button linking to `https://www.google.com/maps/dir/?api=1&destination=6+Peter+St,+Slacks+Creek+QLD+4127,+Australia`.
- **Home page:** a "Where we work" section stating the service area as "Logan and surrounding suburbs" with the address and a "Get directions" link. No second iframe, one embed only.
- Do not invent a suburb list. The live site only says "the entire Logan area". Log that as a default in the open items.

---

## 7. Page-by-Page Content Brief

### 7.1 Home (`/`)
1. **Header:** logo left, nav (Services, About, Contact), the text size control, and a "Call 0411 309 659" button always visible on desktop.
2. **Hero:** H1 "Tree Lopping and Tree Removal in Logan". Sub: "A family crew cutting trees in Logan since 1985. We arrive on time, fully equipped, and leave your yard tidy." Left: the shield-cropped photo with a "Since 1985" shield badge. Right: the ember call block with both numbers and an "Email for a free quote" link underneath.
3. **Trust strip:** four plain facts in a row: "Since 1985", "Free, no-obligation quotes", "Fully equipped crew", "Family run". Nothing else. No logos, no awards, no star rating.
4. **Services:** the six real services as big cards with a photo (or a typographic card where no photo fits), a one-line description from section 2, and a clear "See details" link to `/our-services`. Vary the grid so it does not look like the stock Odoo three-up row.
5. **The story:** shield-cropped photo plus 3 short paragraphs: Fiji, the chainsaw, 1985, Ali's Tree Lopping becoming ATL. Link "Read our story" to `/about-us`.
6. **Testimonial:** the Ray Benson quote, large type, initial circle "R", "Ray Benson, Happy Customer". No stars, no rating.
7. **What you can expect:** only claims from section 2: arrives on time, fully equipped, trees chipped and mulched on-site, the area tidied after, free quote.
8. **Where we work:** service area, address text, "Get directions".
9. **Final call block:** repeat the big phone numbers and email. Then the footer.

### 7.2 Services (`/our-services`)
H1 "Tree Services in Logan". Short intro about doing everything from one lopped branch to a full site clear. Then six full-width alternating sections, one per service, each with: an H2 (the service name), 2 to 3 sentences built from the live copy and the facts in section 2, and a "Call for a free quote" button. Do not invent process steps, equipment, certifications, insurance claims or prices. Add the testimonial and the final call block. Add a short sentence under Firewood: "Call to ask what's in stock." (this is the only new line and carries no invented fact).

### 7.3 About (`/about-us`)
H1 "A Story That Begins in 1985". Rewrite the live copy tighter, same facts: Ali arrives in 1985 with a chainsaw and knowledge passed down in a Fiji family, it becomes Ali's Tree Lopping, the island work ethic and "can-do" spirit, commitment to a greener future and the local community, "a family that has lived and breathed tree care since 1985". Include a clearly marked "Meet Ali, Owner & Founder" block using the live bio facts (family legacy from Fiji to Australia, leads the team with a can-do spirit). Respect the image rule in 3.2 for the portrait. Finish with the call block.

### 7.4 Contact (`/contactus`)
This page is the whole point for older customers. Make it huge and calm.
1. H1 "Call us for a free quote".
2. Two massive phone cards stacked on mobile, side by side on desktop: label "Mobile" with 0411 309 659, label "Landline" with (07) 3208 1568. Numbers 64px or more on desktop, 40px or more on mobile, `--ink` on `--ember` for the primary card. Each is a full-width tap-to-call button with the word "Call" in it.
3. An email card: "Email us" with atltreelopping@icloud.com as a big `mailto:` link. The mailto adds `?subject=Free%20quote%20request` so the subject is prefilled.
4. A card with the address as plain readable text, 6 Peter St, Slacks Creek QLD 4127.
5. The Google Map embed and the "Get directions" button from section 6.
6. A one-line reassurance: "Free, no-obligation quotes. Our team is fully equipped and ready to come to you."
**No contact form and no backend.** Contact is tap-to-call and email only, which is easiest for this audience. Do not show opening hours (none confirmed); leave `<!-- TO CONFIRM: opening hours -->` in the source above the address card.

---

## 8. Copy & Tone

Write like someone who works there, not like an agency. Plain, active, specific, tied to facts in section 2. Short paragraphs, no adjective stacking, Australian spelling (metres, colour, neighbour).

Bad (generic, could be any tree company): "We deliver premier arboricultural solutions tailored to your needs."
Good (this business): "Call us, we'll come out, quote it free, drop the tree, chip the branches and leave the yard tidy. Same family crew, same way, since 1985."

Never claim: licences, insurance, awards, response times, service guarantees, "emergency 24/7", or counts of jobs or customers. None of these are confirmed.

---

## 9. `main.js` Required Functionality

- Accessible mobile nav toggle (`aria-expanded`, `aria-controls`, keyboard operable, closes on Escape and on outside click, focus returns to the toggle).
- Text size control (5.6) with localStorage in try/catch.
- Smooth scroll for same-page anchors, switched off under `prefers-reduced-motion`.
- Scroll-triggered reveal using `IntersectionObserver`, fully disabled (content visible immediately) under `prefers-reduced-motion`, and content must be visible if JS fails.
- Sticky mobile call bar behaviour (show on mobile, never overlap the footer).
- Click-to-call links need no JS, they are plain `tel:` hrefs.
- No form handling: there is no form and no backend. State this in a comment at the top of the file.
- Top-of-file comment explaining that image slots are named for easy replacement with real job photos.

---

## 10. Technical, SEO & Accessibility Checklist

### 10.1 SEO (everything points at the current URL)
Define `https://atl-treelopping.odoo.com` as the base. Use it, with no trailing slash and absolute URLs, in every one of these:
- `<link rel="canonical">` on every page: `https://atl-treelopping.odoo.com/`, `.../our-services`, `.../about-us`, `.../contactus`.
- `og:url`, `og:image` (absolute image URL on that domain), `twitter:image`.
- `sitemap.xml` listing exactly those four URLs with `<lastmod>2026-10-29</lastmod>`. Do not list `404.html` or the brief.
- `robots.txt`: `User-agent: *`, `Allow: /`, and `Sitemap: https://atl-treelopping.odoo.com/sitemap.xml`.
- JSON-LD `LocalBusiness` on the home page only: name "ATL Tree Lopping", url, logo, image, telephone "+61411309659", email, address (6 Peter St, Slacks Creek, QLD, 4127, AU), areaServed "Logan, Queensland", foundingDate "1985", and `hasOfferCatalog` listing the six services. **No `aggregateRating`, no `review`, no `openingHours`, no `sameAs`** (none are confirmed).
- Keep one constant for the base URL at the top of a short comment in each `<head>` so it can be swapped in one pass if the domain changes later.

Per-page titles and meta descriptions (write them, 50 to 60 and 140 to 160 characters, no em dashes):
- Home: title around "Tree Lopping & Tree Removal Logan | ATL Tree Lopping".
- Services: "Tree Removal, Stump Grinding & Mulching Logan | ATL Tree Lopping".
- About: "Our Story, Family Tree Care Since 1985 | ATL Tree Lopping".
- Contact: "Contact ATL Tree Lopping | Free Quote, Slacks Creek & Logan".
Include the words "Logan" and the service names naturally. No keyword stuffing.

### 10.2 Performance and markup
- `<picture>` with `.webp` and a fallback, `loading="lazy"` and explicit `width` and `height` on every below-the-fold image, hero image eager with `fetchpriority="high"`.
- Unique descriptive alt text on every image. Decorative shapes get `alt=""`.
- `lang="en-AU"` on `<html>`, viewport meta, theme-color meta, Open Graph and Twitter card tags on every page.
- Custom `404.html` in the same design with the phone number on it.
- `aria-label`s on any icon-only control (there should be almost none).
- WCAG AA contrast verified on the actual palette. No console errors, no broken links, no unused CSS at handoff.

---

## 11. Definition of Done

- [ ] All images downloaded, inspected, renamed, converted to `.webp`, with alt text and a complete `images/manifest.json`. No `AdobeStock_*`, `240_F_*`, `Gemini_*` or `ACg8oc*` filenames remain in the project.
- [ ] `images/logo.png` is the real logo, untouched, with colors taken from it. Favicons were cropped from it, not redrawn.
- [ ] A phone number is visible without scrolling on a 360px-wide phone and on a 1440px desktop, on every page.
- [ ] Contact page has both phone numbers at 40px or larger (64px or larger on desktop), the email, the address text, the single Google Maps embed for 6 Peter St Slacks Creek, and the "Get directions" button.
- [ ] Every canonical, og:url, sitemap entry and JSON-LD url uses `https://atl-treelopping.odoo.com`, and the four paths match the old site exactly.
- [ ] The em dash grep in 5.7 returns nothing.
- [ ] No "30+ years", "35+ years" or "35 years ago" anywhere. "Since 1985" is used instead.
- [ ] No star ratings, review counts, opening hours, prices, licence claims or social links anywhere.
- [ ] Tested at 320, 375, 768, 1024 and 1440px, and at 200 percent zoom, with no horizontal scroll.
- [ ] Keyboard-only walkthrough of every page works, focus is always visible, skip link works, text size control works, `prefers-reduced-motion` turns all motion off.
- [ ] No lorem ipsum, no placeholder text, no Odoo leftovers.
- [ ] Gut check: if this layout could work for a different business with a name and logo swap, revise it. The shield frame, the since-1985 story and the giant call block must be unmistakably ATL.
- [ ] If in a git repo: everything committed and pushed to `main`, no other branches, no preview URLs created or mentioned.

---

## 12. Open Items to Confirm With the Client Before Launch

1. **Image rights.** Every photo on the live site is stock: four Unsplash photos (free licence), three Adobe Stock photos (IDs 210495692, 1564623098, 1613125144) that need a licence ATL actually holds, and possibly watermarked Adobe previews. Confirm the Adobe Stock licence or replace them. Best fix: ask Ali for real photos of his crew and jobs and swap the named image slots.
2. **The About page portrait.** The live "Meet The Man" image filename says it was AI-generated. Confirm whether there is a real photo of Ali. Do not show an AI image as him.
3. **Years in business.** The live site says 30+ and 35+. The founding year given is 1985. Confirm 1985 and whether to say "since 1985" (recommended) or a number.
4. **The testimonial.** Confirm Ray Benson's review is genuine, that ATL can republish it, and the attribution wording. Its Google profile avatar is deliberately not used.
5. **Address.** Confirm 6 Peter St, Slacks Creek is a place the public can visit (or a yard) and not only a home address that should stay private. It is already public on the live footer.
6. **Service area.** "The entire Logan area" is the only claim. Get the actual suburb list if ATL wants suburb-level SEO.
7. **Opening hours and after-hours/storm callouts.** None published. Do not show until confirmed.
8. **Prices and what's in stock for firewood.** Not published. Confirm if any should appear.
9. **Licences and insurance.** None claimed. If ATL has public liability insurance or arborist qualifications, add them as a trust strip item once confirmed.
10. **Socials and Google Business Profile.** None found in research. If a Google Business Profile exists, add its link and consider showing a confirmed live review rating.
11. **Domain.** All SEO currently points at `atl-treelopping.odoo.com` as instructed. If ATL moves to its own domain later, update the base URL in canonicals, OG tags, sitemap and JSON-LD in one pass.
12. **Contact method.** Built as tap-to-call and email only, no form. Confirm that is what ATL wants.
