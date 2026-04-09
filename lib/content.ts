/**
 * TEMPLATE CONTENT
 * ----------------
 * Replace all values below with your organization's real information.
 * Images use Unsplash placeholders — replace with your own images
 * stored in /public or via a CMS.
 */

export const siteConfig = {
  name: "HopeForward",
  tagline: "Building a Better World Together",
  description:
    "We empower communities through education, healthcare access, and sustainable development programs across underserved regions.",
  // Replace with your real domain (no trailing slash). Used for SEO, sitemap, and robots.txt.
  url: "https://ngo-template-delta.vercel.app",
  email: "contact@hopeforward.org",
  phone: "+1 (555) 234-5678",
  address: "123 Kindness Ave, San Francisco, CA 94105",
  donateUrl: "#donate",
  socialLinks: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  // The main headline — keep it short, powerful, and mission-driven
  headline: "Together, We Can Change Lives",
  subheadline:
    "Every child deserves access to education. Every family deserves clean water. Every community deserves a chance to thrive. Join us in making it happen.",
  primaryCta: { label: "Donate Now", href: "#donate" },
  secondaryCta: { label: "Learn More", href: "#about" },
  // Replace with a high-quality hero image (1920×1080 recommended)
  // Placeholder: volunteers building a shelter, sourced from Unsplash (free to use)
  image:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
  imageAlt: "Volunteers from diverse backgrounds working together in a community",
};

export const missionContent = {
  sectionLabel: "Our Mission",
  headline: "Empowering Communities,\nOne Step at a Time",
  body: [
    "Founded in 2010, HopeForward has been at the forefront of community-driven change. We believe that lasting impact comes not from charity alone, but from building local capacity and empowering communities to lead their own development.",
    "Our approach combines immediate relief with long-term programs in education, clean water access, healthcare, and economic empowerment. We work alongside communities — not for them — to create solutions that last generations.",
  ],
  // Replace with a photo that represents your organization's work
  image: "https://picsum.photos/seed/ngo-mission/800/600",
  imageAlt: "Community leader speaking at a local meeting",
  values: [
    {
      icon: "🤝",
      title: "Community-Led",
      description: "Local voices guide every decision we make.",
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description: "Programs designed to outlast our involvement.",
    },
    {
      icon: "🔍",
      title: "Transparent",
      description: "Full accountability on how every dollar is used.",
    },
    {
      icon: "❤️",
      title: "Compassionate",
      description: "Human dignity is at the core of our work.",
    },
  ],
};

export const impactStats = [
  {
    value: "250,000+",
    label: "Lives Impacted",
    description: "People reached through our programs since 2010",
  },
  {
    value: "48",
    label: "Countries Reached",
    description: "Active programs across Africa, Asia, and Latin America",
  },
  {
    value: "120+",
    label: "Local Partners",
    description: "Community organizations we collaborate with",
  },
  {
    value: "92%",
    label: "Funds to Programs",
    description: "Of every dollar goes directly to the field",
  },
];

export const programs = [
  {
    id: 1,
    title: "Education for All",
    category: "Education",
    description:
      "Building schools, training teachers, and providing scholarships so every child can access quality education — regardless of where they were born.",
    // Replace with a relevant program photo
    image: "https://picsum.photos/seed/prog-edu/600/400",
    imageAlt: "Children studying in a classroom",
    stats: "85,000 children enrolled",
    color: "emerald",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    category: "Health",
    description:
      "Drilling wells, installing filtration systems, and educating communities on water sanitation to eliminate waterborne diseases.",
    image: "https://picsum.photos/seed/prog-water/600/400",
    imageAlt: "Clean water flowing from a newly built well",
    stats: "620 wells built",
    color: "blue",
  },
  {
    id: 3,
    title: "Women's Economic Empowerment",
    category: "Livelihood",
    description:
      "Microloans, business training, and mentorship networks that help women build sustainable livelihoods and economic independence.",
    image: "https://picsum.photos/seed/prog-women/600/400",
    imageAlt: "Women participating in a business training workshop",
    stats: "12,000 women supported",
    color: "amber",
  },
  {
    id: 4,
    title: "Healthcare Access",
    category: "Health",
    description:
      "Mobile clinics, community health workers, and preventive care programs to bring essential healthcare to remote and underserved areas.",
    image: "https://picsum.photos/seed/prog-health/600/400",
    imageAlt: "A community health worker visiting a family",
    stats: "200,000 consultations/year",
    color: "rose",
  },
  {
    id: 5,
    title: "Food Security",
    category: "Livelihood",
    description:
      "Training smallholder farmers in regenerative agriculture, connecting them to markets, and building community grain banks.",
    image: "https://picsum.photos/seed/prog-food/600/400",
    imageAlt: "Farmers harvesting crops using sustainable methods",
    stats: "8,000 families food-secure",
    color: "lime",
  },
  {
    id: 6,
    title: "Disaster Relief",
    category: "Emergency",
    description:
      "Rapid response teams providing shelter, food, and medical care during natural disasters and humanitarian crises worldwide.",
    image: "https://picsum.photos/seed/prog-relief/600/400",
    imageAlt: "Relief workers distributing supplies after a disaster",
    stats: "30+ emergency responses",
    color: "orange",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Director",
    bio: "15 years of experience in international development. Previously at UNICEF and World Food Programme.",
    // Replace with a professional headshot photo
    image: "https://picsum.photos/seed/team-sarah/400/400",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Dr. Marcus Osei",
    role: "Head of Programs",
    bio: "Public health specialist with a PhD from Johns Hopkins. Led programs in 20+ countries across sub-Saharan Africa.",
    image: "https://picsum.photos/seed/team-marcus/400/400",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Ana Lima",
    role: "Director of Partnerships",
    bio: "Built our network of 120+ local partners over a decade. Former diplomat and community organizer.",
    image: "https://picsum.photos/seed/team-ana/400/400",
    linkedin: "#",
  },
  {
    id: 4,
    name: "James Wei",
    role: "Chief Financial Officer",
    bio: "CPA with 12 years in nonprofit finance. Ensures every dollar reaches the communities we serve.",
    image: "https://picsum.photos/seed/team-james/400/400",
    linkedin: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "The school HopeForward built in our village changed everything. My daughter is now studying medicine at university — something we never dreamed was possible.",
    author: "Amina Diallo",
    location: "Senegal",
    // Replace with a real photo of the person (with their permission)
    image: "https://picsum.photos/seed/test-amina/200/200",
    program: "Education for All",
  },
  {
    id: 2,
    quote:
      "Before the clean water well, we walked 4 hours each day just for water. Now our children go to school instead. This one change transformed our community.",
    author: "Emmanuel Nkosi",
    location: "Uganda",
    image: "https://picsum.photos/seed/test-emmanuel/200/200",
    program: "Clean Water Initiative",
  },
  {
    id: 3,
    quote:
      "The microloan and business training gave me the confidence and tools to start my own tailoring business. I now employ 6 women from my village.",
    author: "Fatima Al-Hassan",
    location: "Nigeria",
    image: "https://picsum.photos/seed/test-fatima/200/200",
    program: "Women's Economic Empowerment",
  },
];

export const newsArticles = [
  {
    id: 1,
    title: "New Education Center Opens in Rural Bangladesh",
    excerpt:
      "Our latest school facility will serve over 800 children who previously had no access to formal education. Meet the community that made it happen.",
    // Replace with an actual article URL or a /blog/[slug] page
    href: "#",
    // Replace with the article's featured image
    image: "https://picsum.photos/seed/news-1/800/500",
    imageAlt: "Opening ceremony of the new education center",
    date: "March 28, 2025",
    category: "Education",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "HopeForward Receives UN Recognition for Water Program",
    excerpt:
      "The United Nations recognized our Clean Water Initiative as a model for sustainable community-led development at this year's World Water Forum.",
    href: "#",
    image: "https://picsum.photos/seed/news-2/800/500",
    imageAlt: "HopeForward team receiving the UN award",
    date: "March 15, 2025",
    category: "Awards",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Annual Impact Report 2024: Our Biggest Year Yet",
    excerpt:
      "2024 was a record year for HopeForward. We share the full numbers, the stories, and what we're planning for 2025 in our new annual report.",
    href: "#",
    image: "https://picsum.photos/seed/news-3/800/500",
    imageAlt: "Infographic showing 2024 impact highlights",
    date: "February 20, 2025",
    category: "Report",
    readTime: "6 min read",
  },
];

export const footerLinks = {
  organization: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Annual Reports", href: "#" },
    { label: "FAQ", href: "/faq" },
  ],
  programs: [
    { label: "Education for All", href: "#programs" },
    { label: "Clean Water", href: "#programs" },
    { label: "Women's Empowerment", href: "#programs" },
    { label: "Healthcare Access", href: "#programs" },
    { label: "Disaster Relief", href: "#programs" },
  ],
  getInvolved: [
    { label: "Donate", href: "#donate" },
    { label: "Volunteer", href: "#" },
    { label: "Corporate Partnerships", href: "#" },
    { label: "Fundraise for Us", href: "#" },
    { label: "Legacy Giving", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};
