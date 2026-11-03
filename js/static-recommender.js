/** Static-site fallback for GitHub Pages. This mirrors python/recommender.py rules.
 * Transparency: this path executes JavaScript, NOT Python. The Python source remains authoritative.
 */
(function () {
 const CATALOG = [{"id":"look-01","title_en":"The Champagne Aurora Gown","title_he":"שמלת ערב זוהר השמפניה","style":"classic_couture","silhouette":"evening","primary_fabric":"silk","compatible_colors":["#C5A059","#FAF7F2"],"occasions":["gala_evening","runway_show"],"budget_tier":"high_couture","description_he":"שמלת ערב מלכותית ממשי סאטן נוזלי עם מפתח גב פיסולי ונפילה עשירה של קפלים ארכיטקטוניים.","styling_notes_he":"מומלץ לשלב עם תכשיטי זהב צהוב מעודנים וקלאץ' אובסידיאן מלוטש.","visual_badge":"HAUTE COUTURE ÉLITE"},{"id":"look-02","title_en":"Architectural Column Noir","title_he":"שמלת קולום אדריכלית אובסידיאן","style":"minimalist","silhouette":"column","primary_fabric":"matte","compatible_colors":["#1C1B1A","#FAF7F2","#C5A059"],"occasions":["cocktail_premiere","daytime_atelier"],"budget_tier":"accessible_luxury","description_he":"סילואט עמוד נקי ומאופק בהשראת האדריכלות המודרניסטית, בגזרה ישרה ומדויקת המדגישה קווי אורך נקיים.","styling_notes_he":"התאמה מושלמת לעקבי שפיץ חדים ומעיל טרנץ' מחויט בגוון קאמל.","visual_badge":"CONTEMPORARY PURISM"},{"id":"look-03","title_en":"Origami Velvet Avant-Garde","title_he":"שמלת אוריגמי קטיפה אוונגרדית","style":"avantgarde","silhouette":"avantgarde","primary_fabric":"velvet","compatible_colors":["#D8CFF2","#284B3D","#1C1B1A"],"occasions":["runway_show","cocktail_premiere"],"budget_tier":"collector_edition","description_he":"יצירה אוונגרדית המשלבת קיפולי אוריגמי תלת-ממדיים בקטיפה עמוקה, המייצרת משחקי אור וצל דרמטיים.","styling_notes_he":"עוצבה עבור שבוע האופנה; פריט הצהרה שאינו זקוק לאביזרים נלווים נוספים.","visual_badge":"AVANT-GARDE COUTURE"},{"id":"look-04","title_en":"Lavender Silk Column","title_he":"שמלת קולום משי לילך פסטל","style":"minimalist","silhouette":"column","primary_fabric":"silk","compatible_colors":["#D8CFF2","#FAF7F2"],"occasions":["cocktail_premiere","daytime_atelier"],"budget_tier":"accessible_luxury","description_he":"עדינות פיוטית של משי סאטן בגוון לילך רך. גזרה ישרה עם שסע נסתר ותנועה מרחפת.","styling_notes_he":"שילוב אידיאלי עם פלטת איפור טבעית ונעלי סירה בגוון שנהב.","visual_badge":"ETHEREAL CHIC"},{"id":"look-05","title_en":"Emerald Velvet Gala Drape","title_he":"שמלת נשף קטיפה אמרלד מלכותית","style":"classic_couture","silhouette":"evening","primary_fabric":"velvet","compatible_colors":["#284B3D","#C5A059"],"occasions":["gala_evening","runway_show"],"budget_tier":"collector_edition","description_he":"שמלת נשף מרשימה בקטיפת אמרלד עמוקה עם מחוך מובנה וחצאית נשפכת הנפרשת בתנועה.","styling_notes_he":"מראה אריסטוקרטי מובהק הדורש עגילי אמרלד עדינים וצעיף משי בהיר.","visual_badge":"ROYAL GALA"},{"id":"look-06","title_en":"Ivory Sculptural Modernist","title_he":"שמלת שנהב פיסולית מודרניסטית","style":"avantgarde","silhouette":"column","primary_fabric":"matte","compatible_colors":["#FAF7F2","#C5A059"],"occasions":["daytime_atelier","cocktail_premiere"],"budget_tier":"high_couture","description_he":"עיצוב אדריכלי מינימליסטי בפשתן מאט דחוס. חיתוכים א-סימטריים מעודנים המשלבים דיוק ונוחות.","styling_notes_he":"לוק מושלם לפתיחת גלריה או אירוע תרבות עילי.","visual_badge":"ARCHITECTURAL ATELIER"}];
 const BUDGET = {accessible_luxury:1,high_couture:2,collector_edition:3};
 function affinity(item,user) {
  const style=user.style||'classic_couture';
  const styleScore=item.style===style?35:((style==='classic_couture'||style==='avantgarde')&&item.style==='minimalist'?22:14);
  const styleReason=item.style===style?`התאמה מושלמת לסגנון הנבחר (${style})`:styleScore===22?'קרבה אסתטית וקווים עיצוביים משלימים':'סגנון מנוגד היוצר קונטרסט מעניין';
  const occasion=user.occasion||'gala_evening',silhouette=user.silhouette||'evening';
  const occasionScore=(item.occasions.includes(occasion)?18:8)+(item.silhouette===silhouette?12:6);
  const color=user.colorHex||'#C5A059',fabric=user.fabric||'silk';
  const colorScore=(item.compatible_colors.includes(color)?10:5)+(item.primary_fabric===fabric?10:6);
  const ub=BUDGET[user.budget]||2, ib=BUDGET[item.budget_tier]||2,diff=Math.abs(ub-ib);
  const budgetScore=ib>ub?0:diff===0?15:diff===1?10:5;
  const budgetReason=ib>ub?'הפריט חורג מרמת התקציב שנבחרה':diff===0?'עמידה מלאה בהגדרות התקציב':diff===1?'סטייה מתונה ברמת התקציב':'חריגה מהקטגוריה התקציבית הנבחרת';
  return {item,total_score:Math.round((styleScore+occasionScore+colorScore+budgetScore)*10)/10,breakdown:{
   style:{score:styleScore,max:35,reason:styleReason},
   occasion:{score:occasionScore,max:30,reason:`התאמה לקוד הלבוש של האירוע וסילואט ${item.silhouette}`},
   color_fabric:{score:colorScore,max:20,reason:`שילוב מרקם ${fabric} והרמוניה צבעונית מדויקת`},
   budget:{score:budgetScore,max:15,reason:budgetReason}
  }};
 }
 window.fashionStaticRecommend=function(user) {
  const sorted=CATALOG.map(item=>affinity(item,user)).sort((a,b)=>b.total_score-a.total_score);
  return {status:'success',engine:'AI Fashion Lab Deterministic Rule-Based Matrix v1.0 (JavaScript static fallback)',recommendation:sorted[0].item,total_score:sorted[0].total_score,breakdown:sorted[0].breakdown,alternatives_count:sorted.length-1,user_inputs_received:user};
 };
})();
