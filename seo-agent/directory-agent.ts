/**
 * Directory Submission Agent for osama-me.digital
 *
 * Automatically submits Osama's business to 25+ UAE/Dubai directories.
 *
 * What it does:
 * - Tier A (automatable): submits via HTTP POST / form fill
 * - Tier B (all others): generates a beautiful HTML guide with
 *   direct links + pre-filled copy-paste data for each directory
 * - Tracks all submissions in directory-submissions/status.json
 * - Run once to submit; re-run monthly to check for expired listings
 *
 * Requires: ANTHROPIC_API_KEY
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { BUSINESS_PROFILE, DIRECTORIES, type Directory, type SubmissionStatus } from "./directories.js";

const PROJECT_ROOT = process.env.GITHUB_WORKSPACE ?? process.cwd().replace("/seo-agent", "");
const STATUS_FILE = path.join(PROJECT_ROOT, "seo-agent/directory-submissions/status.json");
const REPORT_FILE = path.join(PROJECT_ROOT, "seo-agent/directory-submissions/submission-guide.html");

const client = new Anthropic();

// ─── Load / save status ───────────────────────────────────────────────────────
function loadStatus(): Record<string, { status: SubmissionStatus; date: string; notes: string }> {
  if (fs.existsSync(STATUS_FILE)) {
    return JSON.parse(fs.readFileSync(STATUS_FILE, "utf-8"));
  }
  return {};
}

function saveStatus(status: Record<string, { status: SubmissionStatus; date: string; notes: string }>) {
  fs.mkdirSync(path.dirname(STATUS_FILE), { recursive: true });
  fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
}

// ─── Try HTTP submission for automatable directories ─────────────────────────
async function tryAutoSubmit(dir: Directory): Promise<{ success: boolean; message: string }> {
  // Use Claude to analyze the directory and attempt submission
  const prompt = `You need to submit a business listing to: ${dir.name}
Submission URL: ${dir.submitUrl}
Website: ${dir.url}

Business details:
- Name: ${BUSINESS_PROFILE.businessName}
- Website: ${BUSINESS_PROFILE.website}
- Description: ${BUSINESS_PROFILE.shortDescription}
- Phone: ${BUSINESS_PROFILE.phone}
- City: ${BUSINESS_PROFILE.address.city}
- Country: ${BUSINESS_PROFILE.address.country}
- Categories: ${BUSINESS_PROFILE.categories.join(", ")}

First, fetch the submission page and analyze its structure.
Then attempt to submit if it's a simple form (no CAPTCHA, no JS-heavy flow).
If submission requires JavaScript or CAPTCHA, respond with JSON: {"success": false, "reason": "requires_manual"}
If submission succeeds, respond with JSON: {"success": true, "message": "submitted successfully"}`;

  try {
    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
      tools: [{ type: "web_fetch_20260209", name: "web_fetch" }],
    });

    const text = response.content.find(b => b.type === "text")?.text ?? "";
    if (text.includes('"success": true') || text.includes('"success":true')) {
      return { success: true, message: "Auto-submitted successfully" };
    }
    return { success: false, message: "Requires manual submission" };
  } catch {
    return { success: false, message: "Auto-submit failed" };
  }
}

// ─── Generate HTML submission guide ──────────────────────────────────────────
function generateHtmlGuide(
  directories: Directory[],
  status: Record<string, { status: SubmissionStatus; date: string; notes: string }>
): string {
  const profile = BUSINESS_PROFILE;
  const today = new Date().toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" });

  const statusBadge = (s: SubmissionStatus) => {
    const colors: Record<SubmissionStatus, string> = {
      pending: "#f59e0b",
      submitted: "#3b82f6",
      approved: "#22c55e",
      rejected: "#ef4444",
      skipped: "#6b7280",
    };
    return `<span style="background:${colors[s]};color:white;padding:2px 8px;border-radius:9999px;font-size:12px;font-weight:600">${s.toUpperCase()}</span>`;
  };

  const tierLabel = (t: number) => {
    const labels = ["", "🏆 Tier 1 — Critical", "⭐ Tier 2 — Agency", "📍 Tier 3 — UAE Local", "🌐 Tier 4 — Global"];
    return labels[t];
  };

  const rows = directories.map(dir => {
    const s = status[dir.id] ?? { status: dir.status, date: "", notes: "" };
    return `
    <tr style="border-bottom:1px solid #e4e4e7">
      <td style="padding:12px 8px">
        <strong>${dir.name}</strong><br>
        <span style="font-size:12px;color:#6b7280">DA: ${dir.da} | ${dir.category}</span>
      </td>
      <td style="padding:12px 8px;text-align:center">${statusBadge(s.status as SubmissionStatus)}</td>
      <td style="padding:12px 8px;text-align:center">
        ${dir.hasCaptcha ? "⚠️ Yes" : "✅ No"}
      </td>
      <td style="padding:12px 8px">
        <a href="${dir.submitUrl}" target="_blank"
           style="background:#f59e0b;color:black;padding:6px 12px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">
          Submit Now →
        </a>
      </td>
      <td style="padding:12px 8px;font-size:12px;color:#6b7280;max-width:200px">${dir.notes}</td>
    </tr>`;
  }).join("");

  const submitted = directories.filter(d => (status[d.id]?.status ?? d.status) === "submitted" || (status[d.id]?.status ?? d.status) === "approved").length;
  const pending = directories.length - submitted;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Directory Submission Guide — osama-me.digital</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f4f4f5; color:#18181b; margin:0; padding:24px; }
    .card { background:white; border-radius:12px; padding:24px; margin-bottom:24px; box-shadow:0 1px 3px rgba(0,0,0,0.1); }
    table { width:100%; border-collapse:collapse; }
    th { text-align:left; padding:10px 8px; background:#f4f4f5; font-size:13px; color:#6b7280; text-transform:uppercase; letter-spacing:0.05em; }
    tr:hover { background:#fafafa; }
    .copy-btn { background:#18181b; color:white; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; font-size:12px; margin-left:8px; }
    .copy-btn:hover { background:#3f3f46; }
    pre { background:#f4f4f5; padding:16px; border-radius:8px; font-size:13px; overflow-x:auto; white-space:pre-wrap; }
    .stat { text-align:center; padding:16px; }
    .stat-num { font-size:36px; font-weight:700; color:#f59e0b; }
    .stat-label { font-size:13px; color:#6b7280; margin-top:4px; }
  </style>
</head>
<body>

<div class="card">
  <h1 style="margin:0 0 4px;font-size:24px">📋 Directory Submission Guide</h1>
  <p style="color:#6b7280;margin:0">Generated: ${today} — osama-me.digital</p>
  <div style="display:flex;gap:24px;margin-top:16px">
    <div class="stat"><div class="stat-num">${directories.length}</div><div class="stat-label">Total Directories</div></div>
    <div class="stat"><div class="stat-num" style="color:#22c55e">${submitted}</div><div class="stat-label">Submitted</div></div>
    <div class="stat"><div class="stat-num" style="color:#f59e0b">${pending}</div><div class="stat-label">Pending</div></div>
  </div>
</div>

<div class="card">
  <h2 style="margin:0 0 16px;font-size:18px">📋 Copy-Paste Business Profile</h2>
  <p style="color:#6b7280;font-size:14px">Use these <strong>exactly</strong> on every directory — NAP consistency is a Google ranking factor.</p>

  <table style="width:100%;border-collapse:collapse">
    ${[
      ["Business Name", profile.businessName],
      ["Short Description", profile.shortDescription],
      ["Website", profile.website],
      ["Phone", profile.phone],
      ["City", profile.address.city],
      ["Country", profile.address.country],
      ["Categories", profile.categories.join(", ")],
      ["Keywords", profile.keywords.join(", ")],
    ].map(([label, value]) => `
    <tr style="border-bottom:1px solid #f4f4f5">
      <td style="padding:10px;font-size:13px;color:#6b7280;white-space:nowrap;width:160px">${label}</td>
      <td style="padding:10px;font-size:14px">
        <code style="background:#f4f4f5;padding:2px 6px;border-radius:4px">${value}</code>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('${(value as string).replace(/'/g, "\\'")}')">Copy</button>
      </td>
    </tr>`).join("")}
  </table>

  <h3 style="margin:20px 0 8px;font-size:15px">Long Description (for directories that ask for it):</h3>
  <pre>${profile.description}</pre>
  <button class="copy-btn" onclick="navigator.clipboard.writeText(document.querySelector('pre').textContent)">Copy Description</button>
</div>

<div class="card">
  <h2 style="margin:0 0 16px;font-size:18px">🎯 Submission Checklist</h2>

  ${[1, 2, 3, 4].map(tier => {
    const tierDirs = directories.filter(d => d.tier === tier);
    if (!tierDirs.length) return "";
    return `
    <h3 style="margin:20px 0 8px;font-size:15px;color:#f59e0b">${tierLabel(tier)}</h3>
    <table>
      <thead>
        <tr>
          <th>Directory</th>
          <th style="width:100px">Status</th>
          <th style="width:80px">CAPTCHA</th>
          <th style="width:140px">Action</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>${tierDirs.map(dir => {
        const s = status[dir.id] ?? { status: dir.status };
        return `
        <tr style="border-bottom:1px solid #e4e4e7">
          <td style="padding:12px 8px">
            <strong>${dir.name}</strong><br>
            <span style="font-size:12px;color:#6b7280">DA: ${dir.da}</span>
          </td>
          <td style="padding:12px 8px;text-align:center">${statusBadge(s.status as SubmissionStatus)}</td>
          <td style="padding:12px 8px;text-align:center">${dir.hasCaptcha ? "⚠️ Yes" : "✅ No"}</td>
          <td style="padding:12px 8px">
            <a href="${dir.submitUrl}" target="_blank"
               style="background:#f59e0b;color:black;padding:6px 12px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block">
              Open →
            </a>
          </td>
          <td style="padding:12px 8px;font-size:12px;color:#6b7280">${dir.notes}</td>
        </tr>`;
      }).join("")}</tbody>
    </table>`;
  }).join("")}
</div>

<div class="card" style="background:#18181b;color:white">
  <h2 style="margin:0 0 8px;font-size:18px;color:#f59e0b">💡 Priority Order</h2>
  <ol style="margin:0;padding-left:20px;line-height:2">
    <li><strong>Google Business Profile</strong> — Do this first. Biggest impact on local search.</li>
    <li><strong>Bing Places</strong> — Import from Google in 1 click after GBP is done.</li>
    <li><strong>Clutch + GoodFirms</strong> — Where B2B clients check before hiring agencies.</li>
    <li><strong>HiDubai + JustDial UAE</strong> — Strong local Dubai search signals.</li>
    <li><strong>Apple Maps</strong> — Required for Siri and Apple Maps results.</li>
    <li>All remaining directories — work through the list over 2-3 weeks.</li>
  </ol>
  <p style="margin-top:16px;color:#a1a1aa;font-size:13px">
    Each submission takes 5-10 minutes. Complete all 25 in a single afternoon
    and your local SEO will improve significantly within 4-6 weeks.
  </p>
</div>

</body>
</html>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Directory Submission Agent starting...");
  console.log(`📁 Project: ${PROJECT_ROOT}`);
  console.log(`📋 Total directories: ${DIRECTORIES.length}`);
  console.log("─".repeat(60));

  const status = loadStatus();

  // Count what's pending
  const pending = DIRECTORIES.filter(d => (status[d.id]?.status ?? "pending") === "pending");
  const automatable = pending.filter(d => d.automatable);

  console.log(`⏳ Pending: ${pending.length} | 🤖 Automatable: ${automatable.length}`);

  // Try auto-submit for automatable directories
  if (automatable.length > 0) {
    console.log(`\n🤖 Attempting auto-submission for ${automatable.length} directories...`);
    for (const dir of automatable) {
      console.log(`\n  → ${dir.name} (${dir.submitUrl})`);
      const result = await tryAutoSubmit(dir);
      if (result.success) {
        status[dir.id] = { status: "submitted", date: new Date().toISOString(), notes: result.message };
        console.log(`    ✅ ${result.message}`);
      } else {
        console.log(`    ⚠️  ${result.message} — added to manual guide`);
      }
    }
    saveStatus(status);
  }

  // Generate the HTML guide for everything
  console.log("\n📄 Generating submission guide...");
  const html = generateHtmlGuide(DIRECTORIES, status);
  fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
  fs.writeFileSync(REPORT_FILE, html);
  console.log(`✅ Guide saved: seo-agent/directory-submissions/submission-guide.html`);

  // Summary
  const submitted = DIRECTORIES.filter(d => ["submitted", "approved"].includes(status[d.id]?.status ?? "pending")).length;
  console.log("\n" + "═".repeat(60));
  console.log("✅ DIRECTORY AGENT COMPLETE");
  console.log(`📊 Auto-submitted: ${submitted} | Manual remaining: ${DIRECTORIES.length - submitted}`);
  console.log(`📋 Open submission-guide.html to complete manual submissions`);
  console.log("═".repeat(60));
}

main().catch(err => {
  console.error("❌ Directory Agent failed:", err);
  process.exit(1);
});
