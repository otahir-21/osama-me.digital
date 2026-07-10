import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

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

  return {
    title: `${project.title} | Case Study`,
    description: project.challenge,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.challenge,
      url: `https://osama-me.digital/portfolio/${id}`,
      images: [{ url: project.image ?? "/og-image.png", width: 1200, height: 630, alt: project.title }],
    },
    alternates: { canonical: `https://osama-me.digital/portfolio/${id}` },
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);
  if (!project) notFound();

  const isMobile = project.kind === "mobile";

  return (
    <div>
      <PageShell wide>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300"
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
            {project.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-zinc-50 sm:text-4xl">{project.title}</h1>
          <p className="mt-2 text-zinc-500">{project.client}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
              {getCompanyName(project.company)}
            </span>
            <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
              {project.role}
            </span>
            <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
              {isMobile ? "Mobile" : "Web & API"}
            </span>
          </div>

          {(project.appStore || project.playStore || project.liveUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
                >
                  <AppleIcon />
                  App Store
                  <ExternalLink size={14} />
                </a>
              )}
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
                >
                  <PlayIcon />
                  Google Play
                  <ExternalLink size={14} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
                >
                  Visit website
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <Image
            src={project.image ?? "/og-image.png"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">Challenge</h2>
              <p className="mt-3 leading-relaxed text-zinc-400">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">Solution</h2>
              <p className="mt-3 leading-relaxed text-zinc-400">{project.solution}</p>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-300">Results</h3>
              <ul className="mt-3 space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="text-sm text-zinc-500">• {r}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-300">Tech stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
        >
          Discuss a similar project
        </Link>
      </PageShell>
    </div>
  );
}
