import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Osama Tahir | Web Developer & Digital Marketing Specialist Dubai",
  description:
    "Meet Osama Tahir — senior full-stack developer and digital marketing specialist in Dubai, UAE. 5+ years experience, 20+ apps delivered, serving all Emirates.",
  openGraph: {
    title: "About Osama Tahir | Web Developer & Digital Marketing Specialist Dubai",
    description:
      "Meet Osama Tahir — senior full-stack developer and digital marketing specialist in Dubai, UAE. 5+ years experience, 20+ apps delivered, serving all Emirates.",
    url: "https://osama-me.digital/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Osama Tahir - Web Developer & Digital Marketing Specialist Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Osama Tahir | Web Developer & Digital Marketing Specialist Dubai",
    description: "Meet Osama Tahir — senior full-stack developer and digital marketing specialist in Dubai, UAE. 5+ years experience, 20+ apps delivered.",
  },
  alternates: {
    canonical: "https://osama-me.digital/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
