import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import TechnologySection from '@/components/TechnologySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProcessSection from '@/components/ProcessSection'
import DifferentialsSection from '@/components/DifferentialsSection'
import InvestmentSection from '@/components/InvestmentSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <TestimonialsSection />
      <ProcessSection />
      <DifferentialsSection />
      <InvestmentSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </main>
  )
}

