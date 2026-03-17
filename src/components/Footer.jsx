const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Missão', href: '#missao' },
  { label: 'Valores', href: '#valores' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f1f14] via-[#081311] to-[#050a08] text-white/40 py-16 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-dourado/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[250px] h-[250px] rounded-full bg-verde-clinico/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/5">

          {/* Logo */}
          <div className="flex items-center gap-2 group hover:opacity-80 transition-opacity duration-300">
            <span className="font-serif text-lg text-white/70 group-hover:text-white transition-colors duration-300">Laser</span>
            <span className="font-serif text-lg italic text-dourado/60 group-hover:text-dourado transition-colors duration-300">Vita</span>
            <span className="text-xs tracking-widest ml-2 text-white/20 group-hover:text-white/40 transition-colors duration-300">HOME CARE</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                style={{ animationDelay: `${i * 50}ms` }}
                className="text-[10px] tracking-widest uppercase text-white/30 hover:text-dourado/80 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in opacity-0-init"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://instagram.com/laservitta.homecare"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] tracking-wide border border-white/10 rounded-full px-4 py-1.5 hover:border-dourado/40 hover:text-dourado/70 hover:shadow-lg hover:shadow-dourado/20 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            @laservitta <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center md:text-left">
            <span className="text-[10px] tracking-widest uppercase text-white/20 font-semibold">Localização</span>
            <p className="text-xs text-white/40 mt-2">Goiânia, Goiás</p>
          </div>
          <div className="text-center">
            <span className="text-[10px] tracking-widest uppercase text-white/20 font-semibold">Especialidade</span>
            <p className="text-xs text-white/40 mt-2">Cicatrização Avançada</p>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[10px] tracking-widest uppercase text-white/20 font-semibold">Atendimento</span>
            <p className="text-xs text-white/40 mt-2">Home Care & Consultório</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/30">
          <span className="hover:text-white/50 transition-colors duration-300">© 2025 LaserVita Home Care · Goiânia, Goiás</span>
          <span className="text-dourado/50 hover:text-dourado/80 transition-colors duration-300">Cuidado avançado em cicatrização</span>
        </div>
      </div>
    </footer>
  )
}
