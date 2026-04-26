/* ═══════════════════════════════════════════
   Page: Skills — corkboard scatter + popup
   ═══════════════════════════════════════════ */

// Color tokens resolved from CSS variables at render time
function themeColor(token) {
  return getComputedStyle(document.documentElement).getPropertyValue('--' + token).trim();
}

const skillsData = [
  // Large (core) — [label, x%, y%, size, tier, colorToken]
  ['0\u21921 Product Development',    8,   6,  2.1,  'large', 'ink'],
  ['Retention & Growth',              52,   3,  2.0,  'large', 'ink'],
  ['AI Product Ownership',            12,  22,  2.05, 'large', 'ink'],
  ['Cross-functional Leadership',     48,  20,  1.9,  'large', 'ink'],
  ['Sprint & Delivery',               6,   40,  1.95, 'large', 'ink'],
  // Medium
  ['User Research',                   58,  38,  1.25, 'medium', 'ink'],
  ['Funnel Analytics',                34,  42,  1.2,  'medium', 'red'],
  ['Prompt Design',                   76,  10,  1.2,  'medium', 'blue'],
  ['Rapid Prototyping',               68,  28,  1.15, 'medium', 'blue'],
  ['Ops Automation',                  10,  56,  1.25, 'medium', 'red'],
  ['Platform Thinking',               48,  54,  1.2,  'medium', 'ink'],
  ['A/B Testing',                     74,  50,  1.15, 'medium', 'red'],
  // Small (supporting)
  ['SQL \u00B7 Amplitude \u00B7 Mixpanel \u00B7 PostHog', 4,  72, 0.88, 'small', 'ink-muted'],
  ['Figma',                           70,  66,  0.9,  'small', 'ink-muted'],
  ['Claude Code \u00B7 Lovable \u00B7 Google AI Studio', 30, 70, 0.85, 'small', 'ink-muted'],
  ['Agile \u00B7 Epics \u00B7 User Stories', 8, 86, 0.88, 'small', 'ink-muted'],
  ['Stakeholder Management',          56,  82,  1.0,  'small', 'ink-muted'],
];

/* ═══════════════════════════════════════════
   Skill detail content
   ═══════════════════════════════════════════ */
const skillDetails = {
  '0\u21921 Product Development': {
    body: 'Built products from scratch with no prior system, team, or process in place. Defined scope, assembled cross-functional squads, and shipped to production.',
    projects: ['AI Therapy Intelligence', 'In-Person Counselling App', 'Servicing Automation', 'Engagement Platform'],
  },
  'Retention & Growth': {
    body: 'Diagnosed why users weren\u2019t coming back and built engagement systems to fix it \u2014 games, challenges, journeys, nudges, multi-channel loops.',
    projects: ['Everyday Engagement Platform', 'Seekho Community', 'AI Therapy Intelligence'],
  },
  'AI Product Ownership': {
    body: 'Owned AI features end to end \u2014 from writing prompts and designing workflows to clinical validation, monitoring, and production rollout.',
    projects: ['AI Therapy Intelligence', 'Arva AI Copilot', 'PM Prototyping Culture'],
  },
  'Cross-functional Leadership': {
    body: 'Led teams of 13 across engineering, QA, design, and junior PMs. Ran standups, UATs, sprint planning, and stakeholder reviews.',
    projects: ['Sprint & Release Infrastructure', 'In-Person Counselling App', 'Engagement Platform'],
  },
  'Sprint & Delivery': {
    body: 'Rebuilt broken delivery processes after senior PM exit. Introduced QA frameworks, bandwidth allocation, and release governance.',
    projects: ['Sprint & Release Infrastructure', 'PM Prototyping Culture'],
  },
  'User Research': {
    body: 'Ran 300+ user interviews, synthesised insights to inform onboarding, content discovery, and engagement design decisions.',
    projects: ['Seekho Community', 'Everyday Engagement Platform'],
  },
  'Funnel Analytics': {
    body: 'Instrumented activation, drop-off, repeat usage, and conversion funnels using PostHog, Amplitude, and backend logs.',
    projects: ['Everyday Engagement Platform', 'Seekho Community', 'AI Therapy Intelligence'],
  },
  'Prompt Design': {
    body: 'Wrote and iterated prompts for therapy session summarisation, homework generation, training simulations, and support automation.',
    projects: ['AI Therapy Intelligence', 'Arva AI', 'Servicing Automation'],
  },
  'Rapid Prototyping': {
    body: 'Built working demos using Claude Code, Lovable, and Google AI Studio before engineering commitment \u2014 cutting validation time from weeks to days.',
    projects: ['PM Prototyping Culture', 'Journaling', 'Habit Building', 'Impact Journeys'],
  },
  'Ops Automation': {
    body: 'Mapped manual workflows, identified automation opportunities, and shipped bot-first systems that eliminated 1,420 hours/month of manual work.',
    projects: ['Servicing & Support Automation', 'Internal Tooling'],
  },
  'Platform Thinking': {
    body: 'Designed systems that served multiple user types simultaneously \u2014 users, therapists, enterprise clients, and ops teams \u2014 on the same platform.',
    projects: ['Org Tiering & Slot Personalisation', 'In-Person Counselling App', 'AI Therapy Intelligence'],
  },
  'A/B Testing': {
    body: 'Ran experiments on engagement formats, nudge channels, session design, and content types. Deprioritised what didn\u2019t move retention metrics.',
    projects: ['Everyday Engagement Platform', 'Engagement Loops'],
  },
  'Figma': {
    body: 'Designed wireframes, flows, and prototypes for key product features before handing to design team. Used to align stakeholders before engineering starts.',
    projects: ['Expert App', 'Engagement Platform', 'Session Workflows'],
  },
  'SQL \u00B7 Amplitude \u00B7 Mixpanel \u00B7 PostHog': {
    body: 'Queried product data, built dashboards, tracked funnels, and measured feature impact across retention, activation, and engagement metrics.',
    projects: ['All major initiatives'],
  },
  'Claude Code \u00B7 Lovable \u00B7 Google AI Studio': {
    body: 'Used these to build functional prototypes independently \u2014 user-facing demos with Lovable, internal tools with AI Studio, and complex workflows with Claude Code.',
    projects: ['PM Prototyping Culture', 'Pilot Projects'],
  },
  'Agile \u00B7 Epics \u00B7 User Stories': {
    body: 'Broke down product roadmaps into epics and user stories to make engineering execution predictable and reduce sprint ambiguity.',
    projects: ['Sprint & Release Infrastructure', 'All product verticals'],
  },
  'Stakeholder Management': {
    body: 'Managed CXO-level reviews, enterprise client customisation requests, clinical team sign-offs, and cross-functional alignment across ops and tech.',
    projects: ['In-Person Counselling App', 'Org Tiering', 'AI Therapy Intelligence'],
  },
};

/* ═══════════════════════════════════════════
   Popup logic
   ═══════════════════════════════════════════ */
const popupOverlay  = document.getElementById('skill-popup-overlay');
const popupEl       = document.getElementById('skill-popup');
const popupTitle    = document.getElementById('skill-popup-title');
const popupBody     = document.getElementById('skill-popup-body');
const popupProjects = document.getElementById('skill-popup-projects');
const popupClose    = document.getElementById('skill-popup-close');

function openSkillPopup(skillName) {
  const detail = skillDetails[skillName];
  if (!detail) return;

  popupTitle.textContent = skillName;
  popupBody.textContent = detail.body;
  popupProjects.innerHTML = '';

  detail.projects.forEach(p => {
    const pill = document.createElement('span');
    pill.className = 'skill-pill';
    pill.textContent = p;
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSkillPopup();
      // Navigate to work page
      if (typeof switchPage === 'function') switchPage('work');
    });
    popupProjects.appendChild(pill);
  });

  // Draw the rough border
  requestAnimationFrame(() => {
    const w = popupEl.offsetWidth;
    const h = popupEl.offsetHeight;
    const r = (s) => (Math.random() - 0.5) * s;
    const d = `M${3+r(3)} ${3+r(2)} L${w-3+r(3)} ${2+r(2)} L${w-2+r(3)} ${h-3+r(2)} L${2+r(3)} ${h-2+r(2)} Z`;
    const path = popupEl.querySelector('.skill-popup-border path');
    path.setAttribute('d', d);
  });

  popupOverlay.classList.add('open');
}

function closeSkillPopup() {
  popupOverlay.classList.remove('open');
}

// Close on overlay click
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) closeSkillPopup();
});

// Close on X
popupClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeSkillPopup();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSkillPopup();
});

// Mobile flow tags — click to open popup
document.querySelectorAll('.sft[data-skill]').forEach(tag => {
  tag.style.cursor = 'pointer';
  tag.addEventListener('click', () => openSkillPopup(tag.dataset.skill));
});


/* ═══════════════════════════════════════════
   Desktop scatter — build + circle + click
   ═══════════════════════════════════════════ */

function wobbleCirclePath(cx, cy, rx, ry) {
  const pts = 8;
  const segs = [];
  for (let i = 0; i <= pts; i++) {
    const angle = (i / pts) * Math.PI * 2;
    const jx = (Math.random() - 0.5) * rx * 0.25;
    const jy = (Math.random() - 0.5) * ry * 0.3;
    const x = cx + Math.cos(angle) * (rx + jx);
    const y = cy + Math.sin(angle) * (ry + jy);
    segs.push([x, y]);
  }
  let d = `M${segs[0][0].toFixed(1)} ${segs[0][1].toFixed(1)}`;
  for (let i = 1; i < segs.length; i++) {
    const prev = segs[i - 1];
    const curr = segs[i];
    const cpx = (prev[0] + curr[0]) / 2 + (Math.random() - 0.5) * rx * 0.18;
    const cpy = (prev[1] + curr[1]) / 2 + (Math.random() - 0.5) * ry * 0.18;
    d += ` Q${cpx.toFixed(1)} ${cpy.toFixed(1)} ${curr[0].toFixed(1)} ${curr[1].toFixed(1)}`;
  }
  return d;
}

function buildSkillsScatter() {
  const container = document.getElementById('skills-scatter');
  if (!container) return;
  container.querySelectorAll('.sk, .sk-circle-wrap').forEach(el => el.remove());

  skillsData.forEach((s, i) => {
    const [label, x, y, size, tier, colorToken] = s;
    const color = themeColor(colorToken);
    const rot = ((Math.random() * 6) - 3).toFixed(1);

    const node = document.createElement('div');
    node.className = `sk sk-${tier}`;
    node.textContent = label;
    node.style.cssText = `left:${x}%;top:${y}%;font-size:${size}rem;color:${color};transform:rotate(${rot}deg);`;
    node.dataset.idx = i;
    node.dataset.skill = label;
    container.appendChild(node);

    const wrap = document.createElement('div');
    wrap.className = 'sk-circle-wrap';
    wrap.dataset.pair = i;
    container.appendChild(wrap);

    requestAnimationFrame(() => {
      const nw = node.offsetWidth;
      const nh = node.offsetHeight;
      const padX = 14, padY = 8;
      const svgW = nw + padX * 2;
      const svgH = nh + padY * 2;

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', svgW);
      svg.setAttribute('height', svgH);
      svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);
      svg.style.overflow = 'visible';

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const d = wobbleCirclePath(svgW / 2, svgH / 2, svgW / 2 - 2, svgH / 2 - 2);
      path.setAttribute('d', d);
      const circColor = tier === 'large' ? themeColor('red') : tier === 'medium' ? themeColor('blue') : themeColor('ink-faint');
      path.setAttribute('stroke', circColor);

      let pathLen;
      svg.appendChild(path);
      wrap.appendChild(svg);
      wrap.style.cssText = `left:${node.offsetLeft - padX}px;top:${node.offsetTop - padY}px;width:${svgW}px;height:${svgH}px;`;

      requestAnimationFrame(() => {
        try { pathLen = path.getTotalLength(); } catch (e) { pathLen = 300; }
        path.style.setProperty('--clen', pathLen);
        path.style.strokeDasharray = pathLen;
        path.style.strokeDashoffset = pathLen;
      });

      // Hover: draw circle
      node.addEventListener('mouseenter', () => {
        path.style.strokeDashoffset = '0';
      });
      node.addEventListener('mouseleave', () => {
        requestAnimationFrame(() => {
          path.style.strokeDashoffset = pathLen || 300;
        });
      });

      // Click: open popup
      node.addEventListener('click', () => {
        openSkillPopup(label);
      });
    });
  });
}
