// ─── Business Profile (NAP) ───────────────────────────────────────────────────
// Keep this 100% consistent across ALL directories — Google uses NAP
// consistency as a local SEO ranking signal.

export const BUSINESS_PROFILE = {
  name: "Osama Tahir",
  businessName: "Osama Tahir — Web Developer & Digital Marketing Specialist",
  tagline: "Web Developer & Digital Marketing Specialist in Dubai, UAE",
  description:
    "Osama Tahir is a Dubai-based Web Developer and Digital Marketing Specialist helping UAE businesses grow online. Services include custom website development, SEO, Google Ads management, social media marketing, and AWS cloud solutions. Trusted by businesses across Dubai, Abu Dhabi, and the wider UAE.",
  shortDescription:
    "Web Developer & Digital Marketing Specialist based in Dubai, UAE. Custom websites, SEO, Google Ads, and social media marketing for UAE businesses.",
  website: "https://osama-me.digital",
  email: "hello@osama-me.digital",
  phone: "+971507276823", // UPDATE THIS with real phone number
  address: {
    street: "Dubai Development Authority (DDA) / TECOM",           // UPDATE: your Dubai street/area
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    zip: "",
  },
  categories: [
    "Web Development",
    "Web Design",
    "Digital Marketing",
    "SEO Services",
    "Google Ads",
    "Social Media Marketing",
  ],
  keywords: [
    "web developer Dubai",
    "digital marketing Dubai",
    "SEO Dubai",
    "Google Ads Dubai",
    "website design Dubai UAE",
    "web development UAE",
  ],
  socialLinks: {
    linkedin: "www.linkedin.com/in/otahir21",  // UPDATE
    instagram: "https://www.instagram.com/otahir212/",  // UPDATE
    twitter: "https://x.com/otahir212?s=11",    // UPDATE
    facebook: "https://www.facebook.com/share/1BF46PTFmM/?mibextid=wwXIfr",   // UPDATE
  },
  foundedYear: "2020",
  employees: "1-10",
  serviceAreas: ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
};

// ─── Directory List ───────────────────────────────────────────────────────────

export type SubmissionStatus = "pending" | "submitted" | "approved" | "rejected" | "skipped";

export interface Directory {
  id: string;
  name: string;
  url: string;           // homepage
  submitUrl: string;     // direct submission page
  da: number;            // domain authority estimate
  tier: 1 | 2 | 3 | 4;
  category: "local-uae" | "agency" | "global" | "review";
  hasCaptcha: boolean;
  requiresEmailVerify: boolean;
  automatable: boolean;  // can be submitted via script
  status: SubmissionStatus;
  notes: string;
  priority: number;      // 1 = highest
}

export const DIRECTORIES: Directory[] = [
  // ── Tier 1: Critical ────────────────────────────────────────────────────────
  {
    id: "google-business",
    name: "Google Business Profile",
    url: "https://business.google.com",
    submitUrl: "https://business.google.com/create",
    da: 100, tier: 1, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 1,
    notes: "Most important listing. Requires Google account + phone/postcard verification.",
  },
  {
    id: "bing-places",
    name: "Bing Places for Business",
    url: "https://www.bingplaces.com",
    submitUrl: "https://www.bingplaces.com/businessregistration",
    da: 94, tier: 1, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 2,
    notes: "Import from Google Business Profile if already set up — one click.",
  },
  {
    id: "apple-maps",
    name: "Apple Business Connect",
    url: "https://businessconnect.apple.com",
    submitUrl: "https://register.apple.com/business-connect/en",
    da: 100, tier: 1, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 3,
    notes: "Required for Apple Maps and Siri results. Needs Apple ID.",
  },
  {
    id: "clutch",
    name: "Clutch.co",
    url: "https://clutch.co",
    submitUrl: "https://clutch.co/get-listed",
    da: 76, tier: 1, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 4,
    notes: "Best B2B agency directory. Clients check here before hiring. Needs 3+ reviews to rank.",
  },
  {
    id: "goodfirms",
    name: "GoodFirms",
    url: "https://www.goodfirms.co",
    submitUrl: "https://www.goodfirms.co/get-listed",
    da: 68, tier: 1, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 5,
    notes: "Top agency directory. Free profile with manual review (3-7 days).",
  },
  {
    id: "designrush",
    name: "DesignRush",
    url: "https://www.designrush.com",
    submitUrl: "https://www.designrush.com/submit/agency",
    da: 63, tier: 1, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 6,
    notes: "Good for web design/dev agency visibility. Simple submission form.",
  },

  // ── Tier 2: Agency Directories ───────────────────────────────────────────────
  {
    id: "techbehemoths",
    name: "TechBehemoths",
    url: "https://techbehemoths.com",
    submitUrl: "https://techbehemoths.com/companies/get-listed",
    da: 44, tier: 2, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 7,
    notes: "Growing tech agency directory. Good UAE coverage.",
  },
  {
    id: "sortlist",
    name: "Sortlist",
    url: "https://www.sortlist.com",
    submitUrl: "https://www.sortlist.com/register",
    da: 45, tier: 2, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 8,
    notes: "Clients post projects, agencies bid. Good lead source.",
  },
  {
    id: "upcity",
    name: "UpCity",
    url: "https://upcity.com",
    submitUrl: "https://upcity.com/local-marketing-agencies/join",
    da: 44, tier: 2, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 9,
    notes: "US-focused but has international presence. Good for SEO agencies.",
  },
  {
    id: "selectedfirms",
    name: "SelectedFirms",
    url: "https://selectedfirms.co",
    submitUrl: "https://selectedfirms.co/submit-company",
    da: 38, tier: 2, category: "agency",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 10,
    notes: "Simple submission form. Fast approval.",
  },

  // ── Tier 3: UAE Local Directories ────────────────────────────────────────────
  {
    id: "hidubai",
    name: "HiDubai",
    url: "https://hidubai.com",
    submitUrl: "https://business.hidubai.com/register",
    da: 30, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 11,
    notes: "Popular Dubai business directory. Simple form, no CAPTCHA.",
  },
  {
    id: "justdial-uae",
    name: "JustDial UAE",
    url: "https://www.justdial.com/uae",
    submitUrl: "https://www.justdial.com/uae/cms/free_listing",
    da: 82, tier: 3, category: "local-uae",
    hasCaptcha: true, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 12,
    notes: "High DA. Has CAPTCHA but worth doing manually.",
  },
  {
    id: "kompass-uae",
    name: "Kompass UAE",
    url: "https://ae.kompass.com",
    submitUrl: "https://ae.kompass.com/businessplace/",
    da: 71, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 13,
    notes: "B2B directory with UAE presence. Good for professional services.",
  },
  {
    id: "enrollbusiness-uae",
    name: "Enroll Business UAE",
    url: "https://uae.enrollbusiness.com",
    submitUrl: "https://uae.enrollbusiness.com/BusinessProfile/Create",
    da: 55, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 14,
    notes: "Clean directory, no CAPTCHA. Easy to automate.",
  },
  {
    id: "hotfrog-ae",
    name: "Hotfrog UAE",
    url: "https://www.hotfrog.ae",
    submitUrl: "https://www.hotfrog.ae/profile/new",
    da: 58, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 15,
    notes: "Global directory with UAE section. Simple form.",
  },
  {
    id: "getlistedae",
    name: "GetListedAE",
    url: "https://getlistedae.com",
    submitUrl: "https://getlistedae.com/add-business",
    da: 34, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 16,
    notes: "UAE-specific. Simple registration form.",
  },
  {
    id: "yalwa-ae",
    name: "Yalwa UAE",
    url: "https://www.yalwa.ae",
    submitUrl: "https://www.yalwa.ae/add_business.php",
    da: 48, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 17,
    notes: "Free business listing. Good local presence.",
  },
  {
    id: "cylex-ae",
    name: "Cylex UAE",
    url: "https://www.cylex.ae",
    submitUrl: "https://www.cylex.ae/free-business-listing",
    da: 47, tier: 3, category: "local-uae",
    hasCaptcha: true, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 18,
    notes: "Has CAPTCHA. But DA 47 makes it worth manual submission.",
  },
  {
    id: "yellowpages-ae",
    name: "Yellow Pages UAE",
    url: "https://www.yellowpages.ae",
    submitUrl: "https://www.yellowpages.ae/listing/add",
    da: 38, tier: 3, category: "local-uae",
    hasCaptcha: true, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 19,
    notes: "Classic UAE directory. CAPTCHA present.",
  },
  {
    id: "servicemarket",
    name: "ServiceMarket UAE",
    url: "https://www.servicemarket.com",
    submitUrl: "https://www.servicemarket.com/join-as-a-pro/",
    da: 49, tier: 3, category: "local-uae",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 20,
    notes: "UAE service marketplace. Good for getting direct leads.",
  },

  // ── Tier 4: Global Directories ────────────────────────────────────────────────
  {
    id: "foursquare",
    name: "Foursquare Business",
    url: "https://business.foursquare.com",
    submitUrl: "https://business.foursquare.com/claim",
    da: 92, tier: 4, category: "global",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 21,
    notes: "Powers location data for many apps. High authority.",
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    url: "https://www.trustpilot.com",
    submitUrl: "https://business.trustpilot.com/signup",
    da: 93, tier: 4, category: "review",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 22,
    notes: "High trust review platform. Free plan available.",
  },
  {
    id: "crunchbase",
    name: "Crunchbase",
    url: "https://www.crunchbase.com",
    submitUrl: "https://www.crunchbase.com/add-new-entity",
    da: 91, tier: 4, category: "global",
    hasCaptcha: false, requiresEmailVerify: true, automatable: false,
    status: "pending", priority: 23,
    notes: "High authority. Good for professional credibility.",
  },
  {
    id: "manta",
    name: "Manta",
    url: "https://www.manta.com",
    submitUrl: "https://www.manta.com/business-listings/free-business-listing",
    da: 62, tier: 4, category: "global",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 24,
    notes: "Simple form. Easy to automate.",
  },
  {
    id: "brownbook-ae",
    name: "Brownbook UAE",
    url: "https://ae.brownbook.net",
    submitUrl: "https://ae.brownbook.net/add_business/",
    da: 49, tier: 4, category: "global",
    hasCaptcha: false, requiresEmailVerify: true, automatable: true,
    status: "pending", priority: 25,
    notes: "Simple form, no CAPTCHA. Good global directory.",
  },
];
