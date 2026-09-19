import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders quantum positioning and CTAs", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /building the software\s+infrastructure between\s+classical and quantum\s+computing/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/amsterdam · netherlands/i)).toBeInTheDocument();
    expect(screen.getByText(/quantum systems engineering/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore qbridge/i }),
    ).toHaveAttribute("href", "/qbridge");
    expect(screen.getByRole("link", { name: /^github$/i })).toHaveAttribute(
      "href",
      "https://github.com/mathnetica",
    );
  });
});
