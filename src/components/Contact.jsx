export default function Contact() {
  return (
    <section id="contato" className="bg-cinza-claro py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-dourado/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-verde-clinico/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">

        {/* Hero CTA block */}
        <div className="bg-gradient-to-br from-verde-escuro via-[#1a5228] to-[#0f3a1e] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-2xl hover:shadow-2xl hover:shadow-verde-escuro/30 transition-all duration-500">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-dourado/15 via-dourado/5 to-transparent blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-verde-clinico/8 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-0">

            {/* Left */}
            <div className="p-6 sm:p-8 lg:p-12 animate-slide-in-left">
              <div className="inline-block mb-4">
                <p className="text-dourado/80 text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Entre em contato</p>
                <div className="h-1 w-6 bg-gradient-to-r from-dourado/40 to-dourado rounded-full"></div>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-white leading-tight mb-4">
                Pronto para iniciar<br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-dourado-palido to-dourado">o tratamento?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8 hover:text-white/80 transition-colors duration-300">
                Agende uma avaliação domiciliar ou em consultório.
                Atendemos Goiânia e toda a região metropolitana.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#20ba5f] hover:from-[#1fbb59] hover:to-[#1aa84e] text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5 active:scale-95 w-full justify-center group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.549 4.12 1.507 5.855L0 24l6.335-1.507A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.305-1.553l-.38-.226-3.763.986.986-3.763-.226-.38A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
                  </svg>
                  Falar via WhatsApp
                </a>

                <a
                  href="https://instagram.com/laservitta.homecare"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 text-white/90 text-sm px-6 py-3 rounded-lg border border-white/20 hover:border-dourado/40 transition-all duration-300 hover:shadow-lg w-full justify-center group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @laservitta.homecare
                </a>
              </div>
            </div>

            {/* Right: info */}
            <div className="p-6 sm:p-8 lg:p-12 border-t md:border-t-0 md:border-l border-white/10 animate-slide-in-right">
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-8 font-semibold">Informações</p>

              <div className="space-y-8">
                {[
                  {
                    symbol: '●',
                    label: 'Atendimento',
                    value: 'Domiciliar e em consultório',
                  },
                  {
                    symbol: '●',
                    label: 'Área de cobertura',
                    value: 'Goiânia, Luziânia e região metropolitana',
                  },
                  {
                    symbol: '●',
                    label: 'Especialidade',
                    value: 'Feridas crônicas e laserterapia',
                  },
                  {
                    symbol: '●',
                    label: 'Instagram',
                    value: '@laservitta.homecare',
                  },
                ].map((info) => (
                  <div key={info.label} className="flex gap-3 group cursor-default hover:translate-x-1 transition-transform duration-300">
                    <span className="text-dourado/60 font-bold text-lg mt-0.5">{info.symbol}</span>
                    <div>
                      <div className="text-white/40 text-[10px] tracking-widest uppercase mb-1 font-semibold">{info.label}</div>
                      <div className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
