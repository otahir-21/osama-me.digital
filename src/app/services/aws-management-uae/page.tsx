import type { Metadata } from "next";
import { servicesDetail } from "@/data/services-detail";
import { getServiceSchema, getServiceFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

const service = servicesDetail.find((s) => s.slug === "aws-management-uae")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.seoTitle,
    description: service.metaDescription,
    url: `https://osama-me.digital/services/${service.slug}`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: service.seoTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.seoTitle,
    description: service.metaDescription,
  },
  alternates: {
    canonical: `https://osama-me.digital/services/${service.slug}`,
  },
};

export default function AWSManagementUAEPage() {
  const serviceSchema = getServiceSchema(service);
  const faqSchema = getServiceFAQSchema(service.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.hubTitle, url: `/services/${service.slug}` },
  ]);

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
