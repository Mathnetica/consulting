export type ContactFieldErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; fieldErrors: ContactFieldErrors };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function parseContactFormData(formData: FormData): ContactInput {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export function validateContactInput(
  input: ContactInput,
): ContactValidationResult {
  const fieldErrors: ContactFieldErrors = {};

  if (!input.name) fieldErrors.name = "Name is required.";
  if (!input.email) fieldErrors.email = "Work email is required.";
  else if (!isValidEmail(input.email))
    fieldErrors.email = "Enter a valid work email.";
  if (!input.company) fieldErrors.company = "Company is required.";
  if (!input.message) fieldErrors.message = "Tell us what you are building.";
  else if (input.message.length < 20)
    fieldErrors.message = "Please share a bit more detail.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return { ok: true, data: input };
}
