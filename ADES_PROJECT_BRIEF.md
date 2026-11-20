# ADES PROJECT BRIEF — SELA BOTANIKA
_Last updated: 2026-11-21 (Asia/Jakarta)_

## 1. Project snapshot
- **Business / brand:** Sela Botanika (100% fictional synthetic brand)
- **Project name:** SELA BOTANIKA
- **Operating mode:** `studio_development` (explicitly stated in intake operator note, lines 123–127)
- **Approver:** Operator of this internal experiment; Nadira Putri is a fictional persona only, not an external approver
- **Location / service area:** Fictional Bandung, West Java; shop area Ciumbuleuit (no street address); delivery in some Bandung areas subject to confirmation; plant styling discussed for Bandung and surroundings
- **Website repository:** https://github.com/kannaryukkei/sela-botanika-website
- **Repository identity/access:** `kannaryukkei/sela-botanika-website`; public; default branch `main`; GitHub connector reports `push=true`, `admin=true`, `maintain=true`, `pull=true`
- **Exact external roster as entered:** `GEMINI`, `DEEPSEEK`, `MUSE`; operator clarified: use free-tier access only, no paid models/API.
- **Free-tier selection rule:** use each named provider's official free consumer interface and its default model/mode available to the operator. Do not purchase API credits, enable a paid plan, or assume a backend version not displayed by the provider.
- **Model identity evidence (2026-11-21):** Gemini official subscription page lists Flash-Lite access on Free; DeepSeek official consumer chat is free, but the exact backend model/version served to a free chat session is not reliably exposed by the available official evidence; Meta's official Muse page says Muse is free with usage limits, but does not identify a fixed underlying model/version. Preserve those unknowns as NOT_DISCLOSED rather than guessing.
- **External execution path:** DELEGATION_PACK (no direct authorized model integration verified in this session). Each external agent must note the exact model/version displayed in its own UI if available; otherwise report NOT_DISCLOSED and include a screenshot/text evidence of the selected free interface/model label.
- **Repository latest verified commit:** `822f7a27e6951161fe787c4dc2e6f7f8fbc5f82a` on `main` (GPT R2 concept; R1 submissions and R2 delegation artifacts are committed in prior history)
- **Initial inspected HEAD:** `ee37041356cbf3ef06b1b9e099e1e28f36f48e60` had an empty tree after `Delete index.html`; subsequent commits now add the ADES Brief, R1 concept, and Delegation Pack only. No integrated website implementation exists yet.
- **Parent commit inspected:** `3d61e0284ed1e29cab79966330db0edaa59f8d23`; its tree had one `index.html` (20,002 bytes). This is historical prior work, not present at HEAD.
- **Current stage/gate:** G2 R2 source-artifact collection is complete: GPT + Gemini + DeepSeek + Meta Muse have four complete HTML directions. R1 outputs and shared learning are archived. R3 GPT-only synthesis is now the next Lead task; rendered comparison remains NOT_VERIFIED.
- **Overall status:** IN_PROGRESS
- **Next Lead task:** Complete GPT-only R3 evidence synthesis and integrated multi-file website project. Evaluate the four source candidates against shared R1 learning and visitor tasks; keep rendered visual/responsive/interaction evidence explicitly NOT_VERIFIED until a working browser harness is available. Do not ask operator to choose model-produced candidates.
- **Next operator action:** None for R2 artifact collection. A material approval will be requested only after one integrated GPT recommendation and near-final internal QA are ready.

## 2. G0–G5 gate board
| Gate | Status | Evidence / decision |
|---|---|---|
| G0 — Project activation | PASS | Intake and Guide read; studio_development mode and no-release boundaries set; repository identity/branch/HEAD and GitHub write permission verified; current tool availability checked. Runtime/browser/harness limitations are recorded, not treated as proof of QA. |
| G1 — Discovery & scope | PASS | Audience, offer, visitor needs, primary room-fit-to-enquiry journey, secondary workshop/business-styling paths, provisional page structure, price caveats, exclusions, and acceptance criteria consolidated in this Brief from the intake. |
| G2 — Multi-agent exploration/synthesis | IN_PROGRESS | R1 complete. Four complete R2 source directions now present (GPT, Gemini, DeepSeek, Meta Muse); full DeepSeek resubmission archived and source-checked. R3 GPT-only synthesis and integrated project remain to be completed; rendered comparison is NOT_VERIFIED. |
| G3 — Build ready for QA | NOT_STARTED | No integrated website implementation or stack exists yet; only R1 concept HTML and project-control files are present. |
| G4 — Operator review | NOT_STARTED | No near-final artifact. |
| G5 — Handover/release | NOT_STARTED | No runbook possible until implementation stack exists. Public release is not authorized. |

## 3. Business understanding, facts, and scope
### Business / visitor strategy
- Fictional boutique indoor plant shop and small studio. Offers indoor plants, pots/media/tools, starter sets, beginner workshops, light plant-choice advice based on room conditions, and plant styling for homes/studios/cafés.
- Priority audience: beginner plant owners, young workers/small homes, couples, hobbyists, and small café/studio operators.
- Main user concern: choosing plants suited to room light and available care time; uncertainty after previous plant-care failures.
- Website goal: clarify offer, range and indicative price bands, store character, care/choice support, workshop enquiry, and plant-styling enquiry.
- Primary visitor task: orient on plant categories and use a low-risk guided “tell us about your space” starter journey, then enquire about current stock/recommendations. Contact channel is not yet available; visible CTA must not pretend to send.
- Secondary tasks: understand workshops and ask about schedules/availability; request preliminary plant styling discussion.
- No online checkout/payment required.

### Material facts and publication controls
| Item | Source | Classification | Rule |
|---|---|---|---|
| All brand/business/person/location details are fictional | Intake lines 4–5, 123–127 | Synthetic | Internal studio demo only; never publish or contact anyone |
| Product/plant price band Rp35k–450k | Intake line 31 | Synthetic | Display as range only and label indicative |
| Pots/tools Rp15k–180k | Intake line 32 | Synthetic | Display as range only and label indicative |
| Starter set Rp85k–250k | Intake line 33 | Synthetic | Display as range only and label indicative |
| Workshops Rp100k–175k/person | Intake line 34 | Synthetic | Indicative only; no schedule/capacity claims |
| Plant styling cost | Intake line 35 | Pending | No fixed price; enquiry scope first |
| Stock changes and not real-time | Intake lines 25, 81 | Synthetic scenario constraint | Never display live/guaranteed availability |
| No contact details / WhatsApp / live social URL | Intake lines 15, 17, 65 | Pending/unavailable | No fabricated number/email/link; use honest unavailable placeholder or non-sending enquiry affordance |
| Shop area Ciumbuleuit, no street address | Intake line 16 | Synthetic | Do not invent exact address or opening hours |
| Delivery to some Bandung areas only | Intake line 16, 86 | Synthetic | Area/fee confirmed against address; no free/universal delivery claim |
| No fixed workshop schedule | Intake line 83 | Pending | Do not invent dates, times, capacity, or remaining seats |
| No expert botanical diagnosis / pet safety / air purification / health benefit claims | Intake lines 84–85 | Restricted | Avoid claims without reliable support and appropriate review |
| Testimonials exist but no written permission | Intake line 96 | Pending | Do not publish |
| Logo and ~20 phone photos mentioned but files not supplied | Intake lines 92–94, 101 | Pending | Do not claim inspected/received; use generated/licensed visuals clearly marked illustrative for this studio experiment |

### Website scope (provisional)
| Page / section | Purpose | Content | Action |
|---|---|---|---|
| Home / brand introduction | Convey approachable boutique studio | Positioning, mood, what makes selection consultative | Explore plants / start guidance |
| Plant & essentials overview | Explain ranges without inventory claims | Indoor plants, pots/tools, starter set; indicative ranges | Ask about current availability |
| Space-fit guidance | Address beginner uncertainty | Light and care-time preference prompts; educational and explicitly non-diagnostic | See starting guidance; not a species-specific guarantee |
| Plant styling | Explain service simply | Home/studio/café, discuss room and needs, no price promise | Start a project enquiry (pending contact mechanism) |
| Workshops | Explain format and indicative range | Repotting/basic care/green corner, no fixed schedule | Ask for next schedule |
| FAQ / practical notes | Answer repeated questions | Stock, pricing, pots included?, delivery, workshops, business spaces | Contact placeholder |

- **Excluded:** checkout, payment, accounts, booking, real inventory sync, CRM, WhatsApp integration, real testimonials, fabricated social links, fabricated street address/hours, pet/health/air-purification claims.
- **Acceptance criteria:** truthful synthetic/demo treatment; clear visitor hierarchy; intuitive mobile-first navigation; visible indicative price ranges; no availability illusion; primary paths for stock questions/workshop questions/styling brief; at least 3 locally integrated image assets with provenance; purposeful GSAP prototype in R2 and purposeful integration in R3 if supported; responsive and accessibility basics verified at available widths; no contact control falsely claiming to send.

## 4. G0 tools, runtime, and harness verification
- **Verified:** GitHub connector actions available for repo metadata, fetch tree/file, create/update file. Repository is writable according to connector permission response.
- **Not verified:** shell/terminal execution, local checkout, runtime versions, browser automation, Chromium/Playwright, screenshot/render environment, coding-agent harness, instruction auto-loading.
- **Harness adapter:** no coding harness has been identified; persistent repository instructions are therefore not claimed to be discovered/included in an active coding-agent context. Manual Control Contract must be pasted into each delegation prompt.
- **Repository history note:** `main` HEAD contains an empty tree due to `Delete index.html`; parent commit contains an earlier standalone HTML concept. Do not conflate the historical concept with current HEAD or treat it as a multi-file implementation or verified render.

## 5. Round 1 GPT niche research and concept
References inspected:
1. Root Houseplants — https://www.root-houseplants.com/ . Homepage structure separates shop taxonomy, business planting, plant library/care articles, FAQs and get-in-touch. The practical lesson is a clear consumer/business split plus care guidance, not copied reviews or stock logic.
2. Plant Culture — https://www.plantcultureltd.com/ . Service navigation distinctly exposes maintenance, interior greenscaping, workshops and shopping; service sections are visual and concise. Lesson: service-led content can be organized around visitor needs.
3. Niche Plant Shop — https://www.nicheplantshop.com/ . Neighborhood-centered identity and community tone. Lesson: small local-shop voice can be more intimate than marketplace taxonomy.
4. Soilboy — https://www.soilboy.live/plants . Category/experience navigation links plants, pots, plant care, workshops and corporate experiences. Lesson: connect products and learning, but avoid oversized catalogue navigation for this small fictional business.
5. Clarity Plants case study — https://ecooddworld.eu/en/projects/clarity-plants/ . Search result described plant discovery around size/home conditions and care information; direct page fetch failed, so deeper visual/page inspection remains NOT_VERIFIED.
- **Shared GPT learning (preliminary):** lead with room/lifestyle fit rather than SKU volume; pair plant story with practical care information; separate residential discovery from commercial plant styling; make workshop discovery easy while treating schedule as enquiry-only; use strong editorial imagery and restrained palette; make price bands visible but clearly provisional; avoid catalogue marketplace grids.
- **GPT R1 integrated HTML:** `exploration/r1/gpt-concept.html` (commit `a5bde883d3df9b01e3f190ae4edba52a2dfa3787`). Browser-ready source created with inline CSS/JS, plant/category overview, indicative price bands, room-fit summary interaction, separate home/business styling paths, enquiry-led workshop, FAQ, and honest non-sending contact placeholder. It embeds the reference/learning manifest. Source file fetched back from GitHub and byte length verified (16,773 bytes); no browser render, viewport inspection, image-load test, or interaction test performed. Remote Unsplash media are concept-only; exact image rights/local integration remain unverified.

## 6. Asset register
| Asset | Status | Provenance / rule |
|---|---|---|
| Logo | NOT_RECEIVED | Text logo + leaf mark described in intake, file absent |
| Phone plant/pot photos | NOT_RECEIVED | About 20 mentioned; 12 hypothetical allowed in scenario, but files absent—cannot inspect |
| Shop photos | NOT_RECEIVED | Two photos mentioned but absent and described as poor lighting |
| Testimonials | NOT_AUTHORIZED | No written permission |
| Historical Unsplash photos in deleted parent HTML | EXISTED IN HISTORICAL CONCEPT ONLY | File metadata cited creators/Unsplash URLs; current HEAD empty. Verify current source/license terms and download/integrate only after review; not documentary images of Sela Botanika |
| New generated visuals | NOT_CREATED | Candidate plan: generate at least 3 original editorial images and label as fictional illustrative imagery |

## 7. Multi-agent roster and R1/R2 state
- **Exact operator roster:** GEMINI / DEEPSEEK / MUSE. Free consumer interfaces only; no API, paid tier, credits or provider substitution.
- **Model labels in submitted artifacts:** Gemini NOT_DISCLOSED; DeepSeek NOT_DISCLOSED; Meta Muse NOT_DISCLOSED. Do not infer backend model/version.
- **R1 external HTML received and archived under filename attribution:**
  - Gemini — `exploration/r1/r1-gemini.html` (1,771 lines; English; seven `<img>` elements / six unique remote Unsplash URLs; room-fit filter, offering tabs, styling toggle, inquiry preview; no GSAP).
  - DeepSeek — `exploration/r1/r1-deepseek.html` (1,110 lines; English; original inline SVG illustration; room reader, care library, workshop/styling/price sections, local explanatory toggles; no GSAP).
  - Meta Muse — `exploration/r1/r1-muse.html` (718 lines; Indonesian; six `<img>` elements / six unique Unsplash URLs; light-map hero, three-input finder, categories, light guide, home/business styling, workshops, FAQ, non-sending form; no GSAP).
- **Legacy supplemental file:** `exploration/r1/external-submission-unattributed.html` is a separate earlier exploration artifact, not one of the three roster-named files. It remains excluded from roster completion and must not be attributed to an agent.
- **R1 evidence synthesis:** `ADES_SHARED_REFERENCE_LEARNING.md` records common findings, source-level comparison, reference evidence and gaps. Lead independently retrieved public content for Patch Plants, Foliage Living, Bloomscape, The Sill, Léon & George, Seb's Urban Jungle, Botanical Designs by Tina, Plunt and Our Infinite Nature. DeepSeek's Siap Nanam, Rareform Plants and Botanical Archive references remain agent-reported / NOT_INDEPENDENTLY_VERIFIED. No full visual render of competitor sites was performed.
- **R1 status:** COMPLETE at source/document level. Each roster participant supplied one complete HTML concept with a reference manifest. Browser rendering and interaction validation of these artifacts remain NOT_VERIFIED.
- **R2 status:** GPT `exploration/r2/gpt-direction.html` (“Herbarium Ruang”), Meta Muse `exploration/r2/r2-muse.html`, Gemini `exploration/r2/r2-gemini.html`, and DeepSeek `exploration/r2/r2-deepseek.html` (“Catatan Lapangan”) are all complete source artifacts. DeepSeek's original truncated upload is preserved unchanged at `exploration/r2/archive/r2-deepseek-truncated-upload.html`; the full replacement is 2,050 lines / 85,849 bytes and passed lightweight HTML structure checks plus `node --check` for its inline JavaScript. It has 11 main sections, three original inline SVG plates (zero photo `<img>` elements), a mobile/desktop index, room reader, searchable/filterable discovery, FAQ and non-sending form simulation, plus GSAP + ScrollTrigger source and reduced-motion fallback. Its manifest names five niche references (Hardy Houseplant, Studio Campo, Interiordesign.id, UI8 Florivern, Dynamic Code); those visits are agent-reported and not independently verified by Lead. Model label: NOT_DISCLOSED. R2 source-level evaluation is recorded in `ADES_R2_EVALUATION.md`.
- **R2 evidence limits:** no candidate has browser-rendered evidence in this environment. Mobile/tablet/desktop appearance, visitor journeys, interactive behavior, image load/crops, accessibility, performance, cross-browser behavior and GSAP runtime remain NOT_VERIFIED. The DeepSeek direction is illustration-led (original SVG), not photo-led; no external visual asset provenance is claimed.
- **R2 requirements:** materially distinct full-site HTML, Indonesian-first, honest image/illustration provenance, functioning local simulations, responsive navigation and purposeful GSAP prototype with reduced-motion fallback. No release or live business features.
- **R3:** GPT Lead alone synthesizes evidence and implements the integrated multi-file project after R2 artifacts are evaluated.

## 8. Control family state
| Control | Status | Evidence / blocker |
|---|---|---|
| GOV-01 | PASS | Synthetic project boundary and no-release restrictions in intake; no external contact, cost or publication |
| DISC-01 | PASS | Audience, offer, visitor tasks, scope, exclusions and acceptance criteria consolidated from intake |
| EXP-01 | IN_PROGRESS | R1 complete; four complete R2 source candidates (GPT, Gemini, DeepSeek, Muse) received and source-reviewed; R3 GPT-only synthesis and integrated project pending. Browser-rendered comparison remains NOT_VERIFIED |
| VIS-01 | NOT_VERIFIED | Muse 6 and Gemini 3 remote Unsplash image elements; GPT 6 remote image elements; DeepSeek 3 original inline SVG plates and 0 photo elements. No browser image-load/render, crop, rights or responsive visual verification |
| INT-01 | NOT_VERIFIED | Source-level interactions in all four R2 directions; Muse, Gemini and DeepSeek inline JS syntax checks passed where available, but no browser interactions were executed |
| RESP-01 | NOT_VERIFIED | Responsive source patterns exist in candidates; Playwright/Chromium navigation was blocked by environment policy, so no viewport screenshots or responsive inspection |
| MOTION-01 | IN_PROGRESS | All four complete R2 directions include purposeful GSAP + ScrollTrigger source and reduced-motion handling/fallback. Runtime/CDN/ScrollTrigger behavior remains NOT_VERIFIED |
| BUILD-01 | NOT_STARTED | No integrated production-style multi-file website project yet |
| QA-01 | NOT_VERIFIED | Muse/Gemini inline JS syntax checks passed; browser navigation was blocked (`ERR_BLOCKED_BY_ADMINISTRATOR`) and headless screenshot attempt timed out. No rendered, responsive, interaction, accessibility, performance or cross-browser QA |
| PREVIEW-01 | NOT_STARTED | No near-final integrated candidate |
| RELEASE-01 | NOT_AUTHORIZED | Synthetic internal experiment only; public release prohibited without explicit authorization |

## 9. Decisions and blockers
- Keep project purely synthetic and NOT FOR RELEASE.
- No fabricated contacts, schedules, inventory, testimonials, exact address, opening hours, botanical safety or health claims.
- No checkout/payment/backend/CRM/booking until supported by a material requirement and separately approved.
- No paid external model access, API credits, third-party proxy or roster substitution.
- No public deployment, DNS changes, third-party outreach, spending or release without explicit operator approval.
- **Current dependency:** R2 DeepSeek resubmission has been received and checked. The original truncated upload is preserved unchanged in `exploration/r2/archive/r2-deepseek-truncated-upload.html`; the complete replacement occupies `exploration/r2/r2-deepseek.html`. No external participant rerun is required.
- **Next step:** GPT-only R3 synthesis and integrated multi-file implementation. Browser QA remains an environment blocker; attempt safe alternatives during R3, record exact limitations, and do not claim rendered inspection. No model winner selection will be requested.

## 10. Current artifact index
| Artifact | Repository path |
|---|---|
| R1 Gemini | `exploration/r1/r1-gemini.html` |
| R1 DeepSeek | `exploration/r1/r1-deepseek.html` |
| R1 Meta Muse | `exploration/r1/r1-muse.html` |
| Earlier supplemental unattributed concept (excluded from roster count) | `exploration/r1/external-submission-unattributed.html` |
| GPT R1 concept | `exploration/r1/gpt-concept.html` |
| Shared R1 learning | `ADES_SHARED_REFERENCE_LEARNING.md` |
| R2 external delegation pack | `ADES_R2_DELEGATION_PACK.md` |
| GPT R2 direction | `exploration/r2/gpt-direction.html` |
| R2 Meta Muse | `exploration/r2/r2-muse.html` |
| R2 Gemini | `exploration/r2/r2-gemini.html` |
| R2 DeepSeek (complete resubmission) | `exploration/r2/r2-deepseek.html` |
| R2 DeepSeek original truncated upload (preserved) | `exploration/r2/archive/r2-deepseek-truncated-upload.html` |
| R2 evaluation | `ADES_R2_EVALUATION.md` |
| R1 delegation pack (historical) | `ADES_R1_DELEGATION_PACK.md` |

## 11. Runtime and harness
- **Repository:** `https://github.com/kannaryukkei/sela-botanika-website`, branch `main`.
- **Verified capabilities:** GitHub fetch/create/update operations.
- **Partially verified:** Chromium binary and Python Playwright package are installed in the current tool container, but navigation to local HTTP and `file://` pages was blocked by `ERR_BLOCKED_BY_ADMINISTRATOR`; direct headless screenshot attempt timed out. This is not a usable browser QA harness.
- **Not verified:** local repository checkout, runtime versions for the actual website project, coding-agent harness.
- **Runbook:** NOT_PREPARED; derive exact commands only after the R3 implementation stack and lockfiles exist.
- **Operator preview:** NOT_RUN. No local preview URL has been verified.
