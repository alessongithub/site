'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-500/10' 
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo com efeito hover */}
          <Link href="/" className="flex items-center group" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
            <div className="relative" style={{ height: '50px', width: 'auto' }}>
              <Image
                src="/logo/logo.png"
                alt="Evoque Assessoria"
                width={160}
                height={50}
                className="!h-[50px] !w-auto !max-w-[160px] transition-transform duration-300 group-hover:scale-105 object-contain"
                style={{ maxHeight: '50px', width: 'auto' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 mr-8">
            <Link 
              href="#solucao" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Soluções
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#diferenciais" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Diferenciais
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#contato" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* CTA Button Melhorado */}
          <a
            href="#contato"
            className="relative group overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Solicitar Orçamento
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </header>
  )
}

