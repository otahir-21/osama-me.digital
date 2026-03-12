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

export default function HomePage() {
  return (
    <>
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
