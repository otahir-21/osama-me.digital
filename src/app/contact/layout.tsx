import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start a Software Project | Osama Tahir, Dubai",
  description:
    "Tell Osama Tahir what you are building, where the product is today, and what you need delivered. Email info@osama-me.digital or use the project form.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
