import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { caseStudyCopy } from "@/data/case-studies";
import { portfolioData } from "@/data/portfolio";

export interface LpProofProject {
  id: string;
  displayTitle: string;
  category: string;
}

export function LpProjectProof({
  heading,
  intro,
  projects,
  eventPrefix,
}: {
  heading: string;
  intro: string;
  projects: readonly LpProofProject[];
  eventPrefix: string;
}) {
  const items = projects
    .map((proof) => {
      const project = portfolioData.find((item) => item.id === proof.id);
      const copy = caseStudyCopy[proof.id];
      return project && copy ? { proof, project, copy } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{heading}</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      <div className="mt-8 space-y-6">
        {items.map(({ proof, project, copy }, index) => (
          <article
            key={project.id}
            className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)] lg:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="relative min-h-48 border-b border-border lg:min-h-[18rem] lg:border-b-0 lg:border-r">
              <ProjectCover
                title={project.title}
                image={project.coverComposition ? project.image : undefined}
                alt={project.imageAlt}
                composition={project.coverComposition}
                size="sm"
                priority={index === 0}
              />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {proof.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {proof.displayTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {copy.cardDescription ?? copy.overview}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Role:</span> {project.role}
              </p>
              {project.techStack.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <TrackedLink
                  href={`/portfolio/${project.id}`}
                  event="case_study_cta"
                  eventParams={{ location: `${eventPrefix}_${project.id}` }}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
                >
                  View case study
                  <ArrowRight className="ml-1.5 size-4" />
                </TrackedLink>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {project.liveLinkLabel ?? "Visit website"}
                    <ArrowUpRight className="ml-1 size-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
