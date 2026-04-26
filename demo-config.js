/* ═══════════════════════════════════════════
   DEMO CONFIG — add companies here
   Each key is the URL slug: /demo/[slug]
   ═══════════════════════════════════════════ */

const DEMO_COMPANIES = {
  "zenda": {
    companyName: "Zenda",
    role: "Product Manager",
    headline: "What I\u2019d build at Zenda \u2014 and why I think I can.",
    subline: "A product perspective from Saurabh Kumar, PM",

    understand: {
      title: "What I understand about Zenda",
      content: "Content coming soon \u2014 this section will cover my understanding of Zenda\u2019s product, market, users, and business model."
    },

    gaps: {
      title: "The gaps I found",
      items: [
        {
          title: "Gap 1 \u2014 Placeholder",
          content: "Content coming soon."
        },
        {
          title: "Gap 2 \u2014 Placeholder",
          content: "Content coming soon."
        },
        {
          title: "Gap 3 \u2014 Placeholder",
          content: "Content coming soon."
        }
      ]
    },

    whyme: {
      title: "Why I can do this",
      rows: [
        {
          problem: "Placeholder problem",
          mywork: "Placeholder equivalent work from my experience."
        },
        {
          problem: "Placeholder problem",
          mywork: "Placeholder equivalent work from my experience."
        }
      ]
    },

    demo: {
      title: "The Demo",
      intro: "Content coming soon \u2014 this section will show a working prototype of what I\u2019d build.",
      screens: [
        {
          id: 1,
          title: "Screen 1",
          description: "Placeholder screen",
          content: "<div style='display:flex;align-items:center;justify-content:center;height:100%;font-family:Caveat,cursive;font-size:1.3rem;color:#999;'>screen coming soon</div>"
        }
      ]
    },

    closing: {
      content: "I\u2019d love to walk you through this in person. If any of this resonates, let\u2019s talk.",
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
