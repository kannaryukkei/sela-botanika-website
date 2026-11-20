# ADES PROJECT BRIEF — SELA BOTANIKA

> Current-state record maintained by ADES Lead. Fictional internal studio experiment only; NOT FOR RELEASE.

## 1. Project snapshot
- **Brand / project:** Sela Botanika — fictional indoor-plant shop and small workshop / styling studio.
- **Operating mode:** `studio_development` (confirmed in operator instruction and intake).
- **Location (fictional):** Ciumbuleuit, Bandung, Jawa Barat; delivery in selected Bandung areas only, subject to address/fee confirmation.
- **Website repository:** https://github.com/kannaryukkei/sela-botanika-website
- **Repository baseline:** public repo, default branch `main`, baseline commit `ee37041356cbf3ef06b1b9e099e1e28f36f48e60` (`Delete index.html`); tree is Git empty-tree SHA `4b825dc642cb6eb9a060e54bf8d69288fbee4904`; repository `contents/` returned `[]`.
- **Access:** connected GitHub authenticated as `kannaryukkei`; repo permissions report push/admin true. Non-final branch `ades/initial-site` created successfully at the verified baseline SHA. No website files have yet been committed.
- **Stack:** none in empty repo. Static HTML/CSS/JS is the current proposed implementation.
- **Execution harness:** ADES Lead conversation + GitHub connector + local container / Python Playwright / Chromium. No persistent coding-agent harness, repository instruction loader, CI, or technical enforcement discovered. No `README.md`, `AGENTS.md`, or `package.json` found in repo root.
- **Runtime verified:** Node v22.16.0, npm 10.9.2, Python 3.13, Playwright installed, Chromium `/usr/bin/chromium`. Browser smoke-tested; `page.set_content()` renders local HTML reliably. Direct navigation to local `file://` and localhost origins blocked by environment policy. No website-specific local URL browser navigation is claimed.
- **Integration inventory:** GitHub read/write, web search/open, container/browser QA available. No direct external Anthropic Claude / Google Gemini model execution tool and no image-generation endpoint in active tool inventory. Container DNS failed when attempting external image-CDN downloads; no remote image downloaded. No deploy/release action taken.
- **Current stage:** G2 — design exploration and synthesis.
- **Current gates:** G0 PASS · G1 PASS · G2 BLOCKED · G3 NOT_STARTED · G4 NOT_STARTED · G5 NOT_STARTED.
- **Overall status:** BLOCKED only for two external model HTML outputs and material operator direction choice. Safe independent work completed to current point.

## 2. Verified facts, assumptions and boundaries
The full uploaded intake explicitly marks every business/person/location/price/operation as fictional and internal-only.
- **Offer:** indoor plants, pots/media/basic care tools, starter plant sets, small workshops (repotting / indoor care), plant styling for homes/studios/cafés.
- **Audience:** beginners, small-space residents, young workers/couples, plant hobbyists, and small café/studio owners.
- **Need:** ease uncertainty about selecting and caring for plants based on actual light, available space, and realistic care time.
- **Indicative simulated ranges only:** plants Rp35,000–450,000; pots/supplies Rp15,000–180,000; starter sets Rp85,000–250,000; workshops Rp100,000–175,000 per participant. Styling quote only after needs/scope are known. No exact SKU prices.
- **Stock:** changes; no live stock system. Never show current availability or live stock labels.
- **Workshops:** no dates/times/location/capacity or seats remaining. Enquiry-only language.
- **Delivery:** certain Bandung areas only; coverage and fee depend on address; don't guarantee free delivery or whole-city coverage.
- **Contact:** no actual WhatsApp number, email, live social account, contact URL or form endpoint. Use clear disconnected placeholder only; no fake number/link or pretend submission.
- **Prohibited claims:** no unsupported pet safety, air purification, health benefits, professional diagnosis or treatment claims. Testimonials are private and unapproved for publication; exclude.
- **Assets:** wordmark/logo and ~20 plant/pot photos were mentioned but not uploaded; two store photos also not uploaded. No supplied asset has been inspected or used. Do not imply otherwise.
- **Art direction boundary:** original CSS botanical illustrations are abstract demo art, not photographs/documentary evidence of actual premises, people, products or stock.

## 3. Scope, journey and acceptance
**Goal:** make the offer easy to understand, help visitors orient their plant choice, show price ranges and routes to workshops/styling, then support an enquiry once a genuine channel is available.

**Primary visitor journey:** understand the offer → orient around room/light/care needs → browse plants/supplies and approximate price ranges → understand workshop or styling services → enquire when a real channel is configured.

**Recommended single-page IA:** editorial hero; how Sela helps; categories for plants/supplies/starter sets; lightweight non-diagnostic room-needs guide; care notes / FAQ; workshops; plant styling; clearly pending contact area.

**Included:** responsive static website; Indonesian copy; simulated price bands with caveat; category discovery; educational needs selector only if explicitly non-diagnostic; FAQ; accessible anchor navigation; original CSS/SVG illustration; basic SEO metadata.

**Excluded:** backend/CMS, checkout/cart/payments, live stock, booking, real workshop registration, form submission, CRM, account/auth, mailing list, analytics/tracking, botanical diagnosis, unsupported health/pet/environmental claims, public deployment or DNS.

**Acceptance checks:** no invented facts; correct demo labelling; no false contact/stock/schedule/testimonials; meaningful controls and links; 320/360/390 mobile, 768 tablet, 1280/1440 desktop responsive design; visible keyboard focus and reduced-motion support; no overflow/runtime errors; build/test/render evidence; exact branch/commit verified. Operator review happens once on a consolidated near-final candidate after Lead QA.

## 4. G0–G5 gate board
| Gate | Status | Evidence / decision |
|---|---|---|
| G0 — Project activation | **PASS** | Guide, initially blank Brief, and completed intake read. Mode/boundaries established. Repo identity/default branch/tree/access checked; branch created. Runtime, Playwright, Chromium, GitHub, web and available integrations inventoried. |
| G1 — Discovery & scope | **PASS** | Business, audience, primary task, sitemap, scope, exclusions and acceptance checks resolved from intake; uncertainty preserved. |
| G2 — Two-track design & synthesis | **BLOCKED** | Three concrete GPT internal prototypes have been rendered, tested and scored. Two external outputs are not available because no external invocation integration exists; consolidated manual Delegation Pack ready; no waiver. Third-reference inspection also needs completion because Local Plant Shop page open returned a cache miss. Operator direction selection pending. |
| G3 — Build / V0→V1 | NOT_STARTED | Internal concepts are not the target repository website. Work branch exists but final direction is not selected and no website files committed. |
| G4 — Lead QA + operator review | NOT_STARTED | Internal prototype QA complete; final website has not been built. One consolidated human review remains due after build and Lead QA. |
| G5 — Handover / release | NOT_STARTED | Handover and release authorization not performed; public release not authorized. |

## 5. G2 — Internal GPT Design Exploration (Workstream B)
### Iteration 1 references
1. **The Sill** — https://www.thesill.com/ — homepage/page structure inspected. Patterns: navigation and plant discovery by category/need, low-light and easy-to-grow groupings, plant-care resources and workshops, expert-help framing. Avoid importing cart/live commerce/pet-safety/guarantees.
2. **Bloomscape** — https://bloomscape.com/shop/ — shop experience inspected. Patterns: clear search, product discovery facets and education; use need-based categorisation without claiming live data or unsupported plant-specific care/safety metadata.
3. **The Local Plant Shop** — https://www.localplantshop.com/ — surfaced in web research as a relevant service-led plant design/workshop reference, but direct page open returned a cache miss. Page-level visual inspection is **NOT_VERIFIED**. It cannot count as a completed third website inspection yet. Next targeted research: inspect Before Plant (`https://www.beforeplant.com/pages/about`) or Ibad Garden (`https://www.tanamanhiasbandung.com/`) and record a page-level pattern before marking reference criterion PASS.

### Three distinct internal artifacts
These were created by GPT internal exploration, not by external models:
- **A — Editorial Boutique:** `/mnt/data/ades/concepts/direction-a-editorial.html`. Story/atmosphere-led flow: hero → philosophy → curated categories → care notes → workshops → styling → FAQ. Strongest brand narrative and cohesion; less direct discovery than B.
- **B — Guided Matcher:** `/mnt/data/ades/concepts/direction-b-guided-matcher.html`. Task-led interaction with three fields (light / space / care rhythm), dynamic result text and alternate intent paths. Strongest response to beginner uncertainty; must remain an illustrative needs guide, not species diagnosis or stock recommender because no botanical dataset is supplied.
- **C — Studio Index:** `/mnt/data/ades/concepts/direction-c-studio-index.html`. Studio/architecture-first structure: service practice index, condition-based selection index, journal/workshops and styling enquiry. Strongly distinctive studio lens; weaker direct path to core retail assortment.

### Browser evidence and rubric
- Playwright/Chromium rendered all 3 HTML artifacts at 390×844, 768×1024 and 1440×1000 via `page.set_content()`. Nine current screenshot artifacts: `/mnt/data/ades/evidence/direction-a-editorial-{mobile,tablet,desktop}.png`, `/mnt/data/ades/evidence/direction-b-guided-matcher-{mobile,tablet,desktop}.png`, `/mnt/data/ades/evidence/direction-c-studio-index-{mobile,tablet,desktop}.png`.
- `/mnt/data/ades/evidence/concept-qa.json` and `qa-output.txt`: nine viewport checks; no horizontal overflow; no broken internal anchors; no page errors. Matcher tested with bright / large / often criteria; output updated and selecting `Bentuk & tekstur` changed the result heading.
- `/mnt/data/ades/evidence/accessibility-smoke.json`: keyboard Tab reaches visible 3px focus outline; reduced-motion media query is detected for all three; focusable counts A/B/C 15/15/9; all internal link targets resolve. Automated colour-contrast audit has not been run.
- **Visual defect found and corrected:** one early render showed missing common CSS / malformed media query in prototypes. CSS is now embedded correctly; all nine viewport screenshots and concept QA were regenerated. Do not use the earlier broken screenshot state.
- **Shared scorecard:** `/mnt/data/ades/evidence/scorecard.md`, all eight criteria rated 1–5 across A/B/C after rendering and interaction tests. Scores are Lead estimates, not independent accessibility audit.
- **Synthesis recommendation (not approved):** A as the overall structure and visual foundation, with a simplified B-style needs guide. Preserve warm editorial storytelling and make the beginner discovery path tangible without unsupported species-specific advice.
- **Iteration 2:** not yet run. If a material gap appears after external comparison, use only 1–2 targeted references for that specific question.
- **Direction choice:** pending operator selection; do not assume `lanjut` is approval.

## 6. G2 — External AI Delegation (Workstream A)
- **Direct route check:** current tool inventory has GitHub, web, local container/browser, file skills, Website Maker builder-link and other utility tools; it has no callable Anthropic Claude or Google Gemini model endpoint. There is no direct image-generation tool either.
- **Status:** BLOCKED / NOT_COMPLETED; no waiver.
- **One consolidated manual pack:** `/mnt/data/ades/DELEGATION_PACK.md` contains two distinct model prompts, same shared project facts/restrictions/output contract, different creative lenses:
  1. **Anthropic Claude:** editorial botanical retail / strong art direction.
  2. **Google Gemini:** task-first guided room-needs matcher.
- Each prompt requests exactly one standalone browser-ready HTML file, inline CSS/JS, Indonesian copy, semantic/responsive/accessibility support, local prototype interactions and strict fictional-data/no-release restrictions.
- **Only unavoidable operator bridge:** run each supplied prompt in a separate Claude and Gemini session and attach exactly one returned HTML file from each to this ADES conversation. Do not substitute a screenshot, self-score or text report for the HTML artifacts. This pack is not a waiver.

## 7. Visual assets and provenance
- No logo/photo file supplied; no client asset used.
- All concept images are hand-authored CSS shapes / illustration, classified as original abstract demo art.
- No external image embedded. A prior deleted `index.html` had Unsplash URLs in its historical commit diff, but those images were not fetched or license-verified and are not current assets.
- No image-generation endpoint found. Container DNS failure prevented remote image download/verification. Final safe route: create original inline SVG/CSS botanical imagery or source a specific asset only after its asset-page, license, attribution and use restrictions are verified.
- Do not present generated art as actual Sela shop, people, products, inventory or completed project photography.

## 8. Implementation / QA / harness
- **Target repo:** `kannaryukkei/sela-botanika-website`; main base SHA above; branch `ades/initial-site` created. Nothing committed yet.
- **Implementation:** pending design choice and completion of G2; static HTML/CSS/JS proposed. No dependency installation.
- **V0 → self-review → V1 → re-verification:** NOT_STARTED for final website. CSS fixes were applied to exploration prototypes only, not target site.
- **Final site QA:** NOT_STARTED. No final build, final browser journey test, image/font/network check or final source commit exists.
- **Harness:** chat-led ADES + GitHub connector + local container/Playwright. No native agent instruction files/harness loader or technical enforcement verified. Manual Control Contract must be included in external prompts (already in pack).

## 9. Control-family status
| Control | Status | Evidence / blocker |
|---|---|---|
| GOV-01 Governance / integrity | PASS | Mode, fictional facts, boundaries, repo and available tools verified. |
| DISC-01 Discovery / strategy | PASS | Visitor need, journey, scope, sitemap, exclusions and acceptance criteria established from intake. |
| EXP-01 Exploration / synthesis | BLOCKED | Internal directions rendered/tested; third comparison website still needs page-level inspection; two external HTML outputs missing; operator selection pending. |
| VIS-01 Visual / imagery | IN_PROGRESS | Original illustrative CSS art used in concepts; no client or licensed photography verified; final art direction pending. |
| INT-01 Interaction | PASS for concepts only | Matcher behavior and anchor/FAQ interactions checked; not final site. |
| RESP-01 Responsive | PASS for concepts only | 3 directions rendered at 390/768/1440 with no overflow. |
| MOTION-01 Motion | PASS for concepts | Reduced-motion behavior detected; restrained motion by design. |
| BUILD-01 Implementation | NOT_STARTED | No target site implementation. |
| QA-01 Quality | NOT_STARTED for final site | Prototype evidence exists only. |
| PREVIEW-01 Operator review | NOT_STARTED | One consolidated near-final review pending. |
| RELEASE-01 Handover / release | NOT_STARTED | No release authorization; demo remains internal only. |

## 10. Decisions and next actions
**Decisions:** `studio_development`; treat all business data/personas as synthetic; no invented contact/address/hours/schedules/stocks/testimonials; no backend/live stock/checkout/booking; Indonesian primary copy; keep exploration and ADES docs out of target website code tree; use `ades/initial-site` work branch; no publish/deploy/DNS/spending/outreach without explicit approval.

**Blockers / next work:**
1. Run the manual Claude + Gemini prompts and attach one HTML output from each (only unavoidable operator action because direct external model invocation is not available in this session).
2. Lead to inspect a third independent reference at page level (Before Plant or Ibad Garden) before claiming the three-reference requirement PASS.
3. Lead to render/test both external HTMLs with the same shared rubric; compare to A/B/C, complete synthesis and present curated choices with preview/trade-offs/recommendation for operator direction selection.
4. After selection, build target site on `ades/initial-site`, execute V0 → independent review → meaningful V1 correction → re-verification, then internal browser QA.
5. Request one consolidated operator review only after near-final polish and internal QA. `lanjut` is not approval.
6. G5 handover only; public release stays NOT_AUTHORIZED until explicit approval.