"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/content/site";
import {
  parseContactFormData,
  validateContactInput,
  type ContactFieldErrors,
} from "@/lib/contact/validation";

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: ContactFieldErrors;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const input = parseContactFormData(formData);
  const validation = validateContactInput(input);

  if (!validation.ok) {
    return {
      ok: false,
      fieldErrors: validation.fieldErrors,
      error: "Please check the form.",
    };
  }

  const { name, email, company, message } = validation.data;
  const payload = {
    name,
    email,
    company,
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[contact] enquiry received (Resend not configured)", payload);
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Mathnetica <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Project enquiry from ${name} (${company})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        "",
        "What are you building?",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return {
        ok: false,
        error: "Could not send the enquiry. Please email us directly.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("[contact] unexpected error", error);
    return {
      ok: false,
      error: "Could not send the enquiry. Please email us directly.",
    };
  }
}
