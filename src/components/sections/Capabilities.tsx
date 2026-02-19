import { Container } from "../layout/Container"
import { SectionHeader } from "../layout/SectionHeader"

type Item = { title: string; desc: string }
type CapabilitiesProps = { items: readonly Item[] }

export function Capabilities({ items }: CapabilitiesProps) {
  return (
    <section id="kompetencje" className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <SectionHeader
              kicker="Kompetencje"
              title="Realizacja w trudnych warunkach"
              desc="Prace w mieście i na odcinkach kolejowych przy zachowaniu bezpieczeństwa i ciągłości ruchu."
            />
          </div>

          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-soft bg-white p-6 shadow-sm hover:border-rail transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-signal" />
                  <div className="text-sm font-semibold text-graphite">{it.title}</div>
                </div>
                <div className="mt-2 text-sm text-zinc-700 leading-relaxed">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
