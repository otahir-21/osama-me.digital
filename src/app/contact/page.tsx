"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Work Together"
          subtitle="Book a free 30-minute consultation. No commitment—just a clear conversation about your goals."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            <p className="mt-2 text-zinc-400">
              Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Other Ways to Reach Me</h2>
            <div className="mt-6 space-y-6">
              <motion.a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-amber-500/30"
                whileHover={{ x: 4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
                  <Calendar className="size-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Book a Call</p>
                  <p className="text-sm text-zinc-400">Schedule a free 30-min consultation</p>
                </div>
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-emerald-500/30"
                whileHover={{ x: 4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <MessageCircle className="size-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-zinc-400">Quick response, usually within hours</p>
                </div>
              </motion.a>
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-amber-500/30"
                whileHover={{ x: 4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
                  <Mail className="size-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-zinc-400">{siteConfig.email}</p>
                </div>
              </motion.a>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
                  <MapPin className="size-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-sm text-zinc-400">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-900 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-2 text-zinc-400">
            Quick answers before you reach out.
          </p>
          <Accordion className="mt-8">
            {faqData.slice(0, 4).map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-white hover:text-amber-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            href="/#faq"
            className="mt-6 inline-block text-sm text-amber-400 hover:underline"
          >
            View all FAQs →
          </Link>
        </div>
      </section>
    </div>
  );
}
