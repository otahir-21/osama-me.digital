import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";

const slug = "digital-marketing-sharjah";
const cityName = "Sharjah";
const pageTitle = "Digital Marketing Services in Sharjah, UAE";
const pageDescription =
  "Results-driven digital marketing for Sharjah businesses. SEO, Google Ads, social media marketing, and content strategy tailored for manufacturing, education, retail, and free zone companies.";

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
    question: "What digital marketing channels work best for Sharjah businesses?",
    answer:
      "It depends on your industry. B2B manufacturers and exporters in Sharjah free zones see the best ROI from Google Ads and LinkedIn. Retail businesses along King Faisal Road and Al Nahda benefit most from Instagram, TikTok, and local SEO. Education providers do well with a mix of Google Ads for enrollment campaigns and organic content marketing for long-term visibility.",
  },
  {
    question: "How much should a Sharjah SME budget for digital marketing?",
    answer:
      "I recommend starting with AED 3,000 to AED 5,000 per month for a combined SEO and paid ads campaign. This covers my management fee plus ad spend. As you see results and calculate your return on investment, we scale the budget to capture more market share.",
  },
  {
    question: "Do you manage social media accounts for Sharjah businesses?",
    answer:
      "Yes. I offer social media management covering content creation, scheduling, community engagement, and paid social campaigns on Instagram, Facebook, LinkedIn, and TikTok. Each strategy is tailored to Sharjah's diverse audience demographics.",
  },
  {
    question: "Can you run campaigns in both Arabic and English?",
    answer:
      "Absolutely. Sharjah has a multilingual population and many businesses need to reach both Arabic and English-speaking audiences. I create separate ad sets and content streams for each language, with culturally appropriate messaging and targeting for each segment.",
  },
  {
    question: "How do you measure and report on campaign performance?",
    answer:
      "You receive a detailed monthly report with metrics that matter: leads generated, cost per acquisition, return on ad spend, organic traffic growth, and keyword rankings. I also provide a monthly strategy call to discuss results and plan next steps.",
  },
];

export default function DigitalMarketingSharjahPage() {
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
              Digital Marketing Services in Sharjah, UAE
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Sharjah is one of the most commercially active emirates in the UAE, with over 55,000 licensed businesses spanning manufacturing, trading, education, and retail. Yet many Sharjah companies still rely on word-of-mouth and outdated marketing methods. Digital marketing bridges that gap, putting your business in front of the customers actively searching for what you sell.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              I deliver integrated digital marketing campaigns tailored to Sharjah&apos;s unique business environment. Whether you are a free zone exporter looking for international buyers, a university seeking student enrollments, or a retail chain competing along King Faisal Road, I combine SEO, paid advertising, and social media to generate measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={siteConfig.calendly}
                className={buttonVariants({ size: "lg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Marketing Audit <ArrowRight className="ml-1 size-4" />
              </Link>
              <Link
                href="/services/seo-services-dubai"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                SEO Services
              </Link>
              <Link
                href="/services/google-ads-management-dubai"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Google Ads Management
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900">
              Digital Marketing Services for Sharjah
            </h2>
            <p className="mt-4 max-w-3xl text-zinc-600">
              A full-spectrum digital marketing offering designed to help Sharjah businesses acquire customers, build brand awareness, and grow revenue online.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Search Engine Optimisation",
                  desc: "Rank higher on Google for Sharjah-specific searches. I handle technical audits, keyword research, on-page optimisation, and content creation to drive consistent organic traffic.",
                },
                {
                  title: "Google Ads Management",
                  desc: "Targeted PPC campaigns on Google Search, Display, and YouTube. I manage keyword bidding, ad copy, landing pages, and conversion tracking to maximise your return on ad spend.",
                },
                {
                  title: "Social Media Marketing",
                  desc: "Content creation, community management, and paid campaigns across Instagram, Facebook, LinkedIn, and TikTok, tailored to Sharjah's diverse demographics.",
                },
                {
                  title: "Content Marketing",
                  desc: "Blog posts, case studies, email newsletters, and video content that positions your Sharjah business as an authority and drives organic leads over time.",
                },
                {
                  title: "Local SEO & Maps",
                  desc: "Google Business Profile optimisation, local citations, review management, and geo-targeted content so customers in Sharjah find you when they search nearby.",
                },
                {
                  title: "Analytics & Reporting",
                  desc: "GA4 setup, conversion tracking, custom dashboards, and monthly performance reports that show exactly where your marketing budget is generating returns.",
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
          <h2 className="text-3xl font-bold text-zinc-900">Industries I Serve in Sharjah</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            Each sector in Sharjah has unique customer acquisition challenges. I build marketing strategies grounded in the realities of your industry.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Manufacturing & Export",
                desc: "B2B lead generation through Google Ads targeting procurement managers, LinkedIn outreach to international buyers, and SEO content that ranks for industrial product keywords globally.",
              },
              {
                title: "Education & Training",
                desc: "Student enrollment campaigns using Google Ads for high-intent searches, social media engagement with prospective students and parents, and SEO for programme-specific keywords.",
              },
              {
                title: "Retail & E-Commerce",
                desc: "Instagram and TikTok campaigns that drive foot traffic and online sales, Google Shopping ads for product visibility, and local SEO to capture Sharjah shoppers searching on mobile.",
              },
              {
                title: "Professional Services",
                desc: "Authority-building SEO content, Google Ads for high-value service keywords, and LinkedIn marketing for consultancies, legal firms, and accounting practices based in Sharjah.",
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
              Grow Your Sharjah Business Online
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Book a free marketing audit and discover exactly how SEO, Google Ads, and social media can bring more customers to your Sharjah business. No obligation, just a clear plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={siteConfig.calendly}
                className={buttonVariants({ size: "lg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Marketing Audit <ArrowRight className="ml-1 size-4" />
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
