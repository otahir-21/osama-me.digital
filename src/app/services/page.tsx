import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesDetail } from "@/data/services-detail";
import { buildMetadata } from "@/lib/seo";
import { getGraphSchema, getWebPageSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Software Services in Dubai | Osama Tahir",
  description:
    "Mobile app development, app rescue, custom CRMs and technical partnership for UAE and GCC businesses — delivered by Osama Tahir in Dubai.",
  path: "/services",
});

export default function ServicesIndexPage() {
  const url = absoluteUrl("/services");
  return (
    <div>
      <JsonLd
        data={getGraphSchema([
          getWebPageSchema({
            name: "Software development services in Dubai",
            description:
              "Mobile apps, app rescue, custom business platforms and agency technical partnership.",
            url,
          }),
        ])}
      />
      <PageShell>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Services
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Software development services in Dubai
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Osama Tahir helps UAE and GCC companies build, rescue and scale mobile apps and
          digital platforms with senior-level ownership from architecture through production.
          The work spans Flutter, React Native, Laravel, Node.js, payments and production launch.
        </p>
      </PageShell>

      <PageShell wide tone="alt" className="grid gap-6 py-10 sm:grid-cols-2 lg:py-12">
        {servicesDetail.map((service) => (
          <article
            key={service.slug}
            className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)] lg:p-9"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{service.hubTitle}</h2>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{service.tagline}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              {service.hubTitle} details
              <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
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
