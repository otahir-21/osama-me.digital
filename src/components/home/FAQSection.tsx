"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqData } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Quick answers about working with me."
        />

        <Accordion className="mt-12">
          {faqData.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left text-stone-800 hover:text-indigo-700">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
