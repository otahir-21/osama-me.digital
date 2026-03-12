"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
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
    <section className="bg-zinc-900 py-24">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-zinc-950/50 p-6 transition-colors hover:border-amber-500/30 hover:bg-zinc-900/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{service.shortDesc}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:
                      "-ml-2 mt-4 flex items-center gap-1 text-amber-400 hover:bg-amber-500/10 hover:text-amber-400",
                  })}
                >
                  Learn more
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
              className: "border-zinc-600 text-white hover:bg-white/5",
            })}
          >
            See Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
