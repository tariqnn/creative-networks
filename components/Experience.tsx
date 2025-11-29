'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-text-dark">
              {t('experience.title')}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-text-dark/70 font-body">
              {t('experience.subtitle')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

