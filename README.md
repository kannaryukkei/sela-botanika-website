# Sela Botanika — R3 integrated prototype

A static, multi-file website prototype for a fictional indoor-plant and botanical-styling studio scenario. **Internal studio experiment only; not for release.**

## Runtime

- Python 3.10+ recommended (only the standard-library HTTP server is used).
- No Node.js build step, package manager, database, environment file, or backend is required.
- An internet connection is required for the three Unsplash-hosted image assets and the GSAP 3.12.5 CDN enhancement. The site remains readable and interactive without GSAP; remote photos require network access.

## Run locally

From the repository root:

**macOS / Linux**
```bash
python3 --version
python3 -m http.server 4173 --bind 127.0.0.1
```

**Windows PowerShell**
```powershell
py --version
py -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/ in a browser. Keep the terminal process running while viewing the site. Stop it with Ctrl+C.

If `py` is not available on Windows, install Python 3.10+ and use `python -m http.server 4173 --bind 127.0.0.1`.

## Project files

- `index.html` — semantic page structure and content.
- `assets/css/styles.css` — responsive visual system and reduced-motion CSS.
- `assets/js/main.js` — room reader, navigation, filters, local form simulation, and GSAP enhancement.
- `ADES_R3_SYNTHESIS.md` — source-based design synthesis and evidence limitations.
- `ADES_ASSET_MANIFEST.md` — image URLs, photo credits, and license notes.

## Troubleshooting

- If port 4173 is occupied, run `python3 -m http.server 4174 --bind 127.0.0.1` (or `py -m http.server 4174 --bind 127.0.0.1`) and open http://127.0.0.1:4174/.
- If images do not appear, check internet access and the browser network panel; the photos are remote Unsplash CDN assets, not local files.
- If GSAP does not load, the page content and native controls remain available; the scroll progress indicator uses a non-GSAP fallback.
- If the layout appears unstyled, confirm the server was started from the repository root so `assets/css/styles.css` and `assets/js/main.js` resolve.
- A local preview is not a public deployment. No hosting, DNS, payment, or release action is included.
