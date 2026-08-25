"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";

const projectTypes = [
  "New Mobile App",
  "Existing App / Rescue",
  "Custom Software / CRM",
  "Backend / API",
  "Agency Partnership",
  "Other",
];

const projectStages = [
  "Idea / discovery",
  "Design ready",
  "In development",
  "In production",
  "Handover / inherited codebase",
];

const fieldClass =
  "h-11 min-h-11 border-border bg-card text-foreground placeholder:text-muted-foreground";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
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
        trackEvent("contact_form_submit", { event_category: "contact" });
        form.reset();
      } else {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setErrorMessage(data?.error || "Something went wrong. Please email or WhatsApp instead.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please email or WhatsApp instead.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name *
          </label>
          <Input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Work email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
          Company
        </label>
        <Input id="company" name="company" type="text" autoComplete="organization" placeholder="Company or studio" className={fieldClass} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-foreground">
            Project type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="h-11 w-full rounded-lg border border-border bg-card px-2.5 text-sm text-foreground"
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="projectStage" className="mb-2 block text-sm font-medium text-foreground">
            Project stage
          </label>
          <select
            id="projectStage"
            name="projectStage"
            defaultValue=""
            className="h-11 w-full rounded-lg border border-border bg-card px-2.5 text-sm text-foreground"
          >
            <option value="">Optional</option>
            {projectStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
          Approximate budget — optional
        </label>
        <Input id="budget" name="budget" type="text" placeholder="e.g. exploring, or a range in AED" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Project details *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building, where is it today, and what do you need delivered?"
          className="min-h-32 border-border bg-card text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-primary/8 p-3 text-sm text-primary" role="status">
          Thanks. Your message has been sent. I&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="min-h-11 w-full bg-primary text-white hover:bg-primary-hover sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Send project details
          </>
        )}
      </Button>
    </form>
  );
}
