import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { insights } from "@/data/insights";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { getBreadcrumbSchema, getGraphSchema, getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Insights from Dubai | Osama Tahir",
  description:
    "Practical writing on hiring Flutter developers, Flutter vs React Native, mobile app cost in Dubai, and taking over unfinished apps — by Osama Tahir.",
  path: "/insights",
});

export default function InsightsIndexPage() {
  const url = absoluteUrl("/insights");
  return (
    <div>
      <JsonLd
        data={getGraphSchema([
          getWebPageSchema({
            name: "Insights on mobile app development in Dubai",
            description:
              "Guides on hiring Flutter developers, stack choice, cost, and app rescue in the UAE.",
            url,
            dateModified: "2026-08-25",
          }),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/insights" },
          ]),
        ])}
      />
      <PageShell>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Insights" }]} />
        <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Insights on building mobile products in Dubai
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Written from delivery work — Flutter, React Native, APIs, payments and store launch —
          not from a generic marketing playbook. These pages exist so founders and agencies can
          brief a senior engineer without the theatre.
        </p>
      </PageShell>

      <PageShell wide tone="alt" className="grid gap-6 py-10 sm:grid-cols-2 lg:py-12">
        {insights.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-2xl border border-border bg-card p-8"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-primary">{post.category}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{post.title}</h2>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <Link
              href={`/insights/${post.slug}`}
              className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
            >
              Read {post.category.toLowerCase()} insight
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </article>
        ))}
      </PageShell>

      <PageShell className="pb-16">
        <ProjectCTA />
      </PageShell>
    </div>
  );
}
