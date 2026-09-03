import Link from "next/link";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { Logo } from "@/components/brand/Logo";

export function LpHeader({
  ctaHref = "#estimate",
  eventLocation,
  showCta = true,
}: {
  ctaHref?: string;
  eventLocation: string;
  showCta?: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link href="/" aria-label="Osama Tahir home" className="inline-flex shrink-0 items-center text-foreground">
            <Logo />
          </Link>
          <span className="hidden text-sm text-muted-foreground sm:inline" aria-hidden>
            ·
          </span>
          <span className="truncate text-sm text-muted-foreground">Dubai, UAE</span>
        </div>

        {showCta ? (
          <TrackedLink
            href={ctaHref}
            event="start_a_project_click"
            eventParams={{ location: eventLocation }}
            className="inline-flex min-h-11 shrink-0 items-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:px-4"
          >
            <span className="sm:hidden">Discuss Project</span>
            <span className="hidden sm:inline">Discuss Your Project</span>
          </TrackedLink>
        ) : null}
      </div>
    </header>
  );
}
