"use client";

import { motion } from "framer-motion";
import { Award, Code2, Shield, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Award,
    title: "6+ Years in Production",
    desc: "Shipped 20+ apps across fintech, healthcare, govtech, and enterprise — from architecture to App Store launch.",
  },
  {
    icon: Code2,
    title: "Full-Stack Ownership",
    desc: "Mobile frontends, Laravel/Node APIs, payment flows, and cloud deployment. One engineer who owns the full stack.",
  },
  {
    icon: Shield,
    title: "Security-First Fintech",
    desc: "Processed $1.2M+ in Stripe and Apple Pay transactions with zero security breaches across regulated environments.",
  },
  {
    icon: Zap,
    title: "Performance at Scale",
    desc: "APIs handling 10K+ daily requests at 99.9% uptime. 40% latency reductions through caching and query optimization.",
  },
];

export function WhyChooseMe() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="What I Bring"
          subtitle="Technical depth, delivery discipline, and a track record of shipping reliable software."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <item.icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
