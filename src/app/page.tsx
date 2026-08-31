import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { GeoAnswer } from "@/components/home/GeoAnswer";
import { HelpYouBuild } from "@/components/home/HelpYouBuild";
import { AgencyPartner } from "@/components/home/AgencyPartner";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ContactBanner } from "@/components/home/ContactBanner";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Osama Tahir | Mobile App Developer in Dubai",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <GeoAnswer />
      <HelpYouBuild />
      <AgencyPartner />
      <FeaturedPortfolio />
      <Testimonials />
      <HomeInsights />
      <HomeFaq />
      <ContactBanner />
    </>
  );
}
