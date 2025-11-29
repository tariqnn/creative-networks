'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

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
}

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Systems', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

const contactInfo = {
  email: 'info@creativenetworkservices.com',
  phone: '+962795550073',
  address: 'Amman, Jordan',
}

export default function Footer() {
  return (
    <footer className="bg-bg-main border-t border-white/10 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-10 flex items-center mb-4">
              <Image
                src="/logo/no-background.png"
                alt="Creative Networks"
                width={140}
                height={36}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-text-secondary font-body text-sm leading-relaxed mb-6 max-w-md">
              Creative Networks is a leading software development agency serving the MENA region
              and beyond. We build high-performance digital products that drive business growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
              >
                <span className="text-accent-primary">✉</span>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
              >
                <span className="text-accent-primary">📞</span>
                {contactInfo.phone}
              </a>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <span className="text-accent-primary">📍</span>
                {contactInfo.address}
              </div>
            </div>

          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-text-primary font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm font-body cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-text-primary font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm font-body cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm font-body">
              © {currentYear} Creative Networks. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm font-body"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
