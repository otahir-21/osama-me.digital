import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { getIndustryBySlug, industries } from "@/data/industries";
import { portfolioData } from "@/data/portfolio";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getGraphSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.seoTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const url = absoluteUrl(`/industries/${industry.slug}`);
  const projects = portfolioData.filter((project) => industry.projectIds.includes(project.id));

  return (
    <div>
      <JsonLd
        data={getGraphSchema([
          getWebPageSchema({
            name: industry.h1,
            description: industry.metaDescription,
            url,
            dateModified: industry.updatedAt,
          }),
          getServiceSchema({
            name: industry.title,
            description: industry.metaDescription,
            url,
            serviceType: industry.title,
          }),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries" },
            { name: industry.title, url: `/industries/${industry.slug}` },
          ]),
        ])}
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Industries", href: "/industries" },
            { name: industry.title },
          ]}
        />
        <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {industry.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{industry.intro}</p>
      </PageShell>

      {industry.sections.map((section) => (
        <PageShell key={section.heading} className="pt-0">
          <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{section.body}</p>
          {section.bullets && (
            <ul className="mt-6 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </PageShell>
      ))}

      {projects.length > 0 && (
        <PageShell tone="alt" className="pt-0">
          <h2 className="text-2xl font-semibold text-foreground">Relevant work</h2>
          <ul className="mt-6 space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <Link href={`/portfolio/${project.id}`} className="group block">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.results[0]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </PageShell>
      )}

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">Related services</h2>
        <ul className="mt-6 space-y-3">
          {industry.relatedServiceHrefs.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-primary hover:text-primary-hover">
                {item.label} →
              </Link>
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell className="pt-0">
        <ProjectCTA />
      </PageShell>
    </div>
  );
}
