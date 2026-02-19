import { Container } from "../layout/Container"
import { SectionHeader } from "../layout/SectionHeader"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback } from "react"

type Project = {
  title: string
  location: string
  image: string
}

const projects: Project[] = [
  {
    title: "Modernizacja torowiska tramwajowego",
    location: "Tramar Sp z o.o.",
    image: "/images/projects/01.jpg",
  },
  {
    title: "Przebudowa linii kolejowej",
    location: "Tramar Sp z o.o.",
    image: "/images/projects/02.jpg",
  },
  {
    title: "Nowa infrastruktura szynowa",
    location: "Tramar Sp z o.o.",
    image: "/images/projects/03.jpg",
  },
  {
    title: "Modernizacja przejazdu kolejowego",
    location: "Tramar Sp z o.o.",
    image: "/images/projects/04.jpg",
  },
]

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  // autoplay
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="realizacje" className="py-20 bg-soft">
      <Container>
        <SectionHeader
          kicker="Realizacje"
          title="Wybrane projekty"
          desc="Przykłady zrealizowanych inwestycji w obszarze infrastruktury tramwajowej i kolejowej."
        />

        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-graphite/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* text */}
                    <div className="absolute bottom-0 p-6 text-white">
                      <div className="text-xs uppercase tracking-wider text-signal">
                        {project.location}
                      </div>
                      <div className="mt-1 text-lg font-semibold">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-signal transition"
          >
            ‹
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-signal transition"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  )
}
