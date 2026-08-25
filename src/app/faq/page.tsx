import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";
import { SERVICE_PATHS } from "@/data/services-detail";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { getBreadcrumbSchema, getGraphSchema, getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Mobile App Developer Dubai | Osama Tahir",
  description:
    "Questions about hiring Osama Tahir in Dubai: Flutter, React Native, app cost, unfinished apps, white-label agency work, and store launch.",
  path: "/faq",
});

export default function FaqPage() {
  const url = absoluteUrl("/faq");
  const description =
    "Questions about hiring Osama Tahir in Dubai: Flutter, React Native, app cost, unfinished apps, white-label agency work, and store launch.";
  return (
    <div>
      <JsonLd
        data={getGraphSchema([
          getWebPageSchema({
            name: "Frequently asked questions",
            description,
            url,
            dateModified: "2026-08-25",
          }),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
        ])}
      />
      <PageShell>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Questions before we start
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Direct answers for founders, product leads and agencies hiring a senior mobile and
          full-stack developer in Dubai. Longer versions live on the{" "}
          <Link href="/insights" className="text-primary hover:text-primary-hover">
            insights
          </Link>{" "}
          and{" "}
          <Link href={SERVICE_PATHS.mobile} className="text-primary hover:text-primary-hover">
            services
          </Link>{" "}
          pages.
        </p>
        <Accordion className="mt-12">
          {faqData.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageShell>

      <PageShell className="pt-0">
        <ProjectCTA heading="Still deciding if this is the right engagement?" />
      </PageShell>
    </div>
  );
}
