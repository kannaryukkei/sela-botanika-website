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
| `r2-deepseek.html.html` | `exploration/r2/r2-deepseek.html` | **INCOMPLETE**: file ends mid-SVG at `<text x`; no closing SVG/section/script/body/html; no R2 reference/model/motion manifest |

The DeepSeek-named upload is preserved exactly as received and is not represented as a complete browser-ready candidate. It contains four main sections only (sampul, amati, baca-ruang, arah), two inline SVG illustrations, zero `<img>` assets, no inline JavaScript, no GSAP/ScrollTrigger, and no embedded R2 source/learning manifest. It stops during the second illustration before the rest of the page can be evaluated. Its direction is “Catatan Lapangan”; source does not establish the required R2 reference research or purposeful motion.

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
- **Distinctive direction visible in received fragment:** Indonesian editorial field-notes / folio index, paper/ink/lime/clay palette, numbered sheets, SVG room-light diagrams and room/care reader.
- **Completeness:** FAIL / INCOMPLETE UPLOAD. The source ends in the middle of an SVG text element. It is not a full website artifact and cannot be evaluated for the remaining sections, interactions, responsive navigation, imagery or motion.
- **Images/motion/references:** zero photographic image elements; no JavaScript or GSAP source in the received fragment; no R2 manifest or reference list present. This is an assessment of the uploaded fragment only, not a claim about an unreceived continuation.
- **Model disclosure:** absent from received fragment; do not infer.
- **Required recovery:** resend one complete R2 HTML from doctype through closing `</html>`, with its R2 reference/learning manifest, media provenance, motion/GSAP status and limitations. No other agent needs to rerun.

### GPT Lead — “Herbarium Ruang”
- Existing candidate: `exploration/r2/gpt-direction.html`.
- Source-level direction: editorial field-notes / herbarium concept; room-first journey, discovery, illustrative pricing, home/business styling, workshops, FAQ and local non-sending contact preview.
- Source contains six image elements and GSAP + ScrollTrigger one-time editorial reveals with reduced-motion bypass. Image sources are remote Unsplash prototype references; rights and availability are not verified.
- No browser render, device test or interaction test has been performed.

## 3. Static checks actually run

- Muse and Gemini HTML source were read in full and parsed with Python's built-in HTML parser.
- Muse and Gemini inline JavaScript passed `node --check` syntax validation.
- The DeepSeek-named upload is visibly truncated at `<text x`; it is not a complete document and has no inline script to syntax-check.
- Image element counts from source: Muse 6; Gemini 3; DeepSeek fragment 0; GPT candidate 6.
- GSAP/ScrollTrigger source present: Muse and Gemini and GPT; absent in DeepSeek fragment.
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

- Two complete external R2 candidates are received (Muse and Gemini).
- One external R2 submission (DeepSeek-named) is incomplete and does not meet the full-site artifact requirement.
- GPT's original R2 candidate is present. The current complete candidate set therefore contains GPT + Muse + Gemini, but the selected four-participant workflow is not complete until DeepSeek supplies its full artifact or the operator explicitly waives that participant.
- R2 source-level review can proceed for the three complete candidates; G2/R3 synthesis remains blocked on the missing DeepSeek deliverable or an explicit waiver.
- No operator is asked to choose between model-produced websites. GPT Lead will synthesise after the missing deliverable is resolved.
- No release, deployment, third-party outreach or spending is authorized.
