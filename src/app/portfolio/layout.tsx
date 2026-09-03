import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Osama Tahir Dubai",
  description:
    "A selection of mobile apps, business platforms, commerce products, backend systems and paid-social campaigns Osama Tahir has helped ship across the UAE and international markets.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
