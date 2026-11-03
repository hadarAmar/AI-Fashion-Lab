/** AI Fashion Lab — live final look passport (Milestone 4). */
(() => {
  'use strict';
  const colors = {'#C5A059':'זהב שמפניה','#D8CFF2':'לילך','#1C1B1A':'שחור אובסידיאן','#FAF7F2':'שנהב','#284B3D':'ירוק אמרלד'};
  const fabrics = {silk:'משי סאטן',matte:'פשתן מאט',velvet:'קטיפה'};
  const cuts = {evening:'שמלת ערב זורמת',column:'גזרה ישרה',avantgarde:'גזרה פיסולית'};
  const styles = {classic_couture:'קוטור קלאסי',minimalist:'מינימליזם',avantgarde:'אוונגרד'};
  const budgets = {accessible_luxury:'יוקרה נגישה',high_couture:'קוטור עילי',collector_edition:'מהדורת אספנים'};
  const occasions = {gala_evening:'ערב חגיגי',cocktail_premiere:'אירוע קוקטייל',runway_show:'תצוגת אופנה',daytime_atelier:'אירוע יום'};
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const getHex = (raw) => (typeof raw === 'number' ? `#${raw.toString(16).padStart(6,'0')}` : String(raw || '#C5A059')).toUpperCase();

  function updatePassport() {
    const root = document.getElementById('passport-preview');
    const printButton = document.getElementById('passport-print');
    if (!root) return;
    const lab = window.aiFashionLab || {};
    let result = lab.recommendation;
    // If the application was refreshed between slides, recover the last
    // genuinely computed Python result instead of showing a fixed example.
    if (!result) {
      try {
        const saved = sessionStorage.getItem('aiFashionLab:lastRecommendation');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed?.status === 'success' && parsed.recommendation && parsed.user_inputs_received) {
            result = parsed;
            if (window.aiFashionLab) window.aiFashionLab.recommendation = parsed;
          }
        }
      } catch (error) { console.warn('[Passport] Could not restore saved result:', error); }
    }
    if (!result || result.status !== 'success' || !result.recommendation) {
      root.innerHTML = '<p class="passport-empty">עדיין אין המלצה מחושבת. בשקופית 6 עצבי את הבגד, ובשקופית 7 הפעילי את מנוע ה-Python.</p><button type="button" class="btn-nav primary passport-action" id="passport-go-engine">למנוע ההמלצות ←</button>';
      if (printButton) printButton.disabled = true;
      return;
    }
    const inputs = result.user_inputs_received || {};
    const garment = lab.state || {};
    const color = getHex(inputs.colorHex || garment.colorHex);
    const rec = result.recommendation;
    const score = Number(result.total_score);
    root.innerHTML = `
      <div class="passport-result-head"><span class="passport-look-badge">${escapeHTML(rec.visual_badge || 'DIGITAL COUTURE')}</span><strong class="passport-result-score">${Number.isFinite(score) ? score.toFixed(1).replace(/\.0$/,'') : '—'}<small>/100</small></strong></div>
      <h4 class="passport-look-title">${escapeHTML(rec.title_he)}</h4>
      <p class="passport-look-english" dir="ltr">${escapeHTML(rec.title_en)}</p>
      <div class="passport-meta-list">
        <div class="passport-meta-item"><span>סגנון אישי</span><strong>${escapeHTML(styles[inputs.style] || inputs.style || '—')}</strong></div>
        <div class="passport-meta-item"><span>אירוע</span><strong>${escapeHTML(occasions[inputs.occasion] || inputs.occasion || '—')}</strong></div>
        <div class="passport-meta-item"><span>תקציב</span><strong>${escapeHTML(budgets[inputs.budget] || inputs.budget || '—')}</strong></div>
        <div class="passport-meta-item"><span>הגזרה שבחרת</span><strong>${escapeHTML(cuts[inputs.silhouette] || inputs.silhouette || '—')}</strong></div>
        <div class="passport-meta-item"><span>בד</span><strong>${escapeHTML(fabrics[inputs.fabric] || inputs.fabric || '—')}</strong></div>
        <div class="passport-meta-item"><span>צבע</span><strong class="passport-color-field"><i class="passport-color-swatch" style="background:${/^#[0-9A-F]{6}$/.test(color)?color:'#C5A059'}"></i>${escapeHTML(colors[color] || color)}</strong></div>
      </div>
      <p class="passport-reason">${escapeHTML(rec.styling_notes_he || '')}</p>
      <p class="passport-engine-label">חושב על ידי Python — מערכת ניקוד שקופה וכללית להמחשה בלבד</p>`;
    if (printButton) printButton.disabled = false;
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('recommendationUpdated', updatePassport);
    window.addEventListener('garmentUpdated', updatePassport);
    window.addEventListener('slidechange', e => {if (e.detail.slideNumber === 10) updatePassport();});
    document.getElementById('passport-preview')?.addEventListener('click', e => {
      if (e.target.closest('#passport-go-engine')) window.aiFashionLab?.controller?.goToSlide(6);
    });
    document.getElementById('passport-print')?.addEventListener('click', () => window.print());
    document.getElementById('passport-restart')?.addEventListener('click', () => {
      window.aiFashionLab.controller?.goToSlide(0);
    });
    updatePassport();
  });
})();
