'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'

export default function Hero() {
  const { t } = useLanguage()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const words = [t('hero.create'), t('hero.build'), t('hero.launch')]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-950 pt-24 pb-16"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/[0.08] rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan/[0.06] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-accent-light text-xs font-semibold uppercase tracking-wider w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t('hero.tagline')}
          </div>
        </motion.div>

        {/* Rotating gradient word */}
        <div className="text-center mb-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-heading font-black tracking-tight leading-[0.9] inline-block"
              style={{
                background: 'linear-gradient(to right, #818CF8, #22D3EE, #34D399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {words[currentWordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Interactive 3D card — per integration prompt */}
        <Card className="w-full h-[500px] md:h-[560px] bg-black/[0.96] relative overflow-hidden border-white/10 rounded-2xl mt-6">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Interactive 3D
              </h2>
              <p className="mt-4 text-neutral-300 max-w-lg text-base md:text-lg leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleScroll('#contact')
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-full bg-accent text-white font-heading font-bold text-sm cursor-pointer hover:bg-accent-dark transition-colors duration-200 text-center"
                >
                  Start a project
                </motion.a>
                <motion.a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault()
                    handleScroll('#portfolio')
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-full glass text-surface-300 font-heading font-medium text-sm cursor-pointer hover:text-surface-50 transition-colors duration-200 text-center"
                >
                  View our work →
                </motion.a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-10 pt-6 border-t border-white/[0.08]">
                {[
                  { value: '5+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '30+', label: 'Clients' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-heading font-black text-surface-50">{stat.value}</p>
                    <p className="text-xs text-surface-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 3D scene */}
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />
    </section>
  )
}
