"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function FinalCTA() {
  return (
    <section className="bg-ink py-14 lg:py-16">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Let&apos;s Build Something Great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-white/65"
        >
          {siteConfig.availability}. Whether it&apos;s a full-time role or a contract project,
          I&apos;d love to hear from you.
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
            className={buttonVariants({ size: "lg", className: "bg-card text-foreground hover:bg-muted" })}
          >
            Get in Touch
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "flex items-center gap-2 border-white/20 bg-transparent text-white hover:bg-card/10",
            })}
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-white/65"
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
