import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development & Digital Marketing Insights - Dubai",
  description:
    "Articles on SEO, web development, Google Ads, and digital marketing for Dubai and UAE businesses.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
