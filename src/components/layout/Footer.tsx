import { Container } from "./Container"

type FooterProps = {
  companyName: string
}

export function Footer({ companyName }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-graphite text-white">
      <Container>
        <div className="py-10 text-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold">{companyName}</div>
              <div className="mt-1 opacity-80">Infrastruktura tramwajowa i kolejowa</div>
              <div className="mt-4 opacity-70">© {year} {companyName}. Wszelkie prawa zastrzeżone.</div>
            </div>

            <div className="flex flex-wrap gap-4 opacity-90">
              <a className="!text-white/80 hover:opacity-60 no-underline" href="#o-firmie">O firmie</a>
              <a className="!text-white/80 hover:opacity-60 no-underline" href="#uslugi">Oferta</a>
              <a className="!text-white/80 hover:opacity-60 no-underline" href="#kontakt">Kontakt</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
