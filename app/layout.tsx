import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import StructuredData from '@/components/SEO/StructuredData'
import ChunkErrorHandler from '@/components/ChunkErrorHandler'

const outfit = localFont({
  src: './fonts/outfit-latin.woff2',
  variable: '--font-outfit',
  weight: '300 900',
})

const rubik = localFont({
  src: [
    { path: './fonts/rubik-latin.woff2', weight: '300 900', style: 'normal' },
    { path: './fonts/rubik-arabic.woff2', weight: '300 900', style: 'normal' },
  ],
  variable: '--font-rubik',
})

const cairo = localFont({
  src: [
    { path: './fonts/cairo-latin.woff2', weight: '300 900', style: 'normal' },
    { path: './fonts/cairo-arabic.woff2', weight: '300 900', style: 'normal' },
  ],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.creativnetworks.com'),
  title: {
    default: 'Creative Networks — Digital Studio in Amman, Jordan',
    template: '%s | Creative Networks',
  },
  description: 'Built in Amman and made for the MENA region. Creative Networks designs and builds websites, mobile apps, and digital platforms for ambitious teams.',
  keywords: [
    'software development company',
    'tech company Jordan',
    'software house Amman',
    'web development Jordan',
    'mobile app development Amman',
    'cloud systems development',
    'ERP development Jordan',
    'software agency Amman',
    'technology company Jordan',
    'dev company Amman',
    'software solutions Jordan',
    'custom software development',
    'SaaS development',
    'web development company',
    'mobile app developers',
    'software engineering Jordan',
    'IT company Amman',
    'digital transformation Jordan',
    'software outsourcing',
    'tech solutions MENA',
  ],
  authors: [{ name: 'Creative Networks' }],
  creator: 'Creative Networks',
  publisher: 'Creative Networks',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_JO'],
    url: 'https://www.creativnetworks.com',
    siteName: 'Creative Networks',
    title: 'Creative Networks — Digital Studio in Amman, Jordan',
    description: 'Built in Amman and made for the MENA region. Creative Networks designs and builds websites, mobile apps, and digital platforms for ambitious teams.',
    images: [
      {
        url: '/logo/creative-networks-mark-black.jpg',
        width: 600,
        height: 600,
        alt: 'Creative Networks logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Networks — Digital Studio in Amman, Jordan',
    description: 'Websites, mobile apps, and digital platforms built in Amman for the MENA region.',
    images: ['/logo/creative-networks-mark-black.jpg'],
    creator: '@creativenetworks',
  },
  alternates: {
    canonical: 'https://www.creativnetworks.com',
    languages: {
      'en-US': 'https://www.creativnetworks.com',
      'ar-JO': 'https://www.creativnetworks.com/ar',
    },
  },
  category: 'Technology',
  classification: 'Software Development, Technology Services',
  other: {
    'geo.region': 'JO-AM',
    'geo.placename': 'Amman',
    'geo.position': '31.9539;35.9106',
    'ICBM': '31.9539, 35.9106',
  },
}

export const viewport: Viewport = {
  themeColor: '#F3EDE3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${outfit.variable} ${rubik.variable} ${cairo.variable} antialiased`}>
        <ChunkErrorHandler />
        <StructuredData />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
