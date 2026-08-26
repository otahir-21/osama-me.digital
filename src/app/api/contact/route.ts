import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site-config";
import type { AdsAttribution } from "@/lib/attribution";
import { notifyLeadOnWhatsApp } from "@/lib/whatsapp-notify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asOptionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nameStr = asString(body.name);
    const emailStr = asString(body.email);
    const messageStr = asString(body.message);
    const phoneStr = asOptionalString(body.phone);
    const companyStr = asOptionalString(body.company);
    const projectTypeStr = asOptionalString(body.projectType);
    const projectStageStr = asOptionalString(body.projectStage);
    const budgetStr = asOptionalString(body.budget);
    const subjectStr = asOptionalString(body.subject);
    const serviceStr = asOptionalString(body.service);
    const sourceStr = asOptionalString(body.source);
    const landingPageStr = asOptionalString(body.landingPage);
    const attributionObj =
      body.attribution && typeof body.attribution === "object"
        ? (body.attribution as AdsAttribution)
        : undefined;

    if (!nameStr || !emailStr || !messageStr) {
      return NextResponse.json(
        { error: "Name, work email and project details are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(emailStr)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const isLandingLead = sourceStr === "landing_page";
    if (isLandingLead) {
      if (!projectTypeStr || !projectStageStr || !budgetStr) {
        return NextResponse.json(
          { error: "Project type, stage and budget are required." },
          { status: 400 }
        );
      }
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

    const leadTitle = isLandingLead
      ? subjectStr ||
        (serviceStr?.includes("website")
          ? "New Website Lead"
          : serviceStr?.includes("mobile")
            ? "New Mobile App Lead"
            : "New Project Lead")
      : subjectStr ||
        (projectTypeStr ? `Project inquiry — ${projectTypeStr}` : "Project inquiry");

    const acquisition = [
      sourceStr ? `Source: ${sourceStr}` : null,
      attributionObj?.utm_campaign ? `Campaign: ${attributionObj.utm_campaign}` : null,
      attributionObj?.utm_term ? `Keyword / UTM term: ${attributionObj.utm_term}` : null,
      attributionObj?.utm_source ? `UTM source: ${attributionObj.utm_source}` : null,
      attributionObj?.utm_medium ? `UTM medium: ${attributionObj.utm_medium}` : null,
      attributionObj?.utm_content ? `UTM content: ${attributionObj.utm_content}` : null,
      attributionObj?.gclid ? `GCLID: ${attributionObj.gclid}` : null,
      attributionObj?.gbraid ? `GBRAID: ${attributionObj.gbraid}` : null,
      attributionObj?.wbraid ? `WBRAID: ${attributionObj.wbraid}` : null,
      landingPageStr
        ? `Landing Page: ${landingPageStr}`
        : attributionObj?.landing_page_url
          ? `Landing Page: ${attributionObj.landing_page_url}`
          : null,
      attributionObj?.referrer ? `Referrer: ${attributionObj.referrer}` : null,
      attributionObj?.timestamp ? `Timestamp: ${attributionObj.timestamp}` : null,
    ].filter((line): line is string => Boolean(line));

    const text = [
      leadTitle,
      "",
      `Name: ${nameStr}`,
      `Email: ${emailStr}`,
      phoneStr ? `WhatsApp/Phone: ${phoneStr}` : null,
      companyStr ? `Company: ${companyStr}` : null,
      projectTypeStr ? `Project Type: ${projectTypeStr}` : null,
      projectStageStr ? `Project Stage: ${projectStageStr}` : null,
      budgetStr ? `Budget: ${budgetStr}` : null,
      "",
      "Project Details:",
      messageStr,
      acquisition.length > 0 ? "" : null,
      acquisition.length > 0 ? "Acquisition:" : null,
      ...acquisition,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const html = `
      <h2>${escapeHtml(leadTitle)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(emailStr)}">${escapeHtml(emailStr)}</a></p>
      ${phoneStr ? `<p><strong>WhatsApp/Phone:</strong> ${escapeHtml(phoneStr)}</p>` : ""}
      ${companyStr ? `<p><strong>Company:</strong> ${escapeHtml(companyStr)}</p>` : ""}
      ${projectTypeStr ? `<p><strong>Project Type:</strong> ${escapeHtml(projectTypeStr)}</p>` : ""}
      ${projectStageStr ? `<p><strong>Project Stage:</strong> ${escapeHtml(projectStageStr)}</p>` : ""}
      ${budgetStr ? `<p><strong>Budget:</strong> ${escapeHtml(budgetStr)}</p>` : ""}
      <hr />
      <p><strong>Project Details:</strong></p>
      <p>${escapeHtml(messageStr).replace(/\n/g, "<br>")}</p>
      ${
        acquisition.length > 0
          ? `<hr /><h3>Acquisition</h3><pre style="white-space:pre-wrap;font-size:12px">${escapeHtml(
              acquisition.join("\n")
            )}</pre>`
          : ""
      }
    `;

    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${smtpUser}>`,
      to: notificationInbox,
      replyTo: emailStr,
      subject: isLandingLead ? leadTitle : `[Contact Form] ${leadTitle}`,
      text,
      html,
    });

    // Best-effort WhatsApp alert — never fails the form response.
    await notifyLeadOnWhatsApp({
      title: leadTitle,
      name: nameStr,
      email: emailStr,
      phone: phoneStr,
      company: companyStr,
      projectType: projectTypeStr,
      projectStage: projectStageStr,
      budget: budgetStr,
      message: messageStr,
      landingPage: landingPageStr,
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
