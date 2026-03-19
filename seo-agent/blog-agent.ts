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
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const PROJECT_ROOT =
  process.env.GITHUB_WORKSPACE ?? process.cwd().replace("/seo-agent", "");
const BLOG_FILE = path.join(PROJECT_ROOT, "src/data/blog.ts");
const SITE_URL = "https://osama-me.digital";

const client = new Anthropic();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ─── Content Strategy: 5 Pillars ─────────────────────────────────────────────
//
// Pillar 1 — "How Much Does X Cost?" (Monday)   → highest buyer intent
// Pillar 2 — "How to Rank / Get Found" (Tuesday) → SEO authority
// Pillar 3 — "X vs Y" Comparisons (Wednesday)    → decision-stage traffic
// Pillar 4 — Industry-Specific Guides (Thursday) → niche / low competition
// Pillar 5 — How-To Guides (Friday)              → organic + AI citations
// Pillar 6 — Seasonal / Trending (Saturday)      → timely local content
// Pillar 7 — Case Study / Story (Sunday)         → trust + conversion

const PILLARS: Record<number, string[]> = {
  // Pillar 1 — Cost & Pricing (Monday = day 1)
  1: [
    "How much does app development cost in Dubai 2026",
    "Social media management cost in Dubai: what you should pay",
    "Website maintenance cost in Dubai: monthly and annual pricing",
    "Shopify store development cost in UAE: full breakdown",
    "Landing page design cost in Dubai",
    "SEO audit cost in Dubai: what agencies charge",
    "Logo and branding cost in Dubai: agency vs freelancer",
    "Google Ads management fees in Dubai: what agencies charge",
    "How much does a mobile app cost in UAE 2026",
    "Email marketing cost in Dubai: tools and management fees",
    "How much does social media advertising cost in UAE",
    "WordPress website cost in Dubai: development and ongoing fees",
    "Video production cost in Dubai for marketing",
    "Copywriting cost in Dubai: website and blog content pricing",
  ],

  // Pillar 2 — SEO & Ranking (Tuesday = day 2)
  2: [
    "Why your Dubai website is not showing on Google first page",
    "How to rank on Google Maps in Dubai: complete guide",
    "Local SEO for Dubai restaurants: step-by-step guide",
    "Local SEO for Dubai real estate agents: 2026 guide",
    "Google Business Profile optimisation for UAE businesses",
    "Arabic SEO vs English SEO: what UAE businesses should know",
    "How long does SEO take to work in Dubai",
    "How to do keyword research for the UAE market",
    "Core Web Vitals for Dubai websites: why speed matters",
    "Backlink building strategy for UAE businesses",
    "SEO for Dubai clinics and medical practices",
    "Technical SEO checklist for UAE business websites",
    "How to write SEO content that ranks in Dubai",
    "Voice search optimisation for UAE businesses 2026",
    "Schema markup guide for Dubai business websites",
    "How to optimise Google Business Profile in UAE",
  ],

  // Pillar 3 — Comparisons (Wednesday = day 3)
  3: [
    "Wix vs WordPress for Dubai businesses: honest comparison",
    "Freelancer vs agency for web development in Dubai",
    "Google Ads vs Meta Ads for Dubai businesses: which wins",
    "Shopify vs WooCommerce for UAE e-commerce businesses",
    "Next.js vs WordPress: which is better for Dubai businesses",
    "WhatsApp Business vs email marketing for UAE",
    "SEO vs Google Ads for Dubai businesses: when to use each",
    "Shared hosting vs cloud hosting for UAE businesses",
    "Squarespace vs WordPress for Dubai small businesses",
    "LinkedIn vs Instagram for Dubai B2B marketing",
    "TikTok vs Instagram for Dubai businesses in 2026",
    "Hiring in-house vs outsourcing digital marketing in Dubai",
    "Shopify vs custom website for UAE e-commerce",
    "Google Analytics vs Hotjar: what UAE businesses need",
    "Amazon UAE vs your own website: pros and cons",
  ],

  // Pillar 4 — Industry-Specific (Thursday = day 4)
  4: [
    "Digital marketing for Dubai restaurants: complete guide",
    "SEO and website strategy for Dubai real estate agents",
    "Digital marketing for Dubai clinics and doctors",
    "Website and marketing guide for Dubai hotels and tourism",
    "E-commerce strategy for UAE fashion brands",
    "Digital marketing for Dubai gyms and fitness studios",
    "SEO for Dubai law firms: how to get clients online",
    "Digital marketing for Dubai schools and education centres",
    "Website strategy for Dubai construction and contracting companies",
    "Digital marketing for UAE logistics and freight companies",
    "SEO for Dubai car dealerships: getting found online",
    "Digital marketing for Dubai beauty salons and spas",
    "Website strategy for Dubai accounting and finance firms",
    "Marketing strategy for UAE food delivery and cloud kitchens",
    "Digital marketing for Dubai retail businesses",
    "Online marketing for Dubai luxury brands",
  ],

  // Pillar 5 — How-To Guides (Friday = day 5)
  5: [
    "How to get more leads from your Dubai website",
    "How to set up Google Analytics 4 for UAE businesses",
    "How to get more Google reviews for your Dubai business",
    "How to build a personal brand in Dubai",
    "How to run Google Ads in Dubai: beginner guide",
    "How to choose a web developer in Dubai: checklist",
    "How to write a website brief for your Dubai project",
    "How to measure digital marketing ROI in UAE",
    "How to set a digital marketing budget in Dubai",
    "How to start an e-commerce business in UAE",
    "How to create a content marketing strategy for Dubai",
    "How to use WhatsApp Business for marketing in UAE",
    "How to optimise your website for mobile in Dubai",
    "How to track competitors online in UAE market",
    "How to create a lead generation funnel for Dubai businesses",
    "How to improve website conversion rate for UAE businesses",
  ],

  // Pillar 6 — Seasonal & Trending (Saturday = day 6)
  6: [
    "Ramadan marketing strategy for UAE businesses 2026",
    "Eid marketing campaigns: best practices for Dubai brands",
    "GITEX 2026: how Dubai tech businesses can prepare",
    "Dubai Shopping Festival: digital marketing guide for retailers",
    "UAE National Day marketing ideas for businesses",
    "Back to school marketing for UAE education businesses",
    "Summer slowdown strategy for Dubai businesses",
    "New year digital marketing plan for UAE businesses 2027",
    "AI trends in digital marketing for UAE businesses 2026",
    "What UAE businesses should do after a Google algorithm update",
    "Dubai Expo legacy: business opportunities in 2026",
    "How Dubai businesses should respond to TikTok trends",
    "ADIPEC 2026: digital marketing for UAE energy sector",
    "Dubai real estate boom: digital marketing opportunities",
  ],

  // Pillar 7 — Case Study / Story (Sunday = day 0)
  7: [
    "How a Dubai restaurant increased online bookings by 300 percent",
    "Case study: taking a UAE e-commerce store from zero to AED 100k monthly",
    "How a Dubai real estate agency doubled leads with SEO",
    "Case study: Google Ads for a Dubai clinic — results after 3 months",
    "How a Dubai startup got on page one of Google in 90 days",
    "Case study: rebuilding a slow WordPress site in Next.js for a UAE client",
    "How Osama Tahir helped a Dubai retailer reduce cost-per-lead by 60 percent",
    "Case study: social media marketing for a Dubai luxury brand",
    "From no website to 500 monthly leads: a Dubai SME story",
    "Case study: AWS migration for a UAE SaaS company",
    "How a Dubai hotel increased direct bookings through SEO",
    "Case study: complete digital transformation for a UAE logistics company",
  ],
};

// ─── Read existing posts ──────────────────────────────────────────────────────
function getExistingPosts(): { slug: string; title: string }[] {
  const content = fs.readFileSync(BLOG_FILE, "utf-8");
  const slugMatches = content.matchAll(/slug:\s*"([^"]+)"/g);
  const titleMatches = content.matchAll(/title:\s*"([^"]+)"/g);

  const slugs = [...slugMatches].map((m) => m[1]);
  const titles = [...titleMatches].map((m) => m[1]);

  return slugs.map((slug, i) => ({ slug, title: titles[i] ?? "" }));
}

// ─── Pick today's topic using weekly pillar rotation ─────────────────────────
function pickTopic(existingPosts: { title: string }[]): string {
  const existingTitles = existingPosts.map((p) => p.title.toLowerCase());

  // Get today's day of week (0=Sun, 1=Mon … 6=Sat) → map to pillar
  // Sun=7, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6
  const dow = new Date().getDay(); // 0–6
  const pillarKey = dow === 0 ? 7 : dow; // remap Sunday to 7
  const todaysPillar = PILLARS[pillarKey] ?? PILLARS[1];

  // Find first topic in today's pillar not yet covered
  for (const topic of todaysPillar) {
    const alreadyCovered = existingTitles.some((t) => {
      const topicWords = topic.toLowerCase().split(" ").slice(0, 5).join(" ");
      return t.includes(topicWords) || topicWords.includes(t.split(" ").slice(0, 4).join(" "));
    });
    if (!alreadyCovered) return topic;
  }

  // Today's pillar exhausted — search all other pillars
  const allTopics = Object.values(PILLARS).flat();
  for (const topic of allTopics) {
    const alreadyCovered = existingTitles.some((t) => {
      const topicWords = topic.toLowerCase().split(" ").slice(0, 5).join(" ");
      return t.includes(topicWords);
    });
    if (!alreadyCovered) return topic;
  }

  // All topics covered — cycle by day of year
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return allTopics[dayOfYear % allTopics.length];
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

// ─── Generate & save blog image with DALL-E 3 ────────────────────────────────
function downloadImage(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const protocol = url.startsWith("https") ? https : http;
    protocol.get(url, (res) => {
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function generateBlogImage(post: BlogPost): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    console.log("⚠️  OPENAI_API_KEY not set — skipping image generation");
    return post.image;
  }

  // Build a DALL-E 3 prompt that matches the site's dark professional aesthetic
  const categoryStyle: Record<string, string> = {
    "Web Development": "modern code editor, dark background, glowing UI elements, web design",
    "SEO": "Google search results, analytics charts, data visualization, growth metrics",
    "Digital Marketing": "social media icons, digital campaign, data-driven marketing",
    "Google Ads": "Google Ads dashboard, PPC campaign, pay-per-click advertising",
    "Social Media": "social media platforms, content creation, engagement metrics",
    "Business Strategy": "business meeting Dubai skyline, strategy planning, professional",
    "Cloud & AWS": "cloud infrastructure, server racks, AWS architecture diagram",
    "Tools": "software tools, productivity apps, digital workspace",
    "Marketing": "marketing funnel, leads, conversion, analytics",
  };

  const styleHint = categoryStyle[post.category] ?? "digital marketing, professional business";

  const imagePrompt = `Professional blog header image for an article titled "${post.title}".
Style: Dark luxury aesthetic, deep charcoal/black background, amber/gold accent colors (#f59e0b),
minimalist and modern, high-end Dubai business feel.
Visual concept: ${styleHint}.
No text overlays. Cinematic lighting. Shot as a wide banner (16:9 ratio).
High quality, photorealistic or clean digital illustration style.`;

  console.log(`\n🎨 Generating image with DALL-E 3...`);
  console.log(`   Prompt: ${imagePrompt.slice(0, 100)}...`);

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: imagePrompt,
    n: 1,
    size: "1792x1024",
    quality: "standard",
    style: "vivid",
  });

  const imageUrl = response.data[0]?.url;
  if (!imageUrl) throw new Error("DALL-E 3 returned no image URL");

  // Derive filename from post.image field (e.g. /images/blog/website-cost-dubai.jpg)
  const imagePath = path.join(PROJECT_ROOT, "public", post.image);
  const imageDir = path.dirname(imagePath);
  if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir, { recursive: true });

  await downloadImage(imageUrl, imagePath);
  console.log(`✅ Image saved: public${post.image}`);

  return post.image;
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

  // 5. Generate image with DALL-E 3
  await generateBlogImage(post);

  // 6. Append to blog.ts
  appendToBlogFile(post);

  // 7. Update sitemap if needed
  updateSitemap(post.slug);

  console.log("\n" + "═".repeat(60));
  console.log("✅ BLOG AGENT COMPLETE");
  console.log(`📌 New post: ${SITE_URL}/blog/${post.slug}`);
  console.log(`🖼️  Image: public${post.image}`);
  console.log("═".repeat(60));
}

main().catch((err) => {
  console.error("❌ Blog Agent failed:", err);
  process.exit(1);
});
