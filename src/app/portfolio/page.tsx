"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Building2 } from "lucide-react";
import {
  getPlatformsForKind,
  getProjectKinds,
  KIND_LABELS,
  portfolioData,
  type ProjectKind,
  type ProjectPlatform,
} from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProjectCover } from "@/components/portfolio/ProjectCover";

type KindFilter = "all" | ProjectKind;

const KIND_FILTERS: { id: KindFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "website", label: "Website" },
  { id: "api", label: "API" },
];

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-emerald-500/10 text-emerald-400"
          : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
      }`}
    >
      {label}
    </button>
  );
}

export default function PortfolioPage() {
  const [kindFilter, setKindFilter] = useState<KindFilter>("all");
  const [platformFilter, setPlatformFilter] = useState<ProjectPlatform | "all">(
    "all"
  );

  const kindScopedProjects = useMemo(
    () =>
      kindFilter === "all"
        ? portfolioData
        : portfolioData.filter((p) => getProjectKinds(p).includes(kindFilter)),
    [kindFilter]
  );

  /** Only stacks that belong to the selected kind (never mix Flutter into Website, etc.) */
  const availablePlatforms = useMemo(() => {
    if (kindFilter === "all") return [] as ProjectPlatform[];
    const set = new Set<ProjectPlatform>();
    for (const project of kindScopedProjects) {
      for (const platform of getPlatformsForKind(project, kindFilter)) {
        set.add(platform);
      }
    }
    return Array.from(set).sort();
  }, [kindScopedProjects, kindFilter]);

  const filteredProjects = useMemo(() => {
    if (kindFilter === "all" || platformFilter === "all") return kindScopedProjects;
    return kindScopedProjects.filter((p) =>
      getPlatformsForKind(p, kindFilter).includes(platformFilter)
    );
  }, [kindScopedProjects, kindFilter, platformFilter]);

  const projectsByCompany = useMemo(() => {
    const grouped = new Map<string, typeof portfolioData>();
    for (const company of siteConfig.companies) {
      const projects = filteredProjects.filter((p) => p.company === company.id);
      if (projects.length > 0) grouped.set(company.id, projects);
    }
    return grouped;
  }, [filteredProjects]);

  function selectKind(next: KindFilter) {
    setKindFilter(next);
    setPlatformFilter("all");
  }

  return (
    <div>
      <PageShell wide className="border-b border-zinc-800/80">
        <SectionHeading
          eyebrow="Work"
          title="All projects"
          subtitle="Filter by Mobile, Website, or API — then by language / stack for that type."
        />

        <div className="mt-8 space-y-4">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              Type
            </p>
            <div className="flex flex-wrap gap-2">
              {KIND_FILTERS.map((item) => (
                <FilterChip
                  key={item.id}
                  label={item.label}
                  active={kindFilter === item.id}
                  onClick={() => selectKind(item.id)}
                />
              ))}
            </div>
          </div>

          {kindFilter !== "all" && availablePlatforms.length > 0 && (
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {kindFilter === "mobile"
                  ? "Mobile stack"
                  : kindFilter === "website"
                    ? "Website stack"
                    : "API stack"}
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  label="All"
                  active={platformFilter === "all"}
                  onClick={() => setPlatformFilter("all")}
                />
                {availablePlatforms.map((platform) => (
                  <FilterChip
                    key={platform}
                    label={platform}
                    active={platformFilter === platform}
                    onClick={() => setPlatformFilter(platform)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </PageShell>

      <PageShell wide className="space-y-16 py-12">
        {filteredProjects.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No projects match this filter yet.
          </p>
        ) : (
          siteConfig.companies.map((company) => {
            const projects = projectsByCompany.get(company.id);
            if (!projects?.length) return null;

            return (
              <section key={company.id}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
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
                  {projects.map((project) => {
                    const kinds = getProjectKinds(project);
                    return (
                      <TiltCard
                        key={project.id}
                        className="group h-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700"
                      >
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="flex h-full flex-col"
                        >
                          <div className="relative aspect-[16/9]">
                            <ProjectCover title={project.title} />
                          </div>
                          <div className="p-5">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="font-mono text-xs text-zinc-500">
                                  {project.category}
                                </p>
                                {(project.appStore || project.playStore) && (
                                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                                    Live
                                  </span>
                                )}
                              </div>
                              <ArrowUpRight className="size-4 shrink-0 text-zinc-600 group-hover:text-emerald-400" />
                            </div>
                            <h3 className="mt-2 font-semibold text-zinc-100 transition-colors group-hover:text-emerald-400">
                              {project.title}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                              {project.results[0]}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {kinds.map((kind) =>
                                getPlatformsForKind(project, kind).map((platform) => (
                                  <span
                                    key={`${kind}-${platform}`}
                                    className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                                  >
                                    {KIND_LABELS[kind]} · {platform}
                                  </span>
                                ))
                              )}
                            </div>
                          </div>
                        </Link>
                      </TiltCard>
                    );
                  })}
                </div>
              </section>
            );
          })
        )}
      </PageShell>
    </div>
  );
}
