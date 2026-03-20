import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";

const slug = "seo-services-abu-dhabi";
const cityName = "Abu Dhabi";
const pageTitle = "SEO Services in Abu Dhabi, UAE";
const pageDescription =
  "Professional SEO services for Abu Dhabi businesses. Dominate local search results with technical SEO, content strategy, and link building tailored to the Abu Dhabi market.";

export const metadata: Metadata = {
  title: `${pageTitle} | ${siteConfig.name}`,
  description: pageDescription,
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: `${siteConfig.url}/services/${slug}`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
  },
  alternates: {
    canonical: `${siteConfig.url}/services/${slug}`,
  },
};

const faqs = [
  {
    question: "How is SEO in Abu Dhabi different from SEO in Dubai?",
    answer:
      "Abu Dhabi has a distinct search landscape. Search volumes tend to be lower but more intent-driven, competition is less saturated in many verticals, and there is a higher concentration of government and B2B queries. I tailor keyword research and content strategy specifically to Abu Dhabi search behaviour rather than applying a generic UAE approach.",
  },
  {
    question: "How long before I see SEO results for my Abu Dhabi business?",
    answer:
      "Most Abu Dhabi businesses start seeing measurable improvements in rankings and organic traffic within three to four months. Competitive keywords in sectors like finance or real estate can take six months or more, but I focus on quick wins alongside long-term gains so you see early momentum.",
  },
  {
    question: "Do you optimise for Arabic-language searches in Abu Dhabi?",
    answer:
      "Yes. I conduct bilingual keyword research covering both English and Arabic queries. This includes creating Arabic meta tags, optimising Arabic content for Google, and ensuring the technical setup supports hreflang tags so the right language version appears for each user.",
  },
  {
    question: "What SEO tools and reporting do you provide?",
    answer:
      "I use Google Search Console, Google Analytics 4, Ahrefs, and Screaming Frog as core tools. You receive a monthly report covering keyword rankings, organic traffic, technical health scores, and actionable recommendations, with a video walk-through so everything is clear.",
  },
  {
    question: "Can you help with Google Business Profile optimisation in Abu Dhabi?",
    answer:
      "Absolutely. Local SEO for Abu Dhabi includes optimising your Google Business Profile, building local citations on UAE directories, managing reviews, and ensuring NAP consistency across the web. This is critical for businesses that rely on foot traffic or local service queries.",
  },
];

export default function SeoServicesAbuDhabiPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Osama Tahir Digital Marketing",
    image: `${siteConfig.url}/og-image.png`,
    description: pageDescription,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "UAE",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: pageTitle, url: `/services/${slug}` },
  ]);

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, faqSchema, breadcrumbSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <div className="min-h-screen bg-zinc-50 pt-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-900">Home</Link>
            <ChevronRight className="size-3" />
            <Link href="/services" className="hover:text-zinc-900">Services</Link>
            <ChevronRight className="size-3" />
            <span className="text-zinc-900">{pageTitle}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              SEO Services in Abu Dhabi, UAE
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Abu Dhabi&apos;s business landscape is maturing rapidly online. Government entities are moving services digital-first, ADGM-based financial firms need global visibility, and hospitality brands on Yas and Saadiyat islands compete for international travellers through search. If your Abu Dhabi business is not ranking on the first page, you are losing revenue to competitors who are.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              I provide data-driven SEO services designed specifically for the Abu Dhabi market. That means bilingual keyword research, technical audits aligned with the latest Core Web Vitals standards, content strategies that address what Abu Dhabi residents and businesses actually search for, and local SEO that puts you on the map, literally.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={siteConfig.calendly}
                className={buttonVariants({ size: "lg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free SEO Audit <ArrowRight className="ml-1 size-4" />
              </Link>
              <Link
                href="/services/seo-services-dubai"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                View Full SEO Services
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900">
              What My Abu Dhabi SEO Service Includes
            </h2>
            <p className="mt-4 max-w-3xl text-zinc-600">
              A comprehensive, ongoing SEO engagement that covers every lever needed to grow your organic visibility in Abu Dhabi and across the UAE.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Technical SEO Audit",
                  desc: "A full crawl of your website to identify and fix indexing issues, broken links, slow pages, duplicate content, and schema markup gaps that hold back your rankings.",
                },
                {
                  title: "Abu Dhabi Keyword Research",
                  desc: "I research both English and Arabic queries specific to the Abu Dhabi market, analysing search volume, intent, and competition to build a keyword map that drives qualified traffic.",
                },
                {
                  title: "On-Page Optimisation",
                  desc: "Title tags, meta descriptions, header hierarchy, internal linking, and content optimisation for every key page, ensuring search engines and users both find what they need.",
                },
                {
                  title: "Local SEO & Google Business Profile",
                  desc: "Optimise your GBP listing, build local citations on UAE directories, manage reviews, and ensure NAP consistency so you appear in map results for Abu Dhabi searches.",
                },
                {
                  title: "Content Strategy & Creation",
                  desc: "Monthly blog posts, landing pages, and evergreen guides targeting high-value Abu Dhabi keywords, all written with E-E-A-T signals that Google rewards.",
                },
                {
                  title: "Link Building & Digital PR",
                  desc: "Earn backlinks from reputable UAE publications, industry blogs, and local directories to build domain authority and improve your competitive position in search results.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">SEO for Abu Dhabi Industries</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            The capital&apos;s economy is anchored by sectors that each require a specialised SEO approach. Here is how I help businesses in Abu Dhabi&apos;s core verticals.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Government & Semi-Government",
                desc: "Improve discoverability of public services and initiatives. I optimise multilingual content, implement schema for government organisations, and ensure compliance with TDRA accessibility standards.",
              },
              {
                title: "Financial Services & Fintech",
                desc: "Rank for competitive terms like 'wealth management Abu Dhabi' or 'fintech license ADGM'. I create authoritative content, build trust signals, and target long-tail keywords that attract qualified prospects.",
              },
              {
                title: "Oil, Gas & Industrial",
                desc: "B2B SEO that targets procurement managers and decision-makers searching for industrial services, equipment suppliers, and engineering consultancies based in Abu Dhabi's Mussafah and ICAD zones.",
              },
              {
                title: "Tourism & Hospitality",
                desc: "Attract international and domestic tourists searching for Abu Dhabi experiences, hotels, and dining. I optimise for seasonal trends, Google Hotels integrations, and high-intent local queries.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 divide-y divide-zinc-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-zinc-900">
                    {faq.question}
                    <span className="ml-4 text-amber-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-zinc-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-zinc-900 px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Start Ranking in Abu Dhabi Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Request a free SEO audit of your website. I will identify the biggest opportunities and give you a clear roadmap to page-one rankings in the Abu Dhabi market.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={siteConfig.calendly}
                className={buttonVariants({ size: "lg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free SEO Audit <ArrowRight className="ml-1 size-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
