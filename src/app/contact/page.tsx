"use client";

import Link from "next/link";
import { MessageCircle, Mail, MapPin, Calendar } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site-config";
import { faqData } from "@/data/faq";
import { getPersonSchema } from "@/lib/schema";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const personSchema = getPersonSchema();
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageShell className="border-b border-zinc-800/80">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          subtitle={`${siteConfig.availability}. I'd love to hear about your role or project.`}
        />
      </PageShell>

      <PageShell wide className="grid gap-12 py-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-lg font-semibold text-zinc-200">Send a message</h2>
          <p className="mt-2 text-sm text-zinc-500">I&apos;ll get back to you within 24 hours.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-200">Other ways to reach me</h2>
          {[
            {
              href: siteConfig.calendly,
              icon: Calendar,
              label: "Schedule a call",
              desc: "30-minute intro call",
              external: true,
            },
            {
              href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
              icon: MessageCircle,
              label: "WhatsApp",
              desc: "Quick response",
              external: true,
            },
            {
              href: `mailto:${siteConfig.email}`,
              icon: Mail,
              label: siteConfig.email,
              desc: "Email me directly",
              external: false,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                <item.icon className="size-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">{item.label}</p>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </div>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
              <MapPin className="size-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">Location</p>
              <p className="text-xs text-zinc-500">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell className="border-t border-zinc-800/80 py-12">
        <h2 className="text-lg font-semibold text-zinc-200">FAQ</h2>
        <Accordion className="mt-6">
          {faqData.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-300 hover:text-emerald-400">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-500">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageShell>
    </div>
  );
}
