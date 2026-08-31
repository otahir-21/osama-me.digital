import { siteConfig } from "@/data/site-config";

export type ReviewSource = "linkedin";

export type ReviewDimension = {
  label: string;
  rating: number;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  service: string;
  rating: number;
  date: string;
  source: ReviewSource;
  sourceLabel: string;
  sourceUrl: string;
  dimensions: ReviewDimension[];
  relatedServiceSlugs: string[];
};

export const testimonialsData: Testimonial[] = [
  {
    id: "fatma-saeed-al-ali-linkedin-2026",
    quote:
      "I had the pleasure of working closely with Osama as an expert and Full Stack Developer, an ambitious all-in-one digital platform. Osama consistently demonstrated a very strong level of technical knowledge, practical experience, solution architecture capability, and structured problem-solving. I would confidently recommend Osama to organizations, and project leaders. I am already looking forward to having more projects and continued collaboration with him in the future. Highly recommended.",
    author: "Fatma Saeed Al Ali",
    role: "Certified CAIO / AI Transformation & Adoption Leader",
    service: "Mobile Application Development",
    rating: 5,
    date: "2026-08-25",
    source: "linkedin",
    sourceLabel: "LinkedIn",
    sourceUrl: siteConfig.social.linkedin,
    dimensions: [
      { label: "Project satisfaction", rating: 5 },
      { label: "Knowledge", rating: 5 },
      { label: "Communication", rating: 5 },
      { label: "Timeliness", rating: 5 },
    ],
    relatedServiceSlugs: [
      "mobile-app-development-dubai",
      "flutter-app-development-dubai",
      "react-native-app-development-dubai",
    ],
  },
];

export function testimonialsForService(slug: string) {
  return testimonialsData.filter((item) => item.relatedServiceSlugs.includes(slug));
}
