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
  title: 'Creative Networks — Digital Studio in Amman, Jordan',
  description: 'Built in Amman and made for the MENA region. Creative Networks designs and builds websites, mobile apps, and digital platforms for ambitious teams.',
  keywords: 'software development company, tech company Jordan, software house Amman, web development Jordan, mobile app development, cloud systems, ERP development',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientsBar />
      <Services />
      <Portfolio />
      <Experience />
      <TrustSection />
      <Testimonials />
      <CTAReady />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

