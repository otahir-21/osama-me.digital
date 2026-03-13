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
import {
  getFAQSchema,
  getPersonSchema,
  getProfessionalServiceSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "Freelance web developer and digital marketing specialist in Dubai. I build fast, SEO-ready websites and grow them with SEO and Google Ads — one person, full accountability. Serving Dubai, Abu Dhabi, Sharjah & all UAE Emirates.";
  return {
    description,
    openGraph: {
      description,
    },
    twitter: {
      description,
    },
    alternates: {
      canonical: "/",
    },
  };
}

export default function HomePage() {
  const faqSchema = getFAQSchema();
  const personSchema = getPersonSchema();
  const professionalServiceSchema = getProfessionalServiceSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  return (
    <>
      <link rel="canonical" href="https://osama-me.digital" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
