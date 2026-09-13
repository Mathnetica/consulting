import Link from "next/link";
import { buildResearchHref } from "@/lib/content/research";

type ResearchPaginationProps = {
  currentPage: number;
  totalPages: number;
  category?: string | null;
};

export function ResearchPagination({
  currentPage,
  totalPages,
  category,
}: ResearchPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Research pagination"
      className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8"
    >
      <div>
        {currentPage > 1 ? (
          <Link
            href={buildResearchHref({ category, page: currentPage - 1 })}
            scroll={false}
            className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          >
            Previous
          </Link>
        ) : (
          <span className="text-base text-muted-foreground">Previous</span>
        )}
      </div>

      <ul className="flex flex-wrap items-center gap-4">
        {pages.map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span
                aria-current="page"
                className="text-base font-medium text-foreground"
              >
                {page}
              </span>
            ) : (
              <Link
                href={buildResearchHref({ category, page })}
                scroll={false}
                className="text-base text-muted-foreground underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div>
        {currentPage < totalPages ? (
          <Link
            href={buildResearchHref({ category, page: currentPage + 1 })}
            scroll={false}
            className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          >
            Next
          </Link>
        ) : (
          <span className="text-base text-muted-foreground">Next</span>
        )}
      </div>
    </nav>
  );
}
