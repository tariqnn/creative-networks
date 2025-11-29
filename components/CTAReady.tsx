'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTAReady() {
  const { t } = useLanguage()
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-wider text-accent-primary font-semibold">
              {t('cta.label')}
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-success bg-clip-text text-transparent">
              {t('cta.title')}
            </h2>
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              whileHover={{ scale: 1.04, boxShadow: '0 18px 45px rgba(0,0,0,0.35)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-block px-8 py-4 rounded-full bg-text-dark text-white font-heading font-semibold text-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 cursor-pointer"
            >
              {t('cta.button')}
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

