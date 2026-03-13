"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";

export function ProcessSection() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How We Work Together"
          subtitle="A clear, proven process from discovery to launch and beyond."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-500 bg-amber-500/10 text-sm font-bold text-amber-500">
                {step.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
