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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isLangMenuOpen && !target.closest('.language-selector')) {
        setIsLangMenuOpen(false)
      }
    }

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangMenuOpen])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_2px_18px_rgba(0,0,0,0.45)]'
            : 'bg-transparent backdrop-blur-xl border-b border-white/10'
        }`}
      >
        {/* Glossy gradient overlay on scroll */}
        {isScrolled && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(2, 6, 23, 0.65))',
            }}
          />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[70px] sm:h-[60px]">
            {/* Logo */}
            <motion.div
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="h-[72px] md:h-[72px] sm:h-[82px] flex items-center">
                <Image
                  src="/logo/no-background.png"
                  alt="Creative Networks"
                  width={284}
                  height={73}
                  className="h-[72px] md:h-[72px] sm:h-[82px] w-auto"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative text-sm font-medium uppercase tracking-wide text-white/80 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-primary transform scale-x-0 opacity-70 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 origin-center" />
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 text-accent-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 pointer-events-none">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA & Language */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 rounded-full border border-accent-primary text-accent-primary hover:shadow-[0_0_20px_rgba(0,168,232,0.5)] transition-all duration-300 text-sm font-medium cursor-pointer"
              >
                {t('nav.getInTouch')}
              </motion.a>
              <div className="relative language-selector">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center gap-1 cursor-pointer"
                >
                  {language === 'en' ? 'EN' : 'AR'} <span className="text-xs">▾</span>
                </button>
                
                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden shadow-2xl z-50"
                    >
                      <button
                        onClick={() => {
                          setLanguage('en')
                          setIsLangMenuOpen(false)
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                          language === 'en'
                            ? 'bg-white/10 text-white'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('ar')
                          setIsLangMenuOpen(false)
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                          language === 'ar'
                            ? 'bg-white/10 text-white'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        العربية
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 relative z-[10000]"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 bg-white transition-all duration-300"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-6 bg-white transition-all duration-300"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 bg-white transition-all duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gradient-to-b from-bg-main to-[#15002A] z-[9998] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[9999] md:hidden flex flex-col items-center justify-center px-6 pointer-events-none"
            >
                        <div className="w-full max-w-md space-y-8">
                          {navLinks.map((link, index) => (
                            <motion.a
                              key={link.name}
                              href={link.href}
                              onClick={(e) => handleSmoothScroll(e, link.href)}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className="block text-3xl font-heading font-bold text-white/90 hover:text-white transition-colors duration-200 text-center cursor-pointer"
                            >
                              {link.name}
                            </motion.a>
                          ))}
                        </div>

              {/* Mobile Footer Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute bottom-12 w-full max-w-md px-6 space-y-4 pointer-events-auto"
              >
                <div className="relative w-full language-selector">
                  <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="w-full px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 text-base font-medium flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {language === 'en' ? 'EN' : 'AR'} <span className="text-xs">▾</span>
                  </button>
                  
                  {/* Mobile Language Dropdown */}
                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 w-full bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden shadow-2xl z-50"
                      >
                        <button
                          onClick={() => {
                            setLanguage('en')
                            setIsLangMenuOpen(false)
                          }}
                          className={`w-full px-4 py-3 text-left text-base transition-colors duration-200 ${
                            language === 'en'
                              ? 'bg-white/10 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          English
                        </button>
                        <button
                          onClick={() => {
                            setLanguage('ar')
                            setIsLangMenuOpen(false)
                          }}
                          className={`w-full px-4 py-3 text-left text-base transition-colors duration-200 ${
                            language === 'ar'
                              ? 'bg-white/10 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
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
                  className="block w-full px-6 py-3 rounded-full border border-accent-primary text-accent-primary hover:shadow-[0_0_20px_rgba(0,168,232,0.5)] transition-all duration-300 text-base font-medium text-center cursor-pointer"
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
