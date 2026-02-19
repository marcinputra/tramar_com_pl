import { Container } from "../layout/Container"
import { SectionHeader } from "../layout/SectionHeader"

type Item = { title: string; desc: string }
type ValuesProps = { values: readonly Item[] }

export function Values({ values }: ValuesProps) {
  return (
    <section id="wartosci" className="py-16 bg-soft">
      <Container>
        <SectionHeader
          kicker="Standardy"
          title="Jakość, bezpieczeństwo, terminowość"
          desc="Trwałe rozwiązania konstrukcyjne oraz efektywna współpraca z inwestorami publicznymi i prywatnymi."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-soft bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-graphite">{v.title}</div>
              <div className="mt-2 text-sm text-zinc-700 leading-relaxed">{v.desc}</div>
              <div className="mt-5 h-1 w-10 bg-rail rounded" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
