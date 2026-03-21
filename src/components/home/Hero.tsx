"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const trustItems = [
  "3+ Years Agency Experience",
  "Dubai, Abu Dhabi & UAE",
  "Web, Mobile & Marketing",
];

const headlineWords = ["Digital", "Marketing", "&", "Websites", "That"];
const highlightWords = ["Drive", "Growth"];

// Staggered word animation — opacity + transform only (GPU composited)
const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.3 + i * 0.07,
      ease: EASE,
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">

      {/* ── Animated gradient blobs (CSS — GPU composited) ── */}
      <div className="blob-1 pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-300/20 blur-[120px]" />
      <div className="blob-2 pointer-events-none absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-amber-400/15 blur-[100px]" />
      <div className="blob-3 pointer-events-none absolute bottom-10 left-[-5%] h-[400px] w-[400px] rounded-full bg-amber-200/20 blur-[90px]" />

      {/* ── Subtle grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* ── Left column ── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.1)}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Digital Marketing Specialist — Dubai & UAE
            </motion.p>

            {/* Headline with word-by-word reveal */}
            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.5rem]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  className="mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {highlightWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={headlineWords.length + i}
                  variants={wordVariants}
                  className="mr-3 inline-block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.7)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500"
            >
              Freelance web developer and digital marketing specialist in Dubai,
              UAE. I build fast, SEO-ready websites and grow them with SEO &
              Google Ads — serving Dubai, Abu Dhabi, Sharjah & all Emirates.
              Book a free consultation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.85)}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                onClick={() => {
                  if (typeof window !== "undefined" && typeof window.gtag === "function") {
                    window.gtag("event", "cta_click", { event_label: "Book a Free Consultation" });
                  }
                }}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "group flex items-center gap-2 bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-400/30 transition-all duration-300",
                })}
              >
                Book a Free Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/portfolio"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-zinc-200 bg-white/80 text-zinc-700 backdrop-blur-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300",
                })}
              >
                View My Work
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              {...fadeUp(1.0)}
              className="mt-12 flex flex-wrap gap-6"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm text-zinc-500"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                    <Check className="h-3 w-3 text-amber-600" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — floating card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            {/* Floating glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/20 to-transparent blur-2xl" />

            {/* Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-zinc-100 bg-white p-8 shadow-2xl shadow-zinc-200/60"
            >
              {/* Top bar */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-zinc-400">featured-project.tsx</span>
              </div>

              {/* Project info */}
              <div className="rounded-2xl bg-zinc-50 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-amber-500">
                  Featured Project
                </p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-900">
                  Luxury Fashion E-Commerce
                </h2>
                <p className="mt-1.5 text-sm text-zinc-500">
                  45% conversion increase · 60% faster load
                </p>

                {/* Animated stat bars */}
                <div className="mt-5 space-y-3">
                  {[
                    { label: "Conversion Rate", value: 45, color: "bg-amber-400" },
                    { label: "Page Speed", value: 60, color: "bg-amber-500" },
                    { label: "Organic Traffic", value: 80, color: "bg-amber-600" },
                  ].map((stat, i) => (
                    <div key={stat.label}>
                      <div className="mb-1 flex justify-between text-xs text-zinc-500">
                        <span>{stat.label}</span>
                        <span className="font-medium text-zinc-700">+{stat.value}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">
                        <motion.div
                          className={`h-full rounded-full ${stat.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "SEO", "Google Ads", "UAE"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm border border-zinc-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom stats row */}
              <div className="mt-5 grid grid-cols-3 divide-x divide-zinc-100">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "3+", label: "Years" },
                  { value: "UAE", label: "Based" },
                ].map((s) => (
                  <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
                    <p className="text-lg font-bold text-zinc-900">{s.value}</p>
                    <p className="text-xs text-zinc-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -right-4 -top-4 rounded-2xl border border-amber-100 bg-white px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-medium text-zinc-500">Avg. Response</p>
              <p className="text-sm font-bold text-zinc-900">Within 2 hours</p>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-green-100 bg-white px-4 py-2.5 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <p className="text-sm font-medium text-zinc-700">Available for projects</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
