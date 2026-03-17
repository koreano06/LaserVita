const services = [
  {
    num: '01',
    title: 'Atendimento Domiciliar',
    desc: 'Cuidado especializado com feridas diretamente no conforto do lar. Equipamento laser de alta tecnologia e protocolos clínicos rigorosos, sem necessidade de deslocamento.',
    tags: ['Home Care', 'Goiânia e Região'],
    accent: 'bg-verde-escuro',
    symbol: '●'
  },
  {
    num: '02',
    title: 'Laserterapia em Feridas',
    desc: 'Tratamento com luz laser de baixa intensidade para acelerar a cicatrização de úlceras crônicas, lesões por pressão, pé diabético e feridas complexas.',
    tags: ['LLLT', 'Fotobiomodulação'],
    accent: 'bg-dourado',
    symbol: '◆'
  },
  {
    num: '03',
    title: 'Atendimento em Consultório',
    desc: 'Espaço clínico equipado para procedimentos ambulatoriais, curativos especializados e avaliação diagnóstica de feridas agudas e crônicas.',
    tags: ['Ambulatorial', 'Procedimentos'],
    accent: 'bg-verde-clinico',
    symbol: '■'
  },
  {
    num: '04',
    title: 'Acompanhamento Clínico',
    desc: 'Avaliação, evolução e monitoramento contínuo com indicadores assistenciais — garantindo segurança, rastreabilidade clínica e satisfação do paciente.',
    tags: ['Protocolos', 'Indicadores'],
    accent: 'bg-verde-escuro',
    symbol: '▲'
  },
  {
    num: '05',
    title: 'Parcerias Médicas',
    desc: 'Rede colaborativa com médicos e profissionais de saúde para encaminhamento de pacientes com feridas crônicas e de difícil cicatrização.',
    tags: ['Rede de Saúde', 'Referência'],
    accent: 'bg-dourado',
    symbol: '◎'
  },
  {
    num: '06',
    title: 'Protocolos Baseados em Evidências',
    desc: 'Todos os procedimentos seguem diretrizes científicas atualizadas para avaliação, tratamento e acompanhamento clínico — com rigor técnico e segurança.',
    tags: ['Ciência', 'Segurança'],
    accent: 'bg-verde-clinico',
    symbol: '✦'
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-gradient-to-b from-cinza-claro via-white to-cinza-claro py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-verde-clinico/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] rounded-full bg-dourado/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 animate-slide-in-left">
          <div className="inline-block mb-6">
            <p className="text-dourado text-xs tracking-[0.3em] uppercase mb-2 font-semibold">O que oferecemos</p>
            <div className="h-1 w-12 bg-gradient-to-r from-dourado/40 via-dourado to-dourado/40 rounded-full mx-auto"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-verde-escuro leading-tight mb-4 sm:mb-6">
            Serviços<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-verde-clinico to-dourado">especializados</span>
          </h2>
          <p className="text-cinza text-sm max-w-2xl mx-auto leading-relaxed">
            Da avaliação clínica ao acompanhamento de resultados,
            cada etapa é conduzida com excelência técnica e humanização.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group bg-white border border-cinza-medio rounded-xl p-6 relative overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-verde-escuro/10 hover:-translate-y-2 cursor-default animate-fade-in opacity-0-init"
            >
              {/* Shine effect */}
              <div className="absolute -inset-full top-0 left-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${s.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />

              {/* Icon and number */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-serif text-5xl font-semibold text-cinza-medio leading-none group-hover:text-dourado/30 transition-colors duration-300">{s.num}</span>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: s.accent.replace('bg-', '') === 'verde-escuro' ? '#1E5C2E' : s.accent.replace('bg-', '') === 'dourado' ? '#C5982A' : '#3A8A3A' }}>
                  <span className="text-white text-lg font-semibold">{s.symbol}</span>
                </div>
              </div>

              <h3 className="text-sm font-medium text-verde-escuro mb-3 tracking-wide group-hover:text-dourado transition-colors duration-300">{s.title}</h3>
              <p className="text-cinza text-sm leading-relaxed mb-5 group-hover:text-cinza-default transition-colors duration-300">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => (
                  <span
                    key={t}
                    className="text-[10px] tracking-wide text-cinza border border-cinza-medio rounded-full px-2.5 py-0.5 group-hover:border-dourado/40 group-hover:text-verde-escuro transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-4 right-4 text-dourado opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
