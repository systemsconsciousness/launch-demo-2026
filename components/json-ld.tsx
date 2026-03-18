import { getSiteUrl, SITE_NAME, SEO_DESCRIPTION, SEO_TITLE } from '@/lib/site-config'

export function JsonLd() {
  const base = getSiteUrl().origin
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        name: SITE_NAME,
        url: base,
        description: SEO_DESCRIPTION,
        inLanguage: 'en-US',
        publisher: {
          '@type': 'Organization',
          name: 'Contentstack',
          url: 'https://www.contentstack.com',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${base}/#webpage`,
        url: base,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        isPartOf: { '@id': `${base}/#website` },
        about: {
          '@type': 'SoftwareApplication',
          name: 'Contentstack Launch',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          description:
            'High-performance frontend hosting and deployment for composable experiences.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
