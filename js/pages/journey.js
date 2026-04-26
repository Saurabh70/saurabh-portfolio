/* ═══════════════════════════════════════════
   Page: Journey — timeline animations + nav
   ═══════════════════════════════════════════ */

// Draw the wobbly timeline SVG line
function drawTimelineLine() {
  const line = document.querySelector('.timeline-line path');
  if (!line) return;
  let len;
  try { len = line.getTotalLength(); } catch (e) { len = 800; }
  line.style.strokeDasharray = len;
  line.style.strokeDashoffset = len;
  line.style.transition = 'stroke-dashoffset 1.8s ease';
  requestAnimationFrame(() => {
    line.style.strokeDashoffset = '0';
  });
}

// Stagger entry cards in
function animateTimelineEntries() {
  const entries = document.querySelectorAll('.tl-entry');
  entries.forEach((entry, i) => {
    setTimeout(() => {
      entry.classList.add('visible');

      // Ladder steps inside this entry — stagger bottom to top
      const steps = entry.querySelectorAll('.tl-ladder-step');
      if (steps.length) {
        const stepsArr = Array.from(steps).reverse();
        stepsArr.forEach((step, j) => {
          setTimeout(() => step.classList.add('visible'), 150 + j * 150);
        });
      }
    }, 200 + i * 200);
  });
}

// Draw rough borders on entry cards
function drawCardBorders() {
  document.querySelectorAll('.tl-card').forEach(card => {
    const svg = card.querySelector('.tl-card-border');
    if (!svg) return;
    const w = card.offsetWidth;
    const h = card.offsetHeight;
    if (w === 0) return;
    const r = (s) => (Math.random() - 0.5) * s;
    const d = `M${2+r(3)} ${2+r(2)} L${w-2+r(3)} ${1+r(2)} L${w-1+r(3)} ${h-2+r(2)} L${2+r(3)} ${h-1+r(2)} Z`;
    let path = svg.querySelector('path');
    if (!path) {
      path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      svg.appendChild(path);
    }
    path.setAttribute('d', d);
  });
}

// Build the wobbly SVG line path based on container height
function buildTimelineSVG() {
  const container = document.querySelector('.timeline');
  const svg = document.querySelector('.timeline-line');
  if (!container || !svg) return;
  const h = container.offsetHeight;
  if (h === 0) return;

  svg.setAttribute('viewBox', `0 0 6 ${h}`);
  svg.style.height = h + 'px';

  // Build wobbly vertical path
  const segs = Math.ceil(h / 80);
  let d = 'M3 0';
  for (let i = 1; i <= segs; i++) {
    const y = Math.min(i * 80, h);
    const cx = 3 + (Math.random() - 0.5) * 3;
    d += ` Q${cx.toFixed(1)} ${(y - 40).toFixed(0)} 3 ${y}`;
  }
  let path = svg.querySelector('path');
  if (!path) {
    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.appendChild(path);
  }
  path.setAttribute('d', d);
}

// Full init — called when Journey page becomes visible
function initJourneyPage() {
  // Reset states
  document.querySelectorAll('.tl-entry').forEach(e => e.classList.remove('visible'));
  document.querySelectorAll('.tl-ladder-step').forEach(s => s.classList.remove('visible'));

  requestAnimationFrame(() => {
    buildTimelineSVG();
    drawCardBorders();
    drawTimelineLine();
    animateTimelineEntries();
  });
}

// [read →] buttons — navigate to work page and expand that row
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.tl-read-btn');
  if (!btn) return;

  const idx = parseInt(btn.dataset.workIndex, 10);
  if (isNaN(idx)) return;

  // Switch to work page
  if (typeof switchPage === 'function') {
    switchPage('work');
  }

  // After loader finishes, scroll to the target card
  setTimeout(() => {
    const cards = document.querySelectorAll('.work-card');
    const target = cards[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Flash highlight
      target.style.boxShadow = '0 0 0 3px ' + getComputedStyle(document.documentElement).getPropertyValue('--red').trim();
      setTimeout(() => { target.style.boxShadow = ''; }, 2000);
    }
  }, 2200);
});
