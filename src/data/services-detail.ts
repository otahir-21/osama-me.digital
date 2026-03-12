export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetailItem {
  id: string;
  slug: string;
  title: string;
  hubTitle: string;
  tagline: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  priceFrom: string;
  forWho: string[];
  benefits: string[];
  deliverables: string[];
  process: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  citiesNote: string;
  icon: string;
}

export const servicesDetail: ServiceDetailItem[] = [
  {
    id: "website-development",
    slug: "web-development-dubai",
    title: "Web Development Dubai",
    hubTitle: "Web Development",
    tagline: "Custom websites built for speed, conversions, and search visibility.",
    description:
      "Your website is your most valuable digital asset in the UAE market. I build custom websites that load fast, look premium on every device, and convert visitors into enquiries. Every project is engineered for Core Web Vitals, structured for SEO from day one, and handed over with full training and documentation so you own it completely.",
    seoTitle: "Web Development Dubai | Custom Website Developer UAE",
    metaDescription:
      "Custom web development in Dubai from AED 5,000. Fast, mobile-optimised, SEO-ready websites for UAE businesses. Serving Dubai, Abu Dhabi, Sharjah & all Emirates.",
    h1: "Web Development Dubai",
    priceFrom: "AED 5,000",
    forWho: [
      "UAE businesses replacing an outdated or underperforming website",
      "Startups in Dubai launching their first professional online presence",
      "E-commerce brands needing a custom storefront beyond off-the-shelf templates",
      "Marketing agencies requiring a reliable white-label development partner",
    ],
    benefits: [
      "Sub-2-second load times and strong Core Web Vitals scores",
      "Mobile-first design that works flawlessly on every device and screen size",
      "SEO-friendly structure built in from day one — clean URLs, schema, semantic HTML",
      "Conversion-focused layout with clear CTAs, social proof, and logical user flow",
    ],
    deliverables: [
      "Fully responsive, cross-browser tested website",
      "CMS integration (WordPress, Sanity, or Contentful)",
      "Google Analytics 4 and Search Console setup",
      "SEO foundation: sitemap, robots.txt, meta tags, structured data",
      "Contact forms with email notification",
      "30-day post-launch support included",
    ],
    process: [
      "Discovery & requirements",
      "Strategy & wireframes",
      "Design & development",
      "Testing & QA",
      "Launch & handover",
    ],
    faqs: [
      {
        question: "How much does a website cost in Dubai?",
        answer:
          "A standard business website starts from AED 5,000. E-commerce stores and custom web applications typically range from AED 10,000 to AED 30,000+, depending on scope, features, and complexity. A fixed-price quote is provided before any work begins.",
      },
      {
        question: "How long does it take to build a website in UAE?",
        answer:
          "A standard business website takes 3–6 weeks from kickoff to launch. E-commerce stores and web applications typically take 8–16 weeks. Timelines depend on scope, content readiness, and feedback cycles.",
      },
      {
        question: "Do you build bilingual Arabic-English websites?",
        answer:
          "Yes. I build bilingual websites with full Arabic RTL (right-to-left) layout support. This is important for UAE businesses targeting both Arabic and English-speaking audiences.",
      },
      {
        question: "Can I update my website myself after it's built?",
        answer:
          "Yes. All sites are delivered with CMS access, full training, and written documentation so you can manage your own content without needing a developer for every update.",
      },
      {
        question: "Is SEO included in web development?",
        answer:
          "Every website I build includes an SEO foundation: clean URL structure, proper meta tags, schema markup, sitemap, robots.txt, and Google Search Console integration. Ongoing monthly SEO is a separate service.",
      },
      {
        question: "Do you offer website maintenance after launch?",
        answer:
          "Yes. Monthly website maintenance and support retainers are available from AED 2,000/month, covering updates, security monitoring, performance checks, and allocated hours for changes.",
      },
    ],
    relatedSlugs: [
      "seo-services-dubai",
      "shopify-development-dubai",
      "wordpress-development-dubai",
      "landing-page-design-uae",
    ],
    citiesNote:
      "Web development services across all UAE Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. All projects managed remotely with regular video call check-ins.",
    icon: "Globe",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development-dubai",
    title: "Mobile App Development Dubai",
    hubTitle: "Mobile App Development",
    tagline: "iOS and Android apps built for UAE businesses — from idea to App Store.",
    description:
      "Whether you need a customer-facing mobile app, an internal operations tool, or a marketplace platform, I build mobile applications that perform fast, work reliably, and represent your brand professionally. Using React Native for cross-platform efficiency and native development where performance demands it, I take your app from wireframes all the way to App Store and Google Play launch.",
    seoTitle: "Mobile App Development Dubai | iOS & Android Developer UAE",
    metaDescription:
      "Mobile app development in Dubai from AED 15,000. iOS and Android apps for UAE businesses. React Native, custom mobile apps, App Store submission. Serving all Emirates.",
    h1: "Mobile App Development Dubai",
    priceFrom: "AED 15,000",
    forWho: [
      "UAE businesses needing a customer-facing mobile app to extend their service",
      "Startups in Dubai building a mobile-first product or marketplace platform",
      "Businesses with internal workflow problems that a custom app can solve",
      "Brands that want a mobile presence beyond just a mobile-responsive website",
    ],
    benefits: [
      "React Native builds: one codebase, both iOS and Android, significantly lower cost",
      "UAE-context aware: Arabic RTL support, local payment gateways (Telr, PayTabs, Stripe)",
      "App Store and Google Play submission handled end-to-end",
      "Smooth native performance: animations, offline capability, push notifications",
      "Post-launch support and maintenance retainer options available",
    ],
    deliverables: [
      "Discovery, scope documentation, and feature list",
      "UX/UI wireframes and design mockups",
      "Frontend development (React Native or native iOS/Android)",
      "Backend API development or third-party integration",
      "App Store and Google Play submission",
      "QA testing on physical iOS and Android devices",
      "30-day post-launch support",
    ],
    process: [
      "Discovery & scoping",
      "UI/UX design",
      "Development sprints",
      "QA & device testing",
      "App Store launch",
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in Dubai?",
        answer:
          "Simple, single-feature apps start at AED 15,000. Feature-rich apps — marketplace platforms, on-demand services, e-commerce apps — typically cost AED 30,000–AED 80,000+. A detailed fixed-price quote is provided after the discovery session.",
      },
      {
        question: "How long does it take to build a mobile app in UAE?",
        answer:
          "A simple app with limited features typically takes 8–12 weeks. Complex, multi-featured apps take 16–24 weeks. Timelines depend on feature scope, third-party integrations, and feedback turnaround.",
      },
      {
        question: "Do you build apps for both iPhone and Android?",
        answer:
          "Yes. Using React Native, I build cross-platform apps that run natively on both iOS and Android from a single codebase. This significantly reduces cost and development time compared to building separate native apps.",
      },
      {
        question: "Do you support Arabic language in mobile apps?",
        answer:
          "Yes. Arabic RTL (right-to-left) support is included for UAE-market apps. Bilingual Arabic/English interfaces are fully supported.",
      },
      {
        question: "Do you handle App Store and Google Play submission?",
        answer:
          "Yes. App Store and Google Play submission is included in every project, including developer account setup if needed, store listings, screenshots, and app descriptions.",
      },
      {
        question: "What happens after the app is launched?",
        answer:
          "Every project includes 30 days of post-launch support for bug fixes. Ongoing maintenance retainers are available for regular updates, new features, and platform compatibility as iOS and Android release new versions.",
      },
    ],
    relatedSlugs: [
      "web-development-dubai",
      "landing-page-design-uae",
      "seo-services-dubai",
    ],
    citiesNote:
      "Mobile app development for businesses across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates. Apps built for UAE, GCC, and international markets. Arabic and English fully supported.",
    icon: "Smartphone",
  },
  {
    id: "seo",
    slug: "seo-services-dubai",
    title: "SEO Services Dubai",
    hubTitle: "SEO Services",
    tagline: "Rank higher on Google. Get found by buyers searching in Dubai and the UAE.",
    description:
      "Most UAE businesses are invisible on Google. If you're not ranking for the searches your customers make in Dubai or Abu Dhabi, that business is going to a competitor. I deliver strategic, white-hat SEO that builds real organic visibility — from technical site health to keyword-targeted content to authoritative local presence. No shortcuts. Transparent monthly reporting so you always know exactly what's happening and why.",
    seoTitle: "SEO Services Dubai | Local SEO Specialist UAE",
    metaDescription:
      "SEO services in Dubai from AED 3,000/month. Technical SEO, local SEO, and content strategy for UAE businesses. Serving Dubai, Abu Dhabi, Sharjah & all Emirates.",
    h1: "SEO Services Dubai",
    priceFrom: "AED 3,000 / month",
    forWho: [
      "Dubai businesses with low organic traffic or poor Google rankings",
      "Local UAE businesses competing for service-area and location-based keywords",
      "E-commerce stores targeting product and category search terms",
      "B2B companies targeting industry-specific search queries in the Gulf",
    ],
    benefits: [
      "Improved rankings for target keywords within 3–6 months",
      "Local SEO dominance — Google Business Profile, citations, city-specific content",
      "Technical SEO health: Core Web Vitals, indexation, structured data, site speed",
      "Content strategy built on buyer intent, not just search volume",
      "Transparent monthly reporting showing keyword movement and lead attribution",
    ],
    deliverables: [
      "Full technical SEO audit and remediation roadmap",
      "Keyword research with intent classification and competitor gap analysis",
      "On-page optimisation: titles, meta descriptions, headers, schema markup",
      "Local SEO: Google Business Profile, citation building, local landing pages",
      "Content recommendations and on-page content improvements",
      "Monthly performance report (Google Search Console + Analytics 4)",
    ],
    process: [
      "Technical audit",
      "Keyword strategy",
      "On-page implementation",
      "Local SEO setup",
      "Monthly optimisation",
    ],
    faqs: [
      {
        question: "How much does SEO cost in Dubai?",
        answer:
          "SEO retainers start at AED 3,000/month for small businesses targeting local keywords. Competitive industries or campaigns covering multiple cities typically require AED 5,000–AED 8,000/month. A custom quote is provided after reviewing your site and target keywords.",
      },
      {
        question: "How long does SEO take to work in UAE?",
        answer:
          "Initial keyword movement is typically visible within 3 months. Meaningful organic traffic growth happens at 6–9 months. SEO compounds over time — results continue improving without ongoing ad spend.",
      },
      {
        question: "Do you offer local SEO for Dubai businesses?",
        answer:
          "Yes. Local SEO — Google Business Profile optimisation, local citations, and city-specific content — is included in all SEO retainers. It is often the fastest path to visibility for location-based searches.",
      },
      {
        question: "Can you guarantee first-page rankings on Google?",
        answer:
          "No ethical SEO provider can guarantee specific rankings — Google's algorithm is outside anyone's control. What I guarantee is transparent strategy, consistent high-quality work, and measurable progress tracked in monthly reports.",
      },
      {
        question: "What is included in your monthly SEO service?",
        answer:
          "Technical SEO maintenance, keyword tracking and optimisation, on-page content improvements, local SEO management, backlink monitoring, and a detailed monthly report showing rankings, traffic, and lead trends.",
      },
      {
        question: "Do you provide SEO services in Abu Dhabi and Sharjah?",
        answer:
          "Yes. I provide SEO services across all UAE Emirates — Abu Dhabi, Sharjah, Ajman, RAK, and Fujairah. Multi-city and UAE-wide campaigns are available for businesses serving multiple Emirates.",
      },
    ],
    relatedSlugs: [
      "web-development-dubai",
      "google-ads-management-dubai",
      "landing-page-design-uae",
    ],
    citiesNote:
      "Local SEO specialist serving businesses in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Multi-city and UAE-wide SEO campaigns available.",
    icon: "Search",
  },
  {
    id: "google-ads",
    slug: "google-ads-management-dubai",
    title: "Google Ads Management Dubai",
    hubTitle: "Google Ads",
    tagline: "Stop wasting ad spend. Start getting qualified leads from paid search.",
    description:
      "Google Ads in the UAE is expensive when managed poorly. Most accounts waste budget on irrelevant keywords, weak ad copy, and landing pages that don't convert. I manage Google Ads end-to-end — Search, Display, Shopping, and Performance Max — building the right campaign structure, targeting the right searches, and continuously optimising until your cost per lead is where it needs to be.",
    seoTitle: "Google Ads Management Dubai | PPC Specialist UAE",
    metaDescription:
      "Google Ads management in Dubai from AED 2,500/month. PPC campaigns that generate qualified leads for UAE businesses. Serving Dubai, Abu Dhabi, Sharjah & all Emirates.",
    h1: "Google Ads Management Dubai",
    priceFrom: "AED 2,500 / month",
    forWho: [
      "UAE businesses ready to invest in paid search and need measurable, accountable results",
      "E-commerce brands in Dubai running Shopping and Performance Max campaigns",
      "Local service businesses targeting high-intent location-based searches",
      "B2B companies running lead generation campaigns across the Gulf",
    ],
    benefits: [
      "Structured campaigns that stop wasting budget on irrelevant searches",
      "Ad copy tested against real conversion data — not guesswork",
      "Lower cost per lead as quality scores improve and campaigns mature",
      "Full conversion tracking: calls, forms, and purchases all attributed correctly",
      "Transparent monthly reporting — spend, clicks, conversions, CPA, and ROAS",
    ],
    deliverables: [
      "Account audit (existing) or new campaign architecture (new accounts)",
      "Keyword strategy with match types, bid strategy, and negative keyword lists",
      "Ad copy creation and A/B test structure",
      "Conversion tracking setup (Google Ads + GA4)",
      "Landing page recommendations and coordination",
      "Weekly bid management and optimisation",
      "Monthly performance report",
    ],
    process: [
      "Account audit",
      "Strategy & structure",
      "Launch with tracking",
      "Weekly optimisation",
      "Monthly reporting",
    ],
    faqs: [
      {
        question: "How much does Google Ads management cost in Dubai?",
        answer:
          "Management fees start at AED 2,500/month. Ad spend is separate — a minimum of AED 3,000–AED 5,000/month in ad spend is recommended to generate enough data for meaningful optimisation. Combined, a realistic starting budget is AED 5,500–AED 7,500/month.",
      },
      {
        question: "How long before Google Ads start generating leads?",
        answer:
          "Most campaigns generate initial leads within 1–2 weeks of launch. Meaningful optimisation requires 60–90 days of conversion data. Campaigns improve significantly in months 2 and 3 as negatives, bid adjustments, and ad tests are refined.",
      },
      {
        question: "Do you manage Google Ads campaigns in Arabic?",
        answer:
          "Yes. I manage bilingual English and Arabic Google Ads campaigns, which often significantly outperform English-only campaigns for local UAE audiences on location-based and service keywords.",
      },
      {
        question: "Will I own my Google Ads account?",
        answer:
          "Yes. You retain full ownership of your Google Ads account. I manage it using access you grant — I never hold accounts on behalf of clients. If we stop working together, your account, history, and data remain yours.",
      },
      {
        question: "What types of Google Ads campaigns do you manage?",
        answer:
          "Search, Display, Shopping, Performance Max, and YouTube campaigns. The right mix depends on your industry, budget, and conversion goals. I recommend the most cost-effective approach for your specific situation.",
      },
      {
        question: "What is the minimum ad spend for UAE campaigns?",
        answer:
          "I recommend AED 3,000–AED 5,000/month in ad spend minimum for meaningful results in the UAE market. Lower budgets limit click volume and slow the pace of optimisation.",
      },
    ],
    relatedSlugs: [
      "seo-services-dubai",
      "landing-page-design-uae",
      "social-media-marketing-uae",
    ],
    citiesNote:
      "Managing Google Ads campaigns for businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Campaigns in English and Arabic. UAE, GCC, and international targeting available.",
    icon: "TrendingUp",
  },
  {
    id: "social-media",
    slug: "social-media-marketing-uae",
    title: "Social Media Marketing UAE",
    hubTitle: "Social Media Marketing",
    tagline: "Content that builds your brand. Campaigns that drive real results.",
    description:
      "Social media in the UAE isn't just about posting content — it's one of the highest-reach paid advertising environments in the world. I handle both organic and paid: Instagram, Facebook, LinkedIn, and TikTok. Whether you're building brand awareness, driving product sales, or generating B2B leads, I create content that earns attention and run ads that convert it.",
    seoTitle: "Social Media Marketing UAE | Instagram & LinkedIn Specialist Dubai",
    metaDescription:
      "Social media marketing in UAE from AED 2,000/month. Organic content, paid campaigns, and community management for Dubai businesses. Serving all Emirates.",
    h1: "Social Media Marketing UAE",
    priceFrom: "AED 2,000 / month",
    forWho: [
      "Dubai brands wanting consistent, on-brand social presence without managing it in-house",
      "E-commerce stores driving product discovery and retargeting via Instagram and Facebook",
      "B2B companies in UAE building thought leadership and generating leads on LinkedIn",
      "Local businesses that want to stay top-of-mind in their community",
    ],
    benefits: [
      "Consistent posting schedule — no more gaps or last-minute content scrambles",
      "Platform-native creative designed for Instagram, LinkedIn, Facebook, and TikTok",
      "Paid social campaigns with audience targeting, creative testing, and conversion tracking",
      "Monthly reporting on reach, engagement, leads, and campaign ROI",
    ],
    deliverables: [
      "Social media strategy and platform prioritisation",
      "Monthly content calendar with posts, captions, and hashtags",
      "Creative assets: static, carousel, short video scripts",
      "Paid campaign management (Meta Ads, LinkedIn Ads)",
      "Community management and engagement",
      "Monthly performance report",
    ],
    process: [
      "Strategy & audit",
      "Content planning",
      "Content creation",
      "Publishing & engagement",
      "Monthly reporting",
    ],
    faqs: [
      {
        question: "How much does social media marketing cost in UAE?",
        answer:
          "Organic social media management starts from AED 2,000/month for content creation and scheduling. Packages including paid social campaigns typically range from AED 3,500–AED 6,000/month depending on platforms and ad spend scope.",
      },
      {
        question: "Which social media platforms do you manage?",
        answer:
          "Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). Platform selection is based on your business type and target audience — most UAE businesses get the best ROI from Instagram and LinkedIn.",
      },
      {
        question: "Do you create Arabic content for social media?",
        answer:
          "Yes. Bilingual Arabic/English social content is available. Arabic content consistently improves engagement with local UAE audiences and is recommended for businesses targeting Arabic-speaking customers.",
      },
      {
        question: "How many posts per month do you create?",
        answer:
          "Typically 12–16 posts per month depending on the package and number of platforms. A content calendar is shared and approved before publishing each month.",
      },
      {
        question: "Do you also run paid social media ads?",
        answer:
          "Yes. Meta Ads (Instagram and Facebook) and LinkedIn Ads are available as an add-on or within higher-tier packages. Paid social is strongly recommended for businesses with a dedicated growth budget.",
      },
      {
        question: "How long before I see results from social media marketing?",
        answer:
          "Consistent organic engagement growth typically shows within 60–90 days. Paid social campaigns can show results within days of launch. I set realistic expectations and track all progress in monthly reports.",
      },
    ],
    relatedSlugs: [
      "google-ads-management-dubai",
      "landing-page-design-uae",
      "seo-services-dubai",
    ],
    citiesNote:
      "Social media management for businesses in Dubai, Abu Dhabi, Sharjah, and across all UAE Emirates. Bilingual Arabic/English content available for local audience targeting.",
    icon: "Share2",
  },
  {
    id: "landing-pages",
    slug: "landing-page-design-uae",
    title: "Landing Page Design UAE",
    hubTitle: "Landing Page Design",
    tagline: "High-converting landing pages that make your ad spend work harder.",
    description:
      "A great ad drives a click. A great landing page turns that click into a lead or a sale. Most landing pages in the UAE are generic, slow, and built without understanding buyer psychology. I design and build landing pages structured around your specific offer, your specific audience, and your conversion goal — whether that's a call, a form submission, a purchase, or a demo booking.",
    seoTitle: "Landing Page Design UAE | High-Converting Pages for Google Ads & Meta Ads",
    metaDescription:
      "Landing page design in UAE from AED 3,000. High-converting pages for Google Ads, Meta Ads, and lead generation campaigns. Serving Dubai, Abu Dhabi, Sharjah & all Emirates.",
    h1: "Landing Page Design UAE",
    priceFrom: "AED 3,000",
    forWho: [
      "Businesses running Google Ads or Meta Ads who need a dedicated page — not a homepage",
      "SaaS companies with a specific sign-up or demo-booking campaign",
      "Real estate developers and agencies running property lead generation campaigns",
      "Event and webinar promoters needing a focused registration page",
    ],
    benefits: [
      "Single-purpose design — zero distractions, one clear conversion path",
      "Mobile-optimised for UAE's mobile-first audience",
      "Speed-optimised — Google's Quality Score rewards fast landing pages",
      "Form, conversion tracking, and CRM integration all included",
    ],
    deliverables: [
      "Custom landing page design and development",
      "Mobile-responsive build",
      "Lead capture form with email or CRM integration",
      "Google Ads conversion tracking and Meta Pixel setup",
      "Google Analytics 4 event tracking",
      "A/B variant design (optional add-on)",
    ],
    process: [
      "Offer & audience clarity",
      "Wireframe & structure",
      "Design & build",
      "Tracking setup",
      "Launch & optimise",
    ],
    faqs: [
      {
        question: "How much does a landing page cost in Dubai?",
        answer:
          "Landing pages start from AED 3,000 for a single-page design and build including form setup and conversion tracking. More complex pages or A/B variants are priced as add-ons.",
      },
      {
        question: "How long does it take to build a landing page?",
        answer:
          "Typically 5–10 business days from briefing to launch, depending on complexity and feedback speed. Rush delivery is available for urgent campaign launches.",
      },
      {
        question: "Can you build landing pages in Arabic?",
        answer:
          "Yes. Arabic-only or bilingual Arabic/English landing pages are available. Arabic pages often outperform English-only pages for UAE local audiences on location-based searches.",
      },
      {
        question: "Do you set up conversion tracking on landing pages?",
        answer:
          "Yes. Google Ads conversion tracking, Meta Pixel, and Google Analytics 4 event tracking are all included with every landing page. Proper tracking is essential for optimising ad campaign performance.",
      },
      {
        question: "Can the landing page integrate with my CRM?",
        answer:
          "Yes. Integration with HubSpot, Mailchimp, Zoho, Salesforce, and most major CRMs is available. Form submissions can connect directly to your CRM or send via email notification.",
      },
      {
        question: "What makes a good landing page for UAE audiences?",
        answer:
          "Speed, clarity, and a single focused CTA. UAE audiences are mobile-heavy, so mobile optimisation is critical. Including local social proof — UAE client names, logos, or testimonials — significantly improves conversion rates.",
      },
    ],
    relatedSlugs: [
      "google-ads-management-dubai",
      "web-development-dubai",
      "social-media-marketing-uae",
    ],
    citiesNote:
      "Landing page design for businesses running ads in Dubai, Abu Dhabi, Sharjah, and across the UAE. Arabic and bilingual pages available for local audience targeting.",
    icon: "Layout",
  },
  {
    id: "shopify-development",
    slug: "shopify-development-dubai",
    title: "Shopify Development Dubai",
    hubTitle: "Shopify Development",
    tagline: "Launch and scale your Shopify store with a specialist in Dubai.",
    description:
      "Shopify is the leading e-commerce platform for UAE businesses that want to sell online without the complexity of a custom build. I build, customise, and optimise Shopify stores — from bespoke theme design to custom Liquid development, app integrations, UAE payment gateways, and conversion optimisation. Whether launching a new store or improving an existing one, I build Shopify stores that perform and convert.",
    seoTitle: "Shopify Development Dubai | Shopify Expert UAE",
    metaDescription:
      "Shopify development in Dubai from AED 4,000. Custom Shopify stores with UAE payment gateways, Arabic support, and conversion optimisation. Serving all Emirates.",
    h1: "Shopify Development Dubai",
    priceFrom: "AED 4,000",
    forWho: [
      "UAE brands launching their first Shopify store",
      "Existing Shopify owners dissatisfied with their current theme or store performance",
      "Businesses migrating from WooCommerce, Magento, or another platform to Shopify",
      "Fashion, beauty, food, and lifestyle brands in Dubai wanting a premium storefront",
    ],
    benefits: [
      "Custom theme development — not a stock template with your logo swapped in",
      "UAE-specific setup: multi-currency, local shipping rules, Arabic language support",
      "Performance optimisation — faster Shopify stores consistently convert better",
      "UAE payment gateways: Telr, PayTabs, Stripe, and PayPal all supported",
      "Full SEO setup: meta tags, URL structure, and structured data",
    ],
    deliverables: [
      "Custom Shopify theme development or customisation",
      "Product catalogue setup and collections architecture",
      "Payment and shipping configuration",
      "UAE payment gateway integration (Telr, PayTabs, or Stripe)",
      "SEO foundation and Google Analytics 4 setup",
      "Shopify admin training and documentation",
    ],
    process: [
      "Requirements & brief",
      "Theme design & approval",
      "Development & integrations",
      "Products & content setup",
      "Launch",
    ],
    faqs: [
      {
        question: "How much does Shopify development cost in UAE?",
        answer:
          "Shopify theme customisation starts from AED 4,000. A full custom Shopify build with bespoke design, multiple integrations, and full product setup typically ranges from AED 8,000–AED 20,000+.",
      },
      {
        question: "Can you integrate UAE payment gateways on Shopify?",
        answer:
          "Yes. I set up UAE-compatible payment gateways including Telr, PayTabs, Stripe, and PayPal. UAE-based businesses typically use Telr or PayTabs for local debit and credit card processing.",
      },
      {
        question: "Do you build Shopify stores in Arabic?",
        answer:
          "Yes. Bilingual Arabic/English Shopify stores with full RTL layout — including translated navigation, product descriptions, and checkout flow.",
      },
      {
        question: "Can you migrate my existing store to Shopify?",
        answer:
          "Yes. I handle migrations from WooCommerce, Magento, OpenCart, and other platforms — including products, collections, customer data, and order history where possible.",
      },
      {
        question: "Will I be able to manage my Shopify store after launch?",
        answer:
          "Yes. Shopify's admin is built for non-technical users. Full training on managing products, orders, discount codes, and content is provided so you can run your store independently.",
      },
      {
        question: "Do you offer ongoing Shopify support?",
        answer:
          "Yes. Monthly maintenance and support retainers are available covering Shopify and app updates, new feature development, and ongoing performance optimisation.",
      },
    ],
    relatedSlugs: [
      "web-development-dubai",
      "wordpress-development-dubai",
      "seo-services-dubai",
      "landing-page-design-uae",
    ],
    citiesNote:
      "Shopify development and e-commerce solutions for businesses in Dubai, Abu Dhabi, Sharjah, and across all UAE Emirates. UAE payment gateway setup included as standard.",
    icon: "ShoppingCart",
  },
  {
    id: "wordpress-development",
    slug: "wordpress-development-dubai",
    title: "WordPress Development Dubai",
    hubTitle: "WordPress Development",
    tagline: "Flexible, powerful WordPress websites for UAE businesses.",
    description:
      "WordPress powers over 40% of the web for good reason — it's flexible, scalable, and when built properly, it performs. I build WordPress websites that go beyond templates: custom post types, advanced custom fields, performance-optimised code, and SEO-ready architecture from day one. Whether you need a business site, a content platform, or a WooCommerce store, I build WordPress sites you can manage independently and that Google can rank.",
    seoTitle: "WordPress Development Dubai | WordPress Developer UAE",
    metaDescription:
      "WordPress development in Dubai from AED 3,500. Custom WordPress websites with SEO, WooCommerce, and Arabic support. Serving Dubai, Abu Dhabi, Sharjah & all UAE.",
    h1: "WordPress Development Dubai",
    priceFrom: "AED 3,500",
    forWho: [
      "Businesses needing a content-manageable website they can update themselves",
      "Blogs, media sites, and content-heavy platforms",
      "Businesses running WooCommerce for e-commerce",
      "Companies needing custom functionality or bespoke plugin development",
    ],
    benefits: [
      "Flexible CMS — update pages, posts, and content without developer help",
      "Scalable architecture that grows as your business grows",
      "WooCommerce e-commerce with UAE payment gateway support",
      "SEO-optimised from day one with Yoast or RankMath configuration",
      "Security hardening and performance optimisation included",
    ],
    deliverables: [
      "Custom WordPress theme or child theme",
      "Plugin installation and configuration",
      "WooCommerce setup (if applicable)",
      "Performance optimisation: caching, CDN, image compression",
      "Security hardening and backup configuration",
      "Training, documentation, and handover",
    ],
    process: [
      "Requirements & brief",
      "Design & wireframes",
      "Theme development",
      "Plugin & content setup",
      "Launch & training",
    ],
    faqs: [
      {
        question: "How much does WordPress development cost in Dubai?",
        answer:
          "WordPress websites start from AED 3,500 for a standard business site. Complex builds with custom functionality, WooCommerce, or membership platforms typically range from AED 8,000–AED 20,000+.",
      },
      {
        question: "WordPress or Shopify — which is right for my business?",
        answer:
          "WordPress is better for content-heavy sites, service businesses, blogs, and complex custom functionality. Shopify is purpose-built for e-commerce and simpler to manage for pure online stores. If you sell products exclusively, Shopify. If you need a content platform or mixed-purpose site, WordPress.",
      },
      {
        question: "Can you build WooCommerce stores on WordPress?",
        answer:
          "Yes. Full WooCommerce stores including product pages, cart and checkout, UAE payment gateways (Telr, PayTabs, Stripe), shipping configuration, and inventory management.",
      },
      {
        question: "Do you build WordPress sites in Arabic?",
        answer:
          "Yes. Bilingual Arabic/English WordPress sites with full RTL support. Arabic-only sites are also available.",
      },
      {
        question: "Do you offer WordPress maintenance after launch?",
        answer:
          "Yes. Monthly WordPress maintenance retainers from AED 2,000/month covering core and plugin updates, security monitoring, backups, and allocated hours for content changes.",
      },
      {
        question: "Can I manage my own WordPress content?",
        answer:
          "Yes. WordPress is designed for non-technical users to manage content. Full training and documentation are provided so you can add pages, write blog posts, and update content without needing a developer.",
      },
    ],
    relatedSlugs: [
      "web-development-dubai",
      "shopify-development-dubai",
      "seo-services-dubai",
      "website-maintenance-uae",
    ],
    citiesNote:
      "WordPress development for businesses across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates. Arabic RTL and bilingual sites fully supported.",
    icon: "Code2",
  },
  {
    id: "website-maintenance",
    slug: "website-maintenance-uae",
    title: "Website Maintenance & Support UAE",
    hubTitle: "Website Maintenance",
    tagline: "Keep your website fast, secure, and improving — every month.",
    description:
      "Websites decay without attention. Plugins go outdated. Pages slow down. Content gets stale. Rankings drift. My monthly maintenance retainer covers updates, performance monitoring, security patches, content changes, and continuous small improvements — so your website stays healthy and performing without you having to think about it.",
    seoTitle: "Website Maintenance Dubai | Monthly Support & Care UAE",
    metaDescription:
      "Website maintenance in Dubai from AED 2,000/month. WordPress and Shopify maintenance, security monitoring, updates, and performance management across UAE.",
    h1: "Website Maintenance & Support UAE",
    priceFrom: "AED 2,000 / month",
    forWho: [
      "Businesses with an existing website that needs ongoing care and updates",
      "WordPress and Shopify owners who want to avoid technical headaches",
      "Companies that have invested in a website and want to protect that investment",
      "Startups that want a technical partner without hiring a full-time developer",
    ],
    benefits: [
      "Peace of mind — your site is monitored, updated, and backed up regularly",
      "Priority support — issues resolved faster than project-based work",
      "Proactive optimisation — small consistent improvements add up significantly",
      "Predictable monthly cost — no surprise invoices for maintenance work",
    ],
    deliverables: [
      "Monthly WordPress/Shopify core, plugin, and theme updates",
      "Uptime monitoring and performance checks",
      "Security scanning and hardening",
      "Allocated hours for content and design changes",
      "Monthly SEO check-in and recommendations",
      "Priority support for urgent issues",
    ],
    process: [
      "Onboarding & site audit",
      "Monthly update cycle",
      "Performance monitoring",
      "Content & changes",
      "Monthly report",
    ],
    faqs: [
      {
        question: "What is included in website maintenance?",
        answer:
          "Monthly WordPress or Shopify updates (core, plugins, themes), uptime monitoring, security scanning, allocated hours for content or design changes, a monthly SEO check-in, and priority support for urgent issues.",
      },
      {
        question: "How much does website maintenance cost in UAE?",
        answer:
          "Monthly retainers start at AED 2,000/month. The exact price depends on site complexity and the number of monthly hours needed. A custom quote is provided after reviewing your site.",
      },
      {
        question: "Do you offer emergency support?",
        answer:
          "Yes. Priority support for site outages, security incidents, and critical bugs is included in all retainer plans. Response time for critical issues is typically within 2–4 hours during business hours.",
      },
      {
        question: "Can I cancel the retainer anytime?",
        answer:
          "Yes. Retainers are month-to-month with 30 days' notice. No long-term contracts required.",
      },
      {
        question: "Does the retainer include SEO work?",
        answer:
          "A monthly SEO check-in with recommendations is included. Dedicated ongoing SEO work — content creation, link building, full monthly optimisation — is available as a separate SEO retainer.",
      },
      {
        question: "Do you maintain both WordPress and Shopify sites?",
        answer:
          "Yes. I maintain WordPress, Shopify, and custom Next.js/React websites. The retainer scope is adapted to your specific platform and needs.",
      },
    ],
    relatedSlugs: [
      "web-development-dubai",
      "seo-services-dubai",
      "wordpress-development-dubai",
      "shopify-development-dubai",
    ],
    citiesNote:
      "Website maintenance and support for businesses in Dubai, Abu Dhabi, Sharjah, and across all UAE Emirates. Remote support with priority response for all retainer clients.",
    icon: "Shield",
  },
];
