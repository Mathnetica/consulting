"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-500",
          open ? "bg-background" : "bg-background/90 backdrop-blur-md",
        )}
      >
        <div className="container-site">
          <div className="relative flex h-14 items-center justify-between md:h-[4.25rem]">
            <Link
              href="/"
              className="relative z-[60] text-[13px] font-semibold tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
              onClick={() => setOpen(false)}
            >
              {siteConfig.name}
            </Link>

            <nav
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="relative z-[60] flex items-center gap-2">
              <div className="hidden items-center gap-2 md:flex">
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-[13px] text-background transition-opacity hover:opacity-85"
                >
                  Start a project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-9 items-center rounded-full bg-foreground/[0.06] px-4 text-[13px] text-foreground transition-colors hover:bg-foreground/[0.1]"
                >
                  Explore services
                </Link>
              </div>

              <button
                ref={toggleRef}
                type="button"
                className="inline-flex size-11 items-center justify-center lg:hidden"
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">
                  {open ? "Close menu" : "Open menu"}
                </span>
                <span className="relative block h-3.5 w-5" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute left-0 block h-[1.5px] w-full origin-center bg-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      open ? "top-[6px] rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[6px] block h-[1.5px] w-full bg-foreground transition-all duration-300",
                      open ? "scale-x-0 opacity-0" : "opacity-100",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 block h-[1.5px] w-full origin-center bg-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      open ? "top-[6px] -rotate-45" : "top-[12px]",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-40 h-[100dvh] bg-background lg:hidden",
          "transition-[clip-path,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "pointer-events-auto opacity-100 [clip-path:inset(0_0_0_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]",
        )}
        aria-hidden={!open}
      >
        <nav
          className="container-site flex h-full flex-col pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24"
          aria-label="Mobile"
        >
          <div className="flex flex-1 flex-col justify-center">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group flex items-baseline gap-4 py-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0",
                    )}
                    style={{
                      transitionDelay: open ? `${160 + index * 70}ms` : "0ms",
                    }}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                  >
                    <span className="w-7 text-[11px] tracking-[0.14em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[clamp(2.75rem,11vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em] transition-opacity group-hover:opacity-50">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "grid gap-6 border-t border-foreground/10 pt-8 transition-all duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              Start a project
            </Link>
            <div className="flex justify-between gap-4 text-sm text-muted-foreground">
              <p>{siteConfig.locationShort}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground"
                tabIndex={open ? 0 : -1}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
