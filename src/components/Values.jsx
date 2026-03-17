const values = [
  {
    num: '01',
    title: 'Ética e Responsabilidade Profissional',
    desc: 'Atuação dentro dos mais altos padrões de conduta profissional e ética em saúde.',
    symbol: '◉',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    num: '02',
    title: 'Excelência Técnica e Inovação',
    desc: 'Tecnologia de ponta e atualização contínua dos protocolos assistenciais.',
    symbol: '▲',
    color: 'from-violet-500/20 to-violet-600/20'
  },
  {
    num: '03',
    title: 'Humanização do Cuidado',
    desc: 'O paciente no centro de cada decisão clínica, com escuta ativa e empatia.',
    symbol: '●',
    color: 'from-rose-500/20 to-rose-600/20'
  },
  {
    num: '04',
    title: 'Compromisso com Resultados',
    desc: 'Foco em efetividade clínica e acompanhamento rigoroso dos indicadores de evolução.',
    symbol: '◆',
    color: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    num: '05',
    title: 'Sustentabilidade e Uso Consciente de Recursos',
    desc: 'Prática responsável com impacto positivo para o paciente, a equipe e o meio ambiente.',
    symbol: '■',
    color: 'from-green-500/20 to-green-600/20'
  },
]

export default function Values() {
  return (
    <section id="valores" className="bg-gradient-to-b from-verde-escuro to-verde-escuro/95 py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-dourado/8 via-verde-clinico/5 to-transparent blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-dourado/6 via-transparent to-transparent blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-verde-clinico/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with enhanced styling */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block mb-6">
            <p className="text-dourado text-xs tracking-[0.3em] uppercase font-semibold">Nossos Pilares</p>
            <div className="h-1 w-12 bg-gradient-to-r from-dourado/40 via-dourado to-dourado/40 rounded-full mx-auto mt-3"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-4 sm:mb-6">
            Valores que guiam<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-dourado-palido to-dourado">cada atendimento</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada valor representa um compromisso real com quem confiou seus cuidados à LaserVita,
            traduzindo-se em excelência, cuidado e inovação contínuos.
          </p>
        </div>

        {/* Values grid - Desktop: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {values.map((v, i) => (
            <div
              key={v.num}
              className="group relative"
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-dourado/40 transition-all duration-500 hover:bg-white/8 cursor-default overflow-hidden group">
                
                {/* Shine effect on hover */}
                <div className="absolute -inset-full top-0 left-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
                
                {/* Number and icon row */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <span className="font-serif text-5xl text-dourado/30 group-hover:text-dourado/60 transition-colors duration-500 leading-none">
                    {v.num}
                  </span>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-dourado/10 border border-dourado/30 group-hover:bg-dourado/20 group-hover:border-dourado/50 transition-all duration-500">
                    <span className="text-lg font-semibold text-dourado group-hover:scale-110 transition-transform duration-500">{v.symbol}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-dourado-palido transition-colors duration-500 leading-snug relative z-10">
                  {v.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500 relative z-10 mb-4">
                  {v.desc}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-dourado/40 group-hover:text-dourado transition-all duration-500 relative z-10">
                  <span className="text-xs tracking-widest uppercase font-semibold">Saiba mais</span>
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent quote section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-dourado/10 via-dourado/5 to-dourado/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-gradient-to-r from-dourado/5 to-verde-clinico/5 border border-dourado/20 rounded-3xl p-10 md:p-12 text-center backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-dourado to-transparent rounded-full" />
            </div>
            
            <div className="font-serif text-2xl md:text-3xl italic text-white mb-4 leading-relaxed">
              "Cuidado avançado em cicatrização com <span className="text-dourado-palido">excelência humanizada</span>"
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-dourado/50 to-transparent" />
              <span className="text-dourado text-xs tracking-[0.3em] uppercase font-semibold">LaserVita Home Care</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-dourado/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
