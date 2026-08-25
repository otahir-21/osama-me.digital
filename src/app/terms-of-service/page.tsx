import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Osama Tahir",
  description: "Terms of service for professional software work with Osama Tahir.",
  path: "/terms-of-service",
  noIndex: true,
});

export default function TermsOfServicePage() {
  return (
    <PageShell className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-50">Terms of Service</h1>
      <p className="mt-4 text-zinc-500">Last updated: August 2026</p>

      <div className="mt-12 space-y-8 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">1. Agreement to Terms</h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the services of Osama Tahir, you agree to these Terms of
            Service. If you disagree, do not use these services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">2. Services</h2>
          <p className="mt-3 leading-relaxed">
            I provide mobile app development, custom software, backend APIs, and related
            technical services. Scope, deliverables, timeline, and pricing for each engagement
            are agreed in a separate proposal or contract before work begins.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">3. Payment</h2>
          <p className="mt-3 leading-relaxed">
            Payment terms are specified in the project agreement. A deposit may be required
            before work begins, with the balance due on completion or by milestone.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">4. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            Upon full payment, you receive ownership of the custom work created for your
            project as specified in the agreement. I retain the right to use pre-existing
            tools, libraries, and templates. Portfolio use of completed work may be included
            unless otherwise agreed.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">5. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            Liability is limited to the amount paid for the specific project. I am not liable
            for indirect, incidental, or consequential damages.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">6. Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions: {siteConfig.email} or the contact form on this website.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
