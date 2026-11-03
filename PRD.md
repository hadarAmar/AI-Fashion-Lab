# Product Requirements Document (PRD)

**Project Name:** AI Fashion Lab – The Future of Fashion and Artificial Intelligence  
**Project Type:** Interactive Educational Web Presentation & Simulation  
**Course:** Generative Artificial Intelligence (Academic Project)  
**Document Version:** 1.0.0  
**Status:** Approved for Implementation  
**Target Environment:** Modern Web Browsers (Chrome, Safari, Firefox, Edge)  

---

## 1. Executive Summary & Concept

### 1.1 Overview
**AI Fashion Lab** is an interactive, browser-based educational editorial presentation designed to showcase how Artificial Intelligence (AI) and Generative AI are revolutionizing the global fashion industry across design, styling, virtual fitting, supply chain sustainability, and ethical craftsmanship.

Bridging theoretical academic concepts with tactile interaction, the project combines an editorial luxury magazine aesthetic with an interactive **Three.js 3D digital garment viewer** and an in-browser **Python (Pyodide) transparent recommendation engine**.

### 1.2 The Core Premise
The project contrasts:
1. **Real-world cutting-edge AI technologies** (Diffusion models, Multimodal LLMs, Neural Radiance Fields / 3D Gaussian Splatting, Virtual Try-On networks like VTON).
2. **A transparent, student-built rule-based recommendation simulation engine** written in pure Python and executed directly in the browser via Pyodide, demonstrating algorithm transparency, scoring mechanisms, and user profile matching.

---

## 2. Project Goals & Target Audience

### 2.1 Project Objectives
- **Academic Rigor:** Clearly articulate how generative models (GANs, Diffusion, Transformers) apply to real-world fashion pipelines while critically analyzing sustainability, copyright, and ethical implications.
- **Visual Distinction:** Deliver a high-end luxury editorial experience reminiscent of *Vogue*, *Harper's Bazaar*, or high-fashion lookbooks.
- **Dual-Engine Interactivity:**
  - An interactive **3D garment customizer** using Three.js (color, silhouette, rotation, lighting).
  - An interactive **Python fashion recommendation engine** powered by Pyodide that runs transparent scoring algorithms on client-chosen parameters.
- **RTL & BiDi Excellence:** Seamlessly integrate English slide titles and technical terms with rich, natural Hebrew educational text with zero layout disruption.
- **Transparent Simulation:** Explicitly separate industry AI capabilities from the project's educational simulation engine.

### 2.2 Target Audience
- **Course Evaluators & Professors:** Assessing technical execution, architectural clarity, academic depth, and code quality.
- **Students & Peers:** Looking for an engaging, intuitive, and interactive demonstration of AI concepts.
- **Fashion & Tech Enthusiasts:** Interested in the intersection of generative algorithms and creative industries.

---

## 3. Visual Direction & Aesthetic Guidelines

### 3.1 Design Philosophy: Luxury Fashion Editorial
The user experience must feel like a digital luxury fashion magazine rather than a generic slide deck. Layouts prioritize generous negative space (whitespace), refined typography, high-contrast imagery, smooth transitions, and subtle micro-interactions.

### 3.2 Color Palette
| Token | Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-ivory` | Cream / Ivory Base | `#FDFBF7` | Primary background across all slides |
| `--bg-secondary` | Warm Silk Alabaster | `#F6F3EC` | Card backgrounds, side panels, and elevated surfaces |
| `--accent-champagne` | Champagne Gold | `#C5A059` | Primary accent, active states, borders, highlight badges |
| `--accent-gold-light` | Pale Champagne Glow | `#EAD8B1` | Subtle glows, active selection outlines, hover states |
| `--accent-lilac` | Soft Lilac | `#D8CFF2` | Secondary accent, interactive tags, category pills |
| `--accent-lilac-subtle`| Whispering Lavender | `#F2EEFA` | Subtle button fills, info badges |
| `--text-primary` | Obsidian Black | `#141414` | Primary titles, body text, high-contrast reading |
| `--text-muted` | Muted Charcoal | `#63625E` | Subtitles, metadata, captions, footnotes |
| `--border-subtle` | Fine Editorial Border | `rgba(20, 20, 20, 0.08)` | Dividers, card borders, minimal frames |

### 3.3 Typography
- **Slide Headings & Hero Titles (Latin):** High-fashion editorial display serif:
  - Primary: `Cormorant Garamond` or `Playfair Display` (font-weight: 400, 600; uppercase tracking).
- **Hebrew Body & Narrative Content:** Elegant, highly readable modern Hebrew typography:
  - Primary: `Assistant` or `Heebo` with fallback to system sans-serif.
- **Code & Python Engine Displays:** Clean monospace:
  - Primary: `JetBrains Mono` or `Fira Code`.

### 3.4 Motion & Layout System
- **Layout:** Minimalist grid layouts, asymmetric editorial placements, generous margin padding (`clamp(2rem, 5vw, 6rem)`).
- **Transitions:** Soft fade and subtle horizontal slide (`0.6s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Interactive Micro-animations:** Delicate hover lifts, champagne border glows, smooth 3D orbit controls.

---

## 4. Language, BiDi, and RTL Architecture

### 4.1 Hybrid Language Model
- **Slide Titles & Badges:** English (e.g., *WELCOME TO THE FUTURE OF FASHION*, *THE VIRTUAL FITTING ROOM*) to maintain international fashion editorial styling.
- **Narrative, Explanations & UI Labels:** High-register Hebrew (עברית עשירה ומדויקת) tailored for academic presentation.
- **Code Blocks & Parameters:** English variables and comments with bilingual explanatory tooltips.

### 4.2 BiDi / RTL Technical Rules
- The document root or primary content container specifies `dir="rtl"` and `lang="he"`.
- English titles and code snippets must be wrapped in explicit BiDi containers (`dir="ltr"` or `<bdi>` tags) to prevent punctuation flips and parentheses errors.
- Navigation controls (Next/Previous) must correctly correspond to RTL conventions (Right = Forward / Next, Left = Back / Previous, or intuitive directional markers).
- Proper flexbox/grid logical properties (`margin-inline-start`, `padding-inline-end`) ensure bullet points, icons, and badges render without alignment bugs.

---

## 5. Slide-by-Slide Content & Interactive Specification

The presentation is structured into **10 distinct slides**:

```
[01: Welcome] ──> [02: Sketch to Algo] ──> [03: Can AI Design?] ──> [04: AI Stylist]
      │
      ▼
[05: Virtual Fitting] ──> [06: 3D Garment Customizer (Interactive)]
      │
      ▼
[07: Smart Fashion Engine (Python/Pyodide)] ──> [08: Sustainable Fashion]
      │
      ▼
[09: Human Behind Algo] ──> [10: Your Fashion Future (Summary & Wrap-up)]
```

---

### Slide 1: Welcome to the Future of Fashion
* **English Title:** *WELCOME TO THE FUTURE OF FASHION*
* **Hebrew Subtitle:** מפגש הפסגה בין קוטור עילי, בינה מלאכותית יוצרת וטכנולוגיית העתיד
* **Editorial Content (Hebrew):**
  - מבוא לחוויית ה-AI Fashion Lab: כיצד אלגוריתמים הופכים לשותפים ליצירה (Co-creators) בעולם האופנה.
  - סקירת המהפכה: מתחזיות טרנדים מבוססות Big Data ועד תצוגות אופנה שנוצרו במלואן על גבי מחשב.
  - הכרזה על חלקי המצגת: ידע תיאורטי, סטודיו תלת-ממדי אינטראקטיבי, ומנוע המלצות מבוסס פייתון.
* **Visual / UI Elements:**
  - Hero editorial layout with large high-fashion typography.
  - Subtle animated floating elements or ambient particle canvas.
  - "Start Experience" / "התחלת הסיור" primary call to action.

---

### Slide 2: From Sketch to Algorithm
* **English Title:** *FROM SKETCH TO ALGORITHM*
* **Hebrew Subtitle:** האבולוציה של הרישום: ממחברת המעצב למודלי דיפוזיה
* **Editorial Content (Hebrew):**
  - כיצד מעצבים עוברים מסקיצות ידניות להנחיות טקסטואליות (Prompts) ומודלי תמונה-לתמונה (Image-to-Image).
  - סקירת מודלים יוצרים מובילים: Stable Diffusion, Midjourney, Flux, ControlNet המאפשר שליטה מדויקת בקפלי בד וסילואטים.
  - מעגל הפיתוח: קיצור זמני יצירת אב-טיפוס (Prototyping) מחודשים לשעות ספורות.
* **Visual / UI Elements:**
  - Side-by-side editorial comparison: סקיצת עיפרון קלאסית לעומת פלט פוטוריאליסטי שנוצר על ידי AI.
  - Interactive "Prompt Breakdown" pill tags showcasing prompt engineering for fabric textures (e.g., *duchess satin*, *structural pleats*, *iridescent organza*).

---

### Slide 3: Can AI Be a Fashion Designer?
* **English Title:** *CAN AI BE A FASHION DESIGNER?*
* **Hebrew Subtitle:** יצירתיות מלאכותית מול מגע יד אנושי: גבולות היצירה והמשפט
* **Editorial Content (Hebrew):**
  - הדיון הפילוסופי והמקצועי: האם AI באמת "מעצב" או שמא הוא מבצע אינטרפולציה מורכבת של היסטוריית האופנה?
  - שאלת זכויות היוצרים (Copyright) וקניין רוחני: של מי הדגם – של מהנדס הפרומפט, של המפתח, או של המעצבים ששימשו לאימון המודל?
  - מקרי בוחן בעולם האמיתי: שבוע האופנה הדיגיטלי (AI Fashion Week ב-NY), שיתופי פעולה בין בתי אופנה (כגון Moncler, Zegna) למעצבי AI.
* **Visual / UI Elements:**
  - Debate interactive toggle: "הטיעון ליצירתיות אלגוריתמית" מול "מגבלות האינטואיציה והרגש האנושי".
  - Editorial quote cards highlighting industry perspectives.

---

### Slide 4: Your Personal AI Stylist
* **English Title:** *YOUR PERSONAL AI STYLIST*
* **Hebrew Subtitle:** מסטייליסט אישי לעילית – לבינה מלאכותית מותאמת אישית לכל אדם
* **Editorial Content (Hebrew):**
  - כיצד מודלי שפה רב-מודאליים (Multimodal LLMs) משלבים ראייה ממוחשבת עם הבנת שפה כדי לנתח מלתחה קיימת.
  - ניתוח מבנה גוף, תורת הצבעים (Seasonal Color Analysis), והתאמת לוקים לפי מזג אוויר, אירוע ומצב רוח.
  - הפיכת חוויית הקניות מחיפוש פסיבי במנועי חיפוש לשיחה דיאלוגית אישית.
* **Visual / UI Elements:**
  - Simulation mockup of a luxury AI Stylist chat card analyzing an outfit palette and giving sophisticated recommendations.

---

### Slide 5: The Virtual Fitting Room
* **English Title:** *THE VIRTUAL FITTING ROOM*
* **Hebrew Subtitle:** חדר ההלבשה הווירטואלי: פיזיקה של בדים, סריקות תלת-ממד וטכנולוגיית VTON
* **Editorial Content (Hebrew):**
  - הטכנולוגיה מאחורי הניסוי הווירטואלי: Virtual Try-On Networks (VTON), Neural Radiance Fields (NeRFs), 3D Gaussian Splatting.
  - הדמיית פיזיקה של טקסטיל: הדמיית נפילה של משי, קשיחות של עור ותנועת צמר בזמן תנועה אמיתית.
  - הפחתת אחוזי החזרות מוצרים במסחר אלקטרוני: יתרון כלכלי וסביבתי עצום לרשתות האופנה.
* **Visual / UI Elements:**
  - Visual diagram explaining the 3-stage VTON pipeline (Body Mesh Extraction -> Garment Warping -> Texture & Lighting Blending).

---

### Slide 6: Design Your Digital Look (Interactive 3D Studio)
* **English Title:** *DESIGN YOUR DIGITAL LOOK*
* **Hebrew Subtitle:** סטודיו דיגיטלי אינטראקטיבי: התאמה אישית של בגד בתלת-ממד
* **Interactive Core:** **Three.js WebGL 3D Garment Customizer**
* **Functionality:**
  - Real-time 3D rendering of a luxury digital garment (haute-couture mannequin/dress silhouette with dynamic lighting).
  - **Color Palette Picker:** Champagne Gold, Soft Lilac, Obsidian Noir, Pure Ivory, Midnight Emerald.
  - **Fabric / Material Finish:** Silk Sheen (specular), Matte Cotton (roughness), Velvet/Organza effect.
  - **Silhouettes / Cuts:** Minimalist Shift, Sculptural Avant-Garde, Flowing Evening Drape.
  - **Interactive Controls:** Smooth rotation (OrbitControls), zoom, lighting intensity toggle.
* **Connection to Simulation:** Selected parameters (silhouette, color, style mood) are saved to the user's active session state for Slide 7.

---

### Slide 7: The Smart Fashion Engine (Python / Pyodide)
* **English Title:** *THE SMART FASHION ENGINE*
* **Hebrew Subtitle:** מנוע ההמלצות: הרצת אלגוריתם פייתון שקוף בדפדפן
* **Interactive Core:** **In-Browser Python via Pyodide**
* **Functionality:**
  - **User Inputs:**
    - Fashion Style (Minimalist Chic, Avant-Garde Luxury, Streetwear Couture, Romantic Bohemian).
    - Color Preference (matches chosen 3D look or custom selection).
    - Budget Tier (Accessible Luxury, Premium Couture, High Fashion Collector).
    - Occasion / Vibe (Gala Event, Creative Office, Runway Premiere).
  - **Python Execution:**
    - Runs genuine Python code loaded in WebAssembly (Pyodide).
    - Executes a deterministic multi-attribute scoring matrix evaluating compatibility, palette harmony, and budget matching.
  - **Educational Code Inspector:**
    - View the actual Python source code executing in real time.
    - Inspect the transparent score breakdown (e.g., `Style Match: +35pts`, `Color Harmony: +25pts`, `Budget Alignment: +20pts`).
    - Explicit disclaimer box: *"Educational simulation – rule-based scoring demonstrates algorithmic decision transparency without black-box opacity."*

---

### Slide 8: Can AI Make Fashion More Sustainable?
* **English Title:** *CAN AI MAKE FASHION MORE SUSTAINABLE?*
* **Hebrew Subtitle:** קיימות חכמה: צמצום פסולת, חיזוי ביקושים וייצור לפי דרישה
* **Editorial Content (Hebrew):**
  - תעשיית האופנה המהירה כאחד המזהמים הגדולים בעולם (עודפי ייצור והטמנת בדים).
  - כיצד בינה מלאכותית מסייעת בחיזוי ביקושים מדויק למניעת ייצור יתר (Zero Overproduction).
  - חיתוך גזרות ממוחשב (Zero-waste pattern engineering) החוסך עד 30% משאריות בד.
  - יצירת דגימות דיגיטליות (Digital sampling) במקום משלוח מאות דוגמאות פיזיות מעבר לים.
* **Visual / UI Elements:**
  - Infographic counters / metrics: 92M tons of waste prevented, 30% fabric optimization, 65% return reduction.

---

### Slide 9: The Human Behind the Algorithm
* **English Title:** *THE HUMAN BEHIND THE ALGORITHM*
* **Hebrew Subtitle:** האדם שמאחורי האלגוריתם: אומנות מסורתית, אתיקה והטיה בנתונים
* **Editorial Content (Hebrew):**
  - שימור מלאכות יד מסורתיות (Artisanal Craftsmanship) בעידן של סינתזה דיגיטלית.
  - סוגיית ההטיות התרבותיות (Cultural & Body Bias) במאגרי התמונות המשמשים לאימון מודלים.
  - העתיד הוא סימביוטי: המעצב האנושי כמוביל חזון, ביקורת ואמפתיה, והאלגוריתם כמנוע מאיץ ומפרה.
* **Visual / UI Elements:**
  - Editorial dual-portrait layout: ידי חייט מיומנות תופרות תפר מסורתי לצד רשת נוירונים דיגיטלית זוהרת.

---

### Slide 10: Your Fashion Future
* **English Title:** *YOUR FASHION FUTURE*
* **Hebrew Subtitle:** סיכום החוויה האישית: הלוק הדיגיטלי והתובנות שלך לעתיד
* **Editorial Content & Final Recap (Hebrew):**
  - הצגת "תעודת הלוק הדיגיטלי" (Digital Look Passport): סיכום הבגד שנבחר בתלת-ממד + תוצאות מנוע ה-Python.
  - מסקנות מרכזיות מהפרויקט: AI ככלי שמעצים יצירתיות, משפר שקיפות ומחבר בין טכנולוגיה לביטוי אישי.
  - אפשרות לשיתוף או הדפסה של סיכום הלוק האישי.
* **Visual / UI Elements:**
  - High-fashion summary card with badge of selected style, recommended item, 3D garment snapshot preview, and Python score.
  - Presentation restart and GitHub project link buttons.

---

## 6. Educational Scope vs. Simulation Boundary

To ensure strict academic transparency, the presentation establishes a clear demarcation:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      AI FASHION LAB ARCHITECTURE                       │
├──────────────────────────────────┬─────────────────────────────────────┤
│   REAL AI TECHNOLOGIES           │   PROJECT SIMULATION ENGINE         │
│   (Educational Discourse)        │   (Tactile In-Browser Demo)         │
├──────────────────────────────────┼─────────────────────────────────────┤
│ • Diffusion Models (Flux, SD)    │ • Pure Python 3.11 via Pyodide      │
│ • Multimodal LLMs (GPT-4V,       │ • Deterministic Multi-factor        │
│   Gemini 1.5 Pro)                │   scoring matrix                    │
│ • NeRFs & 3D Gaussian Splatting  │ • Transparent weighting rules       │
│ • VTON (Virtual Try-On Networks) │ • Real-time code execution viewer   │
│ • Computer Vision color analysis │ • Three.js WebGL procedural shaders │
│                                  │   (not generative neural mesh)      │
└──────────────────────────────────┴─────────────────────────────────────┘
```

A visible indicator badge (`[מערכת סימולציה לימודית]` / `[Educational Simulation]`) will accompany all interactive tools to prevent any ambiguity between industry deep learning models and our accessible, client-side scoring logic.

---

## 7. Technical Architecture & Tech Stack

### 7.1 Core Stack
| Layer | Technology | Role & Justification |
| :--- | :--- | :--- |
| **Markup** | Modern Semantic HTML5 | Slide sections, BiDi wrappers, accessible navigation |
| **Styles** | Modern CSS3 (Grid, Flexbox, Custom Properties) | Editorial typography, responsive design, smooth animations |
| **Presentation Logic**| Vanilla JavaScript (ES6+ Modules) | Slide routing, keyboard shortcuts, UI state management |
| **3D Rendering** | Three.js (r128+ via CDN) | Interactive 3D garment model with PBR materials and orbit controls |
| **Python Engine** | Pyodide (v0.26+ via CDN) | Full WebAssembly Python runtime executing recommendation code in browser |

### 7.2 Key Architectural Components
1. **Slide Navigator (`SlideController`):**
   - Manages active slide index (1 to 10).
   - Supports keyboard arrow keys (Left/Right), touch swipe, and bottom navigation indicator dots.
   - Smooth transition states preventing layout jumps.
2. **3D Garment Studio (`GarmentStudio3D`):**
   - WebGL renderer encapsulated within Slide 6 container.
   - Procedural or lightweight luxury mannequin/dress geometry with customizable specular/roughness shaders.
   - Orbit controls with constrained polar angles for a curated editorial frame.
   - Dynamic color and material parameter updates without canvas re-initialization.
3. **Pyodide Recommendation Manager (`FashionEngine`):**
   - Asynchronously initializes the Pyodide WebAssembly worker/runtime on demand or during slide 5 preload.
   - Passes user options (style, budget, color) into a Python script.
   - Executes transparent rule-based algorithm:
     ```python
     # Concept logic in Pyodide
     def evaluate_recommendation(style, color, budget, occasion):
         scores = {}
         for item in catalog:
             scores[item['id']] = calculate_affinity(item, style, color, budget, occasion)
         return select_top_outfit(scores)
     ```
   - Returns structured JSON to JavaScript to display live result cards and score breakdowns.

---

## 8. User Interaction Flow

```
[Slide 1: Enter Experience]
        │
        ▼
[Slides 2-5: Educational Exploration] (Interactive toggles, prompts, VTON diagram)
        │
        ▼
[Slide 6: 3D Garment Customizer] ──> User chooses silhouette, material, and champagne/ivory/noir palette
        │
        ▼ (State saved)
[Slide 7: Python Recommendation Engine] ──> User inputs budget, style persona & runs Pyodide script
        │
        ▼ (Scores computed live in Python)
[Slides 8-9: Sustainability & Ethics]
        │
        ▼
[Slide 10: Personalized Look Passport & Summary]
```

---

## 9. Deliverables, Git Workflow & Documentation

### 9.1 Required Project Artifacts
1. `PRD.md` *(This Document)* – Comprehensive specification.
2. `index.html` – Single-page multi-slide editorial application.
3. `css/` – Modular stylesheets (`variables.css`, `typography.css`, `layout.css`, `editorial.css`, `components.css`).
4. `js/` – Modular JavaScript (`main.js`, `slider.js`, `three-garment.js`, `python-engine.js`).
5. `python/` – Standalone clean `recommender.py` source script mirrored for Pyodide execution.
6. `README.md` – High-caliber documentation including:
   - Project concept and architecture overview.
   - Screenshots of all major slides and the 3D customizer.
   - Clear distinction between real GenAI concepts and the Pyodide simulation engine.
   - Complete prompt history and agentic interaction log.
   - Running instructions (local HTTP server or direct browser open).

### 9.2 Git Strategy
- Incremental, atomic commits documenting every phase of the project:
  - `docs: create comprehensive PRD for AI Fashion Lab presentation`
  - `feat: initialize editorial HTML scaffold and luxury styling system`
  - `feat: implement slide navigation system with RTL/BiDi support`
  - `feat: integrate Three.js interactive 3D garment customizer`
  - `feat: embed Pyodide in-browser Python recommendation engine`
  - `content: complete Hebrew editorial narratives and English slide titles`
  - `docs: produce professional README with screenshots and prompt logs`

---

## 10. Success Metrics & Verification Checklist

- [x] **PRD Approved:** Complete coverage of goals, audience, visual direction, slides, and tech stack.
- [ ] **Aesthetic Integrity:** High-fashion luxury editorial feel with ivory, cream, champagne, and lilac accents.
- [ ] **RTL / BiDi Robustness:** Flawless Hebrew rendering with properly aligned English titles and zero punctuation glitches.
- [ ] **Three.js Customizer:** Smooth 60fps 3D garment rendering with responsive interaction on modern viewports.
- [ ] **Pyodide Execution:** Real Python code running synchronously or asynchronously in-browser, generating visible score breakdowns.
- [ ] **Clarity of AI vs. Simulation:** Visible educational badge distinguishing real GenAI models from the rule-based simulation.
- [ ] **Responsive Design:** Seamless experience across desktop (primary) and mobile/tablet devices.
- [ ] **Documentation:** Thorough `README.md` containing prompt history, screenshots, and setup instructions.
