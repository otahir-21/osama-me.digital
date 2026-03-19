import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Osama Tahir | Free Consultation Dubai Web Developer",
  description:
    "Book a free 30-minute consultation with Osama Tahir, web developer and digital marketing specialist in Dubai. WhatsApp, email, or schedule a call.",
  openGraph: {
    title: "Contact Osama Tahir | Free Consultation Dubai Web Developer",
    description: "Book a free 30-minute consultation with Osama Tahir, web developer and digital marketing specialist in Dubai.",
    url: "https://osama-me.digital/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Osama Tahir - Digital Marketing Specialist Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Osama Tahir | Free Consultation Dubai Web Developer",
    description: "Book a free 30-minute consultation with Osama Tahir, web developer and digital marketing specialist in Dubai.",
  },
  alternates: {
    canonical: "https://osama-me.digital/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
