import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders left-aligned headline and CTAs", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /engineering the\s+platforms behind\s+data & ai/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/amsterdam · netherlands/i)).toBeInTheDocument();
    expect(
      screen.getByText(/data & ai platform engineering · ai architecture/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /start a project/i }),
    ).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /^research$/i })).toHaveAttribute(
      "href",
      "/research",
    );
  });
});
