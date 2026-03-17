const objectives = [
  'Implantar e consolidar o serviço em Goiânia e região metropolitana, oferecendo assistência especializada em laserterapia domiciliar e ambulatorial.',
  'Tornar-se referência regional em cuidado avançado em cicatrização, expandindo gradualmente para municípios do interior do estado de Goiás.',
  'Desenvolver rede de parcerias com médicos e profissionais de saúde para encaminhamento de pacientes com feridas crônicas.',
  'Implantar protocolos assistenciais baseados em evidências científicas para avaliação, tratamento e acompanhamento clínico.',
  'Implementar sistema de monitoramento de indicadores assistenciais de cicatrização, segurança e satisfação dos usuários.',
]

export default function Objectives() {
  return (
    <section className="bg-white py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-dourado/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-verde-clinico/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left: big typography */}
          <div className="animate-slide-in-left">
            <div className="inline-block mb-4 sm:mb-6">
              <p className="text-dourado text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Onde estamos indo</p>
              <div className="h-1 w-8 bg-gradient-to-r from-dourado/40 to-dourado rounded-full"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-verde-escuro leading-tight mb-6 sm:mb-8">
              Objetivos<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-verde-clinico to-dourado">Estratégicos</span>
            </h2>
            <p className="text-cinza text-sm leading-relaxed mb-10 hover:text-cinza-default transition-colors duration-300">
              Nossa trajetória é guiada por metas claras e mensuráveis,
              com foco em expansão responsável e qualidade assistencial contínua.
            </p>

            {/* Coverage badge */}
            <div className="inline-flex items-center gap-3 bg-cinza-claro border border-cinza-medio rounded-xl px-5 py-4 hover:border-dourado/40 hover:shadow-lg transition-all duration-300 cursor-default group">
              <div className="w-2 h-2 rounded-full bg-verde-clinico group-hover:animate-pulse" />
              <div>
                <div className="text-xs font-medium text-verde-escuro">Área de atuação atual</div>
                <div className="text-xs text-cinza mt-0.5">Goiânia · Luziânia · Região Metropolitana</div>
              </div>
            </div>
          </div>

          {/* Right: objectives list */}
          <div className="space-y-4 animate-slide-in-right">
            {objectives.map((obj, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group flex gap-4 p-5 rounded-xl border border-cinza-medio hover:border-dourado/40 hover:bg-gradient-to-r hover:from-dourado/[0.04] hover:to-verde-clinico/[0.04] transition-all duration-300 cursor-default relative overflow-hidden animate-fade-in opacity-0-init"
              >
                {/* Shine effect */}
                <div className="absolute -inset-full top-0 left-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />

                <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-gradient from-dourado/40 to-verde-clinico/40 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-dourado/20 group-hover:to-verde-clinico/20 group-hover:border-dourado/60 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-dourado to-verde-clinico font-bold text-xs relative z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-cinza text-sm leading-relaxed group-hover:text-cinza-default transition-colors duration-300 relative z-10">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
