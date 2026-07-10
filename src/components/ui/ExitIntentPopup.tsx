"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const STORAGE_KEY = "exit-intent-dismissed";
const SESSION_KEY = "exit-intent-shown";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && e.relatedTarget === null) {
        try {
          const dismissed = localStorage.getItem(STORAGE_KEY);
          const shown = sessionStorage.getItem(SESSION_KEY);
          if (shown) return;
          if (dismissed) {
            const dismissedTime = parseInt(dismissed, 10);
            if (Date.now() - dismissedTime < 24 * 60 * 60 * 1000) return;
          }
          setIsOpen(true);
          sessionStorage.setItem(SESSION_KEY, "true");
        } catch {
          setIsOpen(true);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isReady, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8">
              <button
                onClick={close}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
                <Calendar className="size-7 text-amber-400" />
              </div>
              <h2 id="exit-popup-title" className="mt-4 text-2xl font-bold text-zinc-900">
                Wait! Before you go...
              </h2>
              <p className="mt-2 text-zinc-600">
                Book a <strong className="text-amber-500">free 30-minute consultation</strong> to
                discuss your website or digital marketing needs. No obligation—just a clear
                conversation.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof window.gtag === "function") {
                      window.gtag("event", "calendly_click", { event_category: "contact" });
                    }
                  }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-3 font-semibold text-zinc-950 transition-colors hover:bg-amber-400"
                >
                  <Calendar size={18} />
                  Book Free Call Now
                </a>
                <Link
                  href="/contact"
                  onClick={close}
                  className="text-center text-sm text-zinc-400 underline-offset-2 hover:underline"
                >
                  Or send a message instead
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
