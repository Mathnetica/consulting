import Link from "next/link";
import {
  formatResearchStatus,
  type ResearchArticle,
} from "@/lib/content/research";
import { FadeIn } from "@/components/ui/fade-in";

type ResearchListProps = {
  articles: ResearchArticle[];
  compact?: boolean;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function ResearchList({ articles, compact = false }: ResearchListProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {articles.map((article, index) => (
        <FadeIn key={article.slug} delayMs={index * 40}>
          <article className={compact ? "py-6 md:py-7" : "py-8 md:py-10"}>
            <div className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-10">
              <div className="space-y-1 text-base text-muted-foreground">
                <p>{article.category}</p>
                <p>{formatResearchStatus(article.status)}</p>
                {article.status === "published" ? (
                  <p>{formatDate(article.date)}</p>
                ) : null}
              </div>
              <div>
                <h3
                  className={
                    compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                  }
                >
                  <Link
                    href={`/research/${article.slug}`}
                    className="tracking-tight transition-opacity hover:opacity-70"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {article.abstract}
                </p>
                <Link
                  href={`/research/${article.slug}`}
                  className="mt-4 inline-block text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
                >
                  {article.status === "planned" ? "Research topic" : "Read more"}
                </Link>
              </div>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
