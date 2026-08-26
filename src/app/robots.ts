import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

/**
 * PPC landing pages (/lp/*) and thank-you routes must remain crawlable so Google
 * AdsBot can inspect Final URLs. Those pages use page-level noindex, follow
 * instead of robots.txt Disallow.
 */
const disallow = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      { userAgent: "Googlebot", allow: "/", disallow },
      // Ads landing-page inspection — must not be blocked from /lp/*
      { userAgent: "AdsBot-Google", allow: "/", disallow },
      { userAgent: "AdsBot-Google-Mobile", allow: "/", disallow },
      { userAgent: "Bingbot", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
