import { siteConfig } from "@/data/site-config";
import { faqData } from "@/data/faq";

export function getPersonSchema() {
  const sameAs = [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.twitter,
  ].filter(Boolean) as string[];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.png`,
    sameAs,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "UAE",
      addressCountry: "AE",
    },
    knowsAbout: [
      "Flutter",
      "React Native",
      "Laravel",
      "Node.js",
      "REST APIs",
      "Stripe",
      "AWS",
      "Mobile App Development",
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
