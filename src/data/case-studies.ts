import { SERVICE_PATHS } from "@/data/services-detail";

export const BUYER_CATEGORIES = [
  "Mobile Products",
  "E-commerce & Payments",
  "Business Platforms",
  "Health & GovTech",
  "Web Platforms",
] as const;

export type BuyerCategory = (typeof BUYER_CATEGORIES)[number];

export interface CaseStudyCopy {
  buyerCategory: BuyerCategory;
  seoTitle: string;
  seoDescription: string;
  overview: string;
  problem: string;
  roleDetail: string;
  technicalChallenge: string;
  keyFeatures: string[];
  relatedServiceHrefs: { href: string; label: string }[];
  updatedAt: string;
}

export const caseStudyCopy: Record<string, CaseStudyCopy> = {
  "vyooo-creator-platform": {
    buyerCategory: "Mobile Products",
    seoTitle: "VyooO Creator Platform Case Study | Flutter App by Osama Tahir",
    seoDescription:
      "How Osama Tahir led Flutter development for VyooO — a creator platform with live streaming, 360°/VR video, subscriptions and a React web presence.",
    overview:
      "VyooO is a creator-economy social product for iOS and Android. Creators publish reels and stories, stream live, share 360°/VR video, and monetize their audience. Osama Tahir led the Flutter mobile implementation at Metatech and also shipped the React marketing site at vyooo.com.",
    problem:
      "The business needed a production creator platform, not a thin social prototype. Live video, immersive 360°/VR, chat and calls, subscriptions, and store-ready iOS/Android builds had to live in one product so creators could publish and earn without switching tools.",
    roleDetail:
      "I led end-to-end Flutter development for VyooO as a senior full-stack developer at Metatech. I owned the mobile client across auth, feed, live, VR, chat/calls, create/upload, safety, and store release, and I implemented the React site on Vercel with Supabase. This was not a ticket-only contribution; I was the engineer taking the product through those surfaces.",
    technicalChallenge:
      "The hard parts were concurrent realtime systems in one codebase: Agora live streaming, CallKit voice/video, gyro-based 360° playback and live panorama, Cloudflare Stream uploads, RevenueCat entitlements, and feed performance on long sessions — while still passing App Store and Play review.",
    keyFeatures: [
      "Email, phone OTP, Google and Apple authentication with personal and organisation accounts",
      "Full-screen feed with reels, stories, VR tab and moderation flows",
      "Agora live streaming with discovery and monetization surfaces",
      "360°/VR upload, gyro playback and live panorama",
      "Direct messages, group chat, and voice/video calls",
      "RevenueCat subscriptions and creator payout UI",
      "React marketing site with store CTAs and Universal Links",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development in Dubai" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
  },
  "metatech-flutter-web-crm": {
    buyerCategory: "Business Platforms",
    seoTitle: "Flutter Web CRM Case Study | Osama Tahir Dubai",
    seoDescription:
      "Osama Tahir architected a Flutter Web CRM with Laravel APIs and real-time analytics that reduced client reporting time by 60%.",
    overview:
      "Metatech needed a client-facing CRM and analytics platform so operations and reporting did not live in disconnected exports. Osama Tahir architected a Flutter Web CRM backed by Laravel REST APIs, MySQL and Redis, and added an in-app assistant using OpenAI and Gemini APIs.",
    problem:
      "Clients needed faster operational reporting and a single place to manage data, analytics and support conversations. Manual reporting was slow and made it harder to see what was happening in the business in real time.",
    roleDetail:
      "I designed and implemented the Flutter Web CRM, the Laravel API layer, caching, Stripe and analytics integrations, and the in-app LLM chatbot. I also mentored junior developers and took part in architecture reviews around this platform.",
    technicalChallenge:
      "The dashboard had to stay responsive while pulling operational data over REST, with Redis caching and MySQL models that could sustain production traffic. Embedding LLM chat inside a real CRM — not a demo — meant handling auth, product context and failure states properly.",
    keyFeatures: [
      "Flutter Web CRM with real-time analytics dashboards",
      "Laravel REST APIs with MySQL and Redis",
      "Stripe and Google Analytics integrations",
      "In-app AI chatbot using OpenAI and Gemini APIs",
      "Client reporting workflows that replaced slower manual exports",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software and CRM development" },
      { href: SERVICE_PATHS.mobile, label: "Mobile app development in Dubai" },
    ],
    updatedAt: "2026-08-25",
  },
  "royal-spirit-ecommerce": {
    buyerCategory: "E-commerce & Payments",
    seoTitle: "Royal Spirit Mobile Commerce Case Study | Flutter | Osama Tahir",
    seoDescription:
      "Flutter e-commerce app by Osama Tahir for Royal Spirit — cross-platform shopping with authentication, orders, notifications and payment processing.",
    overview:
      "Royal Spirit needed a cross-platform mobile storefront for a retail and lifestyle brand. Osama Tahir developed the Flutter e-commerce application covering authentication, catalogue, cart, orders, notifications and payment processing on iOS and Android.",
    problem:
      "The brand needed customers to browse, order, pay and receive updates on both iPhone and Android without maintaining two native apps. Payments had to support more than a single gateway so checkout could work in the markets they sell into.",
    roleDetail:
      "I developed the Flutter commerce client: authentication, cart, orders, push notifications, and integrations with Stripe and Network International. I was the mobile engineer delivering that storefront, not a specialist who only wired a single SDK.",
    technicalChallenge:
      "Commerce quality lives in the unglamorous paths — failed payments, order state, authenticated sessions and notification reliability — while keeping one Flutter codebase healthy for both stores.",
    keyFeatures: [
      "Cross-platform Flutter storefront for iOS and Android",
      "Authentication, cart and order history",
      "Push notifications for order and engagement events",
      "Stripe and Network International payment processing",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development in Dubai" },
      { href: SERVICE_PATHS.custom, label: "Custom software development" },
    ],
    updatedAt: "2026-08-25",
  },
  "dvago-medical-directory": {
    buyerCategory: "Health & GovTech",
    seoTitle: "Dvago Medical Directory Case Study | Flutter | Osama Tahir",
    seoDescription:
      "Osama Tahir built an offline-first Flutter medical directory for Dvago, with typo-tolerant search used by healthcare professionals.",
    overview:
      "Dvago is a medical drug directory for doctors and pharmacists. Osama Tahir implemented an offline-first Flutter app with typo-tolerant search so clinical lookups stay fast even when connectivity is poor.",
    problem:
      "Healthcare professionals needed a reliable mobile reference for drug information. A chatty, online-only search experience would fail in the exact moments the directory is most useful.",
    roleDetail:
      "I implemented the Flutter client, offline-first architecture, search indexing and the monthly sync pipeline for updated pharmaceutical data while working as a senior mobile developer at Prism Digital.",
    technicalChallenge:
      "Search had to feel instant and tolerate typos on-device, while still receiving periodic data updates without corrupting the local index or bloating the install.",
    keyFeatures: [
      "Offline-first Flutter architecture",
      "Typo-tolerant drug search",
      "UI tuned for quick clinical lookups",
      "Monthly sync pipeline for updated pharma data",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development in Dubai" },
      { href: SERVICE_PATHS.rescue, label: "App rescue and maintenance" },
    ],
    updatedAt: "2026-08-25",
  },
  "24digi-health-super-app": {
    buyerCategory: "Health & GovTech",
    seoTitle: "24Digi Health Super App Case Study | Flutter | Osama Tahir",
    seoDescription:
      "Osama Tahir built 24Digi, a UAE health super app with wearables, AI coaching, commerce, an AED wallet and a bilingual WordPress site.",
    overview:
      "24Digi is a UAE-focused health and fitness product combining wearable vitals, AI coaching, social challenges, meal/shop commerce and an AED wallet. Osama Tahir built the multi-module Flutter app and the bilingual WordPress site at 24digi.ae.",
    problem:
      "Health data, coaching, commerce and payments were fragmented. The product needed one mobile ecosystem with English/Arabic support, plus a public site that could send people to the stores.",
    roleDetail:
      "As a freelance solo developer I implemented the Flutter modules (BLE bracelet, AI coaches, challenges, dual commerce, wallet, subscriptions) and the WordPress / Elementor / WooCommerce marketing site. Store presence is live on the Apple App Store.",
    technicalChallenge:
      "The difficulty was product breadth: BLE device integration, several AI surfaces, map-based checkout, Stripe/RevenueCat entitlements and a bilingual RTL-ready UI in one codebase without collapsing into an unmaintainable monolith.",
    keyFeatures: [
      "Firebase phone auth and gated health onboarding",
      "BLE bracelet vitals dashboard with local cache and history",
      "Multiple AI coaching surfaces with entitlements",
      "Paid challenges, rankings and group chat",
      "Diet and shop commerce with live tracking",
      "AED wallet and RevenueCat / Stripe subscriptions",
      "Bilingual WordPress site at 24digi.ae",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development in Dubai" },
      { href: SERVICE_PATHS.custom, label: "Custom software development" },
    ],
    updatedAt: "2026-08-25",
  },
  "pak-id-nadra": {
    buyerCategory: "Health & GovTech",
    seoTitle: "PAK ID NADRA Case Study | Flutter Contribution | Osama Tahir",
    seoDescription:
      "Osama Tahir contributed Flutter work to PAK ID, NADRA Pakistan’s official identity app — biometrics, ICAO photo capture and stability improvements.",
    overview:
      "PAK ID is NADRA Pakistan’s official digital identity application. Osama Tahir contributed to the Flutter mobile app as an independent contractor — specifically biometric authentication flows, ICAO-compliant photo capture, and stability work for large-scale usage. He did not build the entire national product alone.",
    problem:
      "A national identity app has to verify people reliably under strict security and photo standards, on a wide range of devices, at a volume most consumer apps never see.",
    roleDetail:
      "I contributed as a lead Flutter contractor via Freelancer.com. My work focused on biometric authentication flows, ICAO-compliant photo capture, and performance/stability improvements. Other teams and stakeholders own the wider NADRA programme; this case study describes my contribution, not sole authorship of PAK ID.",
    technicalChallenge:
      "Biometric and camera pipelines have to stay correct under real-world device fragmentation, while the app remains stable for a very large user base. Changes in this kind of product are high-consequence.",
    keyFeatures: [
      "Biometric authentication flows",
      "ICAO-compliant photo capture",
      "Stability and performance work for large-scale usage",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.rescue, label: "App rescue and maintenance" },
      { href: SERVICE_PATHS.mobile, label: "Mobile app development in Dubai" },
    ],
    updatedAt: "2026-08-25",
  },
  "new-edge-realty": {
    buyerCategory: "Web Platforms",
    seoTitle: "New Edge Realty Platform Case Study | Laravel | Osama Tahir",
    seoDescription:
      "Osama Tahir designed a Laravel backend for New Edge Realty — property listings, inquiries and an admin-friendly structure for a real estate site.",
    overview:
      "New Edge Realty needed a real estate site that could handle listings and inquiries without constant developer intervention. Osama Tahir designed a Laravel backend with secure APIs for listings and inquiries and an admin-friendly structure for property content.",
    problem:
      "A brokerage site that cannot be updated by non-engineers, or that collapses under listing and inquiry volume, becomes a cost centre instead of a sales channel.",
    roleDetail:
      "I designed and implemented the Laravel backend, listing and inquiry APIs, and the admin-oriented structure for content and properties as a freelance developer.",
    technicalChallenge:
      "The architecture had to be simple enough for ongoing content work and still ready for later CRM or portal integrations without a rewrite.",
    keyFeatures: [
      "Laravel backend for listings and inquiries",
      "Secure APIs for property data",
      "Admin-friendly content structure",
      "Foundation for portal and CRM integrations",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software development" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
  },
  "anton-oilfield-management": {
    buyerCategory: "Business Platforms",
    seoTitle: "Anton Oilfield Platform Case Study | Laravel & React | Osama Tahir",
    seoDescription:
      "Osama Tahir built Laravel REST APIs and a React operations dashboard for Anton Oilfield Management, hosted on AWS in the UAE.",
    overview:
      "Anton Oilfield Management needed real-time coordination of field operations and workforce across locations. Osama Tahir built Laravel REST APIs with JWT auth for task tracking and job scheduling, and a React dashboard at aomserv.com, hosted on AWS in the UAE.",
    problem:
      "Managers lacked a single operational view of jobs, tasks and teams across sites. Spreadsheets and chat do not give reliable scheduling or assignment when work is happening in the field.",
    roleDetail:
      "I implemented the Laravel APIs, JWT authentication, MySQL models, the React + Bootstrap dashboard, and the AWS hosting setup (EC2, Route 53, S3, nginx). This is an operational platform I built, not a theme install.",
    technicalChallenge:
      "Field tools need boring reliability: auth that holds, APIs that match how supervisors actually assign work, and hosting close enough to the region to keep latency acceptable.",
    keyFeatures: [
      "Laravel REST APIs for tasks, jobs and coordination",
      "JWT authentication and role-aware access",
      "React operations dashboard at aomserv.com",
      "AWS EC2, Route 53, S3 and nginx in the UAE",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software and CRM development" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
  },
};

export function getCaseStudy(id: string): CaseStudyCopy | undefined {
  return caseStudyCopy[id];
}
