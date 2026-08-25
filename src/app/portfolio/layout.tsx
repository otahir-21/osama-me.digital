import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App & Software Case Studies | Osama Tahir Dubai",
  description:
    "A selection of mobile apps, business platforms, commerce products and backend systems Osama Tahir has helped build across the UAE and international markets.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
