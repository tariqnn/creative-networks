'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Non-JSON response:', text)
        throw new Error('Server returned an invalid response')
      }

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: language === 'ar' 
            ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' 
            : 'Your message has been sent successfully! We will get back to you soon.',
        })
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || (language === 'ar' 
            ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' 
            : 'Failed to send message. Please try again.'),
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: language === 'ar' 
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' 
          : 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-bg-main relative overflow-hidden">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-primary/15 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent-secondary/15 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <div className="inline-flex flex-col items-center mb-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.35em] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent uppercase mb-2">
              {t('contact.getInTouch')}
            </p>
            <div className="h-px w-full bg-accent-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-text-secondary font-body">
            {t('contact.subtitle')}
          </p>
        </Reveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side - Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-bg-dark/80 to-bg-main/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full flex flex-col justify-center">
              <h3 className="text-text-primary font-heading font-semibold mb-6 text-lg">
                {t('contact.followUs')}
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://www.linkedin.com/company/creative-networks-services/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-primary/50 flex items-center justify-center transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="font-body">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/creative_network20?igsh=aTRoeHZlejFpZXZ2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-primary/50 flex items-center justify-center transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </div>
                  <span className="font-body">Instagram</span>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/18HhGpXZAY/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-primary/50 flex items-center justify-center transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-body">Facebook</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-bg-dark/80 to-bg-main/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 sm:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                {t('contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                placeholder={t('contact.phonePlaceholder')}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            {/* Message Field (Optional) */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                {language === 'ar' ? 'الرسالة (اختياري)' : 'Message (Optional)'}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 resize-none"
                placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
              />
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
              >
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full px-8 py-4 rounded-full text-white font-heading font-semibold text-lg transition-all duration-300 ${
                isSubmitting
                  ? 'bg-accent-primary/50 cursor-not-allowed'
                  : 'bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/50'
              }`}
            >
              {isSubmitting
                ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                : t('contact.sendMessage')}
            </motion.button>
          </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

