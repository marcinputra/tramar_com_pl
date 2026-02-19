import { Container } from "../layout/Container"

type HeroProps = {
  name: string
  tagline: string
  bullets: readonly string[]
}

export function Hero({ name, tagline, bullets }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-white to-[hsl(var(--soft))]">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-kicker">Infrastruktura szynowa</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-graphite sm:text-5xl">
              {name}
            </h1>

            <p className="mt-4 text-lg text-zinc-700">{tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="no-underline rounded-md bg-rail px-5 py-3 text-sm font-semibold !text-white hover:bg-signal hover:text-black transition-colors shadow-sm hover:shadow-md"
              >
                Skontaktuj się
              </a>

              <a
                href="#uslugi"
                className="no-underline rounded-md border border-soft bg-white px-5 py-3 text-sm font-semibold text-graphite hover:border-rail hover:text-rail transition-colors"
              >
                Zobacz usługi
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-soft bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold text-graphite">Zakres w skrócie</h2>
              <span className="hidden sm:inline-block h-1 w-30 bg-signal rounded" />
            </div>

            <ul className="mt-4 space-y-3 text-[15px] text-zinc-700">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-signal" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
