import type { Metadata } from "next";
import { MobileAppDubaiLanding } from "@/components/lp/MobileAppDubaiLanding";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Development Dubai | Request a Project Estimate",
  description:
    "Build your mobile app with a senior Dubai-based developer. Flutter, React Native, backend APIs, payments and app-store launch — request a project estimate.",
  path: "/lp/mobile-app-development-dubai",
  noIndex: true,
});

export default function MobileAppDevelopmentDubaiLpPage() {
  return <MobileAppDubaiLanding />;
}
