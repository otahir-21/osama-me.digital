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
import { siteConfig } from "@/data/site-config";

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

export function ServicesOverview() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          subtitle="Web development, mobile apps, SEO, Google Ads, and more — everything a UAE business needs to grow online."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-amber-500/30 hover:shadow-md hover:shadow-amber-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-100">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{service.shortDesc}</p>
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Learn more about ${service.title}`}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:
                      "-ml-2 mt-4 flex min-h-[44px] min-w-[44px] items-center gap-1 text-amber-600 hover:bg-amber-100 hover:text-amber-600",
                  })}
                >
                  Learn more about {service.title}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/services"
            className={buttonVariants({
              size: "lg",
              className: "bg-amber-500 text-zinc-950 hover:bg-amber-400",
            })}
          >
            View All Services
          </Link>
          <Link
            href="/portfolio"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100",
            })}
          >
            See Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
