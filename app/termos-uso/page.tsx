import Link from 'next/link'

export const metadata = {
  title: 'Termos de Uso - Evoque Assessoria',
  description: 'Termos e condições de uso dos serviços da Evoque Assessoria',
}

export default function TermosUso() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o site
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
          <p className="text-gray-600">Última atualização: Novembro de 2024</p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao acessar e usar os serviços da Evoque Assessoria, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrição dos Serviços</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Evoque Assessoria oferece serviços de criação de landing pages, sites institucionais e consultoria em marketing digital, com especialização no setor de saúde (clínicas, consultórios e profissionais da área médica e odontológica).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nossos serviços incluem:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Desenvolvimento de landing pages de alta conversão</li>
              <li>Criação de sites institucionais</li>
              <li>Otimização para motores de busca (SEO)</li>
              <li>Consultoria em marketing digital para o setor de saúde</li>
              <li>Suporte técnico e manutenção</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Responsabilidades do Cliente</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao contratar nossos serviços, o cliente se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Fornecer informações precisas e atualizadas sobre seu negócio</li>
              <li>Disponibilizar conteúdo (textos, imagens, vídeos) necessário para o desenvolvimento</li>
              <li>Respeitar os prazos estabelecidos para aprovações e feedbacks</li>
              <li>Garantir que possui direitos sobre todo o material fornecido</li>
              <li>Efetuar os pagamentos conforme acordado em contrato</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Após a conclusão do projeto e pagamento integral, o cliente receberá todos os direitos de propriedade sobre o site/landing page desenvolvida, incluindo código-fonte e design.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Evoque Assessoria reserva-se o direito de incluir o projeto em seu portfólio, salvo acordo específico de confidencialidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prazos e Entregas</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os prazos estabelecidos são estimativas baseadas na complexidade do projeto e na disponibilidade de informações pelo cliente. Atrasos na entrega de conteúdo ou aprovações podem impactar o cronograma final.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nosso prazo padrão para landing pages é de até 7 dias úteis após recebimento de todo o conteúdo necessário.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Garantias e Limitações</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Garantimos que todos os sites desenvolvidos serão:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Responsivos e compatíveis com os principais navegadores</li>
              <li>Otimizados para performance e SEO</li>
              <li>Seguros e em conformidade com boas práticas</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 mt-4">
              Não garantimos resultados específicos de conversão ou posicionamento em motores de busca, pois estes dependem de múltiplos fatores externos ao nosso controle (investimento em tráfego, qualidade do atendimento, concorrência, etc.).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Política de Reembolso</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reembolsos podem ser solicitados apenas antes do início efetivo do desenvolvimento. Uma vez iniciado o trabalho, não há possibilidade de reembolso integral, podendo ser negociado reembolso parcial conforme etapas concluídas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Conformidade com o Setor de Saúde</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para projetos no setor de saúde, garantimos conformidade com as diretrizes dos conselhos profissionais (CFM, CRO, etc.) quanto à publicidade médica e odontológica. É responsabilidade do cliente fornecer informações corretas e aprovadas pelos conselhos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificações dos Termos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Evoque Assessoria reserva-se o direito de modificar estes termos a qualquer momento. Alterações entram em vigor imediatamente após publicação no site. O uso continuado dos serviços após alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para dúvidas ou questões sobre estes Termos de Uso, entre em contato:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li><strong>Email:</strong> contato@evoque.com.br</li>
              <li><strong>WhatsApp:</strong> (11) 99999-9999</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

