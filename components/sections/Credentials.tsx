import { credentials } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function Credentials() {
  return (
    <FadeIn>
      <p className="text-base text-muted-foreground md:text-lg">
        {credentials.join(" · ")}
      </p>
    </FadeIn>
  );
}
