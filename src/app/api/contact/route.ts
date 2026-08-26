import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site-config";
import type { AdsAttribution } from "@/lib/attribution";

function formatAttribution(attribution: AdsAttribution | undefined) {
  if (!attribution || typeof attribution !== "object") return [];
  const lines: string[] = [];
  const entries: [keyof AdsAttribution, string | undefined][] = [
    ["gclid", attribution.gclid],
    ["gbraid", attribution.gbraid],
    ["wbraid", attribution.wbraid],
    ["utm_source", attribution.utm_source],
    ["utm_medium", attribution.utm_medium],
    ["utm_campaign", attribution.utm_campaign],
    ["utm_term", attribution.utm_term],
    ["utm_content", attribution.utm_content],
    ["landing_page_url", attribution.landing_page_url],
    ["referrer", attribution.referrer],
    ["timestamp", attribution.timestamp],
  ];
  for (const [key, value] of entries) {
    if (value) lines.push(`${key}: ${value}`);
  }
  return lines;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      projectType,
      projectStage,
      budget,
      message,
      subject,
      source,
      landingPage,
      attribution,
    } = body as Record<string, unknown>;

    const nameStr = typeof name === "string" ? name : "";
    const emailStr = typeof email === "string" ? email : "";
    const messageStr = typeof message === "string" ? message : "";
    const companyStr = typeof company === "string" ? company : undefined;
    const projectTypeStr = typeof projectType === "string" ? projectType : undefined;
    const projectStageStr = typeof projectStage === "string" ? projectStage : undefined;
    const budgetStr = typeof budget === "string" ? budget : undefined;
    const subjectStr = typeof subject === "string" ? subject : undefined;
    const sourceStr = typeof source === "string" ? source : undefined;
    const landingPageStr = typeof landingPage === "string" ? landingPage : undefined;
    const attributionObj =
      attribution && typeof attribution === "object"
        ? (attribution as AdsAttribution)
        : undefined;

    if (!nameStr || !emailStr || !messageStr) {
      return NextResponse.json({ error: "Name, work email and project details are required." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST ?? "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpUser = process.env.SMTP_USER ?? siteConfig.email;
    const smtpPass = process.env.SMTP_PASS;
    const notificationInbox = siteConfig.email;

    if (notificationInbox.toLowerCase().includes("gmail.com")) {
      console.error("Refusing to send contact notifications to a Gmail address");
      return NextResponse.json({ error: "Email service misconfigured" }, { status: 500 });
    }

    if (!smtpPass) {
      console.error("SMTP_PASS not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const derivedSubject =
      subjectStr || (projectTypeStr ? `Project inquiry — ${projectTypeStr}` : "Project inquiry");

    const attributionLines = formatAttribution(attributionObj);

    const text = [
      `Name: ${nameStr}`,
      `Email: ${emailStr}`,
      companyStr ? `Company: ${companyStr}` : null,
      projectTypeStr ? `Project type: ${projectTypeStr}` : null,
      projectStageStr ? `Project stage: ${projectStageStr}` : null,
      budgetStr ? `Budget: ${budgetStr}` : null,
      sourceStr ? `Source: ${sourceStr}` : null,
      landingPageStr ? `Landing page: ${landingPageStr}` : null,
      "",
      "Details:",
      messageStr,
      attributionLines.length > 0 ? "" : null,
      attributionLines.length > 0 ? "Attribution:" : null,
      ...attributionLines,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const html = `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(emailStr)}">${escapeHtml(emailStr)}</a></p>
      ${companyStr ? `<p><strong>Company:</strong> ${escapeHtml(companyStr)}</p>` : ""}
      ${projectTypeStr ? `<p><strong>Project type:</strong> ${escapeHtml(projectTypeStr)}</p>` : ""}
      ${projectStageStr ? `<p><strong>Project stage:</strong> ${escapeHtml(projectStageStr)}</p>` : ""}
      ${budgetStr ? `<p><strong>Budget:</strong> ${escapeHtml(budgetStr)}</p>` : ""}
      ${sourceStr ? `<p><strong>Source:</strong> ${escapeHtml(sourceStr)}</p>` : ""}
      ${landingPageStr ? `<p><strong>Landing page:</strong> ${escapeHtml(landingPageStr)}</p>` : ""}
      <hr />
      <p>${escapeHtml(messageStr).replace(/\n/g, "<br>")}</p>
      ${
        attributionLines.length > 0
          ? `<hr /><h3>Attribution</h3><pre style="white-space:pre-wrap;font-size:12px">${escapeHtml(
              attributionLines.join("\n")
            )}</pre>`
          : ""
      }
    `;

    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${smtpUser}>`,
      to: notificationInbox,
      replyTo: emailStr,
      subject: `[Contact Form] ${derivedSubject}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
