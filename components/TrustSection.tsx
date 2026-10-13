'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TrustSection() {
  const { t } = useLanguage()

  const values = [
    {
      number: '01',
      title: t('trust.direction'),
      description: t('trust.directionDesc'),
      color: 'text-accent',
    },
    {
      number: '02',
      title: t('trust.speed'),
      description: t('trust.speedDesc'),
      color: 'text-cyan',
    },
    {
      number: '03',
      title: t('trust.craft'),
      description: t('trust.craftDesc'),
      color: 'text-emerald',
    },
  ]

  return (
    <section id="trust" className="py-28 sm:py-36 bg-surface-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent/[0.10] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent/[0.10] to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big word + paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal>
            <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-heading font-black text-surface-50 uppercase tracking-tight leading-none">
              {t('trust.title')}
              <span className="inline-block w-3 h-3 rounded-full bg-accent ml-2 align-middle" />
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-5">
            <p className="text-lg text-surface-300 leading-relaxed">
              {t('trust.para1')}
            </p>
            <p className="text-lg text-surface-400 leading-relaxed">
              {t('trust.para2')}
            </p>
          </Reveal>
        </div>

        {/* Three values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-800 rounded-2xl overflow-hidden">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-900 p-8 lg:p-10 hover:bg-surface-800/60 transition-colors duration-300"
            >
              <p className={`text-4xl font-heading font-black ${value.color} mb-4 opacity-40`}>
                {value.number}
              </p>
              <h3 className="text-xl font-heading font-bold text-surface-50 mb-3">
                {value.title}
              </h3>
              <p className="text-surface-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
