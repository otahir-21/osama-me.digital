import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";

export function Hero() {
  return (
    <section className="bg-background">
      <PageShell wide className="py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-primary">
              Dubai, UAE · {siteConfig.availability}
            </p>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem]">
              Mobile App & Full-Stack Developer in Dubai
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-[1.125rem]">
              I build and improve Flutter and React Native apps, backend APIs, payments and
              digital platforms for UAE and GCC businesses — from architecture through store
              launch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <p className="mt-8 text-sm tracking-wide text-muted-foreground">
              {siteConfig.techCredibility.join(" · ")}
            </p>
          </div>

          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-[160px] overflow-hidden rounded-2xl bg-surface-alt shadow-sm ring-1 ring-border sm:w-[176px] lg:w-[200px]">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name}, ${siteConfig.role} based in ${siteConfig.location}`}
                fill
                priority
                className="object-cover object-[50%_12%]"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 176px, 160px"
              />
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
