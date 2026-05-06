/* ═══════════════════════════════════════════
   Page: Work — data, rendering, interactions
   ═══════════════════════════════════════════ */

const workEntries = [
  {
    num: '01', cat: 'Deep Dive', catColor: 'red', catRotate: -1.6,
    title: 'AI AT YOURDOST \u2014 THE FULL DEEP DIVE',
    metric: 'all of it',
    oneliner: 'A consolidated walkthrough of every AI bet I led at YourDOST \u2014 user-facing therapy AI plus the operational automation behind the business',
    bullets: [
      'Three-stage user-facing AI: pre-session Copilot, in-session transcription + auto-notes, post-session summary + goals + homework',
      'Arva AI \u2014 agent that runs therapist hiring screens and structured onboarding/training',
      'Operational automation: Freshdesk ticket bot, reminder + tracking flows, supervision AI for negative-sentiment session review',
      'The single consolidated narrative of how we made therapy more structured for users and operationally scalable for the business \u2014 without growing the team linearly',
    ],
    link: 'demo/workatyourdost'
  },
  {
    num: '02', cat: 'AI', catColor: 'red', catRotate: -1.4,
    title: 'AI INITIATIVES & THERAPY INTELLIGENCE',
    metric: 'NPS 7.5 \u2192 9.2',
    oneliner: 'Shipped two AI systems across 15K sessions/month \u2014 a user session summariser and a real-time therapist copilot',
    bullets: [
      'Therapy-session NPS lifted 7.5 \u2192 9.2 at 15K sessions/month \u2014 the volume gives the lift weight',
      '3-session adherence improved 32% via session summarisation \u2192 structured homework \u2192 product nudges',
      'Inherited zero AI in production and zero clinical-AI guardrails',
      'Designed and shipped two AI systems serving 12K users / 15K sessions/month: a user-side summariser and a real-time therapist copilot',
      'Owned prompt design, clinical validation, monitoring (cost, usage, failure flags), and the consent + anonymisation layer for sensitive clinical data',
      'Therapist copilot saved 810 admin hours/month; Arva AI (simulated-user copilot) cut new-therapist onboarding time across user types',
    ]
  },
  {
    num: '03', cat: 'Platform', catColor: 'blue', catRotate: 1.2,
    title: 'IN-PERSON COUNSELLING INFRASTRUCTURE',
    metric: '30 \u2192 150 geo',
    oneliner: 'Built geo-fenced Expert App from scratch \u2014 scaled offline therapy across mining sites, remote locations, blue collar India',
    bullets: [
      'Scaled in-person therapy from 30 \u2192 150 geographies, now running 1,200 sessions/month',
      'Inherited zero monitoring infrastructure for offline sessions \u2014 no check-in, no consent capture, no audit trail',
      'Designed and shipped geo-fenced check-in/checkout, OTP session initiation, structured consent and psychoeducation flows',
      'Rolled out across white-collar offices, blue-collar sites, mining locations, and remote geographies \u2014 first time the platform reached blue-collar India',
    ]
  },
  {
    num: '04', cat: 'Retention', catColor: 'red', catRotate: -0.8,
    title: 'EVERYDAY ENGAGEMENT PLATFORM',
    metric: '35% \u2192 45%',
    oneliner: 'Built a parallel engagement layer so users had a reason to open the app every day \u2014 not just on therapy days',
    bullets: [
      'Non-therapy engagement lifted 35% \u2192 45% across 9,000 users over 2 years',
      '65% of engagement was therapy-only \u2014 a retention risk since users can\u2019t do therapy daily',
      'Built neuroscience-based games across 5 cognitive skills \u2014 6,500 users in 3 months, D7 retention 19%',
      'Ran Stepathon, Sleepathon, and 21-day challenges \u2014 50 organisations, 2,000 participants',
      'Designed issue-based journeys (yoga, smoking cessation, digital detox, maternity) mixing expert / product / social formats',
      'Offline-to-online activation reached 15,000 users; instrumented the platform\u2019s first full retention funnel using PostHog',
    ]
  },
  {
    num: '05', cat: 'Automation', catColor: 'blue', catRotate: 1.5,
    title: 'SERVICING & SUPPORT AUTOMATION',
    metric: '1,420 hrs/mo',
    oneliner: 'Replaced manual ops with a bot-first support layer and automated no-show detection \u2014 without hurting quality',
    bullets: [
      '1,420 ops hrs/month eliminated \u2014 every additional 1K users used to add ~80 ops hours; now 0',
      'Inherited a fully manual ops layer: 720 hrs/month of servicing + 700 hrs/month of support, scaling linearly with users',
      'Designed a bot-first support layer with human escalation only at L2',
      'Built real-time no-show detection \u2014 system detects absence and reaches out to user or expert immediately',
      'Held quality baselines post-automation: expert no-show 0.75%, user no-show 20% of total appointments',
    ]
  },
  {
    num: '06', cat: 'Leadership', catColor: 'red', catRotate: -1.1,
    title: 'SPRINT & RELEASE INFRASTRUCTURE',
    metric: '65% \u2192 20%',
    oneliner: 'Stepped up after senior PM left \u2014 rebuilt delivery for a 13-person team from a broken setup in 3 sprints',
    bullets: [
      'Sprint spillover cut 65% \u2192 20% in 3 sprints; weekly release cadence established',
      'Senior PM exited mid-roadmap \u2014 inherited a 13-person squad with no release governance and no QA process',
      'Took full cross-functional ownership of 7 engineers, 2 PMs, 2 QAs, 2 designers',
      'Introduced test-case-driven QA, daily standups, and stakeholder UAT reviews',
      'Designed a bandwidth model: 60% core features, 30% client customisations, 10% bugs + mentoring',
      'Centralised bug escalation under PM \u2014 SLA dropped 72 hrs \u2192 12 hrs',
    ]
  },
  {
    num: '07', cat: 'Personalisation', catColor: 'blue', catRotate: 0.9,
    title: 'ORG TIERING & SLOT PERSONALISATION',
    metric: '+42% slots',
    oneliner: 'Built dynamic tiering system so high-value users stopped losing slots to no-shows and casual users',
    bullets: [
      'Slot visibility lifted +42% for premium / repeat-user segment \u2014 the cohort that drives platform retention and B2B contract value',
      'Found that critical users had no priority over no-show or casual users \u2014 high-value slots were lost to low-priority bookings',
      'Designed a dynamic tiering model factoring org business priority, user type (first-time, critical, regular), and behaviour (no-shows, cancellations)',
      'Premium users routed to high-quality slots and top-rated experts; overall utilisation moved just 5% \u2014 by design, since the goal was redistribution, not growth',
    ]
  },
  {
    num: '08', cat: 'AI Tooling', catColor: 'red', catRotate: -0.6,
    title: 'PM-LED PROTOTYPING & DEMO CULTURE',
    metric: '+40% collab',
    oneliner: 'Changed how the team ships \u2014 PMs now show working demos before engineering writes a line of code',
    bullets: [
      'Cross-functional collaboration up 40% after shifting PMs from PRD-only handoffs to demo-ready builds',
      'Inherited a culture where engineering wrote the first prototype \u2014 slow loops, ambiguous specs, late-stage rework',
      'Introduced PM-led prototyping using Claude Code, Lovable, and Google AI Studio \u2014 demos in days, not sprints',
      'Decomposed stories into structured epics + user stories to cut ambiguity at handoff',
      'Validated journaling, habit-building, and impact-journey pilots with real users before full engineering build',
    ]
  },
  {
    num: '09', cat: 'Community', catColor: 'blue', catRotate: 1.3,
    title: 'COMMUNITY-LED GROWTH \u2014 SEEKHO',
    metric: '500+ outcomes',
    oneliner: 'Moved 13,000 users from WhatsApp to an app and built a learning community that actually got people jobs',
    bullets: [
      '500+ users secured jobs or promotions through the new in-app learning community',
      'Started with 13K users on WhatsApp groups — no funnel visibility, no retention data, no path to monetisation',
      'Ran 300+ user interviews and 25+ platform analyses to inform the migration strategy',
      'Built a goal-oriented community using the AARRR framework: mentor sessions, peer discussions, hackathons',
      'Hit 55% activation, 100% engagement lift, 20% DAU growth, 50% MAU retention post-migration',
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
      if (entry.link) {
        window.location.href = entry.link;
      } else {
        openCaseStudy(idx);
      }
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
