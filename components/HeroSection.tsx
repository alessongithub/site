'use client'

export default function HeroSection() {
  const handleCTAClick = () => {
    // Abre WhatsApp ou formulário
    const whatsappMessage = encodeURIComponent(
      'Olá! Gostaria de solicitar um orçamento sem compromisso para criação de site/landing page.'
    )
    window.open(`https://wa.me/5511947146126?text=${whatsappMessage}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background Gradient Animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 animate-gradient"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge moderno */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-accent-200 mb-8 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">Especialistas em Marketing para Saúde</span>
          </div>

          {/* Headline Principal - Focada no Nicho Médico */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-shadow">
            Sua Clínica{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 animate-gradient">
              Lotada de Pacientes
            </span>
            <br />
            Qualificados. Agora é Possível.
          </h1>

          {/* Subheadline - Explica a solução para médicos */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Criamos <strong className="text-gray-900">landing pages que transformam visitantes em agendamentos de consulta.</strong>{' '}
            Especialistas em converter tráfego em pacientes para sua clínica.
          </p>

          {/* CTA Primário */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleCTAClick}
              className="group relative overflow-hidden bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-accent-500/30 hover:shadow-accent-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Quero Mais Pacientes
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="#solucao"
              className="group text-primary-600 font-semibold px-8 py-5 rounded-2xl border-2 border-primary-600 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 hover:text-white transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Saiba Como Funciona
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Ilustração/Placeholder - SVG de crescimento */}
          <div className="max-w-2xl mx-auto mt-12">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Funnel de conversão estilizado */}
              <path
                d="M100 50 L700 50 L650 350 L150 350 Z"
                fill="url(#gradient1)"
                opacity="0.2"
              />
              <path
                d="M150 100 L650 100 L600 300 L200 300 Z"
                fill="url(#gradient2)"
                opacity="0.3"
              />
              <path
                d="M200 150 L600 150 L550 250 L250 250 Z"
                fill="url(#gradient3)"
                opacity="0.4"
              />
              
              {/* Setas indicando conversão */}
              <path
                d="M400 50 L400 350"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="10,5"
                opacity="0.5"
              />
              <path
                d="M350 200 L450 200"
                stroke="#f97316"
                strokeWidth="4"
                markerEnd="url(#arrowhead)"
              />
              
              {/* Textos no funil */}
              <text x="400" y="80" textAnchor="middle" fill="#1e40af" fontSize="18" fontWeight="bold">
                Visitantes
              </text>
              <text x="400" y="180" textAnchor="middle" fill="#ea580c" fontSize="18" fontWeight="bold">
                Leads
              </text>
              <text x="400" y="320" textAnchor="middle" fill="#059669" fontSize="18" fontWeight="bold">
                Clientes
              </text>

              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#c2410c" />
                </linearGradient>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

