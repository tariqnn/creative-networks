'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Creative Networks',
      alternateName: 'Creative Networks Services',
      url: 'https://creativenetworkservices.com',
      logo: 'https://creativenetworkservices.com/logo/no-background.png',
      description: 'Leading software development company and tech agency in Amman, Jordan. Specializing in web development, mobile apps, cloud systems, and ERP solutions.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Amman',
        addressRegion: 'Amman',
        addressCountry: 'JO',
        streetAddress: 'Amman, Jordan',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+962795550073',
        contactType: 'Customer Service',
        email: 'info@creativnetworks.com',
        areaServed: ['JO', 'MENA', 'Worldwide'],
        availableLanguage: ['English', 'Arabic'],
      },
      sameAs: [
        'https://www.linkedin.com/company/creative-networks-services/about/?viewAsMember=true',
        'https://www.instagram.com/creative_network20?igsh=aTRoeHZlejFpZXZ2',
        'https://www.facebook.com/share/18HhGpXZAY/?mibextid=wwXIfr',
      ],
      foundingDate: '2019',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '10-50',
      },
    }

    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://creativenetworkservices.com/#organization',
      name: 'Creative Networks',
      image: 'https://creativenetworkservices.com/logo/no-background.png',
      url: 'https://creativenetworkservices.com',
      telephone: '+962795550073',
      email: 'info@creativnetworks.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Amman',
        addressRegion: 'Amman',
        addressCountry: 'JO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.9539,
        longitude: 35.9106,
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: {
        '@type': 'Country',
        name: ['Jordan', 'MENA Region', 'Worldwide'],
      },
    }

    // SoftwareApplication Schema
    const softwareApplicationSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Creative Networks Software Development Services',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
      },
    }

    // Service Schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Software Development',
      provider: {
        '@type': 'Organization',
        name: 'Creative Networks',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Amman',
          addressRegion: 'Amman',
          addressCountry: 'JO',
        },
      },
      areaServed: {
        '@type': 'Country',
        name: ['Jordan', 'MENA Region', 'Worldwide'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'High-performance websites, dashboards, and web platforms',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description: 'iOS and Android apps with cross-platform solutions',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Systems & ERP Development',
              description: 'Scalable SaaS products, ERPs, and internal tools',
            },
          },
        ],
      },
    }

    // WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Creative Networks',
      url: 'https://creativenetworkservices.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://creativenetworkservices.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    }

    // Add all schemas to the page
    const schemas = [
      organizationSchema,
      localBusinessSchema,
      softwareApplicationSchema,
      serviceSchema,
      websiteSchema,
    ]

    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `structured-data-${index}`
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}

