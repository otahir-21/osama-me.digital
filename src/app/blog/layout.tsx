import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing & Free Software - Dubai, Abu Dhabi, UAE",
  description:
    "Digital marketing specialist UAE blog. Free software tips, SEO, web development, Google Ads for Dubai, Abu Dhabi, Sharjah & all Emirates.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
