"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  BUYER_CATEGORIES,
  caseStudyCopy,
  type BuyerCategory,
} from "@/data/case-studies";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCover } from "@/components/portfolio/ProjectCover";

type CategoryFilter = "all" | BuyerCategory;

function companyName(id: string) {
  return siteConfig.companies.find((c) => c.id === id)?.name ?? id;
}

export default function PortfolioPage() {
  const [category, setCategory] = useState<CategoryFilter>("all");

  const projects = useMemo(() => {
    return portfolioData.map((project) => ({
      project,
      copy: caseStudyCopy[project.id],
    }));
  }, []);

  const visible = projects.filter(({ copy }) =>
    category === "all" ? true : copy?.buyerCategory === category
  );

  const grouped = BUYER_CATEGORIES.map((cat) => ({
    cat,
    items: visible.filter(({ copy }) => copy?.buyerCategory === cat),
  })).filter((group) => group.items.length > 0);

  return (
    <div>
      <PageShell className="border-b border-zinc-800/80">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90">
          Work
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Selected Mobile App & Software Projects
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
          A selection of mobile apps, business platforms, commerce products and backend
          systems I&apos;ve helped build across the UAE and international markets.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`min-h-11 rounded-lg px-4 py-2 text-sm font-medium ${
              category === "all"
                ? "bg-emerald-500/10 text-emerald-400"
                : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
            }`}
          >
            All
          </button>
          {BUYER_CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`min-h-11 rounded-lg px-4 py-2 text-sm font-medium ${
                category === item
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </PageShell>

      <PageShell wide className="space-y-16 py-12">
        {grouped.length === 0 ? (
          <p className="text-sm text-zinc-500">No projects in this category yet.</p>
        ) : (
          grouped.map(({ cat, items }) => (
            <section key={cat}>
              <h2 className="text-xl font-semibold text-zinc-100">{cat}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {items.map(({ project, copy }) => (
                  <article
                    key={project.id}
                    className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700"
                  >
                    <Link href={`/portfolio/${project.id}`} className="flex h-full flex-col">
                      <div className="relative aspect-[16/9]">
                        <ProjectCover title={project.title} />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs uppercase tracking-wide text-zinc-500">
                            {copy?.buyerCategory ?? project.category}
                          </p>
                          <ArrowUpRight className="size-4 shrink-0 text-zinc-600 group-hover:text-emerald-400" />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-zinc-50 group-hover:text-emerald-400">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-zinc-600">
                          {companyName(project.company)} · {project.role}
                        </p>
                        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
                          {copy?.overview ?? project.challenge}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}
      </PageShell>
    </div>
  );
}
