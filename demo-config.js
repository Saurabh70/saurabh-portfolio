/* ═══════════════════════════════════════════
   DEMO CONFIG — add companies here
   Each key is the URL slug: /demo/[slug]
   ═══════════════════════════════════════════ */

const DEMO_COMPANIES = {
  "zenda": {
    companyName: "Zenda",
    role: "Product Manager",
    headline: "What I\u2019d build at Zenda.",
    subline: "A product perspective from Saurabh Kumar \u00B7 Prepared for Zenda\u2019s PM role",

    intro: `I wanted to go beyond a cover letter and actually show how I think about product problems.<br><br>So I spent time researching Zenda \u2014 reading reviews, understanding the business model, mapping out what parents actually experience. This document walks through what I found, where I think the biggest opportunities are, and one idea I\u2019ve prototyped to show my approach.<br><br>I hope it gives you a useful sense of how I work.`,

    understand: {
      title: "What I researched about Zenda",
      content: `The real product Zenda is selling isn\u2019t school fee payments.<br><br>It\u2019s <strong>financial relief and trust for parents</strong>. When a parent opens Zenda, they\u2019re moving money for their child\u2019s education \u2014 the highest-stakes transaction in a family\u2019s life. The app has one job: make that feel safe, simple, and in control.<br><br>Here\u2019s what I found when I dug in:<br><br><strong>The business model is clever but creates a fragile relationship with users.</strong> Zenda signs up schools, schools mandate parents, parents have no choice but to use the app. That\u2019s a captive user base. But captive users who have bad experiences become vocal critics. In UAE and India where parent communities are tight, one bad experience spreads fast. Zenda can\u2019t afford to hide behind the school mandate \u2014 they need parents to actually like the product.<br><br><strong>The market is massive and largely untapped.</strong> Roughly $37 billion processed annually in private school fee payments in GCC, $34 billion in the rest of Middle East and Africa, and $70 billion in India. Fee payments are mostly non-digital, and even where digital, are cumbersome and manual. Zenda has a real first-mover advantage \u2014 but only if the product earns parent trust at scale.<br><br><strong>The real growth opportunity is the time between fee payments.</strong> Parents open Zenda three or four times a year \u2014 when fees are due. That\u2019s it. In between, the app doesn\u2019t exist in their life. But a parent\u2019s relationship with money and their child never stops. They\u2019re saving for trips. Looking for activities. Buying school supplies. Thinking about their child\u2019s future. Zenda already has the trust, the school relationship, and the payment rails. It just needs a reason for parents to come back every week \u2014 not every term. That\u2019s the product opportunity worth building.`
    },

    gaps: {
      title: "The gaps I found",
      intro: "I read the App Store and Play Store reviews carefully. Not the five-star ones \u2014 the ones that tell you what\u2019s actually broken.",
      items: [
        {
          title: "Payment failures with no recovery path",
          content: `When a payment fails on a school fee, it\u2019s not like a failed Netflix charge. Parents panic. Is my child\u2019s enrollment at risk? Did the money leave my account? What do I tell the school?<br><br>Right now there\u2019s no clear recovery flow. Users get a generic error, fall into WhatsApp support, and wait with no timeline. One Play Store reviewer described a large payment failing with no resolution given \u2014 the support agent was rude and provided no escalation path. One App Store user was charged twice and couldn\u2019t get a refund.<br><br>These aren\u2019t edge cases \u2014 they\u2019re the moments that define whether a parent trusts Zenda or fears it.<br><br><em>This is the most urgent and damaging experience on the app today.</em>`
        },
        {
          title: "Payment plan breaks after every major update",
          content: `One reviewer noted the monthly instalment plan had issues three times in three months \u2014 always right after an update, always eventually fixed.<br><br>This is not a tech problem. It\u2019s a release quality and process problem. New features are shipping without proper regression testing on the most critical existing flow. Every time this breaks, Zenda is asking parents to trust them with money again after already failing them.`
        },
        {
          title: "Support doesn\u2019t scale",
          content: `Support is WhatsApp-based and fully human-run. At the start of every school term, thousands of parents pay at the same time. When payments fail at that scale the support queue explodes. There\u2019s no self-serve resolution, no smart escalation, no status update. The user is left waiting and worrying \u2014 about money, about their child\u2019s school, about whether anyone is handling it.`
        },
        {
          title: "No reason to open the app every day",
          content: `Parents open Zenda when a fee is due. Between terms the app is invisible. No savings tools. No activity discovery. No shopping. No reason to come back.<br><br>This is the growth gap. Every engagement metric Zenda cares about \u2014 DAU, MAU, session frequency, marketplace revenue \u2014 lives or dies here. And it\u2019s the one I want to show you how to fix.`
        }
      ]
    },

    whyme: {
      title: "Why I think I\u2019m a good fit",
      intro: "I won\u2019t list my skills. I\u2019ll show you the parallel problems I\u2019ve already solved.",
      rows: [
        {
          problem: "Payment plan breaking after releases",
          mywork: "I inherited a product team with 65% sprint spillover and no release governance after the senior PM left. New features were shipping and breaking existing flows \u2014 exactly what\u2019s happening to Zenda\u2019s payment plan. I introduced regression testing frameworks, stakeholder UATs, daily standups for early blocker detection, and a structured bandwidth model. Cut spillover from 65% to 20% in 3 sprints. Established a weekly predictable release cadence. The payment plan breaking after updates is a solvable process problem \u2014 I\u2019ve solved it."
        },
        {
          problem: "Support not scaling, WhatsApp-dependent",
          mywork: "I replaced 1,420 hours per month of manual support with a bot-first system. Human agents only come in at the second layer \u2014 for cases the bot genuinely can\u2019t resolve. Support didn\u2019t just get cheaper, it got faster and more consistent. Expert no-show rate held at 0.75%, user no-show at 20% \u2014 pre-automation baselines maintained post-automation. Zenda\u2019s support problem is the same problem. I know how to build the system that fixes it."
        },
        {
          problem: "Users only open app when forced to",
          mywork: "This is the exact retention problem I solved at YourDOST. 65% of platform engagement was therapy-only \u2014 mandatory, not habitual. Users had no reason to open the app on non-therapy days. I built neuroscience-based games, social challenges, offline-to-online activation, and issue-based journeys. Shifted non-mandatory engagement from 35% to 45% across 9,000 users over 2 years. Zenda\u2019s between-term engagement gap is the same problem with a different context. I know what it takes to build everyday habits into an app users originally came to for one specific thing."
        },
        {
          problem: "AI opportunity sitting untouched",
          mywork: "I shipped AI in production at 15,000 therapy sessions per month \u2014 not a prototype, a real system. Consent layers, clinical validation, monitoring frameworks for cost, usage, and failure flags. Zenda\u2019s AI opportunity is meaningfully simpler: smart payment reminders, personalised instalment nudges, AI-first support triage. I know exactly how to take this from idea to production because I\u2019ve done the harder version of it."
        },
        {
          problem: "Honest gap \u2014 payment gateway UX",
          mywork: "I haven\u2019t built payment checkout flows before. I\u2019ll say that directly. But I\u2019ve built high-stakes flows where failure has real consequences \u2014 therapy no-shows, OTP failures in remote locations, billing reliability across 150 geographies. The thinking is identical: what does the user need when something goes wrong, and how do you make them feel safe and in control anyway. That\u2019s the skill. The fintech context I\u2019ll learn fast."
        }
      ]
    },

    demo: {
      title: "The Demo \u2014 Zenda for Families",
      intro: `<strong>The idea in one line:</strong> Give parents a reason to open Zenda every week \u2014 not just every term.<br><br><strong>The problem it solves:</strong> Zenda\u2019s biggest untapped opportunity is the time between fee payments. A parent\u2019s relationship with money and their child never stops \u2014 they\u2019re saving for a trip, looking for a swimming class, buying school supplies. Zenda already has their trust and their payment details. It just needs something worth coming back for.<br><br><strong>Zenda for Families</strong> is a new tab inside the existing app. Three things inside it:<br><br><strong>1 \u2014 Child Fund Tracker</strong><br>Parents set a savings goal for their child \u2014 school trip, new laptop, activity fees for the year. They set a target amount and a date. Zenda shows progress, how much to save per month, and a one-tap way to add money. Every time a parent checks progress, they open the app.<br><br><strong>2 \u2014 Activities for Kids</strong><br>Discover and book extracurricular activities \u2014 swimming, coding, art, football, music \u2014 through Zenda. Same model as schools: Zenda partners with providers, parents pay through the app. Finding and paying for kids\u2019 activities today is painful \u2014 WhatsApp numbers, bank transfers, no confirmation. Zenda can make it one tap.<br><br><strong>3 \u2014 Family Shopping</strong><br>Buy everything school-related through Zenda \u2014 uniforms, stationery, textbooks, sports equipment. Not a generic shopping app \u2014 curated for families. \u201CTerm 2 starts in 3 weeks. Here\u2019s what you\u2019ll need. We\u2019ve pre-filled your cart.\u201D One tap to order.`,
      screens: [
        {
          id: 1,
          title: "Home \u2014 Fees Tab",
          description: "The current Zenda experience \u2014 fee payments, upcoming dues, payment history",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <div style="font-weight:700;font-size:15px;">zenda</div>
              <div style="width:28px;height:28px;border-radius:50%;background:#eee;"></div>
            </div>
            <div style="font-size:11px;color:#999;margin-bottom:4px;">Upcoming</div>
            <div style="background:#f8f5ef;border-radius:10px;padding:14px;margin-bottom:12px;border:1px solid #eee;">
              <div style="font-weight:600;margin-bottom:4px;">Term 2 Fees \u2014 AED 12,400</div>
              <div style="font-size:11px;color:#777;">Due 15 May 2026 \u00B7 Dubai International Academy</div>
              <div style="margin-top:10px;background:#D4380D;color:#fff;text-align:center;padding:8px;border-radius:6px;font-weight:600;font-size:12px;">Pay Now</div>
            </div>
            <div style="font-size:11px;color:#999;margin-bottom:4px;">Payment Plan</div>
            <div style="background:#f8f5ef;border-radius:10px;padding:14px;margin-bottom:12px;border:1px solid #eee;">
              <div style="font-weight:600;margin-bottom:2px;">Monthly Instalment</div>
              <div style="font-size:11px;color:#777;">AED 3,100/mo \u00B7 2 of 4 paid</div>
              <div style="background:#e8e3d8;border-radius:4px;height:6px;margin-top:8px;"><div style="background:#D4380D;height:6px;border-radius:4px;width:50%;"></div></div>
            </div>
            <div style="display:flex;justify-content:space-around;padding-top:14px;border-top:1px solid #eee;font-size:10px;color:#999;">
              <div style="text-align:center;"><div style="font-weight:700;color:#D4380D;">Fees</div></div>
              <div style="text-align:center;color:#ccc;">Family</div>
              <div style="text-align:center;color:#ccc;">Activity</div>
            </div>
          </div>`
        },
        {
          id: 2,
          title: "Family Hub \u2014 New Tab",
          description: "The new Zenda for Families tab \u2014 savings goals, activities, and shopping in one place",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-weight:700;font-size:15px;margin-bottom:14px;">Family Hub</div>
            <div style="font-size:11px;color:#999;margin-bottom:6px;">Arya\u2019s goals</div>
            <div style="background:#f8f5ef;border-radius:10px;padding:14px;margin-bottom:10px;border:1px solid #eee;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div><div style="font-weight:600;font-size:12px;">School Trip Fund</div><div style="font-size:11px;color:#777;">AED 800 / 2,000</div></div>
                <div style="font-size:20px;">&#127796;</div>
              </div>
              <div style="background:#e8e3d8;border-radius:4px;height:6px;margin-top:8px;"><div style="background:#2B4EFF;height:6px;border-radius:4px;width:40%;"></div></div>
            </div>
            <div style="background:#f8f5ef;border-radius:10px;padding:14px;margin-bottom:14px;border:1px solid #eee;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div><div style="font-weight:600;font-size:12px;">New Laptop</div><div style="font-size:11px;color:#777;">AED 1,200 / 3,500</div></div>
                <div style="font-size:20px;">&#128187;</div>
              </div>
              <div style="background:#e8e3d8;border-radius:4px;height:6px;margin-top:8px;"><div style="background:#2B4EFF;height:6px;border-radius:4px;width:34%;"></div></div>
            </div>
            <div style="font-size:11px;color:#999;margin-bottom:6px;">This week\u2019s activities</div>
            <div style="display:flex;gap:8px;margin-bottom:14px;">
              <div style="flex:1;background:#E8F5E9;border-radius:8px;padding:10px;text-align:center;font-size:11px;font-weight:600;">&#127946; Swimming<br><span style="font-weight:400;color:#777;">Sat 10am</span></div>
              <div style="flex:1;background:#E3F2FD;border-radius:8px;padding:10px;text-align:center;font-size:11px;font-weight:600;">&#127912; Art Class<br><span style="font-weight:400;color:#777;">Sun 2pm</span></div>
            </div>
            <div style="background:#D4380D;color:#fff;text-align:center;padding:10px;border-radius:8px;font-weight:600;font-size:12px;">+ Add Savings Goal</div>
            <div style="display:flex;justify-content:space-around;padding-top:14px;margin-top:12px;border-top:1px solid #eee;font-size:10px;color:#999;">
              <div style="text-align:center;color:#ccc;">Fees</div>
              <div style="text-align:center;"><div style="font-weight:700;color:#D4380D;">Family</div></div>
              <div style="text-align:center;color:#ccc;">Activity</div>
            </div>
          </div>`
        },
        {
          id: 3,
          title: "Child Fund Tracker",
          description: "Set a savings goal, track progress, add money with one tap",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-size:11px;color:#999;margin-bottom:2px;">\u2190 Back</div>
            <div style="font-weight:700;font-size:15px;margin-bottom:14px;">School Trip Fund &#127796;</div>
            <div style="text-align:center;margin-bottom:14px;">
              <div style="font-size:32px;font-weight:700;color:#2B4EFF;">AED 800</div>
              <div style="font-size:12px;color:#777;">of AED 2,000 \u00B7 due 1 Dec</div>
            </div>
            <div style="background:#e8e3d8;border-radius:4px;height:8px;margin-bottom:18px;"><div style="background:#2B4EFF;height:8px;border-radius:4px;width:40%;"></div></div>
            <div style="background:#f8f5ef;border-radius:10px;padding:14px;margin-bottom:10px;border:1px solid #eee;">
              <div style="font-weight:600;font-size:12px;margin-bottom:4px;">Save AED 171/month to hit your goal</div>
              <div style="font-size:11px;color:#777;">7 months remaining \u00B7 auto-save available</div>
            </div>
            <div style="background:#D4380D;color:#fff;text-align:center;padding:10px;border-radius:8px;font-weight:600;font-size:12px;margin-bottom:10px;">+ Add Money Now</div>
            <div style="background:#f0f0f0;color:#555;text-align:center;padding:10px;border-radius:8px;font-size:12px;">Set Up Auto-Save</div>
            <div style="margin-top:14px;font-size:11px;color:#999;">Recent</div>
            <div style="padding:8px 0;border-bottom:1px solid #eee;font-size:12px;display:flex;justify-content:space-between;"><span>Added funds</span><span style="color:#2B4EFF;">+AED 200</span></div>
            <div style="padding:8px 0;border-bottom:1px solid #eee;font-size:12px;display:flex;justify-content:space-between;"><span>Added funds</span><span style="color:#2B4EFF;">+AED 150</span></div>
          </div>`
        },
        {
          id: 4,
          title: "Activities \u2014 Browse",
          description: "Discover extracurricular activities nearby \u2014 swimming, coding, art, football",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-weight:700;font-size:15px;margin-bottom:4px;">Activities for Arya</div>
            <div style="font-size:11px;color:#777;margin-bottom:12px;">Near Dubai International Academy</div>
            <div style="display:flex;gap:6px;margin-bottom:14px;overflow-x:auto;">
              <div style="padding:6px 14px;border-radius:20px;background:#D4380D;color:#fff;font-size:11px;font-weight:600;white-space:nowrap;">All</div>
              <div style="padding:6px 14px;border-radius:20px;background:#f0ebe0;font-size:11px;white-space:nowrap;">Sports</div>
              <div style="padding:6px 14px;border-radius:20px;background:#f0ebe0;font-size:11px;white-space:nowrap;">Arts</div>
              <div style="padding:6px 14px;border-radius:20px;background:#f0ebe0;font-size:11px;white-space:nowrap;">STEM</div>
              <div style="padding:6px 14px;border-radius:20px;background:#f0ebe0;font-size:11px;white-space:nowrap;">Music</div>
            </div>
            <div style="background:#f8f5ef;border-radius:10px;padding:12px;margin-bottom:10px;border:1px solid #eee;">
              <div style="font-weight:600;font-size:12px;">&#127946; Swimming \u2014 Aqua Stars Academy</div>
              <div style="font-size:11px;color:#777;margin-top:2px;">Sat 10\u201311am \u00B7 1.2km away \u00B7 AED 350/mo</div>
              <div style="font-size:10px;color:#2B4EFF;margin-top:6px;">View Details \u2192</div>
            </div>
            <div style="background:#f8f5ef;border-radius:10px;padding:12px;margin-bottom:10px;border:1px solid #eee;">
              <div style="font-weight:600;font-size:12px;">&#128187; Coding \u2014 TechKids Dubai</div>
              <div style="font-size:11px;color:#777;margin-top:2px;">Sun 3\u20134:30pm \u00B7 2.5km away \u00B7 AED 500/mo</div>
              <div style="font-size:10px;color:#2B4EFF;margin-top:6px;">View Details \u2192</div>
            </div>
            <div style="background:#f8f5ef;border-radius:10px;padding:12px;margin-bottom:10px;border:1px solid #eee;">
              <div style="font-weight:600;font-size:12px;">&#127912; Art \u2014 Creative Minds Studio</div>
              <div style="font-size:11px;color:#777;margin-top:2px;">Wed 4\u20135pm \u00B7 0.8km away \u00B7 AED 280/mo</div>
              <div style="font-size:10px;color:#2B4EFF;margin-top:6px;">View Details \u2192</div>
            </div>
          </div>`
        },
        {
          id: 5,
          title: "Activity \u2014 Book",
          description: "One-tap booking and payment through Zenda \u2014 no WhatsApp, no bank transfers",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-size:11px;color:#999;margin-bottom:8px;">\u2190 Activities</div>
            <div style="background:#E8F5E9;border-radius:12px;padding:16px;text-align:center;margin-bottom:14px;">
              <div style="font-size:28px;margin-bottom:4px;">&#127946;</div>
              <div style="font-weight:700;font-size:14px;">Aqua Stars Academy</div>
              <div style="font-size:11px;color:#555;">Swimming \u00B7 Ages 6\u201312</div>
            </div>
            <div style="font-size:12px;margin-bottom:10px;"><strong>Schedule:</strong> Saturday 10\u201311am</div>
            <div style="font-size:12px;margin-bottom:10px;"><strong>Location:</strong> 1.2km from school</div>
            <div style="font-size:12px;margin-bottom:10px;"><strong>Price:</strong> AED 350/month</div>
            <div style="font-size:12px;color:#777;margin-bottom:14px;line-height:1.5;">Olympic-size pool, certified instructors, small group sessions (max 6 kids). Monthly progress reports sent to parents.</div>
            <div style="background:#D4380D;color:#fff;text-align:center;padding:12px;border-radius:8px;font-weight:600;font-size:13px;margin-bottom:8px;">Book & Pay \u2014 AED 350</div>
            <div style="text-align:center;font-size:10px;color:#999;">Pay with your Zenda wallet \u00B7 Cancel anytime</div>
          </div>`
        },
        {
          id: 6,
          title: "Family Shopping",
          description: "School supply list pre-filled from the school \u2014 one tap to order everything",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-weight:700;font-size:15px;margin-bottom:4px;">School Supplies</div>
            <div style="font-size:11px;color:#777;margin-bottom:12px;">Dubai International Academy \u00B7 Term 2</div>
            <div style="background:#FFF9C4;border-radius:8px;padding:10px 12px;font-size:11px;color:#555;margin-bottom:14px;">&#128161; Term 2 starts in 3 weeks. We\u2019ve pre-filled your cart based on the school\u2019s supply list.</div>
            <div style="padding:8px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;font-size:12px;">
              <div><strong>Uniform Set</strong><br><span style="font-size:11px;color:#777;">White polo + navy trousers</span></div>
              <div style="color:#D4380D;font-weight:600;">AED 95</div>
            </div>
            <div style="padding:8px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;font-size:12px;">
              <div><strong>Stationery Pack</strong><br><span style="font-size:11px;color:#777;">Notebooks, pens, geometry set</span></div>
              <div style="color:#D4380D;font-weight:600;">AED 45</div>
            </div>
            <div style="padding:8px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;font-size:12px;">
              <div><strong>Textbooks Bundle</strong><br><span style="font-size:11px;color:#777;">Maths, Science, English</span></div>
              <div style="color:#D4380D;font-weight:600;">AED 210</div>
            </div>
            <div style="padding:8px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;">
              <div><strong>Sports Kit</strong><br><span style="font-size:11px;color:#777;">PE shorts + trainers</span></div>
              <div style="color:#D4380D;font-weight:600;">AED 120</div>
            </div>
            <div style="margin-top:14px;padding:12px;background:#f8f5ef;border-radius:8px;display:flex;justify-content:space-between;font-size:13px;font-weight:600;">
              <span>Total</span><span style="color:#D4380D;">AED 470</span>
            </div>
            <div style="background:#D4380D;color:#fff;text-align:center;padding:12px;border-radius:8px;font-weight:600;font-size:13px;margin-top:10px;">Order All \u2014 AED 470</div>
          </div>`
        }
      ]
    },

    closing: {
      content: "I\u2019ve spent three years making mental health care accessible and reliable for people who really needed it. The stakes were high \u2014 a therapy session matters to someone the way a child\u2019s education matters to a parent. You can\u2019t afford to get it wrong. You can\u2019t afford broken flows, failed payments, or support that doesn\u2019t show up.<br><br>I know how to build for trust. I know how to build for engagement. And I know how to fix the unsexy delivery problems that let the good ideas actually ship.<br><br>That\u2019s what Zenda needs right now. I\u2019d love to talk.",
      name: "Saurabh Kumar",
      phone: "+91 93690 95275",
      email: "mr.saurabh.kumar408@gmail.com",
      linkedin: "https://www.linkedin.com/in/saurabh-kumar-workhard/"
    }
  },

  "myhq": {
    companyName: "myHQ",
    role: "Product Manager",
    headline: "What I’d build at myHQ — and why the timing is right.",
    subline: "A product perspective from Saurabh Kumar · Prepared for the PM role at myHQ",

    intro: `Not a cover letter. I don’t think cover letters tell you much about how a PM thinks.<br><br>This is me showing my work — what I found when I researched myHQ, what the real product gaps are, why my experience maps to them, and one idea I’ve built as a clickable prototype to show how I’d think about your core growth problem.`,

    understand: {
      title: "What I researched about myHQ",
      content: `<strong>myHQ is not a coworking space. It’s a workspace operating system.</strong><br><br>The product has three distinct user types pulling in different directions. Freelancers who want a desk for three hours. Startup teams who need a meeting room in 45 minutes. Enterprise HR managers coordinating hybrid work for hundreds of employees. One app, three completely different jobs to be done.<br><br>myHQ has set a target of growing from 30,000 to 100,000 on-demand bookings per month. That’s 3x growth. To get there, the product doesn’t just need more users — it needs existing users to book more often. Right now most users book reactively — when they desperately need a space. The product has no mechanism to become a habit.<br><br>After being acquired by ANAROCK and partnering with WeWork India, myHQ now has an enormous supply-side advantage — hundreds of spaces across India’s major cities. The supply problem is largely solved. The demand problem — getting users to think of myHQ first, every time they need a workspace — is what needs a PM’s full attention.<br><br>The other big unlock sitting untouched: <strong>AI</strong>. The JD mentions it three times. myHQ has rich data — user location patterns, booking history, preferred space types, times, durations, price sensitivity. Nobody is using that data to make the booking experience smarter. Right now the app treats every booking like it’s your first. That’s the gap I want to close.`
    },

    gaps: {
      title: "The gaps I found",
      intro: "I read App Store reviews, Play Store reviews, and Product Hunt feedback carefully.",
      items: [
        {
          title: "Booking is transactional, not intelligent",
          content: `Every user opens the app, searches a location, filters by price, scrolls through options, picks one, and books. Every single time.<br><br>The app has zero memory of who you are, what you prefer, or where you’re likely to be. A freelancer who books the same Indiranagar café every Tuesday still has to search for it from scratch every Tuesday.<br><br>This is the biggest retention and engagement gap. <em>The app is a search engine when it should be a concierge.</em>`
        },
        {
          title: "Space-reality mismatch destroying trust",
          content: `Multiple users report arriving at a booked space to find it completely different from what was shown — a conference room that turned out to be an open desk row, spaces shown as nearby that were 18km away.<br><br>This is a trust problem that no growth initiative can fix if it’s not addressed first. Users who get burned once don’t come back.`
        },
        {
          title: "Support disappears when you need it most",
          content: `One App Store reviewer described being denied entry to a coworking space, raising a support ticket, never receiving a callback, and then finding the ticket had been closed as if it never existed.<br><br>When the core product experience fails — which happens in a marketplace — there’s no reliable recovery path. This erodes trust faster than any bad booking experience.`
        },
        {
          title: "No reason to open the app between bookings",
          content: `Users open myHQ when they need a space. That’s it. No recommendations based on past behaviour. No “you usually work from Koramangala on Fridays — here’s what’s available.” No habit loop. No reason to come back.<br><br>This is the engagement gap that’s keeping bookings low-frequency and preventing myHQ from becoming a daily habit for remote and hybrid workers.`
        }
      ]
    },

    whyme: {
      title: "Why I think I’m a good fit",
      intro: "I won’t list my skills. I’ll show you the parallel problems I’ve already solved.",
      rows: [
        {
          problem: "Booking is transactional, not intelligent",
          mywork: "I shipped two AI workflow systems in production at 15,000 therapy sessions per month — not prototypes, real systems with monitoring, validation, and failure handling. The core skill is the same: take user behaviour data, build a model of what the user needs next, surface the right thing at the right time. myHQ’s AI concierge is a simpler version of what I’ve already shipped. I know how to take this from idea to production."
        },
        {
          problem: "No reason to open the app between bookings",
          mywork: "This is the exact problem I solved at YourDOST. 65% of engagement was driven by one mandatory activity — therapy sessions. Users had no reason to open the app on non-therapy days. I built games, challenges, journeys, and offline activation loops. Shifted non-mandatory engagement from 35% to 45% across 9,000 users over two years. myHQ’s between-booking engagement gap is the same problem. I know what it takes."
        },
        {
          problem: "Support disappearing when things go wrong",
          mywork: "I replaced 1,420 hours per month of manual support with a bot-first system. Human agents escalate only at the second layer. Support didn’t just get cheaper — resolution became faster and more consistent. myHQ’s support disappearing at critical moments is a solvable systems problem. I’ve built the system that solves it."
        },
        {
          problem: "AI-native working style",
          mywork: "I use Claude Code, Lovable, and Google AI Studio daily — for prototyping, spec writing, competitive research, and workflow automation. I don’t use AI as a writing assistant. I use it as a product development accelerator. I’ve cut idea-to-validated-prototype time from weeks to days. That’s the AI-native mindset your JD is looking for three times."
        },
        {
          problem: "Honest gap — B2B SaaS and enterprise workflow",
          mywork: "myHQ’s enterprise product — managed offices, team plans, HR dashboards — is an area I haven’t worked in directly. My enterprise experience is with platform clients in healthtech. The thinking maps but the context is different. I’ll say that directly rather than oversell it."
        }
      ]
    },

    demo: {
      title: "The Demo — myHQ Concierge",
      intro: `<strong>The idea in one line:</strong> What if myHQ stopped asking you where you want to work and just told you?<br><br><strong>The problem it solves:</strong> Booking a workspace on myHQ takes 6–8 taps. Search city. Select area. Filter price. Browse options. Read details. Book. Confirm payment. Every time. For a freelancer who books 3 times a week, that’s 150+ unnecessary decisions a month.<br><br>The deeper problem: the app treats every user identically. A first-time user and a power user who’s booked 50 times get the exact same blank search screen. All that booking history, location data, time patterns, and preference data — sitting unused.<br><br><strong>myHQ Concierge</strong> flips this. Instead of search-first, it’s suggestion-first. The app learns your patterns and surfaces the right space before you even ask.<br><br><strong>Layer 1 — Pattern recognition.</strong> The system learns from your booking history. What areas. What times. What space types. What price range. What amenities matter. After 3–4 bookings it knows you well enough to make a suggestion. After 10 it knows you better than you know yourself.<br><br><strong>Layer 2 — Context awareness.</strong> The concierge reads signals from your day. Calendar shows a client meeting at 3pm in HSR — it surfaces a meeting room nearby with parking. It’s Monday morning and you usually book a focus desk in Koramangala on Mondays — it proactively shows you availability before you open the app.<br><br><strong>Layer 3 — One-tap booking.</strong> The suggestion appears as a card on the home screen. Space, location, distance, price, amenities, availability. One tap to book. No search. No filters. Done in under 10 seconds.<br><br><strong>The business impact:</strong> Booking frequency goes up because the friction of starting a search goes away. Users who currently book reactively start booking proactively because myHQ is thinking ahead for them. Power users become stickier because the app gets smarter with every booking. The data flywheel compounds — more bookings means better suggestions means more bookings.`,
      screens: [
        {
          id: 1,
          title: "Home — Concierge Card",
          description: "The home screen surfaces a context-aware suggestion before you search",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <div>
                <div style="font-size:11px;color:#888;">Good morning</div>
                <div style="font-weight:700;font-size:16px;">Saurabh</div>
              </div>
              <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#5C2D91,#9A4DDB);"></div>
            </div>
            <div style="background:linear-gradient(135deg,#5C2D91,#7B3FB8);border-radius:14px;padding:14px;margin-bottom:14px;color:#fff;box-shadow:0 6px 18px rgba(92,45,145,0.22);">
              <div style="font-size:9px;letter-spacing:1.5px;font-weight:700;opacity:0.85;margin-bottom:6px;">✨ CONCIERGE</div>
              <div style="font-size:12px;line-height:1.5;margin-bottom:12px;opacity:0.95;">Client meeting at 3pm in HSR — a meeting room nearby, 4 mins away.</div>
              <div style="background:rgba(255,255,255,0.13);border-radius:10px;padding:10px;margin-bottom:12px;">
                <div style="font-weight:700;font-size:13px;margin-bottom:2px;">91Springboard HSR</div>
                <div style="font-size:11px;opacity:0.85;margin-bottom:8px;">₹600 / 2hrs · 4 seats · 0.8 km</div>
                <div style="display:flex;gap:5px;flex-wrap:wrap;">
                  <div style="background:rgba(255,255,255,0.2);padding:3px 8px;border-radius:8px;font-size:10px;">Fast wifi</div>
                  <div style="background:rgba(255,255,255,0.2);padding:3px 8px;border-radius:8px;font-size:10px;">Parking</div>
                </div>
              </div>
              <div style="background:#fff;color:#5C2D91;text-align:center;padding:10px;border-radius:10px;font-weight:700;font-size:13px;">Book in 1 tap →</div>
            </div>
            <div style="background:#F5F2FA;border-radius:10px;padding:11px 14px;margin-bottom:14px;color:#888;font-size:12px;">Search location or space name</div>
            <div style="font-size:10px;color:#888;margin-bottom:8px;font-weight:700;letter-spacing:1px;">RECENT</div>
            <div style="border:1px solid #EFEAF7;border-radius:10px;padding:10px 12px;margin-bottom:8px;">
              <div style="font-weight:600;font-size:12px;">WeWork Koramangala</div>
              <div style="font-size:11px;color:#777;">Tue · ₹450 · 4 hrs</div>
            </div>
            <div style="border:1px solid #EFEAF7;border-radius:10px;padding:10px 12px;margin-bottom:14px;">
              <div style="font-weight:600;font-size:12px;">Innov8 Indiranagar</div>
              <div style="font-size:11px;color:#777;">Last Fri · ₹380 · 3 hrs</div>
            </div>
            <div style="display:flex;justify-content:space-around;padding-top:12px;border-top:1px solid #EFEAF7;font-size:10px;">
              <div style="text-align:center;color:#5C2D91;font-weight:700;">Home</div>
              <div style="text-align:center;color:#bbb;">Search</div>
              <div style="text-align:center;color:#bbb;">Bookings</div>
              <div style="text-align:center;color:#bbb;">Profile</div>
            </div>
          </div>`
        },
        {
          id: 2,
          title: "Suggestion Detail",
          description: "Expanded view of the concierge’s pick — amenities, reviews, transparent pricing",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-size:14px;color:#5C2D91;margin-bottom:10px;">←</div>
            <div style="height:120px;border-radius:14px;background:linear-gradient(135deg,#5C2D91 0%,#9A4DDB 50%,#C29DE8 100%);margin-bottom:12px;display:flex;align-items:flex-end;padding:12px;">
              <div style="background:rgba(255,255,255,0.95);color:#5C2D91;padding:4px 10px;border-radius:20px;font-size:10px;font-weight:700;">✨ Concierge pick</div>
            </div>
            <div style="font-weight:700;font-size:16px;margin-bottom:2px;">91Springboard HSR</div>
            <div style="font-size:11px;color:#777;margin-bottom:4px;">27th Main, HSR Layout, Bengaluru</div>
            <div style="font-size:11px;color:#5C2D91;font-weight:600;margin-bottom:14px;">0.8 km · 4 mins drive</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">
              <div style="background:#F5F2FA;color:#5C2D91;padding:5px 10px;border-radius:14px;font-size:10px;font-weight:600;">Wifi 200 Mbps</div>
              <div style="background:#F5F2FA;color:#5C2D91;padding:5px 10px;border-radius:14px;font-size:10px;font-weight:600;">4 seats</div>
              <div style="background:#F5F2FA;color:#5C2D91;padding:5px 10px;border-radius:14px;font-size:10px;font-weight:600;">Parking</div>
              <div style="background:#F5F2FA;color:#5C2D91;padding:5px 10px;border-radius:14px;font-size:10px;font-weight:600;">Coffee</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px;font-size:12px;">
              <span style="color:#FFB300;">★</span><strong>4.7</strong><span style="color:#777;">· 124 reviews</span>
            </div>
            <div style="background:#F5F2FA;border-radius:10px;padding:12px;margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;"><span>Meeting room · 2 hrs</span><span>₹600</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:#777;margin-bottom:8px;"><span>Taxes & fees</span><span>₹54</span></div>
              <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:#5C2D91;border-top:1px solid #E6DEF1;padding-top:8px;"><span>Total</span><span>₹654</span></div>
            </div>
            <div style="background:#5C2D91;color:#fff;text-align:center;padding:12px;border-radius:10px;font-weight:700;font-size:13px;margin-bottom:8px;">Book Now</div>
            <div style="border:1.5px solid #5C2D91;color:#5C2D91;text-align:center;padding:11px;border-radius:10px;font-weight:600;font-size:13px;">Save for Later</div>
          </div>`
        },
        {
          id: 3,
          title: "One-tap Checkout",
          description: "No re-entered details. Saved payment method. One tap to confirm.",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-size:14px;color:#5C2D91;margin-bottom:10px;">←</div>
            <div style="font-weight:700;font-size:17px;margin-bottom:14px;">Confirm booking</div>
            <div style="background:#F5F2FA;border-radius:12px;padding:14px;margin-bottom:14px;">
              <div style="font-weight:700;font-size:13px;margin-bottom:2px;">91Springboard HSR</div>
              <div style="font-size:11px;color:#777;">Meeting room · 4 seats</div>
            </div>
            <div style="margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #EFEAF7;font-size:12px;"><span style="color:#777;">Date</span><span style="font-weight:600;">Today · 27 Apr</span></div>
              <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #EFEAF7;font-size:12px;"><span style="color:#777;">Time</span><span style="font-weight:600;">2:30 – 4:30 pm</span></div>
              <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #EFEAF7;font-size:12px;"><span style="color:#777;">Duration</span><span style="font-weight:600;">2 hours</span></div>
              <div style="display:flex;justify-content:space-between;padding:9px 0;font-size:13px;font-weight:700;color:#5C2D91;"><span>Total</span><span>₹654</span></div>
            </div>
            <div style="font-size:10px;color:#888;margin-bottom:8px;font-weight:700;letter-spacing:1px;">PAYING WITH</div>
            <div style="border:1px solid #EFEAF7;border-radius:10px;padding:12px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:12px;">HDFC Credit Card</div>
                <div style="font-size:11px;color:#777;">•••• 4521</div>
              </div>
              <div style="background:#5C2D91;color:#fff;padding:3px 9px;border-radius:8px;font-size:10px;font-weight:600;">Default</div>
            </div>
            <div style="background:#5C2D91;color:#fff;text-align:center;padding:13px;border-radius:10px;font-weight:700;font-size:14px;margin-bottom:10px;">Confirm Booking — ₹654</div>
            <div style="text-align:center;font-size:11px;color:#5C2D91;font-weight:600;">Change payment method</div>
          </div>`
        },
        {
          id: 4,
          title: "Booking Confirmed",
          description: "Confirmation, directions — and the concierge gets smarter from this booking",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;text-align:center;">
            <div style="height:14px;"></div>
            <div style="width:80px;height:80px;margin:0 auto 18px;border-radius:50%;background:linear-gradient(135deg,#5C2D91,#9A4DDB);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(92,45,145,0.3);">
              <div style="color:#fff;font-size:38px;font-weight:700;line-height:1;">✓</div>
            </div>
            <div style="font-weight:700;font-size:20px;margin-bottom:6px;">You’re booked.</div>
            <div style="font-size:12px;color:#777;margin-bottom:18px;">A confirmation has been sent to your email.</div>
            <div style="background:#F5F2FA;border-radius:12px;padding:14px;margin-bottom:14px;text-align:left;">
              <div style="font-weight:700;font-size:13px;margin-bottom:2px;">91Springboard HSR</div>
              <div style="font-size:11px;color:#777;margin-bottom:10px;">Meeting room · 4 seats</div>
              <div style="display:flex;justify-content:space-between;font-size:11px;padding-top:8px;border-top:1px solid #E6DEF1;">
                <span style="color:#777;">Today, 2:30 – 4:30 pm</span>
                <span style="color:#5C2D91;font-weight:700;">#MHQ7421</span>
              </div>
            </div>
            <div style="display:flex;gap:8px;margin-bottom:18px;">
              <div style="flex:1;border:1.5px solid #5C2D91;color:#5C2D91;text-align:center;padding:11px;border-radius:10px;font-weight:600;font-size:12px;">Add to Calendar</div>
              <div style="flex:1;border:1.5px solid #5C2D91;color:#5C2D91;text-align:center;padding:11px;border-radius:10px;font-weight:600;font-size:12px;">Get Directions</div>
            </div>
            <div style="background:#F5F2FA;border-radius:10px;padding:11px 14px;font-size:11px;color:#5C2D91;line-height:1.5;text-align:left;">✨ Your concierge learned from this booking. Suggestions will get smarter from here.</div>
          </div>`
        },
        {
          id: 5,
          title: "Concierge Settings",
          description: "Teach the concierge your patterns — areas, space type, budget, must-haves",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-size:14px;color:#5C2D91;margin-bottom:10px;">←</div>
            <div style="font-weight:700;font-size:17px;margin-bottom:4px;">Teach your concierge</div>
            <div style="font-size:11px;color:#777;margin-bottom:18px;line-height:1.5;">The more you tell us, the better the suggestions get.</div>
            <div style="font-size:10px;color:#888;margin-bottom:8px;font-weight:700;letter-spacing:1px;">PREFERRED AREAS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px;">
              <div style="background:#5C2D91;color:#fff;padding:5px 11px;border-radius:14px;font-size:11px;font-weight:600;">Koramangala ✓</div>
              <div style="background:#5C2D91;color:#fff;padding:5px 11px;border-radius:14px;font-size:11px;font-weight:600;">Indiranagar ✓</div>
              <div style="background:#5C2D91;color:#fff;padding:5px 11px;border-radius:14px;font-size:11px;font-weight:600;">HSR ✓</div>
              <div style="background:#F5F2FA;color:#5C2D91;padding:5px 11px;border-radius:14px;font-size:11px;font-weight:600;">Whitefield</div>
              <div style="background:#F5F2FA;color:#5C2D91;padding:5px 11px;border-radius:14px;font-size:11px;font-weight:600;">Marathahalli</div>
            </div>
            <div style="font-size:10px;color:#888;margin-bottom:8px;font-weight:700;letter-spacing:1px;">SPACE TYPE</div>
            <div style="display:flex;gap:6px;margin-bottom:18px;">
              <div style="flex:1;background:#5C2D91;color:#fff;text-align:center;padding:8px;border-radius:10px;font-size:11px;font-weight:600;">Desk</div>
              <div style="flex:1;background:#5C2D91;color:#fff;text-align:center;padding:8px;border-radius:10px;font-size:11px;font-weight:600;">Meeting Room</div>
              <div style="flex:1;background:#F5F2FA;color:#5C2D91;text-align:center;padding:8px;border-radius:10px;font-size:11px;font-weight:600;">Cabin</div>
            </div>
            <div style="font-size:10px;color:#888;margin-bottom:8px;font-weight:700;letter-spacing:1px;">BUDGET PER SESSION</div>
            <div style="margin-bottom:18px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:6px;color:#777;"><span>₹200</span><span style="color:#5C2D91;font-weight:700;">₹300 – ₹800</span><span>₹2000</span></div>
              <div style="background:#EFEAF7;border-radius:4px;height:6px;position:relative;"><div style="background:#5C2D91;height:6px;border-radius:4px;width:35%;margin-left:10%;"></div></div>
            </div>
            <div style="font-size:10px;color:#888;margin-bottom:8px;font-weight:700;letter-spacing:1px;">MUST-HAVE AMENITIES</div>
            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;"><span>Fast wifi</span><span style="color:#5C2D91;font-weight:700;">✓</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;"><span>Parking</span><span style="color:#5C2D91;font-weight:700;">✓</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#aaa;"><span>Coffee</span><span>×</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#aaa;"><span>Standing desk</span><span>×</span></div>
            </div>
            <div style="background:#F5F2FA;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <div>
                <div style="font-weight:600;font-size:12px;">Connect Google Calendar</div>
                <div style="font-size:10px;color:#777;">For schedule-aware suggestions</div>
              </div>
              <div style="width:34px;height:18px;background:#5C2D91;border-radius:10px;position:relative;flex-shrink:0;"><div style="width:14px;height:14px;background:#fff;border-radius:50%;position:absolute;right:2px;top:2px;"></div></div>
            </div>
            <div style="background:#5C2D91;color:#fff;text-align:center;padding:12px;border-radius:10px;font-weight:700;font-size:13px;">Save Preferences</div>
          </div>`
        },
        {
          id: 6,
          title: "Weekly Summary",
          description: "A weekly look at your work-from-anywhere life — stats, insights, and a one-tap rebook",
          content: `<div style="font-family:'DM Sans',sans-serif;padding:12px 4px;font-size:13px;color:#1A1714;">
            <div style="font-weight:700;font-size:17px;margin-bottom:2px;">Your week at a glance</div>
            <div style="font-size:11px;color:#777;margin-bottom:16px;">Apr 21 – Apr 27</div>
            <div style="display:flex;gap:8px;margin-bottom:14px;">
              <div style="flex:1;background:#F5F2FA;border-radius:10px;padding:12px 8px;text-align:center;">
                <div style="font-weight:700;font-size:18px;color:#5C2D91;">4</div>
                <div style="font-size:9px;color:#777;text-transform:uppercase;letter-spacing:0.5px;">Spaces booked</div>
              </div>
              <div style="flex:1;background:#F5F2FA;border-radius:10px;padding:12px 8px;text-align:center;">
                <div style="font-weight:700;font-size:18px;color:#5C2D91;">18</div>
                <div style="font-size:9px;color:#777;text-transform:uppercase;letter-spacing:0.5px;">Hours away</div>
              </div>
              <div style="flex:1;background:#F5F2FA;border-radius:10px;padding:12px 8px;text-align:center;">
                <div style="font-weight:700;font-size:16px;color:#5C2D91;">₹2,400</div>
                <div style="font-size:9px;color:#777;text-transform:uppercase;letter-spacing:0.5px;">Spent</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#5C2D91,#7B3FB8);border-radius:12px;padding:14px;color:#fff;margin-bottom:14px;">
              <div style="font-size:9px;letter-spacing:1.5px;font-weight:700;opacity:0.85;margin-bottom:6px;">✨ INSIGHT</div>
              <div style="font-size:12px;line-height:1.5;">You’re most productive at <strong>91Springboard Koramangala</strong> — it’s your most-booked space (3x this week).</div>
            </div>
            <div style="font-size:10px;color:#888;margin-bottom:10px;font-weight:700;letter-spacing:1px;">BOOKING FREQUENCY</div>
            <div style="display:flex;justify-content:space-between;align-items:flex-end;height:80px;margin-bottom:6px;padding:0 4px;">
              <div style="width:9%;height:30%;background:#C29DE8;border-radius:3px;"></div>
              <div style="width:9%;height:60%;background:#9A4DDB;border-radius:3px;"></div>
              <div style="width:9%;height:45%;background:#C29DE8;border-radius:3px;"></div>
              <div style="width:9%;height:80%;background:#5C2D91;border-radius:3px;"></div>
              <div style="width:9%;height:50%;background:#9A4DDB;border-radius:3px;"></div>
              <div style="width:9%;height:15%;background:#EFEAF7;border-radius:3px;"></div>
              <div style="width:9%;height:10%;background:#EFEAF7;border-radius:3px;"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#888;margin-bottom:18px;padding:0 4px;">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
            <div style="background:#5C2D91;color:#fff;text-align:center;padding:12px;border-radius:10px;font-weight:700;font-size:13px;">Book your usual spot for next week →</div>
          </div>`
        }
      ]
    },

    closing: {
      content: "I’ve spent three years building systems that serve people at their most stressed — someone in a mental health crisis, a therapist managing 15 sessions a day, an operations team handling 1,400 hours of manual work. The common thread is building for trust and building for habit. Making something people rely on, not just use.<br><br>myHQ is at the inflection point where the supply problem is solved and the product intelligence problem is what unlocks the next phase of growth. That’s the work I want to do.<br><br>I’d love to talk.",
      name: "Saurabh Kumar",
      phone: "+91 93690 95275",
      email: "mr.saurabh.kumar408@gmail.com",
      linkedin: "https://www.linkedin.com/in/saurabh-kumar-workhard/"
    }
  }

  // Add more companies:
  // "razorpay": { ... },
  // "cred": { ... },
};
