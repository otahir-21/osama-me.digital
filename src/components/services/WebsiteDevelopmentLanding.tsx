import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { PageShell } from "@/components/layout/PageShell";
import { TrackedLink } from "@/components/seo/TrackedLink";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { SERVICE_PATHS, servicesDetail, type ServiceDetailItem } from "@/data/services-detail";
import { portfolioData } from "@/data/portfolio";
import { caseStudyCopy } from "@/data/case-studies";
import {
  getBreadcrumbSchema,
  getGraphSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

const OFFERINGS = [
  {
    title: "Business Websites",
    forWho:
      "Consultancies, professional services, clinics, real estate, agencies and local UAE businesses.",
    capabilities: [
      "Responsive design",
      "Lead-generation forms",
      "WhatsApp integration",
      "Analytics",
      "Technical SEO",
      "CMS / content management",
      "Performance optimization",
    ],
  },
  {
    title: "Landing Pages",
    forWho: "Google Ads, product launches, campaigns, lead generation and specific services.",
    capabilities: [
      "Clear conversion path",
      "Strong call to action",
      "Fast loading",
      "Mobile usability",
      "Conversion tracking",
    ],
  },
  {
    title: "E-commerce Websites",
    forWho: "Product businesses that need a storefront visitors can browse and buy from.",
    capabilities: [
      "Product catalogue",
      "Checkout",
      "Payments",
      "Account and order flows where needed",
      "Analytics",
      "Third-party integrations",
    ],
  },
  {
    title: "Custom Web Platforms",
    forWho:
      "Businesses that need more than a marketing site — dashboards, portals and operational software.",
    capabilities: [
      "Dashboards",
      "Customer portals",
      "Booking systems",
      "Admin systems",
      "CRM interfaces",
      "Membership platforms",
      "API integrations",
      "SaaS products",
    ],
  },
] as const;

const PROBLEMS = [
  "Outdated design that no longer represents the business",
  "Poor mobile experience on the devices most visitors use",
  "Slow loading that loses attention before the offer is read",
  "Weak SEO foundations that make the site hard to crawl",
  "Low inquiry and conversion rates despite having a website",
  "Difficult content updates that always need a developer",
  "Forms and systems that are disconnected from the rest of the business",
  "Unreliable developers and expensive rebuilds a year later",
  "Websites that look finished but do not support business goals",
];

const STACK = [
  "React",
  "Flutter Web",
  "WordPress",
  "Node.js",
  "Laravel",
  "REST APIs",
  "Firebase",
  "AWS",
  "Vercel",
  "Stripe / payments",
];

const PROJECT_PROOF = [
  {
    id: "ultra-smile-clinic-dubai",
    title: "Ultra Smile Clinic",
    category: "Healthcare Website · Dubai",
  },
  {
    id: "ivpatch-wellness-ecommerce",
    title: "IVPATCH",
    category: "E-commerce / Consumer Wellness",
  },
  {
    id: "wurkspace-ai-business-os",
    title: "Wurkspace",
    category: "Custom Web Platform",
  },
] as const;

export function WebsiteDevelopmentLanding({ service }: { service: ServiceDetailItem }) {
  const url = absoluteUrl(`/services/${service.slug}`);
  const relatedServices = servicesDetail.filter((item) =>
    service.relatedSlugs.includes(item.slug)
  );
  const proofProjects = PROJECT_PROOF.map((proof) => {
    const project = portfolioData.find((item) => item.id === proof.id);
    const copy = caseStudyCopy[proof.id];
    return project && copy ? { proof, project, copy } : null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  const schema = getGraphSchema([
    getWebPageSchema({
      name: service.h1,
      description: service.metaDescription,
      url,
      dateModified: service.updatedAt,
    }),
    getServiceSchema({
      name: "Website Development",
      description: service.description,
      url,
      serviceType: service.serviceType,
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.hubTitle, url: `/services/${service.slug}` },
    ]),
  ]);

  return (
    <div>
      <JsonLd data={schema} />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.hubTitle },
          ]}
        />
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Website Development · Dubai, UAE
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {service.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I build fast, modern and conversion-focused websites for UAE businesses — from company
          websites and landing pages to e-commerce and custom web platforms.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          You work directly with a senior full-stack developer across strategy, frontend, backend,
          integrations, performance, SEO foundations and production launch.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <TrackedLink
            href="/contact"
            event="start_a_project_click"
            eventParams={{ location: `${service.slug}_hero` }}
            className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Discuss Your Website
          </TrackedLink>
          <a
            href="#website-projects"
            className="inline-flex min-h-11 items-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/20"
          >
            View Website Projects
          </a>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Business Websites · E-commerce · Web Platforms · APIs · SEO Foundations
        </p>
      </PageShell>

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">
          Your website should do more than look good.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A polished homepage is not the same as a working acquisition channel. Many Dubai
          businesses are paying for a site that cannot generate inquiries, cannot be updated, and
          cannot be found — then paying again for a rebuild.
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
        <h2 className="text-2xl font-semibold text-foreground">What I build</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Website work here is production software: company sites, campaign pages, commerce and
          platforms — not a theme with the logo swapped.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {OFFERINGS.map((offer) => (
            <article
              key={offer.title}
              className="rounded-2xl border border-border bg-card p-8"
            >
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

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">More than a web designer.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Because I work across the full product stack, I can build websites that integrate properly
          with the systems behind your business instead of treating the website as an isolated
          design project.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Frontend, backend, APIs, databases, payments, authentication, cloud, analytics and
          related{" "}
          <Link
            href={SERVICE_PATHS.mobile}
            className="text-primary hover:text-primary-hover"
          >
            mobile products
          </Link>{" "}
          sit in the same conversation. When the job is an operational CRM or dashboard rather than
          a public website, that work lives under{" "}
          <Link
            href={SERVICE_PATHS.custom}
            className="text-primary hover:text-primary-hover"
          >
            custom software
          </Link>
          . Agencies that need white-label delivery can work with me as a{" "}
          <Link
            href={SERVICE_PATHS.partner}
            className="text-primary hover:text-primary-hover"
          >
            technical development partner
          </Link>
          .
        </p>
      </PageShell>

      {proofProjects.length > 0 && (
        <PageShell wide className="pt-0">
          <div id="website-projects" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-foreground">Relevant work</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Live websites and web platforms I have worked on — clinic, commerce and a more
              complex business platform.
            </p>
            <div className="mt-8 space-y-6">
              {proofProjects.map(({ proof, project, copy }) => (
                <article
                  key={project.id}
                  className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)] lg:grid-cols-[0.42fr_0.58fr]"
                >
                  <div className="relative min-h-48 border-b border-border lg:min-h-[18rem] lg:border-b-0 lg:border-r">
                    <ProjectCover
                      title={project.title}
                      image={project.coverComposition ? project.image : undefined}
                      alt={project.imageAlt}
                      composition={project.coverComposition}
                      size="sm"
                      priority={project.id === "ultra-smile-clinic-dubai"}
                    />
                  </div>
                  <div className="flex flex-col p-6 sm:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {proof.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                      {proof.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {copy.cardDescription ?? copy.overview}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <TrackedLink
                        href={`/portfolio/${project.id}`}
                        event="case_study_cta"
                        eventParams={{ location: `${service.slug}_${project.id}` }}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
                      >
                        View case study
                        <ArrowRight className="ml-1.5 size-4" />
                      </TrackedLink>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          {project.liveLinkLabel ?? "Visit website"}
                          <ArrowUpRight className="ml-1 size-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Link
              href="/portfolio"
              className="mt-8 inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
            >
              View all work
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </div>
        </PageShell>
      )}

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">How website work is sequenced</h2>
        <ol className="mt-8 space-y-6">
          {service.process.map((step, index) => (
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

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">Technology, when it earns its keep</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Stack follows the product, the content workflow and who will maintain the site. These are
          tools already used on shipped work — not a shopping list.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {STACK.map((item) => (
            <li
              key={item}
              className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">
          Built with SEO foundations from day one.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The website is built with the technical foundations search engines need to crawl,
          understand and index it properly. That can include semantic HTML, mobile responsiveness,
          performance optimization, metadata, canonical URLs, sitemap, robots, structured data
          where it is appropriate, Search Console readiness, internal linking, crawlable content
          and image optimization.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          This is not a promise of a number-one ranking, guaranteed traffic or guaranteed leads.
          Those depend on competition, content and ongoing work after launch.
        </p>
      </PageShell>

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">
          Clear for people, search engines and AI systems.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Pages are structured with clear services, entities, headings and factual content so
          search engines and AI-powered discovery systems can better understand the business and
          what it offers. Visibility in any specific assistant or overview is not guaranteed.
        </p>
      </PageShell>

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">Common questions</h2>
        <div className="mt-8 space-y-8">
          {service.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{faq.answer}</p>
              {faq.question === "How much does a website cost in Dubai?" ? (
                <TrackedLink
                  href="/contact"
                  event="service_cta"
                  eventParams={{ location: `${service.slug}_faq_cost` }}
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
                >
                  Discuss your website requirements
                  <ArrowRight className="ml-1.5 size-4" />
                </TrackedLink>
              ) : null}
            </article>
          ))}
        </div>
      </PageShell>

      {relatedServices.length > 0 && (
        <PageShell wide className="pt-0">
          <h2 className="text-2xl font-semibold text-foreground">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)]"
              >
                <h3 className="font-semibold text-foreground">{related.hubTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{related.tagline}</p>
              </Link>
            ))}
          </div>
        </PageShell>
      )}

      <PageShell className="pt-0">
        <ProjectCTA
          heading={service.ctaHeading}
          body={service.ctaBody}
          primaryLabel="Start a Website Project"
          eventLocation={`${service.slug}_cta`}
        />
      </PageShell>
    </div>
  );
}
