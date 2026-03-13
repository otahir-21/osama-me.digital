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
    <section className="bg-zinc-50 py-24">
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
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-amber-500/20 shadow-sm"
            >
              <div className="relative aspect-video bg-zinc-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
                  <span className="text-4xl font-bold text-zinc-400/70">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-amber-500">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{project.challenge}</p>
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
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100",
            })}
          >
            View Full Portfolio
          </Link>
          <Link
            href="/services"
            className={buttonVariants({ size: "lg", className: "bg-amber-500 text-zinc-950 hover:bg-amber-400" })}
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
