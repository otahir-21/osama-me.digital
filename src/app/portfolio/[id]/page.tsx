import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { getCaseStudy } from "@/data/case-studies";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getCaseStudySchema,
  getGraphSchema,
  getWebPageSchema,
} from "@/lib/schema";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
  </svg>
);

export const dynamic = "force-static";
export const revalidate = false;

interface PageProps {
  params: Promise<{ id: string }>;
}

function getCompanyName(companyId: string) {
  return siteConfig.companies.find((c) => c.id === companyId)?.name ?? companyId;
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);
  if (!project) return {};
  const copy = getCaseStudy(id);
  return buildMetadata({
    title: copy?.seoTitle ?? `${project.title} | Case Study | Osama Tahir`,
    description: copy?.seoDescription ?? project.challenge,
    path: `/portfolio/${id}`,
  });
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);
  if (!project) notFound();

  const copy = getCaseStudy(id);
  const companyName = getCompanyName(project.company);
  const url = absoluteUrl(`/portfolio/${id}`);

  const schema = getGraphSchema([
    getWebPageSchema({
      name: project.title,
      description: copy?.seoDescription ?? project.challenge,
      url,
    }),
    getCaseStudySchema({
      name: project.title,
      description: copy?.overview ?? project.challenge,
      url,
      keywords: project.techStack,
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Work", url: "/portfolio" },
      { name: project.title, url: `/portfolio/${id}` },
    ]),
  ]);

  return (
    <div>
      <JsonLd data={schema} />
      <PageShell wide>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/portfolio" },
            { name: project.title },
          ]}
        />

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-indigo-700">
          {copy?.buyerCategory ?? project.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-800 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-stone-500">
          {project.client} · {project.role} · {companyName}
        </p>

        {(project.appStore || project.playStore || project.liveUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <AppleIcon />
                View on the App Store
                <ExternalLink size={14} />
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:border-stone-400"
              >
                <PlayIcon />
                View on Google Play
                <ExternalLink size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:border-stone-400"
              >
                Visit live website
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}

        <figure className="relative mt-12 aspect-video overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          <ProjectCover title={project.title} size="lg" />
          <figcaption className="sr-only">
            Visual cover for the {project.title} case study
          </figcaption>
        </figure>

        <div className="mt-14 max-w-3xl space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-stone-800">Overview</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {copy?.overview ?? project.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800">The Problem</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {copy?.problem ?? project.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800">My Role</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {copy?.roleDetail ?? `${project.role} at ${companyName}.`}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800">Technical Challenge</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {copy?.technicalChallenge ?? project.solution}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800">Solution</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {copy?.solution ?? project.solution}
            </p>
          </section>

          {copy?.keyFeatures?.length ? (
            <section>
              <h2 className="text-2xl font-semibold text-stone-800">Key Features</h2>
              <ul className="mt-4 space-y-2">
                {copy.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-stone-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <h2 className="text-2xl font-semibold text-stone-800">Results / Outcome</h2>
            <ul className="mt-4 space-y-2">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3 text-stone-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                  {result}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800">Technology</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {copy?.relatedServiceHrefs?.length ? (
            <section>
              <h2 className="text-2xl font-semibold text-stone-800">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {copy.relatedServiceHrefs.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-indigo-700 hover:text-indigo-800"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="mt-16">
          <ProjectCTA
            heading="Building something similar? Let's discuss your project."
            body="If this problem looks like yours, send the current state of the product and I will tell you how I would approach it."
          />
        </div>

        <Link
          href="/portfolio"
          className="mt-10 inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700"
        >
          <ArrowLeft size={16} />
          Back to selected work
        </Link>
      </PageShell>
    </div>
  );
}
