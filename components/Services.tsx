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
      image: '/photography/story-design.jpg',
      imageAlt: t('services.webImageAlt'),
    },
    {
      category: t('services.mobileCategory'),
      title: t('services.mobileTitle'),
      description: t('services.mobileDesc'),
      tech: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
      image: '/photography/service-mobile.jpg',
      imageAlt: t('services.mobileImageAlt'),
    },
    {
      category: t('services.saasCategory'),
      title: t('services.saasTitle'),
      description: t('services.saasDesc'),
      tech: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS'],
      image: '/photography/service-systems.jpg',
      imageAlt: t('services.systemsImageAlt'),
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden bg-[#f6f9fa] py-24 text-[#183b57] sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#52718a]">
            {t('services.whatWeDo')}
          </p>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-[#183b57] sm:text-5xl md:text-6xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#5d7483]">
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
              className="group cursor-default overflow-hidden rounded-2xl border border-[#dce5e8] bg-white shadow-[0_18px_50px_-38px_rgba(24,59,87,.38)]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden sm:h-64">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>

              {/* Body */}
              <div className="p-7">
                <span className="mb-4 inline-block rounded-full bg-[#edf4e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#496c34]">
                  {service.category}
                </span>
                <h3 className="mb-3 font-heading text-xl font-bold leading-tight text-[#183b57]">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#5d7483]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#e2e9eb] bg-[#f7f9fa] px-2.5 py-1 text-[11px] font-medium text-[#667e8c]"
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
