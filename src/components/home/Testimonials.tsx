import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  if (testimonialsData.length === 0) return null;

  return (
    <section className="scroll-mt-24 bg-background" id="client-review">
      <PageShell wide className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Client review"
          title="What it's like to work together"
          subtitle="A LinkedIn Services review from a recent mobile development engagement."
        />
        <div className="mt-12 space-y-6">
          {testimonialsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </PageShell>
    </section>
  );
}
