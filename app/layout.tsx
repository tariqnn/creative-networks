import type { Metadata, Viewport } from 'next'
import { Outfit, Rubik, Cairo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import StructuredData from '@/components/SEO/StructuredData'
import ChunkErrorHandler from '@/components/ChunkErrorHandler'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700'],
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://creativenetworkservices.com'),
  title: {
    default: 'Creative Networks - Leading Software Development Company in Amman, Jordan | Tech Agency',
    template: '%s | Creative Networks',
  },
  description: 'Creative Networks is a leading software development company and tech agency in Amman, Jordan. We specialize in web development, mobile apps, cloud systems, and ERP solutions. Top-rated software house serving MENA region and worldwide.',
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
    url: 'https://creativenetworkservices.com',
    siteName: 'Creative Networks',
    title: 'Creative Networks - Leading Software Development Company in Amman, Jordan',
    description: 'Top-rated software development company and tech agency in Amman, Jordan. Specializing in web development, mobile apps, cloud systems, and ERP solutions. Serving MENA region and worldwide.',
    images: [
      {
        url: '/logo/no-background.png',
        width: 1200,
        height: 630,
        alt: 'Creative Networks - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Networks - Software Development Company in Amman, Jordan',
    description: 'Leading tech company and software house in Amman, Jordan. Web development, mobile apps, cloud systems, and ERP solutions.',
    images: ['/logo/no-background.png'],
    creator: '@creativenetworks',
  },
  alternates: {
    canonical: 'https://creativenetworkservices.com',
    languages: {
      'en-US': 'https://creativenetworkservices.com',
      'ar-JO': 'https://creativenetworkservices.com/ar',
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
  themeColor: '#09090B',
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
