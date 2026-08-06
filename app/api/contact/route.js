import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company } from "../../../data/siteContent";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-. \s]{7,25}$/;

const cleanString = (value, maxLength = 120) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

const cleanMessage = (value) =>
  String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, 3000);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildEmailText = (submission) => [
  "New Oru Studio contact form submission",
  "",
  `Name: ${submission.name}`,
  `Email: ${submission.email}`,
  `Phone: ${submission.phone || "Not provided"}`,
  `Budget: ${submission.budget}`,
  "",
  "Message:",
  submission.message,
  "",
  `Submitted: ${submission.submittedAt}`,
].join("\n");

const buildEmailHtml = (submission) => `
  <h2>New Oru Studio contact form submission</h2>
  <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
  <p><strong>Phone:</strong> ${escapeHtml(submission.phone || "Not provided")}</p>
  <p><strong>Budget:</strong> ${escapeHtml(submission.budget)}</p>
  <p><strong>Submitted:</strong> ${escapeHtml(submission.submittedAt)}</p>
  <hr />
  <p>${escapeHtml(submission.message).replace(/\n/g, "<br />")}</p>
`;

const getRecipientEmail = () =>
  process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER || company.email;

const validateSubmission = (payload) => {
  const submission = {
    name: cleanString(payload.name),
    email: cleanString(payload.email, 180).toLowerCase(),
    phone: cleanString(payload.phone, 40),
    budget: cleanString(payload.budget || payload.select),
    message: cleanMessage(payload.message),
    consent: Boolean(payload.consent),
    submittedAt: new Date().toISOString(),
  };
  const errors = {};

  if (!submission.name) errors.name = "Name is required.";
  if (!submission.email || !emailPattern.test(submission.email)) {
    errors.email = "A valid email is required.";
  }
  if (submission.phone && !phonePattern.test(submission.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!submission.budget) errors.budget = "Budget is required.";
  if (!submission.message) errors.message = "Project details are required.";
  if (!submission.consent) errors.consent = "Privacy Policy consent is required.";

  return { submission, errors };
};

const sendWebhook = async (submission) => {
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source: "oru-studio-contact-form",
      recipient: getRecipientEmail(),
      ...submission,
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }

  return true;
};

const sendSmtpEmail = async (submission) => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return false;
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || `"Oru Studio" <${user}>`,
    to: getRecipientEmail(),
    replyTo: submission.email,
    subject: `New contact request from ${submission.name}`,
    text: buildEmailText(submission),
    html: buildEmailHtml(submission),
  });

  return true;
};

const sendResendEmail = async (submission) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Oru Studio <onboarding@resend.dev>",
      to: getRecipientEmail(),
      reply_to: submission.email,
      subject: `New contact request from ${submission.name}`,
      text: buildEmailText(submission),
      html: buildEmailHtml(submission),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed with status ${response.status}`);
  }

  return true;
};

const deliverSubmission = async (submission) => {
  const deliveries = [];

  if (await sendWebhook(submission)) {
    deliveries.push("webhook");
  }

  if (await sendSmtpEmail(submission)) {
    deliveries.push("smtp-email");
  }

  if (await sendResendEmail(submission)) {
    deliveries.push("email");
  }

  if (deliveries.length === 0) {
    console.info("Contact form submission received", {
      ...submission,
      recipient: getRecipientEmail(),
    });
    deliveries.push("server-log");
  }

  return deliveries;
};

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid contact form request." },
      { status: 400 }
    );
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json(
      { message: "Invalid contact form request." },
      { status: 400 }
    );
  }

  const { submission, errors } = validateSubmission(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Please check the form fields and try again.", errors },
      { status: 422 }
    );
  }

  try {
    const deliveries = await deliverSubmission(submission);

    return NextResponse.json({
      message: "Thanks. Your message has been sent.",
      deliveries,
    });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      { message: "Your message could not be sent right now. Please email us directly." },
      { status: 502 }
    );
  }
}
