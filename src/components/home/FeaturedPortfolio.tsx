import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { portfolioData } from "@/data/portfolio";
import { caseStudyCopy } from "@/data/case-studies";
import { siteConfig } from "@/data/site-config";

const FEATURED = [
  "vyooo-creator-platform",
  "wurkspace-ai-business-os",
  "royal-spirit-ecommerce",
] as const;

function companyName(id: string) {
  if (!id) return "";
  return siteConfig.companies.find((c) => c.id === id)?.name ?? "";
}

export function FeaturedPortfolio() {
  const cases = FEATURED.map((id) => {
    const project = portfolioData.find((p) => p.id === id);
    const copy = caseStudyCopy[id];
    return project && copy ? { project, copy } : null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <section className="bg-surface-alt">
      <PageShell wide className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Selected work"
          title="Flagship case studies"
          subtitle="Three products that show how I work across mobile, commerce and business platforms. The rest of the work lives on the portfolio."
        />

        <div className="mt-12 space-y-8">
          {cases.map(({ project, copy }) => (
            <article
              key={project.id}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)] lg:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="relative min-h-56 h-full order-first border-b border-border lg:min-h-[26rem] lg:order-last lg:border-b-0 lg:border-l">
                <ProjectCover
                  title={project.title}
                  image={project.coverComposition ? project.image : undefined}
                  alt={project.imageAlt}
                  composition={project.coverComposition}
                  size="lg"
                  priority={project.id === "vyooo-creator-platform"}
                />
              </div>
              <div className="flex flex-col p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {copy.buyerCategory}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-[1.75rem]">
                  {project.title}
                </h3>
                {companyName(project.company) ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {companyName(project.company)}
                  </p>
                ) : project.location ? (
                  <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                ) : null}
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {copy.cardDescription ?? copy.overview}
                </p>
                {project.results[0] ? (
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {project.results[0]}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <TrackedLink
                    href={`/portfolio/${project.id}`}
                    event="case_study_cta"
                    eventParams={{ location: `home_${project.id}` }}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                  >
                    View Case Study
                    <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
                  </TrackedLink>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {project.liveLinkLabel ?? "Live Product"}
                      <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
          >
            View all work
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
        </div>
      </PageShell>
    </section>
  );
}
