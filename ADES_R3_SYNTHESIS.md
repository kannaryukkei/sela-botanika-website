# ADES R3 synthesis — Sela Botanika

## Recommendation

Build one Indonesian-first editorial botanical studio experience around the principle **“Mulai dari ruang. Bukan dari nama.”** The integrated direction is an editorial room-reading journey: observe the light and care rhythm, translate them into a cautious starting direction, then explore styling and practical next steps. It is not a transactional storefront.

## Evidence retained from the four complete R2 directions

| Dimension | Evidence in R2 source artifacts | R3 synthesis decision |
|---|---|---|
| Positioning and audience | GPT's “Herbarium Ruang” frames observation before selection; DeepSeek's “Catatan Lapangan” sequences observation into a field index; Muse's “Ruang Hening” uses a tactile studio voice; Gemini's “Atelier Botanika” frames plant choice as spatial planning. | Retain the clearest shared promise: start from the room, light and realistic care rhythm. Keep Indonesian copy and a fictional internal-studio boundary. |
| Information architecture | DeepSeek's numbered folio and 11-sheet progression; GPT's Observe → Select → Compose → Learn; Muse's room planner and offering sequence; Gemini's spatial section hierarchy. | Use a single scroll-led page with eight clear sections and concise navigation. Visitor flow: understand → observe → get a starting direction → explore styles/categories → learn → leave a local note. |
| Visual system | DeepSeek's paper/ink/lime/clay editorial palette and SVG plates; Muse's warm tactile clay/cream composition; GPT's dark botanical editorial palette; Gemini's restrained spatial grid. | Use warm paper, forest green, terracotta and a restrained lime accent; serif display typography with mono folio labels. More spacious and photographic than DeepSeek's text-led folio, less boutique-card-heavy than Muse. |
| Imagery | GPT, Gemini and Muse include remote Unsplash photo elements; DeepSeek uses original inline SVG plates with explicit provenance. | Use three selected Unsplash photos with visible contributor/photo-page links and clear illustrative captions. Keep one custom CSS/SVG-free typographic note card for a lighter visual pause. Photos are remote CDN assets, not local downloads. |
| Interaction | GPT/Muse/Gemini have room-fit or planner controls; DeepSeek has room reader, filterable index, no-match state and non-sending form. | Combine a three-input client-side room reader, category/search filter, home/business content switch, FAQ disclosure and non-sending note form. Avoid inventory, booking, or external submission. |
| Responsive | Gemini source includes a mobile drawer; DeepSeek has mobile index disclosure and desktop sticky index; Muse uses horizontally scrollable navigation; GPT has responsive section grids. | Use a collapsed mobile nav with Escape/focus behavior; fluid grids and stacked mobile layouts; large tap targets; horizontal overflow confined to content where needed. |
| Motion | GPT, Muse, Gemini and the complete DeepSeek replacement include GSAP/ScrollTrigger source with reduced-motion handling. | Implement a restrained scroll progress line and one-time section/hero reveals, with a no-GSAP fallback and full reduced-motion bypass. Runtime behavior remains NOT_VERIFIED until browser execution is possible. |

## Why this direction

- The shared observation-first principle is the strongest common thread across the R2 work and the project intake.
- DeepSeek's completed submission makes the editorial folio/index idea concrete, but the integrated site should be more immediately navigable and more visual for first-time visitors.
- Muse's warm material palette and Gemini's spatial planning are retained as supporting cues, not copied as separate templates.
- GPT's room-fit-to-selection journey is retained as the primary task flow, while narrowing any plant suggestions to non-diagnostic directions.

## Implemented project

- `index.html` — complete one-page site.
- `assets/css/styles.css` — responsive design system.
- `assets/js/main.js` — local interactions and GSAP enhancement.
- `ADES_ASSET_MANIFEST.md` — source, photo-page, contributor and license notes.
- `README.md` — local runbook.

## Scope and truth boundaries

- Fictional synthetic brand and Bandung scenario; internal experiment only; not for release.
- No actual address, opening hours, phone, WhatsApp, email, social accounts, staff, inventory, SKUs, booking, payment, shipping, testimonials, or customers.
- Price bands are synthetic estimates only. Contact form and room reader are local simulations with no data transmission or persistence.
- No expert botanical diagnosis, pet-safety, air-purification, health-benefit, or guaranteed-suitability claims.
- Unsplash photos are clearly identified as illustrative and not real business premises or inventory.

## Verification status

- All six project files were fetched back from the repository after commit.
- Static HTML checks: doctype and closing `</html>` present; 9 page sections; 4 image elements from 3 unique Unsplash sources; every image has non-empty alt text; no duplicate IDs; all in-page hash links resolve; all new-tab links include `rel="noopener"`; lightweight tag-stack scan has no unmatched tags or residual open elements.
- JavaScript source compiled successfully with the V8 parser via `new Function(source)`; this is a syntax check only, not execution or runtime testing.
- CSS brace counts balance; 4 media queries are present, including a reduced-motion rule. Source includes GSAP + ScrollTrigger, a no-GSAP scroll-progress fallback, and a reduced-motion bypass.
- The local Git clone attempt failed because the container could not resolve `github.com`. Earlier Playwright/Chromium navigation was blocked with `ERR_BLOCKED_BY_ADMINISTRATOR`; no rendered screenshots were produced.
- Browser rendering, visitor journey execution, mobile/tablet/desktop visual review, actual image loading/crops, keyboard/screen-reader audit, performance, cross-browser behavior and GSAP runtime: NOT_VERIFIED. The feey CDN image preview also returned a cache miss in the web viewer, so its browser delivery remains unverified.
- Image generation was attempted for a coherent original photo set but the image-generation service returned an error; it was not retried. The integrated site therefore uses three remote Unsplash photo assets with visible contributor/photo-page credits instead of generated/local imagery.
- No production deployment or release is authorized.
