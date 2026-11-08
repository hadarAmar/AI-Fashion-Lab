# AI Fashion Lab — Prompt History & Development Evidence

**Project:** AI Fashion Lab — The Future of Fashion & Artificial Intelligence  
**Course:** Generative Artificial Intelligence — Dr. Yoram Segal  
**Student:** Hadar Amar  

**Live Presentation:** https://hadarAmar.github.io/AI-Fashion-Lab/  
**GitHub Repository:** https://github.com/hadarAmar/AI-Fashion-Lab

---

## 1. Introduction

This document presents the development process of AI Fashion Lab, an interactive educational presentation exploring the relationship between artificial intelligence and the fashion industry.

The project was created through an iterative AI-assisted development process involving planning, implementation, evaluation, debugging, and refinement.

The purpose of this documentation is to demonstrate how the project evolved and how student feedback influenced its development.

### Documentation and Academic Transparency

This document distinguishes between three types of information:

- **Original student statements:** Messages that can be recovered from the development conversations.
- **Documented requirements and decisions:** Summaries supported by project files and development discussions.
- **Retrospective reflections:** Explanations of lessons learned from the development process.

The complete original Antigravity conversation history is not currently available.

Therefore, any reconstructed requirements are explicitly identified as summaries rather than exact transcripts.

**No missing AI responses or original prompts are presented as invented verbatim conversations.**

---

## 2. Project Goals and Technical Requirements

The initial goal was to create an interactive HTML presentation explaining how artificial intelligence is influencing the fashion industry.

The project was designed to include:

1. Approximately ten educational slides.
2. JavaScript navigation and interaction.
3. An animated and interactive Three.js component.
4. A meaningful Python feature.
5. A consistent visual identity.
6. Hebrew educational explanations and English editorial headings.
7. A publicly accessible GitHub repository.
8. Documentation of the development process and improvements.

Rather than creating a traditional presentation, I wanted to combine educational explanations with practical demonstrations.

The resulting project includes an interactive 3D garment studio, a Python recommendation algorithm, and a personalized digital fashion passport.

---

## 3. Stage One — Choosing the Visual Direction

**Date:** November 3, 2026

### Original Student Preference

The following statement was recovered from the ChatGPT development conversation:

> יוקרתי, בהיר ונקי בסגנון מגזין אופנה

**English translation:**

"Luxurious, bright and clean, in the style of a fashion magazine."

### Objective

Develop a visual identity that reflects the fashion industry rather than using a generic educational presentation template.

### Implementation

The presentation was developed using:

- Ivory and warm neutral backgrounds.
- Champagne-gold accents.
- Soft lilac details.
- Editorial fashion imagery.
- Elegant typography.
- Spacious, magazine-inspired layouts.
- English titles and Hebrew educational explanations.

### Student Contribution

The visual direction was based on a specific student preference.

The choice of style influenced the presentation's colors, layout, typography, and overall atmosphere.

### Visual Evidence

![AI Fashion Lab opening slide](../screenshots/desktop-slide1.png)

*Figure 1: The editorial visual identity of the presentation.*

![Educational content slide](../screenshots/desktop-slide2.png)

*Figure 2: The relationship between fashion imagery and educational content.*

**Git Evidence:** [Visual refinement commit — 2dbe336](https://github.com/hadarAmar/AI-Fashion-Lab/commit/2dbe336)

---

## 4. Stage Two — Planning and Initial Implementation

**Date:** November 3, 2026

### Requirements Summary

The initial development requirements included:

- Creating an interactive educational presentation about AI in fashion.
- Planning the project before implementation.
- Building approximately ten slides.
- Using JavaScript for interactive navigation.
- Supporting Hebrew content with right-to-left layout.
- Incorporating Three.js and Python functionality.
- Maintaining a consistent fashion editorial style.

These requirements summarize the documented project planning process. They are not presented as a verbatim copy of the original Antigravity prompt.

### Implementation

The development process began with the creation of a Product Requirements Document.

The PRD defined:

- Project objectives.
- Target audience.
- Main educational topics.
- Visual design direction.
- Interactive features.
- Technical architecture.
- Expected deliverables.

After the planning stage, the initial HTML presentation was implemented.

### Development Evidence

**November 3, 2026 — 10:53:30 UTC**

[Commit ebdac94 — Create comprehensive PRD](https://github.com/hadarAmar/AI-Fashion-Lab/commit/ebdac94)

**November 3, 2026 — 11:02:29 UTC**

[Commit b466279 — Initial HTML presentation](https://github.com/hadarAmar/AI-Fashion-Lab/commit/b466279)

### Critical Evaluation

The initial implementation established the main structure, but the visual design required further refinement.

Some areas contained too much text, while others needed stronger visual storytelling and more varied layouts.

### Improvement

The presentation was revised to improve readability, image selection, and visual hierarchy.

**Evidence:** [Commit 2dbe336 — Visual storytelling improvements](https://github.com/hadarAmar/AI-Fashion-Lab/commit/2dbe336)

### Learning

The first generated version was a starting point rather than a finished product.

The development process required reviewing the result and making changes to improve the presentation.

---

## 5. Stage Three — Improving Virtual Fitting and 3D Interaction

**Date:** November 3, 2026

### Documented Student Requirements

During development, I requested improvements to the visual representation of virtual fitting technology in Slide 5.

I also requested the development of an interactive 3D garment studio in Slide 6 using Three.js.

The requested functionality included:

- Changing garment colors.
- Experimenting with fabric appearances.
- Selecting different silhouettes.
- Updating the 3D model according to user selections.
- Maintaining the existing visual identity.

The Python recommendation engine was intentionally deferred during this stage so the 3D component could be developed first.

These points summarize documented requirements rather than reproducing the complete original Antigravity conversation.

### Implementation

A Three.js garment studio was created.

The studio uses a three-dimensional model that changes visually when the user selects different properties.

### Visual Evidence

![Virtual fitting illustration](../screenshots/desktop-slide5.png)

*Figure 3: Virtual fitting technology illustration.*

![Interactive garment studio](../screenshots/desktop-slide6.png)

*Figure 4: Interactive 3D garment customization.*

### Git Evidence

**November 3, 2026 — 12:03:08 UTC**

[Commit 8fd810a — Interactive Three.js garment studio](https://github.com/hadarAmar/AI-Fashion-Lab/commit/8fd810a)

### Critical Evaluation

The interactive studio improved the project because it allowed users to participate in the design process.

Instead of observing a static image, visitors could make selections and immediately see their effect.

However, the garment remains a procedural 3D visualization rather than a physically accurate fabric simulation or real virtual fitting tool.

### Learning

Interactive elements should contribute to the educational experience rather than serve only as visual decoration.

---

## 6. Stage Four — Developing the Python Recommendation Engine

**Date:** November 3, 2026

### Development Objective

Implement meaningful Python functionality within the presentation.

The goal was to create a recommendation system that evaluates user preferences and produces a personalized fashion suggestion.

### Requirements Summary

The requested engine needed to evaluate:

- Personal style.
- Occasion.
- Budget.
- Garment color.
- Fabric.
- Silhouette.

The system would use predefined scoring rules to evaluate different fashion looks.

The result would include a recommended look, a numerical compatibility score, and explanations of the score components.

### Implementation

The recommendation engine was implemented in:

`python/recommender.py`

The algorithm uses four weighted criteria:

| Evaluation Criterion | Maximum Points |
|---|---:|
| Style compatibility | 35 |
| Occasion and silhouette | 30 |
| Color and fabric compatibility | 20 |
| Budget alignment | 15 |
| **Total** | **100** |

The system uses deterministic rules and a limited fashion catalog.

It is an educational recommendation simulation, not a trained machine-learning model.

### Technical Problem

The initial implementation attempted to execute Python inside the browser using Pyodide.

However, the runtime did not initialize correctly in the tested environment.

### Original Error Report

The following error message was reported during development:

> לא ניתן להפעיל Python. בדקי חיבור לאינטרנט ונסי שוב.

**English translation:**

"Python cannot be started. Check the internet connection and try again."

### Correction

To address the problem, a local Python server was introduced.

The application could then send the user's selections to the server, execute the recommendation algorithm in Python, and return the calculated result.

The server is implemented in:

`server.py`

### Verification

After the correction, the student reported that the local implementation was working.

The project also includes automated Python tests.

**Code Evidence:**

- [Python Recommendation Engine](../python/recommender.py)
- [Local Python Server](../server.py)
- [Recommendation Tests](../tests/test_recommender.py)

### Critical Evaluation

This stage demonstrated that successfully generating code does not guarantee successful execution.

The technical problem required examining the runtime environment and changing the implementation.

It also introduced an important distinction between Python running locally and a website hosted through GitHub Pages.

---

## 7. Stage Five — Connecting Slides 7 and 10

**Date:** November 3, 2026

### Development Objective

Connect the recommendation generated on Slide 7 to the personalized digital fashion passport on Slide 10.

The final slide needed to display the result calculated from the user's actual selections.

### Original Student Feedback

The following message was recovered from the development conversation:

> שקופית 10 לא מתעדכנת משקופית 7

**English translation:**

"Slide 10 is not updating from Slide 7."

### Problem Identified

The individual components existed, but the information did not update correctly between the two slides.

As a result, the final slide did not accurately reflect the user's latest recommendation.

### Correction

The application was modified to maintain and transfer the latest successful recommendation.

The personalized fashion passport was updated to display information derived from the user's selections and calculated result.

### Implementation Evidence

- [Python Engine Integration](../js/python-engine.js)
- [Digital Fashion Passport](../js/passport.js)

### Outcome

After the correction, the student confirmed that the synchronization worked.

### Critical Reflection

This stage demonstrated the importance of testing complete user journeys.

Even when individual features work, the connections between them may introduce additional problems.

The correction improved the consistency of the overall interactive experience.

---

## 8. Stage Six — Publishing the Presentation

**Date:** November 3–8, 2026

### Development Objective

Make the presentation publicly accessible without requiring users to download the project or install software.

### Challenge

The project worked locally using the Python server.

However, GitHub Pages is a static hosting service and cannot execute that Python server.

### Solution

The presentation was published through GitHub Pages.

The public version attempts to initialize Pyodide for Python execution inside the browser.

If that process fails, a JavaScript fallback implements the recommendation scoring rules.

The native Python implementation remains available through the local server.

### Technical Clarification

The project has two important execution paths.

**Local execution**

The recommendation is calculated using Python through `server.py`.

**Public website**

The application attempts Pyodide and can switch to a JavaScript implementation when necessary.

The JavaScript fallback does not constitute Python execution.

### Published Result

**Live Presentation:**  
https://hadarAmar.github.io/AI-Fashion-Lab/

### Critical Evaluation

The publishing process revealed a difference between a project working locally and functioning on a static hosting platform.

The solution required balancing accessibility with the technical limitations of the hosting environment.

### Learning

Deployment is part of development.

A working local implementation is not sufficient evidence that the same system will operate identically on every hosting platform.

---

## 9. Original Git Development History

The following commits represent actual local Git development stages from November 3, 2026.

| Commit | Time (UTC) | Development Stage |
|---|---|---|
| [ebdac94](https://github.com/hadarAmar/AI-Fashion-Lab/commit/ebdac94) | 10:53:30 | Creation of the PRD |
| [b466279](https://github.com/hadarAmar/AI-Fashion-Lab/commit/b466279) | 11:02:29 | Initial HTML presentation |
| [2dbe336](https://github.com/hadarAmar/AI-Fashion-Lab/commit/2dbe336) | 11:47:09 | Visual design and content improvements |
| [8fd810a](https://github.com/hadarAmar/AI-Fashion-Lab/commit/8fd810a) | 12:03:08 | Interactive Three.js garment studio |
| [018a4c9](https://github.com/hadarAmar/AI-Fashion-Lab/commit/018a4c9) | 13:16:46 | Preparation for public deployment |

### Git History Clarification

The original commits were created locally.

They were later uploaded to a separate GitHub branch:

[View Development History](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history)

The public website is maintained on the main branch:

[View Main Branch History](https://github.com/hadarAmar/AI-Fashion-Lab/commits/main)

The later upload of the local history does not represent five separate original GitHub pushes on November 3.

This distinction is included to describe the development record accurately.

---

## 10. Summary of Development Problems and Improvements

| Development Stage | Problem or Feedback | Improvement |
|---|---|---|
| Visual direction | Generic presentation appearance was not the desired result | Luxury fashion editorial design |
| Initial presentation | Content density and layout required refinement | Improved imagery, spacing and hierarchy |
| Virtual fitting | Slide 5 required a more suitable visual | Revised virtual-fitting illustration |
| 3D interaction | A static image was insufficient for the intended demonstration | Interactive Three.js garment studio |
| Python recommendation | Pyodide initialization failed | Native Python execution through a local server |
| Slides 7 and 10 | Final results were not synchronized | Shared recommendation state and updated passport |
| Public publishing | Static hosting could not run the Python server | Pyodide attempt and documented JavaScript fallback |

The progression demonstrates how review and technical troubleshooting influenced the final result.

---

## 11. Student Decisions and Contribution

The available development evidence supports several important decisions.

### Establishing the Visual Direction

I selected a luxurious, bright, magazine-inspired style rather than relying on a generic presentation design.

### Improving the Educational Experience

The presentation was revised to make its explanations clearer and its visual structure more engaging.

### Introducing Meaningful Interaction

I wanted users to interact with a digital garment instead of simply watching a demonstration.

### Requesting Functional Python

The project required a meaningful calculation rather than a decorative example of Python code.

### Identifying and Reporting Errors

When Python did not initialize, I reported the problem and continued investigating the implementation.

When Slide 10 did not reflect Slide 7, I requested a correction.

### Evaluating the Published Result

The public version required a different execution strategy from the local version.

This limitation was documented rather than hidden.

Together, these decisions demonstrate active participation in the development process.

---

## 12. Critical Reflection

### What Worked Well?

The project successfully combined educational content with interactive visual demonstrations.

The consistent design language supported the fashion theme.

The 3D garment studio made the presentation more engaging.

The recommendation system demonstrated how code can evaluate user preferences and produce structured results.

### What Did Not Work Initially?

Several issues required revision:

- The initial presentation needed visual improvements.
- Pyodide failed to initialize reliably in the tested environment.
- Slide 10 initially failed to display the latest recommendation.
- Static hosting required a different execution method from local Python.

These problems required additional development rather than accepting the first generated version.

### What Did I Learn?

AI-assisted development can accelerate the creation of complex digital experiences, but the generated results still require human supervision.

The development process involved evaluating outputs, finding problems, making decisions and requesting improvements.

I also learned that a successful feature should be tested not only individually but as part of the complete user experience.

The most important lesson was that using AI effectively requires critical thinking and continuous evaluation.

---

## 13. Documentation Limitations

This record is based on available ChatGPT development discussions, source code, screenshots and Git history.

The full original Antigravity conversation history is not available.

For that reason:

- Some requirements are paraphrased rather than quoted.
- Only recoverable student statements are presented as original messages.
- The full AI-generated responses for every development stage are not included.
- The screenshots document selected stages rather than every intermediate version.
- The local Git commits provide development evidence but do not establish a corresponding sequence of GitHub pushes.

This document is therefore a **source-grounded development record, not a complete verbatim export of every original agent conversation**.

These limitations are stated explicitly to preserve the accuracy of the submitted documentation.

---

## 14. Final Conclusion

AI Fashion Lab demonstrates how artificial intelligence concepts can be explored through an interactive educational presentation.

The project combines visual design, JavaScript interaction, Three.js visualization, Python programming and personalized results.

The development process involved planning, testing, identifying problems and improving the implementation.

More importantly, it demonstrated that successful AI-assisted development depends on the decisions made by the person guiding the process.

**AI can support creative and technical development, but human evaluation remains essential.**

---

## Project Resources

| Resource | Link |
|---|---|
| Live Presentation | [AI Fashion Lab](https://hadarAmar.github.io/AI-Fashion-Lab/) |
| GitHub Repository | [Source Repository](https://github.com/hadarAmar/AI-Fashion-Lab) |
| Project Requirements | [PRD.md](../PRD.md) |
| Main Documentation | [README.md](../README.md) |
| Python Recommendation Engine | [recommender.py](../python/recommender.py) |
| Three.js Garment Studio | [three-studio.js](../js/three-studio.js) |
| Git Development History | [Development Commits](https://github.com/hadarAmar/AI-Fashion-Lab/commits/development-history) |
