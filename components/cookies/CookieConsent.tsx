"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_KEY,
  type CookieConsentState,
} from "@/lib/content/legal";
import { cn } from "@/lib/utils";

function readConsent(): CookieConsentState | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentState;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean) {
  const value: CookieConsentState = {
    essential: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event("mathnetica:cookie-consent"));
  return value;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setAnalytics(existing.analytics);
    }

    const openSettings = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setManageOpen(true);
      setVisible(true);
    };

    window.addEventListener("mathnetica:open-cookie-settings", openSettings);
    return () => {
      window.removeEventListener(
        "mathnetica:open-cookie-settings",
        openSettings,
      );
    };
  }, []);

  if (!visible) return null;

  const save = (nextAnalytics: boolean) => {
    writeConsent(nextAnalytics);
    setAnalytics(nextAnalytics);
    setVisible(false);
    setManageOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-[70] p-4 md:p-6"
    >
      <div className="container-site">
        <div className="ml-auto max-w-xl border border-border bg-background p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.08)] md:p-6">
          <h2
            id="cookie-consent-title"
            className="text-lg font-semibold tracking-tight"
          >
            Cookies
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We use essential cookies to run this site and remember your
            preferences. Optional analytics cookies are used only with your
            consent. See our{" "}
            <Link
              href="/cookies"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {manageOpen ? (
            <div className="mt-5 space-y-4 border-t border-border pt-5">
              <label className="flex items-start gap-3 text-base">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 size-4 accent-foreground"
                />
                <span>
                  <span className="font-medium text-foreground">Essential</span>
                  <span className="mt-1 block text-muted-foreground">
                    Required for security, basic function and storing your
                    consent choice.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 text-base">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 size-4 accent-foreground"
                />
                <span>
                  <span className="font-medium text-foreground">Analytics</span>
                  <span className="mt-1 block text-muted-foreground">
                    Helps us understand aggregate traffic. Off by default.
                  </span>
                </span>
              </label>
            </div>
          ) : null}

          <div
            className={cn(
              "mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap",
              manageOpen && "sm:justify-end",
            )}
          >
            {manageOpen ? (
              <>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-base transition-colors hover:border-foreground"
                  onClick={() => setManageOpen(false)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-base text-background"
                  onClick={() => save(analytics)}
                >
                  Save preferences
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-base transition-colors hover:border-foreground"
                  onClick={() => setManageOpen(true)}
                >
                  Cookie settings
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-base transition-colors hover:border-foreground"
                  onClick={() => save(false)}
                >
                  Reject optional
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-base text-background"
                  onClick={() => save(true)}
                >
                  Accept
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("mathnetica:open-cookie-settings"));
}
