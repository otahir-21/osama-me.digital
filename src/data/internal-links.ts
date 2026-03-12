/**
 * Internal linking mappings for SEO.
 * Maps portfolio categories and blog posts to related service slugs.
 */

export const portfolioToServices: Record<string, string[]> = {
  "E-Commerce": ["shopify-development-dubai", "web-development-dubai"],
  SEO: ["seo-services-dubai"],
  "Landing Pages": ["landing-page-design-uae", "web-development-dubai"],
  "Google Ads": ["google-ads-management-dubai", "landing-page-design-uae"],
};

export const blogToServices: Record<string, string[]> = {
  "digital-marketing-specialist-uae": [
    "seo-services-dubai",
    "google-ads-management-dubai",
    "social-media-marketing-uae",
  ],
  "free-software-tools-for-uae-businesses": ["web-development-dubai", "seo-services-dubai"],
  "seo-for-dubai-businesses": ["seo-services-dubai"],
  "website-conversion-optimization": ["web-development-dubai", "landing-page-design-uae"],
  "google-ads-vs-seo": ["google-ads-management-dubai", "seo-services-dubai"],
};

export const serviceNames: Record<string, string> = {
  "web-development-dubai": "Web Development Dubai",
  "mobile-app-development-dubai": "Mobile App Development Dubai",
  "seo-services-dubai": "SEO Services Dubai",
  "google-ads-management-dubai": "Google Ads Management Dubai",
  "social-media-marketing-uae": "Social Media Marketing UAE",
  "landing-page-design-uae": "Landing Page Design UAE",
  "shopify-development-dubai": "Shopify Development Dubai",
  "wordpress-development-dubai": "WordPress Development Dubai",
  "website-maintenance-uae": "Website Maintenance & Support UAE",
};

export const serviceUrls: Record<string, string> = Object.fromEntries(
  Object.keys(serviceNames).map((slug) => [slug, `/services/${slug}`])
);
