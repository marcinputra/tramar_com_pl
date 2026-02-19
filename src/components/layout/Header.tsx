import { useEffect, useMemo, useRef, useState } from "react"
import { Container } from "./Container"
import logo from "@/assets/logo.svg"

type NavItem = { label: string; href: string }

export function Header() {
  const nav: NavItem[] = useMemo(
    () => [
      { label: "O firmie", href: "#o-firmie" },
      { label: "Oferta", href: "#uslugi" },
      { label: "Kompetencje", href: "#kompetencje" },
      { label: "Standardy", href: "#wartosci" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    []
  )

  const [visible, setVisible] = useState(true)
  const [compact, setCompact] = useState(false) // shrink po scrollu
  const [elevated, setElevated] = useState(false) // cień/blur po scrollu

  const lastYRef = useRef(0)
  const tickingRef = useRef(false)
  const idleTimerRef = useRef<number | null>(null)

  // ustawienia UX
  const SHOW_ON_IDLE_MS = 700
  const HIDE_THRESHOLD_PX = 120 // po ilu px w dół zaczynamy chować
  const COMPACT_THRESHOLD_PX = 24 // kiedy przechodzimy w compact

  useEffect(() => {
    lastYRef.current = window.scrollY || 0
    setElevated(lastYRef.current > 0)
    setCompact(lastYRef.current > COMPACT_THRESHOLD_PX)

    const clearIdleTimer = () => {
      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current)
        idleTimerRef.current = null
      }
    }

    const scheduleShowOnIdle = () => {
      clearIdleTimer()
      idleTimerRef.current = window.setTimeout(() => {
        // po chwili bez scrolla pokaż header (premium UX)
        setVisible(true)
      }, SHOW_ON_IDLE_MS)
    }

    const update = () => {
      tickingRef.current = false

      const y = window.scrollY || 0
      const lastY = lastYRef.current
      const delta = y - lastY

      // stan "elevated" i "compact"
      const shouldBeElevated = y > 0
      const shouldBeCompact = y > COMPACT_THRESHOLD_PX
      if (shouldBeElevated !== elevated) setElevated(shouldBeElevated)
      if (shouldBeCompact !== compact) setCompact(shouldBeCompact)

      // logika show/hide
      // - w górę: pokazuj
      // - w dół: chowaj dopiero po progu
      // - małe ruchy ignorujemy
      const MIN_DELTA = 6
      if (Math.abs(delta) >= MIN_DELTA) {
        if (delta > 0) {
          // scroll down
          if (y > HIDE_THRESHOLD_PX) setVisible(false)
        } else {
          // scroll up
          setVisible(true)
        }
      }

      lastYRef.current = y
      scheduleShowOnIdle()
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true
        window.requestAnimationFrame(update)
      }
    }

    // start: zaplanuj show on idle (po wejściu)
    scheduleShowOnIdle()

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      clearIdleTimer()
    }
  }, [compact, elevated])

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      {/* Top bar (subtelny, „corporate”) */}
      <div className="bg-graphite text-white">
        <Container>
          <div className="flex flex-col gap-2 py-2 text-[14px] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 opacity-90">
              <span className="inline-flex items-center gap-2">
                <span>Infrastruktura tramwajowa i kolejowa</span>
              </span>
              <a
                className="!text-orange-400 hover:opacity-90 transition no-underline"
                href="mailto:tramar@tramar.com.pl"
              >
                tramar@tramar.com.pl
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-2 opacity-80">
              <span className="inline-block h-2 w-2 rounded-full bg-signal" />
              <span>Budowa</span>
              <span className="inline-block h-2 w-2 rounded-full bg-signal" />
              <span>Modernizacja</span>
              <span className="inline-block h-2 w-2 rounded-full bg-signal" />
              <span>Utrzymanie</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav (glass + shrink + shadow) */}
      <div
        className={[
          "border-b border-soft",
          "transition-all duration-300 ease-out",
          elevated ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70" : "bg-white",
          elevated ? "shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : "shadow-none",
        ].join(" ")}
      >
        <Container>
          <div
            className={[
              "flex items-center justify-between",
              "transition-[height] duration-300 ease-out",
              compact ? "h-16" : "h-20",
            ].join(" ")}
          >
            {/* Brand */}
            <a href="#" className="flex items-center gap-3 no-underline">
              <div className="leading-tight">
                <img src={logo} alt="tramar.com.pl" className="h-7 pt-1s w-auto" />
                <div className="text-signal text-center text-[11px] pt-1 text-zinc-600">
                  Rail Tech Engineering
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 text-base text-zinc-700">
              {nav.slice(0, 4).map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="text-signal no-underline hover:text-graphite transition-colors"
                >
                  {it.label}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#kontakt"
                className={[
                  "no-underline rounded-md px-4 py-2",
                  "bg-rail !text-white",
                  "hover:bg-signal hover:text-black",
                  "transition-colors",
                  "shadow-sm hover:shadow-md",
                ].join(" ")}
              >
                Kontakt
              </a>
            </nav>

            {/* Mobile CTA */}
            <a
              className="md:hidden no-underline rounded-md bg-rail px-4 py-2 text-sm !text-white hover:bg-signal hover:text-black transition-colors"
              href="#kontakt"
            >
              Kontakt
            </a>
          </div>
        </Container>
      </div>
    </header>
  )
}