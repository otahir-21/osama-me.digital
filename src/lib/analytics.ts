export type AnalyticsEvent =
  | "start_a_project_click"
  | "contact_form_submit"
  | "calendly_click"
  | "whatsapp_click"
  | "email_click"
  | "case_study_cta"
  | "service_cta"
  | "schedule_a_call_click";

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, {
    event_category: "conversion",
    ...params,
  });
}
