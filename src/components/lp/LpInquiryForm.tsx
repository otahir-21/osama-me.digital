"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TrackedAnchor } from "@/components/seo/TrackedLink";
import { siteConfig } from "@/data/site-config";
import { getAdsAttribution } from "@/lib/attribution";
import { trackEvent, trackLeadConversion } from "@/lib/analytics";
const PROJECT_STAGES = [
  "Idea / Planning",
  "Requirements Ready",
  "Designs Ready",
  "In Development",
  "Existing / Live Product",
] as const;

const BUDGET_OPTIONS = [
  "Under AED 10,000",
  "AED 10,000–25,000",
  "AED 25,000–50,000",
  "AED 50,000+",
  "Not sure yet",
] as const;

export const MOBILE_PROJECT_TYPES = [
  "New Mobile App",
  "MVP",
  "Existing App / Improvements",
  "App Maintenance / Rescue",
  "Other",
] as const;

export const WEBSITE_PROJECT_TYPES = [
  "New Business Website",
  "Website Redesign",
  "Landing Page",
  "E-commerce Website",
  "Custom Web Platform",
  "Other",
] as const;

const fieldClass =
  "h-11 min-h-11 border-border bg-card text-foreground placeholder:text-muted-foreground";
const selectClass =
  "h-11 min-h-11 w-full rounded-lg border border-border bg-card px-2.5 text-sm text-foreground";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  company: string;
  projectStage: string;
  budget: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

export function LpInquiryForm({
  service,
  landingPagePath,
  projectTypes,
  step1ButtonLabel,
  leadLabel,
  id = "estimate",
}: {
  service: string;
  landingPagePath: string;
  projectTypes: readonly string[];
  step1ButtonLabel: string;
  /** Used in notification email subject/title, e.g. "Mobile App" or "Website" */
  leadLabel: string;
  id?: string;
}) {
  const router = useRouter();
  const reactId = useId();
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    company: "",
    projectStage: "",
    budget: "",
    message: "",
  });

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  useEffect(() => {
    if (step === 2) {
      trackEvent("lead_form_step_2_viewed", {
        event_category: "lead_funnel",
        service,
        landing_page: landingPagePath,
      });
    }
  }, [step, service, landingPagePath]);

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validateStep1(): boolean {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email.";
    if (!values.projectType) next.projectType = "Please select a project type.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function validateStep2(): boolean {
    const next: FieldErrors = {};
    if (!values.projectStage) next.projectStage = "Please select a project stage.";
    if (!values.budget) next.budget = "Please select a budget range.";
    if (!values.message.trim()) next.message = "Please briefly describe your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleStep1Continue(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep1()) return;

    trackEvent("lead_form_step_1_completed", {
      event_category: "lead_funnel",
      service,
      landing_page: landingPagePath,
      project_type: values.projectType,
    });

    setStep(2);
    setErrorMessage("");
  }

  async function handleFinalSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    if (!validateStep2()) return;

    setStatus("loading");
    setErrorMessage("");

    const attribution = getAdsAttribution();
    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || undefined,
      company: values.company.trim() || undefined,
      projectType: values.projectType,
      projectStage: values.projectStage,
      budget: values.budget,
      message: values.message.trim(),
      subject: `New ${leadLabel} Lead`,
      service,
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
        project_type: values.projectType,
        project_stage: values.projectStage,
        budget_range: values.budget,
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
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-5 shadow-[0_8px_30px_rgba(17,24,39,0.06)] sm:p-6"
      aria-labelledby={`${id}-heading`}
    >
      <div
        key={step}
        className="motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-right-2 motion-safe:duration-200"
      >
        {step === 1 ? (
          <form onSubmit={handleStep1Continue} className="space-y-4" noValidate>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Step 1 of 2
              </p>
              <h2
                id={`${id}-heading`}
                className="mt-1 text-xl font-semibold tracking-tight text-foreground"
              >
                Tell me what you need
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Share a few details and I&apos;ll review the right approach for your project.
              </p>
            </div>

            <Field
              id={`${reactId}-name`}
              label="Name"
              required
              error={errors.name}
            >
              <Input
                id={`${reactId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => updateField("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                placeholder="Your name"
                className={fieldClass}
              />
            </Field>

            <Field id={`${reactId}-email`} label="Email" required error={errors.email}>
              <Input
                id={`${reactId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                placeholder="you@company.com"
                className={fieldClass}
              />
            </Field>

            <Field
              id={`${reactId}-phone`}
              label="WhatsApp / Phone"
              optional
              error={errors.phone}
            >
              <Input
                id={`${reactId}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                placeholder="+971 50 000 0000"
                className={fieldClass}
              />
            </Field>

            <Field
              id={`${reactId}-projectType`}
              label="Project type"
              required
              error={errors.projectType}
            >
              <select
                id={`${reactId}-projectType`}
                name="projectType"
                value={values.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
                aria-invalid={Boolean(errors.projectType)}
                className={selectClass}
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <Button
              type="submit"
              className="min-h-11 w-full bg-primary text-white hover:bg-primary-hover"
            >
              {step1ButtonLabel}
              <ArrowRight className="ml-1.5 size-4" />
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Takes less than a minute. No obligation.
            </p>

            <p className="text-center text-sm text-muted-foreground">
              Prefer WhatsApp?{" "}
              <TrackedAnchor
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                event="whatsapp_click"
                eventParams={{ location: `${service}_form` }}
                className="font-medium text-primary hover:text-primary-hover"
              >
                Message Osama
              </TrackedAnchor>
            </p>
          </form>
        ) : (
          <form onSubmit={handleFinalSubmit} className="space-y-4" noValidate>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Step 2 of 2
              </p>
              <h2
                id={`${id}-heading`}
                className="mt-1 text-xl font-semibold tracking-tight text-foreground"
              >
                A little more about your project
              </h2>
            </div>

            <Field
              id={`${reactId}-company`}
              label="Company / Business"
              optional
              error={errors.company}
            >
              <Input
                id={`${reactId}-company`}
                name="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder="Company or business name"
                className={fieldClass}
              />
            </Field>

            <Field
              id={`${reactId}-projectStage`}
              label="Project stage"
              required
              error={errors.projectStage}
            >
              <select
                id={`${reactId}-projectStage`}
                name="projectStage"
                value={values.projectStage}
                onChange={(e) => updateField("projectStage", e.target.value)}
                aria-invalid={Boolean(errors.projectStage)}
                className={selectClass}
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
            </Field>

            <Field
              id={`${reactId}-budget`}
              label="Approximate budget"
              required
              error={errors.budget}
            >
              <select
                id={`${reactId}-budget`}
                name="budget"
                value={values.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                aria-invalid={Boolean(errors.budget)}
                className={selectClass}
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
            </Field>

            <Field
              id={`${reactId}-message`}
              label="Project details"
              required
              error={errors.message}
            >
              <Textarea
                id={`${reactId}-message`}
                name="message"
                rows={4}
                value={values.message}
                onChange={(e) => updateField("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                placeholder="Briefly describe what you want to build, improve or replace."
                className="min-h-24 border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
            </Field>

            {status === "error" && (
              <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row-reverse">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="min-h-11 w-full bg-primary text-white hover:bg-primary-hover sm:flex-1"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    Send Project Details
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={status === "loading"}
                onClick={() => {
                  setStep(1);
                  setErrorMessage("");
                }}
                className="min-h-11 w-full sm:w-auto"
              >
                <ArrowLeft className="mr-1.5 size-4" />
                Back
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
        {optional ? (
          <span className="ml-1 font-normal text-muted-foreground">(optional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
