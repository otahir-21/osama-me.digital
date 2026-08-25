import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { SERVICE_PATHS } from "@/data/services-detail";

export function AgencyPartner() {
  return (
    <section className="border-b border-zinc-800/80">
      <PageShell className="py-16 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Need a technical delivery partner?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I work with digital, branding and marketing agencies that need reliable mobile or
          custom software development without building a full internal engineering team.
        </p>
        <ul className="mt-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
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
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
        <TrackedLink
          href={SERVICE_PATHS.partner}
          event="service_cta"
          eventParams={{ location: "home_agency" }}
          className="mt-10 inline-flex min-h-11 items-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          Discuss a Partnership
        </TrackedLink>
      </PageShell>
    </section>
  );
}
