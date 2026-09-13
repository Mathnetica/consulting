import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function ResearchLab() {
  return (
    <section className="border-y border-border bg-[#0c1220] text-[#f0ebd8]">
      <div className="container-site py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <FadeIn className="order-2 lg:order-1">
            <p className="text-sm tracking-[0.18em] text-[#f0ebd8]/70 uppercase">
              Research practice
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              Built like a lab. Used like a practice.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#f0ebd8]/72 md:text-lg">
              Research is part of the work — hybrid search, retrieval, sovereign
              AI and the platforms behind production Data &amp; AI systems.
            </p>
            <p className="mt-8 text-sm tracking-[0.16em] text-[#f0ebd8]/55 uppercase">
              Algorithms · Data · Intelligence
            </p>
          </FadeIn>

          <FadeIn delayMs={80} className="order-1 lg:order-2">
            <Image
              src="/hoodie.png"
              alt="Mathnetica research lab hoodie — front and back"
              width={1600}
              height={1067}
              className="mx-auto h-auto w-full max-w-3xl border-[6px] border-white sm:border-8"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
