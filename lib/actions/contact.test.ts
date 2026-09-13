import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendMock } = vi.hoisted(() => ({
  sendMock: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

import { submitContact } from "@/lib/actions/contact";

function formDataFrom(entries: Record<string, string>) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(entries)) {
    formData.set(key, value);
  }
  return formData;
}

const validEnquiry = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  message: "We are building a production RAG platform for regulated data.",
};

describe("submitContact", () => {
  beforeEach(() => {
    sendMock.mockReset();
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_FROM_EMAIL;
    delete process.env.CONTACT_TO_EMAIL;
  });

  it("returns field errors for invalid input", async () => {
    const result = await submitContact({ ok: false }, formDataFrom({}));

    expect(result.ok).toBe(false);
    expect(result.fieldErrors?.name).toBeDefined();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("succeeds without Resend when API key is missing", async () => {
    const result = await submitContact(
      { ok: false },
      formDataFrom(validEnquiry),
    );

    expect(result).toEqual({ ok: true });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("sends email through Resend when configured", async () => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.CONTACT_TO_EMAIL = "hello@mathnetica.com";
    sendMock.mockResolvedValue({ data: { id: "msg_1" }, error: null });

    const result = await submitContact(
      { ok: false },
      formDataFrom(validEnquiry),
    );

    expect(result).toEqual({ ok: true });
    expect(sendMock).toHaveBeenCalledOnce();
    expect(sendMock.mock.calls[0]?.[0]).toMatchObject({
      to: ["hello@mathnetica.com"],
      replyTo: "ada@example.com",
      subject: "Project enquiry from Ada Lovelace (Analytical Engines)",
    });
  });

  it("returns an error when Resend fails", async () => {
    process.env.RESEND_API_KEY = "re_test";
    sendMock.mockResolvedValue({
      data: null,
      error: { message: "rate limited" },
    });

    const result = await submitContact(
      { ok: false },
      formDataFrom(validEnquiry),
    );

    expect(result.ok).toBe(false);
    expect(result.error).toMatch(/email us directly/i);
  });
});
