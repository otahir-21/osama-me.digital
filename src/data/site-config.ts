export const SITE_HOST = "www.osama-me.digital";
export const SITE_URL = `https://${SITE_HOST}`;

export const siteConfig = {
  name: "Osama Tahir",
  role: "Senior Mobile & Full-Stack Developer",
  headline:
    "I build and improve mobile apps & digital platforms for UAE & GCC businesses.",
  location: "Dubai, UAE",
  locationFull: "Dubai, United Arab Emirates",
  tagline:
    "Senior mobile and full-stack developer helping startups, agencies and established businesses take products from architecture to production — including mobile apps, backend APIs, payments, cloud and launch.",
  description:
    "Dubai-based senior mobile and full-stack developer building Flutter and React Native apps, backend APIs, payments, CRMs and custom platforms for UAE & GCC businesses.",
  availability: "Available for selected projects",
  recruiterAvailability: "Available for selected software projects and technical partnerships",
  url: SITE_URL,
  email: "info@osama-me.digital", // public inbox — never publish Gmail
  telephone: "+971507276823",
  whatsapp: "+971507276823",
  calendly: "https://calendly.com/dxbsoftwaredeveloper/30min",
  resumeFile: "/Osama-Tahir-Resume.pdf",
  resumeDocxFile: "/Osama-Tahir-Resume.docx",
  profileImage: "/profile.png",
  ogImage: "/og-image.png",
  contentUpdatedAt: "2026-08-25",
  social: {
    linkedin: "https://www.linkedin.com/in/otahir21",
    github: "https://github.com/otahir-21",
    twitter: "https://x.com/otahir212",
    twitterHandle: "@otahir212",
    upwork: "https://www.upwork.com/freelancers/osamaappdev",
  },
  navLinks: [
    { href: "/portfolio", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  footerLinks: [
    { href: "/portfolio", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
  ],
  techCredibility: [
    "Flutter",
    "React Native",
    "Node.js",
    "Laravel",
    "AWS",
    "Firebase",
    "Payments",
  ],
  proofPoints: [
    {
      value: "6+",
      label: "Years",
      detail: "Production software experience",
    },
    {
      value: "20+",
      label: "Products",
      detail: "Mobile and web products contributed to",
    },
    {
      value: "UAE & GCC",
      label: "Region",
      detail: "Regional project experience",
    },
    {
      value: "End-to-End",
      label: "Delivery",
      detail: "Mobile · Backend · Payments · Launch",
    },
  ],
  processSteps: [
    { step: 1, title: "Understand", desc: "Clarify goals, constraints, users, and what already exists." },
    { step: 2, title: "Architect", desc: "Design the mobile, API, data, and payment boundaries that can actually ship." },
    { step: 3, title: "Build", desc: "Implement in focused slices with clear communication and production-minded code." },
    { step: 4, title: "Launch", desc: "Release to stores or production with monitoring, documentation, and handover." },
    { step: 5, title: "Support", desc: "Stabilize, improve performance, and keep the product moving after launch." },
  ],
  companies: [
    {
      id: "metatech",
      name: "Metatech",
      role: "Senior Full-Stack Developer (Flutter Web & Mobile)",
      period: "Jun 2025 – Present",
      location: "Dubai, UAE",
    },
    {
      id: "prism-digital",
      name: "Prism Digital",
      role: "Senior Mobile Developer · Laravel API Specialist",
      period: "Jul 2023 – Jun 2025",
      location: "Dubai, UAE",
    },
    {
      id: "freelancer",
      name: "Freelancer.com",
      role: "Lead Flutter Developer",
      period: "Dec 2021 – May 2023",
      location: "Islamabad, Pakistan",
    },
    {
      id: "soft-code-labs",
      name: "Soft Code Labs",
      role: "Mobile App Developer Intern",
      period: "Jun 2020 – Nov 2021",
      location: "Islamabad, Pakistan",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
