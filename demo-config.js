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
  }

  // Add more companies:
  // "razorpay": { ... },
  // "cred": { ... },
};
