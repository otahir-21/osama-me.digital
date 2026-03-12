/**
 * Internal linking mappings for SEO.
 * Maps portfolio categories and blog posts to related services.
 */

export const portfolioToServices: Record<string, string[]> = {
  "E-Commerce": ["wordpress-shopify", "website-development"],
  SEO: ["seo"],
  "Landing Pages": ["landing-pages", "website-development"],
  "Google Ads": ["google-ads", "landing-pages"],
};

export const blogToServices: Record<string, string[]> = {
  "digital-marketing-specialist-uae": ["free-software-consultation", "seo", "google-ads"],
  "free-software-tools-for-uae-businesses": ["free-software-consultation"],
  "seo-for-dubai-businesses": ["seo"],
  "website-conversion-optimization": ["website-development", "landing-pages"],
  "google-ads-vs-seo": ["google-ads", "seo"],
};

export const serviceNames: Record<string, string> = {
  "free-software-consultation": "Free Software Consultation",
  "website-development": "Website Development",
  seo: "SEO Services",
  "google-ads": "Google Ads",
  "social-media": "Social Media Marketing",
  "landing-pages": "Landing Pages",
  "wordpress-shopify": "WordPress & Shopify",
  "monthly-growth": "Monthly Growth Support",
};
