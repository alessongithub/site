'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Mostra o banner após 1 segundo
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6 md:flex items-center justify-between gap-6">
          {/* Ícone e Texto */}
          <div className="flex items-start gap-4 mb-4 md:mb-0 flex-1">
            <div className="flex-shrink-0 text-3xl">
              🍪
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Nós Utilizamos Cookies
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. 
                Ao continuar navegando, você concorda com nossa{' '}
                <Link href="/politica-privacidade" className="text-primary-600 hover:underline font-semibold">
                  Política de Privacidade
                </Link>
                {' '}e{' '}
                <Link href="/termos-uso" className="text-primary-600 hover:underline font-semibold">
                  Termos de Uso
                </Link>.
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={acceptCookies}
              className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Aceitar Cookies
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-600 hover:text-gray-900 px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 font-semibold transition-colors"
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

