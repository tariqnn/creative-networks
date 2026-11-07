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
    <section className="relative overflow-hidden bg-lime py-24 text-accent sm:py-32">
      <div aria-hidden="true" className="absolute -right-14 -top-20 h-72 w-72 rounded-full border-[1px] border-black/10 sm:h-96 sm:w-96" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-12 h-60 w-60 rounded-full border-[1px] border-black/10 sm:h-80 sm:w-80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-accent/65">
            {t('cta.label')}
          </p>
          <h2 className="mb-10 text-6xl font-heading font-black leading-[.92] tracking-[-.06em] text-accent sm:text-7xl md:text-8xl lg:text-[7rem]">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 44px rgba(11,11,11,0.18)' }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-full bg-accent px-10 py-4 text-lg font-heading font-bold text-white transition-colors duration-200 hover:bg-[#292925]"
            >
              {t('cta.button')}
            </motion.a>
            <motion.a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-full border border-accent/20 bg-white/35 px-10 py-4 text-lg font-heading font-semibold text-accent transition-colors duration-200 hover:bg-white/75"
            >
              See our work
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
