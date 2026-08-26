import { siteConfig } from "@/data/site-config";
import { TrackedAnchor, TrackedLink } from "@/components/seo/TrackedLink";

export function LpFinalCta({
  heading,
  body,
  primaryLabel,
  eventLocation,
}: {
  heading: string;
  body: string;
  primaryLabel: string;
  eventLocation: string;
}) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="rounded-2xl border border-white/10 bg-ink px-6 py-10 sm:px-10">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{heading}</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{body}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <TrackedLink
          href="#estimate"
          event="start_a_project_click"
          eventParams={{ location: eventLocation }}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          {primaryLabel}
        </TrackedLink>
        <TrackedAnchor
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          event="whatsapp_click"
          eventParams={{ location: eventLocation }}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-card/10"
        >
          WhatsApp Osama
        </TrackedAnchor>
      </div>
    </section>
  );
}
