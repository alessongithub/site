'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  label: string
  delay?: number
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const digitRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            setTimeout(() => {
              animateCounter()
            }, delay)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [isVisible, delay])

  const animateCounter = () => {
    setIsAnimating(true)
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutCubic)

      setCount(currentValue)

      // Animar cada dígito individualmente
      const currentDigits = currentValue.toString().split('').map(Number)
      digitRefs.current.forEach((ref, index) => {
        if (ref) {
          const digitIndex = currentDigits.length - endDigits.length + index
          const digitValue = digitIndex >= 0 ? currentDigits[digitIndex] : 0
          animateDigit(ref, digitValue, progress)
        }
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsAnimating(false)
        // Explosão de partículas ao finalizar
        createParticleExplosion()
      }
    }

    animate()
  }

  const animateDigit = (element: HTMLSpanElement, targetDigit: number, progress: number) => {
    // Efeito de slot machine - números rolando
    const currentDigit = parseInt(element.textContent || '0')
    if (currentDigit !== targetDigit) {
      // Efeito de rolagem
      element.style.transform = `translateY(-20px) scale(0.8)`
      element.style.opacity = '0.3'
      
      setTimeout(() => {
        element.textContent = targetDigit.toString()
        element.style.transform = `translateY(0) scale(1)`
        element.style.opacity = '1'
      }, 50)
    }

    // Efeito de brilho pulsante durante animação
    if (progress < 1) {
      const glowIntensity = Math.sin(progress * Math.PI * 10) * 0.5 + 0.5
      element.style.textShadow = `
        0 0 ${10 + glowIntensity * 20}px rgba(59, 130, 246, ${0.5 + glowIntensity * 0.3}),
        0 0 ${20 + glowIntensity * 30}px rgba(249, 115, 22, ${0.3 + glowIntensity * 0.2})
      `
    } else {
      element.style.textShadow = `
        0 0 15px rgba(59, 130, 246, 0.6),
        0 0 25px rgba(249, 115, 22, 0.4)
      `
    }
  }

  const createParticleExplosion = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Criar partículas
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-2 h-2 rounded-full pointer-events-none'
      particle.style.left = `${centerX}px`
      particle.style.top = `${centerY}px`
      particle.style.background = i % 2 === 0 
        ? 'rgba(59, 130, 246, 0.8)' 
        : 'rgba(249, 115, 22, 0.8)'
      particle.style.boxShadow = `0 0 10px ${i % 2 === 0 ? 'rgba(59, 130, 246, 1)' : 'rgba(249, 115, 22, 1)'}`
      
      document.body.appendChild(particle)

      const angle = (Math.PI * 2 * i) / 20
      const velocity = 100 + Math.random() * 50
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity

      let x = centerX
      let y = centerY
      let opacity = 1
      let scale = 1

      const animateParticle = () => {
        x += vx * 0.1
        y += vy * 0.1 + 2 // Gravidade
        opacity -= 0.02
        scale -= 0.01

        particle.style.left = `${x}px`
        particle.style.top = `${y}px`
        particle.style.opacity = opacity.toString()
        particle.style.transform = `scale(${scale})`

        if (opacity > 0) {
          requestAnimationFrame(animateParticle)
        } else {
          particle.remove()
        }
      }

      requestAnimationFrame(animateParticle)
    }
  }

  // Converter número em array de dígitos
  const digits = count.toString().split('').map(Number)
  const endDigits = end.toString().split('').map(Number)

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center p-6"
    >
      {/* Efeito de brilho de fundo */}
      <div
        className={`absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-1000 ${
          isAnimating ? 'opacity-100' : 'opacity-50'
        }`}
        style={{
          background: `radial-gradient(circle, 
            rgba(59, 130, 246, ${isAnimating ? 0.4 : 0.2}) 0%, 
            rgba(249, 115, 22, ${isAnimating ? 0.3 : 0.15}) 50%, 
            transparent 100%)`,
        }}
      />

      {/* Container do número com efeito 3D */}
      <div className="relative z-10">
        <div className="flex items-baseline justify-center gap-1">
          {prefix && (
            <span className="text-2xl sm:text-3xl font-bold text-gray-700">{prefix}</span>
          )}
          
          {/* Dígitos individuais com animação */}
          <div className="flex items-baseline">
            {endDigits.map((_, index) => {
              const digitIndex = digits.length - endDigits.length + index
              const digit = digitIndex >= 0 ? digits[digitIndex] : 0
              
              return (
                <span
                  key={index}
                  ref={(el) => {
                    digitRefs.current[index] = el
                  }}
                  className="inline-block text-5xl sm:text-6xl md:text-7xl font-black transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(59, 130, 246, 1) 0%, 
                      rgba(249, 115, 22, 1) 50%, 
                      rgba(59, 130, 246, 1) 100%)`,
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: isAnimating 
                      ? 'gradient-shift 2s ease-in-out infinite' 
                      : 'none',
                    transform: 'perspective(1000px) rotateX(0deg)',
                    textShadow: `
                      0 0 15px rgba(59, 130, 246, 0.6),
                      0 0 25px rgba(249, 115, 22, 0.4),
                      0 4px 8px rgba(0, 0, 0, 0.2)
                    `,
                  }}
                >
                  {digit}
                </span>
              )
            })}
          </div>

          {suffix && (
            <span className="text-2xl sm:text-3xl font-bold text-gray-700">{suffix}</span>
          )}
        </div>

        {/* Label */}
        <p className="mt-3 text-sm sm:text-base font-semibold text-gray-600 text-center">
          {label}
        </p>
      </div>

      {/* Efeito de ondas */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-ripple"
              style={{
                animationDelay: `${i * 0.3}s`,
                transform: 'scale(0.8)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

