/**
 * pull-leads.mjs
 * Pulls local business leads from Dubai via Apify Google Maps Scraper.
 * Run: node scripts/pull-leads.mjs
 * Results saved to: scripts/leads-output.csv
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ─── Load token from .env.local ──────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");
const envVars = Object.fromEntries(
  fs
    .readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => l.split("=").map((s) => s.trim()))
);
const TOKEN = envVars["APIFY_API_TOKEN"];
if (!TOKEN) throw new Error("APIFY_API_TOKEN missing from .env.local");

// ─── Config ──────────────────────────────────────────────────────────────────
const ACTOR_ID = "compass~crawler-google-places"; // Google Maps Scraper
const BASE_URL = "https://api.apify.com/v2";

// Dubai business categories that are potential clients
const SEARCH_TERMS = [
  "restaurant Dubai",
  "real estate agency Dubai",
  "retail shop Dubai",
  "beauty salon Dubai",
  "dental clinic Dubai",
  "gym fitness Dubai",
  "hotel Dubai",
  "car rental Dubai",
  "interior design company Dubai",
  "accounting firm Dubai",
  "law firm Dubai",
  "logistics company Dubai",
];

const INPUT = {
  searchStringsArray: SEARCH_TERMS,
  maxCrawledPlacesPerSearch: 20, // 20 per category = ~240 leads total
  language: "en",
  countryCode: "ae",
  scrapeContacts: true,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
async function apify(method, endpoint, body) {
  const url = `${BASE_URL}${endpoint}?token=${TOKEN}`;
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Apify ${method} ${endpoint} → ${res.status}: ${text}`);
  }
  return res.json();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function escapeCSV(val) {
  if (val == null) return "";
  const s = String(val).replace(/"/g, '""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Starting Apify Google Maps Scraper run for Dubai leads...");
  console.log(`   Categories: ${SEARCH_TERMS.length}`);
  console.log(`   Max per category: ${INPUT.maxCrawledPlacesPerSearch}`);
  console.log(`   Expected leads: ~${SEARCH_TERMS.length * INPUT.maxCrawledPlacesPerSearch}\n`);

  // Start actor run
  const run = await apify("POST", `/acts/${ACTOR_ID}/runs`, INPUT);
  const runId = run.data?.id;
  if (!runId) throw new Error("Could not get runId from Apify response");
  console.log(`✅ Run started. ID: ${runId}`);
  console.log("⏳ Waiting for run to finish (this may take 5–15 minutes)...\n");

  // Poll until done
  let status = "RUNNING";
  let attempts = 0;
  while (status === "RUNNING" || status === "READY") {
    await sleep(30_000); // poll every 30s
    attempts++;
    const poll = await apify("GET", `/actor-runs/${runId}`);
    status = poll.data?.status;
    const elapsed = attempts * 0.5;
    console.log(`   [${elapsed.toFixed(1)}min] Status: ${status}`);
  }

  if (status !== "SUCCEEDED") {
    throw new Error(`Run ended with status: ${status}. Check Apify console.`);
  }

  console.log("\n✅ Run succeeded! Fetching results...");

  // Fetch dataset items (paginated, max 1000)
  const dataset = await apify("GET", `/actor-runs/${runId}/dataset/items`);
  const items = Array.isArray(dataset) ? dataset : dataset?.items ?? [];
  console.log(`📦 Total leads fetched: ${items.length}`);

  if (items.length === 0) {
    console.log("⚠️  No items returned. Try adjusting search terms or maxCrawledPlacesPerSearch.");
    return;
  }

  // Build CSV
  const headers = [
    "name",
    "category",
    "address",
    "city",
    "phone",
    "website",
    "email",
    "rating",
    "reviewCount",
    "googleMapsUrl",
  ];

  const rows = items.map((item) => {
    return headers.map((h) => {
      switch (h) {
        case "name":        return escapeCSV(item.title || item.name);
        case "category":    return escapeCSV(item.categoryName || item.categories?.[0]);
        case "address":     return escapeCSV(item.address);
        case "city":        return escapeCSV(item.city || "Dubai");
        case "phone":       return escapeCSV(item.phone || item.phoneUnformatted);
        case "website":     return escapeCSV(item.website || item.url);
        case "email":       return escapeCSV(item.email || item.emails?.[0]);
        case "rating":      return escapeCSV(item.totalScore || item.rating);
        case "reviewCount": return escapeCSV(item.reviewsCount || item.reviewCount);
        case "googleMapsUrl": return escapeCSV(item.url || item.googleMapsUrl);
        default:            return "";
      }
    });
  });

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const outPath = path.resolve(__dirname, "leads-output.csv");
  fs.writeFileSync(outPath, csvContent, "utf8");

  console.log(`\n🎉 Done! ${items.length} leads saved to:\n   ${outPath}`);
  console.log("\nTop 5 leads preview:");
  items.slice(0, 5).forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.title || item.name} | ${item.phone || "—"} | ${item.website || "—"}`);
  });
}

main().catch((err) => {
  console.error("\n❌ Error:", err.message);
  process.exit(1);
});
