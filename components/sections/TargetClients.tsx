import { targetClients } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function TargetClients() {
  return (
    <FadeIn>
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-4 md:mt-12 md:gap-x-10">
        {targetClients.map((client) => (
          <li
            key={client}
            className="text-lg tracking-tight text-foreground/85 md:text-xl"
          >
            {client}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
