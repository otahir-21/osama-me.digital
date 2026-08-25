import { TrackedAnchor, TrackedLink } from "@/components/seo/TrackedLink";
import { siteConfig } from "@/data/site-config";
import { ArrowRight } from "lucide-react";

export function ProjectCTA({
  heading = "Have a product to build or improve?",
  body = "Tell me what you are working on and I will tell you how I can help.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-10 sm:px-10">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400">{body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <TrackedLink
          href="/contact"
          event="start_a_project_click"
          eventParams={{ location: "page_cta" }}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          Start a Project
          <ArrowRight className="ml-2 size-4" />
        </TrackedLink>
        <TrackedAnchor
          href={siteConfig.calendly}
          target="_blank"
          rel="noopener noreferrer"
          event="schedule_a_call_click"
          eventParams={{ location: "page_cta" }}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
        >
          Schedule a Call
        </TrackedAnchor>
      </div>
    </section>
  );
}
