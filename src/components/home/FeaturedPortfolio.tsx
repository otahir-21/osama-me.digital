"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

const featured = portfolioData.filter((p) => p.featured);

function getCompanyName(companyId: string) {
  return siteConfig.companies.find((c) => c.id === companyId)?.name ?? companyId;
}

export function FeaturedPortfolio() {
  const [hero, ...rest] = featured;

  return (
    <section className="border-b border-zinc-800/80 py-16 lg:py-20">
      <PageShell wide>
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          subtitle="Apps and platforms I've built across fintech, healthcare, and enterprise."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {hero && (
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-2 sm:row-span-2"
            >
              <TiltCard intensity={3} className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Link href={`/portfolio/${hero.id}`} className="block p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-mono text-xs text-emerald-400/80">{getCompanyName(hero.company)}</p>
                      {(hero.appStore || hero.playStore) && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Live in stores
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-100 sm:text-2xl group-hover:text-emerald-400 transition-colors">
                      {hero.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500">{hero.category}</p>
                    <p className="mt-4 line-clamp-2 max-w-lg text-sm leading-relaxed text-zinc-400">
                      {hero.challenge}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {hero.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-800/80 px-2.5 py-1 font-mono text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-zinc-600 transition-colors group-hover:text-emerald-400" />
                </div>
                <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src={hero.image}
                    alt={hero.title}
                    fill
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </Link>
              </TiltCard>
            </motion.article>
          )}

          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <Link href={`/portfolio/${project.id}`} className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-mono text-xs text-zinc-500">{getCompanyName(project.company)}</p>
                  <ArrowUpRight className="size-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="mt-3 font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-zinc-500 line-clamp-2">{project.results[0]}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
              </TiltCard>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </PageShell>
    </section>
  );
}
