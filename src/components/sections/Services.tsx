import { Container } from "../layout/Container"
import { SectionHeader } from "../layout/SectionHeader"

type Item = { title: string; desc: string }
type ServicesProps = { services: readonly Item[] }

export function Services({ services }: ServicesProps) {
  return (
    <section id="uslugi" className="py-16 bg-soft">
      <Container>
        <SectionHeader
          kicker="Oferta"
          title="Zakres usług"
          desc="Roboty torowe i towarzyszące, infrastruktura techniczna oraz realizacje w wymagających warunkach ruchowych."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-soft bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Usługa
                </div>
                <span className="h-2 w-2 rounded-full bg-rail" />
              </div>

              <h3 className="mt-3 text-xl font-semibold text-graphite">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{s.desc}</p>

              <div className="mt-5 h-1 w-10 bg-rail rounded" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
