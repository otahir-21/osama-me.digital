import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { blogPosts } from "@/data/blog";
import { servicesDetail } from "@/data/services-detail";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPageDates: Record<string, string> = {
    "": "2026-03-13",
    "/about": "2026-03-13",
    "/services": "2026-03-13",
    "/portfolio": "2026-03-13",
    "/blog": "2026-03-13",
    "/contact": "2026-03-13",
    "/testimonials": "2026-03-13",
    "/privacy-policy": "2026-03-12",
    "/terms-of-service": "2026-03-12",
  };

  const staticPages: MetadataRoute.Sitemap = Object.keys(staticPageDates).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(staticPageDates[path]),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = servicesDetail.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date("2026-03-12"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
