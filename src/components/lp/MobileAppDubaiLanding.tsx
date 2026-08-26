import { PageShell } from "@/components/layout/PageShell";
import { AttributionCapture } from "@/components/lp/AttributionCapture";
import { LpFaq } from "@/components/lp/LpFaq";
import { LpFinalCta } from "@/components/lp/LpFinalCta";
import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import {
  LpInquiryForm,
  MOBILE_PROJECT_TYPES,
} from "@/components/lp/LpInquiryForm";
import { LpProjectProof } from "@/components/lp/LpProjectProof";
import { LpProofStrip } from "@/components/lp/LpProofStrip";
import { LpStickyCta } from "@/components/lp/LpStickyCta";

const LANDING_PATH = "/lp/mobile-app-development-dubai";

const CAPABILITIES = [
  {
    title: "New Mobile App",
    items: [
      "iOS + Android",
      "Flutter / React Native",
      "Backend / API",
      "Authentication",
      "Notifications",
      "Analytics",
      "Launch",
    ],
  },
  {
    title: "MVP Development",
    items: [
      "Scope validation",
      "Technical architecture",
      "Core features",
      "Production-ready foundation",
      "Launch",
    ],
  },
  {
    title: "Existing App Development",
    items: [
      "Feature work",
      "Bug fixing",
      "Performance",
      "API issues",
      "Payments",
      "Maintenance",
    ],
  },
  {
    title: "Mobile Commerce & Business Apps",
    items: [
      "E-commerce",
      "Booking",
      "Marketplaces",
      "Membership",
      "SaaS / mobile products",
      "Operational apps",
    ],
  },
] as const;

const WHY_POINTS = [
  {
    title: "End-to-End Ownership",
    body: "Architecture through production — not only screens.",
  },
  {
    title: "Mobile + Backend",
    body: "App plus APIs and the infrastructure that keeps them running.",
  },
  {
    title: "Payments & Integrations",
    body: "Production integration experience for payments and third-party systems.",
  },
  {
    title: "Production Launch",
    body: "Testing, deployment, and App Store / Google Play submission.",
  },
] as const;

const PROCESS = [
  { title: "Discuss", desc: "Clarify goals, platforms, constraints, and what already exists." },
  { title: "Scope", desc: "Agree architecture, milestones, and a delivery sequence that can ship." },
  { title: "Build", desc: "Implement in reviewable slices with working iOS and Android builds." },
  { title: "Launch", desc: "Harden, submit to stores, and support the first production weeks." },
] as const;

const FAQS = [
  {
    question: "How much does it cost to build a mobile app in Dubai?",
    answer:
      "There is no honest fixed price. Cost depends on scope, platforms, backend needs, payments, integrations, and whether you are starting from zero or extending an existing product. Orientation bands for production iOS and Android work typically start around AED 40,000 for a narrow MVP and climb for realtime, subscriptions, or multi-role products. The useful next step is a requirements discussion so the estimate matches the actual job.",
  },
  {
    question: "Do you build for both iOS and Android?",
    answer:
      "Yes. Most products are cross-platform Flutter or React Native apps so one codebase serves both stores. Native-only work is only recommended when the product genuinely needs it.",
  },
  {
    question: "Can you take over an existing app?",
    answer:
      "Yes. Most rescue and extension work is stabilize-and-extend, not a default rewrite. I need repository and store access, then a written triage. New features wait until the product installs from a clean path.",
  },
  {
    question: "Can you build the backend as well?",
    answer:
      "Yes. I regularly implement Laravel and Node.js APIs, authentication, payments, and related admin surfaces alongside the mobile app so delivery is not blocked on a separate backend vendor.",
  },
  {
    question: "Can you help publish the app?",
    answer:
      "Yes. Store listing details, privacy disclosures, test accounts, and submission can be part of a launch engagement. You keep the Apple and Google developer accounts.",
  },
] as const;

const PROOF_PROJECTS = [
  {
    id: "vyooo-creator-platform",
    displayTitle: "VyooO",
    category: "Mobile App · Creator Platform",
  },
  {
    id: "royal-spirit-ecommerce",
    displayTitle: "Royal Spirit",
    category: "Mobile Commerce",
  },
  {
    id: "24digi-health-super-app",
    displayTitle: "24Digi",
    category: "Mobile App · Health / Fitness",
  },
] as const;

const LIFECYCLE = [
  "Product architecture",
  "Mobile frontend",
  "Backend APIs",
  "Authentication",
  "Payments",
  "Notifications",
  "Analytics",
  "Cloud deployment",
  "App Store / Play Store launch",
] as const;

export function MobileAppDubaiLanding() {
  return (
    <div className="pb-20 md:pb-0">
      <AttributionCapture />
      <LpHeader eventLocation="lp_mobile_header" />

      <PageShell wide className="py-10 lg:py-14">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Mobile App Development · Dubai, UAE
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Build Your Mobile App With a Senior Dubai-Based Developer
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From idea and architecture to iOS, Android, backend APIs, payments and app-store
              launch — work directly with a senior developer who can take ownership of the complete
              product.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                6+ years production experience
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Dubai-based
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Mobile + backend + payments + launch
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Flutter · React Native · Backend · Payments · App Store & Google Play
            </p>
            <p className="mt-2 text-sm text-muted-foreground">VyooO · Royal Spirit · 24Digi</p>
          </div>

          <LpInquiryForm
            service="mobile_app_development"
            landingPagePath={LANDING_PATH}
            projectTypes={MOBILE_PROJECT_TYPES}
            step1ButtonLabel="Get a Project Estimate →"
            leadLabel="Mobile App"
          />
        </div>
      </PageShell>

      <LpProofStrip />

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          From app idea to production — without coordinating multiple developers.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Mobile products often need more than a UI layer. Architecture, APIs, payments, releases
          and store submission usually span several specialists. I work as one senior technical
          partner across that delivery lifecycle.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LIFECYCLE.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell wide className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          What I can build
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((block) => (
            <article key={block.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{block.title}</h3>
              <ul className="mt-5 space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell wide tone="alt" className="pt-0">
        <LpProjectProof
          heading="Mobile project proof"
          intro="Real mobile products from the portfolio — with verified roles and case-study detail."
          projects={PROOF_PROJECTS}
          eventPrefix="lp_mobile"
        />
      </PageShell>

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Why work directly with Osama
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {WHY_POINTS.map((point) => (
            <article key={point.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Process</h2>
        <ol className="mt-8 space-y-6">
          {PROCESS.map((step, index) => (
            <li key={step.title} className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6">
              <p className="text-sm font-medium text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </PageShell>

      <PageShell tone="alt" className="pt-0">
        <LpFaq items={FAQS} />
      </PageShell>

      <PageShell className="pt-0">
        <LpFinalCta
          heading="Have an app you want to build?"
          body="Share your requirements and I'll help you determine the right technical approach."
          primaryLabel="Get a Project Estimate →"
          eventLocation="lp_mobile_final"
        />
      </PageShell>

      <LpFooter />
      <LpStickyCta label="Get App Estimate" eventLocation="lp_mobile_sticky" />
    </div>
  );
}
