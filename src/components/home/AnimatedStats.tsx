"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/data/site-config";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  inView,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const raw = easeOut * end;
      setCount(Number.isInteger(end) ? Math.floor(raw) : Math.round(raw * 10) / 10);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [value, duration, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function AnimatedStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {siteConfig.stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-amber-600 sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
