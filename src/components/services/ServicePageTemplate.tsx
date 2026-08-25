import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { servicesDetail, type ServiceDetailItem } from "@/data/services-detail";
import { portfolioData } from "@/data/portfolio";
import {
  getBreadcrumbSchema,
  getGraphSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export function ServicePageTemplate({ service }: { service: ServiceDetailItem }) {
  const url = absoluteUrl(`/services/${service.slug}`);
  const relatedServices = servicesDetail.filter((item) =>
    service.relatedSlugs.includes(item.slug)
  );
  const relatedProjects = portfolioData.filter((project) =>
    service.relatedProjectIds.includes(project.id)
  );

  const schema = getGraphSchema([
    getWebPageSchema({
      name: service.h1,
      description: service.metaDescription,
      url,
    }),
    getServiceSchema({
      name: service.title,
      description: service.description,
      url,
      serviceType: service.serviceType,
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.hubTitle, url: `/services/${service.slug}` },
    ]),
  ]);

  return (
    <div>
      <JsonLd data={schema} />
      <PageShell className="border-b border-zinc-800/80 pb-12">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.hubTitle },
          ]}
        />
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          {service.h1}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">{service.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TrackedLink
            href="/contact"
            event="service_cta"
            eventParams={{ location: `${service.slug}_hero` }}
            className="inline-flex min-h-11 items-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
          >
            Start a Project
          </TrackedLink>
          <Link
            href="/portfolio"
            className="inline-flex min-h-11 items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500"
          >
            View selected work
          </Link>
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-14">
        <h2 className="text-2xl font-semibold text-zinc-50">Who this service is for</h2>
        <ul className="mt-6 space-y-3">
          {service.forWho.map((item) => (
            <li key={item} className="flex gap-3 text-zinc-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      {service.sections.map((section) => (
        <PageShell key={section.heading} className="border-b border-zinc-800/80 py-14">
          <h2 className="text-2xl font-semibold text-zinc-50">{section.heading}</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">{section.body}</p>
          {section.bullets && (
            <ul className="mt-6 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </PageShell>
      ))}

      <PageShell className="border-b border-zinc-800/80 py-14">
        <h2 className="text-2xl font-semibold text-zinc-50">Development process</h2>
        <ol className="mt-8 space-y-6">
          {service.process.map((step, index) => (
            <li key={step.title} className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6">
              <p className="text-sm font-medium text-emerald-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </PageShell>

      {relatedProjects.length > 0 && (
        <PageShell className="border-b border-zinc-800/80 py-14">
          <h2 className="text-2xl font-semibold text-zinc-50">Relevant work</h2>
          <ul className="mt-6 space-y-4">
            {relatedProjects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="group block rounded-xl border border-zinc-800 p-5 transition-colors hover:border-zinc-700"
                >
                  <p className="text-xs uppercase tracking-wide text-zinc-500">{project.category}</p>
                  <h3 className="mt-1 font-semibold text-zinc-100 group-hover:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{project.results[0]}</p>
                  <span className="mt-3 inline-flex items-center text-sm text-emerald-400">
                    View {project.title.split("–")[0].trim()} case study
                    <ArrowRight className="ml-1 size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PageShell>
      )}

      <PageShell className="border-b border-zinc-800/80 py-14">
        <h2 className="text-2xl font-semibold text-zinc-50">Common questions</h2>
        <Accordion className="mt-6">
          {service.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-200 hover:text-emerald-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-500">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageShell>

      {relatedServices.length > 0 && (
        <PageShell className="border-b border-zinc-800/80 py-14">
          <h2 className="text-2xl font-semibold text-zinc-50">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-xl border border-zinc-800 p-5 transition-colors hover:border-zinc-700"
              >
                <h3 className="font-semibold text-zinc-100">{related.hubTitle}</h3>
                <p className="mt-2 text-sm text-zinc-500">{related.tagline}</p>
              </Link>
            ))}
          </div>
        </PageShell>
      )}

      <PageShell className="py-14">
        <ProjectCTA heading={service.ctaHeading} body={service.ctaBody} />
      </PageShell>
    </div>
  );
}
