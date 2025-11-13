import Link from "next/link"

export const metadata = {
  title: "Mensagem enviada | Evoque Assessoria",
  description: "Confirmação de envio do formulário de contato da Evoque Assessoria.",
}

export default function ContatoSucessoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-900 via-gray-900 to-black text-white flex items-center justify-center px-6 py-24">
      <div className="relative max-w-3xl w-full bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-16 w-72 h-72 bg-primary-500/40 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-accent-500/30 blur-3xl"></div>

        <div className="relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-100 text-sm font-semibold">
            <span role="img" aria-label="confete">🎉</span> Mensagem recebida com sucesso
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Obrigado por entrar em contato com a Evoque Assessoria!
          </h1>

          <p className="text-base sm:text-lg text-primary-100 max-w-xl mx-auto">
            Nossa equipe já recebeu sua mensagem e vai retornar em até <strong className="text-white">24 horas úteis</strong>.
            Se for urgente, fale conosco agora mesmo pelo WhatsApp.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="https://wa.me/5511947146126?text=Olá!%20Acabei%20de%20enviar%20o%20formulário%20e%20quero%20falar%20com%20um%20especialista."
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-semibold transition transform hover:-translate-y-1"
            >
              WhatsApp agora
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold transition transform hover:-translate-y-1"
            >
              Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
