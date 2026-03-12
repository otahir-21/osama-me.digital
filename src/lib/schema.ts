import { siteConfig } from "@/data/site-config";
import { faqData } from "@/data/faq";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function getProfessionalServiceSchema() {
  const serviceAreas = siteConfig.serviceAreas ?? ["Dubai", "Abu Dhabi", "Sharjah"];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Digital Marketing Specialist UAE`,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    })),
    priceRange: "$$",
    serviceType: ["Digital Marketing", "Web Development", "SEO", "Free Software Consultation"],
  };
}

export function getLocalBusinessSchema() {
  const serviceAreas = siteConfig.serviceAreas ?? ["Dubai", "Abu Dhabi"];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    })),
    priceRange: "$$",
    serviceType: ["Digital Marketing", "Web Development", "SEO"],
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
