import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { legalLinks } from "@/lib/content/legal";
import { navLinks, siteConfig } from "@/lib/content/site";

const footerNav = [
  ...navLinks,
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-site section-space !py-16 md:!py-20">
        <div className="container-content grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold tracking-[0.12em] uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-base text-foreground/80">
              {siteConfig.focus}
            </p>
            <p className="mt-2 text-base text-muted-foreground">
              {siteConfig.locationShort}
            </p>
          </div>

          <div>
            <p className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-foreground transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-foreground transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.github}
                  className="text-base transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  className="text-base transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base transition-opacity hover:opacity-70"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-content mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Amsterdam · Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
