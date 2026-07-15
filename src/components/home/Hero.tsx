"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { TypedTerminal } from "@/components/home/TypedTerminal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-400/5 blur-3xl" />

      <PageShell className="relative py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p className="font-mono text-sm text-emerald-400">
                Hi, I&apos;m {siteConfig.name.split(" ")[0]} —
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
                {siteConfig.headline}
              </h1>
            </div>

            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/25 to-zinc-800 ring-1 ring-zinc-700/60 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
              <Image
                src="/profile.png"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 112px, 176px"
                priority
              />
            </div>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.tagline}
          </p>

          <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {siteConfig.availability}
          </p>

          <TypedTerminal />

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-400 active:scale-95"
            >
              View my work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-[1.03] hover:border-zinc-600 hover:bg-zinc-900 active:scale-95"
            >
              Get in touch
            </Link>
            <a
              href={siteConfig.resumeFile}
              download="Osama-Tahir-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-[1.03] hover:border-zinc-600 hover:bg-zinc-900 active:scale-95"
            >
              <Download size={16} />
              Download resume
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-zinc-800/80 pt-10 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-zinc-100 sm:text-3xl">
                  {stat.value}
                  <span className="text-emerald-400">{stat.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </PageShell>
    </section>
  );
}
