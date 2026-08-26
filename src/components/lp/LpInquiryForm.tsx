"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getAdsAttribution } from "@/lib/attribution";
import { trackLeadConversion } from "@/lib/analytics";

const PROJECT_STAGES = [
  "Idea / Planning",
  "Designs Ready",
  "In Development",
  "Existing Product",
  "Live Product / Need Improvements",
] as const;

const BUDGET_OPTIONS = [
  "Under AED 10,000",
  "AED 10,000–25,000",
  "AED 25,000–50,000",
  "AED 50,000+",
  "Not sure yet",
] as const;

const fieldClass =
  "h-11 min-h-11 border-border bg-card text-foreground placeholder:text-muted-foreground";

export function LpInquiryForm({
  service,
  landingPagePath,
  projectType,
  id = "estimate",
}: {
  service: string;
  landingPagePath: string;
  projectType: string;
  id?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const projectStage = String(formData.get("projectStage") || "");
    const budget = String(formData.get("budget") || "");
    const attribution = getAdsAttribution();

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      projectType,
      projectStage,
      budget,
      message: String(formData.get("message") || ""),
      subject: `PPC inquiry — ${projectType}`,
      source: "landing_page",
      landingPage: landingPagePath,
      attribution,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setErrorMessage(data?.error || "Something went wrong. Please email or WhatsApp instead.");
        setStatus("error");
        return;
      }

      trackLeadConversion({
        service,
        landing_page: landingPagePath,
        project_stage: projectStage,
        budget_range: budget,
      });

      router.push("/thank-you/project-inquiry");
    } catch {
      setErrorMessage("Something went wrong. Please email or WhatsApp instead.");
      setStatus("error");
    }
  }

  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Request a project estimate
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Share enough detail for a useful first reply. Required fields are marked.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-name`} className="mb-2 block text-sm font-medium text-foreground">
              Name *
            </label>
            <Input
              id={`${id}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-medium text-foreground">
              Work email *
            </label>
            <Input
              id={`${id}-email`}
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
          <label htmlFor={`${id}-company`} className="mb-2 block text-sm font-medium text-foreground">
            Company / Business *
          </label>
          <Input
            id={`${id}-company`}
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Company or business name"
            className={fieldClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${id}-projectStage`}
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Project stage *
            </label>
            <select
              id={`${id}-projectStage`}
              name="projectStage"
              required
              defaultValue=""
              className="h-11 w-full rounded-lg border border-border bg-card px-2.5 text-sm text-foreground"
            >
              <option value="" disabled>
                Select stage
              </option>
              {PROJECT_STAGES.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${id}-budget`} className="mb-2 block text-sm font-medium text-foreground">
              Approximate budget *
            </label>
            <select
              id={`${id}-budget`}
              name="budget"
              required
              defaultValue=""
              className="h-11 w-full rounded-lg border border-border bg-card px-2.5 text-sm text-foreground"
            >
              <option value="" disabled>
                Select budget range
              </option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-medium text-foreground">
            Project details *
          </label>
          <Textarea
            id={`${id}-message`}
            name="message"
            required
            rows={5}
            placeholder="What are you building, who is it for, and what do you need delivered?"
            className="min-h-32 border-border bg-card text-foreground placeholder:text-muted-foreground"
          />
        </div>

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
              Request Project Estimate
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground">
          No obligation. I&apos;ll review your requirements and respond directly.
        </p>
      </form>
    </section>
  );
}
