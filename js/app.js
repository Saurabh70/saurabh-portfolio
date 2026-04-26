/* ═══════════════════════════════════════════
   App — navigation, loader (fast), floating CTA
   ═══════════════════════════════════════════ */

// ── Loader quick-read facts ──────────────
const loaderFacts = [
  { text: 'built 8 products in 3 years', token: 'red' },
  { text: 'once cut sprint spillover from 65% to 20%', token: 'ink' },
  { text: 'saved 1,420 ops hours every month', token: 'red' },
  { text: 'shipped AI to 15K sessions/month', token: 'blue' },
  { text: 'scaled from 30 to 150 geographies', token: 'ink' },
  { text: '300+ user interviews at Seekho', token: 'blue' },
  { text: 'NPS went from 7.5 to 9.2 on his watch', token: 'red' },
  { text: '13,000 users migrated with zero data loss', token: 'blue' },
  { text: 'led a 13-person squad across 7 products', token: 'ink' },
];

let lastFactIndex = -1;

function getRandomFact() {
  let idx;
  do { idx = Math.floor(Math.random() * loaderFacts.length); } while (idx === lastFactIndex);
  lastFactIndex = idx;
  return loaderFacts[idx];
}

const loader = document.getElementById('page-loader');
const loaderFactEl = loader.querySelector('.loader-fact');

function showLoader() {
  const fact = getRandomFact();
  loaderFactEl.textContent = '\u201C' + fact.text + '\u201D';
  loaderFactEl.style.color = getComputedStyle(document.documentElement).getPropertyValue('--' + fact.token).trim();
  loader.classList.remove('visible');
  void loader.offsetWidth;
  loader.classList.add('visible');
}

function hideLoader() {
  loader.classList.remove('visible');
}

// ── Page navigation (4 pages) ────────────
const tabs = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');
let currentPage = 'me';
let isTransitioning = false;

const PAGE_INIT = {
  me() {
    triggerDrawIns(document.getElementById('page-me'));
  },
  work() {
    setTimeout(remeasureWorkBorders, 60);
  },
  skills() {
    setTimeout(buildSkillsScatter, 60);
  },
  contact() {
    triggerDrawIns(document.getElementById('page-contact'));
  },
};

function switchPage(targetId) {
  if (targetId === currentPage || isTransitioning) return;
  isTransitioning = true;

  showLoader();

  // Content swaps at 150ms (behind the overlay)
  setTimeout(() => {
    pages.forEach(p => p.classList.remove('active'));
    tabs.forEach(t => { t.classList.remove('active'); t.removeAttribute('aria-current'); });

    const target = document.getElementById('page-' + targetId);
    const tab = document.querySelector(`[data-page="${targetId}"]`);
    if (target && tab) {
      void target.offsetWidth;
      target.classList.add('active');
      tab.classList.add('active');
      tab.setAttribute('aria-current', 'page');
      currentPage = targetId;
      if (PAGE_INIT[targetId]) PAGE_INIT[targetId]();
    }
  }, 150);

  // Hide loader — total 600ms
  setTimeout(() => {
    hideLoader();
    isTransitioning = false;
  }, 600);
}

tabs.forEach(t => t.addEventListener('click', () => switchPage(t.dataset.page)));

// ── Intro sequence (first load only) ─────
function runIntro() {
  const intro = document.getElementById('intro');
  if (!intro) { initMePage(); return; }

  // Already seen this session? Skip.
  if (sessionStorage.getItem('sk-intro-seen')) {
    intro.remove();
    document.body.classList.remove('intro-active');
    initMePage();
    return;
  }

  document.body.classList.add('intro-active');

  // Wave 1: 0–1s (doodles), Wave 2: 1.2s (name), Wave 3: 1.9–2.3s (underline+role),
  // Wave 4: 2.7–3.5s (personality). Last piece lands ~4.2s. Hold, then reveal.
  setTimeout(() => {
    intro.classList.add('done');
    document.body.classList.remove('intro-active');
    sessionStorage.setItem('sk-intro-seen', '1');

    setTimeout(() => {
      initMePage();
      intro.remove();
    }, 700);
  }, 5200);
}

// ── Boot ─────────────────────────────────
window.addEventListener('load', runIntro);

// ── Floating CTA — show after scrolling ──
const floatingCTA = document.getElementById('floating-cta');
let lastScrollY = 0;

function checkFloatingCTA() {
  // Show after hero is out of view (roughly 300px)
  // But hide on the contact page (redundant there)
  const show = window.scrollY > 200 && currentPage !== 'contact';
  floatingCTA.classList.toggle('show', show);
}

window.addEventListener('scroll', checkFloatingCTA, { passive: true });
// Also check on page switch
const origSwitchPage = switchPage;

// ── Resize handler ───────────────────────
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (currentPage === 'skills') buildSkillsScatter();
    if (currentPage === 'work') remeasureWorkBorders();
  }, 250);
});
