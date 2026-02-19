import { Container } from "../layout/Container"

type CTAProps = {
  title: string
  desc: string
  primary: string
  secondary: string
}

export function CTA({ title, desc, primary, secondary }: CTAProps) {
  return (
    <section id="kontakt" className="py-16">
      <Container>
        <div className="rounded-3xl bg-graphite text-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Kontakt
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">{desc}</p>

              <div className="mt-6 grid gap-2 text-sm text-white/95">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span>e-mail: tramar@tramar.com.pl</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span>Lokalizacja: 87-100 Toruń, ul. Sobieskiego 8/16</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span>REGON: 3541727000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span>NIP: 8792767016</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto: tramar@tramar.com.pl"
                className="rounded-md bg-signal px-6 py-3 text-center text-sm font-semibold !text-white hover:opacity-90 transition no-underline"
              >
                {primary}
              </a>
              <a
                href="#uslugi"
                className="rounded-md border border-white/60 px-6 py-3 text-center text-sm font-medium !text-white hover:bg-white/10 transition no-underline"
              >
                {secondary}
              </a>

              <div className="mt-2 text-xs text-white/60">
                Odpowiadamy zazwyczaj w ciągu 1 dnia roboczego.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
