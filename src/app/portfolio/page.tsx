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
      <PageShell>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Work
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Selected Mobile App & Software Projects
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A selection of mobile apps, business platforms, commerce products and backend
          systems I&apos;ve helped build across the UAE and international markets.
        </p>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`min-h-11 rounded-lg px-4 py-2 text-sm font-medium ${
              category === "all"
                ? "bg-primary/8 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
                  ? "bg-primary/8 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </PageShell>

      <PageShell wide tone="alt" className="space-y-16 pt-0">
        {grouped.length === 0 ? (
          <p className="text-sm text-muted-foreground">No projects in this category yet.</p>
        ) : (
          grouped.map(({ cat, items }) => (
            <section key={cat}>
              <h2 className="text-xl font-semibold text-foreground">{cat}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {items.map(({ project, copy }) => (
                  <article
                    key={project.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm"
                  >
                    <Link href={`/portfolio/${project.id}`} className="flex h-full flex-col">
                      <div className="relative aspect-[16/9]">
                        <ProjectCover title={project.title} />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            {copy?.buyerCategory ?? project.category}
                          </p>
                          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {companyName(project.company)} · {project.role}
                        </p>
                        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {copy?.overview ?? project.challenge}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
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
