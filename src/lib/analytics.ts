export type AnalyticsEvent =
  | "start_a_project_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "generate_lead"
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

/**
 * Fire Google Ads lead conversion when AW ID + label env vars are set.
 * Does not invent production IDs — no-ops until configured.
 */
export function trackGoogleAdsLeadConversion(
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL?.trim();
  if (!adsId || !label) return;

  window.gtag("event", "conversion", {
    send_to: `${adsId}/${label}`,
    ...params,
  });
}

/** Primary PPC conversion: successful lead form only. Non-sensitive params only. */
export function trackLeadConversion(params: {
  service: string;
  landing_page: string;
  project_stage: string;
  budget_range: string;
}) {
  trackEvent("generate_lead", {
    event_category: "lead",
    ...params,
  });
  trackGoogleAdsLeadConversion({
    service: params.service,
    landing_page: params.landing_page,
  });
}
