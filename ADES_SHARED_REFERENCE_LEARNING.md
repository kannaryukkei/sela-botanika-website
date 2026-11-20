# ADES Shared Reference Learning — Sela Botanika
Date: 2026-11-21 · R1 synthesis · Internal synthetic experiment · NOT FOR RELEASE

## Evidence boundary
This is GPT Lead's synthesis of the three roster-named R1 HTML submissions plus independently retrieved public page content. Agent comments are treated as agent-reported research; web citations below support only the observations explicitly retrieved by Lead. No competitor screenshots or full browser-render inspections were performed. Do not copy brand names, copywriting, layouts, or assets.

## R1 artifacts
- Gemini: `exploration/r1/r1-gemini.html` — 1,771 source lines, English, 6 remote Unsplash image references, mobile drawer, room-fit filter, category filter, home/business switch, local inquiry preview; exact model label NOT_DISCLOSED.
- DeepSeek: `exploration/r1/r1-deepseek.html` — 1,110 source lines, English, original inline SVG hero, room reader, care library, workshop/styling/price sections, local note toggles; exact model label NOT_DISCLOSED.
- Meta Muse: `exploration/r1/r1-muse.html` — 718 source lines, Indonesian, 6 <img> elements with 6 unique Unsplash URLs, light-map SVG hero, 3-input finder, category discovery, light guide, home/business split, workshops, FAQ, local non-sending contact placeholder; exact model label NOT_DISCLOSED.
- All three use reduced-motion CSS. None contains GSAP.
- Static source inspection only; no candidate has been rendered or browser-tested by Lead. Remote image availability, image rights, responsive crops, and actual interaction behavior remain NOT_VERIFIED.

## Independently checked public reference evidence
### Cross-cutting references
1. Patch Plants — https://www.patchplants.com/ — home page positions plants around both sunny and shady spaces, provides named plant discovery, beginner-care help, and a business route. Useful lesson: lead with approachable room fit and beginner confidence, then preserve a separate business path. Source checked: search result content retrieved 2026-11-21.
2. Foliage Living — https://foliageliving.ca/ — separates plant retail, planters/gifts, and hands-on workshops; workshop collection has its own discovery path. Useful lesson: make learning and experiences a distinct content lane. Source checked: search result content retrieved 2026-11-21.
3. Bloomscape Plant Guides — https://bloomscape.com/plant-care-guides/ — alphabetic care-guide library spanning many plant types. Useful lesson: make care knowledge findable as a structured library rather than burying it in product copy. Source checked: search result content retrieved 2026-11-21.
4. The Sill workshops — https://www.thesill.com/pages/workshops-events — virtual, in-person, private, and corporate workshop formats with topic-led learning and expert introduction. Useful lesson: workshop content can describe formats and learning outcomes without forcing a calendar on a concept site. Source checked: search result content retrieved 2026-11-21.
5. Léon & George — https://www.leonandgeorge.com/ — separates plant discovery by needs such as easy care, low light, interior design, gifts, and offices; presents service/support and materials as separate value propositions. Useful lesson: organize discovery by visitor needs, and distinguish home and office paths. Source checked: search result content retrieved 2026-11-21.
6. Seb's Urban Jungle — https://www.sebsurbanjungle.co.uk/about/ — lists plant care for homes/businesses, workshops, pop-ups, and event services as separate offers. Useful lesson: a small studio's service architecture can be legible without merging everything into a shop grid. Source checked: search result content retrieved 2026-11-21.
7. Botanical Designs by Tina — https://www.botanicaldesigns.us/ — describes custom design, houseplant care, and consultation as distinct services, supported by a personal founder story. Useful lesson: service pages should explain scope and process, not imply fixed prices where scope varies. Source checked: search result content retrieved 2026-11-21.
8. Plunt — https://plunt.co/about-us/ — distinguishes retail shop from a plantscaping arm for homes, offices, and shared spaces. Useful lesson: retail discovery and spatial projects deserve separate journeys. Source checked: search result content retrieved 2026-11-21.
9. Our Infinite Nature — https://www.ourinfinitenature.co/plant-styling/ — presents home and business styling as separate paths with consultation, mood boards, and maintenance options. It also contains health/air-quality claims; those claims are explicitly NOT adopted because they conflict with this project's claim restrictions. Source checked: search result content retrieved 2026-11-21.

### Agent-reported sources not independently confirmed by Lead
- Gemini also reports Foliage Living and Bloomscape plus Patch Plants; the three domains above were independently checked by Lead. The Sill was a contextual reference in its HTML.
- DeepSeek reports Siap Nanam (https://siapnanam.com/pages/about-me), Rareform Plants (https://rareformplants.com/), The Botanical Archive (https://www.thebotanicalarchive.com/botanicaldesign), Seb's Urban Jungle, Botanical Designs, Plunt, and Our Infinite Nature. Lead independently retrieved content for Seb's Urban Jungle, Botanical Designs, Plunt, and Our Infinite Nature. The other three claims remain agent-reported / NOT_INDEPENDENTLY_VERIFIED.
- Meta Muse reports The Sill, Patch Plants, and Léon & George; all three were independently checked by Lead.

## Shared learning across R1
1. **Room context is the strongest entry point.** Ask about light, room/placement, and realistic care rhythm before pushing a plant category. Use a low-pressure, explainable starting point rather than a pseudo-diagnostic score.
2. **Keep the main journey compact.** A guided starting point should lead to relevant categories and then an honest enquiry affordance. Do not turn it into a dense multi-filter catalogue.
3. **Make the offer architecture legible.** Separate retail essentials, beginner learning/workshops, and home/business styling. Business styling needs its own context and scope.
4. **Care education is a differentiator.** Provide practical, beginner-friendly care notes, but label them as general guidance; no expert diagnosis, pet-safety, air-purification, or health claims.
5. **Price transparency must be caveated.** Display only intake-provided synthetic ranges and repeat that they are illustrative, not quotes or availability.
6. **Workshop content should be discoverable but enquiry-led.** No dates, times, seat counts, booking or payment.
7. **Contact affordances must be honest.** No contact channel exists. A local preview/status message may explain that nothing is sent; do not store or transmit visitor data.
8. **Imagery matters.** The intended brand is visual and warm. R2 must integrate at least three meaningful image references in the candidate, caption them as illustrative, and disclose source/licensing status. R3 must replace concept-only remote references with locally stored assets after rights/provenance checks or use newly generated assets.
9. **Language and local audience.** Indonesian is the preferred R2/R3 default for the fictional Bandung audience. Avoid invented Bandung climate, location, operational details, or cultural claims.
10. **Motion should clarify hierarchy.** All three R1 candidates use CSS/reveal motion or no motion; none includes GSAP. R2 must prototype a purposeful, restrained GSAP behavior, with reduced-motion handling. Do not add motion merely as decoration.

## R1 candidate comparison — source-level only
| Dimension | Gemini | DeepSeek | Meta Muse |
|---|---|---|---|
| Main thesis | Bandung Studio warmth; room-fit + category/price filter | Editorial room-first; care library and service storytelling | Indonesian “Ruang & Ritme”; light map + three-input finder |
| Language | English | English | Indonesian |
| Main interaction | 3-input room-fit, tabs, styling toggle, inquiry preview | Light/care reader, explanatory note toggles | 3-input finder, category discovery, contact placeholder |
| Imagery | Remote Unsplash photos (source lists 6); rights not independently checked | Inline SVG illustration; no third-party photos | 6 Unsplash image elements; rights not independently checked |
| Motion | CSS transitions; no GSAP | IntersectionObserver reveal; no GSAP | CSS transitions / smooth scroll; no GSAP |
| Notable source-level issue | Tabs lack full keyboard tab pattern; always returns top 3 even weak matches; English copy | Desktop nav hidden on narrow screens without a replacement mobile menu; English copy | Finder defaults to 2 results but can be heuristic; desktop nav has no dedicated mobile menu |
| Browser verification | NOT_VERIFIED | NOT_VERIFIED | NOT_VERIFIED |

## R2 direction constraints
Every participant (Gemini, DeepSeek, Meta Muse, GPT) must now create a materially distinct full-site HTML direction, not a reskin or critique. Each direction must:
- Use Indonesian copy by default and the fictional Bandung scenario only.
- Include complete hero, room-fit interaction, offer/category discovery, price bands, home/business styling, workshops, FAQ/caveats, and honest non-sending contact.
- Show all prices as illustrative; no inventory, exact address/hours, real contact, schedule, testimonials, delivery guarantee, checkout, payment, booking, health/pet/air claims.
- Include at least three meaningful imagery assets with captions and source/rights disclosures. Do not claim they depict Sela Botanika.
- Prototype one purposeful GSAP behavior (GSAP + ScrollTrigger if used), including prefers-reduced-motion fallback; no autoplay or parallax that impairs reading.
- Include responsive mobile/tablet/desktop design intent, keyboard and focus behavior, semantic controls, alt text, and working client-side simulations.
- End with a comment documenting exact UI model label (or NOT_DISCLOSED), three niche references and lessons, image provenance/rights, responsive and GSAP behavior, and tests not performed.
- Do not copy competitor copy, identity, layout, or assets. Return one standalone HTML document named for the roster participant. R2 remains exploratory, not release-ready.

## Gate status
- R1 roster submissions received and archived with file-name attribution.
- R1 evidence synthesis complete at source level; external research claims distinguished from Lead-checked pages.
- G2 remains IN_PROGRESS until all R2 distinct full-site HTML directions are returned and evaluated, then GPT-only R3 synthesis is completed.
- Rendered visual review, interactions, responsive QA, image loading/rights, accessibility, and GSAP execution remain NOT_VERIFIED until tested in a real browser/runtime.
