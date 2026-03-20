import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";

const slug = "web-developer-abu-dhabi";
const cityName = "Abu Dhabi";
const pageTitle = "Web Developer in Abu Dhabi, UAE";
const pageDescription =
  "Experienced web developer serving Abu Dhabi businesses. Custom websites for government entities, oil & gas, finance, and hospitality sectors. Fast, secure, and SEO-optimised web solutions.";

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
    question: "Do you work on-site with Abu Dhabi clients?",
    answer:
      "Yes. I regularly travel to Abu Dhabi for discovery workshops, stakeholder meetings, and project kick-offs. Day-to-day collaboration happens via video calls, Slack, and shared project boards so progress is transparent at every stage.",
  },
  {
    question: "Can you build bilingual Arabic-English websites for Abu Dhabi government entities?",
    answer:
      "Absolutely. I develop fully bilingual websites with proper RTL layout support, Arabic typography, and WCAG-compliant accessibility, which are essential for government and semi-government organisations in Abu Dhabi.",
  },
  {
    question: "What technologies do you use for Abu Dhabi web projects?",
    answer:
      "Most projects are built with Next.js and React for speed and SEO performance. For e-commerce I use Shopify or WooCommerce, and for content-heavy portals I work with headless CMS platforms like Sanity or Strapi. Every build is mobile-first and optimised for Core Web Vitals.",
  },
  {
    question: "How long does a typical website project take for an Abu Dhabi business?",
    answer:
      "A standard corporate website takes four to six weeks from signed brief to launch. Larger portals with integrations, bilingual content, and custom dashboards can take eight to twelve weeks depending on scope and internal approvals.",
  },
  {
    question: "Do you offer ongoing maintenance after the website launches?",
    answer:
      "Yes. I provide monthly maintenance plans that cover security updates, performance monitoring, content changes, and hosting management so your Abu Dhabi business stays online and running smoothly.",
  },
];

export default function WebDeveloperAbuDhabiPage() {
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
              Web Developer in Abu Dhabi, UAE
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Abu Dhabi is the political and financial capital of the UAE, home to sovereign wealth funds, multinational energy companies, world-class universities, and ambitious government digitisation programmes. Businesses here need websites that reflect that stature: fast, secure, bilingual, and built to convert.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              I am a senior full-stack developer based in Dubai who works extensively with Abu Dhabi organisations. From corporate portals for ADGM-registered firms to hospitality booking platforms on Saadiyat Island, I build web solutions tailored to the capital&apos;s unique business environment.
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

        {/* Industries */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900">
              Web Development for Abu Dhabi&apos;s Key Industries
            </h2>
            <p className="mt-4 max-w-3xl text-zinc-600">
              Every sector in Abu Dhabi has distinct digital requirements. I design and develop websites that address the specific regulatory, cultural, and commercial challenges each industry faces.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Government & Public Sector",
                  desc: "Accessible, bilingual portals that meet UAE government standards for digital services, including WCAG compliance, Arabic RTL layouts, and secure authentication.",
                },
                {
                  title: "Oil, Gas & Energy",
                  desc: "Corporate websites and internal dashboards for energy companies headquartered in Abu Dhabi, with robust security, data visualisation, and stakeholder reporting features.",
                },
                {
                  title: "Finance & Banking",
                  desc: "Fast, compliant websites for banks, fintech startups, and investment firms operating from Abu Dhabi Global Market (ADGM) and beyond.",
                },
                {
                  title: "Hospitality & Tourism",
                  desc: "Booking-ready, visually striking websites for hotels, resorts, and experience providers across Yas Island, Saadiyat Island, and the Abu Dhabi Corniche.",
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

        {/* Why Choose Me */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">Why Abu Dhabi Businesses Choose Me</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Proximity to the Capital",
                desc: "Based in Dubai, I am less than 90 minutes from Abu Dhabi and visit regularly for face-to-face meetings, ensuring strong communication throughout every project.",
              },
              {
                title: "Bilingual & RTL Expertise",
                desc: "Every website I deliver can support full Arabic and English content with proper right-to-left rendering, culturally appropriate design, and seamless language switching.",
              },
              {
                title: "Performance-First Development",
                desc: "I prioritise Core Web Vitals, lightweight code, and CDN-backed hosting so your site loads fast for visitors in Abu Dhabi and across the Gulf region.",
              },
              {
                title: "SEO Built In",
                desc: "Technical SEO, structured data, and local search optimisation are part of every build, helping your Abu Dhabi business rank for the keywords that matter.",
              },
              {
                title: "Scalable Architecture",
                desc: "Whether you need a five-page corporate site or a multi-portal digital ecosystem, I use modern frameworks like Next.js that scale with your ambitions.",
              },
              {
                title: "End-to-End Service",
                desc: "From strategy and UX design through development, testing, deployment, and ongoing maintenance, you get one reliable point of contact for the entire journey.",
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
              Ready to Build Your Abu Dhabi Website?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Book a free 30-minute consultation to discuss your project. I will review your current site, understand your goals, and outline a clear plan to get results.
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
