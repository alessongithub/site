'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Por que investir em uma landing page se já tenho Instagram?',
      answer: 'O Instagram é ótimo para relacionamento, mas você não tem controle total. Seus posts podem não alcançar todos os seguidores. Uma landing page é SUA propriedade digital, onde você direciona tráfego pago e orgânico com total controle. É o destino final onde o paciente decide agendar.',
    },
    {
      question: 'Como isso vai me trazer pacientes reais?',
      answer: 'Nossa landing page é otimizada para conversão: formulários simples, botões de WhatsApp estratégicos, design que transmite confiança. Quando você investe em tráfego (Google Ads, Instagram Ads), essa página converte visitantes em agendamentos. Clientes nossos reportam 15-30 novos pacientes/mês.',
    },
    {
      question: 'Preciso ter conhecimento técnico para gerenciar?',
      answer: 'Não! Entregamos tudo pronto e funcionando. Se precisar fazer alterações simples, ensinamos. Para mudanças maiores, fazemos para você. Nosso objetivo é que você foque em atender pacientes, não em mexer no site.',
    },
    {
      question: 'Funciona para minha especialidade específica?',
      answer: 'Sim! Já trabalhamos com dentistas, dermatologistas, fisioterapeutas, psicólogos, nutricionistas e diversas outras especialidades. Adaptamos a estratégia para seu nicho específico, usando gatilhos e linguagem que funcionam para seu público.',
    },
    {
      question: 'Quanto tempo leva para começar a ver resultados?',
      answer: 'A landing page fica pronta em 7 dias. Quando você começar a direcionar tráfego (anúncios ou SEO), os primeiros agendamentos podem aparecer em 48-72 horas. O volume depende do seu investimento em tráfego e da demanda da sua região.',
    },
    {
      question: 'Por que investir em uma landing page profissional?',
      answer: 'Pense na landing page como um investimento, não um gasto. Cada novo paciente que ela capturar durante meses gerará receita. Se captar apenas alguns pacientes no primeiro mês, o investimento já se paga. E ela trabalha 24/7 captando leads continuamente. É um ativo que valoriza seu negócio.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
              Perguntas Frequentes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tire Suas Dúvidas
            </h2>
            <p className="text-xl text-gray-600">
              Respondemos as principais perguntas sobre nosso serviço
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 overflow-hidden"
              >
                {/* Pergunta */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Resposta */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA no final */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-4">
              Ainda tem dúvidas? Fale com a gente!
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
            >
              Solicitar Orçamento Gratuito
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

