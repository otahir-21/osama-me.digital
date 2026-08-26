"use client";

import { useEffect } from "react";
import { captureAdsAttribution } from "@/lib/attribution";

/** Persist Google Ads / UTM attribution for the browser session. */
export function AttributionCapture() {
  useEffect(() => {
    captureAdsAttribution();
  }, []);

  return null;
}
