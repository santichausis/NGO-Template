/**
 * FAQ CONTENT
 * -----------
 * Replace questions and answers with your organization's real information.
 * These are also used to generate the JSON-LD FAQ schema for Google rich results.
 * Keep answers concise — Google truncates after ~320 characters in rich results.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "General",
  "Donations",
  "Programs",
  "Volunteering",
] as const;

export const faqs: FaqItem[] = [
  // ── General ──────────────────────────────────────────────────────────────
  {
    id: "what-is-hopeforward",
    category: "General",
    question: "What is HopeForward and what does it do?",
    answer:
      "HopeForward is a registered 501(c)(3) nonprofit organization founded in 2010. We empower underserved communities through six interconnected programs: education, clean water access, women's economic empowerment, healthcare access, food security, and disaster relief. We operate across 48 countries in partnership with over 120 local organizations.",
  },
  {
    id: "how-long-operating",
    category: "General",
    question: "How long has HopeForward been operating?",
    answer:
      "HopeForward was founded in 2010 and has been operating for over 15 years. In that time, we have reached more than 250,000 people across 48 countries, built over 620 clean water wells, and enrolled 85,000 children in our education programs.",
  },
  {
    id: "where-do-you-work",
    category: "General",
    question: "In which countries does HopeForward work?",
    answer:
      "We currently operate active programs in 48 countries across sub-Saharan Africa, South and Southeast Asia, and Latin America. Our work is guided by local partner organizations who understand the specific needs of their communities. Visit our Programs page for a full list of active regions.",
  },
  {
    id: "accountability",
    category: "General",
    question: "How is HopeForward held accountable?",
    answer:
      "HopeForward publishes an annual report with full financial disclosure. We hold a 4-star rating from Charity Navigator and are accredited by the Better Business Bureau's Wise Giving Alliance. Our Board of Directors includes independent members who provide governance oversight. All program evaluations are conducted by independent third parties.",
  },

  // ── Donations ────────────────────────────────────────────────────────────
  {
    id: "how-much-goes-to-programs",
    category: "Donations",
    question: "How much of my donation goes directly to programs?",
    answer:
      "92 cents of every dollar donated goes directly to field programs and the communities we serve. Only 8% covers necessary administrative and fundraising costs — well below the nonprofit sector average of 25%. You can verify this in our annual report, available on our website.",
  },
  {
    id: "is-donation-tax-deductible",
    category: "Donations",
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. HopeForward is a registered 501(c)(3) nonprofit organization (EIN: 00-0000000), so all donations are tax-deductible to the fullest extent allowed by U.S. law. You will receive an automatic email receipt for your records immediately after donating.",
  },
  {
    id: "recurring-donation",
    category: "Donations",
    question: "Can I set up a recurring monthly donation?",
    answer:
      "Absolutely. Monthly giving is one of the most impactful ways to support our work because it provides predictable funding that helps us plan and sustain long-term programs. You can set up, pause, or cancel a monthly donation at any time from your donor portal with no fees or penalties.",
  },
  {
    id: "other-ways-to-give",
    category: "Donations",
    question: "What other ways can I support HopeForward besides donating money?",
    answer:
      "There are many ways to help: volunteer your time or professional skills, fundraise on our behalf for birthdays or events, make an in-kind donation of goods or services, establish a legacy gift in your will, or set up a corporate giving partnership. Contact us at contact@hopeforward.org to learn more.",
  },

  // ── Programs ─────────────────────────────────────────────────────────────
  {
    id: "how-programs-are-selected",
    category: "Programs",
    question: "How do you decide where and how to run your programs?",
    answer:
      "Every program starts with a community-led needs assessment. We never impose solutions from the outside. Our local partner organizations identify priority needs, co-design the program with us, and lead implementation. This ensures programs are culturally appropriate, sustainable, and owned by the community long after our involvement ends.",
  },
  {
    id: "how-to-measure-impact",
    category: "Programs",
    question: "How do you measure the impact of your programs?",
    answer:
      "We use a combination of quantitative indicators (enrollment rates, health outcomes, income data) and qualitative methods (community feedback, beneficiary interviews) to evaluate every program. Independent third-party evaluators assess our major programs every two years. Full results are published in our annual impact report.",
  },
  {
    id: "emergency-relief",
    category: "Programs",
    question: "How does your disaster relief program work?",
    answer:
      "Our Disaster Relief team deploys within 72 hours of a major emergency. We provide immediate shelter, food, clean water, and medical care in the acute phase, then transition to longer-term recovery support over 6–18 months. We have responded to over 30 emergencies to date, including floods, earthquakes, and conflict-related displacement.",
  },

  // ── Volunteering ─────────────────────────────────────────────────────────
  {
    id: "how-to-volunteer",
    category: "Volunteering",
    question: "How can I volunteer with HopeForward?",
    answer:
      "We have both local and international volunteering opportunities. Local volunteers support events, fundraising, and administrative work in our regional offices. International volunteers with specialized skills (medicine, engineering, education, agriculture) can apply for field placements of 3–12 months. Visit the Volunteer page or email volunteer@hopeforward.org to get started.",
  },
  {
    id: "skills-needed",
    category: "Volunteering",
    question: "What skills or qualifications do you look for in volunteers?",
    answer:
      "It depends on the role. Field placements typically require professional qualifications in a relevant field, cross-cultural communication skills, and flexibility. Local volunteer roles are open to anyone with enthusiasm and commitment. We provide training for all roles and match volunteers to opportunities where they can have the most impact.",
  },
];
