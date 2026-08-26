import type { Metadata } from "next";
import { Calendar, MessageCircle } from "lucide-react";
import { AttributionCapture } from "@/components/lp/AttributionCapture";
import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import { PageShell } from "@/components/layout/PageShell";
import { TrackedAnchor } from "@/components/seo/TrackedLink";
import { siteConfig } from "@/data/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thanks — Project Inquiry Received",
  description: "Your project inquiry has been received. Osama will review and respond using the contact details you provided.",
  path: "/thank-you/project-inquiry",
  noIndex: true,
});

export default function ProjectInquiryThankYouPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <div>
      <AttributionCapture />
      <LpHeader showCta={false} eventLocation="thank_you_header" />

      <PageShell className="py-16 lg:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Project inquiry
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Thanks — I&apos;ve received your project details.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I&apos;ll review what you sent and respond using the contact details you provided.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <TrackedAnchor
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            event="calendly_click"
            eventParams={{ location: "thank_you" }}
            className="flex min-h-16 items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <Calendar className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Schedule a Call</p>
              <p className="text-sm text-muted-foreground">Optional 30-minute intro on Calendly</p>
            </div>
          </TrackedAnchor>

          <TrackedAnchor
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            event="whatsapp_click"
            eventParams={{ location: "thank_you" }}
            className="flex min-h-16 items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <MessageCircle className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">WhatsApp Osama</p>
              <p className="text-sm text-muted-foreground">Message if you prefer chat</p>
            </div>
          </TrackedAnchor>
        </div>
      </PageShell>

      <LpFooter />
    </div>
  );
}
