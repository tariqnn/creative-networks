'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#trust' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isLangMenuOpen && !target.closest('.language-selector')) {
        setIsLangMenuOpen(false)
      }
    }
    if (isLangMenuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLangMenuOpen])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`liquid-nav fixed left-3 right-3 top-3 z-[9999] rounded-full transition-shadow duration-300 sm:left-5 sm:right-5 sm:top-4 ${
          isScrolled ? 'shadow-[0_12px_42px_rgba(11,11,11,.14)]' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[62px] items-center justify-between sm:h-[70px]">
            <motion.a href="#home" whileHover={{ opacity: .82 }} transition={{ duration: .2 }} className="flex flex-shrink-0 items-center gap-2.5" aria-label="Creative Networks home">
              <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-white sm:h-11 sm:w-11">
                <Image src="/logo/creative-networks-mark-black.jpg" alt="" fill sizes="44px" className="object-cover" priority />
              </span>
              <span className="whitespace-nowrap font-heading text-[13px] font-black leading-[.95] tracking-[-.035em] text-accent sm:text-base">CREATIVE NETWORKS</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                className="relative rounded-full px-4 py-2 text-sm font-semibold text-surface-300 transition-colors duration-200 hover:bg-white/70 hover:text-accent cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA & Language */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative language-selector">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-surface-300 transition-all duration-200 hover:bg-white/70 hover:text-accent"
                >
                  {language === 'en' ? 'EN' : 'AR'}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-32 glass-strong rounded-xl overflow-hidden shadow-2xl z-50"
                    >
                      <button
                        onClick={() => { setLanguage('en'); setIsLangMenuOpen(false) }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 cursor-pointer ${
                          language === 'en' ? 'bg-accent/10 text-accent-light' : 'text-surface-400 hover:bg-white/[0.04] hover:text-surface-50'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => { setLanguage('ar'); setIsLangMenuOpen(false) }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 cursor-pointer ${
                          language === 'ar' ? 'bg-accent/10 text-accent-light' : 'text-surface-400 hover:bg-white/[0.04] hover:text-surface-50'
                        }`}
                      >
                        العربية
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-accent shadow-[0_4px_16px_rgba(198,255,0,.25)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t('nav.getInTouch')}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[10000] cursor-pointer rounded-full p-2 text-accent transition-colors hover:bg-white/70 md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 origin-center rounded-full bg-accent"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block h-0.5 w-6 rounded-full bg-accent"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 origin-center rounded-full bg-accent"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-20 bottom-0 bg-surface-950/95 backdrop-blur-2xl z-[9998] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-20 bottom-0 z-[9998] md:hidden flex flex-col items-center justify-center px-6"
            >
              <div className="w-full max-w-sm space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                    className="block text-4xl font-heading font-bold text-surface-50 hover:text-accent-light transition-colors duration-200 py-3 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="absolute bottom-12 w-full max-w-sm px-6 space-y-3"
              >
                <div className="relative w-full language-selector">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="w-full px-6 py-3 rounded-xl glass text-surface-400 hover:text-surface-50 transition-all duration-200 text-base font-medium flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {language === 'en' ? 'English' : 'العربية'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-0 right-0 mb-2 glass-strong rounded-xl overflow-hidden shadow-2xl z-50"
                      >
                        <button
                          onClick={() => { setLanguage('en'); setIsLangMenuOpen(false) }}
                          className={`w-full px-4 py-3 text-left text-base transition-colors duration-200 cursor-pointer ${
                            language === 'en' ? 'bg-accent/10 text-accent-light' : 'text-surface-400 hover:bg-white/[0.04]'
                          }`}
                        >
                          English
                        </button>
                        <button
                          onClick={() => { setLanguage('ar'); setIsLangMenuOpen(false) }}
                          className={`w-full px-4 py-3 text-left text-base transition-colors duration-200 cursor-pointer ${
                            language === 'ar' ? 'bg-accent/10 text-accent-light' : 'text-surface-400 hover:bg-white/[0.04]'
                          }`}
                        >
                          العربية
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <motion.a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="block w-full rounded-full bg-lime px-6 py-3 text-center text-base font-bold text-accent transition-colors duration-200 hover:bg-lime-light"
                >
                  {t('nav.getInTouch')}
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
