"use client";

import { motion } from "framer-motion";
import { Award, Code2, Target, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Award,
    title: "3+ Years Agency Experience",
    desc: "Trained in fast-paced agency environments. I deliver on time, communicate clearly, and understand client expectations.",
  },
  {
    icon: Code2,
    title: "Development + Marketing Hybrid",
    desc: "Rare combination: I build websites and run campaigns. No handoffs, no miscommunication—one person who gets both sides.",
  },
  {
    icon: Target,
    title: "Results-Focused Approach",
    desc: "Every project is measured against business goals. I optimize for conversions, leads, and ROI—not just aesthetics.",
  },
  {
    icon: MapPin,
    title: "Dubai Market Knowledge",
    desc: "I understand the UAE market, local SEO, and what resonates with Dubai businesses. Plus, I work with clients worldwide.",
  },
];

export function WhyChooseMe() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Built for Results"
          subtitle="Experience, skills, and a focus on what actually moves the needle for your business."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <item.icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
