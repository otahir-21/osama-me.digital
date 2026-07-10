"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

export function SkillsOverview() {
  return (
    <section className="border-b border-zinc-800/80 py-16 lg:py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="Focused on shipping reliable mobile apps, APIs, and payment systems."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {siteConfig.expertise.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4"
            >
              <h3 className="text-sm font-semibold text-zinc-200">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{item.shortDesc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/skills"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          Full skills breakdown
          <ArrowUpRight size={16} />
        </Link>
      </PageShell>
    </section>
  );
}
