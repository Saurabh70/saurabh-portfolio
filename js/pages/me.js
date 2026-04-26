/* ═══════════════════════════════════════════
   Page: Me — init animations
   ═══════════════════════════════════════════ */
function initMePage() {
  const hero = document.querySelector('.hero-name');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(16px)';
    hero.style.transition = 'opacity 0.6s, transform 0.6s';
    setTimeout(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 100);
  }
  triggerDrawIns(document.getElementById('page-me'));
}
