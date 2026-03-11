"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const trustItems = [
  "3+ Years Agency Experience",
  "Dubai-Based",
  "50+ Projects Delivered",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.15),transparent)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-amber-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-400"
            >
              Freelance Web Developer & Digital Marketing — Dubai, UAE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Websites & Marketing That{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Drive Growth
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-zinc-400"
            >
              I build fast, conversion-optimized websites and run data-driven digital marketing
              campaigns for small businesses and startups. Based in Dubai, serving clients
              globally.
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
                className={buttonVariants({ variant: "outline", size: "lg", className: "border-zinc-600 text-white hover:bg-white/5" })}
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
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <Check className="h-4 w-4 text-amber-400" />
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
            <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between rounded-xl bg-zinc-900/50 p-6">
                <div>
                  <p className="text-sm text-amber-400">Featured Project</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Luxury Fashion E-Commerce
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    45% conversion increase • 60% faster load
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {["Web Dev", "SEO", "Ads"].map((label, i) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-center text-xs text-zinc-400"
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
