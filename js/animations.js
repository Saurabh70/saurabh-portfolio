/* ═══════════════════════════════════════════
   SVG draw-in animations
   ═══════════════════════════════════════════ */
function triggerDrawIns(container) {
  container.querySelectorAll('.draw-in').forEach((el, i) => {
    el.classList.remove('drawn');
    let len;
    try { len = el.getTotalLength(); } catch (e) { len = 300; }
    el.style.setProperty('--dash-len', len);
    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    setTimeout(() => el.classList.add('drawn'), 80 + i * 100);
  });
}
