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
      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.hubTitle },
          ]}
        />
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-stone-800 sm:text-5xl">
          {service.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">{service.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <TrackedLink
            href="/contact"
            event="service_cta"
            eventParams={{ location: `${service.slug}_hero` }}
            className="inline-flex min-h-11 items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Start a Project
          </TrackedLink>
          <Link
            href="/portfolio"
            className="inline-flex min-h-11 items-center rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:border-stone-400"
          >
            View selected work
          </Link>
        </div>
      </PageShell>

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-stone-800">Who this service is for</h2>
        <ul className="mt-6 space-y-3">
          {service.forWho.map((item) => (
            <li key={item} className="flex gap-3 text-stone-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      {service.sections.map((section) => (
        <PageShell key={section.heading} className="pt-0">
          <h2 className="text-2xl font-semibold text-stone-800">{section.heading}</h2>
          <p className="mt-4 leading-relaxed text-stone-600">{section.body}</p>
          {section.bullets && (
            <ul className="mt-6 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-stone-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </PageShell>
      ))}

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-stone-800">Development process</h2>
        <ol className="mt-8 space-y-6">
          {service.process.map((step, index) => (
            <li key={step.title} className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6">
              <p className="text-sm font-medium text-indigo-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-semibold text-stone-800">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </PageShell>

      {relatedProjects.length > 0 && (
        <PageShell className="pt-0">
          <h2 className="text-2xl font-semibold text-stone-800">Relevant work</h2>
          <ul className="mt-6 space-y-4">
            {relatedProjects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="group block rounded-xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-sm"
                >
                  <p className="text-xs uppercase tracking-wide text-stone-500">{project.category}</p>
                  <h3 className="mt-1 font-semibold text-stone-800 group-hover:text-indigo-700">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500">{project.results[0]}</p>
                  <span className="mt-3 inline-flex items-center text-sm text-indigo-700">
                    View {project.title.split("–")[0].trim()} case study
                    <ArrowRight className="ml-1 size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PageShell>
      )}

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-stone-800">Common questions</h2>
        <Accordion className="mt-6">
          {service.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-stone-200">
              <AccordionTrigger className="text-left text-stone-800 hover:text-indigo-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageShell>

      {relatedServices.length > 0 && (
        <PageShell className="pt-0">
          <h2 className="text-2xl font-semibold text-stone-800">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-sm"
              >
                <h3 className="font-semibold text-stone-800">{related.hubTitle}</h3>
                <p className="mt-2 text-sm text-stone-500">{related.tagline}</p>
              </Link>
            ))}
          </div>
        </PageShell>
      )}

      <PageShell className="pt-0">
        <ProjectCTA heading={service.ctaHeading} body={service.ctaBody} />
      </PageShell>
    </div>
  );
}
