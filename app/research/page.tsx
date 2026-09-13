import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ResearchList } from "@/components/sections/ResearchList";
import { ResearchLab } from "@/components/sections/ResearchLab";
import { FadeIn } from "@/components/ui/fade-in";
import {
  researchArticles,
  researchCategories,
} from "@/lib/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research notes from Mathnetica on hybrid search, retrieval, sovereign AI, distributed systems and AI platform architecture.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Research"
            title="Research is part of the work."
            description="We investigate the technologies and patterns shaping the next generation of Data & AI systems."
          />
          <FadeIn className="mt-10">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {researchCategories.map((category) => (
                <li key={category} className="text-base text-muted-foreground">
                  {category}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <ResearchLab />

      <section className="container-site pt-16 pb-24 md:pt-24 md:pb-40">
        <div className="container-content">
          <FadeIn className="mb-10 md:mb-12">
            <h2 className="text-section">Selected notes</h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Short technical notes from the practice — retrieval, platforms and
              production AI systems.
            </p>
          </FadeIn>
          <ResearchList articles={researchArticles} />
        </div>
      </section>
    </>
  );
}
