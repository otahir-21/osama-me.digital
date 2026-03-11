"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  TrendingUp,
  Share2,
  Layout,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesDetail } from "@/data/services-detail";

const iconMap = {
  "website-development": Globe,
  seo: Search,
  "google-ads": TrendingUp,
  "social-media": Share2,
  "landing-pages": Layout,
  "wordpress-shopify": ShoppingCart,
  "monthly-growth": BarChart3,
} as const;

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          subtitle="Full-stack digital solutions—from websites to performance marketing."
        />
      </section>

      <div className="space-y-24">
        {servicesDetail.map((service, idx) => {
          const Icon = iconMap[service.id as keyof typeof iconMap] ?? Globe;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 ${isEven ? "bg-zinc-900/50" : ""}`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                      <Icon size={28} />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-white">{service.title}</h2>
                    <p className="mt-2 text-xl text-amber-400">{service.tagline}</p>
                    <p className="mt-4 text-zinc-400">{service.description}</p>
                    <div className="mt-6">
                      <p className="font-medium text-white">Starting from {service.priceFrom}</p>
                      <Link
                        href="/contact"
                        className={buttonVariants({
                          size: "lg",
                          className: "mt-4 inline-flex bg-amber-500 text-zinc-950 hover:bg-amber-400",
                        })}
                      >
                        Get a Quote
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-semibold text-white">Who it&apos;s for</h3>
                        <ul className="mt-2 space-y-1">
                          {service.forWho.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-zinc-400">
                              <Check className="mt-0.5 size-4 shrink-0 text-amber-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Benefits</h3>
                        <ul className="mt-2 space-y-1">
                          {service.benefits.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-zinc-400">
                              <Check className="mt-0.5 size-4 shrink-0 text-amber-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Deliverables</h3>
                        <ul className="mt-2 space-y-1">
                          {service.deliverables.map((item) => (
                            <li key={item} className="text-zinc-400">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Process</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {service.process.map((step, i) => (
                            <span
                              key={step}
                              className="rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-sm text-zinc-400"
                            >
                              {i + 1}. {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-t border-white/10 bg-zinc-900 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-zinc-400">
            Book a free 30-minute consultation. We&apos;ll discuss your goals and how I can help.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className: "mt-8 inline-flex bg-amber-500 text-zinc-950 hover:bg-amber-400",
            })}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
