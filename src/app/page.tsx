import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { SkillsOverview } from "@/components/home/SkillsOverview";
import { ContactBanner } from "@/components/home/ContactBanner";
import { getPersonSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const description = siteConfig.description;
  return {
    description,
    openGraph: { description },
    twitter: { description },
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  const personSchema = getPersonSchema();
  return (
    <>
      <link rel="canonical" href={siteConfig.url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <FeaturedPortfolio />
      <SkillsOverview />
      <ContactBanner />
    </>
  );
}
