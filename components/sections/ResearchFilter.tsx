import Link from "next/link";
import {
  buildResearchHref,
  researchCategories,
} from "@/lib/content/research";
import { cn } from "@/lib/utils";

type ResearchFilterProps = {
  activeCategory?: string | null;
};

export function ResearchFilter({ activeCategory }: ResearchFilterProps) {
  return (
    <nav aria-label="Research categories">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        <li>
          <Link
            href={buildResearchHref({})}
            scroll={false}
            className={cn(
              "text-base transition-opacity hover:opacity-70",
              !activeCategory
                ? "text-foreground underline underline-offset-4"
                : "text-muted-foreground",
            )}
          >
            All
          </Link>
        </li>
        {researchCategories.map((category) => {
          const active = activeCategory === category;
          return (
            <li key={category}>
              <Link
                href={buildResearchHref({ category })}
                scroll={false}
                className={cn(
                  "text-base transition-opacity hover:opacity-70",
                  active
                    ? "text-foreground underline underline-offset-4"
                    : "text-muted-foreground",
                )}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
