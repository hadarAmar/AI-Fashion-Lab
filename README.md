# AI Fashion Lab

Interactive Hebrew/English fashion editorial presentation about AI in fashion. 10 slides, JavaScript navigation, Three.js 3D garment studio, and a real Python rule-based recommendation demonstration.

## Running locally

From the repository root:

```bash
python3 server.py
```

Open `http://localhost:8000/` in Chrome. Browse to slide 6 to customize the 3D garment and slide 7 to select style, event, and budget and run the Python recommendation. This local preview uses **real native Python** through `server.py` and works without the Pyodide CDN. On a statically hosted site (e.g. GitHub Pages), the page instead attempts **in-browser Pyodide**, which still requires correct CDN loading. This is a local development fallback, not a solution for static deployment. The Three.js vendor file is local. Opening `index.html` with `file://` is also supported for basic page navigation, but an HTTP server is more reliable.

## Testing

```bash
python3 -m unittest discover -s tests -v
```

The tests validate distinct fashion recommendations, budget behavior, and invalid input handling. This is a native Python test of the same `python/recommender.py` source embedded for file URL compatibility. These tests do **not** substitute for an actual browser test of the Pyodide CDN and WebGL.

## Accuracy and scope

The fashion engine is an **educational deterministic rule-based scoring example**, not a learned AI model, and does not use actual product inventory or pricing. The virtual fitting overlays on slide 5 are **illustrations**, not real scanning or fit measurements. The 3D garment on slide 6 is a procedural visualization, not a physically accurate virtual fitting simulation.

## Files

- `index.html` – presentation markup and user controls.
- `css/style.css` – luxury editorial visual design and responsive styling.
- `js/slider.js` – slide navigation.
- `js/three-studio.js` – 3D garment, colors, materials, and selection state.
- `js/python-engine.js` – Pyodide initialization, controls, results, and embedded Python source for local file mode.
- `python/recommender.py` – authoritative Python implementation of the recommendation logic.
- `PRD.md` – initial planning and acceptance criteria.
- `screenshots/` – screenshots captured in earlier iterations.
- `tests/` – Python scoring checks.

## Remaining before academic submission

- Independently test slide 7 in Chrome **with internet access**, including visibly changing scores for at least two profiles; test both desktop and mobile layouts.
- Slide 10 is connected to the latest genuine Python recommendation and selected garment (Milestone 4 complete); validate it in the deployed site.
- Document authentic project prompt iterations in a dedicated `prompts/` folder (do not invent conversation history), with screenshots showing before/after changes.
- Confirm image licensing/attribution and accuracy of external educational claims.
- Review `PRD.md` to align any requirements that changed during implementation.
- Push Git history to an appropriate GitHub repository, follow course-specific sharing and form submission instructions.

## Troubleshooting Python startup

If Pyodide shows `init_fs_encoding` or a Python startup error, stop the existing `python3 -m http.server 8000` process with Ctrl+C, then use `python3 server.py` instead. Open http://localhost:8000/#slide-7 and confirm the badge says `מנוע Python מקומי פעיל`. This uses `python/recommender.py` natively and preserves the genuine Python requirement, but does not demonstrate in-browser Python and requires a Python server. For publishing as static GitHub Pages, resolve Pyodide CDN artifact loading separately.

## Milestone 4 — Personal Digital Look Passport

Slide 10 now reads the latest real Python recommendation from `window.aiFashionLab.recommendation` and the garment/user selections used for that calculation. It displays the recommended look, score, style, occasion, budget, color, silhouette and fabric, plus a styling note. If Python has not calculated a successful result, a clear empty state links back to Slide 7. The print button prints Slide 10. The result is explicitly described as a rule-based educational simulation, not a trained model or an actual fitting measurement.

The changes reside in `index.html`, `css/style.css`, `js/python-engine.js`, and the new `js/passport.js`.

### Check the integrated experience

1. Run `python3 server.py` in the project folder, then open `http://localhost:8000/#slide-6`.
2. Change the garment color, fabric, or silhouette.
3. Advance to Slide 7, choose a style, occasion, and budget, and confirm a calculated recommendation appears and the Python status is green.
4. Advance to Slide 10. Verify that its result (particularly score, style, color, fabric, and silhouette) matches your inputs and the Slide 7 recommendation.
5. Return to Slide 7, change a preference, and confirm Slide 10 updates accordingly.
6. Test printing and the restart button.

**Deployment limitation:** `python3 server.py` is required for reliable local Python execution on the current machine. GitHub Pages serves static files only and cannot run this server. The code attempts Pyodide for static hosting but its initialization has failed in the tested setup. Do not claim GitHub Pages supports the Python demo until Pyodide is fixed and actually tested, or use a hosting option with Python server support.

## Authentic development and academic hand-in

The `prompts/` folder has a concise reconstruction of the instructions and decisions based on the actual work in this chat, **not** a complete verbatim export or claimed CLI transcript. Add actual screenshots/exports of the prompts you sent to Antigravity, your critique and revisions, and a record of collaborative decisions; do not fabricate agent messages. You should also independently verify presentation claims and image licensing. Keep the existing `.git` folder and commits when copying this update into your original project folder. Commit the new Milestone 3 and 4 changes (including Python) before pushing to GitHub so genuine development stages are preserved.


## Passport synchronization fix (v4.2)

After the native Python or Pyodide calculation succeeds on slide 7, the actual
result is held in application state and saved to same-tab `sessionStorage`.
Slide 10 reads the same result and restores it after a page refresh. No mock
score is displayed. To test, run `python3 server.py`, visit slide 7, vary
preferences, then navigate to slide 10. Use a hard reload if an older copy
was previously cached. Changes to a selection require recalculating on slide 7.

## Public demonstration deployment (Python server on Render)

The static GitHub Pages fallback is not verified because Pyodide initialization failed in testing.
For a working public link that runs **real Python on the server**, deploy a **Web Service** on Render:

1. Commit and push this project to your GitHub repository, preserving the original development history.
2. On https://dashboard.render.com choose **New → Blueprint**, connect the repository, and apply `render.yaml`; alternatively create a **Web Service** using runtime Python, build command `python3 -m unittest discover -s tests -v`, and start command `python3 server.py`, choosing the Free tier if available.
3. Render supplies a public `https://...onrender.com` address. Open that address, navigate to Slide 7, and check the badge **מנוע Python מקומי פעיל** (this means native server Python, not Python running on the visitor's device). Test Slide 10 as well.

The web service reads Render's `PORT` variable and binds to `0.0.0.0` only in hosted mode. Locally `python3 server.py` still uses `127.0.0.1:8000`. The project uses Python's standard library and needs no pip dependencies. Free web services may sleep after inactivity and have resource limits; the first visitor can experience a startup delay.

**Course transparency:** The project demonstrates genuine Python, but this hosted mode runs Python on a remote server, *not inside the browser*. Do not describe it as in-browser Python unless the Pyodide mode has been separately tested successfully. The original PRD's Pyodide architecture is therefore a documented change.
