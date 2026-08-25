import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";

export function Hero() {
  return (
    <section className="bg-background">
      <PageShell className="py-20 lg:py-28">
        <p className="text-sm font-medium text-primary">
          Dubai, UAE · {siteConfig.availability}
        </p>

        <div className="mt-8 flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            {siteConfig.headline}
          </h1>
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border sm:h-32 sm:w-32">
            <Image
              src={siteConfig.profileImage}
              alt={`${siteConfig.name}, ${siteConfig.role} based in ${siteConfig.location}`}
              fill
              priority
              className="object-cover object-top"
              sizes="128px"
            />
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {siteConfig.tagline}
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <TrackedLink
            href="/contact"
            event="start_a_project_click"
            eventParams={{ location: "hero" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Start a Project
          </TrackedLink>
          <TrackedLink
            href="/portfolio"
            event="case_study_cta"
            eventParams={{ location: "hero_view_work" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/20 hover:bg-muted"
          >
            View Selected Work
          </TrackedLink>
        </div>

        <p className="mt-10 text-sm tracking-wide text-muted-foreground">
          {siteConfig.techCredibility.join(" · ")}
        </p>
      </PageShell>
    </section>
  );
}
