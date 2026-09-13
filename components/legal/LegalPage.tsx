import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content max-w-3xl">
        <p className="mb-4 text-sm tracking-[0.14em] text-muted-foreground uppercase">
          Legal
        </p>
        <h1 className="text-statement">{title}</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Last updated: {updated}
        </p>
        <div className="prose-legal mt-12 space-y-10 text-base leading-relaxed text-foreground/90">
          {children}
        </div>
        <p className="mt-16 text-base text-muted-foreground">
          Questions? Contact{" "}
          <a
            href="mailto:hello@mathnetica.com"
            className="text-foreground underline-offset-4 hover:underline"
          >
            hello@mathnetica.com
          </a>
          {" · "}
          <Link
            href="/contact"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Contact page
          </Link>
        </p>
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-muted-foreground [&_a]:text-foreground [&_a]:underline-offset-4 [&_a]:hover:underline [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
