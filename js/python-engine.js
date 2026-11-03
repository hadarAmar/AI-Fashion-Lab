/**
 * AI FASHION LAB - In-Browser Python Recommendation Engine (Pyodide WASM)
 * Milestone 3: Real Python WebAssembly execution of transparent scoring rules.
 */

// Embedded fallback source of python/recommender.py for file:// mode (Pyodide still requires network access)
const PYTHON_RECOMMENDER_SOURCE = `"""
AI Fashion Lab - Transparent Haute Couture Recommendation Engine
================================================================
Educational Rule-Based Simulation Engine for Pyodide (WebAssembly) & Native Python 3.

This engine evaluates user fashion profiles, context (occasion, budget),
and 3D garment choices (color, fabric, silhouette) against a curated couture catalog.
All scoring rules are deterministic, weighted, and transparently explained.
"""

import json
from typing import Dict, Any, List

# Curated High-Fashion Catalog
CATALOG: List[Dict[str, Any]] = [
    {
        "id": "look-01",
        "title_en": "The Champagne Aurora Gown",
        "title_he": "שמלת ערב זוהר השמפניה",
        "style": "classic_couture",
        "silhouette": "evening",
        "primary_fabric": "silk",
        "compatible_colors": ["#C5A059", "#FAF7F2"],
        "occasions": ["gala_evening", "runway_show"],
        "budget_tier": "high_couture",
        "description_he": "שמלת ערב מלכותית ממשי סאטן נוזלי עם מפתח גב פיסולי ונפילה עשירה של קפלים ארכיטקטוניים.",
        "styling_notes_he": "מומלץ לשלב עם תכשיטי זהב צהוב מעודנים וקלאץ' אובסידיאן מלוטש.",
        "visual_badge": "HAUTE COUTURE ÉLITE"
    },
    {
        "id": "look-02",
        "title_en": "Architectural Column Noir",
        "title_he": "שמלת קולום אדריכלית אובסידיאן",
        "style": "minimalist",
        "silhouette": "column",
        "primary_fabric": "matte",
        "compatible_colors": ["#1C1B1A", "#FAF7F2", "#C5A059"],
        "occasions": ["cocktail_premiere", "daytime_atelier"],
        "budget_tier": "accessible_luxury",
        "description_he": "סילואט עמוד נקי ומאופק בהשראת האדריכלות המודרניסטית, בגזרה ישרה ומדויקת המדגישה קווי אורך נקיים.",
        "styling_notes_he": "התאמה מושלמת לעקבי שפיץ חדים ומעיל טרנץ' מחויט בגוון קאמל.",
        "visual_badge": "CONTEMPORARY PURISM"
    },
    {
        "id": "look-03",
        "title_en": "Origami Velvet Avant-Garde",
        "title_he": "שמלת אוריגמי קטיפה אוונגרדית",
        "style": "avantgarde",
        "silhouette": "avantgarde",
        "primary_fabric": "velvet",
        "compatible_colors": ["#D8CFF2", "#284B3D", "#1C1B1A"],
        "occasions": ["runway_show", "cocktail_premiere"],
        "budget_tier": "collector_edition",
        "description_he": "יצירה אוונגרדית המשלבת קיפולי אוריגמי תלת-ממדיים בקטיפה עמוקה, המייצרת משחקי אור וצל דרמטיים.",
        "styling_notes_he": "עוצבה עבור שבוע האופנה; פריט הצהרה שאינו זקוק לאביזרים נלווים נוספים.",
        "visual_badge": "AVANT-GARDE COUTURE"
    },
    {
        "id": "look-04",
        "title_en": "Lavender Silk Column",
        "title_he": "שמלת קולום משי לילך פסטל",
        "style": "minimalist",
        "silhouette": "column",
        "primary_fabric": "silk",
        "compatible_colors": ["#D8CFF2", "#FAF7F2"],
        "occasions": ["cocktail_premiere", "daytime_atelier"],
        "budget_tier": "accessible_luxury",
        "description_he": "עדינות פיוטית של משי סאטן בגוון לילך רך. גזרה ישרה עם שסע נסתר ותנועה מרחפת.",
        "styling_notes_he": "שילוב אידיאלי עם פלטת איפור טבעית ונעלי סירה בגוון שנהב.",
        "visual_badge": "ETHEREAL CHIC"
    },
    {
        "id": "look-05",
        "title_en": "Emerald Velvet Gala Drape",
        "title_he": "שמלת נשף קטיפה אמרלד מלכותית",
        "style": "classic_couture",
        "silhouette": "evening",
        "primary_fabric": "velvet",
        "compatible_colors": ["#284B3D", "#C5A059"],
        "occasions": ["gala_evening", "runway_show"],
        "budget_tier": "collector_edition",
        "description_he": "שמלת נשף מרשימה בקטיפת אמרלד עמוקה עם מחוך מובנה וחצאית נשפכת הנפרשת בתנועה.",
        "styling_notes_he": "מראה אריסטוקרטי מובהק הדורש עגילי אמרלד עדינים וצעיף משי בהיר.",
        "visual_badge": "ROYAL GALA"
    },
    {
        "id": "look-06",
        "title_en": "Ivory Sculptural Modernist",
        "title_he": "שמלת שנהב פיסולית מודרניסטית",
        "style": "avantgarde",
        "silhouette": "column",
        "primary_fabric": "matte",
        "compatible_colors": ["#FAF7F2", "#C5A059"],
        "occasions": ["daytime_atelier", "cocktail_premiere"],
        "budget_tier": "high_couture",
        "description_he": "עיצוב אדריכלי מינימליסטי בפשתן מאט דחוס. חיתוכים א-סימטריים מעודנים המשלבים דיוק ונוחות.",
        "styling_notes_he": "לוק מושלם לפתיחת גלריה או אירוע תרבות עילי.",
        "visual_badge": "ARCHITECTURAL ATELIER"
    }
]

# Color Harmony Proximity Matrix
COLOR_HARMONY_MAP = {
    "#C5A059": ["#C5A059", "#FAF7F2", "#1C1B1A"], # Champagne harmonizes with Ivory & Noir
    "#D8CFF2": ["#D8CFF2", "#FAF7F2", "#1C1B1A"], # Lilac harmonizes with Ivory & Noir
    "#1C1B1A": ["#1C1B1A", "#C5A059", "#FAF7F2", "#D8CFF2", "#284B3D"], # Noir universal
    "#FAF7F2": ["#FAF7F2", "#C5A059", "#D8CFF2", "#1C1B1A"], # Ivory universal
    "#284B3D": ["#284B3D", "#C5A059", "#1C1B1A"]  # Emerald harmonizes with Gold & Noir
}

BUDGET_WEIGHTS = {
    "accessible_luxury": 1,
    "high_couture": 2,
    "collector_edition": 3
}

def calculate_affinity(item: Dict[str, Any], user_profile: Dict[str, Any]) -> Dict[str, Any]:
    """
    Calculates weighted affinity score for a catalog item based on transparent rules.
    Weights:
      - Style Persona Fit: 35 points
      - Occasion & Silhouette Match: 30 points
      - Color & Fabric Harmony: 20 points
      - Budget Alignment: 15 points
      Total Max: 100 points
    """
    # 1. Style Persona Match (Max: 35)
    user_style = user_profile.get("style", "classic_couture")
    if item["style"] == user_style:
        style_score = 35.0
        style_reason = f"התאמה מושלמת לסגנון הנבחר ({user_style})"
    else:
        # Secondary compatibility
        if (user_style == "classic_couture" and item["style"] == "minimalist") or \\
           (user_style == "avantgarde" and item["style"] == "minimalist"):
            style_score = 22.0
            style_reason = "קרבה אסתטית וקווים עיצוביים משלימים"
        else:
            style_score = 14.0
            style_reason = "סגנון מנוגד היוצר קונטרסט מעניין"

    # 2. Occasion & Silhouette Synergy (Max: 30)
    user_occasion = user_profile.get("occasion", "gala_evening")
    user_silhouette = user_profile.get("silhouette", "evening")
    
    occasion_points = 18.0 if user_occasion in item["occasions"] else 8.0
    silhouette_points = 12.0 if item["silhouette"] == user_silhouette else 6.0
    occasion_score = occasion_points + silhouette_points
    occasion_reason = f"התאמה לקוד הלבוש של האירוע וסילואט {item['silhouette']}"

    # 3. Color & Fabric Harmony (Max: 20)
    user_color = user_profile.get("colorHex", "#C5A059")
    user_fabric = user_profile.get("fabric", "silk")

    color_match = 10.0 if user_color in item.get("compatible_colors", []) else 5.0
    fabric_match = 10.0 if user_fabric == item["primary_fabric"] else 6.0
    color_score = color_match + fabric_match
    color_reason = f"שילוב מרקם {user_fabric} והרמוניה צבעונית מדויקת"

    # 4. Budget Tier Alignment (Max: 15)
    user_budget = user_profile.get("budget", "high_couture")
    user_b_val = BUDGET_WEIGHTS.get(user_budget, 2)
    item_b_val = BUDGET_WEIGHTS.get(item["budget_tier"], 2)
    diff = abs(user_b_val - item_b_val)
    
    if item_b_val > user_b_val:
        budget_score = 0.0
        budget_reason = "הפריט חורג מרמת התקציב שנבחרה"
    elif diff == 0:
        budget_score = 15.0
        budget_reason = "עמידה מלאה בהגדרות התקציב"
    elif diff == 1:
        budget_score = 10.0
        budget_reason = "סטייה מתונה ברמת התקציב"
    else:
        budget_score = 5.0
        budget_reason = "חריגה מהקטגוריה התקציבית הנבחרת"

    total_score = round(style_score + occasion_score + color_score + budget_score, 1)

    return {
        "item": item,
        "total_score": total_score,
        "breakdown": {
            "style": {"score": style_score, "max": 35, "reason": style_reason},
            "occasion": {"score": occasion_score, "max": 30, "reason": occasion_reason},
            "color_fabric": {"score": color_score, "max": 20, "reason": color_reason},
            "budget": {"score": budget_score, "max": 15, "reason": budget_reason}
        }
    }

def recommend_fashion_look(user_input_json: str) -> str:
    """
    Main entry point for Pyodide WebAssembly execution.
    Takes a JSON string with user profile & 3D garment choices,
    returns a JSON string with the highest-scoring recommendation.
    """
    try:
        user_profile = json.loads(user_input_json)
    except Exception as e:
        return json.dumps({"error": f"Invalid JSON payload: {str(e)}"})

    evaluations = [calculate_affinity(item, user_profile) for item in CATALOG]
    evaluations.sort(key=lambda x: x["total_score"], reverse=True)

    top_pick = evaluations[0]
    result = {
        "status": "success",
        "engine": "AI Fashion Lab Deterministic Rule-Based Matrix v1.0",
        "recommendation": top_pick["item"],
        "total_score": top_pick["total_score"],
        "breakdown": top_pick["breakdown"],
        "alternatives_count": len(evaluations) - 1,
        "user_inputs_received": user_profile
    }

    return json.dumps(result, ensure_ascii=False)


# CLI test execution for local verification
if __name__ == "__main__":
    sample_input = {
        "style": "classic_couture",
        "occasion": "gala_evening",
        "budget": "high_couture",
        "colorHex": "#C5A059",
        "fabric": "silk",
        "silhouette": "evening"
    }
    output = recommend_fashion_look(json.dumps(sample_input))
    print(output)
`;

class PythonFashionEngine {
  constructor() {
    this.pyodide = null;
    this.engineMode = null; // 'pyodide', 'local-python', or 'static-js'
    this.isLoading = false;
    this.isReady = false;
    this.pythonSource = PYTHON_RECOMMENDER_SOURCE;

    // Default user inputs
    this.userPreferences = {
      style: 'classic_couture',
      occasion: 'gala_evening',
      budget: 'high_couture'
    };

    // UI elements
    this.statusBadge = document.getElementById('pyodide-status-badge');
    this.resultContainer = document.getElementById('python-result-container');
    this.codeViewer = document.getElementById('python-code-viewer');
    this.toggleCodeBtn = document.getElementById('btn-toggle-code');
    this.recalculateBtn = document.getElementById('btn-recalculate-python');

    this.init();
  }

  async init() {
    this.setupUIListeners();
    this.listenTo3DStudioUpdates();

    // Try fetching external python/recommender.py if served over HTTP
    try {
      const res = await fetch('python/recommender.py');
      if (res.ok) {
        this.pythonSource = await res.text();
        console.log('[PythonEngine] Loaded python/recommender.py from disk.');
      }
    } catch (e) {
      console.log('[PythonEngine] Using bundled Python recommender source (file:// mode).');
    }

    // Populate code viewer
    if (this.codeViewer) {
      this.codeViewer.textContent = this.pythonSource.trim();
    }

    // Preload Pyodide when user reaches Slide 5 or clicks Slide 7
    window.addEventListener('slidechange', (e) => {
      if (e.detail.slideNumber >= 5 && !this.isReady && !this.isLoading) {
        this.loadPyodideRuntime();
      }
      if (e.detail.slideNumber === 7 && this.isReady) {
        this.runRecommendation();
      }
    });

    // If starting on Slide 7
    if (window.location.hash === '#slide-7') {
      this.loadPyodideRuntime();
    }
  }

  async loadPyodideRuntime() {
    if (this.isLoading || this.isReady) return;
    this.isLoading = true;
    this.updateStatus('מאתחל מנוע Python...', 'loading');

    try {
      // First use the project's local Python server, when available.
      // This runs the SAME python/recommender.py with native Python, not JS.
      const healthResponse = await fetch('/api/health', { cache: 'no-store' });
      if (healthResponse.ok && (await healthResponse.json()).engine === 'local-python') {
        this.engineMode = 'local-python';
        this.isReady = true;
        this.isLoading = false;
        this.updateStatus('מנוע Python מקומי פעיל', 'ready');
        await this.runRecommendation();
        return;
      }
    } catch (_) {
      // If served as a static website, use in-browser Pyodide instead.
    }

    try {
      if (typeof loadPyodide === 'undefined') {
        await this.loadScript('https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js');
      }
      this.pyodide = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
      });
      await this.pyodide.runPythonAsync(this.pythonSource);
      this.engineMode = 'pyodide';
      this.isReady = true;
      this.isLoading = false;
      this.updateStatus('Python / Pyodide פעיל בדפדפן', 'ready');
      await this.runRecommendation();
    } catch (err) {
      console.error('[PythonEngine] Failed to initialize Pyodide:', err);
      this.isLoading = false;
      if (typeof window.fashionStaticRecommend === 'function') {
        this.engineMode = 'static-js';
        this.isReady = true;
        this.updateStatus('חישוב JavaScript בדפדפן (גיבוי ל-Python)', 'ready');
        await this.runRecommendation();
      } else {
        this.updateStatus('מנוע ההמלצות אינו זמין', 'error');
        this.showRuntimeError('לא ניתן להפעיל את מנוע ההמלצות.');
      }
    }
  }

  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  }

  listenTo3DStudioUpdates() {
    window.addEventListener('garmentUpdated', (e) => {
      this.updateActiveGarmentPills(e.detail);
      // Auto recalculate if on Slide 7
      if (this.isReady && window.aiFashionLab?.controller?.currentIndex === 6) {
        this.runRecommendation();
      }
    });
  }

  updateActiveGarmentPills(state) {
    const colorBadge = document.getElementById('summary-pill-color');
    const fabricBadge = document.getElementById('summary-pill-fabric');
    const silhouetteBadge = document.getElementById('summary-pill-silhouette');

    if (colorBadge && state.colorHex) {
      const hexStr = typeof state.colorHex === 'number' 
        ? '#' + state.colorHex.toString(16).padStart(6, '0').toUpperCase() 
        : state.colorHex;
      colorBadge.style.backgroundColor = hexStr;
      colorBadge.setAttribute('title', hexStr);
    }

    if (fabricBadge && state.fabric) {
      const fabricNames = { silk: 'משי סאטן', matte: 'פשתן מאט', velvet: 'קטיפה זוהרת' };
      fabricBadge.textContent = fabricNames[state.fabric] || state.fabric;
    }

    if (silhouetteBadge && state.silhouette) {
      const silNames = { evening: 'ערב זורם', column: 'קולום ישר', avantgarde: 'אוונגרד אוריגמי' };
      silhouetteBadge.textContent = silNames[state.silhouette] || state.silhouette;
    }
  }

  setupUIListeners() {
    // Style Pills
    document.querySelectorAll('[data-py-style]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-py-style]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.userPreferences.style = btn.dataset.pyStyle;
        this.runRecommendation();
      });
    });

    // Occasion Pills
    document.querySelectorAll('[data-py-occasion]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-py-occasion]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.userPreferences.occasion = btn.dataset.pyOccasion;
        this.runRecommendation();
      });
    });

    // Budget Pills
    document.querySelectorAll('[data-py-budget]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-py-budget]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.userPreferences.budget = btn.dataset.pyBudget;
        this.runRecommendation();
      });
    });

    // Recalculate button
    if (this.recalculateBtn) {
      this.recalculateBtn.addEventListener('click', () => {
        if (!this.isReady) {
          this.loadPyodideRuntime();
        } else {
          this.runRecommendation();
        }
      });
    }

    // Toggle Python Code Viewer
    if (this.toggleCodeBtn) {
      this.toggleCodeBtn.addEventListener('click', () => {
        const frame = document.getElementById('python-code-frame');
        if (frame) {
          const isCollapsed = frame.style.display === 'none' || frame.classList.contains('collapsed');
          if (isCollapsed) {
            frame.style.display = 'block';
            frame.classList.remove('collapsed');
            this.toggleCodeBtn.textContent = '▲ הסתר קוד פייתון (Hide Source)';
          } else {
            frame.style.display = 'none';
            frame.classList.add('collapsed');
            this.toggleCodeBtn.textContent = '▼ הצג קוד פייתון אמיתי (View Python Source)';
          }
        }
      });
    }
  }

  updateStatus(text, state = 'ready') {
    if (!this.statusBadge) return;
    this.statusBadge.textContent = text;
    this.statusBadge.className = `pyodide-status ${state}`;
  }

  getUserPayload() {
    const garmentState = window.aiFashionLab?.state || {};
    
    // Convert hex integer to string '#C5A059'
    let colorHex = garmentState.colorHex || '#C5A059';
    if (typeof colorHex === 'number') {
      colorHex = '#' + colorHex.toString(16).padStart(6, '0').toUpperCase();
    }

    return {
      style: this.userPreferences.style,
      occasion: this.userPreferences.occasion,
      budget: this.userPreferences.budget,
      colorHex: colorHex,
      fabric: garmentState.fabric || 'silk',
      silhouette: garmentState.silhouette || 'evening'
    };
  }

  async runRecommendation() {
    if (!this.isReady) {
      await this.loadPyodideRuntime();
      return;
    }

    const payload = this.getUserPayload();
    const payloadJson = JSON.stringify(payload);

    try {
      this.updateStatus('מחשב ציון התאמה בפייתון...', 'computing');

      // Native server and Pyodide run Python. Static GitHub Pages fallback mirrors the rules in JavaScript.
      let result;
      if (this.engineMode === 'local-python') {
        const response = await fetch('/api/recommend', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payloadJson,
          cache: 'no-store'
        });
        if (!response.ok) throw new Error(`Local Python server returned HTTP ${response.status}`);
        result = await response.json();
      } else if (this.engineMode === 'static-js') {
        result = window.fashionStaticRecommend(payload);
      } else {
        const pyFunc = this.pyodide.globals.get('recommend_fashion_look');
        const resultJsonStr = pyFunc(payloadJson);
        result = JSON.parse(resultJsonStr);
      }
      if (result.status !== 'success') throw new Error(result.error || 'Python returned an invalid result');

      this.updateStatus(this.engineMode === 'local-python' ? 'מנוע Python מקומי פעיל' : this.engineMode === 'static-js' ? 'חישוב JavaScript בדפדפן (גיבוי ל-Python)' : 'Python / Pyodide פעיל בדפדפן', 'ready');
      this.renderRecommendationResult(result);

      // Save to global state for Slide 10 Digital Look Passport
      if (window.aiFashionLab) {
        window.aiFashionLab.recommendation = result;
        // Persist successful real Python results across navigation and refreshes.
        try { sessionStorage.setItem('aiFashionLab:lastRecommendation', JSON.stringify(result)); }
        catch (storageError) { console.warn('[PythonEngine] Session storage unavailable:', storageError); }
        window.dispatchEvent(new CustomEvent('recommendationUpdated', { detail: result }));
      }
    } catch (err) {
      if (window.aiFashionLab) window.aiFashionLab.recommendation = null;
      try { sessionStorage.removeItem('aiFashionLab:lastRecommendation'); } catch (_) {}
      window.dispatchEvent(new CustomEvent('recommendationUpdated', { detail: null }));
      console.error('[PythonEngine] Error executing Python recommendation:', err);
      this.updateStatus('שגיאה בחישוב Python. נסי שוב.', 'error');
      this.showRuntimeError('חישוב Python נכשל, ולכן לא הוצג ציון.');
    }
  }

  renderRecommendationResult(data) {
    if (!this.resultContainer) return;
    const rec = data.recommendation;
    const score = data.total_score;
    const breakdown = data.breakdown;

    this.resultContainer.innerHTML = `
      <div class="recommendation-result-card">
        <div class="rec-card-header">
          <div>
            <span class="slide-tag" style="margin: 0;">${rec.visual_badge || 'HAUTE COUTURE'}</span>
            <h3 class="rec-title-he">${rec.title_he}</h3>
            <span class="rec-title-en" dir="ltr">${rec.title_en}</span>
          </div>
          <div class="rec-score-circle">
            <span class="score-number">${score}</span>
            <span class="score-label">ציון התאמה</span>
          </div>
        </div>

        <p class="rec-desc-he">${rec.description_he}</p>

        <!-- Transparent Python Scoring Breakdown -->
        <div class="score-breakdown-grid">
          <div class="breakdown-pill">
            <div class="pill-head">
              <span>התאמת סגנון (Style Fit)</span>
              <strong>+${breakdown.style.score} / ${breakdown.style.max}</strong>
            </div>
            <p class="pill-reason">${breakdown.style.reason}</p>
          </div>

          <div class="breakdown-pill">
            <div class="pill-head">
              <span>אירוע וסילואט (Occasion &amp; Cut)</span>
              <strong>+${breakdown.occasion.score} / ${breakdown.occasion.max}</strong>
            </div>
            <p class="pill-reason">${breakdown.occasion.reason}</p>
          </div>

          <div class="breakdown-pill">
            <div class="pill-head">
              <span>צבע ומירקם בד (Color &amp; Fabric)</span>
              <strong>+${breakdown.color_fabric.score} / ${breakdown.color_fabric.max}</strong>
            </div>
            <p class="pill-reason">${breakdown.color_fabric.reason}</p>
          </div>

          <div class="breakdown-pill">
            <div class="pill-head">
              <span>התאמה לתקציב (Budget Fit)</span>
              <strong>+${breakdown.budget.score} / ${breakdown.budget.max}</strong>
            </div>
            <p class="pill-reason">${breakdown.budget.reason}</p>
          </div>
        </div>

        <div class="rec-styling-tip">
          <strong>טיפ סטיילינג אלגוריתמי:</strong> ${rec.styling_notes_he}
        </div>
      </div>
    `;
  }

  showRuntimeError(message) {
    if (this.resultContainer) {
      this.resultContainer.textContent = message;
      this.resultContainer.setAttribute('role', 'alert');
    }
  }

}

// Global exposure
if (typeof window !== 'undefined') {
  window.PythonFashionEngine = PythonFashionEngine;
}
