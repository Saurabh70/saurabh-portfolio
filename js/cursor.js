/* ═══════════════════════════════════════════
   Custom ink-drop cursor + trail
   ═══════════════════════════════════════════ */
const cursor = document.getElementById('ink-cursor');
let lastTrailTime = 0;
const isMobile = () => window.innerWidth <= 768;

document.addEventListener('mousemove', (e) => {
  if (isMobile()) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.style.opacity = '1';
  const now = Date.now();
  if (now - lastTrailTime > 60) {
    lastTrailTime = now;
    const d = document.createElement('div');
    d.className = 'ink-trail';
    d.style.left = e.clientX + 'px';
    d.style.top = e.clientY + 'px';
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 1200);
  }
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});
