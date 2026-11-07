'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Systems', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#trust' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0B0B0B] text-white">
      <div className="absolute left-1/2 top-0 h-px w-[min(600px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image src="/logo/creative-networks-mark-white.jpg" alt="" fill sizes="48px" className="object-cover" />
              </span>
              <span className="font-heading text-sm font-black uppercase tracking-[-.02em] text-white">Creative Networks</span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              Creative Networks is a leading software development agency serving the MENA region and beyond. We build high-performance digital products that drive business growth.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@creativnetworks.com" className="flex cursor-pointer items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-lime">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@creativnetworks.com
              </a>
              <a href="tel:+962795550073" className="flex cursor-pointer items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-lime">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +962 795 550 073
              </a>
              <span className="flex items-center gap-2 text-sm text-white/50">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Amman, Jordan
              </span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="cursor-pointer text-sm text-white/55 transition-colors duration-200 hover:text-lime"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="cursor-pointer text-sm text-white/55 transition-colors duration-200 hover:text-lime"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            &copy; {currentYear} Creative Networks. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            <span className="text-xs text-white/55">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
