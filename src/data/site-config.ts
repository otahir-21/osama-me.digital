export const siteConfig = {
  name: "Osama Tahir",
  role: "Senior Full-Stack Developer",
  headline: "I build websites, mobile apps & backend systems that scale.",
  location: "Dubai, UAE",
  tagline:
    "6 years of experience shipping web platforms, cross-platform apps, and payment systems for fintech and enterprise teams across the UAE and GCC.",
  description:
    "Senior Full-Stack Developer in Dubai with 6 years of experience shipping websites, Flutter & React Native apps, and Laravel backends. 20+ production apps, 500K+ downloads, and $1.2M+ in secure payment processing. Open to full-time and contract opportunities.",
  availability: "Open to full-time and contract roles",
  url: "https://osama-me.digital",
  email: "dxbsoftwaredeveloper@gmail.com",
  telephone: "+971507276823",
  whatsapp: "+971507276823",
  calendly: "https://calendly.com/dxbsoftwaredeveloper/30min",
  resumeFile: "/Osama-Tahir-Resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/otahir21",
    github: "https://github.com/otahir-21",
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Work" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
  expertise: [
    {
      id: "web",
      title: "Web Development",
      shortDesc:
        "Full-stack web platforms with Flutter Web and Laravel — dashboards, CRMs, and business sites built for real users.",
      icon: "Globe",
    },
    {
      id: "backend",
      title: "Backend & APIs",
      shortDesc:
        "Laravel and Node.js REST APIs with microservice patterns, caching, and high-availability design.",
      icon: "Server",
    },
    {
      id: "mobile",
      title: "Mobile Development",
      shortDesc:
        "Cross-platform Flutter and React Native apps for iOS and Android — from architecture to App Store launch.",
      icon: "Smartphone",
    },
    {
      id: "payments",
      title: "Payments & Fintech",
      shortDesc:
        "Stripe, Apple Pay, and PCI-aware payment flows built for regulated, production-grade fintech products.",
      icon: "CreditCard",
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      shortDesc:
        "AWS, Firebase, CI/CD pipelines, containers, and performance tuning for scalable deployments.",
      icon: "Cloud",
    },
    {
      id: "ai",
      title: "AI Integration",
      shortDesc:
        "LLM API integration (OpenAI, Gemini), in-app chatbots, and AI-assisted development workflows.",
      icon: "Sparkles",
    },
    {
      id: "leadership",
      title: "Technical Leadership",
      shortDesc:
        "Scrum Master Certified. Code reviews, mentoring, architecture decisions, and end-to-end delivery.",
      icon: "Users",
    },
  ],
  stats: [
    { value: 6, suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Apps Shipped" },
    { value: 500, suffix: "K+", label: "App Downloads" },
    { value: 1.2, suffix: "M+", label: "USD Payments Processed" },
  ],
  processSteps: [
    { step: 1, title: "Understand", desc: "Clarify goals, constraints, and technical requirements." },
    { step: 2, title: "Architect", desc: "Design APIs, data models, and system boundaries that scale." },
    { step: 3, title: "Build", desc: "Ship iteratively with clean code, tests, and clear communication." },
    { step: 4, title: "Deploy", desc: "Release to production with CI/CD, monitoring, and documentation." },
    { step: 5, title: "Improve", desc: "Optimize performance, reliability, and developer experience." },
  ],
  companies: [
    {
      id: "metatech",
      name: "Metatech",
      role: "Senior Full-Stack Developer",
      period: "Jun 2025 – Present",
      location: "Dubai, UAE",
    },
    {
      id: "prism-digital",
      name: "Prism Digital",
      role: "Senior Mobile Developer",
      period: "Jul 2023 – Jun 2025",
      location: "Dubai, UAE",
    },
    {
      id: "freelancer",
      name: "Freelancer.com",
      role: "Lead Flutter Developer",
      period: "Dec 2021 – May 2023",
      location: "Remote",
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
