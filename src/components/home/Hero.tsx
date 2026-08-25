import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";

export function Hero() {
  return (
    <section className="border-b border-zinc-800/80">
      <PageShell className="py-16 lg:py-24">
        <p className="text-sm font-medium text-emerald-400/90">
          Dubai, UAE · {siteConfig.availability}
        </p>

        <div className="mt-6 flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]">
            {siteConfig.headline}
          </h1>
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 sm:h-32 sm:w-32">
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

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <TrackedLink
            href="/contact"
            event="start_a_project_click"
            eventParams={{ location: "hero" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            Start a Project
          </TrackedLink>
          <TrackedLink
            href="/portfolio"
            event="case_study_cta"
            eventParams={{ location: "hero_view_work" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            View Selected Work
          </TrackedLink>
        </div>

        <p className="mt-8 text-sm tracking-wide text-zinc-600">
          {siteConfig.techCredibility.join(" · ")}
        </p>
      </PageShell>
    </section>
  );
}
