import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { serviceNames } from "@/data/internal-links";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study`,
    description: project.challenge,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.challenge,
      url: `https://osama-me.digital/portfolio/${id}`,
      images: [{ url: project.image ?? "/og-image.png", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description: project.challenge,
    },
    alternates: {
      canonical: `https://osama-me.digital/portfolio/${id}`,
    },
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);

  if (!project) notFound();

  const imageSrc = project.image ?? "/og-image.png";
  const isMobile = (project as any).kind === "mobile";

  return (
    <div className="min-h-screen bg-zinc-50 pt-24">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-zinc-900">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/portfolio" className="hover:text-zinc-900">
                Portfolio
              </Link>
            </li>
            <li>/</li>
            <li className="text-zinc-700">{project.title}</li>
          </ol>
        </nav>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            eyebrow={project.category}
            title={project.title}
            subtitle={project.client}
          />
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
              {isMobile ? "Mobile Application" : "Web / Backend Platform"}
            </span>
            {Array.isArray((project as any).services) &&
              ((project as any).services as string[]).map((serviceId) => (
                <span
                  key={serviceId}
                  className="rounded-full border border-zinc-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                >
                  {serviceNames[serviceId] ?? serviceId}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="aspect-video w-full overflow-hidden bg-zinc-100 relative">
            <Image
              src={imageSrc}
              alt={`${project.title} — ${project.category} project by Osama Tahir, Dubai web developer`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>

          <div className="border-t border-zinc-200 p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-500">
                    Project Overview
                  </h2>
                  <p className="mt-3 text-zinc-700">
                    {project.client} partnered with me to deliver a{" "}
                    {isMobile ? "production-ready mobile application" : "scalable web and backend solution"}{" "}
                    using modern tools and clean architecture. Below is a breakdown of the initial
                    problem, how we approached the build, and the business results achieved.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">The Challenge</h3>
                    <p className="mt-2 text-zinc-700">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">The Solution</h3>
                    <p className="mt-2 text-zinc-700">{project.solution}</p>
                  </div>
                </div>
              </div>

              <aside className="space-y-8 rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Project Snapshot</h3>
                  <dl className="mt-3 space-y-2 text-sm text-zinc-700">
                    <div className="flex justify-between gap-4">
                      <dt className="text-zinc-500">Client</dt>
                      <dd className="text-right">{project.client}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-zinc-500">Type</dt>
                      <dd className="text-right">
                        {isMobile ? "Mobile app (Flutter)" : "Web & backend"}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-zinc-500">Services</dt>
                      <dd className="text-right">
                        {Array.isArray((project as any).services)
                          ? ((project as any).services as string[])
                              .map((id) => serviceNames[id] ?? id)
                              .join(", ")
                          : "—"}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Results</h3>
                  <ul className="mt-2 space-y-1">
                    {project.results.map((r) => (
                      <li key={r} className="text-sm text-amber-600">
                        • {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Tech Stack</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/portfolio"
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            ← Back to all case studies
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-400"
          >
            Discuss a Similar Project
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}


