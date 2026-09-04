'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      category: t('services.websiteDesign'),
      title: t('services.websiteTitle'),
      description: t('services.websiteDesc'),
      tech: ['React', 'Next.js', 'Node.js', 'WordPress', 'TypeScript'],
      image: '/services/website.jpg',
      accent: 'from-accent/20 to-cyan/10',
      badge: 'bg-accent/10 text-accent-light border-accent/20',
    },
    {
      category: t('services.mobileCategory'),
      title: t('services.mobileTitle'),
      description: t('services.mobileDesc'),
      tech: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
      image: '/services/mobile.png',
      accent: 'from-cyan/20 to-accent/10',
      badge: 'bg-cyan/10 text-cyan border-cyan/20',
    },
    {
      category: t('services.saasCategory'),
      title: t('services.saasTitle'),
      description: t('services.saasDesc'),
      tech: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS'],
      image: '/services/erp.png',
      accent: 'from-emerald/20 to-accent/10',
      badge: 'bg-emerald/10 text-emerald border-emerald/20',
    },
  ]

  return (
    <section id="services" className="py-28 sm:py-36 bg-surface-950 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

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
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${service.accent}`}>
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent" />
              </div>

              {/* Body */}
              <div className="p-7">
                <span className={`inline-block text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full border ${service.badge} mb-4`}>
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
