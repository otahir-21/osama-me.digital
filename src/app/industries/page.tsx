import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { industries } from "@/data/industries";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { getBreadcrumbSchema, getGraphSchema, getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Industries | Mobile Apps in Dubai | Osama Tahir",
  description:
    "Mobile and software work for e-commerce, payments, healthcare and wellness teams in the UAE — by Osama Tahir in Dubai.",
  path: "/industries",
});

export default function IndustriesIndexPage() {
  const url = absoluteUrl("/industries");
  return (
    <div>
      <JsonLd
        data={getGraphSchema([
          getWebPageSchema({
            name: "Industries",
            description: "E-commerce, payments, healthcare and wellness software in Dubai.",
            url,
            dateModified: "2026-08-25",
          }),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries" },
          ]),
        ])}
      />
      <PageShell>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Industries" }]} />
        <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Industries I build software for
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Not a doorway list of every vertical on earth. These pages exist because the public work
          on this site already lives here — commerce, health, and the operational software around
          them.
        </p>
      </PageShell>

      <PageShell wide tone="alt" className="grid gap-6 py-10 sm:grid-cols-2 lg:py-12">
        {industries.map((industry) => (
          <article key={industry.slug} className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{industry.title}</h2>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{industry.intro}</p>
            <Link
              href={`/industries/${industry.slug}`}
              className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
            >
              {industry.title} details
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
