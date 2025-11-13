import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <Image
              src="/logo/logo.png"
              alt="Evoque Assessoria"
              width={150}
              height={50}
              className="h-auto w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400">
              Criando sites e landing pages que transformam visitantes em clientes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#solucao" className="hover:text-white transition-colors">
                  Nossa Solução
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5511947146126?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20criação%20de%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="#contato-form" className="hover:text-white transition-colors">
                  contato@evoqueassessoria.com.br
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Evoque Assessoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

