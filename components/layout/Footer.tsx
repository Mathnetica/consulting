import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-site section-space !py-16 md:!py-20">
        <div className="container-content grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.22em] uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.locationShort}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.linkedin}
                  className="text-sm transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  className="text-sm transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-opacity hover:opacity-70"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-content mt-16 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
