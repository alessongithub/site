export default function SolutionSection() {
  const solutions = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Landing Pages que Guiam para o Agendamento',
      description: 'Cada elemento pensado para converter visitantes em pacientes. Botões estratégicos de WhatsApp e formulários otimizados que facilitam o agendamento.',
      color: 'primary',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Sites Rápidos e Seguros',
      description: 'Performance otimizada para quem precisa de informação rápida. Tecnologia moderna que transmite confiança e profissionalismo para seus pacientes.',
      color: 'accent',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Entendemos Seu Mercado',
      description: 'Já sabemos o que funciona para clínicas e consultórios. Experiência comprovada em marketing médico e estratégias específicas para o setor de saúde.',
      color: 'green',
    },
  ]

  const colorClasses = {
    primary: 'text-primary-600 bg-primary-50 border-primary-200',
    accent: 'text-accent-600 bg-accent-50 border-accent-200',
    green: 'text-green-600 bg-green-50 border-green-200',
  }

  return (
    <section id="solucao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Solução Evoque Para Saúde
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Não entregamos apenas um site. Entregamos um sistema completo de captação de pacientes para sua clínica.
            </p>
          </div>

          {/* Grid de Soluções */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-3 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Ícone */}
                  <div className={`inline-flex p-4 rounded-xl mb-6 border-2 ${colorClasses[solution.color as keyof typeof colorClasses]} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {solution.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {solution.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-tl-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

