'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'
import ProductVisual from '@/components/ProductVisual'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      category: t('services.websiteDesign'),
      title: t('services.websiteTitle'),
      description: t('services.websiteDesc'),
      tech: ['React', 'Next.js', 'Node.js', 'WordPress', 'TypeScript'],
      visual: 'web' as const,
    },
    {
      category: t('services.mobileCategory'),
      title: t('services.mobileTitle'),
      description: t('services.mobileDesc'),
      tech: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
      visual: 'mobile' as const,
    },
    {
      category: t('services.saasCategory'),
      title: t('services.saasTitle'),
      description: t('services.saasDesc'),
      tech: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS'],
      visual: 'systems' as const,
    },
  ]

  return (
    <section id="services" className="py-28 sm:py-36 bg-surface-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-20">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">
            {t('services.whatWeDo')}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-surface-50 leading-tight max-w-2xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg text-surface-400 max-w-xl leading-relaxed">
            {t('services.subtitle')}
          </p>
        </Reveal>

        {/* Service Cards */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="glass rounded-2xl overflow-hidden group cursor-default"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden sm:h-64">
                <ProductVisual kind={service.visual} compact />
              </div>

              {/* Body */}
              <div className="p-7">
                <span className="mb-4 inline-block rounded-full border border-accent/10 bg-lime/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {service.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-surface-50 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-surface-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface-800 text-surface-400 border border-surface-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
