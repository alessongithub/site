export default function ContactFormSection() {
  // Formulário HTML tradicional - o Netlify Forms processa automaticamente

  return (
    <section id="contato-form" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-8 w-64 h-64 bg-accent-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm shadow-sm">
              <span role="img" aria-label="email">✉️</span> Fale com a Evoque
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Solicite seu Plano Sob Medida
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário e nossa equipe retorna em até <strong className="text-primary-600">24 horas úteis</strong>
              com um plano estratégico para sua clínica ou consultório.
            </p>
          </div>

          <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-80"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <form 
                  name="contato-evoque" 
                  method="POST"
                  action="/contato-sucesso"
                  netlify
                  data-netlify-honeypot="bot-field" 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contato-evoque" />
                  
                  <p className="hidden">
                    <label>
                      Não preencha: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome completo
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Dra. Maria Silva"
                        className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-inner focus:border-primary-500 focus:ring-4 focus:ring-primary-200 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail profissional
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="contato@evoqueassessoria.com.br"
                        className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-inner focus:border-primary-500 focus:ring-4 focus:ring-primary-200 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-inner focus:border-primary-500 focus:ring-4 focus:ring-primary-200 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="especialidade" className="block text-sm font-semibold text-gray-700 mb-2">
                        Especialidade / Clínica
                      </label>
                      <input
                        id="especialidade"
                        name="especialidade"
                        type="text"
                        required
                        placeholder="Clínica odontológica, ortopedia, etc."
                        className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-inner focus:border-primary-500 focus:ring-4 focus:ring-primary-200 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                      Conte um pouco sobre a sua necessidade
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      placeholder="Ex.: Quero captar mais pacientes particulares para procedimentos estéticos."
                      className="w-full rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-inner focus:border-primary-500 focus:ring-4 focus:ring-primary-200 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 px-6 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-primary-500/40"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Enviar mensagem
                      <svg
                        className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent-200/40 via-white/30 to-primary-100/40"></div>
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você concorda em receber um contato da nossa equipe. Seus dados são protegidos conforme a LGPD.
                  </p>
                </form>
              </div>

              <div className="relative hidden lg:flex flex-col gap-6 p-10 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
                <div className="absolute -top-24 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-6 w-40 h-40 bg-accent-500/30 rounded-full blur-2xl"></div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
                    <span className="text-accent-200">✔</span> Atendimento Premium
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Por que preencher o formulário?</h3>
                    <ul className="space-y-3 text-sm text-primary-100">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-accent-200">•</span>
                        Diagnóstico personalizado do seu marketing em saúde
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-accent-200">•</span>
                        Prévia de resultados e projeção de ROI para 3 meses
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-accent-200">•</span>
                        Plano de ação pronto para colocar sua clínica em evidência
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/10 border border-white/10 shadow-lg">
                    <p className="text-sm uppercase tracking-widest text-primary-100">Contato direto</p>
                    <p className="mt-2 text-lg font-semibold">contato@evoqueassessoria.com.br</p>
                    <p className="mt-1 text-sm text-primary-100">Retornamos em até 1 dia útil</p>
                  </div>

                  <div className="text-xs text-primary-200">
                    Caso prefira, fale agora pelo WhatsApp: <strong className="text-white">(11) 94714-6126</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
