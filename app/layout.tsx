import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Evoque Assessoria - Landing Pages para Clínicas e Consultórios | Mais Pacientes Qualificados',
  description: 'Especialistas em landing pages para o setor de saúde. Transformamos visitantes em agendamentos. Clínicas, dentistas e profissionais da saúde aumentam em 15-30 pacientes/mês. Consultoria gratuita.',
  keywords: 'landing page para clínicas, landing page para dentistas, marketing médico, captação de pacientes, sites para consultórios, marketing para saúde, agendamento online',
  authors: [{ name: 'Evoque Assessoria' }],
  openGraph: {
    title: 'Evoque Assessoria - Sites e Landing Pages que Geram Leads Reais',
    description: 'Criamos sites profissionais e landing pages de alta conversão para sua empresa.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo/tiger.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

