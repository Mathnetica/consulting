import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { letter } from "@/lib/content/letter";

describe("AnnouncementBar", () => {
  beforeEach(() => {
    window.localStorage.removeItem(letter.storageKey);
  });

  it("shows the letter link and dismisses into localStorage", async () => {
    const user = userEvent.setup();
    render(<AnnouncementBar />);

    const link = await screen.findByRole("link", {
      name: /read the mathnetica letter/i,
    });
    expect(link).toHaveAttribute("href", "/letter");

    await user.click(
      screen.getByRole("button", { name: /dismiss announcement/i }),
    );

    expect(
      screen.queryByRole("link", { name: /read the mathnetica letter/i }),
    ).not.toBeInTheDocument();
    expect(window.localStorage.getItem(letter.storageKey)).toBe("1");
  });
});
