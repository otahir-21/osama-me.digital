import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Osama Tahir | Senior Full-Stack Developer Dubai",
  description:
    "Meet Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. 6 years experience, 20+ apps shipped, 500K+ downloads, and $1.2M+ in secure payment processing.",
  openGraph: {
    title: "About Osama Tahir | Senior Full-Stack Developer Dubai",
    description:
      "Meet Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. 6 years experience, 20+ apps shipped, 500K+ downloads, and $1.2M+ in secure payment processing.",
    url: "https://osama-me.digital/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Osama Tahir - Senior Full-Stack Developer Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Osama Tahir | Senior Full-Stack Developer Dubai",
    description:
      "Meet Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. 6 years experience, 20+ apps shipped, 500K+ downloads.",
  },
  alternates: {
    canonical: "https://osama-me.digital/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
