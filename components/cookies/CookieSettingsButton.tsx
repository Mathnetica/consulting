"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="text-base text-foreground transition-opacity hover:opacity-70"
      onClick={() => {
        window.dispatchEvent(new Event("mathnetica:open-cookie-settings"));
      }}
    >
      Cookie settings
    </button>
  );
}
