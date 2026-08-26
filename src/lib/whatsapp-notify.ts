import { siteConfig } from "@/data/site-config";

export type LeadWhatsAppPayload = {
  title: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  projectStage?: string;
  budget?: string;
  message: string;
  landingPage?: string;
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function buildLeadMessage(lead: LeadWhatsAppPayload) {
  const lines = [
    `🔔 ${lead.title}`,
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `WhatsApp/Phone: ${lead.phone}` : null,
    lead.company ? `Company: ${lead.company}` : null,
    lead.projectType ? `Type: ${lead.projectType}` : null,
    lead.projectStage ? `Stage: ${lead.projectStage}` : null,
    lead.budget ? `Budget: ${lead.budget}` : null,
    lead.landingPage ? `Page: ${lead.landingPage}` : null,
    "",
    "Details:",
    lead.message.length > 500 ? `${lead.message.slice(0, 500)}…` : lead.message,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

async function sendViaCallMeBot(phoneDigits: string, text: string, apiKey: string) {
  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", phoneDigits);
  url.searchParams.set("text", text);
  url.searchParams.set("apikey", apiKey);

  const res = await fetch(url.toString(), { method: "GET" });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`CallMeBot failed (${res.status}): ${body.slice(0, 200)}`);
  }
}

async function sendViaMetaCloudApi(
  phoneDigits: string,
  text: string,
  accessToken: string,
  phoneNumberId: string
) {
  const res = await fetch(
    `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phoneDigits,
        type: "text",
        text: { preview_url: false, body: text },
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`WhatsApp Cloud API failed (${res.status}): ${body.slice(0, 300)}`);
  }
}

/**
 * Optional WhatsApp lead alert to Osama.
 * Never throws to the caller — failures are logged only so form submit still succeeds.
 *
 * Configure ONE of:
 * - CALLMEBOT_API_KEY (easiest personal alerts)
 * - WHATSAPP_ACCESS_TOKEN + WHATSAPP_PHONE_NUMBER_ID (Meta Cloud API)
 */
export async function notifyLeadOnWhatsApp(lead: LeadWhatsAppPayload) {
  const notifyTo =
    process.env.WHATSAPP_NOTIFY_TO?.trim() || siteConfig.whatsapp;
  const phoneDigits = digitsOnly(notifyTo);
  if (!phoneDigits) {
    console.warn("WhatsApp notify skipped: no notify number");
    return;
  }

  const text = buildLeadMessage(lead);
  const callMeBotKey = process.env.CALLMEBOT_API_KEY?.trim();
  const metaToken = process.env.WHATSAPP_ACCESS_TOKEN?.trim();
  const metaPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();

  try {
    if (callMeBotKey) {
      await sendViaCallMeBot(phoneDigits, text, callMeBotKey);
      return;
    }

    if (metaToken && metaPhoneId) {
      await sendViaMetaCloudApi(phoneDigits, text, metaToken, metaPhoneId);
      return;
    }

    // Not configured — silent no-op (email still sent).
  } catch (err) {
    console.error("WhatsApp lead notification failed:", err);
  }
}
