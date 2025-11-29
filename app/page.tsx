import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustSection from '@/components/TrustSection'
import Experience from '@/components/Experience'
import ClientsBar from '@/components/ClientsBar'
import Testimonials from '@/components/Testimonials'
import CTAReady from '@/components/CTAReady'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative Networks - Leading Software Development Company in Amman, Jordan',
  description: 'Top-rated software development company and tech agency in Amman, Jordan. Specializing in web development, mobile apps, cloud systems, and ERP solutions. Serving MENA region and worldwide.',
  keywords: 'software development company, tech company Jordan, software house Amman, web development Jordan, mobile app development, cloud systems, ERP development',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <Experience />
      <ClientsBar />
      <Testimonials />
      <CTAReady />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

