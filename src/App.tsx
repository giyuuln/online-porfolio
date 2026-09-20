import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechEcosystem from './components/TechEcosystem'
import FeaturedWork from './components/FeaturedWork'
import EngineeringLab from './components/EngineeringLab'
import Principles from './components/Principles'
import Timeline from './components/Timeline'
import ContactTerminal from './components/ContactTerminal'
import Footer from './components/Footer'

function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    // Dark-first design: default to dark unless the user chose light
    return true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggle: () => setDark((d) => !d) }
}

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <>
      <Nav dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <TechEcosystem />
        <FeaturedWork />
        <EngineeringLab />
        <Principles />
        <Timeline />
        <ContactTerminal />
      </main>
      <Footer />
    </>
  )
}
