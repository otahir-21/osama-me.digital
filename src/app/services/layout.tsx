import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Development, SEO & Digital Marketing Dubai UAE",
  description:
    "Web development, mobile app development, SEO, Google Ads, Shopify, WordPress, and social media marketing for businesses in Dubai, Abu Dhabi, Sharjah & all UAE Emirates.",
  alternates: {
    canonical: "https://osama-me.digital/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
