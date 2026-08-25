import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { portfolioData } from "@/data/portfolio";
import { caseStudyCopy } from "@/data/case-studies";
import { siteConfig } from "@/data/site-config";

const FEATURED = [
  "vyooo-creator-platform",
  "metatech-flutter-web-crm",
  "royal-spirit-ecommerce",
] as const;

function companyName(id: string) {
  return siteConfig.companies.find((c) => c.id === id)?.name ?? id;
}

export function FeaturedPortfolio() {
  const cases = FEATURED.map((id) => {
    const project = portfolioData.find((p) => p.id === id);
    const copy = caseStudyCopy[id];
    return project && copy ? { project, copy } : null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <section className="border-b border-zinc-800/80">
      <PageShell wide className="py-16 lg:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Flagship case studies"
          subtitle="Three products that show how I work across mobile, commerce and business platforms. The rest of the work lives on the portfolio."
        />

        <div className="mt-14 space-y-8">
          {cases.map(({ project, copy }) => (
            <article
              key={project.id}
              className="grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="flex flex-col p-7 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-400/85">
                  {copy.buyerCategory}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  {project.role} · {companyName(project.company)}
                </p>
                <p className="mt-5 text-base leading-relaxed text-zinc-300">{copy.overview}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  {project.results[0]}
                </p>
                <TrackedLink
                  href={`/portfolio/${project.id}`}
                  event="case_study_cta"
                  eventParams={{ location: `home_${project.id}` }}
                  className="mt-8 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  View {project.title.split("–")[0].trim()} case study
                  <ArrowRight className="ml-1.5 size-4" />
                </TrackedLink>
              </div>
              <div className="relative min-h-56 border-t border-zinc-800 lg:min-h-full lg:border-l lg:border-t-0">
                <ProjectCover title={project.title} size="lg" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-zinc-200 hover:text-white"
          >
            View all work
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
        </div>
      </PageShell>
    </section>
  );
}
