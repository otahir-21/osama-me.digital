export const ATTRIBUTION_STORAGE_KEY = "osama_ads_attribution";

export const ATTRIBUTION_QUERY_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AttributionQueryKey = (typeof ATTRIBUTION_QUERY_KEYS)[number];

export interface AdsAttribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page_url?: string;
  referrer?: string;
  timestamp?: string;
}

function readStored(): AdsAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as AdsAttribution;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStored(data: AdsAttribution) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore quota / private-mode failures.
  }
}

/** Capture Google Ads + UTM params from the current URL and persist for the session. */
export function captureAdsAttribution(): AdsAttribution {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const existing = readStored();
  const next: AdsAttribution = { ...existing };

  for (const key of ATTRIBUTION_QUERY_KEYS) {
    const value = params.get(key)?.trim();
    if (value) next[key] = value;
  }

  if (!next.landing_page_url) {
    next.landing_page_url = window.location.href;
  }
  if (!next.referrer && document.referrer) {
    next.referrer = document.referrer;
  }
  if (!next.timestamp) {
    next.timestamp = new Date().toISOString();
  }

  writeStored(next);
  return next;
}

export function getAdsAttribution(): AdsAttribution {
  if (typeof window === "undefined") return {};
  const stored = readStored();
  if (Object.keys(stored).length > 0) return stored;
  return captureAdsAttribution();
}
