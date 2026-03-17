import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Values from './components/Values'
import Objectives from './components/Objectives'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Objectives />
      <Contact />
      <Footer />
    </div>
  )
}
