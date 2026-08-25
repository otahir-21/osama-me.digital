import { TrackedAnchor, TrackedLink } from "@/components/seo/TrackedLink";
import { siteConfig } from "@/data/site-config";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectCTA({
  heading = "Have a product to build or improve?",
  body = "Tell me what you are working on and I will tell you how I can help.",
  variant = "card",
}: {
  heading?: string;
  body?: string;
  variant?: "card" | "flush";
}) {
  return (
    <section
      className={cn(
        variant === "flush"
          ? "py-4"
          : "rounded-2xl border border-stone-800 bg-stone-900 px-6 py-12 sm:px-10"
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight text-stone-50 sm:text-3xl">{heading}</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400">{body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <TrackedLink
          href="/contact"
          event="start_a_project_click"
          eventParams={{ location: "page_cta" }}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
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
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-stone-600 px-5 py-2.5 text-sm font-medium text-stone-100 transition-colors hover:border-stone-400 hover:bg-stone-800"
        >
          Schedule a Call
        </TrackedAnchor>
      </div>
    </section>
  );
}
