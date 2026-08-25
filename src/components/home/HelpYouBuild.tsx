import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { SERVICE_PATHS } from "@/data/services-detail";

const offers = [
  {
    number: "01",
    title: "Build a Mobile Product",
    body: "Build a production-ready iOS and Android product from idea to launch — Flutter or React Native, backend APIs, authentication, payments, notifications, analytics, and App Store / Google Play submission.",
    href: SERVICE_PATHS.mobile,
    cta: "Explore Mobile Development",
    eventLocation: "home_mobile",
  },
  {
    number: "02",
    title: "Rescue & Scale an Existing Product",
    body: "Take over, stabilize and improve an existing Flutter, React Native or backend product without unnecessarily rebuilding everything. Built for unfinished apps, bugs, poor performance, unstable architecture, API problems, payment issues, technical debt and developer handover.",
    href: SERVICE_PATHS.rescue,
    cta: "Explore App Rescue",
    eventLocation: "home_rescue",
  },
  {
    number: "03",
    title: "Build Business Software",
    body: "Replace Excel, WhatsApp, manual approvals and fragmented reporting with a CRM, dashboard or operational platform — including Laravel/Node.js APIs, workflow automation, analytics and integrations.",
    href: SERVICE_PATHS.custom,
    cta: "Explore Custom Software",
    eventLocation: "home_custom",
  },
];

export function HelpYouBuild() {
  return (
    <section className="border-b border-zinc-800/80">
      <PageShell wide className="py-16 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you with"
          subtitle="A senior technical partner for new products, inherited codebases, and the operational software around them."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7"
            >
              <p className="text-xs font-medium tracking-[0.18em] text-emerald-400/80">
                {offer.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-50">{offer.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{offer.body}</p>
              <TrackedLink
                href={offer.href}
                event="service_cta"
                eventParams={{ location: offer.eventLocation }}
                className="mt-8 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                {offer.cta}
                <ArrowRight className="ml-1.5 size-4" />
              </TrackedLink>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
