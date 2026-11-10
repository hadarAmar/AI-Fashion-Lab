# AI Fashion Lab
### The Future of Fashion & Artificial Intelligence

**Interactive educational HTML presentation | Generative Artificial Intelligence**  
**Lecturer:** Dr. Yoram Segal · **Institution:** Bar-Ilan University  
**Submitted by:** **Hadar Amar & Efrat Reznik** 

**[Explore the live presentation](https://hadarAmar.github.io/AI-Fashion-Lab/)** · [Project requirements](PRD.md) · [Development evidence](prompts/development-log.md)

![AI Fashion Lab opening slide](screenshots/desktop-slide1.png)

## 1. Project idea

**AI Fashion Lab** explores how artificial intelligence affects fashion: creative ideation, personalized styling, virtual try-on, sustainability and the role of human designers. Rather than presenting information only through static slides, the project uses a ten-slide interactive website to connect explanations with hands-on demonstrations.

**Guiding question:** *How can AI-related technologies support fashion creativity while keeping human judgment central?*

The experience is **educational**, not a commercial styling service. The live 3D garment is a procedural model and the recommendation engine is a transparent, rule-based simulation—not a trained generative AI system.

## 2. What visitors can do

| Experience | Slides | What it demonstrates |
|---|---|---|
| Explore AI applications in fashion | 1–5 | Generative concepts, authorship, personalization and virtual try-on |
| Customize a digital garment | 6 | Interactive **Three.js** rendering with selectable color, fabric finish and silhouette |
| Calculate a fashion recommendation | 7 | Rule-based scoring implemented in **Python**, with transparent explanations |
| Reflect on wider consequences | 8–9 | Sustainability, cultural representation and human responsibility |
| View a personalized fashion passport | 10 | How selections and the latest successful recommendation connect across slides |

### Three.js garment studio — Slide 6

Visitors can select a silhouette, change colors and fabric appearance, and rotate a digital garment. The model updates in response to the selected controls.

![3D garment customization — Slide 6](screenshots/desktop-slide6.png)

### Recommendation engine — Slide 7

The source algorithm in [`python/recommender.py`](python/recommender.py) evaluates style, occasion, budget and the selected garment features against a small illustrative catalog. It uses the following maximum points:

| Factor | Points |
|---|---:|
| Style compatibility | 35 |
| Occasion and silhouette | 30 |
| Color and fabric | 20 |
| Budget alignment | 15 |
| **Total** | **100** |

Scores are **illustrative compatibility scores**, not measured fit, real product availability or statistically validated predictions. An [earlier Slide 7 screenshot](screenshots/desktop-slide7.png) is retained as development evidence; use the [live presentation](https://hadarAmar.github.io/AI-Fashion-Lab/#slide-7) for the current behavior.

### Digital fashion passport — Slide 10

The passport presents information from the selected garment and the latest calculated recommendation. If the user has not calculated a result, the slide displays guidance instead of a fictional personalized score.

## 3. The ten slides

| # | Topic |
|---|---|
| 01 | Welcome to the Future of Fashion |
| 02 | From Sketch to Algorithm |
| 03 | Can AI Be a Fashion Designer? |
| 04 | Your Personal AI Stylist |
| 05 | The Virtual Fitting Room |
| 06 | Design Your Digital Look |
| 07 | The Smart Fashion Engine |
| 08 | Can AI Make Fashion More Sustainable? |
| 09 | The Human Behind the Algorithm |
| 10 | Your Fashion Future |

The presentation uses Hebrew explanatory content, English editorial headings and right-to-left layout support.

![Fashion editorial content — Slide 2](screenshots/desktop-slide2.png)

## 4. Design decisions

The visual direction is **luxurious, bright and clean, in the style of a fashion magazine**. It uses ivory backgrounds, champagne-gold and muted lilac accents, fashion imagery, elegant typography and varied editorial layouts.

The central interaction was intentionally placed in Slides 6, 7 and 10 so visitors can **design → evaluate → review** rather than only read about technical concepts. The design and functionality were refined through feedback and testing; supporting evidence appears in the [development log](prompts/development-log.md).

This is a pair submission by **Hadar Amar and Efrat Reznik**. The preserved development record identifies the source and attribution of available prompts and changes; it does not assume both students performed every recorded action. Individual task allocation has not been documented and is not invented here.

## 5. Technology and project structure

| Technology / file | Purpose |
|---|---|
| `index.html` | Ten-slide presentation |
| `css/style.css` | Fashion-editorial design and responsive styling |
| `js/slider.js`, `js/app.js` | Navigation and interactive controls |
| `js/three-studio.js`, `vendor/` | Three.js garment rendering |
| `python/recommender.py` | Reference Python rule-based scoring algorithm |
| `server.py` | Local HTTP server that executes native Python |
| `js/python-engine.js` | Runtime selection and results UI |
| `js/static-recommender.js` | JavaScript fallback for static hosting |
| `js/passport.js` | Connected personalized look passport |
| `tests/` | Python recommendation tests |
| `screenshots/` | Screenshots of selected versions |
| `PRD.md` | Requirements, design choices and documented changes |
| `prompts/development-log.md` | Prompt-related evidence and development narrative |

## 6. How to run

### Public demonstration — no installation

Open **https://hadarAmar.github.io/AI-Fashion-Lab/**. Navigate to Slide 6, make garment selections, continue to Slide 7 for a recommendation, and open Slide 10 to review the result.

**Important runtime distinction:** GitHub Pages is a static host; it **cannot run the local Python server**. The site attempts to load Python in the browser through Pyodide. If initialization fails, a **JavaScript fallback** uses equivalent scoring rules. A successful public recommendation **does not necessarily mean Python executed**.

### Demonstrate actual Python locally

From the repository folder, with Python 3 installed:

```bash
python3 server.py
```

Open **http://localhost:8000/** and test Slide 7. In this mode, the local server executes the Python implementation in `python/recommender.py`.

### Run tests

```bash
python3 -m unittest discover -s tests -v
```

These tests check selected algorithm behaviors. They are **not** end-to-end visual, mobile, accessibility or cross-browser tests.

## 7. Development methodology and evidence

The work evolved through **planning → implementation → review → correction → testing → publication**:

1. Created the original PRD and a first functional HTML presentation.
2. Refined the visual composition, imagery and content hierarchy.
3. Added a Three.js garment studio and an illustrative virtual-fitting sequence.
4. Implemented the Python recommendation algorithm and addressed Pyodide initialization failures with a functioning native Python route.
5. Corrected the connection between Slide 7's result and Slide 10's passport.
6. Published the website through GitHub Pages and documented the static-hosting limitation.

**Evidence:** [Development and prompt log](prompts/development-log.md) · [Original local commits](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history) · [Published branch history](https://github.com/hadarAmar/AI-Fashion-Lab/commits/main).

The original local commits were **pushed later to a separate branch**. This does not imply each original development commit was independently pushed to GitHub when created. The complete original Antigravity transcript is unavailable, and the development log distinguishes source-backed quotations from summaries.

## 8. Evaluation and limitations

**Implemented features:** Ten connected slides, JavaScript navigation, user-controlled Three.js visualization, Python source and local execution, a public recommendation fallback, and a digital passport based on the latest successful result.

**Known limitations:** The 3D garment does not simulate physical fabric accurately; the virtual-fitting visuals do not measure a body; recommendation scores are deterministic and not independently validated; a public session may execute JavaScript instead of Python; some retained screenshots show earlier iterations; and original agent conversations are incomplete. Any illustrative statistics in the presentation must be understood as examples rather than measured research results.

**Future directions:** Improve the Pyodide runtime, validate mobile and accessibility behavior, expand the styling catalog, gather usability feedback and review third-party imagery attribution.

## 9. Project documentation

- [Product Requirements Document](PRD.md)
- [Prompt History & Development Evidence](prompts/development-log.md)
- [Original Git Development History](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history)
- [Python Implementation](python/recommender.py)
- [Python Tests](tests/test_recommender.py)
- [Screenshot Archive](screenshots/)
- [Mobile presentation screenshot](screenshots/mobile-slide1-new.png)

## 10. Final reflection

The project demonstrates how AI-assisted development can speed up the creation of an interactive product, while design choices, testing, feedback and corrections remain essential. Its most important lesson is the difference between **generating an initial result** and **taking responsibility for a finished, clearly explained experience**.

---

**Submitted by:** Hadar Amar & Efrat Reznik  
**Interactive project:** https://hadarAmar.github.io/AI-Fashion-Lab/
