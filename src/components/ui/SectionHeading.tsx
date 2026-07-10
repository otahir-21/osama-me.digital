"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-zinc-500">{subtitle}</p>}
    </motion.div>
  );
}
