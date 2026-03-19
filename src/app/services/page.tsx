"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  Globe,
  Search,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  Code2,
  Share2,
  Layout,
  Shield,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesDetail } from "@/data/services-detail";

const iconMap = {
  Cloud,
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

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-24">
      <h1 className="sr-only">Web Development, SEO & Digital Marketing Services in Dubai</h1>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Web Development, SEO & Digital Marketing in Dubai"
          subtitle="Full-stack digital solutions for UAE businesses — from custom websites and mobile apps to SEO, Google Ads, and social media."
        />
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesDetail.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-amber-500/30 hover:bg-zinc-50 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-zinc-900">{service.hubTitle}</h2>
                  <p className="mt-2 flex-1 text-sm text-zinc-600">{service.tagline}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-500">{service.priceFrom}</span>
                    <span className="inline-flex items-center text-sm text-zinc-500 transition-colors group-hover:text-amber-500">
                      View service <ArrowRight className="ml-1 size-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "7", label: "Emirates Served" },
              ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-amber-500">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">Not Sure Where to Start?</h2>
          <p className="mt-4 text-zinc-600">
            Book a free 30-minute consultation. I&apos;ll help you identify what your business
            needs most and recommend the highest-impact place to start.
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
                className: "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100",
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
