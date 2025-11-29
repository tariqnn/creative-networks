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
      categorySize: 'text-[12px]',
    },
    {
      category: t('services.mobileCategory'),
      title: t('services.mobileTitle'),
      description: t('services.mobileDesc'),
      tech: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
      image: '/services/mobile.png',
      categorySize: 'text-[12px]',
    },
    {
      category: t('services.saasCategory'),
      title: t('services.saasTitle'),
      description: t('services.saasDesc'),
      tech: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS'],
      image: '/services/erp.png',
      categorySize: 'text-[12px]',
    },
  ]
  return (
    <section id="services" className="py-24 sm:py-32 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-16">
          {/* Label */}
          <div className="inline-flex flex-col items-center mb-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.35em] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent uppercase mb-2">
              {t('services.whatWeDo')}
            </p>
            <div className="h-px w-full bg-accent-primary" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-dark mb-4 leading-tight">
            {t('services.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </Reveal>

        {/* Service Cards */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.01, 
                boxShadow: '0 24px 60px rgba(15,23,42,0.18)',
                transition: { type: 'spring', stiffness: 260, damping: 20 }
              }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl hover:border-accent-primary/10 border border-transparent transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-200 to-slate-300">
                {/* Background gradient placeholder - matches service type (fallback) */}
                <div
                  className={`absolute inset-0 z-0 ${
                    index === 0
                      ? 'bg-gradient-to-br from-accent-primary/30 via-accent-secondary/20 to-slate-900/40'
                      : index === 1
                        ? 'bg-gradient-to-br from-accent-primary/25 via-accent-secondary/25 to-purple-500/30'
                        : 'bg-gradient-to-br from-slate-700/40 via-accent-primary/20 to-slate-900/50'
                  }`}
                />
                
                {/* Image with parallax effect */}
                <motion.div 
                  className="absolute inset-0 z-10"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-slate-900/0 group-hover:from-slate-950/10 transition-all duration-300 z-20" />
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-8">
                {/* Category Label */}
                <p className={`${service.categorySize || 'text-[11px]'} font-semibold tracking-[0.2em] text-accent-primary uppercase mb-2`}>
                  {service.category}
                </p>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-text-dark mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 hover:border-accent-primary/30 hover:text-accent-primary transition-colors duration-200"
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
