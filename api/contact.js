import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: "Name, email and message are required.",
      });
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      (subject && subject.length > 200) ||
      message.length > 5000
    ) {
      return res.status(400).json({
        error: "One or more fields are too long.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Mithilesh Portfolio <portfolio@mithileshyadav114.com.np>",
      to: ["hashtagmmyth114@gmail.com"],

      replyTo: email,

      subject: subject?.trim()
        ? `Portfolio: ${subject.trim()}`
        : `Portfolio message from ${name.trim()}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio message</h2>

          <p>
            <strong>Name:</strong><br>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong><br>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Subject:</strong><br>
            ${escapeHtml(subject || "No subject")}
          </p>

          <p>
            <strong>Message:</strong><br>
            ${escapeHtml(message).replace(/\n/g, "<br>")}
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
