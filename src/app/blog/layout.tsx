import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development & Digital Marketing Insights Dubai",
  description:
    "Expert articles on web development, SEO, Google Ads, and digital marketing for UAE businesses. Practical guides by Osama Tahir, Dubai-based specialist.",
  openGraph: {
    title: "Blog | Web Development & Digital Marketing Insights Dubai",
    description: "Expert articles on web development, SEO, Google Ads, and digital marketing for UAE businesses.",
    url: "https://osama-me.digital/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Osama Tahir Blog - Digital Marketing & Web Development Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Web Development & Digital Marketing Insights Dubai",
    description: "Expert articles on web development, SEO, Google Ads, and digital marketing for UAE businesses.",
  },
  alternates: {
    canonical: "https://osama-me.digital/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
