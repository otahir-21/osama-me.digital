import { siteConfig } from "@/data/site-config";
import { servicesDetail } from "@/data/services-detail";
import { absoluteUrl, personId, SITE_URL } from "@/lib/seo";

const profileImage = absoluteUrl(siteConfig.profileImage);
const businessId = () => `${SITE_URL}/#business`;

export function getPersonSchema() {
  const sameAs = [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.twitter,
    siteConfig.social.upwork,
  ].filter(Boolean);

  return {
    "@type": "Person",
    "@id": personId(),
    name: siteConfig.name,
    url: SITE_URL,
    image: profileImage,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.locationFull,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    sameAs,
    knowsAbout: [
      "Mobile app development",
      "Flutter",
      "React Native",
      "Laravel",
      "Node.js",
      "REST APIs",
      "Payment integrations",
      "Firebase",
      "AWS",
      "Custom software development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Mobile Application Developer",
      occupationLocation: { "@type": "City", name: "Dubai" },
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Foundation University Islamabad",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Engineering in Software Engineering",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Scrum Master Certified (SMC)",
      },
    ],
    worksFor: { "@id": businessId() },
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-AE",
    publisher: { "@id": personId() },
    creator: { "@id": personId() },
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": businessId(),
    name: `${siteConfig.name} — Mobile App & Software Development`,
    alternateName: siteConfig.name,
    url: SITE_URL,
    image: profileImage,
    logo: profileImage,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    description: siteConfig.description,
    founder: { "@id": personId() },
    employee: { "@id": personId() },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
    ],
    knowsLanguage: ["en", "en-AE"],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
      siteConfig.social.upwork,
    ].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: servicesDetail.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
          name: service.title,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function getGraphSchema(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function getProfilePageSchema() {
  return {
    "@type": "ProfilePage",
    "@id": `${absoluteUrl("/about")}#profile`,
    url: absoluteUrl("/about"),
    name: `About ${siteConfig.name}`,
    description: siteConfig.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": personId() },
  };
}

export function getContactPageSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#contact`,
    url: absoluteUrl("/contact"),
    name: "Start a Software Project",
    description:
      "Project inquiry page for Osama Tahir, a Dubai-based senior mobile and full-stack developer.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": personId() },
  };
}

export function getServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    "@id": `${input.url}#service`,
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.serviceType,
    provider: { "@id": personId() },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Place", name: "Gulf Cooperation Council" },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : absoluteUrl(item.url),
    })),
  };
}

export function getCaseStudySchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
}) {
  return {
    "@type": "CreativeWork",
    "@id": `${input.url}#case-study`,
    name: input.name,
    description: input.description,
    url: input.url,
    author: { "@id": personId() },
    creator: { "@id": personId() },
    inLanguage: "en-AE",
    ...(input.image ? { image: input.image } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
  };
}

export function getWebPageSchema(input: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": personId() },
    inLanguage: "en-AE",
    ...(input.dateModified
      ? { dateModified: input.dateModified, datePublished: input.dateModified }
      : {}),
  };
}

export function getArticleSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${input.url}#webpage` },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: "en-AE",
    author: { "@id": personId() },
    creator: { "@id": personId() },
    publisher: { "@id": personId() },
    image: absoluteUrl(siteConfig.ogImage),
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
  };
}
