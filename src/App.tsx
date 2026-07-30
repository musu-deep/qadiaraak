import type { FC } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Analysis } from './components/Analysis'
import { Pipeline } from './components/Pipeline'
import { Security } from './components/Security'
import { FAQ } from './components/FAQ'
import { CTA, Footer } from './components/CTA'
import { useReveal } from './components/primitives'

const App: FC = () => {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden bg-navy-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <Story />
        <Analysis />
        <Pipeline />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
