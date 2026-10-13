'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { SplineScene } from '@/components/ui/splite'

export default function Hero() {
  const { t } = useLanguage()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = [t('hero.create'), t('hero.build'), t('hero.launch')]

  useEffect(() => {
    const interval = setInterval(() => setCurrentWordIndex((index) => (index + 1) % words.length), 2500)
    return () => clearInterval(interval)
  }, [words.length])

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-surface-950 pt-24 pb-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-accent/15 text-accent text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Built in Amman · Made for the MENA region
          </div>
        </motion.div>

        <div className="text-center mb-4">
          <AnimatePresence mode="wait">
            <motion.h1 key={currentWordIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="text-7xl sm:text-8xl md:text-9xl font-heading font-black tracking-tight leading-[0.9] inline-block text-accent">
              {words[currentWordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="w-full rounded-3xl mt-8 bg-white border border-accent/10 shadow-[0_24px_80px_rgba(18,58,91,0.10)] overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[500px]">
            <div className="p-7 sm:p-10 md:p-14 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/70 mb-4">Creative Networks · Amman, Jordan</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent leading-tight">Digital work, made for this region.</h2>
              <p className="mt-4 text-surface-300 max-w-lg text-base md:text-lg leading-relaxed">{t('hero.subtitle')}</p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <motion.a href="#contact" onClick={(event) => { event.preventDefault(); handleScroll('#contact') }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-7 py-3.5 rounded-full bg-accent text-white font-heading font-bold text-sm cursor-pointer hover:bg-accent-dark transition-colors duration-200 text-center">
                  Start a project
                </motion.a>
                <motion.a href="#portfolio" onClick={(event) => { event.preventDefault(); handleScroll('#portfolio') }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-7 py-3.5 rounded-full bg-surface-950 text-accent font-heading font-medium text-sm cursor-pointer hover:bg-surface-800 transition-colors duration-200 text-center">
                  View our work →
                </motion.a>
              </div>

              <div className="flex items-center gap-6 sm:gap-8 mt-10 pt-6 border-t border-accent/10">
                {[
                  { value: '7+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '30+', label: 'Clients' },
                ].map((stat) => <div key={stat.label}><p className="text-2xl font-heading font-black text-accent">{stat.value}</p><p className="text-xs text-surface-300 uppercase tracking-wider">{stat.label}</p></div>)}
              </div>
            </div>

            <div className="relative min-h-[340px] md:min-h-0 overflow-hidden bg-[#e6edf2] border-t md:border-t-0 md:border-l border-accent/10">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(215,224,231,0.24)_55%,rgba(18,58,91,0.05))]" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="brand-scene relative z-[1] h-[340px] w-full md:h-full md:min-h-[500px]"
              />
              <div className="absolute bottom-5 left-5 z-[2] rounded-xl border border-white/80 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Built in Amman</p>
                <p className="mt-0.5 text-xs text-surface-300">Made for the MENA region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
