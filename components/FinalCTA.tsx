'use client'

export default function FinalCTA() {
  const handleCTAClick = () => {
    const whatsappMessage = encodeURIComponent(
      'Olá! Sou profissional da saúde e gostaria de agendar uma consultoria gratuita para captar mais pacientes.'
    )
    window.open(`https://wa.me/5511947146126?text=${whatsappMessage}`, '_blank')
  }

  return (
    <section id="contato" className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Sua Próxima Semana com a
            <br />
            Agenda Cheia Começa Aqui
          </h2>

          {/* Descrição */}
          <p className="text-xl sm:text-2xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como trazer{' '}
            <strong className="text-white">15-30 novos pacientes por mês</strong> para sua clínica.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="group relative overflow-hidden bg-white text-primary-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span className="relative z-10">Agendar Consultoria Gratuita</span>
            <svg className="w-7 h-7 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-100 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Garantia/Confiança */}
          <p className="mt-8 text-primary-200 text-sm">
            ✓ Orçamento gratuito e sem compromisso • ✓ Resposta em até 24h • ✓ Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  )
}

