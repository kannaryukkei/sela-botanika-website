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
- **Repository HEAD:** `ee37041356cbf3ef06b1b9e099e1e28f36f48e60` on `main` (verified via GitHub commit listing)
- **HEAD tree:** empty tree `4b825dc642cb6eb9a060e54bf8d69288fbee4904`; latest commit message: `Delete index.html`
- **Parent commit inspected:** `3d61e0284ed1e29cab79966330db0edaa59f8d23`; its tree had one `index.html` (20,002 bytes). This is historical prior work, not present at HEAD.
- **Current stage/gate:** G0 activation complete except local runtime/browser/harness identification; next is G1, then G2 delegation.
- **Overall status:** IN_PROGRESS / G0 PARTIAL-PASS
- **Next Lead task:** G1 scope/strategy, followed by R1/R2 Delegation Pack. GPT research and initial concept work can proceed independently.
- **Next operator action:** Supply exact product/model/version strings for the three named external agents, then run one consolidated R1/R2 Delegation Pack for those exact models and return the HTML outputs. No waiver is assumed.

## 2. G0–G5 gate board
| Gate | Status | Evidence / decision |
|---|---|---|
| G0 — Project activation | IN_PROGRESS | Intake, Guide, blank Brief read. Mode/boundaries set. Repo identity and GitHub write permission verified. Current head inspected. Runtime/browser/harness not available for positive verification. |
| G1 — Discovery & scope | NOT_STARTED | Intake supports core proposition and visitor tasks; formal site scope to be consolidated in next stage. |
| G2 — Multi-agent exploration/synthesis | BLOCKED | Roster labels provided but model/product/version not precise; integrations not verified. Delegation Pack can be prepared. |
| G3 — Build ready for QA | NOT_STARTED | No website files at HEAD; no project stack yet. |
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

## 5. Round 1 initial GPT niche research (initial learning only)
References inspected:
1. Root Houseplants — https://www.root-houseplants.com/ . Homepage structure separates shop taxonomy, business planting, plant library/care articles, FAQs and get-in-touch. The practical lesson is a clear consumer/business split plus care guidance, not copied reviews or stock logic.
2. Plant Culture — https://www.plantcultureltd.com/ . Service navigation distinctly exposes maintenance, interior greenscaping, workshops and shopping; service sections are visual and concise. Lesson: service-led content can be organized around visitor needs.
3. Niche Plant Shop — https://www.nicheplantshop.com/ . Neighborhood-centered identity and community tone. Lesson: small local-shop voice can be more intimate than marketplace taxonomy.
4. Soilboy — https://www.soilboy.live/plants . Category/experience navigation links plants, pots, plant care, workshops and corporate experiences. Lesson: connect products and learning, but avoid oversized catalogue navigation for this small fictional business.
5. Clarity Plants case study — https://ecooddworld.eu/en/projects/clarity-plants/ . Search result described plant discovery around size/home conditions and care information; direct page fetch failed, so deeper visual/page inspection remains NOT_VERIFIED.
- **Shared GPT learning (preliminary):** lead with room/lifestyle fit rather than SKU volume; pair plant story with practical care information; separate residential discovery from commercial plant styling; make workshop discovery easy while treating schedule as enquiry-only; use strong editorial imagery and restrained palette; make price bands visible but clearly provisional; avoid catalogue marketplace grids.
- **R1 integrated GPT HTML:** historical `index.html` from parent commit is a reference artifact that may inform baseline, but not yet accepted as this R1 deliverable: it predates current execution, has not been rendered/tested in this session, and its images/interaction are not re-verified. New R1 candidate remains to be produced after research brief is finalized.

## 6. Asset register
| Asset | Status | Provenance / rule |
|---|---|---|
| Logo | NOT_RECEIVED | Text logo + leaf mark described in intake, file absent |
| Phone plant/pot photos | NOT_RECEIVED | About 20 mentioned; 12 hypothetical allowed in scenario, but files absent—cannot inspect |
| Shop photos | NOT_RECEIVED | Two photos mentioned but absent and described as poor lighting |
| Testimonials | NOT_AUTHORIZED | No written permission |
| Historical Unsplash photos in deleted parent HTML | EXISTED IN HISTORICAL CONCEPT ONLY | File metadata cited creators/Unsplash URLs; current HEAD empty. Verify current source/license terms and download/integrate only after review; not documentary images of Sela Botanika |
| New generated visuals | NOT_CREATED | Candidate plan: generate at least 3 original editorial images and label as fictional illustrative imagery |

## 7. G2 roster / delegation state
- **Operator roster entries:** GEMINI / DEEPSEEK / MUSE.
- **Problem:** each lacks exact product/model/version; "MUSE" also does not uniquely identify a model. No directly authorized runtime or connector for these agents was confirmed in available tools.
- **No substitutions:** do not infer Gemini 2.x, DeepSeek R1/V3, Muse model variant, or any other model.
- **Required next operator action:** reply with exact provider + model/product + version strings for all three (or explicitly waive a named agent). ADES then supplies one consolidated round-specific delegation pack per round. For R1/R2 each model returns exactly one browser-ready HTML file; run the prompts externally and return HTML. Do not treat non-response as waiver.
- **R1/R2 minimum evidence:** each agent researches 3+ independent relevant niche sites and embeds source/learning manifest in R1; Round 2 receives shared R1 learning brief and creates materially different full-site HTML with responsive behavior, imagery, meaningful motion/GSAP prototype where possible. GPT also participates independently. Lead renders/tests all returned artifacts where tools permit; currently render QA is NOT_VERIFIED.
- **G3:** GPT-only synthesis and multi-file implementation in target repo, after G2 deliverables and evidence.

## 8. Control family state
| Control | Status | Evidence / blocker |
|---|---|---|
| GOV-01 | PASS (G0 facts and restrictions) | Mode and synthetic boundary in intake; no external outreach/release |
| DISC-01 | IN_PROGRESS | Initial intake synthesis; G1 still to formalize |
| EXP-01 | BLOCKED | Exact external model IDs/versions needed; no integrations verified |
| VIS-01 | NOT_VERIFIED | Historical concept had image URL metadata; no current integrated project assets or rendered inspection |
| INT-01 | NOT_VERIFIED | Historical demo finder code exists in parent concept only; no interactive browser test |
| RESP-01 | NOT_VERIFIED | CSS breakpoints visible in historical HTML, but no actual viewport render evidence |
| MOTION-01 | NOT_VERIFIED | No GSAP behavior evidenced in historical concept; R2 prototype still required |
| BUILD-01 | NOT_STARTED | HEAD has no website files |
| QA-01 | NOT_VERIFIED | No terminal/browser QA tools verified |
| PREVIEW-01 | NOT_STARTED | No near-final candidate |
| RELEASE-01 | NOT_AUTHORIZED | Internal experiment, no publication/release |

## 9. Decisions and blockers
- Keep project purely synthetic and NOT FOR RELEASE.
- No fabricated contacts, schedules, inventory, testimonials, exact address, opening hours, botanical safety or health claims.
- No checkout/payment/backend/CRM/booking until supported by a material requirement and separately approved.
- Repository target is the user-supplied website repo, never ADES documentation repo.
- **Single current blocker:** exact external model product/version identifiers for GEMINI, DEEPSEEK and MUSE. Once supplied, proceed using a consolidated Delegation Pack. If any integration is unavailable, retain manual delegation; waiver only by explicit operator instruction.
- Deployment, DNS, paid services, third-party outreach and public release remain prohibited without explicit approval.
