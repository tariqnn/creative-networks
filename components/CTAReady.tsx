'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'
import { ShaderAnimation } from '@/components/ui/shader-animation'

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
    <section className="relative py-28 sm:py-36 overflow-hidden bg-surface-950">
      {/* Shader as full background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <ShaderAnimation className="w-full h-full" />
      </div>

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-surface-950/60 via-surface-950/30 to-surface-950/60" />

      {/* Edge fades */}
      <div className="absolute top-0 left-0 right-0 h-24 z-[2] bg-gradient-to-b from-surface-950 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[2] bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-6">
            {t('cta.label')}
          </p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-heading font-black text-surface-50 leading-none mb-10">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full bg-accent text-white font-heading font-bold text-lg cursor-pointer transition-colors duration-200 hover:bg-accent-dark"
            >
              {t('cta.button')}
            </motion.a>
            <motion.a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full glass text-surface-300 font-heading font-medium text-lg cursor-pointer hover:text-surface-50 transition-colors duration-200"
            >
              See our work
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
