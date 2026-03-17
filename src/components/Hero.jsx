export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-verde-escuro"
    >
      {/* Background texture layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-verde-escuro via-[#1a5228] to-[#0f3a1e]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-verde-clinico/10 blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-dourado/8 blur-3xl translate-y-1/3 -translate-x-1/4 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-verde-clinico/5 blur-3xl animate-bounce-soft" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 border border-dourado/40 bg-dourado/10 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-6 sm:mb-8 animate-slide-in-left animate-fade-in hover:border-dourado/60 transition-all duration-300 hover:shadow-lg hover:shadow-dourado/20 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-dourado animate-pulse" />
              <span className="text-dourado-palido text-[10px] sm:text-xs tracking-[0.15em] uppercase">
                Cuidado avançado em cicatrização
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-4 animate-slide-in-left delay-100">
              Cuidado especializado<br />
              em <em className="text-dourado-palido font-normal bg-gradient-to-r from-dourado-palido to-dourado bg-clip-text text-transparent">feridas</em><br />
              no seu lar
            </h1>

            <p className="font-serif text-base sm:text-lg italic text-white/50 mb-4 sm:mb-6 animate-slide-in-left delay-200">
              Laserterapia · Home Care · Goiânia e Região
            </p>

            <p className="text-white/65 text-sm leading-relaxed max-w-md mb-8 sm:mb-10 animate-slide-in-left delay-300">
              Assistência de enfermagem especializada no tratamento de feridas com
              laserterapia — de forma humanizada, resolutiva e sustentável,
              sem deslocamentos desnecessários.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-16 animate-slide-in-left delay-400">
              <a
                href="#contato"
                className="bg-gradient-to-r from-dourado to-dourado-claro hover:from-dourado-claro hover:to-dourado-suave text-white text-xs tracking-[0.12em] uppercase px-5 sm:px-7 py-2.5 sm:py-3.5 transition-all duration-300 hover:shadow-xl hover:shadow-dourado/40 hover:-translate-y-0.5 active:scale-95 rounded-lg font-medium text-center"
              >
                Agendar avaliação
              </a>
              <a
                href="#servicos"
                className="border border-white/30 text-white/80 hover:border-dourado/60 hover:text-white hover:bg-white/5 text-xs tracking-[0.12em] uppercase px-5 sm:px-7 py-2.5 sm:py-3.5 transition-all duration-300 hover:-translate-y-0.5 rounded-lg font-medium text-center"
              >
                Conheça os serviços
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-10 pt-6 sm:pt-8 border-t border-white/10 animate-slide-in-left delay-500">
              {[
                { num: 'Home', sub: 'Atendimento domiciliar' },
                { num: 'LASER', sub: 'Tecnologia de ponta' },
                { num: '360°', sub: 'Acompanhamento clínico' },
              ].map((s, i) => (
                <div key={s.num} className="hover:opacity-80 transition-opacity duration-300 cursor-default group flex-1 sm:flex-none">
                  <div className="font-serif text-xl sm:text-2xl text-dourado-palido font-semibold group-hover:text-dourado transition-colors duration-300">{s.num}</div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest uppercase mt-0.5 group-hover:text-white/60 transition-colors duration-300">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className="hidden lg:flex justify-center items-center animate-float">
            <div className="relative group">
              {/* Outer glow ring - animated */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-dourado/20 via-verde-clinico/20 to-dourado/20 blur-3xl scale-110 animate-glow-pulse" />

              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-px bg-gradient-to-r from-dourado via-transparent to-dourado" style={{ borderRadius: '1rem' }} />

              {/* Central card */}
              <div className="relative bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-10 w-80 text-center hover:border-white/30 transition-all duration-500">
                {/* Logo text */}
                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-dourado/80 mb-3">
                    Cuidado avançado em cicatrização
                  </p>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-dourado to-transparent mx-auto mb-4" />
                  <div className="font-serif text-4xl font-semibold">
                    <span className="text-white">Laser</span>
                    <span className="text-dourado-palido italic">Vita</span>
                  </div>
                  <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-2">Home Care</p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-dourado/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-dourado/60" />
                  <div className="flex-1 h-px bg-dourado/30" />
                </div>

                {/* Values pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {['Ética', 'Inovação', 'Humanização', 'Resultado', 'Sustentabilidade'].map(v => (
                    <span key={v} className="text-[10px] text-white/50 border border-white/10 rounded-full px-3 py-1">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Role para baixo</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
