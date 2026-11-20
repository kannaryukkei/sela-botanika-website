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
- **R3 implementation commit:** `7104ebc25396ba6dc3e70ecf0411ac7b9bc1c738` on `main` (website, asset manifest, synthesis and runbook; this Brief is updated in a subsequent commit)
- **Initial inspected HEAD:** `ee37041356cbf3ef06b1b9e099e1e28f36f48e60` was an empty-tree historical state after `Delete index.html`; not the current repository state.
- **Parent commit inspected:** `3d61e0284ed1e29cab79966330db0edaa59f8d23`; its tree had one `index.html` (20,002 bytes). Historical only.
- **Current stage/gate:** R1 and all four R2 source artifacts are complete. GPT-only R3 synthesis and a six-file static website project are committed. Static source QA passed; rendered/browser QA remains NOT_VERIFIED because local clone DNS failed and browser navigation is blocked in this environment.
- **Overall status:** IN_PROGRESS / REVIEW_REQUIRED (integrated direction ready for one material operator review; no rendered preview verified)
- **Next Lead task:** Continue only if a material revision is requested. Preserve the browser-QA limitation; do not claim visual inspection or release readiness.
- **Next operator action:** Review the single integrated GPT recommendation and decide whether its direction needs a material revision. This is not approval to publish or deploy.

## 2. G0–G5 gate board
| Gate | Status | Evidence / decision |
|---|---|---|
| G0 — Project activation | PASS | Intake and Guide read; studio_development mode and no-release boundaries set; repository identity/branch/HEAD and GitHub write permission verified; current tool availability checked. Runtime/browser/harness limitations are recorded, not treated as proof of QA. |
| G1 — Discovery & scope | PASS | Audience, offer, visitor needs, primary room-fit-to-enquiry journey, secondary workshop/business-styling paths, provisional page structure, price caveats, exclusions, and acceptance criteria consolidated in this Brief from the intake. |
| G2 — Multi-agent exploration/synthesis | IN_PROGRESS | R1 complete; four complete R2 directions evaluated at source level; GPT-only R3 synthesis and integrated multi-file site are committed. Actual rendered candidate comparison remains NOT_VERIFIED due browser environment block. |
| G3 — Build ready for QA | IN_PROGRESS | Static multi-file site implemented and fetched back; HTML/JS/CSS source checks pass. V0→V1 correction completed for image URL escaping and evidence notes. Browser QA and clean-checkout verification remain NOT_VERIFIED. |
| G4 — Operator review | NOT_STARTED | One integrated GPT recommendation is ready for consolidated material review; no operator acceptance recorded. |
| G5 — Handover/release | IN_PROGRESS | Repository-specific local runbook prepared (Python standard-library server, port 4173); clean checkout/run not verified. Public release is not authorized. |

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
- **R3 — GPT Lead synthesis:** completed at source/synthesis level; integrated direction is “Mulai dari ruang. Bukan dari nama.” with a warm editorial system, room-reader journey, concise category discovery, home/business styling, and local-only enquiry simulation. Source-based design decisions and limits are recorded in `ADES_R3_SYNTHESIS.md`.
- **R3 implementation:** `index.html`, `assets/css/styles.css`, `assets/js/main.js`, `README.md`, `ADES_ASSET_MANIFEST.md`, and `ADES_R3_SYNTHESIS.md`. Three unique Unsplash photos are embedded from remote CDN sources with contributor/photo-page credits; no local image files were downloaded. Generated-image attempt failed and was not retried.
- **R3 motion:** GSAP 3.12.5 + ScrollTrigger source provides scroll progress and restrained one-time section/hero reveals; reduced-motion bypass and no-GSAP fallback are present in source. Browser execution is NOT_VERIFIED.
- **R3 source QA:** fetched back all six project files; doctype/closing tags pass; 9 sections; 4 image elements / 3 unique image sources; all images have alt text; no duplicate IDs; all in-page hash targets resolve; new-tab links have `rel=noopener`; lightweight tag-stack scan clean; JS source compiles; CSS braces balance and 4 media queries include reduced-motion.
- **R3 rendered QA:** NOT_VERIFIED. Playwright/Chromium navigation returned `ERR_BLOCKED_BY_ADMINISTRATOR`; git clone failed because the container could not resolve `github.com`; no screenshot or local browser render exists. One Unsplash CDN preview returned cache miss in the web viewer; browser image loading remains unverified.
- **R3 recommendation:** one integrated GPT direction, not a model-candidate choice. Operator review is for material direction only; no release/deployment is authorized.

## 8. Control family state
| Control | Status | Evidence / blocker |
|---|---|---|
| GOV-01 | PASS | Synthetic project boundary and no-release restrictions in intake; no external contact, cost or publication |
| DISC-01 | PASS | Audience, offer, visitor tasks, scope, exclusions and acceptance criteria consolidated from intake |
| EXP-01 | IN_PROGRESS | R1 complete; all four R2 HTML directions received and source-reviewed; R3 GPT-only synthesis and multi-file integration committed. Rendered candidate comparison remains NOT_VERIFIED because no working browser harness was available |
| VIS-01 | NOT_VERIFIED | R3 embeds 3 unique remote Unsplash photo sources (4 image elements) with credits and an asset manifest; Unsplash license page inspected. Browser image load/crop/responsive verification NOT_VERIFIED; no local photo files |
| INT-01 | NOT_VERIFIED | R3 source includes mobile nav, room reader, space tabs, category/search filter, FAQ, and non-sending form; source checks pass but interactions were not executed in a browser |
| RESP-01 | NOT_VERIFIED | R3 CSS has mobile/tablet/desktop breakpoints and mobile navigation source; no viewport screenshots or responsive browser inspection |
| MOTION-01 | IN_PROGRESS | R3 source includes GSAP + ScrollTrigger scroll progress and restrained reveals, reduced-motion bypass and no-GSAP fallback. Runtime/CDN/ScrollTrigger execution NOT_VERIFIED |
| BUILD-01 | IN_PROGRESS | Static multi-file website project committed; six project files fetched back; no package manager/backend required; static source checks pass |
| QA-01 | NOT_VERIFIED | HTML structure/hash/ID/alt/link checks pass; JavaScript syntax compiles; CSS braces balance. Browser navigation blocked (`ERR_BLOCKED_BY_ADMINISTRATOR`); git clone failed DNS resolution. No rendered, interaction, accessibility, performance or cross-browser QA |
| PREVIEW-01 | NOT_STARTED | Integrated source project is ready for local preview; Lead has not produced a verified browser render or operator preview |
| RELEASE-01 | NOT_AUTHORIZED | Synthetic internal experiment only; public release prohibited without explicit authorization |

## 9. Decisions and blockers
- Keep project purely synthetic and NOT FOR RELEASE.
- No fabricated contacts, schedules, inventory, testimonials, exact address, opening hours, botanical safety or health claims.
- No checkout/payment/backend/CRM/booking until supported by a material requirement and separately approved.
- No paid external model access, API credits, third-party proxy or roster substitution.
- No public deployment, DNS changes, third-party outreach, spending or release without explicit operator approval.
- **Current dependency:** source implementation is complete and static QA is recorded. Browser rendering remains blocked: the local Playwright navigation attempt was denied by `ERR_BLOCKED_BY_ADMINISTRATOR`; clean Git clone could not resolve `github.com`. No browser screenshot, interaction execution, or clean-checkout run has been verified.
- **Next step:** one consolidated operator review of the integrated GPT recommendation for material direction only. If a material revision is requested, perform a targeted GPT-only R4 pass using 1–2 relevant references. Do not treat approval of the direction as deployment/release authorization.

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
| R3 integrated website | `index.html`, `assets/css/styles.css`, `assets/js/main.js` |
| R3 synthesis | `ADES_R3_SYNTHESIS.md` |
| R3 asset manifest | `ADES_ASSET_MANIFEST.md` |
| Local runbook | `README.md` |
| R1 delegation pack (historical) | `ADES_R1_DELEGATION_PACK.md` |

## 11. Runtime and harness
- **Repository:** `https://github.com/kannaryukkei/sela-botanika-website`, branch `main`.
- **Verified capabilities:** GitHub fetch/create/update; all six R3 project files fetched back after commit.
- **Partially verified:** Chromium binary and Python Playwright package are installed, but local HTTP and `file://` navigation were blocked by `ERR_BLOCKED_BY_ADMINISTRATOR`; headless screenshot attempt timed out. Git clone failed because `github.com` DNS resolution was unavailable. No usable browser QA harness or local working copy.
- **Runtime:** static HTML/CSS/JS; Python 3.10+ recommended for the standard-library HTTP server. No Node.js, npm, package install, backend, or environment variables.
- **Runbook:** PREPARED in `README.md`; Python server on 127.0.0.1:4173; Windows PowerShell uses `py -m http.server`. Clean checkout and local launch are NOT_VERIFIED.
- **Operator preview:** NOT_RUN. No local preview URL has been verified by Lead.
