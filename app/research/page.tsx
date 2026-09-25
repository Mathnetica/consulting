import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ResearchList } from "@/components/sections/ResearchList";
import { ResearchLab } from "@/components/sections/ResearchLab";
import { ResearchFilter } from "@/components/sections/ResearchFilter";
import { ResearchPagination } from "@/components/sections/ResearchPagination";
import { FadeIn } from "@/components/ui/fade-in";
import {
  filterResearchArticles,
  isResearchCategory,
  paginateResearchArticles,
} from "@/lib/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Engineering problems Mathnetica encounters while building infrastructure for hybrid quantum-classical computing.",
  alternates: { canonical: "/research" },
};

type ResearchPageProps = {
  searchParams: Promise<{
    category?: string | string[];
    page?: string | string[];
  }>;
};

function firstParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ResearchPage({ searchParams }: ResearchPageProps) {
  const params = await searchParams;
  const rawCategory = firstParam(params.category);
  const category =
    rawCategory && isResearchCategory(rawCategory) ? rawCategory : null;
  const page = Number.parseInt(firstParam(params.page) ?? "1", 10) || 1;

  const filtered = filterResearchArticles(category);
  const { items, total, totalPages, currentPage, showPagination } =
    paginateResearchArticles(filtered, page);

  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Research"
            title="Engineering the missing pieces."
            description="Mathnetica Research documents the engineering problems we encounter while building infrastructure for hybrid quantum-classical computing — including placement, automation, sovereignty and observability. Research feeds directly into the platform."
          />
        </div>
      </section>

      <ResearchLab />

      <section className="container-site pt-16 pb-24 md:pt-24 md:pb-40">
        <div className="container-content">
          <FadeIn className="mb-10 md:mb-12">
            <ResearchFilter activeCategory={category} />
          </FadeIn>

          <FadeIn className="mb-10 md:mb-12">
            <h2 className="text-section">
              {category ? category : "Selected notes"}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              {total === 0
                ? "No notes in this category yet."
                : category
                  ? `${total} note${total === 1 ? "" : "s"} in this category.`
                  : "Research topics supporting the Mathnetica Platform — marked as in progress or planned when not yet published."}
            </p>
          </FadeIn>

          {items.length > 0 ? <ResearchList articles={items} /> : null}

          {showPagination ? (
            <ResearchPagination
              currentPage={currentPage}
              totalPages={totalPages}
              category={category}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}
