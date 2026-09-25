"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { letter } from "@/lib/content/letter";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(letter.storageKey);
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(letter.storageKey, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="relative z-[60] border-b border-foreground/15 bg-background text-foreground"
      role="region"
      aria-label="Announcement"
    >
      <div className="container-site">
        <div className="relative flex min-h-9 items-center justify-between gap-4 py-2">
          <Link
            href={letter.bannerHref}
            className="group min-w-0 text-left text-sm tracking-[0.02em] text-foreground transition-opacity hover:opacity-60 sm:text-[15px]"
          >
            <span className="underline-offset-[5px] group-hover:underline">
              {letter.bannerLabel}
            </span>
            <span
              className="ml-2 inline-block transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
            aria-label="Dismiss announcement"
          >
            <span aria-hidden className="text-xl leading-none font-light">
              ×
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
