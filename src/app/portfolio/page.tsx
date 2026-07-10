"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { ArrowUpRight, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

type Filter = "all" | "mobile" | "web";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? portfolioData
        : portfolioData.filter((project) => project.kind === filter),
    [filter]
  );

  const projectsByCompany = useMemo(() => {
    const grouped = new Map<string, typeof portfolioData>();
    for (const company of siteConfig.companies) {
      const projects = filteredProjects.filter((p) => p.company === company.id);
      if (projects.length > 0) grouped.set(company.id, projects);
    }
    return grouped;
  }, [filteredProjects]);

  return (
    <div>
      <PageShell wide className="border-b border-zinc-800/80">
        <SectionHeading
          eyebrow="Work"
          title="All projects"
          subtitle="Mobile apps and backend systems grouped by company."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: "all", label: "All", value: "all" as Filter },
            { id: "mobile", label: "Mobile", value: "mobile" as Filter },
            { id: "web", label: "Web & API", value: "web" as Filter },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === item.value
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </PageShell>

      <PageShell wide className="space-y-16 py-12">
        {siteConfig.companies.map((company) => {
          const projects = projectsByCompany.get(company.id);
          if (!projects?.length) return null;

          return (
            <section key={company.id}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                  <Building2 className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-zinc-100">{company.name}</h2>
                  <p className="text-xs text-zinc-500">
                    {company.role} · {company.period}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                  <TiltCard
                    key={project.id}
                    className="group h-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700"
                  >
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative aspect-[16/9] bg-zinc-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-mono text-xs text-zinc-500">{project.category}</p>
                          {(project.appStore || project.playStore) && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                              <span className="h-1 w-1 rounded-full bg-emerald-400" />
                              Live
                            </span>
                          )}
                        </div>
                        <ArrowUpRight className="size-4 text-zinc-600 group-hover:text-emerald-400 shrink-0" />
                      </div>
                      <h3 className="mt-2 font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{project.results[0]}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                  </TiltCard>
                ))}
              </div>
            </section>
          );
        })}
      </PageShell>
    </div>
  );
}
