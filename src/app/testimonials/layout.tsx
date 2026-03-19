import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Web Developer & Marketing Specialist Dubai",
  description:
    "Read client reviews and testimonials for Osama Tahir — web developer and digital marketing specialist in Dubai, UAE. Real feedback from real businesses.",
  openGraph: {
    title: "Client Testimonials | Web Developer & Marketing Specialist Dubai",
    description: "Read client reviews for Osama Tahir — web developer and digital marketing specialist in Dubai, UAE.",
    url: "https://osama-me.digital/testimonials",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Client Testimonials - Osama Tahir Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Web Developer & Marketing Specialist Dubai",
    description: "Read client reviews for Osama Tahir — web developer and digital marketing specialist in Dubai, UAE.",
  },
  alternates: {
    canonical: "https://osama-me.digital/testimonials",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
