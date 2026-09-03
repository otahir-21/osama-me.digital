import { SERVICE_PATHS } from "@/data/services-detail";

export const BUYER_CATEGORIES = [
  "Mobile Products",
  "AI Products",
  "Business Platforms",
  "E-commerce & Payments",
  "Healthcare & GovTech",
  "Web Platforms",
  "Performance Marketing",
] as const;

export type BuyerCategory = (typeof BUYER_CATEGORIES)[number];

export interface CaseStudyCopy {
  buyerCategory: BuyerCategory;
  /** Additional buyer-facing categories this project should also appear under. */
  secondaryCategories?: BuyerCategory[];
  /** Short card copy for homepage / portfolio listings. Falls back to overview. */
  cardDescription?: string;
  seoTitle: string;
  seoDescription: string;
  overview: string;
  problem: string;
  roleDetail: string;
  technicalChallenge: string;
  /** Defaults to “Technical Challenge” on the case-study page. */
  challengeHeading?: string;
  solution: string;
  keyFeatures: string[];
  /** Defaults to “Key Features” on the case-study page. */
  featuresHeading?: string;
  relatedServiceHrefs: { href: string; label: string }[];
  updatedAt: string;
  /**
   * Internal editorial gaps for Osama to complete.
   * Never import this field into UI — do not render it.
   */
  contentTodos?: string[];
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
    solution:
      "I implemented one Flutter codebase for iOS and Android covering auth, feed, live, VR, chat/calls, create/upload and store release, with Agora, CallKit, RevenueCat, Cloudflare Stream and Firebase in production. The public site at vyooo.com is a separate React app on Vercel with Supabase.",
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
  "wurkspace-ai-business-os": {
    buyerCategory: "Business Platforms",
    secondaryCategories: ["AI Products"],
    cardDescription:
      "An AI-native business platform designed to bring operations, workflows and business intelligence into a connected digital workspace.",
    seoTitle: "Wurkspace AI Business OS Case Study | Osama Tahir",
    seoDescription:
      "Case study of Wurkspace, Metatech’s AI-native business operating platform. Osama Tahir worked on Wurkspace as part of Metatech product development in Dubai.",
    overview:
      "Wurkspace is Metatech’s AI-native business operating platform, live at wurkspace.co. It is designed to bring core business workflows, operations and intelligence into one connected system.",
    problem:
      "Core business work often lives across disconnected tools — operations in one place, reporting in another, and no shared system for day-to-day workflows. Teams need one operating platform rather than a stack of separate products.",
    roleDetail:
      "Worked on Wurkspace as part of the Metatech product development work.",
    technicalChallenge:
      "The product has to hold core business workflows, operations and intelligence in one connected system so teams are not jumping between disconnected tools.",
    solution:
      "I worked on Wurkspace as part of the Metatech product development work. The live platform is an AI-native business OS at wurkspace.co, designed to bring core business workflows, operations and intelligence into one connected system.",
    keyFeatures: [
      "AI-native business operating platform, live at wurkspace.co",
      "Core business workflows and operations in one connected system",
      "Intelligence as part of the operating platform, not a separate add-on tool",
      "Public product covering areas such as sales, operations, finance, HR, marketing, support and client portals",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software and CRM development" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
    contentTodos: [
      "Confirm Osama's exact role and ownership on Wurkspace",
      "Confirm responsibilities (which surfaces / frontend / backend)",
      "Confirm technology stack and architecture",
      "Confirm verified outcomes (no metrics until supplied)",
    ],
  },
  "sociulflow-ai-social-media": {
    buyerCategory: "AI Products",
    secondaryCategories: ["Business Platforms"],
    cardDescription:
      "An AI-powered social media platform that brings content creation, scheduling, campaigns, analytics and audience communication into one workflow.",
    seoTitle: "SociulFlow AI Social Media Platform Case Study | Osama Tahir",
    seoDescription:
      "Case study of SociulFlow, Metatech’s AI social media platform. Osama Tahir worked on SociulFlow as part of Metatech product development in Dubai.",
    overview:
      "SociulFlow is Metatech’s AI social media platform, live at sociulflow.ai. It brings content creation, scheduling, campaigns, analytics and audience communication into one workflow.",
    problem:
      "Social teams typically split the job across separate tools: one for drafting, another for the calendar, another for campaigns, and yet another for comments, DMs and reporting. That makes it harder to keep a consistent brand and a single view of performance.",
    roleDetail:
      "Worked on SociulFlow as part of the Metatech product development work.",
    technicalChallenge:
      "The product has to keep creation, scheduling, campaigns, analytics and audience communication in one workflow so teams are not stitching those jobs together by hand.",
    solution:
      "I worked on SociulFlow as part of the Metatech product development work. The live platform is an AI social media product at sociulflow.ai, built around one workflow for content, scheduling, campaigns, analytics and audience communication.",
    keyFeatures: [
      "AI-assisted content creation",
      "Scheduling across connected social channels",
      "Campaign management",
      "Analytics in one view",
      "Unified inbox for comments and messages",
      "Brand-guideline workflows so drafts start from the brand’s direction",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software development" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
    contentTodos: [
      "Confirm Osama's exact role and ownership on SociulFlow",
      "Confirm responsibilities (which surfaces / frontend / backend)",
      "Confirm technology stack and architecture",
      "Confirm verified outcomes (no metrics until supplied)",
    ],
  },
  "ultra-smile-clinic-dubai": {
    buyerCategory: "Web Platforms",
    secondaryCategories: ["Healthcare & GovTech"],
    cardDescription:
      "A patient-facing digital experience for a Dubai dental clinic, built around treatment discovery, smile transformations, clinic information and appointment conversion.",
    seoTitle: "Ultra Smile Clinic Dubai Website Case Study | Osama Tahir",
    seoDescription:
      "Case study of the Ultra Smile Clinic website — a patient-facing digital experience for a Dubai dental clinic — in Osama Tahir's software portfolio.",
    overview:
      "Ultra Smile Clinic is a Dubai dental clinic. The live site at ultrasmileclinic.com is a patient-facing website for treatment discovery, smile transformations, clinic information and booking.",
    problem:
      "A clinic that only exists on the phone or in person makes it harder for people to understand treatments, see previous work, find the location, and book. The public site has to carry that information and the appointment path.",
    roleDetail:
      "Worked on this project as part of the development/delivery team.",
    technicalChallenge:
      "The site has to present treatments, proof of work, clinic details and a booking path in one patient-facing experience — without turning the case study into a dental marketing page.",
    solution:
      "The live website at ultrasmileclinic.com is a patient-facing digital experience for Ultra Smile Clinic in Dubai: treatment discovery, a smile transformation gallery, clinic information, FAQs, location/contact, and appointment booking. I worked on this project as part of the development/delivery team.",
    keyFeatures: [
      "Treatment and service discovery",
      "Appointment booking",
      "Smile transformation gallery",
      "Clinic information, FAQs, location and contact",
      "Patient-facing website experience, live at ultrasmileclinic.com",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software development" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
    contentTodos: [
      "Confirm Osama's exact role and ownership on Ultra Smile Clinic",
      "Confirm employer/engagement (Metatech, freelance, or other)",
      "Confirm responsibilities (which surfaces / frontend / backend)",
      "Confirm technology stack and architecture",
      "Confirm verified outcomes (no metrics until supplied)",
    ],
  },
  "ivpatch-wellness-ecommerce": {
    buyerCategory: "E-commerce & Payments",
    secondaryCategories: ["Web Platforms"],
    cardDescription:
      "A consumer wellness commerce platform focused on product discovery, targeted wellness solutions and a streamlined online shopping experience.",
    seoTitle: "IVPATCH E-commerce Website Case Study | Osama Tahir",
    seoDescription:
      "Case study of the IVPATCH wellness e-commerce website in Osama Tahir's software portfolio — product discovery and an online shopping experience.",
    overview:
      "IVPATCH is a consumer wellness commerce platform, live at ivpatch.com. The public site is built around product discovery, a catalogue, and an online shopping experience.",
    problem:
      "A wellness brand that cannot be browsed and purchased in one place leaves product discovery and checkout in disconnected channels. The storefront has to carry catalogue, shopping and customer-acquisition in one site.",
    roleDetail:
      "Worked on this project as part of the development/delivery team.",
    technicalChallenge:
      "The storefront has to hold product discovery, catalogue and checkout in one shopping path. Medical or wellness-effectiveness claims are not part of this case study.",
    solution:
      "The live site at ivpatch.com is a consumer wellness commerce platform: product discovery, catalogue, and a streamlined online shopping experience, with product content and a newsletter path. I worked on this project as part of the development/delivery team.",
    keyFeatures: [
      "Wellness product discovery and catalogue",
      "Online shopping flows",
      "Product-focused content on the storefront",
      "Newsletter / customer-acquisition path",
      "Live storefront at ivpatch.com",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.custom, label: "Custom software development" },
      { href: SERVICE_PATHS.partner, label: "Technical development partnership" },
    ],
    updatedAt: "2026-08-25",
    contentTodos: [
      "Confirm Osama's exact role and ownership on IVPATCH",
      "Confirm employer/engagement (Metatech, freelance, or other)",
      "Confirm responsibilities (which surfaces / frontend / backend)",
      "Confirm technology stack and architecture",
      "Confirm whether subscriptions, bundles and account/order flows were in scope",
      "Confirm verified outcomes (no metrics until supplied)",
    ],
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
    solution:
      "I developed the Flutter commerce client as one codebase for iOS and Android: authentication, catalogue, cart, orders, push notifications, and payment processing through Stripe and Network International.",
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
    buyerCategory: "Healthcare & GovTech",
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
    solution:
      "I implemented an offline-first Flutter architecture with typo-tolerant on-device search, a UI tuned for quick clinical lookups, and a monthly sync pipeline for updated pharmaceutical data.",
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
    buyerCategory: "Healthcare & GovTech",
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
    solution:
      "I built the multi-module Flutter app on Firebase, Supabase, Stripe, RevenueCat, Google Maps and AWS APIs — BLE bracelet, AI coaches, challenges, dual commerce, wallet and subscriptions — plus the bilingual WordPress / Elementor / WooCommerce site at 24digi.ae.",
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
    buyerCategory: "Healthcare & GovTech",
    seoTitle: "PAK ID NADRA Case Study | Flutter Contribution | Osama Tahir",
    seoDescription:
      "Osama Tahir contributed Flutter work to PAK ID, NADRA Pakistan’s official identity app — biometrics, ICAO photo capture and stability improvements.",
    overview:
      "PAK ID is NADRA Pakistan’s official digital identity application. Osama Tahir contributed to the Flutter mobile app as an independent contractor. Contribution scope: biometric authentication flows, ICAO-compliant photo capture, and stability improvements for large-scale usage.",
    problem:
      "A national identity app has to verify people reliably under strict security and photo standards, on a wide range of devices, at a volume most consumer apps never see.",
    roleDetail:
      "I contributed as a lead Flutter contractor via Freelancer.com. My work focused on biometric authentication flows, ICAO-compliant photo capture, and performance/stability improvements. Other teams and stakeholders own the wider NADRA programme; this case study describes my contribution, not sole authorship of PAK ID.",
    technicalChallenge:
      "Biometric and camera pipelines have to stay correct under real-world device fragmentation, while the app remains stable for a very large user base. Changes in this kind of product are high-consequence.",
    solution:
      "I contributed Flutter work on biometric authentication flows, ICAO-compliant photo capture, and performance/stability improvements. The wider NADRA programme and remaining product surfaces were owned by other teams.",
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
    solution:
      "I designed a Laravel backend with secure APIs for listings and inquiries, and an admin-friendly structure so property content does not require a developer for every change.",
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
    solution:
      "I built Laravel REST APIs with JWT auth for task tracking and job scheduling, a React + Bootstrap dashboard at aomserv.com, and hosted the stack on AWS in the UAE (EC2, Route 53, S3, nginx).",
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
  "uk-insolvency-meta-ads": {
    buyerCategory: "Performance Marketing",
    cardDescription:
      "An early Meta Ads test for UK insolvency enquiries: video into an Instant Form, with the next optimisation locked to the opening seconds of the creative.",
    seoTitle: "UK Insolvency Meta Ads Case Study | Osama Tahir",
    seoDescription:
      "Early Meta Ads lead-generation test for a UK insolvency advisory: 6 Instant Form leads from AED 407, with the next test focused on the video hook — by Osama Tahir.",
    overview:
      "This is an early Meta Ads test for a UK insolvency advisory, aimed at company directors and business owners who may be dealing with liquidation, HMRC debt or wider financial difficulty. The funnel was a 31-second video ad into a Meta Instant Form with qualification questions, then lead capture for the sales team. In this reporting window the campaign produced 6 Instant Form leads from AED 407 (AED 67.83 / about £14 per lead). That is a useful signal, not a finished result.",
    problem:
      "The client needed inbound enquiries from UK directors, not generic social traffic. The job was to put a serious offer in front of people already under financial pressure, qualify them in the form, and pass usable leads to sales — without spending into a creative that nobody watches.",
    roleDetail:
      "I planned and ran the Meta campaign: offer positioning, video-led creative, Instant Form qualification, placement and the first reporting pass. At this stage the useful work is reading creative, audience and funnel together, then choosing the next test — not treating six form fills as proof the campaign is done.",
    challengeHeading: "What the data showed",
    technicalChallenge:
      "The campaign is generating Instant Form leads at AED 67.83 each. Almost nobody is watching the video. Average play time is two seconds on a 31-second asset; hook rate is 11% and hold rate is 7.49%. Delivery and results concentrated on Facebook (5 leads) over Instagram (1). Age and gender split is 5 men and 1 woman, all 45–64 — a real pattern in this sample, not yet a targeting conclusion. Form volume is also not the same as sales-accepted lead quality.",
    solution:
      "Keep the funnel (video → Instant Form → qualification → sales). The next optimisation is the opening two to three seconds of the video, because that is where retention collapses. After the hook test, the campaign should be judged on sales-accepted enquiries, not on Instant Form volume alone.",
    featuresHeading: "The funnel",
    keyFeatures: [
      "Video ad aimed at UK directors facing insolvency, HMRC debt or financial difficulty",
      "Meta Instant Form with qualification questions before lead capture",
      "Facebook and Instagram delivery, with Facebook producing most of the results",
      "Reporting across creative, audience, placement and cost per lead",
      "Next test locked to the opening 2–3 seconds, not a full rebuild of the funnel",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.website, label: "Website and landing-page development in Dubai" },
    ],
    updatedAt: "2026-09-03",
    contentTodos: [
      "Confirm whether the client can be named publicly (Directors Support Line vs generic advisory)",
      "Replace Instant Form counts with sales-accepted lead quality when sales has reviewed the 6 enquiries",
      "Update after the hook-rate creative test with new watch time, CPL and accepted-lead numbers",
    ],
  },
};

export function getCaseStudy(id: string): CaseStudyCopy | undefined {
  return caseStudyCopy[id];
}

export function getProjectBuyerCategories(copy: CaseStudyCopy): BuyerCategory[] {
  return [copy.buyerCategory, ...(copy.secondaryCategories ?? [])];
}
