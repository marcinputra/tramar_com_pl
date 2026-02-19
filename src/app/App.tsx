import { tramar } from "../data/tramar"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Services } from "../components/sections/Services"
import { Capabilities } from "../components/sections/Capabilities"
import { Values } from "../components/sections/Values"
import { CTA } from "../components/sections/CTA"
import { Projects } from "../components/sections/Projects"

export default function App() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />

      <main>
        <Hero name={tramar.name} tagline={tramar.tagline} bullets={tramar.bullets} />
        <About description={tramar.description} />
        <Services services={tramar.services} />
        <Capabilities items={tramar.capabilities} />
        <Values values={tramar.values} />
        <Projects />
        <CTA {...tramar.cta} />
      </main>

      <Footer companyName={tramar.name} />
    </div>
  )
}
