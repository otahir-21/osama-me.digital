/**
 * Blog Agent for osama-me.digital
 *
 * Generates a new SEO-optimized blog post every day and appends it
 * to src/data/blog.ts in the exact format the site expects.
 *
 * Runs daily at 9 AM Dubai time (5 AM UTC) via GitHub Actions.
 * Requires: ANTHROPIC_API_KEY environment variable
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const PROJECT_ROOT =
  process.env.GITHUB_WORKSPACE ?? process.cwd().replace("/seo-agent", "");
const BLOG_FILE = path.join(PROJECT_ROOT, "src/data/blog.ts");
const SITE_URL = "https://osama-me.digital";

const client = new Anthropic();

// ─── Topic Bank ──────────────────────────────────────────────────────────────
// Topics targeted at Dubai/UAE SMBs — cycle through them.
// The agent will pick whichever isn't already covered.
const TOPIC_BANK = [
  // Web Development
  "How to choose a web developer in Dubai",
  "Why your Dubai business needs a mobile-first website in 2026",
  "WordPress vs custom code: what Dubai businesses should choose",
  "How much does website maintenance cost in Dubai",
  "Website speed optimization for UAE businesses",
  "E-commerce website cost in Dubai: complete breakdown",
  "How long does it take to build a website in Dubai",
  "Landing page best practices for Dubai businesses",
  "Why Dubai businesses are switching from Wix to Next.js",
  "Top 5 web development mistakes UAE startups make",

  // SEO
  "Local SEO guide for Dubai businesses 2026",
  "How to rank on Google in Dubai: complete guide",
  "Google Business Profile optimization for UAE",
  "How long does SEO take to work in Dubai",
  "Arabic vs English SEO for UAE businesses",
  "SEO for Dubai real estate agents",
  "SEO for Dubai restaurants: complete guide",
  "Voice search optimization for Dubai businesses",
  "How to do keyword research for UAE market",
  "Why your Dubai website is not on Google first page",

  // Digital Marketing
  "Google Ads vs Meta Ads for Dubai businesses",
  "Social media marketing for Dubai SMEs: what works",
  "Email marketing for UAE businesses in 2026",
  "How to get more leads from your Dubai website",
  "WhatsApp Business marketing for Dubai companies",
  "Content marketing strategy for Dubai startups",
  "Influencer marketing in Dubai: ROI guide",
  "TikTok marketing for Dubai businesses",
  "LinkedIn marketing for B2B companies in UAE",
  "How to build a personal brand in Dubai",

  // Business & Strategy
  "Digital marketing budget guide for Dubai SMEs",
  "How to measure ROI from your website in Dubai",
  "CRO: how to turn Dubai website visitors into customers",
  "Google Analytics 4 setup guide for Dubai businesses",
  "How to get 5-star Google reviews for your Dubai business",
  "Ramadan marketing strategy for UAE businesses",
  "EXPO 2025 digital marketing opportunities for Dubai",
  "E-commerce in UAE: how to start selling online",
  "Shopify vs WooCommerce for Dubai businesses",
  "Amazon UAE vs your own website: which is better",

  // AWS / Cloud
  "AWS services for Dubai businesses: what you need to know",
  "Cloud hosting vs shared hosting for UAE businesses",
  "Why Dubai businesses are moving to cloud infrastructure",
];

// ─── Read existing posts ──────────────────────────────────────────────────────
function getExistingPosts(): { slug: string; title: string }[] {
  const content = fs.readFileSync(BLOG_FILE, "utf-8");
  const slugMatches = content.matchAll(/slug:\s*"([^"]+)"/g);
  const titleMatches = content.matchAll(/title:\s*"([^"]+)"/g);

  const slugs = [...slugMatches].map((m) => m[1]);
  const titles = [...titleMatches].map((m) => m[1]);

  return slugs.map((slug, i) => ({ slug, title: titles[i] ?? "" }));
}

// ─── Pick today's topic ───────────────────────────────────────────────────────
function pickTopic(existingPosts: { title: string }[]): string {
  const existingTitles = existingPosts.map((p) => p.title.toLowerCase());

  // Find a topic not yet covered
  for (const topic of TOPIC_BANK) {
    const alreadyCovered = existingTitles.some(
      (t) =>
        t.includes(topic.toLowerCase().split(" ").slice(0, 4).join(" ")) ||
        topic.toLowerCase().includes(t.split(" ").slice(0, 4).join(" "))
    );
    if (!alreadyCovered) return topic;
  }

  // If all covered, pick by day of year to cycle
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      86400000
  );
  return TOPIC_BANK[dayOfYear % TOPIC_BANK.length];
}

// ─── Generate blog post ───────────────────────────────────────────────────────
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

async function generateBlogPost(
  topic: string,
  existingPosts: { slug: string; title: string }[]
): Promise<BlogPost> {
  const today = new Date().toISOString().split("T")[0];
  const existingTitles = existingPosts.map((p) => `- ${p.title}`).join("\n");

  const systemPrompt = `You are an expert SEO content writer for osama-me.digital.

The site belongs to Osama Tahir — a Web Developer & Digital Marketing Specialist based in Dubai, UAE.
Website: ${SITE_URL}
Services: Web Development, SEO, Google Ads, Social Media Marketing, AWS Management, Digital Marketing

You write long-form, highly valuable blog posts that:
- Target Dubai/UAE businesses and entrepreneurs
- Rank on Google for local keywords
- Are honest, specific, and genuinely helpful
- Include real numbers, examples, and actionable advice
- Are written in a confident, professional but approachable tone
- Are minimum 1200 words in the HTML content

EXISTING POSTS (do not duplicate these topics):
${existingTitles}`;

  const userPrompt = `Write a complete blog post about: "${topic}"

Return a JSON object with EXACTLY these fields:

{
  "slug": "url-friendly-slug-with-hyphens-and-year-2026",
  "title": "SEO-optimized title (50-60 chars, include Dubai/UAE keyword)",
  "excerpt": "Compelling meta description (140-160 chars, include primary keyword)",
  "category": "one of: Web Development | SEO | Digital Marketing | Google Ads | Social Media | Business Strategy | Cloud & AWS",
  "readTime": "X min",
  "image": "/images/blog/relevant-filename.jpg",
  "content": "FULL HTML content here (minimum 1200 words)"
}

CONTENT FORMAT RULES:
- Use proper HTML tags: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <table>
- Tables use this style: style="width:100%;border-collapse:collapse;margin:1.5rem 0;"
- Table headers: style="text-align:left;padding:0.75rem;color:#f59e0b"
- Table cells: style="padding:0.75rem;color:#3f3f46" and border-bottom:1px solid #e4e4e7
- First paragraph uses: class="text-lg"
- Include at least 1 table with real data/comparison
- Include at least 1 numbered or bulleted list
- Include Dubai/UAE specific examples and AED prices where relevant
- Add 2-3 external links to credible sources with target="_blank" rel="noopener noreferrer"
- End with a strong CTA paragraph mentioning Osama Tahir and linking to contact: <a href="/contact">
- Content must be minimum 1200 words

Today's date: ${today}

Return ONLY the JSON object, no markdown code blocks, no extra text.`;

  console.log(`\n📝 Generating blog post about: "${topic}"`);
  console.log("⏳ Calling Claude API...\n");

  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 8000,
    thinking: { type: "adaptive" },
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  // Extract text from response
  let rawJson = "";
  for (const block of response.content) {
    if (block.type === "text") {
      rawJson = block.text.trim();
      break;
    }
  }

  // Strip markdown code blocks if present
  rawJson = rawJson
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  let post: Omit<BlogPost, "date">;
  try {
    post = JSON.parse(rawJson);
  } catch {
    console.error("Failed to parse JSON. Raw response:", rawJson.slice(0, 500));
    throw new Error("Blog agent returned invalid JSON");
  }

  return {
    ...post,
    date: today,
  };
}

// ─── Append post to blog.ts ───────────────────────────────────────────────────
function appendToBlogFile(post: BlogPost): void {
  const content = fs.readFileSync(BLOG_FILE, "utf-8");

  // Escape backticks and ${} in content
  const escapedContent = post.content
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");

  const newPostCode = `  {
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    excerpt:
      "${post.excerpt.replace(/"/g, '\\"')}",
    date: "${post.date}",
    category: "${post.category}",
    readTime: "${post.readTime}",
    image: "${post.image}",
    content: \`
${escapedContent}
\`,
  },`;

  // Insert after the opening bracket of blogPosts array
  const insertPoint = content.indexOf("export const blogPosts = [") + "export const blogPosts = [".length;

  if (insertPoint === -1 + "export const blogPosts = [".length) {
    throw new Error("Could not find blogPosts array in blog.ts");
  }

  const newContent =
    content.slice(0, insertPoint) +
    "\n" +
    newPostCode +
    content.slice(insertPoint);

  fs.writeFileSync(BLOG_FILE, newContent, "utf-8");
  console.log(`✅ Blog post appended to ${BLOG_FILE}`);
}

// ─── Update sitemap ───────────────────────────────────────────────────────────
function updateSitemap(slug: string): void {
  const sitemapFile = path.join(PROJECT_ROOT, "src/app/sitemap.ts");
  if (!fs.existsSync(sitemapFile)) return;

  const content = fs.readFileSync(sitemapFile, "utf-8");

  // Check if slug already in sitemap
  if (content.includes(slug)) {
    console.log("ℹ️  Slug already in sitemap");
    return;
  }

  console.log("📍 Sitemap uses dynamic blogPosts — no manual update needed");
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Blog Agent starting...");
  console.log(`📁 Project: ${PROJECT_ROOT}`);
  console.log(`⏰ Time: ${new Date().toISOString()}`);
  console.log("─".repeat(60));

  // 1. Read existing posts
  const existingPosts = getExistingPosts();
  console.log(`📚 Found ${existingPosts.length} existing blog posts`);

  // 2. Pick today's topic
  const topic = pickTopic(existingPosts);
  console.log(`🎯 Today's topic: "${topic}"`);

  // 3. Generate the post
  const post = await generateBlogPost(topic, existingPosts);
  console.log(`\n📄 Generated: "${post.title}"`);
  console.log(`🔗 Slug: ${post.slug}`);
  console.log(`📂 Category: ${post.category}`);
  console.log(`⏱️  Read time: ${post.readTime}`);
  console.log(`📝 Content length: ${post.content.length} chars`);

  // 4. Check for duplicate slug
  const slugExists = existingPosts.some((p) => p.slug === post.slug);
  if (slugExists) {
    post.slug = `${post.slug}-${new Date().toISOString().split("T")[0]}`;
    console.log(`⚠️  Slug conflict — updated to: ${post.slug}`);
  }

  // 5. Append to blog.ts
  appendToBlogFile(post);

  // 6. Update sitemap if needed
  updateSitemap(post.slug);

  console.log("\n" + "═".repeat(60));
  console.log("✅ BLOG AGENT COMPLETE");
  console.log(`📌 New post: ${SITE_URL}/blog/${post.slug}`);
  console.log("═".repeat(60));
}

main().catch((err) => {
  console.error("❌ Blog Agent failed:", err);
  process.exit(1);
});
