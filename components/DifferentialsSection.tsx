export default function DifferentialsSection() {
  const differentials = [
    {
      icon: '🏥',
      title: 'Especialistas em Marketing para Saúde',
      description: 'Entendemos as especificidades do setor médico e sabemos exatamente o que funciona para gerar agendamentos qualificados.',
    },
    {
      icon: '🎯',
      title: 'Design que Transmite Confiança',
      description: 'Layout profissional que passa credibilidade imediata. Seus pacientes vão se sentir seguros antes mesmo de agendar a primeira consulta.',
    },
    {
      icon: '📅',
      title: 'Otimizado para Agendamentos Online',
      description: 'Botões estratégicos de WhatsApp, formulários simplificados e fluxo de conversão pensado especificamente para captar pacientes.',
    },
    {
      icon: '✅',
      title: 'Casos Reais com Clínicas e Dentistas',
      description: 'Experiência comprovada com profissionais da saúde. Sabemos o que funciona porque já fizemos dezenas de projetos no setor.',
    },
  ]

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por Que Escolher a Evoque?
            </h2>
            <p className="text-xl text-gray-600">
              Diferenciais que fazem a diferença no seu negócio
            </p>
          </div>

          {/* Grid de Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white via-primary-50 to-white border-2 border-primary-100 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">{differential.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {differential.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

