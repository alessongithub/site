export default function TechnologySection() {
  const technologies = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Velocidade que Converte',
      description: 'Desenvolvida com Next.js para carregamento instantâneo. Pacientes não esperam e o Google recompensa sites rápidos.',
      gradient: 'from-accent-500 to-green-500',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Design que Encanta',
      description: 'Código limpo e otimizado que se adapta perfeitamente a qualquer tela, transmitindo profissionalismo e confiança.',
      gradient: 'from-primary-500 to-blue-500',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Vantagem Competitiva',
      description: 'Tecnologia do futuro, hoje. Diferente de soluções ultrapassadas, nosso método garante performance superior e manutenção zero.',
      gradient: 'from-purple-500 to-primary-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-4">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
              Tecnologia de Ponta
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tecnologia que Entrega Resultado
            </h2>
            <p className="text-xl text-red-600 font-semibold mb-12">
              Porque investir em uma landing page lenta é jogar dinheiro fora.
            </p>
          </div>

          {/* Grid de Tecnologias */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient animado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Número do index */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  {/* Ícone com gradiente */}
                  <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${tech.gradient} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {tech.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {tech.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Barra decorativa na base */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Comparação visual */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-accent-50 rounded-2xl p-8 border-2 border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Sites Lentos */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                  ❌ Sites Lentos Tradicionais
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Carregamento de 5-10 segundos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Pacientes desistem antes de ver o site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Google penaliza no ranking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Não funciona bem em celulares</span>
                  </li>
                </ul>
              </div>

              {/* Nossa Tecnologia */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                  ✓ Nossa Tecnologia Next.js
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">✓</span>
                    <span><strong>Menos de 1 segundo</strong> de carregamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">✓</span>
                    <span>Taxa de conversão até <strong>3x maior</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">✓</span>
                    <span>Google recompensa com <strong>melhor posição</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">✓</span>
                    <span>Perfeito em <strong>qualquer dispositivo</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Estatística de impacto */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-2xl shadow-xl">
              <p className="text-sm font-semibold mb-1">Estatística Comprovada</p>
              <p className="text-2xl md:text-3xl font-bold">
                53% dos usuários abandonam sites que levam +3 segundos
              </p>
              <p className="text-sm mt-2 text-primary-100">Fonte: Google Research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

