import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { portfolioData } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/skills`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolioData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...portfolioPages];
}
