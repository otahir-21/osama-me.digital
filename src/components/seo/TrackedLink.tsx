"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean>;
};

export function TrackedLink({
  event,
  eventParams,
  onClick,
  className,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={cn(className)}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}

type TrackedAnchorProps = ComponentProps<"a"> & {
  event: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean>;
};

export function TrackedAnchor({
  event,
  eventParams,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
