import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Osama Tahir | Mobile & Full-Stack Developer Dubai",
  description:
    "Osama Tahir is a Dubai-based senior mobile and full-stack developer focused on taking ownership of products rather than isolated development tickets.",
  path: "/about",
  ogType: "profile",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
