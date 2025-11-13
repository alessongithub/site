export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Briefing',
      description: 'Entendemos seu negócio, objetivos e público-alvo em uma conversa de 30 minutos.',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Estratégia & Design',
      description: 'Criamos a estrutura e design inicial focados em conversão para sua aprovação.',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description: 'Transformamos o design em um site ultra-rápido com tecnologia de ponta.',
      icon: '⚡',
    },
    {
      number: '04',
      title: 'Entrega & Suporte',
      description: 'Seu site vai ao ar com tudo funcionando perfeitamente. Damos suporte inicial completo.',
      icon: '🚀',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
              Processo Transparente
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como Funciona em 4 Passos Simples
            </h2>
            <p className="text-xl text-gray-600">
              Processo ágil e organizado. Do primeiro contato até o site no ar.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha conectora */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-accent-300"></div>

            {/* Grid de Passos */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Número */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mx-auto group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                      {/* Ícone */}
                      <div className="absolute -top-2 -right-2 text-3xl">{step.icon}</div>
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA no final do processo */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              ⏱️ <strong className="text-primary-600">Prazo total: 7 dias úteis</strong> do briefing até o site no ar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

