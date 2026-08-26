export interface PortfolioPillar {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  skills: string[];
  /** Lucide icon name key used by the case-study UI */
  icon:
    | "shield"
    | "play"
    | "globe"
    | "radio"
    | "camera"
    | "message"
    | "users"
    | "lock"
    | "heart"
    | "sparkles"
    | "shopping"
    | "wallet";
}

export interface PortfolioSkillOffer {
  title: string;
  description: string;
  skills: string[];
}

/** Top-level work type — Website and API are separate from Mobile */
export type ProjectKind = "mobile" | "website" | "api";

/** How the cover screenshot is framed — CSS chrome around a real asset. */
export type CoverComposition = "phone" | "browser" | "device";

export interface PortfolioGalleryImage {
  src: string;
  alt: string;
  composition?: CoverComposition;
}

/** Stack / language chips for the secondary filter row */
export type ProjectPlatform =
  | "Flutter"
  | "React Native"
  | "React"
  | "WordPress"
  | "Laravel"
  | "Next.js";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  company: string;
  role: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  image: string;
  imageAlt?: string;
  coverComposition?: CoverComposition;
  gallery?: PortfolioGalleryImage[];
  featured: boolean;
  /**
   * Stack scoped by work type — e.g. mobile→Flutter only, website→WordPress only.
   * Keys present here are the project kinds.
   */
  stackByKind: Partial<Record<ProjectKind, ProjectPlatform[]>>;
  appStore?: string;
  playStore?: string;
  liveUrl?: string;
  /** External proof label, e.g. "Live Product" or "Visit Website" */
  liveLinkLabel?: string;
  /** Shown when the project is not tied to a known employer id. */
  location?: string;
  /** Feature pillars for case-study + client present mode */
  pillars?: PortfolioPillar[];
  /** Closing slide: capability map for visitors / clients */
  skillOffers?: PortfolioSkillOffer[];
}

export const KIND_LABELS: Record<ProjectKind, string> = {
  mobile: "Mobile",
  website: "Website",
  api: "API",
};

export const PLATFORM_LABELS: Record<ProjectPlatform, string> = {
  Flutter: "Flutter",
  "React Native": "React Native",
  React: "React",
  WordPress: "WordPress",
  Laravel: "Laravel",
  "Next.js": "Next.js",
};

export function getProjectKinds(project: PortfolioProject): ProjectKind[] {
  return (Object.keys(project.stackByKind) as ProjectKind[]).filter(
    (kind) => (project.stackByKind[kind]?.length ?? 0) > 0
  );
}

export function getPlatformsForKind(
  project: PortfolioProject,
  kind: ProjectKind
): ProjectPlatform[] {
  return project.stackByKind[kind] ?? [];
}

export function getAllPlatforms(project: PortfolioProject): ProjectPlatform[] {
  const set = new Set<ProjectPlatform>();
  for (const platforms of Object.values(project.stackByKind)) {
    for (const platform of platforms ?? []) set.add(platform);
  }
  return Array.from(set);
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "vyooo-creator-platform",
    title: "VyooO – Creator Social Platform",
    category: "Mobile App (Flutter) + Web",
    company: "metatech",
    role: "Solo Developer",
    client: "Creator economy startup",
    challenge:
      "Build a modern creator platform where influencers can stream live, share exclusive content, and monetize their audience — including 360° / VR video — on iOS and Android from one codebase.",
    solution:
      "Leading end-to-end Flutter development for VyooO: reels, stories, Agora live streaming, CallKit chat/calls, 360°/VR with gyro and live panorama, RevenueCat monetization, Cloudflare Stream, plus AI hashtag generation and feed fact-check badges. Also shipped vyooo.com (React on Vercel + Supabase).",
    results: [
      "Launched cross-platform iOS & Android creator app with immersive 360°/VR and live streaming",
      "AI features shipped: hashtag generation and For You fact-check badges",
      "RevenueCat subscriptions, creator payouts, and Cloudflare Stream video delivery in production",
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "Agora",
      "RevenueCat",
      "Cloudflare Stream",
      "OpenAI",
      "React",
      "Supabase",
      "Vercel",
    ],
    image: "/images/portfolio/vyooo-feed.jpg",
    imageAlt:
      "VyooO mobile app For You feed showing a full-screen creator video, engagement controls, and bottom navigation",
    coverComposition: "phone",
    gallery: [
      {
        src: "/images/portfolio/vyooo-onboarding.jpg",
        alt: "VyooO onboarding screen asking What's your vibe? with AI interest tags on a pink gradient",
        composition: "phone",
      },
      {
        src: "/images/portfolio/vyooo-live.jpg",
        alt: "VyooO live discovery screen with Ongoing Now and Recommended creator stream cards",
        composition: "phone",
      },
      {
        src: "/images/portfolio/vyooo-profile.jpg",
        alt: "VyooO creator profile for a verified account with posts, followers, Follow and Subscribe actions",
        composition: "phone",
      },
      {
        src: "/images/portfolio/vyooo-compose.jpg",
        alt: "VyooO compose screen with a photo preview, caption field, and Post button above the keyboard",
        composition: "phone",
      },
    ],
    featured: true,
    stackByKind: {
      mobile: ["Flutter"],
      website: ["React"],
    },
    appStore: "https://apps.apple.com/ae/app/vyooo/id6757733269",
    playStore: "https://play.google.com/store/apps/details?id=com.vyooo",
    liveUrl: "https://www.vyooo.com/",
    pillars: [
      {
        id: "auth",
        title: "Authentication & accounts",
        summary:
          "Production-ready signup, identity, and multi-account flows with platform social login.",
        bullets: [
          "Email / phone signup with OTP (including WhatsApp path) and password reset",
          "Google & Apple sign-in; username rules and personal / organization account types",
          "Account switching, delete account, change password, and light-theme auth UI",
        ],
        skills: ["Flutter", "Firebase Auth", "OTP / WhatsApp", "OAuth"],
        icon: "shield",
      },
      {
        id: "feed",
        title: "Home feed & reels",
        summary:
          "Full-screen social feed with engagement, prefetch, and Figma-aligned chrome.",
        bullets: [
          "Tabs: Trending, VR, Following, For You — like, comment, share, save, repost",
          "Carousel posts, mute persistence, playback speed, auto-scroll, splash prefetch",
          "Crowd-report moderation and Android decoder lifecycle fixes for long scrolling",
        ],
        skills: ["Flutter video", "Caching", "Feed UX", "Moderation"],
        icon: "play",
      },
      {
        id: "vr",
        title: "360° / VR video",
        summary:
          "Immersive VR upload and playback — the product differentiator.",
        bullets: [
          "360° upload with FFprobe detection, VR tab, and profile VR grid",
          "Gyro-based 360° playback in feeds and immersive native viewers",
          "Live 360° panorama with full-sphere equirectangular mesh on iOS & Android",
        ],
        skills: ["360° video", "Gyro sensors", "Native plugins", "OpenGL / mesh"],
        icon: "globe",
      },
      {
        id: "live",
        title: "Live streaming",
        summary:
          "Creator broadcasts with discovery, overlays, and monetization surfaces.",
        bullets: [
          "Agora-powered creator live streaming and broadcast feed UI",
          "Live discovery strip in search and scrub-preview replay",
          "Live revenue / monetization path and Figma-aligned broadcast overlays",
        ],
        skills: ["Agora", "Realtime media", "Live UX", "Monetization"],
        icon: "radio",
      },
      {
        id: "create",
        title: "Stories, create & upload",
        summary:
          "Unified create hub from camera to Cloudflare-backed publish.",
        bullets: [
          "Story capture, highlights, text overlays, drafts, and 60s slide limits",
          "Reel crop / trim / brightness, music picker, location tags, AI hashtags",
          "Cloudflare Stream upload; completed posts land on For You",
        ],
        skills: ["Media editing", "Cloudflare Stream", "Camera APIs", "AI tags"],
        icon: "camera",
      },
      {
        id: "chat",
        title: "Chat & calls",
        summary:
          "Instagram-style messaging with voice/video calls and presence.",
        bullets: [
          "DM inbox, swipe-to-reply, reactions, Giphy, audio waveforms, view-once",
          "Group chats, message requests, typing indicators, and presence",
          "Voice / video calls with CallKit on iOS and Android call fixes",
        ],
        skills: ["Realtime chat", "CallKit", "Agora calls", "Media messages"],
        icon: "message",
      },
      {
        id: "social",
        title: "Profiles & discovery",
        summary:
          "Social graph, search, deep links, and engagement surfaces.",
        bullets: [
          "Own / other profiles, follow requests, private accounts, verification badges",
          "Search: Users, Posts, Live, VR — voice input and persisted recent searches",
          "Universal / App Links for profiles and posts (www.vyooo.com/u/<username>)",
        ],
        skills: ["Social graph", "Deep linking", "Search", "Push notifications"],
        icon: "users",
      },
      {
        id: "safety",
        title: "Safety, settings & release",
        summary:
          "Moderation, privacy controls, and production release infrastructure.",
        bullets: [
          "Block / report users and posts; crowd-report with owner dispute flow",
          "Privacy prefs, notification settings, wallet / revenue UI, app version gate",
          "FVM-pinned Flutter toolchain, Firebase, Play / App Store release builds",
        ],
        skills: ["Trust & safety", "Firebase", "CI / release", "Design system"],
        icon: "lock",
      },
      {
        id: "website",
        title: "vyooo.com marketing site",
        summary:
          "React marketing site on Vercel — store funnels, deep links, and brand presence.",
        bullets: [
          "React SPA (Vite) hosted on Vercel with mobile-responsive layout",
          "Supabase-backed backend integration; reCAPTCHA on public forms",
          "App Store / Google Play CTAs plus Apple App Links and Play deep-link hosting",
        ],
        skills: ["React", "Vercel", "Supabase", "Deep linking"],
        icon: "globe",
      },
    ],
    skillOffers: [
      {
        title: "Realtime social apps",
        description:
          "Feeds, stories, follows, notifications, and privacy-aware social graphs.",
        skills: ["Flutter", "Firebase", "Push", "Deep links"],
      },
      {
        title: "Live & immersive video",
        description:
          "Agora live streaming, 360° / VR playback, and gyro panorama experiences.",
        skills: ["Agora", "360° video", "Native plugins", "Media pipelines"],
      },
      {
        title: "Chat, calls & engagement",
        description:
          "DMs, groups, reactions, CallKit voice/video, and comment systems.",
        skills: ["Realtime messaging", "CallKit", "Media messages", "UX polish"],
      },
      {
        title: "App + React launch sites",
        description:
          "Ship the Flutter product and a Vercel React marketing site with store and Universal Links.",
        skills: ["React", "Vercel", "Supabase", "App Links"],
      },
    ],
  },
  {
    id: "wurkspace-ai-business-os",
    title: "Wurkspace — AI-Native Business OS",
    category: "Business Platforms",
    company: "metatech",
    role: "Product development",
    client: "Metatech",
    challenge:
      "Businesses often run core workflows, operations and intelligence across disconnected tools instead of one connected system.",
    solution:
      "Wurkspace is Metatech’s AI-native business operating platform, live at wurkspace.co. Worked on Wurkspace as part of the Metatech product development work.",
    results: [
      "Live product at wurkspace.co — Metatech’s AI-native business operating platform",
    ],
    techStack: [],
    image: "/images/portfolio/wurkspace.jpg",
    imageAlt:
      "Wurkspace homepage showing the AI-Native Business OS hero, product navigation, and Start free call to action",
    coverComposition: "browser",
    featured: true,
    stackByKind: {},
    liveUrl: "https://wurkspace.co/",
    liveLinkLabel: "Live Product",
  },
  {
    id: "sociulflow-ai-social-media",
    title: "SociulFlow — AI Social Media Platform",
    category: "AI Products",
    company: "metatech",
    role: "Product development",
    client: "Metatech",
    challenge:
      "Social teams typically split content creation, scheduling, campaigns, analytics and audience communication across separate tools.",
    solution:
      "SociulFlow is Metatech’s AI social media platform, live at sociulflow.ai. Worked on SociulFlow as part of the Metatech product development work.",
    results: [
      "Live product at sociulflow.ai — Metatech’s AI social media platform",
    ],
    techStack: [],
    image: "/images/portfolio/sociulflow.jpg",
    imageAlt:
      "SociulFlow homepage hero for the AI social media platform, with Start free and See what's inside calls to action",
    coverComposition: "browser",
    featured: false,
    stackByKind: {},
    liveUrl: "https://www.sociulflow.ai/",
    liveLinkLabel: "Live Product",
  },
  {
    id: "ultra-smile-clinic-dubai",
    title: "Ultra Smile Clinic — Dubai Dental Clinic Website",
    category: "Web Platforms",
    company: "",
    role: "Development / delivery",
    client: "Ultra Smile Clinic",
    location: "Dubai, UAE",
    challenge:
      "A Dubai dental clinic needed a patient-facing website for treatment discovery, clinic information and appointment conversion.",
    solution:
      "The live site at ultrasmileclinic.com is a patient-facing digital experience for Ultra Smile Clinic. Worked on this project as part of the development/delivery team.",
    results: [
      "Live website at ultrasmileclinic.com — patient-facing clinic site for Ultra Smile Clinic, Dubai",
    ],
    techStack: [],
    image: "/images/portfolio/ultra-smile-clinic.jpg",
    imageAlt:
      "Ultra Smile Clinic Dubai website homepage with treatment message, Book an Appointment, and clinic navigation",
    coverComposition: "browser",
    featured: false,
    stackByKind: {},
    liveUrl: "https://www.ultrasmileclinic.com/",
    liveLinkLabel: "Visit Website",
  },
  {
    id: "ivpatch-wellness-ecommerce",
    title: "IVPATCH — Wellness E-commerce Platform",
    category: "E-commerce & Payments",
    company: "",
    role: "Development / delivery",
    client: "IVPATCH",
    challenge:
      "A wellness brand needed a storefront for product discovery and a streamlined online shopping experience.",
    solution:
      "The live site at ivpatch.com is a consumer wellness commerce platform. Worked on this project as part of the development/delivery team.",
    results: [
      "Live storefront at ivpatch.com — wellness product discovery and online shopping",
    ],
    techStack: [],
    image: "/images/portfolio/ivpatch.jpg",
    imageAlt:
      "IVPATCH wellness e-commerce homepage with product hero, Buy Now, and store navigation",
    coverComposition: "browser",
    featured: false,
    stackByKind: {},
    liveUrl: "https://www.ivpatch.com/",
    liveLinkLabel: "Visit Website",
  },
  {
    id: "dvago-medical-directory",
    title: "Dvago – Medical Drug Directory",
    category: "Mobile App (Flutter)",
    company: "prism-digital",
    role: "Solo Developer",
    client: "Healthcare / pharmaceutical brand",
    challenge:
      "Doctors and pharmacists needed a fast, reliable mobile reference for drug information that works even with limited connectivity.",
    solution:
      "Implemented an offline-first Flutter architecture with intelligent, typo-tolerant search and a UI optimized for quick medical lookups, plus a monthly sync pipeline for updated pharma data.",
    results: [
      "#13 ranking in the Medical category on the App Store",
      "High adoption among healthcare professionals thanks to fast offline search",
      "Reduced support overhead by keeping drug data reliably in sync",
    ],
    techStack: ["Flutter", "Dart", "Offline storage", "Search indexing"],
    image: "/images/portfolio/dvago.jpg",
    imageAlt:
      "DVAGO Pharmacy & Wellness homepage with medicine search, category navigation, and home-delivery messaging",
    coverComposition: "browser",
    featured: false,
    stackByKind: { mobile: ["Flutter"] },
    liveUrl: "https://www.dvago.pk/",
    liveLinkLabel: "Visit Website",
  },
  {
    id: "royal-spirit-ecommerce",
    title: "Royal Spirit – E‑commerce Platform",
    category: "Mobile Commerce",
    company: "prism-digital",
    role: "Solo Developer",
    client: "Retail & lifestyle brand",
    challenge:
      "Launch a modern mobile shopping experience with secure payments, order history, and notifications across iOS and Android.",
    solution:
      "Developed the full Flutter e‑commerce app with authentication, cart, orders, and push notifications, integrating Stripe and Network International for secure payment processing.",
    results: [
      "Single Flutter codebase powering both iOS & Android storefronts",
      "End‑to‑end secure payments with multiple gateways",
      "Improved repeat purchases via order history and notifications",
    ],
    techStack: ["Flutter", "Stripe", "Network International", "Push notifications"],
    image: "/images/portfolio/royal-spirit.jpg",
    imageAlt:
      "Royal Spirit e-commerce storefront on a laptop, showing the homepage hero, category navigation, and New Arrivals",
    coverComposition: "device",
    featured: true,
    stackByKind: { mobile: ["Flutter"] },
  },
  {
    id: "24digi-health-super-app",
    title: "24Digi – Health Super App",
    category: "Mobile App (Flutter) + Web",
    company: "freelancer",
    role: "Freelance Solo Developer",
    client: "24Digi (UAE health & fitness)",
    challenge:
      "Unify wearable vitals, AI coaching, social fitness, meal/shop commerce, and an AED wallet into one UAE-focused health ecosystem — with English/Arabic support and a public marketing site.",
    solution:
      "Built the multi-module Flutter app (BLE bracelet, 4 AI coaches, challenges, dual e-commerce, wallet, subscriptions) on Firebase, Supabase, Stripe, RevenueCat, Google Maps, and AWS APIs, plus the WordPress / Elementor / WooCommerce site at 24digi.ae.",
    results: [
      "Live on the App Store with a full health super-app ecosystem",
      "BLE vitals, AI coaches, challenges, commerce, and AED wallet in one codebase",
      "Marketing + commerce web presence shipped on WordPress (EN/AR)",
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "Supabase",
      "Stripe",
      "RevenueCat",
      "BLE",
      "WordPress",
    ],
    image: "/images/portfolio/24digi.jpg",
    imageAlt:
      "24Digi live health dashboard marketing screen showing steps, calories, distance and latest activity on a dark mobile UI",
    coverComposition: "device",
    gallery: [
      {
        src: "/images/portfolio/24digi-vitals.jpg",
        alt: "24Digi SafeLife AI screen with a 61 safety score and blood-oxygen callouts",
        composition: "device",
      },
      {
        src: "/images/portfolio/24digi-coach.jpg",
        alt: "24Digi AI health models screen for SaveLife and Recovery coaches",
        composition: "device",
      },
    ],
    featured: false,
    stackByKind: {
      mobile: ["Flutter"],
      website: ["WordPress"],
    },
    appStore: "https://apps.apple.com/ae/app/24-digi/id6749795753",
    liveUrl: "https://24digi.ae/",
    pillars: [
      {
        id: "auth",
        title: "Auth & health onboarding",
        summary:
          "UAE-focused phone auth and a gated multi-step health profile before the main app.",
        bullets: [
          "Phone login with country code and Firebase Phone Auth OTP",
          "Health profile: DOB, BMI, goals, diet, allergies, activity, preferred workouts",
          "Profile completeness gate and remote service kill-switch from backend config",
        ],
        skills: ["Firebase Auth", "OTP", "Onboarding UX", "Remote config"],
        icon: "shield",
      },
      {
        id: "bracelet",
        title: "24 Bracelet — wearable health",
        summary:
          "Native BLE integration with live vitals, sync, and shareable activity cards.",
        bullets: [
          "BLE scan, connect, and device management via platform channels",
          "Live dashboard: HR, SpO2, HRV, BP, temp, stress, sleep, steps, calories",
          "Local cache + Firestore history, recovery progress, and social share cards",
        ],
        skills: ["BLE", "Platform channels", "Firestore", "Health data"],
        icon: "heart",
      },
      {
        id: "ai",
        title: "AI coaches & C BY AI",
        summary:
          "Four AI surfaces: nutrition, emergency risk, recovery, and fitness coaching.",
        bullets: [
          "C BY AI: WHO-aligned targets, 7-day meal plans, grocery list, PDF export, delivery",
          "SaveLife AI risk insights from wearable data; Recovery AI plans and videos",
          "Fitness Coach: AI training plans, session demos, weekly review, in-coach chat",
        ],
        skills: ["AI APIs", "Health UX", "Subscriptions", "Maps / delivery"],
        icon: "sparkles",
      },
      {
        id: "challenges",
        title: "Challenge Zone — social fitness",
        summary:
          "Paid challenges, competitions, private/adventure rooms, and group chat.",
        bullets: [
          "Enrollment with payment gate; live rankings by steps/sport and city filters",
          "Competitions, private rooms with approval, adventure rooms, admin tools",
          "Group text + voice chat and background location sync for leaderboards",
        ],
        skills: ["Social / realtime", "Location", "Payments", "Group chat"],
        icon: "users",
      },
      {
        id: "commerce",
        title: "Diet, Shop & Delivery",
        summary:
          "Dual e-commerce rails with map checkout and unified live tracking.",
        bullets: [
          "Diet 24: Supabase catalog, cart, map address picker, live order tracking",
          "Shop 24: category browse, Stripe Payment Sheet, wallet pay, ratings/support",
          "Delivery hub unifying meals, diet, and shop orders on one map",
        ],
        skills: ["Supabase", "Stripe", "Apple / Google Pay", "Google Maps"],
        icon: "shopping",
      },
      {
        id: "wallet",
        title: "Wallet, subscriptions & Heroes",
        summary:
          "AED wallet, RevenueCat entitlements, marketplace, and community heroes.",
        bullets: [
          "AED balance, top-up, history, rewards, analytics charts, shop/challenge pay",
          "Service marketplace and RevenueCat / Stripe plans for AI and meal entitlements",
          "Heroes 24 community recognition cards, criteria, and holistic score widgets",
        ],
        skills: ["Stripe", "RevenueCat", "Wallet UX", "Monetization"],
        icon: "wallet",
      },
      {
        id: "platform",
        title: "Profile, push & EN/AR UX",
        summary:
          "Settings, notifications, Face ID lock, and full bilingual dark UI.",
        bullets: [
          "Avatar, bio, bracelet summary, Face ID / App Lock, notification prefs",
          "FCM + local notifications with deep links for workouts and delivery",
          "Full English + Arabic (RTL-ready) dark cyber UI with charts and animations",
        ],
        skills: ["i18n / RTL", "FCM", "Biometrics", "Design system"],
        icon: "message",
      },
      {
        id: "website",
        title: "24digi.ae marketing site",
        summary:
          "Public WordPress site for the UAE brand — bilingual, commerce-ready.",
        bullets: [
          "WordPress + Elementor / Elementor Pro with WoodMart WooCommerce theme",
          "EN/AR via TranslatePress, forms, WhatsApp chat, accessibility plugin",
          "Schema markup, Fastly CDN, and App Store / Play download funnels",
        ],
        skills: ["WordPress", "Elementor", "WooCommerce", "i18n"],
        icon: "globe",
      },
    ],
    skillOffers: [
      {
        title: "Health & wearable apps",
        description:
          "BLE devices, vitals dashboards, local cache, and cloud sync for health products.",
        skills: ["Flutter", "BLE", "Firebase", "Health UX"],
      },
      {
        title: "AI-powered consumer products",
        description:
          "Multi-coach AI hubs with paywalls, plans, and biometric-driven recommendations.",
        skills: ["AI APIs", "RevenueCat", "Onboarding", "Subscriptions"],
      },
      {
        title: "In-app commerce & wallets",
        description:
          "Catalogs, Stripe / Apple Pay / Google Pay, AED wallet, and live delivery maps.",
        skills: ["Stripe", "Supabase", "Google Maps", "E-commerce"],
      },
      {
        title: "App + WordPress launch sites",
        description:
          "Ship the Flutter product and a bilingual marketing/commerce site together.",
        skills: ["WordPress", "Elementor", "WooCommerce", "EN/AR"],
      },
    ],
  },
  {
    id: "pak-id-nadra",
    title: "PAK ID – NADRA Pakistan",
    category: "GovTech Mobile",
    company: "freelancer",
    role: "Contributing Flutter contractor",
    client: "NADRA Pakistan",
    challenge:
      "Support Pakistan’s official digital identity app used by millions, with strict security, biometric requirements, and high performance expectations.",
    solution:
      "Contributed to the mobile app with biometric authentication flows, ICAO-compliant photo capture, and performance/stability improvements for large-scale usage.",
    results: [
      "Contributed to a national identity product with 1M+ downloads and a 4.8 Google Play rating",
      "More reliable identity verification flows via mobile biometrics and photo capture",
      "Improved app stability under heavy real-world usage",
    ],
    techStack: ["Flutter", "Biometric auth", "Camera & image processing", "Secure APIs"],
    image: "/images/portfolio/pak-id.jpg",
    imageAlt:
      "Pak ID welcome screen with NADRA services and visa login options, Register and Login actions",
    coverComposition: "device",
    gallery: [
      {
        src: "/images/portfolio/pak-id-capture.jpg",
        alt: "Pak Identity home with Digital ID, tracking, QR scan, payment and ID document shortcuts",
        composition: "device",
      },
    ],
    featured: false,
    stackByKind: { mobile: ["Flutter"] },
    playStore: "https://play.google.com/store/apps/details?id=pk.gov.nadra.pakid",
  },
  {
    id: "new-edge-realty",
    title: "New Edge Realty – Property Platform",
    category: "Web & Backend (Laravel)",
    company: "freelancer",
    role: "Solo Developer",
    client: "New Edge Realty",
    challenge:
      "Build a real estate site that can handle property listings, inquiries, and future scale without constant developer intervention.",
    solution:
      "Designed a scalable Laravel backend with secure APIs for listings and inquiries, and set up an admin-friendly structure for content and properties.",
    results: [
      "Streamlined property listing and inquiry workflows",
      "Backend ready for integrations with portals and CRM",
      "Faster response times and better reliability for site visitors",
    ],
    techStack: ["Laravel", "MySQL", "REST APIs", "SEO-friendly frontend"],
    image: "/images/portfolio/new-edge-realty.jpg",
    imageAlt:
      "New Edge Realty homepage with a sold-home hero, welcome message, and See Properties call to action",
    coverComposition: "browser",
    featured: false,
    stackByKind: {
      website: ["Laravel"],
      api: ["Laravel"],
    },
    liveUrl: "https://newedgerealty.com/",
    liveLinkLabel: "Visit Website",
  },
  {
    id: "anton-oilfield-management",
    title: "Anton Oilfield Management Platform",
    category: "Web & Backend (Laravel + React)",
    company: "metatech",
    role: "Solo Developer",
    client: "Anton Oilfield Management",
    challenge:
      "Coordinate field operations and workforce in real time across multiple locations with better visibility for managers.",
    solution:
      "Built Laravel REST APIs with JWT auth for task tracking and job scheduling, and a React + Bootstrap dashboard at aomserv.com — hosted on AWS (EC2, Route 53, S3) behind nginx in the UAE.",
    results: [
      "Live platform at aomserv.com for managers and field teams",
      "Centralized visibility into field operations and active jobs",
      "More reliable scheduling and task assignment across teams",
    ],
    techStack: [
      "Laravel",
      "React",
      "Bootstrap",
      "MySQL",
      "JWT auth",
      "AWS",
      "nginx",
    ],
    image: "/images/portfolio/anton-oilfield.jpg",
    imageAlt:
      "Anton Oilfield Management homepage hero with an offshore platform, A New Model Operator headline, and Learn More",
    coverComposition: "browser",
    featured: false,
    stackByKind: {
      website: ["React"],
      api: ["Laravel"],
    },
    liveUrl: "http://aomserv.com/",
    pillars: [
      {
        id: "api",
        title: "Laravel REST APIs",
        summary:
          "Backend services for field tasks, jobs, and operational data sync.",
        bullets: [
          "REST APIs for task tracking, job scheduling, and workforce coordination",
          "MySQL data models for multi-location field operations",
          "Real-time-oriented sync to keep dashboards current for managers",
        ],
        skills: ["Laravel", "REST APIs", "MySQL", "Backend architecture"],
        icon: "lock",
      },
      {
        id: "auth",
        title: "Auth & access control",
        summary:
          "Secure API access for managers and field users.",
        bullets: [
          "JWT-based authentication for API and dashboard sessions",
          "Role-aware access for operational users across locations",
          "Hardened API boundaries suitable for production field use",
        ],
        skills: ["JWT", "Laravel Auth", "API security", "Access control"],
        icon: "shield",
      },
      {
        id: "dashboard",
        title: "React operations dashboard",
        summary:
          "Live web UI for managers — visibility into jobs, tasks, and teams.",
        bullets: [
          "React + Bootstrap dashboard at aomserv.com",
          "Operational views for active jobs, schedules, and field status",
          "Mobile-compatible layout for on-the-go management checks",
        ],
        skills: ["React", "Bootstrap", "Dashboard UX", "jsDelivr / CDN"],
        icon: "globe",
      },
      {
        id: "ops",
        title: "Field ops & scheduling",
        summary:
          "Tools that keep multi-site oilfield work coordinated.",
        bullets: [
          "Task assignment and job scheduling across locations",
          "Centralized visibility into active field operations",
          "Foundation for reporting and future system integrations",
        ],
        skills: ["Workflow design", "Scheduling", "Enterprise UX", "Integrations"],
        icon: "users",
      },
      {
        id: "infra",
        title: "AWS hosting (UAE)",
        summary:
          "Production hosting and delivery for aomserv.com.",
        bullets: [
          "AWS EC2 application hosting with nginx reverse proxy",
          "Route 53 DNS and S3-backed CDN asset delivery",
          "SSL / HSTS and UAE server location for regional latency",
        ],
        skills: ["AWS", "nginx", "Route 53", "S3"],
        icon: "radio",
      },
    ],
    skillOffers: [
      {
        title: "Laravel API backends",
        description:
          "REST APIs, JWT auth, and MySQL models for operational systems.",
        skills: ["Laravel", "JWT", "MySQL", "REST"],
      },
      {
        title: "React admin dashboards",
        description:
          "Bootstrap-powered React UIs that surface live operational data.",
        skills: ["React", "Bootstrap", "Dashboard UX"],
      },
      {
        title: "AWS production hosting",
        description:
          "EC2, Route 53, S3, and nginx setups ready for regional clients.",
        skills: ["AWS", "nginx", "DNS", "CDN"],
      },
      {
        title: "Field / enterprise workflows",
        description:
          "Task tracking, scheduling, and multi-location visibility for teams.",
        skills: ["Scheduling", "Workflows", "Integrations"],
      },
    ],
  },
];
