/* ═══════════════════════════════════════════
   Page: Work — data, rendering, interactions
   ═══════════════════════════════════════════ */

const workEntries = [
  {
    num: '01', cat: 'AI', catColor: 'red', catRotate: -1.4,
    title: 'AI INITIATIVES & THERAPY INTELLIGENCE',
    metric: 'NPS 7.5 \u2192 9.2',
    oneliner: 'Shipped two AI systems across 15K sessions/month \u2014 a user session summariser and a real-time therapist copilot',
    bullets: [
      'Designed and shipped AI workflows serving 12,000 users and 15,000 therapy sessions/month',
      'User-side: session summarisation \u2192 structured homework \u2192 product nudges \u2192 32% improvement in 3+ session adherence',
      'Shipped Arva AI \u2014 simulated-user training copilot for new therapist onboarding across different user types',
      'Real-time therapist copilot: session summaries, user history, upcoming nudges, live therapy cues \u2014 810 admin hours saved',
      'Privacy-first: consent layer for every data point, full anonymisation before GenAI processing on sensitive clinical data',
      'Owned prompt design, clinical validation, and monitoring frameworks \u2014 cost, usage, failure flags \u2014 for first-time AI rollout',
    ]
  },
  {
    num: '02', cat: 'Platform', catColor: 'blue', catRotate: 1.2,
    title: 'IN-PERSON COUNSELLING INFRASTRUCTURE',
    metric: '30 \u2192 150 geo',
    oneliner: 'Built geo-fenced Expert App from scratch \u2014 scaled offline therapy across mining sites, remote locations, blue collar India',
    bullets: [
      'Zero prior monitoring system existed \u2014 built entire workflow from ground up',
      'Geo-fenced check-in/checkout, OTP session initiation, structured consent and psychoeducation flows',
      'Deployed across white collar offices, blue collar sites, mining locations, remote geographies across India',
      'Now handles 1,200 in-person sessions/month across 150 geographies',
    ]
  },
  {
    num: '03', cat: 'Retention', catColor: 'red', catRotate: -0.8,
    title: 'EVERYDAY ENGAGEMENT PLATFORM',
    metric: '35% \u2192 45%',
    oneliner: 'Built a parallel engagement layer so users had a reason to open the app every day \u2014 not just on therapy days',
    bullets: [
      'Identified 65% of engagement was therapy-only \u2014 a retention risk since users can\u2019t do therapy daily',
      'Shifted non-therapy engagement from 35% \u2192 45% across 9,000 users over 2 years',
      'Neuroscience-based games across 5 cognitive skills \u2014 6,500 users in 3 months, D7 retention 19%',
      'Stepathon, Sleepathon, 21-day challenges \u2014 50 organisations, 2,000 participants',
      'Offline-to-online activation reaching 15,000 users',
      'Issue-based journeys: yoga, smoking cessation, digital detox, maternity \u2014 mixed expert/product/social formats',
      'Instrumented full retention funnels using PostHog for the first time',
    ]
  },
  {
    num: '04', cat: 'Automation', catColor: 'blue', catRotate: 1.5,
    title: 'SERVICING & SUPPORT AUTOMATION',
    metric: '1,420 hrs/mo',
    oneliner: 'Replaced manual ops with a bot-first support layer and automated no-show detection \u2014 without hurting quality',
    bullets: [
      '720 hrs/month of manual servicing + 700 hrs/month of support = 1,420 hrs eliminated',
      'Bot-first support layer \u2014 human escalation only at second layer',
      'Automated no-show detection: system detects absence in real time, reaches out to user or expert immediately',
      'Maintained pre-automation baselines: expert no-show 0.75%, user no-show 20% of total appointments',
    ]
  },
  {
    num: '05', cat: 'Leadership', catColor: 'red', catRotate: -1.1,
    title: 'SPRINT & RELEASE INFRASTRUCTURE',
    metric: '65% \u2192 20%',
    oneliner: 'Stepped up after senior PM left \u2014 rebuilt delivery for a 13-person team from a broken setup in 3 sprints',
    bullets: [
      'Inherited 65% sprint spillover, no release governance, no QA process',
      'Led 2 PMs, 2 QAs, 2 designers, 7 engineers \u2014 full cross-functional ownership',
      'Introduced test-case-driven QA, daily standups, stakeholder UAT reviews',
      'Designed bandwidth model: 60% core features, 30% client customisations, 10% bugs + mentoring',
      'Cut spillover to 20\u201330% in 3 sprints, weekly release cadence established',
      'Centralised bug escalation under PM \u2014 SLA dropped from 72 hrs to 12 hrs',
    ]
  },
  {
    num: '06', cat: 'Personalisation', catColor: 'blue', catRotate: 0.9,
    title: 'ORG TIERING & SLOT PERSONALISATION',
    metric: '+42% slots',
    oneliner: 'Built dynamic tiering system so high-value users stopped losing slots to no-shows and casual users',
    bullets: [
      'Identified inequitable slot access \u2014 critical users had no priority over no-show users',
      'Tiering factors: org business priority, user type (first-time, critical, regular), behaviour (no-shows, cancellations)',
      'Premium users got priority access to high-quality slots and top-rated experts',
      'Increased slot visibility 42% for premium users \u2014 overall utilisation impact just 5%',
    ]
  },
  {
    num: '07', cat: 'AI Tooling', catColor: 'red', catRotate: -0.6,
    title: 'PM-LED PROTOTYPING & DEMO CULTURE',
    metric: '+40% collab',
    oneliner: 'Changed how the team ships \u2014 PMs now show working demos before engineering writes a line of code',
    bullets: [
      'Shifted from PRD-only handoffs to demo-ready builds using Claude Code, Lovable, Google AI Studio',
      'Decomposed stories into structured epics and user stories \u2014 reduced ambiguity for engineering',
      'PM-led pilots for journaling, habit building, impact journeys \u2014 validated with real users before full build',
      'Increased cross-functional collaboration by 40%',
    ]
  },
  {
    num: '08', cat: 'Community', catColor: 'blue', catRotate: 1.3,
    title: 'COMMUNITY-LED GROWTH \u2014 SEEKHO',
    metric: '500+ outcomes',
    oneliner: 'Moved 13,000 users from WhatsApp to an app and built a learning community that actually got people jobs',
    bullets: [
      '300+ user interviews, 25+ platform analyses to inform strategy',
      'Built goal-oriented community: mentor sessions, peer discussions, hackathons using AARRR framework',
      '55% activation, 100% engagement improvement, 20% DAU growth, 50% MAU retention',
      '500+ users secured jobs or promotions through improved content discovery',
    ]
  },
];

function buildWorkList() {
  const container = document.getElementById('work-list');
  if (!container) return;
  container.innerHTML = '';

  workEntries.forEach((entry, idx) => {
    // Insert divider between featured (first 3) and the rest
    if (idx === 3) {
      const divider = document.createElement('div');
      divider.className = 'work-divider';
      divider.textContent = 'more things I shipped \u2014';
      container.appendChild(divider);
    }

    const card = document.createElement('article');
    card.className = 'work-card' + (idx < 3 ? ' featured' : '');
    card.innerHTML = `
      <svg class="work-card-border" preserveAspectRatio="none"><path d=""/></svg>
      <div class="work-cat-label ${entry.catColor}" style="transform:rotate(${entry.catRotate}deg)">${entry.cat}</div>
      <div class="work-card-header">
        <div class="work-num">${entry.num}</div>
        <div class="work-title">${entry.title}</div>
        <div class="work-metric">${entry.metric}</div>
      </div>
      <div class="work-oneliner">${entry.oneliner}</div>
      <ul class="work-bullets">
        ${entry.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <button class="work-read-btn" data-cs-index="${idx}">read case study \u2192</button>
    `;

    card.querySelector('.work-read-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openCaseStudy(idx);
    });

    container.appendChild(card);
  });

  requestAnimationFrame(() => remeasureWorkBorders());
}

function remeasureWorkBorders() {
  document.querySelectorAll('.work-card').forEach(card => {
    const svg = card.querySelector('.work-card-border');
    if (!svg) return;
    const w = card.offsetWidth, h = card.offsetHeight;
    if (w === 0 || h === 0) return;
    const r = (s) => (Math.random() - 0.5) * s;
    const d = `M${2+r(3)} ${2+r(2)} L${w-2+r(3)} ${1+r(2)} L${w-1+r(3)} ${h-2+r(2)} L${3+r(3)} ${h-1+r(2)} Z`;
    let path = svg.querySelector('path');
    path.setAttribute('d', d);
  });
}

// Build on load
buildWorkList();
