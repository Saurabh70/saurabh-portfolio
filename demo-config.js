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
    headline: "What I’d build at myHQ.",
    subline: "A product perspective from Saurabh Kumar · Prepared for the PM role at myHQ",

    intro: `I wanted to go beyond a cover letter and actually show how I think about product problems.<br><br>So I spent time researching myHQ — reading reviews, understanding the business model, mapping out what users actually experience. This document walks through what I found, where I think the biggest opportunities might be, and one idea I’ve prototyped to show my approach.<br><br>I hope it gives you a useful sense of how I work.<br><br><div style="display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;background:#FAFAFA;border:1px solid #EFEAF7;border-radius:12px;padding:14px 18px;margin-top:8px;font-size:14px;line-height:1.4;"><div style="font-weight:700;color:#1A1714;">Saurabh Kumar</div><a href="tel:+919369095275" style="color:#5C2D91;text-decoration:none;font-weight:500;">+91 93690 95275</a><a href="mailto:mr.saurabh.kumar408@gmail.com" style="color:#5C2D91;text-decoration:none;font-weight:500;">mr.saurabh.kumar408@gmail.com</a><a href="https://www.linkedin.com/in/saurabh-kumar-workhard/" target="_blank" style="color:#5C2D91;text-decoration:none;font-weight:500;">LinkedIn →</a></div>`,

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
  },

  "xoxoday": {
    companyName: "Xoxoday",
    role: "Product Manager",
    theme: "enterprise",
    headline: "What I’d build at Xoxoday’s enterprise loyalty product — and why execution is the real opportunity.",
    subline: "A product perspective from Saurabh Kumar · Prepared for the PM role at Xoxoday",

    intro: `Not a cover letter. This is me showing how I think about your product — what I found when I researched Xoxoday and Loyalife, where the real gaps are, why my experience fits this role, and one idea I built to show how I would solve a real product problem.<br><br><div style="display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;background:#F9F9FB;border:1px solid #E5E5EC;border-radius:12px;padding:14px 18px;margin-top:8px;font-size:14px;line-height:1.4;font-family:'Inter',system-ui,sans-serif;"><div style="font-weight:700;color:#1A1A2E;">Saurabh Kumar</div><a href="tel:+919369095275" style="color:#FF6B35;text-decoration:none;font-weight:500;">+91 93690 95275</a><a href="mailto:mr.saurabh.kumar408@gmail.com" style="color:#FF6B35;text-decoration:none;font-weight:500;">mr.saurabh.kumar408@gmail.com</a><a href="https://www.linkedin.com/in/saurabh-kumar-workhard/" target="_blank" style="color:#FF6B35;text-decoration:none;font-weight:500;">LinkedIn →</a></div>`,

    understand: {
      title: "What I researched about Xoxoday",
      content: `Xoxoday runs rewards, incentives, and loyalty programs for <strong>5,000+ companies worldwide</strong> — including Freshworks, Infosys, Capgemini, AT&T, and H&M — with $1B+ annual GMV and 250+ integrations. That’s serious scale for a product most end users never know they’re using. The rewards just reach their inbox.<br><br>The enterprise loyalty product — <strong>Loyalife</strong> — is the most complex and highest-value part of the suite. It’s an AI-powered platform that helps enterprises create, manage, and grow omnichannel loyalty programs by connecting with CRM, POS, ERP, and marketing tools through APIs.<br><br>The product has strong infrastructure. Real-time analytics, custom dashboards, personalization, and a reward marketplace with 10M+ options across 100+ countries. <em>The base is strong. The gap is in the experience layer</em> — how enterprise customers actually set up, manage, and measure loyalty programs every day.<br><br>Loyalife is already recognized in the market. Validation is there. What’s missing is making the product as easy to use as it is powerful on paper. <strong>That’s the PM job.</strong>`
    },

    gaps: {
      title: "The gaps I found",
      intro: "I read G2, Gartner, Capterra, and SoftwareSuggest reviews carefully — focusing on enterprise admin users, not end users.",
      items: [
        {
          title: "Reporting isn’t deep enough for enterprise decision-making",
          content: `Many reviewers said reporting isn’t detailed enough. They can’t properly understand campaign performance with the current reports.<br><br>This is a major gap. Clients running loyalty programs for millions of users need to know which tiers work, which rewards drive repeat behavior, and where users drop off. <em>If reporting can’t answer these questions, the product is missing its core promise.</em>`
        },
        {
          title: "Reward delivery has reliability problems",
          content: `One reviewer said rewards sometimes stay in “pending” for days, with no visibility on resolution or whether an item was removed from the catalogue.<br><br>In loyalty programs, a reward that doesn’t arrive on time is a broken promise to the customer. That damages trust in the whole program.`
        },
        {
          title: "Support breaks down on billing and invoicing",
          content: `One enterprise user said they needed 3–5 attempts to get the correct invoice in the right currency, and later communication stopped.<br><br>Enterprise clients have strict finance processes. Billing mistakes aren’t small issues — they create business risk.`
        },
        {
          title: "Complexity of setup isn’t matched by ease of use",
          content: `The platform is powerful — tiers, accrual rules, gamification, multi-currency, multi-region. But power without usability means clients depend too much on the implementation team.<br><br>Every change that needs a support ticket instead of self-serve tools creates friction, slows adoption, and increases churn risk.`
        }
      ]
    },

    whyme: {
      title: "Why I think I’m a good fit",
      intro: "",
      rows: [
        {
          problem: "Enterprise client complexity",
          mywork: "I’ve built and managed product features serving 100+ enterprise clients at the same time at YourDOST — each with different needs and setups. I understand the difference between building for one user and building for an admin managing 50,000 employees. The org tiering and slot personalization system I built used the same thinking."
        },
        {
          problem: "Reporting gaps",
          mywork: "I implemented PostHog as the analytics system at YourDOST and built funnels, dashboards, and retention metrics from scratch. Xoxoday’s reporting gap is a problem I’ve solved in a simpler form before. Enterprise users don’t just need numbers. They need answers to “why did this happen?”"
        },
        {
          problem: "Execution ownership",
          mywork: "The JD says this role needs someone close to execution, not just planning. That’s how I work. When the senior PM left YourDOST, I didn’t just plan — I ran standups, reviewed QA, removed blockers, and owned releases. I don’t throw specs and disappear."
        },
        {
          problem: "Reliability and delivery problems",
          mywork: "I replaced 1,420 hours per month of manual support with automation and reduced bug resolution SLA from 72 hours to 12. I also fixed a broken release process that caused regressions. Xoxoday’s delivery and support issues are execution problems — the kind I’ve solved before."
        },
        {
          problem: "Honest gap — enterprise SaaS and loyalty domain",
          mywork: "I haven’t worked directly in SaaS or loyalty. My enterprise experience is in healthtech. But the core PM skills — configuration design, admin UX, reporting, and client success loops — transfer directly. I can learn the loyalty domain fast. The execution ability is already there."
        }
      ]
    },

    demo: {
      title: "The Demo — Loyalty Program Health Dashboard",
      intro: `<strong>The idea in one line:</strong> Enterprise clients shouldn’t need to call Xoxoday to know if their loyalty program is working.<br><br><strong>The problem it solves:</strong> Today an enterprise admin has to collect data from many places — redemption reports, tier analytics, campaign results — and still can’t answer the main question: <em>is this program building loyalty, or just giving away points?</em><br><br>The Health Dashboard gives one place to see what matters most — and tells them what action to take.<br><br><strong>1 — Program Health Score.</strong> A single score from 0–100 based on active member rate, redemption rate, tier progression rate, reward delivery success rate, and repeat engagement rate. Not a vanity metric — a diagnostic tool. If the score drops, the dashboard shows what dropped and why, in plain English: “Your redemption rate dropped 12% this month. Gift cards had 3 fulfilment delays. Here’s how to fix it.”<br><br><strong>2 — Campaign Performance Drill-down.</strong> Break campaign performance by tier, geography, reward type, and member segment in one view. No exporting CSVs. No pivot tables. Ask: “Which reward drove the most repeat purchases from Gold tier members in Q3?” — get the answer in two clicks.<br><br><strong>3 — At-risk Member Alerts.</strong> Identify members likely to churn — unused points expiring, no activity in 60+ days, tier downgrade coming soon. The dashboard turns this into actions: “2,340 members will drop from Gold to Silver in the next 30 days. Send a targeted campaign?” One click to launch.<br><br><strong>Why this matters for Xoxoday’s business:</strong> Enterprise clients renew when they can prove ROI internally. Right now that’s harder than it should be. This dashboard gives them proof of value — which means they renew, expand, and refer others. <em>The product becomes a retention tool for Xoxoday too.</em>`,
      screens: [
        {
          id: 1,
          title: "Dashboard Overview",
          description: "One score that tells an enterprise admin if their program is working — at a glance",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#1A1A2E;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <div>
                <div style="font-size:10px;color:#888;font-weight:500;">Loyalife · Acme Corp</div>
                <div style="font-weight:700;font-size:14px;letter-spacing:-0.01em;">Program Health</div>
              </div>
              <div style="font-size:10px;color:#888;background:#F5F5F8;padding:4px 8px;border-radius:6px;font-weight:500;">Last 30d</div>
            </div>
            <div style="background:#1A1A2E;border-radius:14px;padding:16px;margin-bottom:12px;color:#fff;">
              <div style="font-size:9px;color:#FF6B35;font-weight:700;letter-spacing:1.5px;margin-bottom:6px;">HEALTH SCORE</div>
              <div style="display:flex;align-items:baseline;gap:6px;">
                <div style="font-weight:800;font-size:42px;line-height:1;letter-spacing:-0.02em;">78</div>
                <div style="font-size:14px;color:#9999AA;">/100</div>
                <div style="margin-left:auto;font-size:11px;color:#FF6B35;font-weight:600;">▼ 4 pts</div>
              </div>
              <div style="font-size:11px;color:#A0A0B0;margin-top:8px;">vs last month · industry avg 72</div>
              <div style="margin-top:12px;height:36px;background:linear-gradient(180deg,rgba(255,107,53,0.15) 0%,rgba(255,107,53,0) 100%);border-radius:6px;">
                <svg width="100%" height="100%" viewBox="0 0 200 36" preserveAspectRatio="none" style="display:block;"><polyline points="0,12 25,8 50,14 75,10 100,16 125,12 150,18 175,16 200,22" fill="none" stroke="#FF6B35" stroke-width="2"/></svg>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
              <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:10px;">
                <div style="font-size:9px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:4px;">Active</div>
                <div style="font-weight:700;font-size:15px;">62%</div>
                <div style="font-size:10px;color:#0AA970;font-weight:600;margin-top:2px;">▲ 3.2%</div>
              </div>
              <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:10px;">
                <div style="font-size:9px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:4px;">Redemption</div>
                <div style="font-weight:700;font-size:15px;">41%</div>
                <div style="font-size:10px;color:#FF6B35;font-weight:600;margin-top:2px;">▼ 12%</div>
              </div>
              <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:10px;">
                <div style="font-size:9px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:4px;">Tier ↑</div>
                <div style="font-weight:700;font-size:15px;">8.4%</div>
                <div style="font-size:10px;color:#0AA970;font-weight:600;margin-top:2px;">▲ 1.1%</div>
              </div>
              <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:10px;">
                <div style="font-size:9px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:4px;">Delivery</div>
                <div style="font-weight:700;font-size:15px;">96.8%</div>
                <div style="font-size:10px;color:#FF6B35;font-weight:600;margin-top:2px;">▼ 2.1%</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#FF6B35 0%,#FF8C42 100%);border-radius:12px;padding:12px;color:#fff;">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;margin-bottom:6px;opacity:0.95;">⚡ AI INSIGHT</div>
              <div style="font-size:12px;line-height:1.5;">Redemption dropped 12%. 3 fulfilment delays on gift cards. <strong>Tap to see fix.</strong></div>
            </div>
          </div>`
        },
        {
          id: 2,
          title: "Score Breakdown",
          description: "Five factors behind the score — see exactly what dropped and where",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#1A1A2E;">
            <div style="font-size:11px;color:#FF6B35;font-weight:600;margin-bottom:6px;">← Back</div>
            <div style="font-weight:700;font-size:16px;margin-bottom:2px;letter-spacing:-0.01em;">Score breakdown</div>
            <div style="font-size:11px;color:#888;margin-bottom:14px;">Acme Corp · 30 days</div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="font-weight:600;font-size:12px;">Active member rate</div>
                <div style="font-weight:700;font-size:13px;color:#0AA970;">82</div>
              </div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;"><div style="background:#0AA970;height:5px;border-radius:3px;width:82%;"></div></div>
            </div>
            <div style="background:#fff;border:1px solid #FFD8C4;border-radius:10px;padding:12px;margin-bottom:8px;box-shadow:0 0 0 2px rgba(255,107,53,0.08);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="font-weight:600;font-size:12px;color:#1A1A2E;">Redemption rate <span style="color:#FF6B35;font-size:10px;">▼ 12</span></div>
                <div style="font-weight:700;font-size:13px;color:#FF6B35;">52</div>
              </div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;margin-bottom:6px;"><div style="background:#FF6B35;height:5px;border-radius:3px;width:52%;"></div></div>
              <div style="font-size:10px;color:#888;">Was 64 last month</div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="font-weight:600;font-size:12px;">Tier progression</div>
                <div style="font-weight:700;font-size:13px;color:#0AA970;">76</div>
              </div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;"><div style="background:#0AA970;height:5px;border-radius:3px;width:76%;"></div></div>
            </div>
            <div style="background:#fff;border:1px solid #FFD8C4;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="font-weight:600;font-size:12px;">Reward delivery <span style="color:#FF6B35;font-size:10px;">▼</span></div>
                <div style="font-weight:700;font-size:13px;color:#FF6B35;">68</div>
              </div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;margin-bottom:6px;"><div style="background:#FF6B35;height:5px;border-radius:3px;width:68%;"></div></div>
              <div style="font-size:10px;color:#888;">3 fulfilment delays</div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="font-weight:600;font-size:12px;">Repeat engagement</div>
                <div style="font-weight:700;font-size:13px;color:#0AA970;">88</div>
              </div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;"><div style="background:#0AA970;height:5px;border-radius:3px;width:88%;"></div></div>
            </div>
            <div style="background:#FFF4ED;border-radius:10px;padding:11px 12px;text-align:center;font-size:11px;color:#FF6B35;font-weight:700;">Open AI Insight →</div>
          </div>`
        },
        {
          id: 3,
          title: "AI Insight",
          description: "Plain-English diagnosis with a recommended fix — not a chart, an answer",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#1A1A2E;">
            <div style="font-size:11px;color:#FF6B35;font-weight:600;margin-bottom:6px;">← Back</div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px;">
              <div style="background:#FF6B35;color:#fff;padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;letter-spacing:1px;">AI INSIGHT</div>
              <div style="font-size:10px;color:#888;">Generated 2 mins ago</div>
            </div>
            <div style="font-weight:700;font-size:16px;line-height:1.4;margin-bottom:14px;letter-spacing:-0.01em;">Why your redemption rate dropped 12%</div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:14px;margin-bottom:10px;">
              <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">DIAGNOSIS</div>
              <div style="font-size:12px;line-height:1.6;color:#4A4A5A;">3 of your top-redeemed gift card brands had fulfilment delays of 24–72 hrs in the last 30 days. <strong style="color:#1A1A2E;">Amazon (1,240 pending), Starbucks (380), Flipkart (210).</strong></div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:14px;margin-bottom:10px;">
              <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">IMPACT</div>
              <div style="font-size:12px;line-height:1.6;color:#4A4A5A;">Members who experience delivery delays redeem <strong style="color:#1A1A2E;">37% less</strong> in the following 30 days. Repeat redemption likelihood drops by half.</div>
            </div>
            <div style="background:#1A1A2E;border-radius:10px;padding:14px;color:#fff;">
              <div style="font-size:9px;color:#FF6B35;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">RECOMMENDED FIX</div>
              <div style="font-size:12px;line-height:1.6;color:#D5D5E0;margin-bottom:10px;">Switch the 1,830 pending orders to backup vendors with <strong style="color:#fff;">98%+ SLA</strong>. Estimated recovery: 4–6 days. Score lift: +3 to +5 pts.</div>
              <div style="background:#FF6B35;color:#fff;text-align:center;padding:10px;border-radius:8px;font-weight:600;font-size:12px;">Apply Recommended Fix</div>
            </div>
          </div>`
        },
        {
          id: 4,
          title: "Campaign Drill-down",
          description: "Slice campaign performance by tier, region, reward type — without exporting a CSV",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#1A1A2E;">
            <div style="font-weight:700;font-size:16px;margin-bottom:2px;letter-spacing:-0.01em;">Campaign drill-down</div>
            <div style="font-size:11px;color:#888;margin-bottom:12px;">Q3 · Acme Corp</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">
              <div style="background:#1A1A2E;color:#fff;padding:5px 10px;border-radius:14px;font-size:11px;font-weight:600;">Tier: Gold ✕</div>
              <div style="background:#1A1A2E;color:#fff;padding:5px 10px;border-radius:14px;font-size:11px;font-weight:600;">Region: APAC ✕</div>
              <div style="background:#fff;border:1px solid #E5E5EC;color:#4A4A5A;padding:5px 10px;border-radius:14px;font-size:11px;font-weight:500;">+ Filter</div>
            </div>
            <div style="background:#FFF4ED;border-radius:10px;padding:11px 12px;margin-bottom:14px;">
              <div style="font-size:9px;color:#FF6B35;font-weight:700;letter-spacing:1.2px;margin-bottom:4px;">QUERY</div>
              <div style="font-size:12px;line-height:1.5;color:#1A1A2E;">Which reward drove the most repeat purchases from Gold tier in APAC?</div>
            </div>
            <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">TOP REWARDS</div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <div style="font-weight:600;font-size:12px;">Amazon Gift Card</div>
                <div style="font-size:11px;color:#0AA970;font-weight:700;">+24% repeat</div>
              </div>
              <div style="font-size:10px;color:#888;">3,420 redemptions · ₹68L value</div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;margin-top:8px;"><div style="background:#FF6B35;height:5px;border-radius:3px;width:90%;"></div></div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <div style="font-weight:600;font-size:12px;">Travel Voucher</div>
                <div style="font-size:11px;color:#0AA970;font-weight:700;">+18% repeat</div>
              </div>
              <div style="font-size:10px;color:#888;">1,240 redemptions · ₹42L value</div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;margin-top:8px;"><div style="background:#FF6B35;height:5px;border-radius:3px;width:62%;"></div></div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <div style="font-weight:600;font-size:12px;">Premium Subscription</div>
                <div style="font-size:11px;color:#0AA970;font-weight:700;">+11% repeat</div>
              </div>
              <div style="font-size:10px;color:#888;">820 redemptions · ₹18L value</div>
              <div style="background:#F0F0F4;border-radius:3px;height:5px;margin-top:8px;"><div style="background:#FF6B35;height:5px;border-radius:3px;width:38%;"></div></div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;text-align:center;padding:10px;border-radius:8px;font-weight:600;font-size:12px;color:#1A1A2E;">Export to CSV</div>
          </div>`
        },
        {
          id: 5,
          title: "At-Risk Members",
          description: "Predicted churn — surfaced before the program loses members or money",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#1A1A2E;">
            <div style="font-weight:700;font-size:16px;margin-bottom:2px;letter-spacing:-0.01em;">At-risk members</div>
            <div style="font-size:11px;color:#888;margin-bottom:14px;">Predicted churn · next 30 days</div>
            <div style="background:linear-gradient(135deg,#FF6B35 0%,#FF8C42 100%);border-radius:14px;padding:16px;color:#fff;margin-bottom:12px;box-shadow:0 6px 18px rgba(255,107,53,0.22);">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;opacity:0.95;margin-bottom:6px;">⚠ ALERT</div>
              <div style="font-weight:700;font-size:18px;line-height:1.3;margin-bottom:6px;letter-spacing:-0.01em;">2,340 Gold members will drop to Silver in 30 days.</div>
              <div style="font-size:11px;opacity:0.9;">Lost projected GMV: <strong>₹14L</strong></div>
            </div>
            <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">OTHER SIGNALS</div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:start;">
                <div>
                  <div style="font-weight:600;font-size:12px;margin-bottom:2px;">Points expiring soon</div>
                  <div style="font-size:10px;color:#888;">4,820 members · ₹3.2L unredeemed</div>
                </div>
                <div style="background:#FFF4ED;color:#FF6B35;padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;">High</div>
              </div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:start;">
                <div>
                  <div style="font-weight:600;font-size:12px;margin-bottom:2px;">Inactive 60+ days</div>
                  <div style="font-size:10px;color:#888;">7,120 members · last seen Feb</div>
                </div>
                <div style="background:#FFF4ED;color:#FF6B35;padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;">High</div>
              </div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:10px;padding:12px;margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;align-items:start;">
                <div>
                  <div style="font-weight:600;font-size:12px;margin-bottom:2px;">Low engagement Gold</div>
                  <div style="font-size:10px;color:#888;">980 members · 1 redemption in Q3</div>
                </div>
                <div style="background:#F5F5F8;color:#888;padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;">Med</div>
              </div>
            </div>
            <div style="background:#1A1A2E;color:#fff;text-align:center;padding:12px;border-radius:10px;font-weight:600;font-size:13px;">Launch retention campaign →</div>
          </div>`
        },
        {
          id: 6,
          title: "Launch Campaign",
          description: "One-click retention — pre-built segment, offer, and projected GMV impact",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#1A1A2E;">
            <div style="font-size:11px;color:#FF6B35;font-weight:600;margin-bottom:6px;">← At-risk</div>
            <div style="font-weight:700;font-size:16px;margin-bottom:2px;letter-spacing:-0.01em;">Launch campaign</div>
            <div style="font-size:11px;color:#888;margin-bottom:14px;">Pre-built for this segment</div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:12px;padding:14px;margin-bottom:12px;">
              <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px;">SEGMENT</div>
              <div style="font-weight:700;font-size:14px;margin-bottom:2px;">Gold → Silver risk</div>
              <div style="font-size:11px;color:#888;margin-bottom:10px;">2,340 members · APAC + EU</div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <div style="background:#FFF4ED;color:#FF6B35;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:600;">Tier: Gold</div>
                <div style="background:#FFF4ED;color:#FF6B35;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:600;">Activity ↓</div>
                <div style="background:#FFF4ED;color:#FF6B35;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:600;">30-day window</div>
              </div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:12px;padding:14px;margin-bottom:12px;">
              <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px;">OFFER</div>
              <div style="font-weight:700;font-size:13px;margin-bottom:6px;">Bonus 500 points on next redemption</div>
              <div style="font-size:11px;color:#4A4A5A;line-height:1.5;">Triggers when member uses any reward in the next 14 days. Helps maintain Gold-tier activity threshold.</div>
            </div>
            <div style="background:#fff;border:1px solid #E5E5EC;border-radius:12px;padding:14px;margin-bottom:14px;">
              <div style="font-size:9px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px;">PROJECTED IMPACT</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;">
                <div>
                  <div style="font-weight:700;font-size:18px;color:#0AA970;">+62%</div>
                  <div style="font-size:10px;color:#888;">tier retention</div>
                </div>
                <div>
                  <div style="font-weight:700;font-size:18px;color:#0AA970;">₹9.4L</div>
                  <div style="font-size:10px;color:#888;">GMV saved</div>
                </div>
              </div>
            </div>
            <div style="background:#FF6B35;color:#fff;text-align:center;padding:13px;border-radius:10px;font-weight:700;font-size:13px;margin-bottom:8px;">Launch campaign</div>
            <div style="text-align:center;font-size:11px;color:#888;">Customize before sending</div>
          </div>`
        }
      ]
    },

    closing: {
      content: "I’ve spent three years building products where the stakes were real — therapy sessions that couldn’t fail, operations that couldn’t fall behind, enterprise clients who couldn’t afford downtime. I know how to stay close to execution, own features end to end, and ship products that work under pressure.<br><br>Enterprise loyalty at Xoxoday is the same kind of challenge. High stakes, complex setups, clients who depend on reliability. I’d love to bring that same ownership here.<br><br>Let’s talk.",
      name: "Saurabh Kumar",
      phone: "+91 93690 95275",
      email: "mr.saurabh.kumar408@gmail.com",
      linkedin: "https://www.linkedin.com/in/saurabh-kumar-workhard/"
    }
  },

  "eloelo": {
    companyName: "Eloelo",
    role: "APM",
    theme: "consumer-dark",
    headline: "What I find interesting about Eloelo — and one idea I’d explore.",
    subline: "A product perspective from Saurabh Kumar · Prepared for the APM role at Eloelo",

    intro: `I don’t think a cover letter tells you much about how someone thinks about product. So instead of writing one, I spent time understanding Eloelo properly — what it’s building, who it’s for, and where the interesting product problems are. This is that thinking, written down.<br><br><div style="display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px 18px;margin-top:8px;font-size:14px;line-height:1.4;font-family:'Inter',system-ui,sans-serif;"><div style="font-weight:700;color:#FFFFFF;">Saurabh Kumar</div><a href="tel:+919369095275" style="color:#FF3CAC;text-decoration:none;font-weight:500;">+91 93690 95275</a><a href="mailto:mr.saurabh.kumar408@gmail.com" style="color:#FF3CAC;text-decoration:none;font-weight:500;">mr.saurabh.kumar408@gmail.com</a><a href="https://www.linkedin.com/in/saurabh-kumar-workhard/" target="_blank" style="color:#FF3CAC;text-decoration:none;font-weight:500;">LinkedIn →</a></div>`,

    understand: {
      title: "What I researched about Eloelo",
      content: `Eloelo is a live social entertainment platform built around interactive livestreams and real-time community engagement. That description sounds like a lot of other apps. <strong>What makes Eloelo genuinely different is the focus on participation over consumption.</strong><br><br>Most social platforms are built for passive scrolling. Eloelo is built for active involvement — you’re not watching a stream, you’re playing Tambola with the host, sending virtual gifts, joining a PK battle, chatting in real time. The platform enables creators to host interactive video and audio livestreams in local languages using AI-led tools to build community and monetise directly from their audiences — with over <strong>20,000 creators</strong> now earning a livelihood by streaming.`
    },

    gaps: {
      title: "The gaps I noticed",
      intro: "I want to be careful here — I’m looking from the outside, so some of this might already be on the roadmap or already solved. These are observations, not criticisms.",
      items: [
        {
          title: "New user discovery is still largely passive",
          content: `Eloelo has a wide variety of games — card games, Lucky 7, Antakshari, Tambola, Quiz, roulette — genuinely fun content. But a new user opening the app for the first time sees a feed of live rooms and has to figure out what to join.<br><br>There’s no onboarding that helps them find streams that match their language, interests, or schedule. The first session is often random. <em>Random first sessions don’t convert to habits.</em> If the first stream you join happens to be boring or in a language you don’t speak, you’re gone.`
        },
        {
          title: "Creators have limited tools to understand and grow their audience",
          content: `More than 20,000 creators are earning a livelihood on the platform. That’s impressive. But if you’re a creator trying to grow, what data do you have?<br><br>When do your viewers show up? Which game formats get the most virtual gifts? Which stream topics keep people longer? Right now I don’t see creator analytics as a prominent feature. <em>Creators who can’t measure can’t improve. Creators who can’t improve eventually plateau and churn.</em>`
        },
        {
          title: "The habit loop between sessions isn’t strong enough",
          content: `Eloelo is live by nature — you can only watch a stream when it’s happening. If your favourite creator streams at 9pm and you miss it, there’s nothing to come back to.<br><br>Between sessions the app has limited pull. Notifications help but they’re blunt instruments. There’s an opportunity to build smarter between-session engagement — personalised schedules, reminders for upcoming streams from creators you follow, highlights from streams you missed.`
        }
      ]
    },

    whyme: {
      title: "Why I think some of my experience is relevant",
      intro: "I want to be straightforward — I haven’t worked in social entertainment. The problems I’ve worked on are in healthtech. But some of them feel related.",
      rows: [
        {
          problem: "Building habit between primary moments",
          mywork: "At YourDOST, 65% of platform engagement was driven by one thing: therapy sessions. Users had no reason to open the app on non-therapy days. I built a parallel engagement layer — neuroscience games, social challenges, offline activation — that shifted non-mandatory engagement from 35% to 45% across 9,000 users. The underlying problem is similar to Eloelo’s between-session gap: how do you build a reason to open the app when the primary activity isn’t happening right now."
        },
        {
          problem: "Making new users find value faster",
          mywork: "At Seekho I ran 300+ user interviews and rebuilt onboarding for a 13,000-person community moving from WhatsApp to an app. Activation went from 30% to 55%. The insight was simple: people don’t explore, they need to be guided to the one thing that will make them stay. The same principle applies to Eloelo’s new user discovery problem."
        },
        {
          problem: "Data-driven iteration",
          mywork: "I’ve instrumented funnels, built dashboards, and made product decisions from data — including setting up PostHog as the analytics system at YourDOST from scratch. I’m comfortable sitting with data to understand what’s actually happening vs what we think is happening. Feels like table stakes for this role."
        },
        {
          problem: "What I’d genuinely need to learn",
          mywork: "Live streaming product dynamics, creator economy mechanics, and the specific behaviour patterns of Eloelo’s Bharat-first user base. I’d want to spend the first few weeks just watching streams, talking to creators, and understanding the platform from the inside before forming strong opinions."
        }
      ]
    },

    demo: {
      title: "One idea I’d explore — Creator Growth Dashboard",
      intro: `<strong>The idea in one sentence:</strong> Give Eloelo’s creators the data they need to understand what’s working and grow their audience deliberately — not by guessing.<br><br><strong>The problem it addresses:</strong> Right now a creator on Eloelo knows their follower count and how many gifts they received. That’s about it. They can’t easily answer: <em>what time of day do my viewers show up? Which game format drives the most gifting? Which topics make viewers stay longer?</em> Without this data, growing as a creator is mostly trial and error.<br><br>This matters for Eloelo’s business because creator quality drives viewer retention. A creator who understands their audience makes better streams. Better streams keep viewers longer. Viewers who stay longer gift more. More gifting means more creator income. More creator income means creators stay on the platform. <strong>It’s a flywheel — and better creator analytics is one of the inputs that makes it spin faster.</strong><br><br><strong>1 — Stream Performance Summary.</strong> After every stream ends, the creator sees a simple summary card: peak concurrent viewers, average watch time, total gifts received, new followers gained, best performing moment. Over time this builds into a history they can learn from.<br><br><strong>2 — Audience Insights.</strong> When do your viewers show up? A simple heatmap showing which days and hours your audience is most active. Which languages your viewers speak. What percentage are new vs returning. This helps creators schedule smarter and tailor their content.<br><br><strong>3 — What’s Working.</strong> A simple comparison across the creator’s last 10 streams — which formats (games vs chat vs performances) drove the most gifting, which topics got the longest average watch time, which stream length is optimal for their specific audience. Not complex analytics — just the 3–4 signals that actually help a creator make better decisions about their next stream.<br><br><strong>Why this is a good first APM project:</strong> Contained enough to ship in a single sprint cycle. Directly impacts a metric Eloelo cares about — creator retention and earnings. Requires working closely with engineering and design to get the data pipeline and UI right. And it creates a feedback loop that helps creators improve over time — which ultimately improves the viewer experience too.`,
      screens: [
        {
          id: 1,
          title: "Creator Studio",
          description: "Home — week-at-a-glance, recent streams, and a way into deeper insights",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#fff;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <div>
                <div style="font-size:10px;color:#B0A0C8;font-weight:500;">Creator Studio</div>
                <div style="font-weight:700;font-size:14px;letter-spacing:-0.01em;">@PriyaLive</div>
              </div>
              <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#FF3CAC,#6B3FFF);"></div>
            </div>
            <div style="background:linear-gradient(135deg,#FF3CAC 0%,#6B3FFF 100%);border-radius:16px;padding:16px;margin-bottom:14px;color:#fff;box-shadow:0 8px 24px rgba(255,60,172,0.3);">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;opacity:0.9;margin-bottom:10px;">THIS WEEK</div>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
                <div>
                  <div style="font-weight:800;font-size:18px;letter-spacing:-0.01em;">12.4h</div>
                  <div style="font-size:8.5px;opacity:0.85;text-transform:uppercase;letter-spacing:0.5px;">Streamed</div>
                </div>
                <div>
                  <div style="font-weight:800;font-size:18px;letter-spacing:-0.01em;">₹4,260</div>
                  <div style="font-size:8.5px;opacity:0.85;text-transform:uppercase;letter-spacing:0.5px;">Earned</div>
                </div>
                <div>
                  <div style="font-weight:800;font-size:18px;letter-spacing:-0.01em;">+340</div>
                  <div style="font-size:8.5px;opacity:0.85;text-transform:uppercase;letter-spacing:0.5px;">Followers</div>
                </div>
              </div>
            </div>
            <div style="font-size:10px;color:#B0A0C8;font-weight:600;letter-spacing:1px;margin-bottom:8px;">RECENT STREAMS</div>
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:11px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:start;">
                <div>
                  <div style="font-weight:600;font-size:12px;">Tambola Saturday</div>
                  <div style="font-size:10px;color:#B0A0C8;">Yesterday · 1h 24m</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:11px;color:#FF3CAC;font-weight:700;">+₹1,820</div>
                  <div style="font-size:9px;color:#B0A0C8;">412 viewers</div>
                </div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:11px;margin-bottom:8px;">
              <div style="display:flex;justify-content:space-between;align-items:start;">
                <div>
                  <div style="font-weight:600;font-size:12px;">Antakshari Night</div>
                  <div style="font-size:10px;color:#B0A0C8;">2 days ago · 58m</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:11px;color:#FF3CAC;font-weight:700;">+₹940</div>
                  <div style="font-size:9px;color:#B0A0C8;">218 viewers</div>
                </div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:11px;margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;align-items:start;">
                <div>
                  <div style="font-weight:600;font-size:12px;">Quiz with Priya</div>
                  <div style="font-size:10px;color:#B0A0C8;">4 days ago · 1h 12m</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:11px;color:#FF3CAC;font-weight:700;">+₹1,280</div>
                  <div style="font-size:9px;color:#B0A0C8;">298 viewers</div>
                </div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-around;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08);font-size:10px;">
              <div style="text-align:center;color:#FF3CAC;font-weight:700;">Home</div>
              <div style="text-align:center;color:#666;">Insights</div>
              <div style="text-align:center;color:#666;">Streams</div>
              <div style="text-align:center;color:#666;">Profile</div>
            </div>
          </div>`
        },
        {
          id: 2,
          title: "Stream Performance",
          description: "Post-stream summary — peak viewers, watch time, gifts, and the best moment of the night",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#fff;">
            <div style="font-size:11px;color:#FF3CAC;font-weight:600;margin-bottom:6px;">← Back</div>
            <div style="text-align:center;margin-bottom:14px;">
              <div style="font-size:9px;color:#B0A0C8;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Stream ended</div>
              <div style="font-weight:800;font-size:18px;margin-top:4px;letter-spacing:-0.01em;">Tambola Saturday</div>
              <div style="font-size:11px;color:#B0A0C8;">1h 24m · 412 viewers</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
              <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:11px;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Peak viewers</div>
                <div style="font-weight:800;font-size:20px;color:#FF3CAC;letter-spacing:-0.01em;">412</div>
              </div>
              <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:11px;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Avg watch</div>
                <div style="font-weight:800;font-size:20px;color:#fff;letter-spacing:-0.01em;">9m 42s</div>
              </div>
              <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:11px;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Gifts</div>
                <div style="font-weight:800;font-size:20px;color:#fff;letter-spacing:-0.01em;">182</div>
                <div style="font-size:10px;color:#FF3CAC;margin-top:2px;font-weight:600;">₹1,820</div>
              </div>
              <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:11px;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">New followers</div>
                <div style="font-weight:800;font-size:20px;color:#fff;letter-spacing:-0.01em;">+58</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#FF3CAC 0%,#6B3FFF 100%);border-radius:12px;padding:14px;margin-bottom:14px;color:#fff;">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;opacity:0.9;margin-bottom:6px;">⚡ BEST MOMENT</div>
              <div style="font-weight:700;font-size:13px;line-height:1.4;margin-bottom:6px;">42:18 — when you called the full house</div>
              <div style="font-size:11px;opacity:0.9;line-height:1.5;">Peak engagement here — 184 messages in 60s, 64 gifts in 2 mins.</div>
              <div style="margin-top:10px;height:30px;background:rgba(255,255,255,0.12);border-radius:6px;">
                <svg width="100%" height="100%" viewBox="0 0 200 30" preserveAspectRatio="none" style="display:block;"><polyline points="0,22 20,18 40,20 60,16 80,14 95,4 110,8 130,16 150,18 170,20 200,22" fill="none" stroke="#fff" stroke-width="2"/><circle cx="95" cy="4" r="3" fill="#fff"/></svg>
              </div>
            </div>
            <div style="display:flex;gap:8px;">
              <div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:#fff;text-align:center;padding:11px;border-radius:10px;font-weight:600;font-size:12px;">Replay</div>
              <div style="flex:1;background:#FF3CAC;color:#fff;text-align:center;padding:11px;border-radius:10px;font-weight:600;font-size:12px;box-shadow:0 4px 14px rgba(255,60,172,0.3);">Share to feed</div>
            </div>
          </div>`
        },
        {
          id: 3,
          title: "Audience Heatmap",
          description: "When your viewers actually show up — schedule against your peak window",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#fff;">
            <div style="font-weight:800;font-size:17px;margin-bottom:2px;letter-spacing:-0.01em;">When your audience shows up</div>
            <div style="font-size:11px;color:#B0A0C8;margin-bottom:14px;">Last 30 days · 8,420 viewers</div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;margin-bottom:12px;">
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:6px;align-items:center;">
                <div></div>
                <div style="font-size:8px;color:#B0A0C8;text-align:center;font-weight:600;">MORN</div>
                <div style="font-size:8px;color:#B0A0C8;text-align:center;font-weight:600;">AFTN</div>
                <div style="font-size:8px;color:#B0A0C8;text-align:center;font-weight:600;">EVE</div>
                <div style="font-size:8px;color:#B0A0C8;text-align:center;font-weight:600;">8–11p</div>
                <div style="font-size:8px;color:#B0A0C8;text-align:center;font-weight:600;">LATE</div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:4px;align-items:center;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;">M</div>
                <div style="height:18px;background:rgba(255,60,172,0.08);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.10);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.18);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.42);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.20);border-radius:3px;"></div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:4px;align-items:center;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;">T</div>
                <div style="height:18px;background:rgba(255,60,172,0.05);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.10);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.20);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.45);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.18);border-radius:3px;"></div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:4px;align-items:center;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;">W</div>
                <div style="height:18px;background:rgba(255,60,172,0.08);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.12);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.22);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.50);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.22);border-radius:3px;"></div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:4px;align-items:center;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;">T</div>
                <div style="height:18px;background:rgba(255,60,172,0.10);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.14);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.25);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.55);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.25);border-radius:3px;"></div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:4px;align-items:center;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;">F</div>
                <div style="height:18px;background:rgba(255,60,172,0.10);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.16);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.32);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.65);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.32);border-radius:3px;"></div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;margin-bottom:4px;align-items:center;">
                <div style="font-size:9px;color:#FF3CAC;font-weight:700;">S</div>
                <div style="height:18px;background:rgba(255,60,172,0.16);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.20);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.34);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.95);border-radius:3px;box-shadow:0 0 8px rgba(255,60,172,0.6);"></div>
                <div style="height:18px;background:rgba(255,60,172,0.45);border-radius:3px;"></div>
              </div>
              <div style="display:grid;grid-template-columns:18px repeat(5,1fr);gap:4px;align-items:center;">
                <div style="font-size:9px;color:#B0A0C8;font-weight:600;">S</div>
                <div style="height:18px;background:rgba(255,60,172,0.18);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.22);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.36);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.78);border-radius:3px;"></div>
                <div style="height:18px;background:rgba(255,60,172,0.38);border-radius:3px;"></div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#FF3CAC 0%,#6B3FFF 100%);border-radius:12px;padding:12px;color:#fff;margin-bottom:12px;">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;opacity:0.9;margin-bottom:6px;">⚡ INSIGHT</div>
              <div style="font-size:12px;line-height:1.5;"><strong>Saturday 9–10pm is your peak.</strong> Streaming at peak times = 3.2× more gifts on average.</div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:11px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:12px;">Schedule next stream</div>
                <div style="font-size:10px;color:#B0A0C8;">Sat 9pm · auto-suggest</div>
              </div>
              <div style="background:#FF3CAC;color:#fff;padding:6px 11px;border-radius:8px;font-size:11px;font-weight:600;">Schedule</div>
            </div>
          </div>`
        },
        {
          id: 4,
          title: "Audience Profile",
          description: "Who's watching — returning vs new, languages, regions. Schedule and tailor accordingly.",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#fff;">
            <div style="font-weight:800;font-size:18px;margin-bottom:2px;letter-spacing:-0.01em;">Who’s watching</div>
            <div style="font-size:11px;color:#B0A0C8;margin-bottom:14px;">8,420 unique viewers · 30 days</div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;margin-bottom:10px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">RETURNING vs NEW</div>
              <div style="display:flex;align-items:center;gap:14px;">
                <div style="position:relative;width:70px;height:70px;flex-shrink:0;">
                  <svg viewBox="0 0 36 36" style="display:block;"><circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"/><circle cx="18" cy="18" r="14" fill="none" stroke="#FF3CAC" stroke-width="4" stroke-dasharray="54.5 87.96" stroke-dashoffset="0" transform="rotate(-90 18 18)" style="filter:drop-shadow(0 0 4px rgba(255,60,172,0.5));"/></svg>
                  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">62%</div>
                </div>
                <div style="flex:1;font-size:12px;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                    <div style="width:8px;height:8px;background:#FF3CAC;border-radius:50%;"></div>
                    <div><strong>62%</strong> returning</div>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:8px;height:8px;background:rgba(255,255,255,0.25);border-radius:50%;"></div>
                    <div><strong>38%</strong> new this month</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;margin-bottom:10px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">LANGUAGES</div>
              <div style="margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Hindi</span><span style="color:#FF3CAC;font-weight:600;">58%</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:5px;"><div style="background:linear-gradient(90deg,#FF3CAC,#6B3FFF);height:5px;border-radius:3px;width:58%;"></div></div>
              </div>
              <div style="margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Bhojpuri</span><span style="color:#FF3CAC;font-weight:600;">22%</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:5px;"><div style="background:linear-gradient(90deg,#FF3CAC,#6B3FFF);height:5px;border-radius:3px;width:22%;"></div></div>
              </div>
              <div style="margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Marathi</span><span style="color:#FF3CAC;font-weight:600;">12%</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:5px;"><div style="background:linear-gradient(90deg,#FF3CAC,#6B3FFF);height:5px;border-radius:3px;width:12%;"></div></div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Other</span><span style="color:#B0A0C8;font-weight:600;">8%</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:5px;"><div style="background:rgba(255,255,255,0.3);height:5px;border-radius:3px;width:8%;"></div></div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">TOP REGIONS</div>
              <div style="display:flex;justify-content:space-between;font-size:11px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>UP</span><span style="color:#FF3CAC;font-weight:600;">2,420</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Bihar</span><span style="color:#FF3CAC;font-weight:600;">1,820</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Maharashtra</span><span style="color:#FF3CAC;font-weight:600;">980</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;padding:5px 0;"><span>Diaspora — UAE</span><span style="color:#FF3CAC;font-weight:600;">420</span></div>
            </div>
          </div>`
        },
        {
          id: 5,
          title: "What's Working",
          description: "Compare formats, topics and stream length across your last 10 streams",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#fff;">
            <div style="font-weight:800;font-size:18px;margin-bottom:2px;letter-spacing:-0.01em;">What’s working</div>
            <div style="font-size:11px;color:#B0A0C8;margin-bottom:14px;">From your last 10 streams</div>
            <div style="background:linear-gradient(135deg,#FF3CAC 0%,#6B3FFF 100%);border-radius:12px;padding:14px;margin-bottom:12px;color:#fff;box-shadow:0 6px 20px rgba(255,60,172,0.25);">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;opacity:0.9;margin-bottom:6px;">🏆 BEST FORMAT</div>
              <div style="font-weight:800;font-size:20px;letter-spacing:-0.01em;margin-bottom:4px;">Tambola</div>
              <div style="font-size:11px;opacity:0.9;line-height:1.5;">Drove 64% of your gifts. Avg watch time 2.4× higher than chat streams.</div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;margin-bottom:12px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">GIFTS BY FORMAT</div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Tambola</span><span style="color:#FF3CAC;font-weight:700;">₹2,840</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:6px;"><div style="background:linear-gradient(90deg,#FF3CAC,#6B3FFF);height:6px;border-radius:3px;width:92%;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Antakshari</span><span style="color:#FF3CAC;font-weight:700;">₹1,420</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:6px;"><div style="background:linear-gradient(90deg,#FF3CAC,#6B3FFF);height:6px;border-radius:3px;width:46%;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Quiz</span><span style="color:#FF3CAC;font-weight:700;">₹920</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:6px;"><div style="background:linear-gradient(90deg,#FF3CAC,#6B3FFF);height:6px;border-radius:3px;width:30%;"></div></div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span>Just chat</span><span style="color:#B0A0C8;font-weight:700;">₹260</span></div>
                <div style="background:rgba(255,255,255,0.08);border-radius:3px;height:6px;"><div style="background:rgba(255,255,255,0.25);height:6px;border-radius:3px;width:8%;"></div></div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">SWEET SPOT</div>
              <div style="font-weight:700;font-size:13px;margin-bottom:4px;">60–90 minute streams</div>
              <div style="font-size:11px;color:#B0A0C8;line-height:1.5;">Your viewers stay longest in 60–90 min streams. Beyond 2 hours, watch time drops 40%.</div>
            </div>
          </div>`
        },
        {
          id: 6,
          title: "Plan Next Stream",
          description: "A recommendation, not a blank slate — best day, format, length, language for you",
          content: `<div style="font-family:'Inter',system-ui,sans-serif;padding:8px 4px;color:#fff;">
            <div style="font-weight:800;font-size:18px;margin-bottom:2px;letter-spacing:-0.01em;">Plan your next stream</div>
            <div style="font-size:11px;color:#B0A0C8;margin-bottom:14px;">Built from your audience data</div>
            <div style="background:linear-gradient(135deg,#FF3CAC 0%,#6B3FFF 100%);border-radius:16px;padding:16px;margin-bottom:12px;color:#fff;box-shadow:0 8px 28px rgba(255,60,172,0.32);">
              <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;opacity:0.9;margin-bottom:8px;">✨ RECOMMENDED</div>
              <div style="font-weight:800;font-size:22px;letter-spacing:-0.01em;line-height:1.2;margin-bottom:4px;">Saturday · 9:00 PM</div>
              <div style="font-size:11px;opacity:0.9;margin-bottom:14px;">Your peak audience window</div>
              <div style="background:rgba(255,255,255,0.15);border-radius:10px;padding:10px;">
                <div style="display:flex;justify-content:space-between;align-items:center;text-align:left;">
                  <div>
                    <div style="font-size:10px;opacity:0.85;">Format</div>
                    <div style="font-weight:700;font-size:13px;">Tambola</div>
                  </div>
                  <div>
                    <div style="font-size:10px;opacity:0.85;">Length</div>
                    <div style="font-weight:700;font-size:13px;">75 min</div>
                  </div>
                  <div>
                    <div style="font-size:10px;opacity:0.85;">Lang</div>
                    <div style="font-weight:700;font-size:13px;">Hindi</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;margin-bottom:12px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">WHY</div>
              <div style="font-size:11px;line-height:1.6;color:#E5E0F0;">Sat 9pm reaches 3.2× more viewers than weekday streams. Tambola drives 64% of your gifts. 75 min keeps avg watch time above 9 mins.</div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px;margin-bottom:14px;">
              <div style="font-size:10px;color:#B0A0C8;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">PROJECTED IMPACT</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div>
                  <div style="font-weight:800;font-size:18px;color:#FF3CAC;">~480</div>
                  <div style="font-size:10px;color:#B0A0C8;">est. peak viewers</div>
                </div>
                <div>
                  <div style="font-weight:800;font-size:18px;color:#FF3CAC;">~₹2,200</div>
                  <div style="font-size:10px;color:#B0A0C8;">est. gifts</div>
                </div>
              </div>
            </div>
            <div style="background:#FF3CAC;color:#fff;text-align:center;padding:13px;border-radius:10px;font-weight:700;font-size:13px;margin-bottom:8px;box-shadow:0 6px 20px rgba(255,60,172,0.4);">Schedule stream</div>
            <div style="text-align:center;font-size:11px;color:#B0A0C8;">Or pick another time →</div>
          </div>`
        }
      ]
    },

    closing: {
      content: "I find Eloelo genuinely interesting — not just as a product to put on a resume, but as a problem worth working on. Building a platform where people in 8 Indian languages can connect, play, and earn a living is meaningful work. I’d like to contribute to that if it feels like a fit.<br><br>Happy to talk through any of this in more detail.",
      name: "Saurabh Kumar",
      phone: "+91 93690 95275",
      email: "mr.saurabh.kumar408@gmail.com",
      linkedin: "https://www.linkedin.com/in/saurabh-kumar-workhard/"
    }
  },

  "workatyourdost": {
    companyName: "YourDOST",
    role: "Product Manager",
    headline: "Building AI at YourDOST — making therapy structured for users, and the business operationally scalable without growing the team.",
    subline: "What I shipped as a PM at India’s largest emotional wellness platform · Saurabh Kumar",

    intro: `A consolidated look at the AI work I led at YourDOST — across the user-facing therapy experience and the operational side of the business. Every bet on this page came back to one question: <em>can we make therapy more structured and impactful for users while making the business operationally scalable, without scaling the human team linearly?</em>`,

    understand: {
      title: "The premise",
      content: `Scaling therapy traditionally means scaling everything around it linearly — more therapists, more supervisors, more support, more ops. Every new user added bandwidth somewhere. <em>The unit economics never improved.</em><br><br>I worked across two parallel tracks at YourDOST to break that curve:<br><br><strong>1. For users — therapy becomes more structured and impactful.</strong> A session shouldn’t be a black box that users walk out of and forget. We built memory across sessions, summaries, goals, homework, and personalisation so each session compounds on the last.<br><br><strong>2. For the business — therapy ops scales without scaling humans.</strong> Support, supervision, hiring, training, reminders, tracking — every bottleneck where a human was doing pattern-matching at volume became a candidate for automation. The remaining humans focused on judgment, not throughput.<br><br>What follows is what we shipped across both tracks.`
    },

    gaps: {
      title: "AI across the therapy lifecycle",
      intro: "Three stages of a user’s journey, three layers of AI — each one removing friction or adding structure.",
      items: [
        {
          title: "01 — Before the session",
          content: `<strong>Arva AI</strong> — an agent that runs structured therapist hiring screens and onboarding/training. We built it because growing the therapist pool meant growing TA + L&D bandwidth in lockstep, which capped how fast we could expand supply. Arva handles the structured layers — case-based screening, training simulations, calibration — so humans only step in for the judgment calls.<br><br><strong>Pre-session Copilot</strong> — synthesises a user’s history (platform usage, past conversations, prior session outcomes, journal entries) into a brief the therapist reads in 60 seconds before each session. Therapists used to walk into sessions with patchy memory of previous conversations — especially repeat users across long arcs. The brief gives them continuity without the cognitive load.`
        },
        {
          title: "02 — In the session",
          content: `<strong>In-session Copilot</strong> — live transcription, automated session documentation, and notetaking. Therapists used to either type during sessions (breaks rapport) or write notes from memory afterwards (incomplete, time-consuming). The Copilot listens, transcribes, structures the conversation into themes/action items/risk flags, and produces session notes cleaner than anyone could write themselves.<br><br>The therapist can be fully present. The notes are better. Documentation overhead drops to near zero.`
        },
        {
          title: "03 — After the session",
          content: `Four things that turn a one-off session into a continuous arc:<br><br>• <strong>Session summary</strong> — a user-facing recap of what was discussed, in plain language.<br>• <strong>Goal setting</strong> — generated from the session, refined with the user.<br>• <strong>Homework planning</strong> — personalised exercises tied to the session’s themes.<br>• <strong>Personalisation</strong> — next-session prep that loops back into the pre-session Copilot, so the therapist starts the next session knowing what the user worked on between sessions.<br><br>The arc closes. Each session compounds on the last.`
        }
      ]
    },

    whyme: {
      title: "Operational impact behind the scenes",
      intro: "The user-facing AI gets the attention. The behind-the-scenes automation is where the real cost-curve break happens — these are the places where a human team used to scale linearly with the user base, and now doesn’t.",
      headers: { left: "where humans were stretched", right: "what AI now handles" },
      rows: [
        {
          problem: "The support team manually triaged every ticket from Freshdesk and drafted replies. Volume scaled with users.",
          mywork: "I led a ticket-analysis bot that reads incoming tickets, classifies intent, drafts the first-layer response, and only escalates ambiguous or high-emotion ones. We built it by analysing historical Freshdesk patterns to define exactly what could be safely automated — and what shouldn’t be."
        },
        {
          problem: "The ops team manually nudged users for upcoming sessions, missed follow-ups, and incomplete onboarding.",
          mywork: "Backend automation we shipped now owns reminder cadences and tracking flows end-to-end — across session reminders, no-show recovery, onboarding nudges, and post-session follow-ups."
        },
        {
          problem: "Senior therapists manually scrubbed session recordings and transcripts to supervise junior therapists and flag concerning sessions.",
          mywork: "Supervision AI flags negative-sentiment sessions, risk indicators, and protocol breaches — seniors only spend their time on what genuinely needs their judgment, not on routine review."
        },
        {
          problem: "The L&D team designed training programs and tracked progress for every new therapist joining the platform.",
          mywork: "Arva AI handles structured onboarding and continuous evaluation, so L&D can focus on edge cases and quality."
        }
      ]
    },

    demo: {
      title: "What the products actually look like",
      intro: `Four screens covering the user’s arc plus the supervision layer behind it. These are simplified renders of the actual surfaces we shipped, not concept art.`,
      screens: [
        {
          id: 1,
          title: "Pre-session brief",
          description: "Therapist view — 60-second read before the session starts",
          content: `<div style="font-family:'DM Sans',system-ui,sans-serif;padding:8px 4px;color:#1A1714;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <div>
                <div style="font-size:10px;color:#888;font-weight:500;letter-spacing:0.4px;">Session in 12 min</div>
                <div style="font-weight:700;font-size:14px;letter-spacing:-0.01em;">Riya M. · 5th session</div>
              </div>
              <div style="font-size:10px;color:#D4380D;background:#FBE9E0;padding:4px 8px;border-radius:6px;font-weight:600;">brief</div>
            </div>
            <div style="background:#1A1714;border-radius:14px;padding:14px;margin-bottom:10px;color:#fff;">
              <div style="font-size:9px;color:#FFB199;font-weight:700;letter-spacing:1.5px;margin-bottom:6px;">MOOD TREND · LAST 14 DAYS</div>
              <div style="display:flex;align-items:flex-end;gap:3px;height:36px;">
                <div style="flex:1;background:#D4380D;height:30%;border-radius:2px;"></div>
                <div style="flex:1;background:#D4380D;height:45%;border-radius:2px;"></div>
                <div style="flex:1;background:#D4380D;height:35%;border-radius:2px;"></div>
                <div style="flex:1;background:#D4380D;height:60%;border-radius:2px;"></div>
                <div style="flex:1;background:#D4380D;height:55%;border-radius:2px;"></div>
                <div style="flex:1;background:#FF8866;height:70%;border-radius:2px;"></div>
                <div style="flex:1;background:#FF8866;height:80%;border-radius:2px;"></div>
              </div>
              <div style="font-size:11px;color:#C9C2BA;margin-top:8px;line-height:1.4;">Improving since last session. Sleep tracker entries up.</div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:12px;padding:12px;margin-bottom:10px;">
              <div style="font-size:9px;color:#888;font-weight:700;letter-spacing:1.2px;margin-bottom:6px;">LAST SESSION · 8 DAYS AGO</div>
              <div style="font-size:12px;line-height:1.5;color:#3A3530;">Worked on boundary-setting with manager. Committed to a 1:1 conversation by Friday. Surfaced anxiety around perceived underperformance.</div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:12px;padding:12px;margin-bottom:10px;">
              <div style="font-size:9px;color:#888;font-weight:700;letter-spacing:1.2px;margin-bottom:6px;">JOURNAL ENTRIES · 3 NEW</div>
              <div style="font-size:12px;line-height:1.5;color:#3A3530;">"Had the conversation. It went better than I thought." — 2 days ago</div>
            </div>
            <div style="background:#FBE9E0;border:1px solid #F4C5B0;border-radius:12px;padding:12px;">
              <div style="font-size:9px;color:#D4380D;font-weight:700;letter-spacing:1.5px;margin-bottom:6px;">SUGGESTED TALKING POINTS</div>
              <div style="font-size:12px;line-height:1.6;color:#3A3530;">• Follow up on Friday’s 1:1<br>• Revisit the underperformance narrative<br>• Explore what made the conversation easier than expected</div>
            </div>
          </div>`
        },
        {
          id: 2,
          title: "In-session live",
          description: "Live transcript on one side, auto-categorised notes on the other",
          content: `<div style="font-family:'DM Sans',system-ui,sans-serif;padding:8px 4px;color:#1A1714;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <div>
                <div style="display:flex;align-items:center;gap:6px;font-size:10px;color:#D4380D;font-weight:600;"><span style="width:6px;height:6px;border-radius:50%;background:#D4380D;display:inline-block;"></span> RECORDING · 18:42</div>
                <div style="font-weight:700;font-size:14px;letter-spacing:-0.01em;margin-top:2px;">Riya M. · Live session</div>
              </div>
              <div style="font-size:10px;color:#888;background:#F0EBE0;padding:4px 8px;border-radius:6px;font-weight:500;">notes auto</div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:12px;padding:12px;margin-bottom:10px;max-height:140px;overflow:hidden;">
              <div style="font-size:9px;color:#888;font-weight:700;letter-spacing:1.2px;margin-bottom:8px;">LIVE TRANSCRIPT</div>
              <div style="font-size:11px;line-height:1.55;color:#555;">
                <div style="margin-bottom:6px;"><strong style="color:#1A1714;">Riya:</strong> So I had the conversation with my manager on Friday …</div>
                <div style="margin-bottom:6px;"><strong style="color:#D4380D;">You:</strong> How did that feel afterwards?</div>
                <div style="margin-bottom:6px;"><strong style="color:#1A1714;">Riya:</strong> Honestly, lighter than I expected. I think I was building it up.</div>
                <div style="color:#999;font-style:italic;">…</div>
              </div>
            </div>
            <div style="background:#1A1714;border-radius:12px;padding:12px;color:#fff;margin-bottom:10px;">
              <div style="font-size:9px;color:#FFB199;font-weight:700;letter-spacing:1.5px;margin-bottom:8px;">AUTO-NOTES · THEMES SO FAR</div>
              <div style="font-size:11px;line-height:1.6;color:#E8DECC;">
                • Boundary-setting follow-through (positive)<br>
                • Self-awareness around catastrophising<br>
                • Workplace identity — returning theme
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="background:#fff;border:1px solid #E8DECC;border-radius:10px;padding:10px;">
                <div style="font-size:8px;color:#888;font-weight:700;letter-spacing:1px;margin-bottom:4px;">ACTION ITEMS</div>
                <div style="font-weight:700;font-size:18px;color:#D4380D;">3</div>
              </div>
              <div style="background:#fff;border:1px solid #E8DECC;border-radius:10px;padding:10px;">
                <div style="font-size:8px;color:#888;font-weight:700;letter-spacing:1px;margin-bottom:4px;">RISK FLAGS</div>
                <div style="font-weight:700;font-size:18px;color:#0AA970;">none</div>
              </div>
            </div>
          </div>`
        },
        {
          id: 3,
          title: "Post-session summary",
          description: "User view — what was discussed, the goal, the homework",
          content: `<div style="font-family:'DM Sans',system-ui,sans-serif;padding:8px 4px;color:#1A1714;">
            <div style="margin-bottom:14px;">
              <div style="font-size:10px;color:#888;font-weight:500;letter-spacing:0.4px;">Today · 4:30 PM session</div>
              <div style="font-weight:700;font-size:16px;letter-spacing:-0.01em;margin-top:2px;">Your session recap</div>
            </div>
            <div style="background:#FBE9E0;border:1px solid #F4C5B0;border-radius:12px;padding:14px;margin-bottom:10px;">
              <div style="font-size:9px;color:#D4380D;font-weight:700;letter-spacing:1.5px;margin-bottom:6px;">WHAT WE DISCUSSED</div>
              <div style="font-size:12px;line-height:1.55;color:#3A3530;">You shared how the Friday conversation with your manager went better than you expected. We explored the gap between the story you tell yourself and what actually happens in those moments.</div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:12px;padding:12px;margin-bottom:10px;">
              <div style="font-size:9px;color:#888;font-weight:700;letter-spacing:1.2px;margin-bottom:8px;">KEY TAKEAWAYS</div>
              <div style="font-size:12px;line-height:1.7;color:#3A3530;">
                • You’re better at hard conversations than you give yourself credit for.<br>
                • Catastrophising is a pattern — not the truth.<br>
                • Evidence beats anxiety. Keep collecting it.
              </div>
            </div>
            <div style="background:#1A1714;border-radius:12px;padding:14px;color:#fff;margin-bottom:10px;">
              <div style="font-size:9px;color:#FFB199;font-weight:700;letter-spacing:1.5px;margin-bottom:6px;">YOUR HOMEWORK · THIS WEEK</div>
              <div style="font-size:12px;line-height:1.6;color:#E8DECC;">Each evening, write down one moment where reality was kinder than your prediction. 2 minutes. No essays.</div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:12px;padding:12px;">
              <div style="font-size:9px;color:#888;font-weight:700;letter-spacing:1.2px;margin-bottom:6px;">GOAL FOR NEXT SESSION</div>
              <div style="font-size:12px;line-height:1.55;color:#3A3530;">Bring the week’s evidence list. We’ll look at the pattern together.</div>
            </div>
          </div>`
        },
        {
          id: 4,
          title: "Supervision dashboard",
          description: "Senior therapist view — only what needs human judgment",
          content: `<div style="font-family:'DM Sans',system-ui,sans-serif;padding:8px 4px;color:#1A1714;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <div>
                <div style="font-size:10px;color:#888;font-weight:500;letter-spacing:0.4px;">Supervision queue</div>
                <div style="font-weight:700;font-size:14px;letter-spacing:-0.01em;">Today</div>
              </div>
              <div style="font-size:10px;color:#D4380D;background:#FBE9E0;padding:4px 8px;border-radius:6px;font-weight:600;">7 flagged</div>
            </div>
            <div style="background:#1A1714;border-radius:12px;padding:14px;color:#fff;margin-bottom:10px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div style="font-size:9px;color:#FFB199;font-weight:700;letter-spacing:1.5px;">NEEDS REVIEW</div>
                <div style="font-size:10px;color:#FFB199;">priority</div>
              </div>
              <div style="font-size:12px;line-height:1.5;color:#E8DECC;">Session #4821 — risk language detected at 14:32. Junior therapist did not escalate. <strong style="color:#fff;">Review now →</strong></div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:10px;padding:11px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:11px;font-weight:700;color:#1A1714;">#4819 · Aman B.</div>
                <div style="font-size:10px;color:#888;margin-top:2px;">Negative sentiment trend · 3 sessions</div>
              </div>
              <div style="font-size:10px;color:#D4380D;font-weight:600;">flag</div>
            </div>
            <div style="background:#fff;border:1px solid #E8DECC;border-radius:10px;padding:11px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:11px;font-weight:700;color:#1A1714;">#4815 · Priya K.</div>
                <div style="font-size:10px;color:#888;margin-top:2px;">Protocol breach — missed risk-screen</div>
              </div>
              <div style="font-size:10px;color:#D4380D;font-weight:600;">flag</div>
            </div>
            <div style="background:#F0EBE0;border-radius:10px;padding:11px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:11px;font-weight:700;color:#3A3530;">141 sessions</div>
                <div style="font-size:10px;color:#888;margin-top:2px;">auto-cleared today — no review needed</div>
              </div>
              <div style="font-size:10px;color:#0AA970;font-weight:600;">all clear</div>
            </div>
          </div>`
        }
      ]
    },

    closing: {
      content: "YourDOST is the work I’m proudest of — not because of any single feature, but because we genuinely changed the slope. Therapy got better and more structured for users while the business got cheaper and more scalable to run. Both at once.<br><br>If you’re building something where AI needs to augment humans without replacing the judgment that matters, I’d love to talk.",
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
