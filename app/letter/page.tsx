import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { letter } from "@/lib/content/letter";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Letter",
  description: letter.summary,
  alternates: { canonical: "/letter" },
  openGraph: {
    title: `${letter.title} — Mathnetica`,
    description: letter.summary,
    url: "/letter",
    type: "article",
    publishedTime: letter.dateIso,
  },
};

export default function LetterPage() {
  return (
    <article className="border-t border-border">
      <div className="bg-dot-grid">
        <div className="container-site pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container-content max-w-3xl">
            <FadeIn immediate>
              <p className="mb-4 text-sm tracking-[0.14em] text-muted-foreground uppercase">
                {letter.eyebrow}
              </p>
              <h1 className="text-statement">{letter.title}</h1>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                {letter.dateLabel} · Amsterdam
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                {letter.summary}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="container-site pb-24 md:pb-40">
        <div className="container-content max-w-3xl">
          <FadeIn className="space-y-7 border-t border-border pt-12 text-base leading-relaxed text-foreground/90 md:space-y-8 md:pt-16 md:text-lg">
            {letter.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p className="font-medium text-foreground">{letter.closing}</p>
          </FadeIn>

          <FadeIn className="mt-14 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.commercialCtaHref}
              className="btn-pill-primary"
            >
              {siteConfig.commercialCta}
            </Link>
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Mathnetica — collaboration / partnership")}`}
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              Write to us →
            </a>
          </FadeIn>

          <FadeIn className="mt-10">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to Mathnetica
            </Link>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
