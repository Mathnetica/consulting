import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders platform positioning and CTAs", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /quantum\s+infrastructure\s+engineering/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore the platform/i }),
    ).toHaveAttribute("href", "/platform");
    expect(screen.getByRole("link", { name: /^github$/i })).toHaveAttribute(
      "href",
      "https://github.com/mathnetica",
    );
    expect(screen.getByRole("link", { name: /^research$/i })).toHaveAttribute(
      "href",
      "/research",
    );
  });
});
