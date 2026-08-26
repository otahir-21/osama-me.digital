"use client";

import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { cn } from "@/lib/utils";

export function LpStickyCta({
  label,
  href = "#estimate",
  eventLocation,
  hideWhenTargetInView = "#estimate",
}: {
  label: string;
  href?: string;
  eventLocation: string;
  /** Hide sticky CTA while the primary form is visible / being filled. */
  hideWhenTargetInView?: string;
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.querySelector(hideWhenTargetInView);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hideWhenTargetInView]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-sm transition-transform duration-200 md:hidden motion-reduce:transition-none",
        hidden ? "pointer-events-none translate-y-full" : "translate-y-0"
      )}
      aria-hidden={hidden}
    >
      <TrackedLink
        href={href}
        event="start_a_project_click"
        eventParams={{ location: eventLocation }}
        tabIndex={hidden ? -1 : undefined}
        className="flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover"
      >
        {label}
      </TrackedLink>
    </div>
  );
}
