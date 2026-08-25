/* global process */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  const contentType = req.headers["content-type"] || "";

  if (!contentType.includes("application/json")) {
    return res.status(415).json({
      error: "Unsupported content type.",
    });
  }

  try {
    const { name, email, subject, message, website } = req.body || {};

    // Honeypot: silently accept obvious bot submissions.
    if (website?.trim()) {
      return res.status(200).json({
        success: true,
      });
    }

    const cleanName = name?.trim();
    const cleanEmail = email?.trim().toLowerCase();
    const cleanSubject = subject?.trim();
    const cleanMessage = message?.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        error: "Name, email and message are required.",
      });
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 200 ||
      (cleanSubject && cleanSubject.length > 200) ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        error: "One or more fields are too long.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Mithilesh Portfolio <portfolio@mithileshyadav114.com.np>",

      to: ["mythlesh114@gmail.com"],

      replyTo: cleanEmail,

      subject: cleanSubject
        ? `Portfolio: ${cleanSubject}`
        : `Portfolio message from ${cleanName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio message</h2>

          <p>
            <strong>Name:</strong><br>
            ${escapeHtml(cleanName)}
          </p>

          <p>
            <strong>Email:</strong><br>
            ${escapeHtml(cleanEmail)}
          </p>

          <p>
            <strong>Subject:</strong><br>
            ${escapeHtml(cleanSubject || "No subject")}
          </p>

          <p>
            <strong>Message:</strong><br>
            ${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        error: "Unable to send message.",
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
