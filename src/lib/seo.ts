import type { Metadata } from "next";
import { SITE_URL, siteConfig } from "@/data/site-config";

export { SITE_URL };

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function personId(): string {
  return `${SITE_URL}/#person`;
}

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.role} in ${siteConfig.location}`,
};

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "profile";
  image?: { url: string; width?: number; height?: number; alt?: string };
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  image,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? [
        {
          url: image.url,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt ?? title,
        },
      ]
    : [defaultOgImage];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      locale: "en_AE",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.social.twitterHandle,
      creator: siteConfig.social.twitterHandle,
      title,
      description,
      images: ogImage.map((img) => img.url),
    },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
