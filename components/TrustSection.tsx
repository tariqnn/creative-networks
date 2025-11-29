'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TrustSection() {
  const { t } = useLanguage()
  
  const values = [
    {
      icon: '→',
      title: t('trust.direction'),
      description: t('trust.directionDesc'),
    },
    {
      icon: '⚡',
      title: t('trust.speed'),
      description: t('trust.speedDesc'),
    },
    {
      icon: '✨',
      title: t('trust.craft'),
      description: t('trust.craftDesc'),
    },
  ]
  return (
    <section id="trust" className="py-24 sm:py-32 bg-bg-main relative overflow-hidden">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-primary/15 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent-secondary/15 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Big Word */}
          <Reveal className="lg:pr-8">
            <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-heading font-bold text-text-primary uppercase tracking-tight leading-none">
              {t('trust.title')}
              <span className="inline-block w-4 h-4 bg-accent-success rounded-full ml-4 align-middle" />
            </h2>
          </Reveal>

          {/* Right: Philosophy */}
          <Reveal delay={0.2} className="space-y-6">
            <p className="text-lg sm:text-xl text-text-secondary font-body leading-relaxed">
              {t('trust.para1')}
            </p>
            <p className="text-lg sm:text-xl text-text-secondary font-body leading-relaxed">
              {t('trust.para2')}
            </p>
          </Reveal>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary font-body leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

