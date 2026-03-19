import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Development, SEO & Digital Marketing Dubai UAE",
  description:
    "Web development, mobile app development, SEO, Google Ads, Shopify, WordPress, and social media marketing for businesses in Dubai, Abu Dhabi, Sharjah & all UAE Emirates.",
  openGraph: {
    title: "Services | Web Development, SEO & Digital Marketing Dubai UAE",
    description: "Web development, mobile app development, SEO, Google Ads, Shopify, WordPress, and social media marketing for businesses across the UAE.",
    url: "https://osama-me.digital/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digital Marketing & Web Development Services Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Development, SEO & Digital Marketing Dubai UAE",
    description: "Web development, mobile app development, SEO, Google Ads, and social media marketing for businesses across the UAE.",
  },
  alternates: {
    canonical: "https://osama-me.digital/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
