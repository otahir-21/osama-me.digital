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
    <section>
      <PageShell wide className="py-20 lg:py-28">
        <SectionHeading
          eyebrow="Selected work"
          title="Flagship case studies"
          subtitle="Three products that show how I work across mobile, commerce and business platforms. The rest of the work lives on the portfolio."
        />

        <div className="mt-16 space-y-10">
          {cases.map(({ project, copy }) => (
            <article
              key={project.id}
              className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-64 order-first border-b border-stone-200 lg:min-h-[22rem] lg:order-last lg:border-b-0 lg:border-l">
                <ProjectCover title={project.title} size="lg" />
              </div>
              <div className="flex flex-col p-8 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-indigo-700">
                  {copy.buyerCategory}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  {project.role} · {companyName(project.company)}
                </p>
                <p className="mt-5 text-base leading-relaxed text-stone-600">{copy.overview}</p>
                <p className="mt-4 text-sm leading-relaxed text-stone-500">
                  {project.results[0]}
                </p>
                <TrackedLink
                  href={`/portfolio/${project.id}`}
                  event="case_study_cta"
                  eventParams={{ location: `home_${project.id}` }}
                  className="mt-8 inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-800"
                >
                  View {project.title.split("–")[0].trim()} case study
                  <ArrowRight className="ml-1.5 size-4" />
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            View all work
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
        </div>
      </PageShell>
    </section>
  );
}
