import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const submitContactMock = vi.fn();

vi.mock("@/lib/actions/contact", () => ({
  submitContact: (...args: unknown[]) => submitContactMock(...args),
}));

import { ContactForm } from "@/components/contact/ContactForm";

describe("ContactForm", () => {
  beforeEach(() => {
    submitContactMock.mockReset();
  });

  it("renders enquiry fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/what are you building/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send enquiry/i }),
    ).toBeInTheDocument();
  });

  it("shows success state after a successful submit", async () => {
    const user = userEvent.setup();
    submitContactMock.mockResolvedValue({ ok: true });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/^name$/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/work email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/company/i), "Analytical Engines");
    await user.type(
      screen.getByLabelText(/what are you building/i),
      "We are building a production RAG platform for regulated data.",
    );
    await user.click(screen.getByRole("button", { name: /send enquiry/i }));

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
    expect(submitContactMock).toHaveBeenCalled();
  });

  it("shows field errors returned by the action", async () => {
    const user = userEvent.setup();
    submitContactMock.mockResolvedValue({
      ok: false,
      error: "Please check the form.",
      fieldErrors: {
        email: "Enter a valid work email.",
      },
    });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/^name$/i), "Ada");
    await user.type(screen.getByLabelText(/work email/i), "bad");
    await user.type(screen.getByLabelText(/company/i), "Analytical Engines");
    await user.type(
      screen.getByLabelText(/what are you building/i),
      "We are building a production RAG platform for regulated data.",
    );
    await user.click(screen.getByRole("button", { name: /send enquiry/i }));

    expect(
      await screen.findByText(/enter a valid work email/i),
    ).toBeInTheDocument();
  });
});
