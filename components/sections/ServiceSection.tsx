import Link from "next/link";
import type { Service } from "@/lib/content/services";
import { FadeIn } from "@/components/ui/fade-in";

type ServiceSectionProps = {
  services: Service[];
  detailed?: boolean;
};

export function ServiceSection({
  services,
  detailed = false,
}: ServiceSectionProps) {
  return (
    <div className="space-y-0">
      {services.map((service) => (
        <div key={service.slug} id={service.slug} className="scroll-mt-24">
          <FadeIn className="border-t border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">
            <p className="text-base tracking-[0.12em] text-muted-foreground">
              {service.number}
            </p>
            <div>
              <h3 className="text-2xl tracking-tight md:text-3xl">
                {detailed ? (
                  service.title
                ) : (
                  <Link
                    href={`/services#${service.slug}`}
                    className="transition-opacity hover:opacity-70"
                  >
                    {service.title}
                  </Link>
                )}
              </h3>
              {service.entryPoint ? (
                <p className="mt-2 text-sm tracking-[0.12em] text-muted-foreground uppercase">
                  Recommended entry point
                </p>
              ) : null}
              {service.flagship ? (
                <p className="mt-2 text-sm tracking-[0.12em] text-muted-foreground uppercase">
                  Flagship engagement
                </p>
              ) : null}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.shortDescription}
              </p>

              {detailed ? (
                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <DetailBlock title="Problem" body={service.problem} />
                  <DetailBlock title="What we do" body={service.whatWeDo} />
                  <DetailBlock
                    title="Typical engagement"
                    body={service.typicalEngagement}
                  />
                  <ListBlock title="Deliverables" items={service.deliverables} />
                  <ListBlock title="Technologies" items={service.technologies} />
                  <ListBlock title="Outcomes" items={service.outcomes} />
                </div>
              ) : (
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="text-base text-muted-foreground before:mr-4 before:content-['·'] first:before:content-none"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              )}

              {service.priceNote ? (
                <p className="mt-8 text-base text-foreground/80">
                  {service.priceNote}
                </p>
              ) : null}
            </div>
          </div>
          </FadeIn>
        </div>
      ))}
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
        {title}
      </h4>
      <p className="mt-3 text-base leading-relaxed text-foreground/85">
        {body}
      </p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-base leading-relaxed text-foreground/85">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
