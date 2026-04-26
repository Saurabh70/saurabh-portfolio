/* ═══════════════════════════════════════════
   Case Study Drawer
   ═══════════════════════════════════════════ */

const csDrawer = document.getElementById('cs-drawer');
const csPanel = document.getElementById('cs-panel');
const csBackdrop = document.getElementById('cs-backdrop');

function openCaseStudy(index) {
  const data = caseStudies[index];
  if (!data) return;

  csPanel.innerHTML = buildCaseStudyHTML(data, index);
  csDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Back button
  csPanel.querySelector('.cs-back').addEventListener('click', closeCaseStudy);
}

function closeCaseStudy() {
  csDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

csBackdrop.addEventListener('click', closeCaseStudy);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && csDrawer.classList.contains('open')) closeCaseStudy();
});

function wavySepSVG() {
  return `<svg class="cs-sep" viewBox="0 0 600 8" preserveAspectRatio="none"><path d="M0 4 Q150 1 300 5 Q450 9 600 3"/></svg>`;
}

function buildCaseStudyHTML(data, index) {
  if (!data.full) {
    // Placeholder
    return `
      <button class="cs-back">\u2190 back to work</button>
      <div class="cs-label">case study \u00B7 ${String(index + 1).padStart(2, '0')}</div>
      <h2 class="cs-title">${data.title}</h2>
      <div class="cs-subtitle">${data.subtitle || ''}</div>
      <div class="cs-metrics">${(data.metrics || []).map(m => `<span class="cs-metric-pill">${m}</span>`).join('')}</div>
      ${wavySepSVG()}
      <div class="cs-placeholder">full case study coming soon</div>
    `;
  }

  const f = data.full;
  return `
    <button class="cs-back">\u2190 back to work</button>
    <div class="cs-label">case study \u00B7 ${String(index + 1).padStart(2, '0')}</div>
    <h2 class="cs-title">${data.title}</h2>
    <div class="cs-subtitle">${data.subtitle}</div>
    <div class="cs-metrics">${data.metrics.map(m => `<span class="cs-metric-pill">${m}</span>`).join('')}</div>
    ${wavySepSVG()}

    <div class="cs-section">
      <span class="cs-section-label">the problem</span>
      <svg class="cs-margin-bracket" viewBox="0 0 18 60" fill="none"><path d="M14 2 C6 2 4 10 4 30 C4 50 6 58 14 58"/></svg>
      <div class="cs-body">${f.problem}</div>
    </div>

    <div class="cs-section">
      <span class="cs-section-label">what we built</span>
      <div class="cs-subcards">
        ${f.built.map((card, i) => `
          <div class="cs-subcard" style="transform:rotate(${[-0.6, 0.8, -1][i % 3]}deg);">
            <div class="cs-subcard-title">${card.title}</div>
            <div class="cs-subcard-body">${card.body}</div>
            <div class="cs-subcard-metric">${card.metric}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="cs-section">
      <span class="cs-section-label">the hard part</span>
      <svg class="cs-margin-icon" width="24" height="28" viewBox="0 0 24 28" fill="none">
        <rect x="4" y="12" width="16" height="14" rx="2" stroke="var(--ink)" stroke-width="1.2" opacity="0.3"/>
        <path d="M8 12 V8 C8 4 16 4 16 8 V12" stroke="var(--ink)" stroke-width="1.2" fill="none" opacity="0.3" stroke-linecap="round"/>
        <circle cx="12" cy="20" r="2" stroke="var(--ink)" stroke-width="1" fill="none" opacity="0.3"/>
      </svg>
      <div class="cs-body">${f.hardPart}</div>
    </div>

    <div class="cs-section">
      <span class="cs-section-label">my role</span>
      <ul class="cs-bullets">
        ${f.role.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="cs-section">
      <span class="cs-section-label">what moved</span>
      <div class="cs-outcome-grid">
        ${f.outcomes.map(o => `
          <div>
            <div class="cs-outcome-num">${o.num}</div>
            <div class="cs-outcome-label">${o.label}</div>
          </div>
        `).join('')}
      </div>
      <div class="cs-body cs-body-italic">${f.outcomeLine}</div>
    </div>

    <div class="cs-section">
      <span class="cs-section-label">honest reflection</span>
      <svg class="cs-margin-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" style="top:4px;">
        <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8Z" stroke="var(--red)" stroke-width="1" fill="none" opacity="0.3" stroke-linecap="round"/>
      </svg>
      <div class="cs-body cs-body-muted">${f.reflection}</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   Case Study Data
   ═══════════════════════════════════════════ */
const caseStudies = [
  // 01 — AI Initiatives (FULL)
  {
    title: 'AI INITIATIVES & THERAPY INTELLIGENCE',
    subtitle: 'mental health platform \u00B7 2024',
    metrics: ['NPS 7.5 \u2192 9.2', '32% therapy adherence \u2191', '810 hrs saved', '15K sessions/month'],
    full: {
      problem: 'Therapy at scale has a structure problem. Sessions happen, but without follow-through \u2014 users forget action items, therapists spend hours on admin, and new therapists have no safe space to train. We were running 15,000+ sessions a month across 12,000 users with no AI layer. Everything was manual, inconsistent, and undocumented.',
      built: [
        {
          title: 'USER SESSION INTELLIGENCE',
          body: 'After every therapy session, our AI summarised the conversation, extracted action items, and structured them into a homework plan. This was then pushed back to the user through our existing product nudge workflows \u2014 WhatsApp, in-app, email. Users stopped losing the thread between sessions.',
          metric: '32% more users completing 3+ sessions',
        },
        {
          title: 'ARVA AI',
          body: 'New therapists had no safe space to practice. Arva AI simulated real users \u2014 different emotional states, therapy styles, presenting problems. Trainees could conduct full mock sessions, get feedback, and build confidence before touching a real patient. We could also test therapist quality at scale.',
          metric: 'training time reduced, quality standardised',
        },
        {
          title: 'REAL-TIME COPILOT',
          body: 'During live sessions, therapists got a sidebar \u2014 user history, previous session summaries, upcoming appointment nudges, and live cues to keep sessions structured. Admin work that used to happen after sessions now happened automatically. Therapists could focus on the human, not the paperwork.',
          metric: '810 admin hours saved/month',
        },
      ],
      hardPart: 'This was clinical data. Everything required explicit user consent \u2014 not blanket ToS consent, but per-session, per-data-point consent. Users chose what to include, what to exclude, whether to use AI at all. Before any data touched a GenAI model, it was fully anonymised. We built the consent layer before we built the AI layer.',
      role: [
        'Mapped therapy workflows end to end with clinical team before writing a single prompt',
        'Wrote and iterated all prompts \u2014 summarisation, homework extraction, simulation scenarios',
        'Ran validation sessions with therapists and clinical leads before production rollout',
        'Built monitoring framework: cost per session, failure rate, hallucination flags, usage patterns',
        'Worked with data team to design anonymisation pipeline',
        'Shipped in phases \u2014 summarisation first, copilot second, training tool third',
      ],
      outcomes: [
        { num: '7.5 \u2192 9.2', label: 'NPS score' },
        { num: '32%', label: 'therapy adherence improvement' },
        { num: '810 hrs', label: 'admin saved/month' },
        { num: '15K+', label: 'sessions/month at scale' },
      ],
      outcomeLine: 'First AI features we shipped to production. Everything after this was faster because we built the trust and the infrastructure here.',
      reflection: 'We underestimated how long clinical validation would take. The consent layer was right to build first but slowed rollout by 3 weeks. If I did this again I\u2019d run clinical review in parallel with prompt development, not sequentially. Also \u2014 therapist adoption needed more change management than we planned for.',
    }
  },
  // 02 — In-Person Counselling (placeholder)
  {
    title: 'IN-PERSON COUNSELLING INFRASTRUCTURE',
    subtitle: 'geo-scale platform \u00B7 2023\u20132024',
    metrics: ['30 \u2192 150 geographies', '1,200 sessions/month'],
  },
  // 03 — Engagement Platform (placeholder)
  {
    title: 'EVERYDAY ENGAGEMENT PLATFORM',
    subtitle: 'retention & engagement \u00B7 2023\u20132024',
    metrics: ['35% \u2192 45% engagement', '9K users', 'D7 retention 19%'],
  },
  // 04 — Servicing Automation (placeholder)
  {
    title: 'SERVICING & SUPPORT AUTOMATION',
    subtitle: 'ops automation \u00B7 2023',
    metrics: ['1,420 hrs/month eliminated'],
  },
  // 05 — Sprint Infrastructure (placeholder)
  {
    title: 'SPRINT & RELEASE INFRASTRUCTURE',
    subtitle: 'delivery & leadership \u00B7 2023',
    metrics: ['65% \u2192 20% spillover'],
  },
  // 06 — Slot Personalisation (placeholder)
  {
    title: 'ORG TIERING & SLOT PERSONALISATION',
    subtitle: 'platform personalisation \u00B7 2024',
    metrics: ['+42% slot visibility'],
  },
  // 07 — PM Prototyping (placeholder)
  {
    title: 'PM-LED PROTOTYPING & DEMO CULTURE',
    subtitle: 'AI tooling & culture \u00B7 2024',
    metrics: ['+40% collaboration'],
  },
  // 08 — Seekho (placeholder)
  {
    title: 'COMMUNITY-LED GROWTH \u2014 SEEKHO',
    subtitle: 'edtech community \u00B7 2021\u20132022',
    metrics: ['500+ career outcomes', '13K migrated'],
  },
];
