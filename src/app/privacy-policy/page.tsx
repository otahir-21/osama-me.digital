import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Osama Tahir",
  description: "Privacy policy for the personal website of Osama Tahir.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <PageShell className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-50">Privacy Policy</h1>
      <p className="mt-4 text-zinc-500">Last updated: August 2026</p>

      <div className="mt-12 space-y-8 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">1. Introduction</h2>
          <p className="mt-3 leading-relaxed">
            Osama Tahir (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) operates {siteConfig.url}. This
            page explains how personal data is collected and used when you visit this website or
            contact me about a project.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">2. Information I Collect</h2>
          <p className="mt-3 leading-relaxed">
            I may collect information you provide directly, such as when you fill out a
            contact form, book a call, or write via email or WhatsApp. This may include your
            name, work email, phone number, company name, and project details.
          </p>
          <p className="mt-3 leading-relaxed">
            Analytics tools may collect technical information such as IP address, browser type,
            and pages visited.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">3. How I Use Your Information</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Respond to inquiries and deliver services</li>
            <li>Send relevant updates about your project</li>
            <li>Improve the website</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">4. Data Sharing</h2>
          <p className="mt-3 leading-relaxed">
            I do not sell personal information. I may share information with service providers
            who help operate the website or business (hosting, email, analytics), subject to
            appropriate safeguards.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">5. Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions: {siteConfig.email} or the contact form on this website.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
