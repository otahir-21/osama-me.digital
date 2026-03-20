"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", { event_category: "contact" });
        }
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-800">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="h-11 border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-800">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-11 border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-800">
          Subject *
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Project inquiry"
          className="h-11 border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-800">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, goals, and timeline..."
          className="min-h-32 border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
        />
      </div>
      {status === "success" && (
        <p className="rounded-lg bg-emerald-500/20 p-3 text-sm text-emerald-400">
          Thanks! Your message has been sent. I&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-500/20 p-3 text-sm text-red-400">
          Something went wrong. Please try emailing directly or WhatsApp.
        </p>
      )}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 text-zinc-950 hover:bg-amber-400 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
}
