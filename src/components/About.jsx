const cards = [
  {
    label: 'Missão',
    text: 'Prestar assistência de enfermagem especializada em feridas com laserterapia, de forma humanizada, resolutiva e sustentável, promovendo cicatrização, qualidade de vida e redução de deslocamentos desnecessários.',
    accent: 'text-verde-escuro',
    symbol: '◉'
  },
  {
    label: 'Visão',
    text: 'Ser referência regional em tratamento de feridas no domicílio e consultório, unindo excelência técnica, inovação e responsabilidade socioambiental.',
    accent: 'text-dourado',
    symbol: '◆'
  },
  {
    label: 'Diferenciais',
    text: 'Protocolos baseados em evidências científicas. Rede de parcerias com médicos especializados. Monitoramento contínuo de indicadores clínicos e satisfação do paciente.',
    accent: 'text-verde-clinico',
    symbol: '◈'
  },
]

export default function About() {
  return (
    <section id="missao" className="bg-white py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-dourado/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-verde-clinico/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">

          {/* Left */}
          <div className="animate-slide-in-left">
            <div className="inline-block mb-4 sm:mb-6">
              <p className="text-dourado text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Quem somos</p>
              <div className="h-1 w-8 bg-gradient-to-r from-dourado/40 to-dourado rounded-full"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-verde-escuro leading-tight mb-6 sm:mb-8">
              Referência em<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-verde-clinico to-dourado">cicatrização avançada</span><br />
              na sua região
            </h2>
            <p className="text-cinza text-sm leading-relaxed mb-6 hover:text-cinza-default transition-colors duration-300">
              A LaserVita Home Care nasce com o propósito de transformar o cuidado com
              feridas crônicas e de difícil cicatrização, unindo tecnologia laser de última
              geração a um olhar profundamente humanizado sobre cada paciente.
            </p>
            <p className="text-cinza text-sm leading-relaxed mb-8 hover:text-cinza-default transition-colors duration-300">
              Atuamos em Goiânia e região metropolitana, com objetivo de expandir
              gradualmente para todo o estado de Goiás — levando cuidado especializado
              até onde o paciente precisa, sem deslocamentos desnecessários.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: 'Home Care', desc: 'Atendimento domiciliar' },
                { num: 'Ambulatorial', desc: 'Consultório especializado' },
                { num: 'Evidências', desc: 'Protocolos científicos' },
                { num: 'Goiânia', desc: 'e região metropolitana' },
              ].map((f, i) => (
                <div key={f.num} className="border border-cinza-medio rounded-lg p-4 hover:border-dourado/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="font-serif text-base font-semibold text-verde-escuro group-hover:text-dourado transition-colors duration-300">{f.num}</div>
                  <div className="text-xs text-cinza mt-0.5 group-hover:text-cinza-default transition-colors duration-300">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: MVV cards */}
          <div className="flex flex-col gap-4 animate-slide-in-right">
            {cards.map((c, i) => (
              <div
                key={c.label}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group border rounded-xl p-6 transition-all duration-400 hover:shadow-xl hover:-translate-y-2 hover:border-dourado/50 cursor-default animate-fade-in opacity-0-init relative overflow-hidden"
              >
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ background: `linear-gradient(135deg, ${c.accent === 'text-verde-escuro' ? '#1E5C2E' : c.accent === 'text-dourado' ? '#C5982A' : '#3A8A3A'}15 0%, transparent 100%)` }} />
                
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300" style={{ backgroundColor: `${c.accent === 'text-verde-escuro' ? '#1E5C2E' : c.accent === 'text-dourado' ? '#C5982A' : '#3A8A3A'}18`, borderColor: `${c.accent === 'text-verde-escuro' ? '#1E5C2E' : c.accent === 'text-dourado' ? '#C5982A' : '#3A8A3A'}30` }}>
                    <span className={`text-sm font-semibold ${c.accent}`}>{c.symbol}</span>
                  </div>
                  <span className={`text-xs tracking-[0.18em] uppercase font-medium ${c.accent} mt-1.5`}>{c.label}</span>
                </div>
                <p className="text-cinza text-sm leading-relaxed group-hover:text-cinza-default transition-colors duration-300">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
