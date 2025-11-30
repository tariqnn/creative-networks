'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const words = [t('hero.create'), t('hero.build'), t('hero.launch')]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Static Background - Simple gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-bg-dark via-bg-main to-bg-dark">
        <div className="absolute inset-0 bg-bg-main/80 z-[1]" />
      </div>

      {/* Animated gradient blobs overlay */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-hero-gradient" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-primary/15 rounded-full blur-3xl animate-hero-gradient" 
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent-secondary/15 rounded-full blur-3xl animate-hero-gradient" 
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentWordIndex}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-text-primary mb-8 tracking-tight"
            style={{
              textShadow: '0 0 40px rgba(0, 168, 232, 0.3), 0 0 80px rgba(0, 168, 232, 0.2)',
            }}
          >
            {words[currentWordIndex]}
          </motion.h1>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-body">
            {t('hero.tagline')}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary/80 font-body">
            {t('hero.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

