import { siteConfig } from "@/data/site-config";
import { faqData } from "@/data/faq";

export function getPersonSchema() {
  const sameAs = [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    "https://www.instagram.com/otahir212/",
    "https://x.com/otahir212",
    "https://www.facebook.com/share/1BF46PTFmM/",
  ].filter(Boolean) as string[];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.png`,
    sameAs,
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: "Osama Tahir Digital",
    },
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "UAE",
      addressCountry: "AE",
    },
  };
}

export function getProfessionalServiceSchema() {
  const serviceAreas = siteConfig.serviceAreas ?? ["Dubai", "Abu Dhabi", "Sharjah"];
  const sameAs = [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    "https://www.instagram.com/otahir212/",
    "https://x.com/otahir212",
    "https://www.facebook.com/share/1BF46PTFmM/",
  ].filter(Boolean) as string[];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Web Developer & Digital Marketing Specialist UAE`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    sameAs,
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    })),
    priceRange: "$$",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "SEO Services",
      "Google Ads Management",
      "Social Media Marketing",
      "Shopify Development",
      "WordPress Development",
      "Landing Page Design",
    ],
  };
}

export function getLocalBusinessSchema() {
  const serviceAreas = siteConfig.serviceAreas ?? ["Dubai", "Abu Dhabi"];
  const sameAs = [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    "https://www.instagram.com/otahir212/",
    "https://x.com/otahir212",
    "https://www.facebook.com/share/1BF46PTFmM/",
  ].filter(Boolean) as string[];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Osama Tahir Digital Marketing",
    image: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "UAE",
      addressCountry: "AE",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "AED 3000+",
    hasMap: "https://www.google.com/maps/place/Dubai",
    sameAs,
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "SEO Services",
      "Google Ads Management",
      "Social Media Marketing",
      "Shopify Development",
      "WordPress Development",
      "Landing Page Design",
      "Website Maintenance",
      "AWS Management & Cloud Hosting",
    ],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema(service: {
  h1: string;
  hubTitle?: string;
  description: string;
  priceFrom: string;
  slug: string;
  deliverables?: string[];
}) {
  const { h1, description, priceFrom, slug, hubTitle, deliverables } = service;
  const serviceType = hubTitle ?? h1;
  const hasOfferCatalog =
    deliverables && deliverables.length > 0
      ? {
          "@type": "OfferCatalog" as const,
          name: serviceType,
          itemListElement: deliverables.slice(0, 8).map((name) => ({
            "@type": "Offer" as const,
            itemOffered: {
              "@type": "Service" as const,
              name,
            },
          })),
        }
      : undefined;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: h1,
    description,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Dubai, UAE",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      description: `Starting from ${priceFrom}`,
    },
    url: `${siteConfig.url}/services/${slug}`,
  };
  if (hasOfferCatalog) schema.hasOfferCatalog = hasOfferCatalog;

  return schema;
}

export function getServiceFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url: `${siteConfig.url}${url}`,
  };
}
