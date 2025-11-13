export default function ProblemSection() {
  const problems = [
    {
      icon: '📅',
      title: 'Sua agenda tem horários ociosos?',
      description: 'Horários vagos que poderiam estar gerando receita, mas você não tem um fluxo constante de novos pacientes.',
    },
    {
      icon: '❌',
      title: 'Pacientes desistem antes de agendar?',
      description: 'Visitantes chegam no seu site mas não encontram facilidade para agendar. O processo não é claro e você perde oportunidades.',
    },
    {
      icon: '🔍',
      title: 'Sua concorrência aparece antes no Google?',
      description: 'Enquanto outras clínicas aparecem nas primeiras posições, você fica invisível e perde pacientes qualificados para concorrentes.',
    },
    {
      icon: '🏥',
      title: 'Seu site atual não gera confiança imediata?',
      description: 'Design ultrapassado e falta de informações estratégicas fazem o paciente duvidar da sua credibilidade profissional.',
    },
  ]

  return (
    <section id="problema" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Os Desafios de Clínicas e Consultórios
            </h2>
            <p className="text-xl text-gray-600">
              Se você enfrenta algum desses problemas, temos a solução perfeita para você.
            </p>
          </div>

          {/* Grid de Problemas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

