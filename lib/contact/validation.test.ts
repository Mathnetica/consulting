import { describe, expect, it } from "vitest";
import {
  parseContactFormData,
  validateContactInput,
} from "@/lib/contact/validation";

function formDataFrom(entries: Record<string, string>) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(entries)) {
    formData.set(key, value);
  }
  return formData;
}

describe("validateContactInput", () => {
  it("accepts a complete enquiry", () => {
    const result = validateContactInput({
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      message: "We are building a production RAG platform for regulated data.",
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.email).toBe("ada@example.com");
    }
  });

  it("requires all fields", () => {
    const result = validateContactInput({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors.name).toBeDefined();
      expect(result.fieldErrors.email).toBeDefined();
      expect(result.fieldErrors.company).toBeDefined();
      expect(result.fieldErrors.message).toBeDefined();
    }
  });

  it("rejects invalid email", () => {
    const result = validateContactInput({
      name: "Ada",
      email: "not-an-email",
      company: "Analytical Engines",
      message: "We are building a production RAG platform for regulated data.",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors.email).toBe("Enter a valid work email.");
    }
  });

  it("rejects short messages", () => {
    const result = validateContactInput({
      name: "Ada",
      email: "ada@example.com",
      company: "Analytical Engines",
      message: "Too short",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors.message).toBe(
        "Please share a bit more detail.",
      );
    }
  });
});

describe("parseContactFormData", () => {
  it("trims whitespace from form fields", () => {
    const input = parseContactFormData(
      formDataFrom({
        name: "  Ada  ",
        email: " ada@example.com ",
        company: " Analytical Engines ",
        message: "  Building a data platform with production RAG.  ",
      }),
    );

    expect(input).toEqual({
      name: "Ada",
      email: "ada@example.com",
      company: "Analytical Engines",
      message: "Building a data platform with production RAG.",
    });
  });
});
