import Link from "next/link";
import { Calendar, Mail, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site-config";
import { faqData } from "@/data/faq";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrackedAnchor } from "@/components/seo/TrackedLink";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getContactPageSchema, getGraphSchema } from "@/lib/schema";

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={getGraphSchema([getContactPageSchema()])} />

      <PageShell>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Have a Product to Build or Improve?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Tell me what you&apos;re working on, where the product is today, and what you need
          help delivering.
        </p>
      </PageShell>

      <PageShell wide tone="alt" className="grid gap-12 py-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Start a project</h2>
          <p className="mt-2 text-sm text-muted-foreground">I typically respond within 24 hours.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Schedule a call, WhatsApp or email</h2>
          {[
            {
              href: siteConfig.calendly,
              icon: Calendar,
              label: "Schedule a call",
              desc: "30-minute intro call on Calendly",
              event: "calendly_click" as const,
            },
            {
              href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
              icon: MessageCircle,
              label: "WhatsApp",
              desc: "Message +971 50 727 6823",
              event: "whatsapp_click" as const,
            },
            {
              href: `mailto:${siteConfig.email}`,
              icon: Mail,
              label: siteConfig.email,
              desc: "Email me directly",
              event: "email_click" as const,
            },
          ].map((item) => (
            <TrackedAnchor
              key={item.label}
              href={item.href}
              event={item.event}
              eventParams={{ location: "contact_page" }}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex min-h-16 items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <item.icon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </TrackedAnchor>
          ))}
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <MapPin className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-xs text-muted-foreground">{siteConfig.locationFull}</p>
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell className="pt-0">
        <h2 className="text-lg font-semibold text-foreground">Questions before you write</h2>
        <Accordion className="mt-6">
          {faqData.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-10 text-sm text-muted-foreground">
          Recruiting for a full-time role?{" "}
          <Link href="/resume" className="text-primary hover:text-primary">
            View my resume
          </Link>{" "}
          or{" "}
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary"
          >
            LinkedIn profile
          </a>
          .
        </p>
      </PageShell>
    </div>
  );
}
