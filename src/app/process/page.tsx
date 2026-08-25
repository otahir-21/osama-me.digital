import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { siteConfig } from "@/data/site-config";
import { SERVICE_PATHS } from "@/data/services-detail";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { getBreadcrumbSchema, getGraphSchema, getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "How I Build Software | Process | Osama Tahir",
  description:
    "Osama Tahir’s delivery process in Dubai: understand, architect, build, launch and support — for Flutter, React Native and custom software.",
  path: "/process",
});

const expanded = [
  {
    title: "Understand",
    body: "Clarify the user jobs, constraints, stores, payments, and what already exists. If the brief is a slogan, this step produces a written scope of what is in and out. Agencies keep the client relationship; I still need the same facts. A WhatsApp paragraph is not discovery — it is a request for discovery.",
  },
  {
    title: "Architect",
    body: "Choose Flutter, React Native, or a web/API-first shape based on the team that will maintain the repo, not based on a trend. Name the API, auth, payment and release boundaries. If a rewrite is being sold, it needs a reason that survives an audit.",
  },
  {
    title: "Build",
    body: "Ship installable slices. iOS and Android builds you can put on two phones beat a slide of screens. Design from Figma is implemented faithfully when that is the contract; gaps in the design are named instead of guessed.",
  },
  {
    title: "Launch",
    body: "TestFlight or internal testing, store questionnaires, privacy details, and a first production week with monitoring. You keep the developer accounts. Launch is part of the work, not a separate vendor.",
  },
  {
    title: "Support",
    body: "Stabilize crashes, payment edge cases, and OS breakage. Some clients keep a retainer; some take a handover. Either way, the repo should be understandable by the next engineer. That is the opposite of a ZIP file on a personal Drive.",
  },
];

export default function ProcessPage() {
  const url = absoluteUrl("/process");
  const description =
    "Osama Tahir’s delivery process in Dubai: understand, architect, build, launch and support — for Flutter, React Native and custom software.";
  return (
    <div>
      <JsonLd
        data={getGraphSchema([
          getWebPageSchema({
            name: "How I build software",
            description,
            url,
            dateModified: siteConfig.contentUpdatedAt,
          }),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Process", url: "/process" },
          ]),
        ])}
      />
      <PageShell>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Process" }]} />
        <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          How I build and take over software
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {siteConfig.name} works as a senior mobile and full-stack developer in {siteConfig.locationFull}.
          The sequence is the same whether the job is a new Flutter app, an inherited React Native
          repo, or a CRM: understand, architect, build, launch, support. It is a delivery process,
          not a ceremony.
        </p>
      </PageShell>

      <PageShell tone="alt" className="pt-0">
        <ol className="space-y-10">
          {siteConfig.processSteps.map((step, index) => (
            <li key={step.title} className="grid gap-3 sm:grid-cols-[4rem_1fr] sm:gap-8">
              <p className="text-sm font-medium text-primary">{String(step.step).padStart(2, "0")}</p>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">{expanded[index].title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {expanded[index].body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageShell>

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">Where this applies</h2>
        <ul className="mt-6 space-y-3 text-base text-muted-foreground">
          <li>
            <Link href={SERVICE_PATHS.mobile} className="text-primary hover:text-primary-hover">
              New mobile products
            </Link>{" "}
            — both stores, API and launch.
          </li>
          <li>
            <Link href={SERVICE_PATHS.rescue} className="text-primary hover:text-primary-hover">
              Rescue
            </Link>{" "}
            — audit and stabilize before features.
          </li>
          <li>
            <Link href={SERVICE_PATHS.partner} className="text-primary hover:text-primary-hover">
              Agency partnership
            </Link>{" "}
            — white-label delivery against an agreed scope.
          </li>
        </ul>
      </PageShell>

      <PageShell className="pt-0">
        <ProjectCTA heading="Want this process on your product?" />
      </PageShell>
    </div>
  );
}
