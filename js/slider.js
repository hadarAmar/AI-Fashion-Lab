/**
 * AI FASHION LAB - Presentation Slider Engine
 * Handles slide navigation, dot indicators, keyboard controls, and URL hash syncing.
 */

class SlideController {
  constructor(options = {}) {
    this.slides = document.querySelectorAll('.slide');
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;
    
    // UI elements
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.indicatorContainer = document.getElementById('nav-indicators');
    this.currentNumDisplay = document.getElementById('slide-current-num');
    this.totalNumDisplay = document.getElementById('slide-total-num');
    
    this.init();
  }

  init() {
    if (this.totalSlides === 0) return;

    if (this.totalNumDisplay) {
      this.totalNumDisplay.textContent = this.formatNumber(this.totalSlides);
    }

    // Build dot indicators
    this.createIndicators();

    // Event listeners
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.previousSlide());
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.nextSlide());
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // Handle initial slide from URL hash (e.g. #slide-4)
    this.handleInitialHash();

    // Listen to hash changes (browser back/forward buttons)
    window.addEventListener('hashchange', () => this.handleInitialHash());

    // Update initial view
    this.updateView();
  }

  formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  createIndicators() {
    if (!this.indicatorContainer) return;
    this.indicatorContainer.innerHTML = '';

    this.slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.className = `dot-indicator ${index === this.currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `עבור לשקופית ${index + 1}`);
      dot.setAttribute('title', slide.dataset.title || `שקופית ${index + 1}`);
      dot.addEventListener('click', () => this.goToSlide(index));
      this.indicatorContainer.appendChild(dot);
    });
  }

  handleInitialHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= this.totalSlides) {
        this.goToSlide(slideNum - 1, false);
      }
    }
  }

  handleKeyboard(event) {
    // Avoid intercepting if focus is in an input or textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }

    switch (event.key) {
      case 'ArrowLeft': // Standard RTL progression (progresses forward towards left)
      case 'PageDown':
      case ' ': // Spacebar
        event.preventDefault();
        this.nextSlide();
        break;

      case 'ArrowRight': // Standard RTL backward (moves right toward beginning)
      case 'PageUp':
        event.preventDefault();
        this.previousSlide();
        break;

      case 'Home':
        event.preventDefault();
        this.goToSlide(0);
        break;

      case 'End':
        event.preventDefault();
        this.goToSlide(this.totalSlides - 1);
        break;

      default:
        break;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  previousSlide() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  goToSlide(targetIndex, updateHash = true) {
    if (targetIndex < 0 || targetIndex >= this.totalSlides) return;
    if (targetIndex === this.currentIndex && this.slides[targetIndex].classList.contains('active')) {
      return;
    }

    const previousIndex = this.currentIndex;
    this.currentIndex = targetIndex;

    this.slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'previous');
      if (idx === this.currentIndex) {
        slide.classList.add('active');
        slide.scrollTop = 0; // Reset internal scroll
      } else if (idx < this.currentIndex) {
        slide.classList.add('previous');
      }
    });

    if (updateHash) {
      window.location.hash = `#slide-${this.currentIndex + 1}`;
    }

    this.updateView();

    // Dispatch custom slide-change event for future milestones (Three.js resize, Pyodide triggers)
    window.dispatchEvent(new CustomEvent('slidechange', {
      detail: {
        currentIndex: this.currentIndex,
        slideNumber: this.currentIndex + 1,
        slideElement: this.slides[this.currentIndex]
      }
    }));
  }

  updateView() {
    // Update counter display
    if (this.currentNumDisplay) {
      this.currentNumDisplay.textContent = this.formatNumber(this.currentIndex + 1);
    }

    // Update buttons
    if (this.btnPrev) {
      this.btnPrev.disabled = this.currentIndex === 0;
    }
    if (this.btnNext) {
      this.btnNext.disabled = this.currentIndex === this.totalSlides - 1;
    }

    // Update dots
    const dots = this.indicatorContainer ? this.indicatorContainer.querySelectorAll('.dot-indicator') : [];
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentIndex);
    });
  }
}

// Support both global scope and module environments
if (typeof window !== 'undefined') {
  window.SlideController = SlideController;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SlideController };
}
