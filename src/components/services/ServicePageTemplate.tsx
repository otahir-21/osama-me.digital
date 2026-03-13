"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MapPin,
  Globe,
  Search,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  Code2,
  Share2,
  Layout,
  Shield,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/data/site-config";
import { servicesDetail, type ServiceDetailItem } from "@/data/services-detail";

const iconMap = {
  Globe,
  Search,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  Code2,
  Share2,
  Layout,
  Shield,
} as const;

interface ServicePageTemplateProps {
  service: ServiceDetailItem;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;

  const relatedServices = servicesDetail.filter((s) =>
    service.relatedSlugs.slice(0, 3).includes(s.slug)
  );

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=Hi%20Osama%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.hubTitle)}%20service.`;

  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="transition-colors hover:text-zinc-300">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/services" className="transition-colors hover:text-zinc-300">
              Services
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-zinc-400">{service.hubTitle}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
            <Icon size={28} />
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-3 text-xl text-amber-400">{service.tagline}</p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">{service.description}</p>

          <div className="mt-8">
            <p className="text-sm text-zinc-500">Starting from</p>
            <p className="mt-1 text-3xl font-bold text-white">{service.priceFrom}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "bg-amber-500 text-zinc-950 hover:bg-amber-400",
              })}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-zinc-300 text-zinc-800 hover:bg-zinc-100",
              })}
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Who it's for + Benefits */}
      <section className="bg-zinc-900/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">Who It&apos;s For</h2>
              <ul className="mt-6 space-y-3">
                {service.forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Key Benefits</h2>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">What&apos;s Included</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900/50 p-4"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-amber-400" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-zinc-900/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">How It Works</h2>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {service.process.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-zinc-950">
                      {i + 1}
                    </div>
                    <span className="text-sm text-zinc-300">{step}</span>
                  </div>
                  {i < service.process.length - 1 && (
                    <ArrowRight className="hidden size-4 shrink-0 text-zinc-600 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cities served */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900/50 p-5">
            <MapPin className="mt-0.5 size-5 shrink-0 text-amber-400" />
            <p className="text-sm text-zinc-400">{service.citiesNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="mt-2 text-zinc-400">
              Everything you need to know before getting started.
            </p>
            <Accordion multiple={false} className="mt-8 space-y-3">
              {service.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-white/10 bg-zinc-900/50 px-5"
                >
                  <AccordionTrigger className="py-5 text-left text-sm font-medium text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-zinc-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-zinc-900/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Related Services</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon as keyof typeof iconMap] ?? Globe;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group rounded-xl border border-white/10 bg-zinc-950/50 p-6 transition-colors hover:border-amber-500/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                      <RelatedIcon size={20} />
                    </div>
                    <h3 className="mt-4 font-semibold text-white transition-colors group-hover:text-amber-400">
                      {related.hubTitle}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{related.tagline}</p>
                    <span className="mt-3 inline-flex items-center text-sm text-amber-400">
                      Learn more <ArrowRight className="ml-1 size-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-zinc-900 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-zinc-400">
            Book a free 30-minute consultation. No obligation — just a clear conversation about
            what you need and how I can help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "bg-amber-500 text-zinc-950 hover:bg-amber-400",
              })}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/portfolio"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-zinc-300 text-zinc-800 hover:bg-zinc-100",
              })}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
