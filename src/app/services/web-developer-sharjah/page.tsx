import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";

const slug = "web-developer-sharjah";
const cityName = "Sharjah";
const pageTitle = "Web Developer in Sharjah, UAE";
const pageDescription =
  "Professional web developer serving Sharjah businesses. Custom websites for manufacturing, education, cultural organisations, and SMEs. Affordable, fast, and mobile-first web solutions.";

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
    question: "Why should a Sharjah business invest in a custom website?",
    answer:
      "Sharjah's commercial ecosystem is highly competitive, especially in manufacturing, trading, and education. A custom website gives you a professional online presence that stands out from generic templates, loads faster, ranks better on Google, and converts more visitors into enquiries than a cookie-cutter solution.",
  },
  {
    question: "Do you build e-commerce websites for Sharjah retailers?",
    answer:
      "Yes. I develop Shopify and WooCommerce stores for Sharjah retailers with UAE payment gateway integration (Tabby, Tamara, network card payments), Arabic language support, and delivery zone configuration for Sharjah, Dubai, and the Northern Emirates.",
  },
  {
    question: "How much does a website cost for a Sharjah business?",
    answer:
      "A standard five-to-ten-page business website starts from AED 3,000. E-commerce builds start from AED 5,000, and larger custom portals are scoped individually. I offer flexible payment plans to make professional web development accessible to Sharjah SMEs.",
  },
  {
    question: "Can you redesign my existing Sharjah business website?",
    answer:
      "Absolutely. I audit your current site for design, performance, and SEO issues, then create a modern redesign that preserves your existing search equity while dramatically improving user experience, loading speed, and conversion rates.",
  },
];

export default function WebDeveloperSharjahPage() {
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
              Web Developer in Sharjah, UAE
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Sharjah is the UAE&apos;s third-largest emirate and a powerhouse for manufacturing, trading, education, and culture. With industrial zones like SAIF Zone and Hamriyah Free Zone driving export businesses, and a thriving network of universities and cultural institutions, Sharjah businesses need affordable yet professional websites that win customers and build credibility.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              I am a Dubai-based web developer who works closely with Sharjah businesses and free zone companies. I understand the budget-conscious nature of Sharjah&apos;s SME economy and deliver high-quality, performance-optimised websites at competitive rates without cutting corners on design or functionality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={siteConfig.calendly}
                className={buttonVariants({ size: "lg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Consultation <ArrowRight className="ml-1 size-4" />
              </Link>
              <Link
                href="/services/web-development-dubai"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                View Full Web Development Services
              </Link>
            </div>
          </div>
        </section>

        {/* Sharjah Industries */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900">
              Web Solutions for Sharjah&apos;s Business Sectors
            </h2>
            <p className="mt-4 max-w-3xl text-zinc-600">
              Sharjah&apos;s diverse economy requires tailored web development. Whether you run a manufacturing plant in Hamriyah or a university campus in University City, your website needs to work as hard as you do.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Manufacturing & Trading",
                  desc: "Product catalogues, B2B inquiry forms, and multilingual websites for exporters and manufacturers in SAIF Zone, Hamriyah Free Zone, and Sharjah Industrial Area.",
                },
                {
                  title: "Education & Training",
                  desc: "Responsive, accessible websites for universities, training centres, and EdTech platforms based in Sharjah's University City and across the emirate.",
                },
                {
                  title: "Arts & Cultural Sector",
                  desc: "Portfolio websites, event platforms, and digital showcases for galleries, museums, and creative organisations aligned with Sharjah's UNESCO cultural heritage status.",
                },
                {
                  title: "Retail & Local Services",
                  desc: "E-commerce stores and service booking websites for Sharjah's retail businesses, from Al Majaz waterfront shops to Al Nahda commercial strips.",
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

        {/* What You Get */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">What You Get Working with Me</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Budget-Friendly Pricing",
                desc: "I deliver enterprise-quality code at rates that work for Sharjah SMEs. Transparent pricing with no hidden costs, and flexible payment schedules available.",
              },
              {
                title: "Mobile-First Design",
                desc: "Over 80% of Sharjah website traffic comes from smartphones. Every site I build is designed mobile-first and tested on real devices for a flawless experience.",
              },
              {
                title: "Arabic & English Support",
                desc: "Full bilingual websites with proper RTL layout, Arabic typography, and seamless language toggling so you reach all of Sharjah's diverse population.",
              },
              {
                title: "Fast Loading Speeds",
                desc: "Lightweight code, optimised images, and CDN hosting ensure your website loads in under two seconds, keeping bounce rates low and conversions high.",
              },
              {
                title: "SEO-Ready From Day One",
                desc: "Every page is built with clean semantic HTML, structured data, optimised meta tags, and fast performance so you start ranking immediately after launch.",
              },
              {
                title: "Ongoing Support",
                desc: "Post-launch maintenance plans keep your site secure, updated, and performing at peak levels. I am just a WhatsApp message away for urgent requests.",
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
              Let&apos;s Build Your Sharjah Business Website
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Get in touch for a free consultation. I will assess your requirements, provide a transparent quote, and outline the timeline to get your new website live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={siteConfig.calendly}
                className={buttonVariants({ size: "lg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation <ArrowRight className="ml-1 size-4" />
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
