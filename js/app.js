/**
 * AI FASHION LAB - Main Application Entrypoint
 * Milestone 3: Integrates SlideController, Three.js 3D Studio, and Pyodide Python Engine.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global application state
  window.aiFashionLab = {
    state: {
      colorHex: 0xC5A059, // Champagne Gold default
      fabric: 'silk',
      silhouette: 'evening',
      updatedAt: new Date().toISOString()
    },
    recommendation: null,
    version: '1.3.0-milestone3'
  };

  // Initialize presentation slider
  const presentation = new window.SlideController();
  window.aiFashionLab.controller = presentation;

  // Initialize Three.js 3D Garment Studio (Slide 6)
  let studio3D = null;
  try {
    if (typeof THREE !== 'undefined' && typeof window.GarmentStudio3D !== 'undefined') {
      studio3D = new window.GarmentStudio3D('studio-webgl-container');
      window.aiFashionLab.studio3D = studio3D;
    } else {
      console.warn('[AI Fashion Lab] THREE or GarmentStudio3D not ready.');
    }
  } catch (err) {
    console.error('[AI Fashion Lab] Error booting 3D studio:', err);
  }

  // Initialize In-Browser Python Engine (Slide 7)
  let pythonEngine = null;
  try {
    if (typeof window.PythonFashionEngine !== 'undefined') {
      pythonEngine = new window.PythonFashionEngine();
      window.aiFashionLab.pythonEngine = pythonEngine;
    }
  } catch (err) {
    console.error('[AI Fashion Lab] Error booting Python engine:', err);
  }

  // Slide change lifecycle handler
  window.addEventListener('slidechange', (e) => {
    console.log(`[AI Fashion Lab] Active Slide: ${e.detail.slideNumber} / ${presentation.totalSlides}`);
  });

  console.log('AI Fashion Lab ready. 3D Studio & Python Engine online.');
});
