import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Osama Tahir freelance web development and digital marketing services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        <p className="mt-4 text-zinc-500">Last updated: March 2024</p>

        <div className="prose prose-invert mt-12 max-w-none space-y-8 text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services of Osama Tahir (&quot;Freelancer&quot;,
              &quot;I&quot;, &quot;me&quot;), you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access my services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Services</h2>
            <p>
              I provide freelance web development, SEO, digital marketing, and related
              services. The scope, deliverables, timeline, and pricing for each project
              will be agreed upon in a separate proposal or contract before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Payment</h2>
            <p>
              Payment terms will be specified in the project agreement. Typically, a
              deposit may be required before work begins, with the balance due upon
              completion or according to a milestone schedule. Late payments may incur
              interest as specified in the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Client Responsibilities</h2>
            <p>
              You agree to provide timely feedback, content, and access to necessary
              accounts and materials. Delays in providing these may affect project
              timelines. You are responsible for the accuracy of information you provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Intellectual Property</h2>
            <p>
              Upon full payment, you will receive ownership of the custom work created
              for your project as specified in the agreement. I retain the right to use
              pre-existing tools, code, and templates. Portfolio use of completed work
              may be included unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Revisions & Scope</h2>
            <p>
              The project scope and number of revisions will be defined in the agreement.
              Additional work outside the original scope may be quoted separately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Limitation of Liability</h2>
            <p>
              My liability is limited to the amount paid for the specific project. I am
              not liable for indirect, incidental, or consequential damages. You are
              responsible for maintaining backups of your content and data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Termination</h2>
            <p>
              Either party may terminate a project in accordance with the terms of the
              project agreement. Upon termination, you will be responsible for payment
              for work completed up to that point.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Contact</h2>
            <p>
              For questions about these Terms of Service, contact me at hello@osama.me
              or through the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
