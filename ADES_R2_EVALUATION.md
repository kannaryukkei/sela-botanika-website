# ADES R2 Candidate Evaluation — Sela Botanika

**State:** source-level review complete for received uploads; visual/runtime QA NOT_VERIFIED.  
**Review date:** 2026-11-21.  
**Roster:** GPT Lead + GEMINI + DEEPSEEK + MUSE (operator-selected; free consumer interfaces only).  
**Scope:** exact uploaded artifacts mapped by their filenames. No provider/model identity inferred beyond filename attribution. Exact model labels are NOT_DISCLOSED where explicitly stated; DeepSeek upload contains no model disclosure.

## 1. Intake and artifact identity

| Upload filename | Repository artifact | Source status |
|---|---|---|
| `r2-muse.html.html` | `exploration/r2/r2-muse.html` | Complete HTML source; filename-attributed to Meta Muse |
| `r2-gemini.html.html` | `exploration/r2/r2-gemini.html` | Complete HTML source; filename-attributed to Gemini |
| `r2-deepseek.html.html` (complete resubmission) | `exploration/r2/r2-deepseek.html` | Complete HTML source (2,050 lines; 85,849 bytes); filename-attributed to DeepSeek; prior truncated upload separately archived at `exploration/r2/archive/r2-deepseek-truncated-upload.html` |

The first DeepSeek-named upload was preserved byte-for-byte in the archive path above. The replacement is a complete document from doctype through closing `</html>`, with 11 main content sections (00–10), three original inline SVG plates, no `<img>` photo assets, one inline JavaScript block, GSAP + ScrollTrigger CDN references, responsive mobile/desktop index, room reader, searchable/filterable discovery index, workshop note disclosure, FAQ details, and a non-sending contact simulation. Its embedded manifest names five reference URLs and describes the intended learning; those visits are agent-reported and have not been independently re-opened by the Lead.

## 2. Candidate source review

### Meta Muse — “Ruang Hening”
- **Distinctive direction:** Indonesian-first tactile boutique studio; warm cream/clay/bark/sage palette; asymmetrical photo-led hero; tactile materials strip; staged “Susun Sudutmu” planner; plant discovery filter; ledger-style price cards; home/business styling split; enquiry-led workshops and FAQ.
- **Information architecture:** hero → guided corner planner/materials → discovery → illustrative prices → home/business styling → workshops → practical notes/FAQ → honest enquiry.
- **Imagery:** six meaningful remote Unsplash image elements across hero, discovery, styling and workshop. Captions distinguish illustrative images from actual premises, people or inventory. Individual image rights were not independently verified.
- **Interaction/motion:** three-input planner, meaningful empty/no-match state, zone activation and three-step output; discovery filter with live count; non-sending enquiry simulation; native details/summary FAQ. GSAP 3.12.5 + ScrollTrigger source implements one-time hero/section reveals and a guided step/zone sequence. Source includes reduced-motion bypass and visible-by-default fallback.
- **Responsive/accessibility intent:** mobile-first grid; touch targets ≥44px; semantic labels/status; visible focus. Navigation is a horizontally scrollable row rather than a dedicated collapsed mobile menu; this needs visual/touch inspection.
- **References stated in artifact:** Bloomscape, Hey Horti, Beards & Daisies (three distinct niche domains, newly researched per its manifest). The reference claims are agent-reported; Lead did not independently inspect these pages in this review.
- **Model disclosure:** NOT_DISCLOSED.
- **Source-level result:** strong, materially distinct complete direction; imagery and purposeful GSAP are present in source. Runtime, image loading, animation behavior and actual responsive appearance remain NOT_VERIFIED.

### Gemini — “Atelier Botanika”
- **Distinctive direction:** spatial/editorial direction with a more restrained, typographic studio presentation; distinct from Muse’s warm tactile/asymmetric direction and GPT’s Herbarium Ruang field-notes concept.
- **Information architecture:** room guidance, discovery, styling, workshop, FAQ and local question/contact simulation; complete page structure in the submitted source.
- **Imagery:** three meaningful remote Unsplash image elements for hero, styling and workshop. Captions label them illustrative; exact image rights/creator attribution were not independently verified.
- **Interaction/motion:** mobile drawer with expanded state, close-on-link and Escape handling; room/category and styling controls; local non-sending form preview. GSAP 3.12.5 + ScrollTrigger source contains one-time hero, section-number and image-frame reveals. Source bypasses GSAP under reduced motion.
- **Responsive/accessibility intent:** dedicated mobile drawer, skip link, focus styling and responsive breakpoints are present in source.
- **References stated in artifact:** Patch Plants, Foliage Living and Bloomscape (three distinct niche domains). These overlap with the shared R1 reference set; the artifact does not clearly establish three newly researched R2 references distinct from R1.
- **Model disclosure:** NOT_DISCLOSED.
- **Source-level result:** complete candidate with three image elements and purposeful GSAP source. Browser behavior, image availability, animation execution, interaction states and actual responsive appearance remain NOT_VERIFIED.

### DeepSeek — “Catatan Lapangan”
- **Direction:** Indonesian editorial field-notes / folio index, paper/ink/lime/clay palette, numbered sheets, original SVG room-light and floor-plan diagrams; “Mulai dari ruang. Bukan dari nama.” organizes the visitor journey.
- **Completeness:** PASS at source-document level. The complete replacement contains 11 main sections, from cover and room observation through room reader, plant directions, discovery index, pocket care notes, home/business styling, workshops, illustrative prices, FAQ and non-sending enquiry.
- **Interactions declared in source:** mobile index disclosure with Escape close and focus handling; active-section index/folio; radio-driven room reader with a no-match state; search + category filters + empty/reset states; workshop note disclosure; native FAQ details; contact form that prevents submission and only displays a local non-sending status.
- **Visual assets:** three original inline SVG plates (hero light study, direction plate, styling floor-plan plate), each captioned as synthetic/internal. Zero photographic `<img>` elements. This is a deliberate original-illustration direction rather than an image-led photo treatment; no third-party visual rights are claimed.
- **Motion:** GSAP 3.12.5 + ScrollTrigger CDN source for scroll-progress line, active folio/index state and restrained one-time section/reveal transitions. A non-GSAP scroll/IntersectionObserver fallback is present; GSAP enhancement is skipped when `prefers-reduced-motion` is requested. Runtime execution and CDN availability remain NOT_VERIFIED.
- **Responsive strategy:** mobile-first single column and disclosed mobile index; tablet multi-column grids; desktop sticky left index and asymmetric cover. CSS source specifies 720/760/820/900/1100px breakpoints; actual viewport rendering remains NOT_VERIFIED.
- **References in manifest (agent-reported, not independently verified by Lead):** Hardy Houseplant, Studio Campo, Interiordesign.id, UI8 Florivern botanical storefront template, and Dynamic Code botanical editorial. Manifest describes field-guide trust/limits, sequential field-note structure, pot-position light observation, herbarium index metaphor, and paper/ink/editorial grid lessons.
- **Model disclosure:** DeepSeek official free chat interface; exact model label NOT_DISCLOSED / not independently verifiable in this environment.
- **Static source checks:** 2,050 lines; complete doctype and closing tags; one inline script passed `node --check`. HTMLParser completed without unmatched closing tags or residual open elements in a lightweight structural scan. These are source checks, not HTML-validator or browser tests.
- **Remaining limits:** no browser render, responsive device test, interaction execution, accessibility/screen-reader audit, performance audit, cross-browser test, or GSAP runtime verification.

### GPT Lead — “Herbarium Ruang”
- Existing candidate: `exploration/r2/gpt-direction.html`.
- Source-level direction: editorial field-notes / herbarium concept; room-first journey, discovery, illustrative pricing, home/business styling, workshops, FAQ and local non-sending contact preview.
- Source contains six image elements and GSAP + ScrollTrigger one-time editorial reveals with reduced-motion bypass. Image sources are remote Unsplash prototype references; rights and availability are not verified.
- No browser render, device test or interaction test has been performed.

## 3. Static checks actually run

- Muse and Gemini HTML source were read in full and parsed with Python's built-in HTML parser.
- Muse and Gemini inline JavaScript passed `node --check` syntax validation.
- The first DeepSeek upload was truncated and is archived unchanged. The complete replacement (2,050 lines) passed doctype/closing-tag checks and lightweight HTMLParser stack checks; its one inline script passed `node --check`.
- Image element counts from source: Muse 6; Gemini 3; DeepSeek 0 (three original inline SVG plates); GPT candidate 6.
- GSAP/ScrollTrigger source present in all four complete R2 directions (GPT, Muse, Gemini, DeepSeek). DeepSeek's CDN/runtime and reduced-motion branch have not been browser-executed.
- These checks do not prove runtime behavior, visual quality, responsive correctness, accessibility, image loading, or rights.

## 4. Browser / rendered QA status

A Playwright attempt using the available Chromium binary was blocked by the environment with `ERR_BLOCKED_BY_ADMINISTRATOR` for both local HTTP and `file://` navigation; a direct headless Chromium screenshot attempt did not complete within the timeout. No screenshots or rendered browser evidence were produced. Therefore:
- 320/390px mobile, 768px tablet and 1280/1440px desktop rendering: NOT_VERIFIED.
- Visitor journeys and interaction execution: NOT_VERIFIED.
- GSAP CDN load, ScrollTrigger execution, reduced-motion runtime behavior: NOT_VERIFIED.
- Remote image availability, crop/focal point and loading: NOT_VERIFIED.
- Keyboard-only, screen reader, WCAG, performance and cross-browser QA: NOT_VERIFIED.

Do not treat source declarations or candidate self-reports as test results.

## 5. R2 gate assessment

- Three complete external R2 candidates are now received (Muse, Gemini, DeepSeek); GPT's original R2 candidate is also present, giving four complete source-level directions.
- DeepSeek's first truncated upload remains preserved at `exploration/r2/archive/r2-deepseek-truncated-upload.html`; the complete replacement is at `exploration/r2/r2-deepseek.html`.
- All four candidates have materially distinguishable source-level design theses. DeepSeek adds an Indonesian field-notes / herbarium index direction with original SVG plates and purposeful GSAP source.
- The four-participant R2 artifact dependency is resolved at source-document level. G2/R3 can proceed to GPT-only synthesis; visual/rendered comparison remains NOT_VERIFIED because browser QA is still blocked.
- No operator is asked to choose between model-produced websites. GPT Lead will synthesise after the missing deliverable is resolved.
- No release, deployment, third-party outreach or spending is authorized.
