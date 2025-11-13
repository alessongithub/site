'use client'

export default function InvestmentSection() {
  const handleCTA = () => {
    const message = encodeURIComponent('Olá! Quero uma proposta personalizada e entender o ROI para minha clínica.')
    window.open(`https://wa.me/5511947146126?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
              Investimento Inteligente
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Seu Investimento Não É Num Site.
              <br />
              É em Pacientes Novos.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enquanto um site comum é uma despesa, nossa landing page estratégica é uma <strong className="text-accent-600">máquina de capturar pacientes</strong>.
            </p>
          </div>

          {/* Comparação Lado a Lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Site Comum - Negativo */}
            <div className="relative bg-white rounded-2xl border-2 border-red-200 p-8 shadow-lg">
              {/* Badge Negativo */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ❌ NÃO RECOMENDADO
                </div>
              </div>

              <div className="mt-4">
                {/* Título */}
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Site Comum</p>
                  <p className="text-sm text-gray-500">Parece econômico, mas...</p>
                </div>

                {/* Características Negativas */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0 mt-1">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900">Lento e Ultrapassado</p>
                      <p className="text-sm text-gray-600">Carrega em 5-10 segundos. Pacientes desistem antes de ver.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0 mt-1">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900">Não Converte</p>
                      <p className="text-sm text-gray-600">Sem estratégia de conversão. Visitantes entram e saem sem agendar.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0 mt-1">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900">Risco LGPD</p>
                      <p className="text-sm text-gray-600">Pode não estar conforme a Lei de Proteção de Dados. Risco de multas milionárias.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0 mt-1">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900">Sem Suporte Real</p>
                      <p className="text-sm text-gray-600">Problemas? Você fica sozinho ou paga caro por cada ajuste.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0 mt-1">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900">Não Otimizado para Saúde</p>
                      <p className="text-sm text-gray-600">Template genérico que não entende seu mercado específico.</p>
                    </div>
                  </div>
                </div>

                {/* Resultado Final */}
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700 font-semibold text-center">
                    Resultado: Dinheiro jogado fora + oportunidades perdidas
                  </p>
                </div>
              </div>
            </div>

            {/* Nossa Solução - Positivo */}
            <div className="relative bg-gradient-to-br from-white to-accent-50 rounded-2xl border-2 border-accent-300 p-8 shadow-xl">
              {/* Badge Positivo */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-accent-600 to-green-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ✓ RECOMENDADO
                </div>
              </div>

              <div className="mt-4">
                {/* Título */}
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-green-600 bg-clip-text text-transparent mb-2">
                    Landing Page Estratégica
                  </p>
                  <p className="text-sm text-accent-700 font-semibold">Investimento que se paga rapidamente</p>
                </div>

                {/* Características Positivas */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Ultra-Rápido (Next.js)</p>
                      <p className="text-sm text-gray-600">Carrega em menos de 1 segundo. Pacientes não esperam e convertem.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Estratégia de Conversão</p>
                      <p className="text-sm text-gray-600">Cada elemento pensado para gerar agendamentos. Taxa 3x maior.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">100% Conforme LGPD</p>
                      <p className="text-sm text-gray-600">Política de privacidade, cookies, termos. Você fica protegido.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Suporte Inicial Completo</p>
                      <p className="text-sm text-gray-600">Acompanhamento nas primeiras semanas. Você nunca fica sozinho.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Especialista em Saúde</p>
                      <p className="text-sm text-gray-600">Entendemos seu mercado. Sabemos o que funciona para clínicas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Hospedagem Inclusa Grátis no Primeiro Ano</p>
                      <p className="text-sm text-gray-600">Todos nossos projetos são hospedados na Netlify, uma das maiores plataformas globais. Você não paga nada por hospedagem premium no primeiro ano.</p>
                    </div>
                  </div>
                </div>

                {/* Resultado Final */}
                <div className="mt-6 p-4 bg-accent-100 rounded-lg border border-accent-300">
                  <p className="text-sm text-accent-800 font-semibold text-center">
                    Resultado: 15-30 novos pacientes/mês + ROI em 1-2 meses
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cálculo de ROI */}
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                💰 Faça as Contas com a Gente
              </h3>
              <p className="text-xl text-primary-100">
                Veja como o investimento se paga rapidamente
              </p>
            </div>

            {/* Grid de Cálculos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Meta */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-sm text-primary-100 mb-2">Nossa meta para você</p>
                <p className="text-3xl font-bold">15-30 pacientes</p>
                <p className="text-xs text-primary-200 mt-2">Novos pacientes por mês</p>
              </div>

              {/* ROI */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-sm text-primary-100 mb-2">Retorno do investimento</p>
                <p className="text-3xl font-bold">1-2 meses</p>
                <p className="text-xs text-primary-200 mt-2">Investimento pago</p>
              </div>

              {/* Resultado */}
              <div className="bg-accent-500 rounded-xl p-6 text-center shadow-xl">
                <p className="text-sm text-white mb-2">Resultado esperado</p>
                <p className="text-3xl font-bold">ROI Positivo</p>
                <p className="text-xs text-accent-100 mt-2">Lucro recorrente todo mês</p>
              </div>
            </div>

            {/* Como Funciona o ROI */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h4 className="font-bold text-xl mb-4 text-center">📊 Como Seu Investimento Se Paga</h4>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-accent-300 text-2xl">1️⃣</span>
                  <div>
                    <p className="font-bold mb-1">Você investe na landing page</p>
                    <p className="text-primary-100 text-sm">Uma única vez. Propriedade 100% sua.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-300 text-2xl">2️⃣</span>
                  <div>
                    <p className="font-bold mb-1">Começa a gerar agendamentos</p>
                    <p className="text-primary-100 text-sm">15-30 novos pacientes qualificados por mês em média.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-300 text-2xl">3️⃣</span>
                  <div>
                    <p className="font-bold mb-1">O investimento se paga sozinho</p>
                    <p className="text-primary-100 text-sm">Em 1-2 meses com o faturamento dos novos pacientes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-accent-500/30 rounded-lg p-3">
                  <span className="text-accent-300 text-2xl">✨</span>
                  <div>
                    <p className="font-bold mb-1 text-accent-300">Depois disso é lucro puro</p>
                    <p className="text-white text-sm">Cada novo paciente captado vira receita adicional recorrente.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold mb-6">
                Está Pronto para Ver Isso Acontecer no Seu Consultório?
              </p>
              <button
                onClick={handleCTA}
                className="group relative overflow-hidden bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
              >
                <span className="relative z-10">Solicitar Proposta Personalizada</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-100 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-sm text-primary-200 mt-4">
                ✓ Consultoria gratuita • ✓ Cálculo de ROI específico para sua especialidade
              </p>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-xl shadow-lg p-6 border-2 border-accent-200">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🏆</div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg mb-1">Nosso Compromisso</p>
                  <p className="text-gray-600 text-sm">
                    Se sua landing page não gerar pelo menos 3 leads qualificados nos primeiros 30 dias de tráfego,
                    <strong className="text-accent-600"> revisamos todo o projeto gratuitamente</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

