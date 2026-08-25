import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insights/InsightArticle";
import { getInsightBySlug, insights } from "@/data/insights";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/insights/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt,
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();
  return <InsightArticle post={post} />;
}
