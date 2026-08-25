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
  title: "Mobile App & Software Development Services Dubai | Osama Tahir",
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
      <PageShell className="border-b border-zinc-800/80">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90">
          Services
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Software development services in Dubai
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Osama Tahir helps UAE and GCC companies build, rescue and scale mobile apps and
          digital platforms. The work spans Flutter, React Native, Laravel, Node.js, payments
          and production launch — as a senior engineer, not a ticket shop.
        </p>
      </PageShell>

      <PageShell className="grid gap-5 py-14 sm:grid-cols-2">
        {servicesDetail.map((service) => (
          <article
            key={service.slug}
            className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7"
          >
            <h2 className="text-xl font-semibold text-zinc-50">{service.hubTitle}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{service.tagline}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-6 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              {service.hubTitle} details
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
