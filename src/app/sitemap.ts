import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { portfolioData } from "@/data/portfolio";
import { caseStudyCopy } from "@/data/case-studies";
import { servicesDetail } from "@/data/services-detail";
import { insights } from "@/data/insights";
import { industries } from "@/data/industries";

function entry(
  path: string,
  lastModified: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap[number] {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  return { url, lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = siteConfig.contentUpdatedAt;

  const staticPages: MetadataRoute.Sitemap = [
    entry("/", siteUpdated, "weekly", 1),
    entry("/services", siteUpdated, "monthly", 0.9),
    entry("/portfolio", siteUpdated, "weekly", 0.9),
    entry("/about", siteUpdated, "monthly", 0.8),
    entry("/contact", siteUpdated, "monthly", 0.8),
    entry("/skills", siteUpdated, "monthly", 0.5),
    entry("/resume", siteUpdated, "monthly", 0.5),
    entry("/insights", siteUpdated, "weekly", 0.8),
    entry("/industries", siteUpdated, "monthly", 0.7),
    entry("/process", siteUpdated, "monthly", 0.6),
    entry("/faq", siteUpdated, "monthly", 0.6),
  ];

  const servicePages: MetadataRoute.Sitemap = servicesDetail.map((service) =>
    entry(`/services/${service.slug}`, service.updatedAt, "monthly", 0.85)
  );

  const portfolioPages: MetadataRoute.Sitemap = portfolioData.map((project) =>
    entry(
      `/portfolio/${project.id}`,
      caseStudyCopy[project.id]?.updatedAt ?? siteUpdated,
      "monthly",
      0.7
    )
  );

  const insightPages: MetadataRoute.Sitemap = insights.map((post) =>
    entry(`/insights/${post.slug}`, post.updatedAt, "monthly", 0.75)
  );

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) =>
    entry(`/industries/${industry.slug}`, industry.updatedAt, "monthly", 0.7)
  );

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioPages,
    ...insightPages,
    ...industryPages,
  ];
}
