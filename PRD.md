# Product Requirements Document (PRD)
## AI Fashion Lab — The Future of Fashion & Artificial Intelligence

**Project Type:** Interactive Educational HTML Presentation  
**Course:** Generative Artificial Intelligence  
**Lecturer:** Dr. Yoram Segal  
**Student:** Hadar Amar  
**Institution:** Bar-Ilan University  
**Document Version:** 2.0 — Final Project Documentation  
**Original Planning Date:** November 3, 2026  
**Documentation Update:** November 8, 2026  
**Project Status:** Implemented and Published

**Live Presentation:** https://hadarAmar.github.io/AI-Fashion-Lab/  
**GitHub Repository:** https://github.com/hadarAmar/AI-Fashion-Lab

---

# 1. Executive Summary

## 1.1 Project Overview

**AI Fashion Lab** is an interactive educational website exploring how artificial intelligence and generative technologies are influencing the fashion industry.

The presentation examines the relationship between technology and fashion design, including creative processes, personalization, virtual fitting, sustainability, and the role of human creativity.

Rather than developing a conventional slide presentation, the project combines educational content with interactive demonstrations.

It includes:

- Ten educational HTML slides.
- Interactive navigation using JavaScript.
- A customizable three-dimensional fashion garment using Three.js.
- A Python-based fashion recommendation algorithm.
- A personalized digital fashion passport.
- A consistent visual language inspired by luxury fashion publications.

The project is designed to make technological concepts easier to understand through interaction and visual storytelling.

## 1.2 Central Project Question

**How can artificial intelligence support creative processes in fashion while preserving human creativity and decision-making?**

This question guides both the educational content and the interactive features.

## 1.3 Project Concept

The presentation follows a learning journey:

**Discover → Explore → Design → Evaluate → Reflect**

Visitors first learn about AI applications in fashion, then customize a digital garment, receive an algorithmic recommendation, and view a personalized summary.

The project demonstrates the potential of digital technologies while acknowledging their practical and ethical limitations.

---

# 2. Project Objectives

## 2.1 Educational Objectives

The project aims to:

1. Introduce the role of artificial intelligence in fashion design.
2. Explain selected generative AI technologies and their applications.
3. Demonstrate digital garment customization through interactive 3D visualization.
4. Show how a transparent recommendation algorithm can evaluate user preferences.
5. Encourage critical thinking about sustainability, originality, copyright, and algorithmic bias.
6. Emphasize the continued importance of human creative judgment.

## 2.2 Technical Objectives

The project was planned to satisfy the course's technical requirements:

| Requirement | Planned Implementation |
|---|---|
| HTML presentation | Approximately ten educational slides |
| JavaScript | Navigation, controls, interactions and application state |
| Python | Functional recommendation algorithm |
| Animated 3D element | Interactive garment visualization using Three.js |
| Individual design decisions | Custom visual identity and content refinements |
| Project documentation | README, PRD and development log |
| Version control | Git commits and GitHub repository |
| Accessibility of the project | Public presentation link |

## 2.3 Development Objectives

An additional objective was to practice AI-assisted development as an iterative process.

The development process was intended to include:

- Planning requirements before implementation.
- Providing clear instructions to AI development tools.
- Reviewing generated results.
- Identifying problems.
- Requesting corrections.
- Testing functionality.
- Documenting changes and decisions.

The project was not intended to demonstrate only what AI tools can generate, but also how human direction affects the final result.

---

# 3. Target Audience

The presentation is intended for three main audiences.

### Course Lecturer and Evaluators

The project should demonstrate technical implementation, design decisions, critical evaluation, and documented development progress.

### Students and Learners

The presentation should make AI concepts understandable through accessible explanations and interactive experiences.

### Fashion and Technology Enthusiasts

The experience should be visually engaging and demonstrate the relationship between fashion, personalization, and digital technologies.

---

# 4. Design Concept and Visual Identity

## 4.1 Design Direction

The selected visual direction is:

**Luxury, bright, clean, and inspired by fashion editorial magazines.**

The interface is intended to resemble a digital fashion publication rather than a traditional academic slide deck.

The design emphasizes:

- Elegant typography.
- Large fashion imagery.
- Spacious layouts.
- Clear visual hierarchy.
- Minimalist interface controls.
- Soft transitions.
- Consistency between content and appearance.

## 4.2 Color Palette

| Color | Hex Code | Application |
|---|---|---|
| Ivory | `#FDFBF7` | Primary backgrounds |
| Warm Alabaster | `#F7F4ED` | Secondary backgrounds and cards |
| Champagne Gold | `#C5A059` | Highlights and interface accents |
| Soft Lilac | `#D8CFF2` | Secondary accent color |
| Obsidian Noir | `#141414` | Main text and strong contrast |

The colors were selected to create a refined appearance associated with high-fashion editorial design.

## 4.3 Typography

The intended typography combines:

- Elegant serif fonts for English editorial headings.
- Clear, readable typography for Hebrew explanations.
- Monospaced typography for code examples and technical information.

The primary objective is to maintain readability while supporting the visual identity.

## 4.4 Layout Principles

The presentation uses:

- Varied editorial compositions.
- A clear distinction between headings and explanatory text.
- Large visual elements.
- Consistent navigation.
- Responsive layout techniques.
- Right-to-left support for Hebrew content.

Each slide has its own visual composition while remaining part of the same design system.

---

# 5. Language and Accessibility Requirements

## 5.1 Language Structure

The presentation combines two languages:

**English:** Main slide titles, selected editorial labels, and technical terminology.

**Hebrew:** Educational explanations, descriptions, and most interactive instructions.

This combination supports the fashion editorial theme while keeping the educational content accessible to Hebrew-speaking users.

## 5.2 Right-to-Left Support

The interface must support:

- Correct Hebrew text direction.
- Proper alignment of text and controls.
- Correct display of English terminology within Hebrew sentences.
- Consistent positioning of navigation elements.
- Readable presentation of numerical values and code.

## 5.3 Responsive Design

The primary design environment is a desktop browser.

The website should also support smaller screens by adapting text sizes, spacing, and layout structure.

The project includes mobile screenshots as development evidence. Additional device testing remains a possible improvement.

---

# 6. Presentation Structure

The presentation contains ten slides.

Each slide has a specific educational purpose and contributes to the overall learning experience.

## Slide 1 — Welcome to the Future of Fashion

**Purpose:** Introduce the relationship between artificial intelligence, fashion, and creativity.

**Main Content:**

- Introduction to the project's central theme.
- How AI technologies are becoming part of creative processes.
- The relationship between human creativity and computational tools.

**Design Elements:**

- Large editorial headline.
- Fashion imagery.
- Minimalist opening composition.
- Consistent presentation branding.

**Expected Outcome:** The visitor understands the subject and visual direction of the experience.

---

## Slide 2 — From Sketch to Algorithm

**Purpose:** Explain how digital and generative tools can support fashion design.

**Main Content:**

- Traditional fashion sketching.
- Text prompts and image-generation models.
- Diffusion models.
- ControlNet and guided generation.
- Digital concept exploration.

**Design Elements:**

- A visual design-process sequence.
- Fashion imagery.
- An example of an AI image-generation prompt.
- Short educational explanations.

**Expected Outcome:** The visitor understands how AI-generated imagery can become part of the fashion ideation process.

**Limitation:** Generated images represent design concepts and are not equivalent to manufacturing-ready garment specifications.

---

## Slide 3 — Can AI Be a Fashion Designer?

**Purpose:** Examine the relationship between algorithmic generation and human creativity.

**Main Content:**

- AI-generated creative concepts.
- Human authorship.
- Originality.
- Copyright questions.
- The importance of cultural context and artistic intention.

**Design Elements:**

- Editorial debate format.
- Comparison between algorithmic possibilities and human contributions.
- Fashion imagery and short explanatory sections.

**Expected Outcome:** The visitor is encouraged to consider the role of human designers in AI-assisted creative processes.

---

## Slide 4 — Your Personal AI Stylist

**Purpose:** Introduce the concept of AI-assisted personalization in fashion.

**Main Content:**

- Personalized recommendations.
- User preferences.
- Visual analysis.
- Style selection.
- Contextual factors such as occasions and clothing preferences.

**Design Elements:**

- A simulated personal stylist interface.
- Fashion color palette.
- Visual recommendation card.
- Illustrative compatibility information.

**Expected Outcome:** The visitor understands how digital systems may combine different inputs to generate personalized recommendations.

**Important Limitation:** Compatibility values shown in this educational illustration are examples, not validated measurements.

---

## Slide 5 — The Virtual Fitting Room

**Purpose:** Explain the concept of virtual garment fitting.

**Main Content:**

- Virtual Try-On technology.
- Body and pose analysis.
- Digital garment positioning.
- Image generation and blending.
- Limitations of simulated garment appearance.

**Design Elements:**

- Virtual fitting illustration.
- Technology explanation.
- A visual sequence describing the general process.

**Expected Outcome:** The visitor understands the basic idea behind virtual try-on systems and recognizes the difference between a visual demonstration and accurate physical fit measurement.

**Important Limitation:** The project does not perform real body scanning or accurate clothing-size measurement.

---

## Slide 6 — Design Your Digital Look

**Purpose:** Allow visitors to interact with a three-dimensional garment.

**Technology:** Three.js and JavaScript.

### Functional Requirements

The system should display a three-dimensional garment.

The user should be able to:

- Change the garment's color.
- Select different fabric appearances.
- Choose different silhouettes.
- Rotate the model to explore its shape.
- Observe visual updates following selection changes.

### User Experience

The 3D garment should be displayed prominently.

Customization controls should be understandable and visually consistent with the rest of the presentation.

### Integration Requirement

The selected garment characteristics should be available to the recommendation engine in Slide 7.

### Expected Outcome

The user experiences interactive digital fashion design rather than viewing a static image.

### Technical Limitation

The garment is a procedural three-dimensional visualization.

It does not provide physically accurate cloth simulation or verified garment fit.

---

## Slide 7 — The Smart Fashion Engine

**Purpose:** Demonstrate a meaningful practical use of Python within the presentation.

### Functional Overview

The recommendation engine evaluates user preferences and produces a suggested fashion look.

The algorithm is implemented in:

`python/recommender.py`

### User Inputs

The system accepts:

- Preferred fashion style.
- Target occasion.
- Budget category.
- Garment color.
- Fabric.
- Silhouette.

### Recommendation Process

The algorithm compares user preferences against a curated catalog of fashion looks.

Each candidate receives a compatibility score based on predefined weighted rules.

### Scoring Matrix

| Criterion | Maximum Points |
|---|---:|
| Style compatibility | 35 |
| Occasion and silhouette | 30 |
| Color and fabric compatibility | 20 |
| Budget alignment | 15 |
| **Total** | **100** |

### Expected Output

The system should display:

- A recommended fashion look.
- A total compatibility score.
- An explanation of the recommendation.
- A breakdown of the scoring components.

### Technical Architecture

The Python source contains the reference implementation of the scoring algorithm.

During development, browser-based Python execution through Pyodide presented initialization problems.

The implementation was therefore adapted to support:

1. **Native Python execution through a local server.**
2. **Public website execution through Pyodide when available, with a JavaScript fallback.**

The public version may use JavaScript if Pyodide does not initialize successfully.

### Educational Limitation

The recommendation engine is a deterministic, rule-based simulation.

It is not a trained machine-learning model, and its scores are not predictions validated against real customer behavior.

### Expected Outcome

The user understands how programming can process multiple inputs, apply rules, and generate a personalized recommendation.

---

## Slide 8 — Can AI Make Fashion More Sustainable?

**Purpose:** Explore the potential contribution of AI and digital technology to sustainability in fashion.

**Main Content:**

- Overproduction and textile waste.
- Demand forecasting.
- Digital sampling.
- Pattern optimization.
- Resource efficiency.
- Environmental limitations of computational technologies.

**Design Elements:**

- Editorial sustainability illustrations.
- Short informational sections.
- Visual explanation of different technological applications.

**Expected Outcome:** The visitor understands that digital technologies may improve resource efficiency but do not independently solve environmental challenges.

---

## Slide 9 — The Human Behind the Algorithm

**Purpose:** Emphasize the importance of human responsibility and creativity.

**Main Content:**

- Traditional craftsmanship.
- Human creativity.
- Cultural context.
- Bias in AI-generated outputs.
- Representation of different body types and cultural backgrounds.
- Responsible use of technology.

**Design Elements:**

- Fashion craftsmanship imagery.
- Editorial comparison between traditional and technological processes.
- Short reflective explanations.

**Expected Outcome:** The visitor recognizes that AI-assisted creativity still depends on human decisions and ethical considerations.

---

## Slide 10 — Your Fashion Future

**Purpose:** Connect the interactive experience into a personalized final result.

### Functional Requirements

The slide should present a digital fashion passport that uses information from the user's interaction with the previous slides.

The passport should display relevant information such as:

- Selected garment characteristics.
- Recommended fashion look.
- Compatibility score.
- Personal styling information.

### Interactive Requirements

The user should be able to:

- View the personalized result.
- Return to the recommendation experience when necessary.
- Print the fashion passport.
- Restart the presentation.

### Integration Requirements

Slide 10 should use the latest successfully calculated recommendation rather than displaying a fixed example.

If no recommendation has been calculated, the interface should display an informative empty state.

### Expected Outcome

The visitor completes a connected journey from learning about AI to exploring digital fashion and reviewing a personalized result.

### Technical Limitation

The passport summarizes an educational recommendation simulation rather than providing a validated real-world styling assessment.

---

# 7. Technical Architecture

## 7.1 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Presentation structure | HTML5 | Ten-slide educational presentation |
| Styling | CSS3 | Editorial design and responsive layouts |
| Navigation and controls | JavaScript | User interactions and slide management |
| 3D visualization | Three.js | Interactive garment studio |
| Recommendation logic | Python 3 | Rule-based scoring algorithm |
| Local execution | Python HTTP server | Execute the recommendation algorithm locally |
| Browser Python option | Pyodide | Attempt Python execution in WebAssembly |
| Public fallback | JavaScript | Recommendation functionality when Pyodide is unavailable |
| Version control | Git | Record development changes |
| Repository hosting | GitHub | Store project files and documentation |
| Public website | GitHub Pages | Publish the interactive presentation |

## 7.2 Main Project Files

| File or Folder | Purpose |
|---|---|
| `index.html` | Main presentation |
| `css/style.css` | Styling and responsive design |
| `js/slider.js` | Presentation navigation |
| `js/app.js` | Application interactions |
| `js/three-studio.js` | 3D garment customization |
| `js/python-engine.js` | Recommendation interface and runtime management |
| `js/static-recommender.js` | Static-site recommendation fallback |
| `js/passport.js` | Digital fashion passport integration |
| `python/recommender.py` | Python recommendation algorithm |
| `server.py` | Native Python execution through a local server |
| `tests/` | Automated tests |
| `screenshots/` | Visual documentation |
| `README.md` | Main project explanation and instructions |
| `PRD.md` | Project requirements and planning |
| `prompts/development-log.md` | Development process and prompt documentation |

## 7.3 Application State

The interactive features require the application to maintain user selections across different slides.

Important shared information includes:

- Selected garment color.
- Selected silhouette.
- Selected fabric.
- User style preferences.
- Occasion.
- Budget.
- Latest successful recommendation.

The digital fashion passport should present the latest relevant result.

---

# 8. User Interaction Flow

The intended user journey follows these stages:

### Stage 1 — Learn

The visitor explores Slides 1–5 to learn about AI technologies and their applications in fashion.

### Stage 2 — Design

On Slide 6, the visitor customizes a three-dimensional garment.

The selected characteristics become part of the interactive experience.

### Stage 3 — Evaluate

On Slide 7, the visitor chooses additional preferences and runs the recommendation engine.

The system evaluates the inputs and presents a result.

### Stage 4 — Reflect

Slides 8 and 9 introduce sustainability, ethics, and human creativity.

### Stage 5 — Review

On Slide 10, the visitor receives a personalized digital fashion passport.

The final result connects the earlier interactive selections into one summary.

---

# 9. Development Methodology

## 9.1 AI-Assisted Development

The project was developed through AI-assisted planning, coding, review, and debugging.

The intended workflow was:

1. Define the project requirements.
2. Create the initial PRD.
3. Implement the HTML presentation.
4. Review the visual design.
5. Improve content and layout.
6. Develop the Three.js component.
7. Implement the Python recommendation engine.
8. Connect the interactive features.
9. Test and correct errors.
10. Publish and document the project.

## 9.2 Human Evaluation and Feedback

The development process included repeated review of AI-generated output.

Important areas of feedback included:

- Visual appearance.
- Content density.
- Image selection.
- Interaction design.
- Python execution problems.
- Synchronization between interactive slides.
- Public deployment limitations.

The process was intended to demonstrate that AI-assisted development requires continued human evaluation.

## 9.3 Version Control

Git was used to preserve development milestones.

The original local history includes commits for:

- PRD creation.
- Initial presentation.
- Visual improvements.
- Three.js implementation.
- Public deployment preparation.

These commits are available in the repository's separate `development-history` branch.

[View Original Development History](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history)

The public website is maintained on the `main` branch.

[View Main Branch History](https://github.com/hadarAmar/AI-Fashion-Lab/commits/main)

The original local development commits were uploaded to the separate branch after the public repository had been established.

---

# 10. Functional Verification and Acceptance Criteria

The project should be evaluated according to the following criteria.

| Criterion | Expected Result | Documented Status |
|---|---|---|
| Ten-slide structure | Approximately ten educational slides | Implemented |
| JavaScript navigation | Users can navigate between slides | Implemented |
| 3D visualization | Interactive garment customization | Implemented |
| Python source | Functional rule-based recommendation algorithm | Implemented |
| Local Python execution | Recommendation calculated through `server.py` | Implemented |
| Public presentation | Accessible through GitHub Pages | Published |
| Static hosting compatibility | Recommendation remains usable through fallback | Implemented |
| Recommendation breakdown | Score components are displayed | Implemented |
| Passport integration | Latest result appears on Slide 10 | Implemented |
| README | Project description, instructions and screenshots | Documented |
| PRD | Planning and requirements | Documented |
| Development history | Git commits and change history | Available |
| Prompt documentation | Record of development discussions | Partial source-grounded record |

### Testing

The project includes automated tests for selected recommendation scenarios.

The test command is:

\`\`\`bash
python3 -m unittest discover -s tests -v
\`\`\`

The tests verify aspects of the recommendation algorithm, including score calculations and input handling.

Visual appearance, browser compatibility, responsive behavior, and the complete interactive experience require additional browser-level testing.

Successful algorithm tests do not establish that every browser environment can execute Pyodide.

---

# 11. Deployment Requirements

## 11.1 Public Deployment

The published website is hosted through GitHub Pages:

https://hadarAmar.github.io/AI-Fashion-Lab/

The public version allows visitors to access the presentation without installing software.

GitHub Pages does not execute the local Python server.

For this reason, the public recommendation component may use Pyodide or the documented JavaScript fallback.

## 11.2 Local Python Deployment

The native Python version can be started locally.

From the project directory:

\`\`\`bash
python3 server.py
\`\`\`

Then open:

http://localhost:8000/

The local server executes the recommendation algorithm implemented in Python.

## 11.3 Implementation Change from the Original PRD

The original technical plan prioritized direct Python execution in the browser through Pyodide.

During development, this approach proved unreliable in the tested environment.

The implementation was adapted to support a native Python server and an alternative static website execution path.

This change was made to preserve a functioning interactive experience while retaining the actual Python implementation.

The distinction is documented in the README and development log.

---

# 12. Academic and Technical Limitations

The project is an educational demonstration.

It should not be interpreted as a complete artificial intelligence fashion platform.

Its main limitations are:

1. The recommendation system is based on predefined rules rather than machine learning.
2. The recommendation catalog is limited and illustrative.
3. Compatibility scores do not represent verified predictions of personal preference.
4. The 3D garment is a visual simulation without physically accurate fabric behavior.
5. Virtual fitting illustrations do not provide real body measurements.
6. The public website may execute JavaScript instead of Python when Pyodide is unavailable.
7. Some screenshots represent earlier development stages.
8. The complete original Antigravity conversation history is not available.
9. Additional usability and accessibility testing could improve the experience.

These limitations are documented to distinguish the project's demonstrations from real-world AI capabilities.

---

# 13. Future Improvements

Potential future development could include:

- More reliable browser-based Python execution.
- More advanced 3D garment modeling.
- Additional customization options.
- A larger fashion recommendation catalog.
- Usability testing with real participants.
- Improved mobile layouts.
- More comprehensive accessibility testing.
- Greater transparency in recommendation explanations.
- More detailed documentation of original AI development conversations.

These improvements are outside the current implementation scope.

---

# 14. Project Deliverables

The project repository contains the following main deliverables:

### Interactive Presentation

The completed HTML website with ten slides.

### JavaScript Functionality

Navigation, user controls, shared state, and recommendation integration.

### Three.js Component

Interactive garment visualization on Slide 6.

### Python Component

Rule-based recommendation algorithm and local execution path.

### Project Documentation

- `README.md`
- `PRD.md`
- `prompts/development-log.md`

### Visual Documentation

Screenshots of selected desktop and mobile presentation states.

### Version History

Development commits preserved through Git and GitHub.

### Published Website

A publicly accessible version through GitHub Pages.

---

# 15. Final Project Reflection

AI Fashion Lab was planned as an interactive educational experience that combines fashion, creativity, and digital technology.

The development process demonstrated the importance of moving beyond a static presentation and allowing users to interact with the concepts being discussed.

The main technical challenges involved integrating multiple technologies, making the recommendation engine work reliably, and preserving information between slides.

These challenges required reviewing results, identifying errors, and modifying the implementation.

The project also demonstrated the importance of distinguishing between real AI technologies and educational simulations.

**The central conclusion is that AI-assisted development can support creative and technical work, but successful results still require human direction, evaluation, and critical judgment.**

---

# 16. Project References and Documentation

| Resource | Link |
|---|---|
| Live Presentation | [AI Fashion Lab](https://hadarAmar.github.io/AI-Fashion-Lab/) |
| GitHub Repository | [Source Repository](https://github.com/hadarAmar/AI-Fashion-Lab) |
| Main Project Documentation | [README.md](README.md) |
| Prompt and Development History | [Development Log](prompts/development-log.md) |
| Python Recommendation Engine | [recommender.py](python/recommender.py) |
| Python Tests | [Recommendation Tests](tests/test_recommender.py) |
| Original Git Commits | [Development History](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history) |

---

**Document Status:** Final documentation of the project's requirements, implementation decisions, and known limitations.

**Original PRD:** Created November 3, 2026.  
**Updated Version:** November 8, 2026.
