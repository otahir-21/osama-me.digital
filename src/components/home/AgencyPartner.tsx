import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { SERVICE_PATHS } from "@/data/services-detail";

export function AgencyPartner() {
  return (
    <section className="bg-ink">
      <PageShell className="py-20 lg:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Need a technical delivery partner?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          I work with digital, branding and marketing agencies that need reliable mobile or
          custom software development without building a full internal engineering team.
        </p>
        <ul className="mt-10 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
          {[
            "White-label delivery",
            "Client-confidential work",
            "Development from approved designs",
            "Backend and API implementation",
            "Mobile development",
            "Technical discovery",
            "QA, deployment and ongoing maintenance",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <TrackedLink
          href={SERVICE_PATHS.partner}
          event="service_cta"
          eventParams={{ location: "home_agency" }}
          className="mt-12 inline-flex min-h-11 items-center rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Discuss a Partnership
        </TrackedLink>
      </PageShell>
    </section>
  );
}
