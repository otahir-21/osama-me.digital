"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

const featured = portfolioData.filter((p) => p.featured);

export function FeaturedPortfolio() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="Recent projects that demonstrate results—conversion lifts, traffic growth, and technical excellence."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 transition-colors hover:border-amber-500/20"
            >
              <div className="relative aspect-video bg-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <span className="text-4xl font-bold text-zinc-600/50">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{project.challenge}</p>
                <ul className="mt-4 space-y-1">
                  {project.results.slice(0, 2).map((r) => (
                    <li key={r} className="text-sm text-amber-400/90">
                      • {r}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/portfolio#${project.id}`}
                  className={buttonVariants({ variant: "ghost", size: "sm", className: "mt-4 -ml-2 flex items-center gap-1 text-amber-400 hover:bg-amber-500/10" })}
                >
                  View case study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className={buttonVariants({ variant: "outline", size: "lg", className: "border-zinc-600 text-white hover:bg-white/5" })}
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
