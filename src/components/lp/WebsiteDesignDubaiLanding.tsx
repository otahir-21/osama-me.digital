import { PageShell } from "@/components/layout/PageShell";
import { AttributionCapture } from "@/components/lp/AttributionCapture";
import { LpFaq } from "@/components/lp/LpFaq";
import { LpFinalCta } from "@/components/lp/LpFinalCta";
import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import {
  LpInquiryForm,
  WEBSITE_PROJECT_TYPES,
} from "@/components/lp/LpInquiryForm";
import { LpProjectProof } from "@/components/lp/LpProjectProof";
import { LpProofStrip } from "@/components/lp/LpProofStrip";
import { LpStickyCta } from "@/components/lp/LpStickyCta";

const LANDING_PATH = "/lp/website-design-development-dubai";

const PROBLEMS = [
  "Outdated design that no longer represents the business",
  "Weak mobile experience on the devices most visitors use",
  "Slow loading that loses attention before the offer is read",
  "Poor lead generation despite having a website",
  "Unclear messaging and weak calls to action",
  "Broken or disconnected forms",
  "Difficult updates that always need a developer",
  "Poor SEO foundations that make the site hard to crawl",
  "Business systems that are disconnected from the website",
] as const;

const OFFERINGS = [
  {
    title: "Business Websites",
    forWho:
      "Professional services, clinics, real estate, agencies, local businesses and startups.",
    capabilities: [
      "Responsive development",
      "Lead forms",
      "WhatsApp",
      "Analytics",
      "CMS where needed",
      "SEO foundations",
      "Performance optimization",
    ],
  },
  {
    title: "Landing Pages",
    forWho: "Google Ads, campaigns, product launches and lead generation.",
    capabilities: [
      "Message match",
      "Clear CTA",
      "Conversion tracking",
      "Speed",
      "Mobile UX",
    ],
  },
  {
    title: "E-commerce Websites",
    forWho: "Product businesses that need catalogue, checkout and payment flows.",
    capabilities: [
      "Product catalogue",
      "Checkout",
      "Payments",
      "Account / order flows",
      "Analytics",
      "Integrations",
    ],
  },
  {
    title: "Custom Web Platforms",
    forWho:
      "Businesses that need more than a marketing site — operational software and portals.",
    capabilities: [
      "Dashboards",
      "Booking systems",
      "Customer portals",
      "Admin systems",
      "SaaS products",
      "CRM interfaces",
      "API integrations",
    ],
  },
] as const;

const WHY_POINTS = [
  {
    title: "Design + Engineering",
    body: "Not only visual design — production implementation that ships and stays maintainable.",
  },
  {
    title: "Full-Stack Capability",
    body: "Frontend, backend, APIs and integrations in the same delivery conversation.",
  },
  {
    title: "Performance & SEO Foundations",
    body: "Fast, crawlable and technically sound implementation from day one.",
  },
  {
    title: "Business Integrations",
    body: "Forms, payments, analytics, APIs and workflows connected to how you operate.",
  },
] as const;

const PROCESS = [
  { title: "Discovery", desc: "Clarify goals, audience, content and what already exists." },
  { title: "Structure", desc: "Agree information architecture, pages and conversion paths." },
  { title: "Design / Build", desc: "Implement the site or platform in reviewable slices." },
  { title: "QA", desc: "Test mobile, desktop, forms, performance and browser compatibility." },
  { title: "Launch", desc: "Deploy, wire analytics, and support the first production fixes." },
] as const;

const FAQS = [
  {
    question: "How much does a business website cost in Dubai?",
    answer:
      "There is no honest fixed price. Cost depends on page count, whether the design is custom, whether you need a CMS, e-commerce, third-party integrations, and any custom functionality such as booking or a client portal. The useful next step is to discuss the requirements so the estimate matches the actual job.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Some sites need structured improvement: performance, mobile usability, forms, SEO foundations and content structure. Others need a rebuild because the current stack cannot be maintained at a reasonable cost. I start from the live site and the business goal, not from a default redesign pitch.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Technical and on-page SEO foundations can be included in the website build: semantic HTML, metadata, canonicals, sitemap, robots, structured data where appropriate, internal linking, crawlable content and image optimization. Ongoing SEO — content programmes and link-building — is a separate growth activity, not a ranking guarantee baked into development.",
  },
  {
    question: "Can you build e-commerce websites?",
    answer:
      "Yes, where the product needs a catalogue, checkout, payments, analytics and third-party integrations. Platform choice follows the catalogue, payment requirements and who will maintain the store — I do not default to a single theme or marketplace.",
  },
  {
    question: "Can you maintain the website after launch?",
    answer:
      "Yes. Ongoing maintenance, dependency updates, content help and new features can be arranged after launch. I will say when a change is a small fix versus when it is a new project.",
  },
  {
    question: "Can you work with our existing designer or agency?",
    answer:
      "Yes. I implement from approved Figma or design-system files, work white-label when needed, and can stay behind the agency or join client calls. You keep the client relationship; I take technical ownership of the agreed website or platform scope.",
  },
] as const;

const PROOF_PROJECTS = [
  {
    id: "ultra-smile-clinic-dubai",
    displayTitle: "Ultra Smile Clinic",
    category: "Healthcare Website · Dubai",
  },
  {
    id: "ivpatch-wellness-ecommerce",
    displayTitle: "IVPATCH",
    category: "E-commerce / Web Platform",
  },
  {
    id: "wurkspace-ai-business-os",
    displayTitle: "Wurkspace",
    category: "Custom Web Platform",
  },
] as const;

export function WebsiteDesignDubaiLanding() {
  return (
    <div className="pb-20 md:pb-0">
      <AttributionCapture />
      <LpHeader eventLocation="lp_website_header" />

      <PageShell wide className="py-10 lg:py-14">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Website Design & Development · Dubai, UAE
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Build a Website That Looks Professional and Generates Business
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and develop fast, modern websites for Dubai businesses — from company
              websites and landing pages to e-commerce and custom web platforms.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Work directly with a senior full-stack developer across design implementation,
              frontend, backend, integrations, performance and launch.
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
                Design + engineering + integrations + launch
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Business Websites · Landing Pages · E-commerce · Web Platforms · SEO Foundations
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Ultra Smile · IVPATCH · Wurkspace</p>
          </div>

          <LpInquiryForm
            service="website_design_development"
            landingPagePath={LANDING_PATH}
            projectTypes={WEBSITE_PROJECT_TYPES}
            step1ButtonLabel="Get a Website Estimate →"
            leadLabel="Website"
          />
        </div>
      </PageShell>

      <LpProofStrip />

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Your website should do more than look good.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A polished homepage is not the same as a working acquisition channel. Many Dubai
          businesses are paying for a site that cannot generate inquiries, cannot be updated easily,
          and is not set up for search or campaign traffic.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {PROBLEMS.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell wide className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          What I build
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Website work here is production software: company sites, campaign pages, commerce and
          platforms — not a cheap theme with the logo swapped.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {OFFERINGS.map((offer) => (
            <article key={offer.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.forWho}</p>
              <ul className="mt-5 space-y-2">
                {offer.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell wide tone="alt" className="pt-0">
        <LpProjectProof
          heading="Website project proof"
          intro="Verified web and platform work from the portfolio — clinic, commerce and a more advanced business platform."
          projects={PROOF_PROJECTS}
          eventPrefix="lp_website"
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
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Website process
        </h2>
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
          heading="Planning a new website or replacing an outdated one?"
          body="Share your requirements and I'll help you determine the right approach for your business."
          primaryLabel="Get a Website Estimate →"
          eventLocation="lp_website_final"
        />
      </PageShell>

      <LpFooter />
      <LpStickyCta label="Get Website Estimate" eventLocation="lp_website_sticky" />
    </div>
  );
}
