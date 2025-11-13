import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidade - Evoque Assessoria',
  description: 'Política de privacidade e proteção de dados da Evoque Assessoria',
}

export default function PoliticaPrivacidade() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
          <p className="text-gray-600">Última atualização: Novembro de 2024</p>
          <div className="mt-4 p-4 bg-accent-50 border-l-4 border-accent-500 rounded">
            <p className="text-sm text-gray-700">
              <strong>LGPD:</strong> Esta política está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Evoque Assessoria está comprometida em proteger a privacidade e os dados pessoais de seus clientes, visitantes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dados Coletados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coletamos os seguintes tipos de informações:
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.1. Dados Fornecidos Voluntariamente</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Formulários de contato:</strong> Nome, email, telefone, especialidade médica, mensagem</li>
              <li><strong>WhatsApp:</strong> Número de telefone e mensagens trocadas</li>
              <li><strong>Contratação de serviços:</strong> Dados cadastrais, CPF/CNPJ, endereço, dados bancários</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.2. Dados Coletados Automaticamente</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Cookies:</strong> Informações sobre navegação, preferências e sessões</li>
              <li><strong>Dados de acesso:</strong> Endereço IP, navegador, dispositivo, páginas visitadas</li>
              <li><strong>Analytics:</strong> Dados estatísticos sobre uso do site (via Google Analytics ou similar)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Usamos Seus Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Responder suas solicitações de contato e orçamento</li>
              <li>Prestar os serviços contratados (desenvolvimento de sites/landing pages)</li>
              <li>Enviar atualizações sobre o andamento do projeto</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Realizar análises estatísticas e de comportamento</li>
              <li>Cumprir obrigações legais e contratuais</li>
              <li>Enviar comunicações de marketing (apenas com seu consentimento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Legal para Tratamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tratamos seus dados pessoais com base em:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Consentimento:</strong> Quando você voluntariamente fornece seus dados</li>
              <li><strong>Execução de contrato:</strong> Para prestação dos serviços contratados</li>
              <li><strong>Legítimo interesse:</strong> Para análise e melhoria dos nossos serviços</li>
              <li><strong>Obrigação legal:</strong> Para cumprimento de exigências fiscais e legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não vendemos, alugamos ou comercializamos seus dados pessoais. Podemos compartilhar informações apenas com:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Prestadores de serviços:</strong> Hospedagem, ferramentas de analytics, processamento de pagamentos</li>
              <li><strong>Autoridades legais:</strong> Quando exigido por lei ou ordem judicial</li>
              <li><strong>Parceiros técnicos:</strong> Para implementação e manutenção dos projetos</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 mt-4">
              Todos os terceiros são contratualmente obrigados a manter a confidencialidade e segurança dos dados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Manter sua sessão ativa</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o tráfego do site</li>
              <li>Personalizar sua experiência</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 mt-4">
              Você pode gerenciar ou desabilitar cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Segurança dos Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Criptografia SSL/TLS em todas as transmissões</li>
              <li>Acesso restrito aos dados apenas por pessoal autorizado</li>
              <li>Backups regulares e seguros</li>
              <li>Monitoramento contínuo de vulnerabilidades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retenção de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mantemos seus dados pessoais apenas pelo tempo necessário para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Cumprir as finalidades descritas nesta política</li>
              <li>Atender obrigações legais, contábeis ou fiscais</li>
              <li>Exercer direitos em processos judiciais</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 mt-4">
              Após esse período, os dados são excluídos de forma segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Seus Direitos (LGPD)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Confirmação:</strong> Saber se tratamos seus dados</li>
              <li><strong>Acesso:</strong> Solicitar cópia dos seus dados</li>
              <li><strong>Correção:</strong> Atualizar dados incompletos ou incorretos</li>
              <li><strong>Anonimização/Bloqueio:</strong> Solicitar anonimização ou bloqueio</li>
              <li><strong>Eliminação:</strong> Solicitar exclusão de dados desnecessários</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Se opor ao tratamento em certas situações</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 mt-4">
              Para exercer esses direitos, entre em contato através do email: <strong>privacidade@evoque.com.br</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dados Sensíveis de Saúde</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Como trabalhamos com profissionais da saúde, podemos ter acesso a informações sensíveis. Garantimos:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Tratamento especial e cuidadoso de dados de saúde</li>
              <li>Conformidade com normas dos conselhos profissionais</li>
              <li>Não divulgação de informações sigilosas de pacientes</li>
              <li>Orientação sobre boas práticas de privacidade nos sites desenvolvidos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Alterações na Política</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Alterações significativas serão comunicadas através do site e/ou email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contato e DPO</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para questões sobre privacidade e proteção de dados:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li><strong>Email de Privacidade:</strong> privacidade@evoque.com.br</li>
              <li><strong>Email Geral:</strong> contato@evoque.com.br</li>
              <li><strong>WhatsApp:</strong> (11) 99999-9999</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

