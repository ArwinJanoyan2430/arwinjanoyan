export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({ message: "Please complete all fields." });
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ message: "Your message is too long." });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_RECEIVER_EMAIL } = process.env;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_RECEIVER_EMAIL) {
    return res.status(500).json({ message: "Email service is not configured." });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_RECEIVER_EMAIL],
        reply_to: email.trim(),
        subject: `Portfolio enquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return res.status(502).json({ message: "Unable to send your message right now." });
    }

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ message: "Unable to send your message right now." });
  }
}
