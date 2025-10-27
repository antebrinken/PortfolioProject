import Hero from '../sections/Hero/Hero'
import Projects from '../sections/Projects/Projects'
import TechStack from '../sections/TechStack/TechStack'
import About from '../sections/About/About'
import Contact from '../sections/Contact/Contact'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </div>
  )
}

