import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Osama Tahir | Senior Full-Stack Developer Dubai",
  description:
    "Get in touch with Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. Open to full-time roles, contract work, and project discussions via WhatsApp, email, or call.",
  openGraph: {
    title: "Contact Osama Tahir | Senior Full-Stack Developer Dubai",
    description:
      "Get in touch with Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. Open to full-time roles, contract work, and project discussions.",
    url: "https://osama-me.digital/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Osama Tahir - Senior Full-Stack Developer Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Osama Tahir | Senior Full-Stack Developer Dubai",
    description:
      "Get in touch with Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. Open to full-time roles, contract work, and project discussions.",
  },
  alternates: {
    canonical: "https://osama-me.digital/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
