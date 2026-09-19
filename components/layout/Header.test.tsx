import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout/Header";

describe("Header", () => {
  it("renders brand, desktop nav and CTAs", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", { name: /mathnetica/i }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("navigation", { name: /primary/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /explore quancave/i }).length,
    ).toBeGreaterThan(0);
  });

  it("opens the full-screen mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const overlay = document.getElementById("site-menu");
    expect(overlay).toHaveAttribute("aria-hidden", "true");

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    expect(overlay).toHaveAttribute("aria-hidden", "false");
    expect(
      within(screen.getByRole("navigation", { name: /mobile/i })).getByRole(
        "link",
        { name: /01\s+quancave/i },
      ),
    ).toBeVisible();
  });
});
