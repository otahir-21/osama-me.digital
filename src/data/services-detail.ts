export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ServiceDetailItem {
  slug: string;
  title: string;
  hubTitle: string;
  tagline: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  serviceType: string;
  intro: string;
  forWho: string[];
  sections: ServiceSection[];
  process: { title: string; desc: string }[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  relatedProjectIds: string[];
  ctaHeading: string;
  ctaBody: string;
  updatedAt: string;
}

export const servicesDetail: ServiceDetailItem[] = [
  {
    slug: "mobile-app-development-dubai",
    title: "Mobile App Development Dubai",
    hubTitle: "Mobile App Development",
    tagline:
      "Production-ready iOS and Android products from architecture through store launch.",
    description:
      "I design and build cross-platform mobile apps for UAE and GCC businesses — including Flutter and React Native clients, backend APIs, authentication, payments, notifications, analytics, and App Store / Google Play release.",
    seoTitle: "Mobile App Development Dubai | Flutter & React Native | Osama Tahir",
    metaDescription:
      "Mobile app development in Dubai by Osama Tahir. Flutter and React Native apps with backend APIs, payments, notifications and store launch for UAE & GCC businesses.",
    h1: "Mobile App Development in Dubai",
    serviceType: "Mobile application development",
    intro:
      "Osama Tahir is a Dubai-based senior mobile and full-stack developer who builds iOS and Android products for startups, agencies and established businesses across the UAE and GCC. The work covers more than UI screens: architecture, APIs, authentication, payments, notifications, analytics and store submission are part of the same delivery.",
    forWho: [
      "UAE and GCC startups that need a production iOS and Android app, not a prototype that stalls before launch",
      "Businesses replacing spreadsheets, WhatsApp ops, or a weak existing app with a real mobile product",
      "Product managers and CTOs who want one senior engineer who can own mobile plus the API layer",
      "Digital agencies that need a reliable Flutter or React Native delivery partner",
    ],
    sections: [
      {
        heading: "What I build",
        body: "Most engagements are cross-platform products that need to ship on both iOS and Android without maintaining two native teams. I typically implement the mobile client, connect it to a Laravel or Node.js API, and stay involved through testflight/internal testing, store listing, and the first production release.",
        bullets: [
          "Consumer and marketplace-style mobile products",
          "Commerce apps with cart, orders and payment processing",
          "Creator, live, and media-heavy applications",
          "Health, directory, and operational field apps",
          "Companion marketing or admin web surfaces when the product needs them",
        ],
      },
      {
        heading: "Flutter vs React Native",
        body: "I work in both Flutter and React Native and choose based on the product, the existing codebase, and the team that will maintain it. Flutter is often the right fit when we want one codebase for iOS, Android and sometimes web. React Native is a strong option when the organisation already lives in the JavaScript ecosystem or has an existing RN app to extend. The decision is a delivery choice, not a branding choice.",
      },
      {
        heading: "Backend, authentication and payments",
        body: "A mobile app that cannot log users in, charge them, or talk to a stable API is not a product. I implement or take over the API layer when that is part of the engagement — REST APIs, token/OTP/social auth, Stripe, Apple Pay, Network International, RevenueCat, and related production concerns such as receipts, entitlements and failure states.",
        bullets: [
          "Email, phone OTP, Google and Apple sign-in",
          "Role-aware accounts and session handling",
          "Card payments, wallets, and subscription entitlements",
          "Laravel or Node.js APIs with caching where it matters",
        ],
      },
      {
        heading: "Notifications, analytics and store launch",
        body: "Push notifications, crash reporting and product analytics belong in the build, not as an afterthought after rejection from App Review. I handle TestFlight / internal testing, store assets, privacy disclosures, and the submission process for Apple App Store and Google Play.",
      },
    ],
    process: [
      { title: "Discovery", desc: "Map the product, constraints, platforms, and what already exists." },
      { title: "Architecture", desc: "Agree the client, API, auth, payment and release boundaries." },
      { title: "Build", desc: "Ship in reviewable slices with working iOS and Android builds." },
      { title: "Harden", desc: "Fix crashes, edge cases, store requirements and performance issues." },
      { title: "Launch", desc: "Submit, monitor, and support the first weeks in production." },
    ],
    faqs: [
      {
        question: "Do you build both iOS and Android?",
        answer:
          "Yes. Most products are cross-platform Flutter or React Native apps so one codebase serves both stores. Native-only work is only recommended when the product genuinely needs it.",
      },
      {
        question: "Can you also build the backend?",
        answer:
          "Yes. I regularly implement Laravel and Node.js APIs, authentication, payments and admin/CRM surfaces alongside the mobile app so the product is not blocked on a separate backend vendor.",
      },
      {
        question: "Do you submit to the App Store and Google Play?",
        answer:
          "Yes. Store listing, privacy details, test accounts, and submission are part of a launch engagement. You keep the developer accounts.",
      },
      {
        question: "Do you work with agencies as well as startups?",
        answer:
          "Yes. I deliver from approved designs, work white-label when needed, and can stay behind the scenes or join client calls. See the technical partnership service for how that engagement is structured.",
      },
    ],
    relatedSlugs: [
      "app-rescue-maintenance",
      "custom-software-development-dubai",
      "technical-development-partner",
    ],
    relatedProjectIds: [
      "vyooo-creator-platform",
      "royal-spirit-ecommerce",
      "24digi-health-super-app",
    ],
    ctaHeading: "Have a mobile product to build?",
    ctaBody:
      "Tell me what the app needs to do, who it is for, and whether you are starting from zero or from an existing design.",
    updatedAt: "2026-08-25",
  },
  {
    slug: "app-rescue-maintenance",
    title: "App Rescue & Maintenance",
    hubTitle: "App Rescue & Maintenance",
    tagline:
      "Take over, stabilize and improve an existing Flutter, React Native or backend product.",
    description:
      "I help companies with unfinished, unstable or inherited mobile and backend products: audits, crash and performance work, outdated dependencies, API and payment issues, store problems, feature development and production support.",
    seoTitle: "App Rescue & Maintenance Dubai | Flutter & React Native | Osama Tahir",
    metaDescription:
      "Rescue, maintain and scale existing Flutter and React Native apps in Dubai. Technical audits, performance, payments, store issues and production support by Osama Tahir.",
    h1: "Rescue, Maintain & Scale an Existing Mobile App",
    serviceType: "Mobile application maintenance",
    intro:
      "Osama Tahir takes over existing Flutter, React Native and backend products when the original developer is gone, the app is unfinished, or production quality is blocking growth. The goal is to stabilize what you already have — not to rebuild everything unless the codebase genuinely cannot be saved.",
    forWho: [
      "Companies sitting on an unfinished app after a freelancer or agency dropped off",
      "Teams dealing with crashes, slow screens, or failing payments in production",
      "Founders who inherited a codebase they cannot confidently change",
      "Businesses that need ongoing store updates, dependency upgrades and feature work",
    ],
    sections: [
      {
        heading: "Technical audit and architecture assessment",
        body: "Work usually starts with a structured look at the repo, release pipeline, crash data, API contracts and store status. You get a clear picture of what is safe to keep, what is risky, and what should be sequenced first. I do not promise a rewrite as the default answer.",
        bullets: [
          "Codebase and architecture review",
          "Crash, ANR and performance hotspots",
          "Dependency and Flutter/RN upgrade risk",
          "API, auth and payment failure points",
          "Store listing, certificates and release blockers",
        ],
      },
      {
        heading: "Stabilize before you scale",
        body: "New features on a crashing app are wasted spend. I typically fix release blockers, payment edge cases, auth failures and the worst performance issues first, then add features against a calmer baseline. If a previous developer handover is incomplete, I reconstruct enough context to work safely.",
      },
      {
        heading: "Production support",
        body: "After the product is stable, some clients keep me on for store updates, OS compatibility, dependency maintenance and measured feature development. I will say when a change is a small patch versus when it is a real project.",
      },
    ],
    process: [
      { title: "Access & audit", desc: "Repo, stores, analytics/crash tools, and production credentials." },
      { title: "Triage", desc: "Rank crashes, blockers, and business-critical flows." },
      { title: "Stabilize", desc: "Fix the issues that prevent users from completing core jobs." },
      { title: "Improve", desc: "Dependencies, performance, and the next useful features." },
      { title: "Handover or retain", desc: "Document the system, or continue with production support." },
    ],
    faqs: [
      {
        question: "Will you rewrite the app from scratch?",
        answer:
          "Only if the audit shows the current architecture cannot be maintained at a reasonable cost. Most rescue work is stabilize-and-improve, not a greenfield rebuild.",
      },
      {
        question: "What if we do not have the original developer?",
        answer:
          "That is a common starting point. I work from the repo, store accounts, API docs and production behaviour. Incomplete handover slows things down, but it is not a hard stop.",
      },
      {
        question: "Can you fix payment or App Store issues?",
        answer:
          "Yes. Payment edge cases, receipt validation, entitlements, rejected submissions and missing privacy/compliance details are a regular part of this work. I cannot guarantee Apple or Google will approve a specific binary on the first attempt.",
      },
      {
        question: "Do you take on React Native as well as Flutter?",
        answer:
          "Yes. I maintain and extend both Flutter and React Native products, including the APIs behind them.",
      },
    ],
    relatedSlugs: [
      "mobile-app-development-dubai",
      "custom-software-development-dubai",
      "technical-development-partner",
    ],
    relatedProjectIds: ["pak-id-nadra", "dvago-medical-directory", "vyooo-creator-platform"],
    ctaHeading: "Have an app that needs to be taken over?",
    ctaBody:
      "Share what is broken, what is unfinished, and what access you have to the repo and stores.",
    updatedAt: "2026-08-25",
  },
  {
    slug: "custom-software-development-dubai",
    title: "Custom Software & CRM Development",
    hubTitle: "Custom Software",
    tagline:
      "CRMs, dashboards and operational platforms that replace spreadsheets and scattered tools.",
    description:
      "I build business software for Dubai and GCC companies: CRMs, analytics dashboards, admin platforms, workflow automation, Laravel/Node.js APIs, payments and integrations — so operations are not stuck in Excel, WhatsApp and manual reporting.",
    seoTitle: "Custom Software & CRM Development Dubai | Osama Tahir",
    metaDescription:
      "Custom software and CRM development in Dubai by Osama Tahir. Dashboards, operational platforms, Laravel and Node.js APIs, payments and integrations for UAE businesses.",
    h1: "Custom Software & Business Platforms for Dubai Companies",
    serviceType: "Custom software development",
    intro:
      "Osama Tahir builds internal and client-facing business platforms for companies in Dubai and the wider GCC. Typical work includes Flutter Web or React dashboards, Laravel APIs, CRMs, reporting, workflow automation and integrations — replacing processes that currently live in Excel, WhatsApp and disconnected tools.",
    forWho: [
      "Operators drowning in spreadsheets, email approvals and WhatsApp groups",
      "Agencies or consultancies that need a client-facing CRM or reporting portal",
      "Companies whose field, sales or operations teams need a single source of truth",
      "Product teams that need a robust API and admin layer behind a mobile app",
    ],
    sections: [
      {
        heading: "Business problems, not generic websites",
        body: "This service is for operational software. Examples include Wurkspace, Metatech’s AI-native business operating platform, and the Anton Oilfield management platform — Laravel APIs plus a React dashboard for task tracking and scheduling across locations.",
        bullets: [
          "CRMs and client portals",
          "Real-time analytics dashboards",
          "Admin and operations platforms",
          "Workflow and approval automation",
          "REST APIs, payments and third-party integrations",
        ],
      },
      {
        heading: "Laravel, Node.js and Flutter Web",
        body: "I implement the stack that fits the product: Laravel and MySQL with Redis when we need a dependable API and admin backend; Node.js when that is already the organisation's language; Flutter Web when the same team also owns a Flutter mobile product and wants a desktop-class dashboard without a separate frontend silo.",
      },
      {
        heading: "Integrations",
        body: "Business software only pays for itself if it talks to the rest of the company. I integrate payments, analytics, LLM assistance where it is actually useful, and the APIs your mobile or partner systems already depend on. I do not add AI features for decoration.",
      },
    ],
    process: [
      { title: "Map the workflow", desc: "Who uses it, what they do today, and which reports actually matter." },
      { title: "Data & API design", desc: "Models, permissions, and the integrations the platform must speak to." },
      { title: "Build the core loop", desc: "Ship the workflow that removes the most manual work first." },
      { title: "Reporting & hardening", desc: "Dashboards, access control, and production hosting." },
      { title: "Train & iterate", desc: "Handover, then improve based on how the team actually uses it." },
    ],
    faqs: [
      {
        question: "Is this the same as a marketing website?",
        answer:
          "No. Marketing sites are not the focus. This service is for CRMs, dashboards, internal tools and the APIs that power them.",
      },
      {
        question: "Can this connect to an existing mobile app?",
        answer:
          "Yes. Many platforms start as the admin/API layer for a Flutter or React Native product, then grow into the system of record for the business.",
      },
      {
        question: "Do you host on AWS?",
        answer:
          "Yes when the project needs it. I have shipped production systems on AWS (EC2, S3, Route 53) as well as Firebase/Supabase-backed products, depending on the architecture.",
      },
      {
        question: "Will you quote a platform without understanding the workflow?",
        answer:
          "No. A useful estimate needs the users, the source data, and the jobs the software must complete. Discovery exists to avoid building the wrong system.",
      },
    ],
    relatedSlugs: [
      "mobile-app-development-dubai",
      "app-rescue-maintenance",
      "technical-development-partner",
    ],
    relatedProjectIds: ["wurkspace-ai-business-os", "anton-oilfield-management", "new-edge-realty"],
    ctaHeading: "Need a platform instead of another spreadsheet?",
    ctaBody:
      "Describe the workflow you want to replace and I will tell you whether a CRM, dashboard or API-first build is the right shape.",
    updatedAt: "2026-08-25",
  },
  {
    slug: "technical-development-partner",
    title: "Technical Development Partner",
    hubTitle: "Technical Partnership",
    tagline:
      "White-label mobile and software delivery for agencies and product teams that do not want to hire a full engineering bench.",
    description:
      "I work with digital, branding and marketing agencies — and with product teams — as a senior technical partner: Flutter/React Native, backend APIs, Figma handoff, QA, deployment and ongoing support, including confidential and white-label delivery.",
    seoTitle: "Technical Development Partner for UAE Agencies | Osama Tahir",
    metaDescription:
      "White-label app and software development partner in the UAE. Osama Tahir delivers Flutter, React Native and backend work for agencies and product teams across Dubai and the GCC.",
    h1: "A Technical Development Partner for Agencies & Product Teams",
    serviceType: "Software development partnership",
    intro:
      "Osama Tahir works as a senior technical delivery partner for digital, branding and marketing agencies, and for product teams that need mobile or custom software without building a full internal engineering organisation. Delivery can be white-label and client-confidential, or Osama can join calls as the named engineer — whichever the agency prefers.",
    forWho: [
      "Agencies that sell digital products but do not keep a full-time Flutter/React Native team",
      "Studios that need a developer to implement approved Figma designs faithfully",
      "Product teams that need overflow capacity from someone who can own architecture, not just tickets",
      "Founders introduced by an agency who still want a single accountable engineer",
    ],
    sections: [
      {
        heading: "How the partnership works",
        body: "You remain the client relationship. I take technical ownership of the agreed scope: discovery, architecture, mobile and/or backend implementation, QA, store or production release, and maintenance. Communication can be entirely through you, or I can be visible to the end client. White-label delivery and NDAs are normal, not special cases.",
        bullets: [
          "White-label and client-confidential work",
          "Development from approved Figma or design-system files",
          "Flutter and React Native mobile delivery",
          "Laravel/Node.js API implementation",
          "Technical discovery before a quote hardens",
          "QA, deployment, store submission and ongoing maintenance",
        ],
      },
      {
        heading: "What I will not do",
        body: "I will not pretend a vague brief is a fixed-price app. I will not staff a project with anonymous juniors. If the design is incomplete or the API does not exist, that gets named in discovery rather than discovered in week six.",
      },
      {
        heading: "Working across the GCC",
        body: "I am based in Dubai and already work in UAE and GCC time zones. Remote delivery is the default; on-site or hybrid in Dubai is possible when the engagement needs it.",
      },
    ],
    process: [
      { title: "Partner briefing", desc: "Scope, confidentiality, who speaks to the end client, and success criteria." },
      { title: "Technical discovery", desc: "Designs, APIs, stores, and risks before the quote is locked." },
      { title: "Delivery", desc: "Builds, reviews, and a cadence that fits the agency's client updates." },
      { title: "QA & launch", desc: "Device testing, deployment, and store or production release." },
      { title: "Support", desc: "Warranty period or a retainer for the next phase." },
    ],
    faqs: [
      {
        question: "Can you work white-label?",
        answer:
          "Yes. I can remain invisible to the end client, use the agency's communication channels, and sign NDAs. I can also join client meetings when that helps the sale or the delivery.",
      },
      {
        question: "Do you only do mobile?",
        answer:
          "Mobile is a core offering, but partnerships often include the API, admin/CRM, and launch work that sits around the app.",
      },
      {
        question: "How do you start with a new agency?",
        answer:
          "Usually a short paid discovery or a clearly bounded first project. That is enough to see communication quality on both sides before anyone commits to a larger retainer.",
      },
      {
        question: "Do you replace the agency's PM?",
        answer:
          "No. You keep account management. I provide technical estimates, risks, and delivery against the agreed scope.",
      },
    ],
    relatedSlugs: [
      "mobile-app-development-dubai",
      "app-rescue-maintenance",
      "custom-software-development-dubai",
    ],
    relatedProjectIds: [
      "vyooo-creator-platform",
      "wurkspace-ai-business-os",
      "royal-spirit-ecommerce",
    ],
    ctaHeading: "Need a technical delivery partner?",
    ctaBody:
      "Tell me how you work with clients today and what you need built, rescued, or maintained.",
    updatedAt: "2026-08-25",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesDetail.find((s) => s.slug === slug);
}

export const SERVICE_PATHS = {
  mobile: "/services/mobile-app-development-dubai",
  rescue: "/services/app-rescue-maintenance",
  custom: "/services/custom-software-development-dubai",
  partner: "/services/technical-development-partner",
} as const;
