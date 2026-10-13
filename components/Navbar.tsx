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
        className={`fixed top-4 left-4 right-4 z-[9999] rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border border-accent/[0.10] shadow-[0_8px_32px_rgba(18,58,91,0.10)]'
            : 'bg-white/85 backdrop-blur-md border border-accent/[0.07]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ opacity: 0.8 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
              <Image
                src="/logo/creative-networks.png"
                alt="Creative Networks"
                width={217}
                height={73}
                className="h-12 w-auto sm:h-14"
              />
            </motion.div>

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
                  className="relative px-4 py-2 text-sm font-medium text-surface-200 hover:text-accent transition-colors duration-200 cursor-pointer rounded-lg hover:bg-accent/[0.05]"
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
                  className="px-3 py-1.5 rounded-lg text-surface-200 hover:text-accent hover:bg-accent/[0.05] transition-all duration-200 text-sm font-medium flex items-center gap-1 cursor-pointer"
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
                className="px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors duration-200 cursor-pointer"
              >
                {t('nav.getInTouch')}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-surface-50 p-2 relative z-[10000] cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 bg-surface-50 rounded-full origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block h-0.5 w-6 bg-surface-50 rounded-full"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 bg-surface-50 rounded-full origin-center"
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
              className="fixed inset-0 bg-surface-950/95 backdrop-blur-2xl z-[9998] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] md:hidden flex flex-col items-center justify-center px-6"
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
                  className="block w-full px-6 py-3 rounded-full bg-accent text-white text-base font-semibold text-center cursor-pointer hover:bg-accent-dark transition-colors duration-200"
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
