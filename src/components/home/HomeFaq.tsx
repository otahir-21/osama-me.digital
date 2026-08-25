import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";

export function HomeFaq() {
  const preview = faqData.slice(0, 6);
  return (
    <section className="bg-background">
      <PageShell className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Before you send a brief"
          subtitle="The questions Dubai founders and agencies actually ask before hiring a senior mobile engineer."
        />
        <Accordion className="mt-10">
          {preview.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link href="/faq" className="mt-8 inline-block text-sm text-primary hover:text-primary-hover">
          Full FAQ →
        </Link>
      </PageShell>
    </section>
  );
}
