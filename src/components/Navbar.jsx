import { useState, useEffect } from 'react'

const links = ['Início', 'Serviços', 'Missão', 'Valores', 'Contato']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-verde-escuro/5 border-b border-cinza-medio' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-1 hover:opacity-80 transition-opacity duration-300">
          <span className={`font-serif text-xl font-semibold transition-all duration-300 ${scrolled ? 'text-verde-escuro' : 'text-white'}`}>
            Laser
          </span>
          <span className={`font-serif text-xl italic font-semibold transition-all duration-300 ${scrolled ? 'text-dourado' : 'text-dourado-palido'}`}>
            Vita
          </span>
          <span className={`text-xs tracking-widest ml-1 transition-all duration-300 ${scrolled ? 'text-cinza' : 'text-white/60'}`}>
            HOME CARE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <li key={link} style={{ animationDelay: `${i * 100}ms` }} className="animate-fade-in">
              <a
                href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className={`text-xs tracking-widest uppercase transition-all duration-300 relative group ${
                  scrolled ? 'text-cinza' : 'text-white/70'
                }`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dourado group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:block bg-dourado hover:bg-dourado-claro text-white text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-dourado/30 hover:-translate-y-0.5 active:scale-95"
        >
          Agendar
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity">
          <span className={`block h-0.5 w-6 rounded-full transition-all duration-500 ${scrolled ? 'bg-verde-escuro' : 'bg-white'} ${open ? 'rotate-45 translate-y-2.5 scale-105' : ''}`} />
          <span className={`block h-0.5 w-6 rounded-full transition-all duration-500 ${scrolled ? 'bg-verde-escuro' : 'bg-white'} ${open ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block h-0.5 w-6 rounded-full transition-all duration-500 ${scrolled ? 'bg-verde-escuro' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2.5 scale-105' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-cinza-medio px-6 py-4 flex flex-col gap-4 animate-slide-in-left">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
              className="text-xs tracking-widest uppercase text-cinza hover:text-dourado hover:translate-x-1 transition-all duration-300 animate-fade-in"
            >
              {link}
            </a>
          ))}
          <a href="#contato" className="bg-gradient-to-r from-verde-escuro to-verde-clinico text-white text-xs tracking-widest uppercase px-4 py-2.5 text-center rounded-lg hover:shadow-lg transition-all duration-300">
            Agendar avaliação
          </a>
        </div>
      )}
    </header>
  )
}
