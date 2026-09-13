import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type LargeStatementProps = {
  statement: string;
  children?: React.ReactNode;
  className?: string;
  as?: "h2" | "p";
};

export function LargeStatement({
  statement,
  children,
  className,
  as: Tag = "h2",
}: LargeStatementProps) {
  return (
    <FadeIn className={cn("max-w-5xl", className)}>
      <Tag className="text-statement">{statement}</Tag>
      {children ? (
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </div>
      ) : null}
    </FadeIn>
  );
}
