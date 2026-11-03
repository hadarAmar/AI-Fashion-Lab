/**
 * AI FASHION LAB - Main Application Entrypoint
 * Milestone 2: Orchestrates SlideController and Three.js 3D Garment Studio.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global state container
  window.aiFashionLab = {
    state: {
      colorHex: 0xC5A059, // Champagne Gold default
      fabric: 'silk',
      silhouette: 'evening',
      updatedAt: new Date().toISOString()
    },
    version: '1.2.0-milestone2'
  };

  // Initialize presentation slider
  const presentation = new window.SlideController();
  window.aiFashionLab.controller = presentation;

  // Initialize Three.js 3D Garment Studio
  let studio3D = null;
  try {
    if (typeof THREE !== 'undefined' && typeof window.GarmentStudio3D !== 'undefined') {
      studio3D = new window.GarmentStudio3D('studio-webgl-container');
      window.aiFashionLab.studio3D = studio3D;
    } else {
      console.warn('[AI Fashion Lab] THREE or GarmentStudio3D not loaded yet.');
    }
  } catch (err) {
    console.error('[AI Fashion Lab] Error booting 3D studio:', err);
  }

  // Slide change lifecycle handler
  window.addEventListener('slidechange', (e) => {
    console.log(`[AI Fashion Lab] Active Slide: ${e.detail.slideNumber} / ${presentation.totalSlides}`);
  });

  console.log('AI Fashion Lab ready. 3D Studio initialized.');
});
