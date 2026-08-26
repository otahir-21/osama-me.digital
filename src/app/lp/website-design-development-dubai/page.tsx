import type { Metadata } from "next";
import { WebsiteDesignDubaiLanding } from "@/components/lp/WebsiteDesignDubaiLanding";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Website Design & Development Dubai | Request a Website Estimate",
  description:
    "Design and develop a professional website for your Dubai business — company sites, landing pages, e-commerce and custom web platforms. Request a website estimate.",
  path: "/lp/website-design-development-dubai",
  noIndex: true,
});

export default function WebsiteDesignDevelopmentDubaiLpPage() {
  return <WebsiteDesignDubaiLanding />;
}
