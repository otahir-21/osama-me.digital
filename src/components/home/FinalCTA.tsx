"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready to Grow Your Business Online?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-zinc-400"
        >
          Let&apos;s discuss your project. Book a free 30-minute consultation—no commitment, just
          a clear conversation about your goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className={buttonVariants({ size: "lg", className: "bg-amber-500 text-zinc-950 hover:bg-amber-400" })}
          >
            Book a Free Consultation
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg", className: "flex items-center gap-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10" })}
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-500"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-white"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {siteConfig.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
