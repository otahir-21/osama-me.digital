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
    seoTitle: "Mobile App Development Dubai | Osama Tahir",
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
      "flutter-app-development-dubai",
      "react-native-app-development-dubai",
      "app-rescue-maintenance",
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
    slug: "website-development-dubai",
    title: "Website Development Dubai",
    hubTitle: "Website Development",
    tagline:
      "Modern websites that are fast, conversion-focused, SEO-ready and built properly for production.",
    description:
      "I build fast, modern and conversion-focused websites for UAE businesses — from company websites and landing pages to e-commerce and custom web platforms — with strategy, frontend, backend, integrations, performance and SEO foundations in the same delivery.",
    seoTitle: "Website Development Dubai | Business & Web Platforms | Osama Tahir",
    metaDescription:
      "Dubai-based senior full-stack developer building fast, SEO-ready websites, business platforms and e-commerce experiences for UAE companies.",
    h1: "Website Development for Dubai Businesses",
    serviceType: "Website Development",
    intro:
      "I build fast, modern and conversion-focused websites for UAE businesses — from company websites and landing pages to e-commerce and custom web platforms. You work directly with a senior full-stack developer across strategy, frontend, backend, integrations, performance, SEO foundations and production launch.",
    forWho: [
      "Dubai SMEs and professional service businesses that need a website that generates inquiries, not only a brochure",
      "UAE startups and clinics replacing an outdated site with a fast, mobile-ready experience",
      "E-commerce businesses that need catalogue, checkout and payment flows built for production",
      "Agencies that need white-label website or web-platform delivery from approved designs",
    ],
    sections: [
      {
        heading: "Your website should do more than look good",
        body: "A polished homepage is not the same as a working acquisition channel. Many UAE businesses are stuck with outdated design, slow pages, weak SEO foundations, forms that go nowhere, and a site that cannot be updated without calling a developer. The result is a low inquiry rate and another expensive rebuild a year later.",
        bullets: [
          "Outdated design that no longer matches the business",
          "Poor mobile experience on the devices most visitors use",
          "Slow loading that costs attention before the offer is read",
          "Weak SEO foundations that make the site hard to crawl and understand",
          "Low inquiry and conversion rates despite traffic",
          "Difficult content updates and disconnected forms or systems",
          "Unreliable developers and websites that do not support business goals",
        ],
      },
      {
        heading: "What I build",
        body: "Website work here is production software: company sites, campaign landing pages, e-commerce experiences and custom web platforms — not a theme with the logo swapped.",
        bullets: [
          "Business websites for consultancies, clinics, real estate, agencies and local UAE companies",
          "Landing pages for Google Ads, launches and lead generation",
          "E-commerce catalogues, checkout, payments and related integrations",
          "Custom platforms: dashboards, portals, booking, admin, CRM interfaces and APIs",
        ],
      },
      {
        heading: "More than a web designer",
        body: "Because I work across the full product stack, I can build websites that integrate properly with the systems behind your business instead of treating the website as an isolated design project. Frontend, backend, APIs, databases, payments, authentication, cloud, analytics and related mobile products sit in the same conversation.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Understand the business, audience, current website, conversion goal and technical requirements.",
      },
      {
        title: "Structure & Scope",
        desc: "Define pages, user journeys, integrations, functionality and content requirements.",
      },
      {
        title: "Development",
        desc: "Build the responsive frontend, backend or CMS where needed, forms, integrations and analytics.",
      },
      {
        title: "QA & Optimization",
        desc: "Test mobile, desktop, performance, forms, browser compatibility and SEO basics.",
      },
      {
        title: "Launch & Support",
        desc: "Production deployment, analytics, Search Console readiness, and post-launch fixes or support.",
      },
    ],
    faqs: [
      {
        question: "How much does a website cost in Dubai?",
        answer:
          "There is no honest fixed price. Cost depends on page count, whether the design is custom, whether you need a CMS, e-commerce, third-party integrations, and any custom functionality such as booking or a client portal. The useful next step is to discuss the requirements so the estimate matches the actual job.",
      },
      {
        question: "How long does website development take?",
        answer:
          "Timing depends on scope and requirements — a focused landing page is a different job from a multi-page company site, an e-commerce catalogue, or a custom web platform. Discovery is where a realistic sequence is set, including content and feedback from your side.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. Some sites need a structured improvement: performance, mobile usability, forms, SEO foundations and content structure. Others need a rebuild because the current stack cannot be maintained at a reasonable cost. I start from the live site and the business goal, not from a default redesign pitch.",
      },
      {
        question: "Do you provide SEO?",
        answer:
          "Technical and on-page SEO foundations can be included in the website build: semantic HTML, metadata, canonicals, sitemap, robots, structured data where it is appropriate, internal linking, crawlable content and image optimization. Ongoing SEO — content programmes and link-building — is a separate growth activity, not a ranking guarantee baked into development.",
      },
      {
        question: "Can you build e-commerce websites?",
        answer:
          "Yes, where the product needs a catalogue, checkout, payments, analytics and third-party integrations. Platform choice follows the catalogue, payment requirements and who will maintain the store — I do not default to a single theme or marketplace.",
      },
      {
        question: "Can you maintain the website after launch?",
        answer:
          "Yes. Ongoing maintenance, dependency updates, content help and new features can be arranged after launch. I will say when a change is a small fix versus when it is a new project.",
      },
      {
        question: "Can you work with our existing designer or agency?",
        answer:
          "Yes. I implement from approved Figma or design-system files, work white-label when needed, and can stay behind the agency or join client calls. You keep the client relationship; I take technical ownership of the agreed website or platform scope.",
      },
    ],
    relatedSlugs: [
      "mobile-app-development-dubai",
      "custom-software-development-dubai",
      "technical-development-partner",
    ],
    relatedProjectIds: [
      "ultra-smile-clinic-dubai",
      "ivpatch-wellness-ecommerce",
      "wurkspace-ai-business-os",
    ],
    ctaHeading: "Planning a new website or replacing an outdated one?",
    ctaBody:
      "Tell me what your business needs and I’ll help you determine the right approach — from a focused company website to a custom web platform.",
    updatedAt: "2026-08-26",
  },
  {
    slug: "app-rescue-maintenance",
    title: "App Rescue & Maintenance",
    hubTitle: "App Rescue & Maintenance",
    tagline:
      "Take over, stabilize and improve an existing Flutter, React Native or backend product.",
    description:
      "I help companies with unfinished, unstable or inherited mobile and backend products: audits, crash and performance work, outdated dependencies, API and payment issues, store problems, feature development and production support.",
    seoTitle: "App Rescue & Maintenance Dubai | Osama Tahir",
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
      "flutter-app-development-dubai",
      "react-native-app-development-dubai",
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
    seoTitle: "Custom Software Development Dubai | Osama Tahir",
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
    seoTitle: "Technical Partner for UAE Agencies | Osama Tahir",
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
  {
    slug: "flutter-app-development-dubai",
    title: "Flutter App Development Dubai",
    hubTitle: "Flutter Development",
    tagline:
      "One Flutter codebase for iOS, Android and, when it earns its keep, web — through store launch.",
    description:
      "Flutter app development in Dubai by Osama Tahir: iOS and Android products with Dart, BLoC or GetX, Laravel or Node.js APIs, payments, notifications and App Store / Google Play release for UAE and GCC businesses.",
    seoTitle: "Flutter Developer Dubai | Osama Tahir",
    metaDescription:
      "Hire a Flutter developer in Dubai. Osama Tahir builds iOS and Android apps with Flutter, APIs, payments and store launch for UAE and GCC companies.",
    h1: "Flutter App Development in Dubai",
    serviceType: "Flutter application development",
    intro:
      "Osama Tahir is a Dubai-based Flutter developer who ships production iOS and Android apps from a single Dart codebase. The work is not a UI kit demo: authentication, APIs, payments, push, analytics and store submission are part of the same engagement. Recent Flutter products include VyooO (live, 360°/VR, subscriptions), Royal Spirit commerce, and 24Digi on the App Store.",
    forWho: [
      "Startups that want one team for iOS and Android instead of two native benches",
      "UAE and GCC operators who already decided on Flutter and need a senior engineer, not a tutorial-level contractor",
      "Product teams that also need a Flutter Web dashboard without standing up a separate frontend silo",
      "Agencies that need Flutter delivery from approved Figma, including white-label work",
    ],
    sections: [
      {
        heading: "What Flutter is for — and what it is not",
        body: "Flutter is a Dart UI toolkit that compiles to native ARM on iOS and Android and can also target web. It is a strong default when you want one visual system, one release cadence, and one engineer who can own both stores. It is the wrong default when the organisation already has a large React Native app, or when a platform-only SDK is the product (Watch, CarPlay, a Play Station client). I will say that in discovery rather than force Flutter onto a bad fit.",
      },
      {
        heading: "How I actually build Flutter products",
        body: "Most of my Flutter work uses a clear state layer (BLoC or GetX depending on the existing repo and the team that will maintain it), REST APIs in Laravel or Node.js, and production services for the jobs the app has to complete. VyooO is the heavy end of that spectrum: Agora live, CallKit, gyro-based 360° playback, Cloudflare Stream, RevenueCat, and store review. Royal Spirit and 24Digi sit closer to commerce and health workflows — catalogues, orders, payments, and operational screens that have to survive real devices, not just a simulator.",
        bullets: [
          "Email, phone OTP, Google and Apple sign-in",
          "BLoC or GetX, chosen from the codebase and the handover plan",
          "Stripe, Apple Pay, Network International and RevenueCat when the product charges money",
          "FCM / APNs, crash reporting and store-ready privacy disclosures",
          "Flutter Web when the same team also needs a desktop-class admin surface",
        ],
      },
      {
        heading: "Flutter in the UAE and GCC",
        body: "Regional products usually fail on payments, store policy, and Arabic-capable UI — not on whether the button is animated. I build for Apple Pay and local processors, keep developer accounts in the client’s name, and treat RTL and bilingual copy as a layout problem, not a last-week overlay. If you are comparing Flutter with React Native for a UAE startup, the decision should be about the team that will own the repo in year two, not about Twitter threads.",
      },
      {
        heading: "Takeover of an existing Flutter app",
        body: "A large share of Flutter work in Dubai is not greenfield. The original developer left, the upgrade path from an old Flutter SDK is blocked, or payments fail in production. I start with a repo and store audit, then stabilize. A rewrite is a last resort. See app rescue if that is the actual job.",
      },
    ],
    process: [
      { title: "Fit check", desc: "Confirm Flutter is the right toolkit, or name the reason it is not." },
      { title: "Architecture", desc: "Client, API, auth, payments, and the first store-ready slice." },
      { title: "Build", desc: "iOS and Android builds you can install, not slide decks." },
      { title: "Harden", desc: "Crashes, store questionnaires, RTL, and payment edge cases." },
      { title: "Launch", desc: "TestFlight / internal testing, submission, and the first production week." },
    ],
    faqs: [
      {
        question: "Are you a Flutter-only developer?",
        answer:
          "Flutter is the deepest production catalog on this site, but I also work in React Native and in Laravel/Node.js APIs. Stack choice follows the product and the team that will maintain it.",
      },
      {
        question: "Can one Flutter app cover iOS, Android and web?",
        answer:
          "iOS and Android from one codebase is the usual shape. Flutter Web is useful for admin/CRM surfaces when the same team owns mobile. A marketing website is usually a separate React or WordPress property, as with VyooO.",
      },
      {
        question: "Do you upgrade old Flutter versions?",
        answer:
          "Yes. Version jumps, plugin breakage, and null-safety-era codebases are a normal part of rescue work. I estimate the upgrade separately from new features so you can see the real cost.",
      },
      {
        question: "Will you quote a Flutter app from a one-line WhatsApp brief?",
        answer:
          "No. I need the platforms, whether an API exists, payment requirements, and whether this is new or inherited. That is how you avoid a number that is fiction.",
      },
    ],
    relatedSlugs: [
      "mobile-app-development-dubai",
      "react-native-app-development-dubai",
      "app-rescue-maintenance",
    ],
    relatedProjectIds: [
      "vyooo-creator-platform",
      "royal-spirit-ecommerce",
      "24digi-health-super-app",
    ],
    ctaHeading: "Need a Flutter app built or taken over?",
    ctaBody:
      "Tell me whether this is a new product or an existing repo, and what iOS and Android have to do in production.",
    updatedAt: "2026-08-25",
  },
  {
    slug: "react-native-app-development-dubai",
    title: "React Native App Development Dubai",
    hubTitle: "React Native Development",
    tagline:
      "React Native when the organisation already lives in JavaScript — or when the app you need to save is already RN.",
    description:
      "React Native app development and takeover in Dubai by Osama Tahir: iOS and Android clients, JavaScript/TypeScript, APIs, payments and store launch — including inherited RN codebases for UAE and GCC teams.",
    seoTitle: "React Native Developer Dubai | Osama Tahir",
    metaDescription:
      "React Native developer in Dubai. Osama Tahir builds and takes over RN iOS and Android apps, including APIs, payments and store release for UAE teams.",
    h1: "React Native App Development in Dubai",
    serviceType: "React Native application development",
    intro:
      "Osama Tahir takes on React Native work in Dubai when it is the honest stack: the company already ships JavaScript, there is an existing RN app to extend, or the hiring plan is a JS team rather than a Dart team. Greenfield products where Flutter is a better fit get that recommendation instead. The job is still a production iOS and Android app — auth, API, payments, notifications, and stores — not a Create React Native App demo.",
    forWho: [
      "Product teams whose web and API work is already JavaScript or TypeScript",
      "Companies sitting on an inherited React Native app that needs features, upgrades, or a store fix",
      "Agencies that specified RN in the client statement of work",
      "Founders comparing RN and Flutter who want a recommendation tied to maintenance, not branding",
    ],
    sections: [
      {
        heading: "When React Native is the right call",
        body: "React Native is a strong option when you want one language across web, API and mobile, or when the expensive asset is already an RN repository. It is a weak option when you are starting from zero, you also want a desktop-class Flutter Web dashboard from the same engineers, or the team that will maintain the app in 18 months is a Dart team. I treat that as an architecture decision. See the Flutter vs React Native insight if you are still choosing.",
      },
      {
        heading: "What I actually deliver",
        body: "The RN engagement looks like other mobile work I do: a store-ready client, a Laravel or Node.js API when that is in scope, and the unglamorous production path. I do not staff anonymous juniors behind a senior title. If the repo uses an old React Native version, undocumented native modules, or a broken Fastlane lane, that shows up in the first audit instead of week six.",
        bullets: [
          "iOS and Android from one React Native codebase",
          "TypeScript preferred on new work; JS accepted on inherited repos until it is safe to migrate",
          "Native modules only when a JS library cannot do the job",
          "The same payment and store discipline as Flutter work: Apple Pay, Stripe, Network International, review notes",
          "Handover documentation so your next engineer is not reverse-engineering my weekend",
        ],
      },
      {
        heading: "Takeover and rescue",
        body: "A lot of React Native demand in the UAE is rescue: the freelancer disappeared, autolinking is broken, or Android builds only on one laptop. I start with repo access, store access, and a written triage. Features wait until the app installs from a clean CI path. If a rewrite to Flutter would cost less than two years of RN archaeology, I will say so — with reasons, not a sales script.",
      },
      {
        heading: "How this sits next to Flutter work",
        body: "The public case studies on this site are mostly Flutter because that is where the deepest shipped catalog is (VyooO, Royal Spirit, 24Digi, Dvago, PAK ID). React Native is a first-class delivery option, not a keyword bolted on. If you need proof in a specific RN repo, the honest path is a short paid audit of that repo, not a fake case study.",
      },
    ],
    process: [
      { title: "Stack honesty", desc: "Keep RN, move to Flutter, or fix the current RN app — named up front." },
      { title: "Audit", desc: "Dependencies, native modules, CI, stores, and the API contract." },
      { title: "Stabilize", desc: "Clean builds, crashers, and the payments path if it is broken." },
      { title: "Build", desc: "Features against a repo that actually compiles on a second machine." },
      { title: "Release", desc: "Store submission and a handover the next JS engineer can use." },
    ],
    faqs: [
      {
        question: "Should I choose React Native or Flutter?",
        answer:
          "Choose React Native if the organisation is already JavaScript-native or the app already exists in RN. Choose Flutter if you want one Dart codebase for iOS, Android and possibly Flutter Web, and you are starting fresh. I will not pick the stack that merely matches a blog title.",
      },
      {
        question: "Can you take over our existing React Native app?",
        answer:
          "Yes. That is a common RN engagement. I need the repo, the store accounts, and whatever API docs exist. Incomplete handover slows the audit; it does not make the job impossible.",
      },
      {
        question: "Do you use Expo or bare React Native?",
        answer:
          "Whichever the product already uses, unless the audit shows Expo (or bare) is blocking a required native capability. Switching build systems is a project, not a checkbox.",
      },
      {
        question: "Will you rewrite our RN app in Flutter by default?",
        answer:
          "No. Rewrites are expensive and usually political. I recommend them when the current architecture cannot be maintained at a reasonable cost — not because I prefer Dart.",
      },
    ],
    relatedSlugs: [
      "mobile-app-development-dubai",
      "flutter-app-development-dubai",
      "app-rescue-maintenance",
    ],
    relatedProjectIds: [],
    ctaHeading: "Have a React Native product to build or save?",
    ctaBody:
      "Send the repo situation (new vs inherited) and what iOS and Android must do after launch.",
    updatedAt: "2026-08-25",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesDetail.find((s) => s.slug === slug);
}

export const SERVICE_PATHS = {
  mobile: "/services/mobile-app-development-dubai",
  website: "/services/website-development-dubai",
  flutter: "/services/flutter-app-development-dubai",
  reactNative: "/services/react-native-app-development-dubai",
  rescue: "/services/app-rescue-maintenance",
  custom: "/services/custom-software-development-dubai",
  partner: "/services/technical-development-partner",
} as const;
