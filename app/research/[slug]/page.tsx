import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatResearchStatus,
  getResearchBySlug,
  researchArticles,
} from "@/lib/content/research";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return researchArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchBySlug(slug);
  if (!article) return { title: "Research" };

  return {
    title: article.title,
    description: article.abstract,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function ResearchArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getResearchBySlug(slug);
  if (!article) notFound();

  return (
    <article className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content max-w-3xl">
        <FadeIn>
          <Link
            href="/research"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Research
          </Link>
          <p className="mt-10 text-sm text-muted-foreground">
            {article.category} · {formatResearchStatus(article.status)}
            {article.status === "published"
              ? ` · ${formatDate(article.date)}`
              : null}
          </p>
          <h1 className="mt-4 text-statement">{article.title}</h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            {article.abstract}
          </p>
        </FadeIn>

        <FadeIn className="mt-12 space-y-6 border-t border-border pt-12">
          {article.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base leading-relaxed text-foreground/90 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </FadeIn>

        <FadeIn className="mt-16 border-t border-border pt-10">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Exploring how quantum computing could fit into your infrastructure?
          </p>
          <Link
            href={siteConfig.commercialCtaHref}
            className="mt-4 inline-block text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          >
            Book a Hybrid Quantum Infrastructure Review →
          </Link>
        </FadeIn>
      </div>
    </article>
  );
}
