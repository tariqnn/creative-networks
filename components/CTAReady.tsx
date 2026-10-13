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
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-accent text-white">

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-surface-700 mb-6">
            {t('cta.label')}
          </p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-heading font-black text-white leading-none mb-10">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(220,228,234,0.24)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full bg-cyan-light text-accent font-heading font-bold text-lg cursor-pointer transition-colors duration-200 hover:bg-white"
            >
              {t('cta.button')}
            </motion.a>
            <motion.a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full border border-white/30 bg-white/5 text-white font-heading font-medium text-lg cursor-pointer hover:bg-white/10 transition-colors duration-200"
            >
              See our work
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
