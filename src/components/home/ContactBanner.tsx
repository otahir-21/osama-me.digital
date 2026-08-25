import { PageShell } from "@/components/layout/PageShell";
import { ProjectCTA } from "@/components/cta/ProjectCTA";

export function ContactBanner() {
  return (
    <section className="bg-ink">
      <PageShell className="py-20 lg:py-28">
        <ProjectCTA
          variant="flush"
          heading="Let's discuss what you're building."
          body="I typically reply within 24 hours. Send the product, the current state, and what you need delivered."
        />
      </PageShell>
    </section>
  );
}
