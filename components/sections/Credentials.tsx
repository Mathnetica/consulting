import { credentials } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function Credentials() {
  return (
    <FadeIn className="mt-14 border-t border-border pt-10 md:mt-16">
      <p className="mb-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
        Credentials &amp; focus areas
      </p>
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {credentials.map((item) => (
          <li key={item} className="text-sm tracking-wide text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
