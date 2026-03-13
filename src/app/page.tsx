import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AnimatedStats } from "@/components/home/AnimatedStats";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseMe } from "@/components/home/WhyChooseMe";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://osama-me.digital",
  },
};

export default function HomePage() {
  const faqSchema = getFAQSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <AnimatedStats />
      <ServicesOverview />
      <WhyChooseMe />
      <FeaturedPortfolio />
      <ProcessSection />
      <TestimonialsSection />
      <BlogTeaser />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
