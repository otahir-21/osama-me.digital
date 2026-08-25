import { SERVICE_PATHS } from "@/data/services-detail";

export interface InsightSection {
  heading: string;
  body: string;
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface InsightPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  updatedAt: string;
  readTime: string;
  category: string;
  keywords: string[];
  intro: string;
  sections: InsightSection[];
  takeaways: string[];
  relatedServiceHrefs: { href: string; label: string }[];
  relatedSlugs: string[];
}

export const insights: InsightPost[] = [
  {
    slug: "hire-flutter-developer-dubai",
    title: "How to Hire a Flutter Developer in Dubai (Without Getting a Tutorial App)",
    seoTitle: "Hire a Flutter Developer in Dubai | Osama Tahir",
    metaDescription:
      "What to check before you hire a Flutter developer in Dubai: stack fit, payments, stores, APIs, and how senior delivery actually looks in the UAE.",
    excerpt:
      "A practical hiring guide for UAE teams: what “Flutter developer” should mean in production, which questions expose a tutorial-only freelancer, and how to brief the work.",
    date: "2026-08-25",
    updatedAt: "2026-08-25",
    readTime: "12 min",
    category: "Hiring",
    keywords: [
      "hire flutter developer dubai",
      "flutter developer dubai",
      "flutter app development uae",
    ],
    intro:
      "Osama Tahir is a Dubai-based Flutter developer. This page is the briefing I wish more UAE clients sent before they signed a WhatsApp quote. “Flutter developer in Dubai” is a search term, not a job description. The difference between a store-ready iOS and Android product and a pretty Dart demo is architecture, payments, APIs, and who owns the release.",
    sections: [
      {
        heading: "What a Flutter developer in Dubai should actually own",
        body: "A production Flutter engagement in the UAE usually includes both stores, not a single Android APK emailed from a personal Gmail. It includes an API the app can trust (often Laravel or Node.js), a real auth path (email, OTP, Google, Apple), and a payment path that survives Apple Pay, cards, and — when the merchant is local — processors such as Network International. Push notifications, crash reporting, and App Store / Play questionnaires are part of launch, not a surprise in week twelve. If the person you are hiring cannot speak to those surfaces, you are hiring a screen builder.",
      },
      {
        heading: "Questions that separate production engineers from tutorial freelancers",
        body: "Ask for a store URL, not a Figma. Ask which Flutter version the last shipped app used, and what broke in the last major upgrade. Ask how they handle receipt validation or subscription entitlements — RevenueCat is a valid answer; “the backend guy does that” is only valid if that person is named and available. Ask who owns the Apple Developer and Google Play accounts (it should be you). Ask how Arabic or bilingual UI is tested, not whether they “can add RTL later.” Ask what they do when App Review rejects a binary. Vague answers here predict a stalled TestFlight.",
        bullets: [
          "Which live App Store or Play listing did you personally take through review?",
          "What is in scope: client only, or client plus API and payments?",
          "How do you estimate an inherited repo versus a greenfield app?",
          "What does handover look like — repo access, environments, and store credentials?",
        ],
      },
      {
        heading: "Flutter-specific signals (not generic “mobile” talk)",
        body: "Listen for Dart and Flutter as concrete tools: BLoC versus GetX versus an inherited mess, platform channels when a plugin cannot do the job, Impeller or Skia only if they can explain why it matters on the devices you care about. Flutter Web is a real option for admin dashboards when the same team owns mobile — I have used that shape so a CRM is not a second frontend silo. It is the wrong tool for a marketing site that needs CMS editors; VyooO’s public site is React for that reason. A good Flutter hire will tell you when not to use Flutter.",
      },
      {
        heading: "UAE and GCC constraints that change the hire",
        body: "Dubai products fail on payments, store policy, and operational reality more often than on widget catalogues. Local card processors, Apple Pay, and subscription rules are not optional extras. Many companies also need a developer who can talk to an agency’s PM in GCC hours and, when asked, stay white-label. If your “Flutter developer” is a four-hour-overlap contractor with no store experience, the cheap day rate becomes an expensive delay. I work from Dubai and already operate in this timezone for Metatech product work and earlier Prism Digital commerce and health apps.",
      },
      {
        heading: "Greenfield vs takeover — do not hire for the wrong job",
        body: "Hiring for a new Flutter app is a different brief from hiring someone to rescue an unfinished one. New work needs product boundaries and a first slice that can be installed on two phones. Rescue work needs repo access, crash data, and permission to say “we will not rewrite this until the audit says so.” Mixing the two in one fixed price is how UAE founders get a number that was never real. If the original developer is gone, budget an audit before you budget features.",
      },
      {
        heading: "What I ship in Flutter (so you can sanity-check this advice)",
        body: "The public Flutter catalog on this site includes VyooO (live streaming, 360°/VR, RevenueCat, store release), Royal Spirit (commerce and payments), 24Digi (health super-app on the App Store), Dvago, and PAK ID work on biometric and capture flows. Those are not identical products. They share a pattern: the mobile client is useless without the API, payments, and release path. That is the standard I would use if I were sitting on your side of the table.",
      },
      {
        heading: "A briefing template you can copy",
        body: "Send platforms (iOS, Android, web admin or not), whether an API exists, payment methods, languages, store account ownership, and whether this is new or inherited. Attach any Figma, crash logs, or previous repo access. Ask for a written scope that names what is out of scope. A senior Flutter developer in Dubai should be able to reply with risks, not only a calendar of sprints. If you want me to do that work, use the Flutter development page or the contact form — the useful input is the product, not a keyword.",
      },
    ],
    takeaways: [
      "Hire for stores, APIs and payments — not for a widget demo.",
      "Ask for a live listing and a handover plan before you ask for a discount.",
      "Treat rescue and greenfield as different jobs with different estimates.",
      "Keep Apple and Google accounts in the company’s name.",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.flutter, label: "Flutter app development in Dubai" },
      { href: SERVICE_PATHS.mobile, label: "Mobile app development" },
      { href: SERVICE_PATHS.rescue, label: "App rescue and maintenance" },
    ],
    relatedSlugs: ["flutter-vs-react-native-uae", "mobile-app-cost-dubai", "take-over-unfinished-mobile-app"],
  },
  {
    slug: "flutter-vs-react-native-uae",
    title: "Flutter vs React Native for UAE Startups: How I Choose",
    seoTitle: "Flutter vs React Native UAE | Osama Tahir",
    metaDescription:
      "Flutter vs React Native for UAE and GCC products: when each stack wins, what maintenance really costs, and how Osama Tahir chooses for Dubai teams.",
    excerpt:
      "A delivery-first comparison for founders and agencies in Dubai — not a framework war. Stack choice should follow the team that will own the repo next year.",
    date: "2026-08-25",
    updatedAt: "2026-08-25",
    readTime: "11 min",
    category: "Architecture",
    keywords: [
      "flutter vs react native",
      "react native developer dubai",
      "flutter app development uae",
    ],
    intro:
      "Osama Tahir works in both Flutter and React Native from Dubai. Clients still ask for a slogan. The useful answer is boring: pick the stack your future team can maintain, that can pass App Review, and that can talk to the API and payment stack you already have. This comparison is how I decide on UAE and GCC work — including when I will tell you not to use the toolkit you searched for.",
    sections: [
      {
        heading: "The only question that matters in year two",
        body: "Framework Twitter is about rendering performance. Your problem in month 18 is who can change a payment retry, bump a major version, and submit a binary while you are in a client meeting. If your engineers are Dart-native, Flutter is cheaper to keep. If your web and API people already live in JavaScript and the app already exists in React Native, RN is cheaper to keep. I have watched companies pay for a rewrite because someone “preferred” a toolkit. That is not architecture. That is taste funded by a founder.",
      },
      {
        heading: "When I recommend Flutter",
        body: "Flutter is my default for greenfield iOS and Android products when we want one visual system and one release cadence, and when Flutter Web is a plausible admin surface for the same team. VyooO is the heavy example: live video, 360°/VR, subscriptions, and store release from one Dart codebase, with a separate React marketing site. Royal Spirit and 24Digi are more operational: catalogues, health workflows, payments. Flutter is also a good fit for agencies that hand over Figma and need both stores without two native benches. It is a poor fit when the expensive asset is already a large RN app.",
        bullets: [
          "New product, both stores, one engineering owner",
          "You may want a Flutter Web dashboard later without a second frontend hire",
          "Custom UI that would be painful to keep pixel-identical in two native apps",
        ],
      },
      {
        heading: "When I recommend React Native",
        body: "React Native wins when the organisation is already a JavaScript shop, or when the job is to extend or rescue an existing RN repo. Hiring a Dart specialist to rewrite a working RN commerce app is usually vanity. RN also wins when you explicitly want one language from Next.js or a Node API through to the phone. I will not pretend my public case-study grid is RN-heavy — it is not. The honest RN offer is delivery and takeover against your repo, with the same production bar: auth, payments, CI that builds on a second machine, and store accounts you own.",
        bullets: [
          "Existing React Native codebase that still has a path to maintenance",
          "Web and mobile teams already share TypeScript",
          "The statement of work named RN and changing it would blow the commercial deal",
        ],
      },
      {
        heading: "Payments, Arabic UI, and store review — the GCC tie-breakers",
        body: "Neither toolkit saves you from Apple Pay, local acquirers, or a rejected binary. RTL layout, bilingual copy, and font fallbacks are layout work in both. Live video and heavy native SDKs (Agora, CallKit, gyro VR) are possible in both and painful in both. If your differentiator is a native SDK that only has a first-class Flutter or RN wrapper, that wrapper can decide the stack by itself. I would rather follow the SDK than follow a blog post titled “Flutter is faster in 2026.”",
      },
      {
        heading: "Cost is mostly people, not widgets",
        body: "Day rates in Dubai for a senior mobile engineer are in the same band for Flutter and RN if you are hiring for production, not internships. You save money by not running two native teams, by not rewriting, and by not discovering in week eight that nobody owns the API. You do not save money by picking the toolkit with more GitHub stars. If budget is the constraint, cut scope (offline maps, custom animation, a second user role) before you cut engineering seniority.",
      },
      {
        heading: "A decision rule I actually use",
        body: "If the app does not exist and the team is not already RN: Flutter, unless a required native SDK or client politics say otherwise. If the app exists in RN and the audit says it can be saved: stay on RN. If the app exists in Flutter: stay on Flutter. If both are possible and the client is an agency with a JS bench: RN is often the partnership-friendly answer. If you want me to make that call on a paid discovery, bring the repo or the Figma and the payment list — not a preference.",
      },
    ],
    takeaways: [
      "Choose the stack your next engineer can maintain, not the one that wins Twitter.",
      "Greenfield plus one owner often means Flutter; inherited JS often means React Native.",
      "Payments and store review dominate GCC risk more than widget catalogues.",
      "Rewrites are a last resort with a written reason.",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.flutter, label: "Flutter development" },
      { href: SERVICE_PATHS.reactNative, label: "React Native development" },
      { href: SERVICE_PATHS.mobile, label: "Mobile app development" },
    ],
    relatedSlugs: ["hire-flutter-developer-dubai", "take-over-unfinished-mobile-app", "mobile-app-cost-dubai"],
  },
  {
    slug: "mobile-app-cost-dubai",
    title: "What a Mobile App Costs in Dubai in 2026 (Ranges, Not Theatre)",
    seoTitle: "Mobile App Cost in Dubai 2026 | Osama Tahir",
    metaDescription:
      "Honest mobile app cost ranges for Dubai and the UAE in 2026: what drives the number, what a cheap quote hides, and how Osama Tahir estimates production work.",
    excerpt:
      "What UAE buyers actually pay for production iOS and Android work — and why a WhatsApp number with no scope is not an estimate.",
    date: "2026-08-25",
    updatedAt: "2026-08-25",
    readTime: "13 min",
    category: "Pricing",
    keywords: [
      "mobile app cost dubai",
      "app development cost uae",
      "flutter app cost dubai",
    ],
    intro:
      "Osama Tahir estimates mobile and full-stack work from Dubai. People search “mobile app cost Dubai” hoping for a single AED figure. There isn’t one. A catalogue-and-checkout Flutter app is not VyooO. A CRM with Flutter Web is not a five-screen MVP. Below are ranges I will stand behind as orientation — and the cost drivers I actually use when a founder or agency asks for a number.",
    sections: [
      {
        heading: "Orientation ranges (production, not student projects)",
        body: "These are order-of-magnitude bands for a senior individual or a very small senior team in the UAE, including iOS and Android from one cross-platform codebase, a reasonable API, auth, and a first store submission. They exclude your design contract if Figma is not ready, paid native SDK licences, and Apple/Google developer fees. A body-shop quote at a third of these numbers usually omitted the API, the second store, or the person who will still answer the phone after launch.",
        table: {
          headers: ["Shape of product", "What “done” usually means", "Orientation (AED)"],
          rows: [
            [
              "Narrow MVP",
              "Auth, 4–8 core screens, one simple backend, one payment method, both stores",
              "40,000 – 90,000",
            ],
            [
              "Operational app",
              "Roles, payments, notifications, admin or light CRM, hardening, launch support",
              "90,000 – 180,000",
            ],
            [
              "Heavy product",
              "Live/realtime, subscriptions, media pipelines, multi-role, serious QA",
              "180,000 – 400,000+",
            ],
            [
              "Takeover / rescue",
              "Audit first, then stabilize; features priced after the repo is honest",
              "Audit 8,000 – 25,000; then T&M or a bounded phase",
            ],
          ],
        },
      },
      {
        heading: "What actually moves the number",
        body: "Payments multiply complexity: Apple Pay, subscriptions, and local acquirers are not a Stripe test key. Realtime (chat, live video, presence) multiplies it again — VyooO’s Agora, CallKit and 360° path is a different species from a content feed. So do roles (patient vs clinic vs admin), offline, maps, and bilingual UI that is not a mirrored afterthought. Store review is cheap if you planned privacy nutrition labels and test accounts; it is expensive if you discover them on rejection day. An existing messy repo can cost more than a clean greenfield of the same feature list. I would rather tell you that before you sign than after you have paid for screens that sit on a crashing runtime.",
      },
      {
        heading: "What a cheap Dubai quote usually left out",
        body: "No iOS build, only Android. No API — “we will use Firebase until it hurts.” No receipt validation. No crash tooling. Design is “included” but means the developer pushing pixels without a system. Arabic is a toggle. Handover is a ZIP file. Maintenance is “we will see.” If two quotes differ by 3×, ask both to list environments, stores, payments, and who owns the developer accounts. The expensive quote is sometimes still wrong, but the cheap one is almost always incomplete.",
        bullets: [
          "Second store and a real TestFlight / internal-testing path",
          "API auth, roles, and payment failure states",
          "Push, analytics, and store questionnaires",
          "Weeks of support after the first production crash",
        ],
      },
      {
        heading: "Flutter vs two native teams vs an agency bench",
        body: "Cross-platform (Flutter or React Native) is how most UAE startups should buy their first product if they need both stores. Two native teams roughly doubles mobile labour and coordination. An agency with account managers, designers, and a junior bench can be the right buy if you need that wrapping — you are paying for the wrapping. I sell senior delivery, including white-label for agencies, without pretending I am a 20-person studio. Compare like with like.",
      },
      {
        heading: "How I estimate so the number is not theatre",
        body: "I need the user jobs, platforms, whether an API exists, payment list, languages, and whether the repo exists. Discovery is short and paid when the brief is vague — that is cheaper than a fictional fixed price. I sequence a first installable slice so you can see a build on two devices before we pretend the rest is known. If you are still choosing Flutter vs React Native, fix that before you ask for a single commercial number; they are similar labour bands but different handover plans.",
      },
      {
        heading: "After launch is part of the cost",
        body: "OS releases, plugin deprecations, and store policy changes are not optional. Budget a retainer or a quarterly slice if the app takes payments or live users. The founders who treat launch as the end of spend are the ones who return six months later with a broken checkout and no original developer. App rescue exists because that pattern is common in Dubai. Price it as a system, not a one-off montage.",
      },
    ],
    takeaways: [
      "Ask every vendor to name stores, API, payments and handover — then compare.",
      "Rescue without an audit is not a fixed-price app; it is a guess.",
      "Realtime, subscriptions and multi-role admin are what push you into the top band.",
      "Keep a post-launch budget if users can pay or if the OS will move without you.",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development" },
      { href: SERVICE_PATHS.flutter, label: "Flutter development" },
      { href: SERVICE_PATHS.custom, label: "Custom software and CRM" },
    ],
    relatedSlugs: ["hire-flutter-developer-dubai", "take-over-unfinished-mobile-app", "flutter-vs-react-native-uae"],
  },
  {
    slug: "take-over-unfinished-mobile-app",
    title: "How to Take Over an Unfinished Mobile App (Without a Panic Rewrite)",
    seoTitle: "Take Over an Unfinished App | Osama Tahir Dubai",
    metaDescription:
      "How Osama Tahir takes over unfinished Flutter and React Native apps in Dubai: audit first, stabilize payments and stores, rewrite only when the repo cannot be saved.",
    excerpt:
      "The original developer is gone, the build is red, or payments fail in production. Here is the sequence that actually works — and the access you need to give.",
    date: "2026-08-25",
    updatedAt: "2026-08-25",
    readTime: "12 min",
    category: "Rescue",
    keywords: [
      "take over flutter app",
      "unfinished mobile app",
      "app rescue dubai",
    ],
    intro:
      "Osama Tahir’s app rescue work in Dubai usually starts the same way: a founder has an APK, a half-finished TestFlight, or a repo the last freelancer stopped answering. The instinct is to hire someone to “just finish it.” That instinct is how you pay twice. The sequence that works is access, audit, stabilize, then features. This is that sequence, written so you can brief any senior engineer — including me.",
    sections: [
      {
        heading: "Why unfinished apps stall",
        body: "The UI looks 80% done because screens are easy to screenshot. The remaining 20% is auth edge cases, payment webhooks, store questionnaires, push certificates, and a CI path that only works on one laptop. Agencies hand over Figma and assume the contractor filled the gaps. Founders assume “Flutter” means both stores. None of that is malice; it is an incomplete definition of done. Takeover means making that definition explicit before you add a new feature on a crashing runtime.",
      },
      {
        heading: "Access checklist (if you cannot provide this, the audit will be slow, not impossible)",
        body: "I need the git remote, not a ZIP of an old laptop. I need Apple Developer and Google Play with permission to create builds — the accounts stay yours. I need API environments, payment dashboard access (or a sandbox), Firebase or equivalent, and any crash tool (Crashlytics, Sentry). Store listing copy and privacy details matter as much as Dart files. If the last developer used a personal Apple ID, that is a finding, not a footnote. We will move the app to the company account as part of stabilize.",
        bullets: [
          "Git hosting + which branch last shipped",
          "Apple and Google accounts (company-owned)",
          "Backend repo or at least API base URLs and auth method",
          "Payment and notification dashboards",
          "Known bugs in the user’s words, not only in Jira",
        ],
      },
      {
        heading: "What the audit is for",
        body: "The audit is a written picture of what is safe to keep, what is risky, and what is blocking users from completing the job they paid for. I look at Flutter or React Native version, plugin rot, whether Android and iOS both build from a clean machine, crash clusters, payment failure paths, and store status (rejected, missing privacy, expired certs). You get a sequence, not a motivational rewrite. Most products I see can be saved. Some cannot — for example a dead plugin ecosystem plus a business that now needs a completely different data model. That call should be evidence-based.",
      },
      {
        heading: "Stabilize before you “just add the chat module”",
        body: "New features on a red build are wasted spend. Typical first fixes: a CI or documented local build, the checkout or entitlement path, session expiry, and the crashers on the first screen after login. Then we talk about the feature the last contract promised. If payments are involved, I treat receipt validation and failure states as launch blockers, not polish. This is the same discipline I use on greenfield work; rescue just starts later in the story.",
      },
      {
        heading: "When a rewrite is justified",
        body: "Rewrite when the architecture cannot be changed at reasonable cost: untyped sprawl with no tests and no module boundaries, a native fork that cannot merge, or a product pivot that would fight the old schema on every screen. Do not rewrite because the new developer “likes Flutter more than RN” or because the UI looks dated. UI can be reskinned. Data and payments are the expensive parts. I will argue against a rewrite when the audit says stabilize-and-extend is cheaper — even if a rewrite would be more pleasant for me.",
      },
      {
        heading: "How this shows up in real products",
        body: "Health and commerce apps I have worked on (including 24Digi, Dvago, Royal Spirit) only work if the operational path works: catalogue or directory data, payments, and a store listing that remains live. Creator products like VyooO only work if realtime and entitlements stay up. Rescue on those categories is less about a new colour and more about whether a user can finish a job after an OS update. That is the standard I apply when someone sends me a half-built repo from a vanished contractor.",
      },
      {
        heading: "How to start without performing a full post-mortem in WhatsApp",
        body: "Send: what users cannot do today, what access you have, and whether a store build currently exists. I will tell you if this is an audit, a bounded stabilize phase, or a conversation about a rewrite. Use the app rescue service page or the contact form. If you are still choosing Flutter vs React Native because the old repo is RN and a new vendor wants Dart, read the comparison insight first — that choice should be in the audit, not in a sales call.",
      },
    ],
    takeaways: [
      "Audit and stabilize before you buy more screens.",
      "Company-owned store accounts are part of rescue, not an afterthought.",
      "Rewrites need a written reason; taste is not a reason.",
      "Incomplete handover slows the work; it does not make the product unrescuable by default.",
    ],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.rescue, label: "App rescue and maintenance" },
      { href: SERVICE_PATHS.flutter, label: "Flutter development" },
      { href: SERVICE_PATHS.reactNative, label: "React Native development" },
    ],
    relatedSlugs: ["hire-flutter-developer-dubai", "mobile-app-cost-dubai", "flutter-vs-react-native-uae"],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((post) => post.slug === slug);
}
