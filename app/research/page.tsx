import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ResearchList } from "@/components/sections/ResearchList";
import { FadeIn } from "@/components/ui/fade-in";
import {
  researchArticles,
  researchCategories,
} from "@/lib/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research notes from Mathnetica on hybrid search, retrieval, sovereign AI, distributed systems and AI platform architecture.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Research"
            title="Notes from the engineering practice."
            description="Research supports our commercial work. It keeps the practice sharp around AI infrastructure, search, distributed systems and architecture patterns."
          />
          <FadeIn className="mt-10">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {researchCategories.map((category) => (
                <li
                  key={category}
                  className="text-sm text-muted-foreground"
                >
                  {category}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="container-site pb-24 md:pb-40">
        <div className="container-content">
          <ResearchList articles={researchArticles} />
        </div>
      </section>
    </>
  );
}
