/**
 * AI FASHION LAB - Main Application Entrypoint
 * Milestone 1: Initializes presentation and sets up lifecycle handlers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize presentation controller
  const presentation = new window.SlideController();

  // Expose controller globally for debugging / interactive control
  window.aiFashionLab = {
    controller: presentation,
    version: '1.0.0-milestone1'
  };

  // Listen to slide changes
  window.addEventListener('slidechange', (e) => {
    // Developmental tracking log
    console.log(`[AI Fashion Lab] Active Slide: ${e.detail.slideNumber} / ${presentation.totalSlides}`);
  });

  console.log('AI Fashion Lab presentation initialized successfully.');
});
