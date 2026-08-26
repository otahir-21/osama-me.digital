"use client";

import { TrackedLink } from "@/components/seo/TrackedLink";

export function LpStickyCta({
  label,
  href = "#estimate",
  eventLocation,
}: {
  label: string;
  href?: string;
  eventLocation: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-sm md:hidden">
      <TrackedLink
        href={href}
        event="start_a_project_click"
        eventParams={{ location: eventLocation }}
        className="flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover"
      >
        {label}
      </TrackedLink>
    </div>
  );
}
