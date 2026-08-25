import { ArrowRight, LayoutDashboard, Smartphone, Wrench } from "lucide-react";
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
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Rescue & Scale an Existing Product",
    body: "Take over, stabilize and improve an existing Flutter, React Native or backend product without unnecessarily rebuilding everything. Built for unfinished apps, bugs, poor performance, unstable architecture, API problems, payment issues, technical debt and developer handover.",
    href: SERVICE_PATHS.rescue,
    cta: "Explore App Rescue",
    eventLocation: "home_rescue",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Build Business Software",
    body: "Replace Excel, WhatsApp, manual approvals and fragmented reporting with a CRM, dashboard or operational platform — including Laravel/Node.js APIs, workflow automation, analytics and integrations.",
    href: SERVICE_PATHS.custom,
    cta: "Explore Custom Software",
    eventLocation: "home_custom",
    icon: LayoutDashboard,
  },
];

export function HelpYouBuild() {
  return (
    <section className="bg-background">
      <PageShell wide className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you with"
          subtitle="A senior technical partner for new products, inherited codebases, and the operational software around them."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)] focus-within:border-foreground/15 focus-within:shadow-[0_12px_40px_rgba(17,24,39,0.06)] lg:p-9"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                <offer.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="mt-6 text-xs font-medium tracking-[0.18em] text-primary">
                {offer.number}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                {offer.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                {offer.body}
              </p>
              <TrackedLink
                href={offer.href}
                event="service_cta"
                eventParams={{ location: offer.eventLocation }}
                className="mt-8 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary-hover"
              >
                {offer.cta}
                <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
              </TrackedLink>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
