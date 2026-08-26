import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LpFaq({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{heading}</h2>
      <Accordion className="mt-8">
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question} className="border-border">
            <AccordionTrigger className="text-left text-foreground hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
