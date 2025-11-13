export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      business: 'Odontologia Estética',
      image: '👨‍⚕️',
      testimonial: 'A landing page que a Evoque criou para nossa campanha de clareamento dental captou 28 agendamentos qualificados em apenas 3 semanas. Minha agenda nunca esteve tão cheia!',
      result: '28 agendamentos em 3 semanas',
    },
    {
      name: 'Dra. Ana Paula Costa',
      business: 'Dermatologia & Estética',
      image: '👩‍⚕️',
      testimonial: 'Antes eu tinha muitos horários ociosos. Com a landing page estratégica da Evoque, consegui reduzir em 70% os horários vazios. Pacientes agora agendam direto pelo site!',
      result: '70% menos horários ociosos',
    },
    {
      name: 'Dr. Roberto Almeida',
      business: 'Fisioterapia & Reabilitação',
      image: '👨‍⚕️',
      testimonial: 'O design transmite exatamente a confiança que meus pacientes precisam. Em 7 dias meu consultório tinha um site profissional e já estou recebendo 4-5 contatos por dia.',
      result: '4-5 novos contatos por dia',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
              Prova Social
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resultados Reais de Empresas Como a Sua
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes conquistaram com uma landing page estratégica
            </p>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="text-6xl mb-4">{testimonial.image}</div>
                
                {/* Depoimento */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Resultado Destacado */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-3 rounded-lg mb-4">
                  <p className="text-primary-700 font-bold text-sm">
                    ✓ {testimonial.result}
                  </p>
                </div>

                {/* Nome e Empresa */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

