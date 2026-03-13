"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const trustItems = [
  "3+ Years Agency Experience",
  "Dubai, Abu Dhabi & UAE",
  "Web, Mobile & Marketing",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-400/8 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-600"
            >
              Digital Marketing Specialist UAE — Dubai, Abu Dhabi & All Emirates
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
            >
              Digital Marketing & Websites That{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Drive Growth
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-zinc-600"
            >
              Web development, mobile apps, SEO & Google Ads for businesses in Dubai, Abu Dhabi,
              Sharjah & all UAE Emirates. 3+ years agency experience. Book a free consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg", className: "flex items-center gap-2 bg-amber-500 text-zinc-950 hover:bg-amber-400" })}
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100",
                })}
              >
                View My Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                  <Check className="h-4 w-4 text-amber-600" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="flex h-full flex-col justify-between rounded-xl bg-zinc-50 p-6">
                <div>
                  <p className="text-sm text-amber-600">Featured Project</p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-900">
                    Luxury Fashion E-Commerce
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600">
                    45% conversion increase • 60% faster load
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {["Web Dev", "SEO", "Ads"].map((label, i) => (
                    <div
                      key={label}
                      className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-2 text-center text-xs text-zinc-600"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
