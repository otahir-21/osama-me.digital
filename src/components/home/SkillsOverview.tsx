"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageShell } from "@/components/layout/PageShell";

const items = [
  {
    id: "mobile",
    title: "Mobile development",
    shortDesc: "Flutter and React Native apps for iOS and Android, through store launch.",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    shortDesc: "Laravel and Node.js APIs, authentication, caching, and production operations.",
  },
  {
    id: "payments",
    title: "Payments",
    shortDesc: "Stripe, Apple Pay, Network International, and subscription entitlements.",
  },
  {
    id: "platforms",
    title: "Business platforms",
    shortDesc: "CRMs, dashboards, and operational software around the mobile product.",
  },
];

export function SkillsOverview() {
  return (
    <section className="bg-surface-alt py-16 lg:py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="Focused on shipping reliable mobile apps, APIs, and payment systems."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-card px-5 py-4"
            >
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.shortDesc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/skills"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary"
        >
          Full skills breakdown
          <ArrowUpRight size={16} />
        </Link>
      </PageShell>
    </section>
  );
}
