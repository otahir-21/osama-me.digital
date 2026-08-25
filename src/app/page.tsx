import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HelpYouBuild } from "@/components/home/HelpYouBuild";
import { AgencyPartner } from "@/components/home/AgencyPartner";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { ContactBanner } from "@/components/home/ContactBanner";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Osama Tahir | Mobile App & Full-Stack Developer in Dubai",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HelpYouBuild />
      <AgencyPartner />
      <FeaturedPortfolio />
      <ContactBanner />
    </>
  );
}
