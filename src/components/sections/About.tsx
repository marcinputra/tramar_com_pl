import { Container } from "../layout/Container"
import { SectionHeader } from "../layout/SectionHeader"

type AboutProps = {
  description: string
}

export function About({ description }: AboutProps) {
  return (
    <section id="o-firmie" className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <SectionHeader
              kicker="O firmie"
              title="Profil działalności"
              desc="Kompleksowa realizacja inwestycji w obszarze torowisk tramwajowych i infrastruktury kolejowej."
            />
          </div>

          <div className="lg:col-span-2">
            <p className="text-zinc-700 leading-relaxed">{description}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat label="Specjalizacja" value="Torowiska + kolej" />
              <Stat label="Środowisko" value="Miasto + linie" />
              <Stat label="Priorytety" value="Normy i termin" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-white p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{label}</div>
      <div className="mt-2 text-sm font-semibold text-graphite">{value}</div>
      <div className="mt-4 h-1 w-10 bg-signal rounded" />
    </div>
  )
}
