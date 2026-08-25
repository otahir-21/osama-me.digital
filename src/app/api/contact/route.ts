import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site-config";

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
    } = body as Record<string, string | undefined>;

    if (!name || !email || !message) {
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
      subject || (projectType ? `Project inquiry — ${projectType}` : "Project inquiry");

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      projectType ? `Project type: ${projectType}` : null,
      projectStage ? `Project stage: ${projectStage}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      "Details:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const html = `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      ${projectType ? `<p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>` : ""}
      ${projectStage ? `<p><strong>Project stage:</strong> ${escapeHtml(projectStage)}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${smtpUser}>`,
      to: notificationInbox,
      replyTo: email,
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
