import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatResearchStatus,
  getResearchBySlug,
  researchArticles,
} from "@/lib/content/research";
import { FadeIn } from "@/components/ui/fade-in";

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
      </div>
    </article>
  );
}
