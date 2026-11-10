# Product Requirements Document (PRD)
## AI Fashion Lab — The Future of Fashion & Artificial Intelligence

**Course:** Generative Artificial Intelligence · **Lecturer:** Dr. Yoram Segal  
**Institution:** Bar-Ilan University  
**Submitted by:** **Hadar Amar and Efrat Reznik**   
**Document:** Final consolidated PRD — November 2026  
**Project status:** Implemented and publicly published  
**Original PRD:** November 3, 2026; preserved in [Git history](https://github.com/hadarAmar/AI-Fashion-Lab/commit/ebdac94)

**[Live project](https://hadarAmar.github.io/AI-Fashion-Lab/)** · **[Repository](https://github.com/hadarAmar/AI-Fashion-Lab)**

> **Document scope:** This is a consolidated record of the initial product requirements, implemented functionality and differences discovered during development. It does not retroactively present later technical changes as part of the original plan. The first PRD remains available in the original Git commit.

## 1. Product concept

**AI Fashion Lab** is a ten-slide interactive educational website about the influence of artificial intelligence on the fashion industry. The experience connects short explanatory content with an interactive Three.js fashion studio, a Python rule-based recommendation engine and a personalized digital fashion passport.

**Guiding question:** How can AI-related technologies support creativity in fashion while preserving human decision-making?

**Educational boundary:** The presentation discusses real applications of generative AI, but its own garment visualization is procedural Three.js geometry and its recommendation system is a deterministic algorithm—not an independently trained fashion model.

## 2. Users, goals and scope

### Intended audience

- Course lecturer and academic evaluators reviewing the technical requirements and development method.
- Students learning about AI, fashion and interactive web technology.
- Visitors interested in fashion design and digital experiences.

### Product goals

1. Explain AI-related concepts in fashion through concise, accessible content.
2. Include working JavaScript interaction and navigation.
3. Let visitors manipulate an animated 3D garment using Three.js.
4. Demonstrate a meaningful Python program that processes inputs and produces recommendations.
5. Connect actions across several slides instead of delivering independent demonstrations.
6. Present sustainability, creative authorship, copyright and representation with critical nuance.
7. Document AI-assisted planning, evaluation, correction and version history.

### Non-goals

- Commercial shopping or real-time product recommendations.
- Accurate physical garment sizing or fabric simulation.
- A trained model that learns user preferences.
- Research-validated fit or compatibility percentages.

## 3. Course requirements and implementation

| Requirement | Intended outcome | Implementation/evidence |
|---|---|---|
| Approx. ten HTML slides | Educational, navigable experience | `index.html` includes ten slides |
| JavaScript | User interactions and navigation | `js/slider.js`, `js/app.js` |
| Python | Meaningful calculation | `python/recommender.py`; local `server.py` |
| Animated 3D object | Interactive three-dimensional experience | `js/three-studio.js` with Three.js |
| Student-directed revisions | Design and functionality changes after review | `prompts/development-log.md`, Git history |
| PRD | Written planning and requirements | This document; original PRD in first commit |
| README with screenshots | Explain what the project does and how to run it | `README.md` |
| Prompt/conversation documentation | Evidence of iterative AI-assisted work | Source-grounded partial log in `prompts/development-log.md` |
| Multiple development milestones | Preserve progression | Local Git commits in `development-history`, plus later main-branch updates |

## 4. Visual design and content principles

**Design direction:** luxurious, bright, clean, and inspired by a fashion editorial magazine.

- **Palette:** Ivory `#FDFBF7`, warm alabaster `#F7F4ED`, champagne gold `#C5A059`, soft lilac `#D8CFF2`, near-black `#141414`.
- **Typography:** Elegant English editorial headlines with readable Hebrew explanatory text.
- **Layouts:** Varied magazine-like compositions, imagery, visible hierarchy and sufficient spacing.
- **Languages:** English headings; Hebrew narrative and most interface text. The layout accounts for right-to-left text and mixed English/numeric content.
- **Interaction:** Keep navigation and choices understandable, and tie interactive features to the teaching objective.

**Design decision:** The user should experience a sequence of **explore → customize → evaluate → reflect**, rather than a purely static set of slides.

## 5. Slide-by-slide specification

| Slide | Name | Educational purpose | Main behavior |
|---|---|---|---|
| 01 | Welcome to the Future of Fashion | Introduce AI, fashion and human creativity | Editorial cover, navigation |
| 02 | From Sketch to Algorithm | Explain prompts, image generation, diffusion and guided generation | Visual process overview |
| 03 | Can AI Be a Fashion Designer? | Explore authorship, creativity and copyright | Editorial debate presentation |
| 04 | Your Personal AI Stylist | Discuss personalization | Illustrative stylist profile and example score |
| 05 | The Virtual Fitting Room | Explain virtual try-on and its limits | Illustrative VTON stages |
| 06 | Design Your Digital Look | Demonstrate direct manipulation in 3D | Three.js color, fabric and silhouette controls; rotation |
| 07 | The Smart Fashion Engine | Demonstrate rule-based computation | User inputs, computed recommendation and score breakdown |
| 08 | Can AI Make Fashion More Sustainable? | Discuss demand planning, materials and sustainability | Educational comparison |
| 09 | The Human Behind the Algorithm | Emphasize bias, craft and human responsibility | Reflection and visual examples |
| 10 | Your Fashion Future | Connect earlier selections into a result | Dynamic digital fashion passport and print/restart controls |

### 5.1 Slide 6 — Three.js studio

**Inputs:** Silhouette, palette color and visual fabric finish.  
**Behavior:** Update a procedurally rendered three-dimensional garment; allow interactive rotation.  
**State:** Make chosen garment characteristics available to the recommendation flow.  
**Acceptance condition:** Changing controls visibly affects the model without replacing the entire slide with a static image.  
**Limit:** This is a visualization, not a simulation of real-world drape or accurate fit.

### 5.2 Slide 7 — recommendation engine

**Inputs:** Style, occasion, budget and selections from the garment studio.  
**Reference implementation:** `python/recommender.py`.  
**Output:** Recommended item, compatibility score and reasons/score components.

| Scoring factor | Maximum score |
|---|---:|
| Style | 35 |
| Occasion and silhouette | 30 |
| Color and fabric | 20 |
| Budget | 15 |
| **Total** | **100** |

**Acceptance condition:** Distinct user preferences should affect the recommendation or score; displayed breakdown components must add up to the displayed total.  
**Limit:** The algorithm applies predefined rules to an illustrative catalog. It does not learn from data and its scores are not probabilities of a successful purchase.

### 5.3 Slide 10 — digital fashion passport

**Input:** Latest successful recommendation and garment selections.  
**Behavior:** Display the selected look, relevant preferences and calculated score; offer print and restart actions.  
**Empty state:** Guide users back to the recommendation stage if no valid result exists.  
**Acceptance condition:** Recalculating on Slide 7 should update the result shown in Slide 10.  
**Limit:** The passport represents a simulated styling result, not a certified measurement.

## 6. Technical architecture

| Layer | Implementation | Key files |
|---|---|---|
| Presentation | HTML5 | `index.html` |
| Styling and responsiveness | CSS3 | `css/style.css` |
| Navigation and state | JavaScript | `js/slider.js`, `js/app.js` |
| 3D | Three.js | `js/three-studio.js`, `vendor/` |
| Reference recommendation logic | Python 3 | `python/recommender.py` |
| Local Python runtime | HTTP server | `server.py` |
| Browser runtime management | Pyodide attempt | `js/python-engine.js` |
| Static-site resilience | JavaScript fallback | `js/static-recommender.js` |
| Final result view | JavaScript | `js/passport.js` |
| Tests | Python unittest | `tests/test_recommender.py` |
| Publishing | GitHub Pages | Repository `main` branch |

### 6.1 Original architecture versus final deployment

**Original proposal:** Run Python inside the browser using Pyodide.  
**Issue encountered:** Browser Python initialization failed in the development environment.  
**Revised implementation:** A native Python execution path through `server.py`; a static GitHub Pages version that tries Pyodide and falls back to **JavaScript** when unavailable.  
**Disclosure:** GitHub Pages cannot execute the local Python server. A public recommendation that succeeds through fallback does **not** establish that Python executed.

This is a documented departure from the original specification, not evidence that the original PRD was incorrect to propose browser Python.

## 7. Primary user journey

1. Enter the presentation and review the conceptual material (Slides 1–5).
2. Customize the 3D garment (Slide 6).
3. Select style, occasion and budget; calculate a recommendation (Slide 7).
4. Review sustainability and human responsibility (Slides 8–9).
5. Open the personalized passport for the latest calculation (Slide 10).

**Shared state:** Garment properties, user preferences and the latest successful recommendation must remain consistent when navigating between relevant slides.

## 8. Verification and acceptance

| Criterion | Evidence/verification approach | Status of evidence |
|---|---|---|
| Ten slides and navigation | Review `index.html` and navigation scripts | Source available |
| 3D interaction | Inspect Slide 6 and `js/three-studio.js` | Implemented; visual behavior should be tested in-browser |
| Python recommendation | Run `python3 server.py`, then Slide 7 | Local Python route implemented |
| Automated engine tests | `python3 -m unittest discover -s tests -v` | Tests included; not full browser coverage |
| Cross-slide result | Calculate on Slide 7, view Slide 10 | Integration implemented |
| Public presentation | Open GitHub Pages link | Published |
| Browser Python guarantee | Inspect active runtime after loading Slide 7 | **Not guaranteed**; JS fallback may run |
| Documentation | README, PRD, Git and prompt log | Present; original agent transcript incomplete |

**Local run:**

```bash
python3 server.py
```

Then open **http://localhost:8000/**.

**Tests:**

```bash
python3 -m unittest discover -s tests -v
```

## 9. AI-assisted development and traceability

The project progressed through a PRD, an initial presentation, visual refinement, a Three.js milestone, Python integration, passport synchronization and static-site publication.

**Original local Git milestone commits (November 3, 2026):**

| Commit | Development stage |
|---|---|
| [`ebdac94`](https://github.com/hadarAmar/AI-Fashion-Lab/commit/ebdac94) | Original PRD |
| [`b466279`](https://github.com/hadarAmar/AI-Fashion-Lab/commit/b466279) | First working presentation |
| [`2dbe336`](https://github.com/hadarAmar/AI-Fashion-Lab/commit/2dbe336) | Visual refinements |
| [`8fd810a`](https://github.com/hadarAmar/AI-Fashion-Lab/commit/8fd810a) | Three.js garment studio |
| [`018a4c9`](https://github.com/hadarAmar/AI-Fashion-Lab/commit/018a4c9) | Preparation for public deployment |

The original local commits were uploaded later to the separate [development-history branch](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history). The [main branch](https://github.com/hadarAmar/AI-Fashion-Lab/commits/main) records public uploads and later updates. This must not be mistaken for five separate original GitHub pushes at the time the local commits were made.

**Prompt evidence:** [Development log](prompts/development-log.md). It distinguishes recoverable messages, paraphrased requirements and limitations of the surviving conversation record.

**Pair attribution:** This final assignment is submitted by **Hadar Amar and Efrat Reznik**. The available record does not establish a complete breakdown of individual responsibilities. No undocumented contribution is assigned to either student.

## 10. Risks, limitations and future opportunities

- **Runtime risk:** Pyodide may fail to load; the public fallback is JavaScript. Use the local server to demonstrate actual Python.
- **Research validity:** Example recommendations, scores and visual overlays are not empirical measurements.
- **3D realism:** Garment geometry does not reproduce real textile physics or sizing.
- **Accessibility and device variation:** Additional manual and automated browser testing would strengthen verification.
- **Documentation completeness:** The entire original Antigravity transcript is unavailable, although Git commits, source files and some feedback statements remain.
- **Source provenance:** External imagery and technical claims require attribution and contextual verification for wider distribution.

**Future improvements:** More reliable browser Python; expanded recommendation catalog; richer 3D modeling; user testing; accessibility review; image provenance documentation.

## 11. Deliverables

- [Public interactive website](https://hadarAmar.github.io/AI-Fashion-Lab/)
- [`index.html`](index.html) and supporting JavaScript/CSS
- [Python recommendation engine](python/recommender.py)
- [Native Python server](server.py)
- [Automated tests](tests/test_recommender.py)
- [README with screenshots](README.md)
- [Prompt and development evidence](prompts/development-log.md)
- [Screenshot archive](screenshots/)
- [Original PRD commit](https://github.com/hadarAmar/AI-Fashion-Lab/commit/ebdac94)

## 12. Final product assessment

AI Fashion Lab delivers an educational, interactive fashion experience combining content, 3D visualization and transparent computation. The development illustrates that AI-assisted production depends on defining requirements, reviewing outputs, finding faults and documenting real implementation changes. The final project should be evaluated as an **interactive educational prototype**, with its Python execution routes and simulation limitations clearly distinguished.

---

**Submitted by:** Hadar Amar & Efrat Reznik  
**Repository:** https://github.com/hadarAmar/AI-Fashion-Lab
