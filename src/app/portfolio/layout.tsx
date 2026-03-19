import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Web & App Development Dubai",
  description:
    "View case studies from Osama Tahir — mobile apps, web platforms, and digital marketing projects for UAE businesses. Real results with measurable impact.",
  openGraph: {
    title: "Portfolio & Case Studies | Web & App Development Dubai",
    description: "View case studies from Osama Tahir — mobile apps, web platforms, and digital marketing projects for UAE businesses.",
    url: "https://osama-me.digital/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Osama Tahir Portfolio - Web & App Development Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Web & App Development Dubai",
    description: "View case studies from Osama Tahir — mobile apps, web platforms, and digital marketing projects for UAE businesses.",
  },
  alternates: {
    canonical: "https://osama-me.digital/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
