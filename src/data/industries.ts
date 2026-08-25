import { SERVICE_PATHS } from "@/data/services-detail";

export interface IndustryPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  projectIds: string[];
  relatedServiceHrefs: { href: string; label: string }[];
  updatedAt: string;
}

export const industries: IndustryPage[] = [
  {
    slug: "ecommerce-apps",
    title: "E-commerce & Payments Apps",
    seoTitle: "E-commerce App Development Dubai | Osama Tahir",
    metaDescription:
      "E-commerce and payments app development in Dubai by Osama Tahir: catalogues, checkout, Apple Pay, Stripe and operational admin for UAE commerce teams.",
    h1: "E-commerce & Payment Apps for UAE Businesses",
    intro:
      "Osama Tahir builds and takes over commerce products in Dubai where the catalogue, checkout and operations have to work on real devices — not as a theme demo. Typical work includes Flutter mobile clients, payment processors used in the UAE, and the admin or API layer that warehouse and support teams actually live in.",
    sections: [
      {
        heading: "What “e-commerce app” means in production",
        body: "A store that cannot take Apple Pay, recover a failed card charge, or show an honest order status is not a commerce product. UAE work also means local acquirers such as Network International when the merchant needs them, plus the unglamorous admin: stock, refunds, and who is allowed to press the button. I implement or inherit that path rather than wrapping a template and calling it a launch.",
        bullets: [
          "Mobile catalogues, cart, checkout and order history",
          "Apple Pay, Stripe, and regional processors when the merchant requires them",
          "Admin or CRM surfaces for operations, not only a customer app",
          "Store listing, receipts and failure states as part of launch",
        ],
      },
      {
        heading: "Work on this site",
        body: "Royal Spirit is a Flutter commerce product from the Prism Digital period: the job was a buyable mobile path, not a brochure. IVPATCH is a wellness e-commerce website with a live storefront — different surface, same commercial constraint: the purchase path has to complete. When a founder asks for “Shopify but as an app,” the useful conversation is which jobs are mobile-native (wallet, push, repeat orders) and which belong on the web.",
      },
      {
        heading: "Rescue is common",
        body: "Inherited commerce apps often fail in production on receipts, entitlements, or a checkout that only works on the original developer’s phone. I audit that before I add a new category module. See app rescue if that is the actual brief.",
      },
    ],
    projectIds: ["royal-spirit-ecommerce", "ivpatch-wellness-ecommerce"],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development" },
      { href: SERVICE_PATHS.flutter, label: "Flutter development" },
      { href: SERVICE_PATHS.custom, label: "Custom software" },
    ],
    updatedAt: "2026-08-25",
  },
  {
    slug: "healthcare-apps",
    title: "Healthcare & Wellness Apps",
    seoTitle: "Healthcare App Development Dubai | Osama Tahir",
    metaDescription:
      "Healthcare and wellness app development in Dubai by Osama Tahir: directories, clinic operations, and store-ready Flutter products with careful data handling.",
    h1: "Healthcare & Wellness Apps in Dubai",
    intro:
      "Osama Tahir has shipped health and wellness products for UAE and regional teams: directory and super-app mobile work, and clinic websites that still have to convert. Healthcare software is operational software. Privacy, roles, and store questionnaires are part of the build, not a legal appendix.",
    sections: [
      {
        heading: "The jobs these products actually have",
        body: "Patients look up drugs, book, or follow a care pathway. Clinics need an admin path that is not a shared spreadsheet. Wellness brands need a storefront that does not collapse on mobile. I do not pretend to replace a hospital information system on a two-month contract. I do build the mobile and web products around those jobs when the scope is honest.",
        bullets: [
          "Directories and lookup flows that stay fast on mid-range Android",
          "Role-aware accounts (patient vs staff) when the product needs them",
          "Store review, privacy nutrition labels and test accounts",
          "Clinic or brand websites when that is the real acquisition surface",
        ],
      },
      {
        heading: "Work on this site",
        body: "24Digi is a Flutter health super-app on the App Store with a WordPress marketing site. Dvago is a Flutter medical directory. Ultra Smile Clinic is a Dubai dental clinic website — different stack, same regional constraint: the business has to be findable and usable on a phone. None of these are generic “health tech” slides. They are specific products with stores or live URLs.",
      },
      {
        heading: "What I will not over-claim",
        body: "I am a software engineer, not a clinician or a DHA consultancy. If your product requires medical-device regulation, clinical sign-off, or a hospital integration programme, that needs the right specialists beside engineering. I will name that in discovery rather than bury it in a cheerful quote.",
      },
    ],
    projectIds: ["24digi-health-super-app", "dvago-medical-directory", "ultra-smile-clinic-dubai"],
    relatedServiceHrefs: [
      { href: SERVICE_PATHS.mobile, label: "Mobile app development" },
      { href: SERVICE_PATHS.flutter, label: "Flutter development" },
      { href: SERVICE_PATHS.rescue, label: "App rescue" },
    ],
    updatedAt: "2026-08-25",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((item) => item.slug === slug);
}
