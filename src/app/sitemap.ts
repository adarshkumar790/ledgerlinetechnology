import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ledgerlinetechnology-pqqo.vercel.app',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ledgerlinetechnology-pqqo.vercel.app/about',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ledgerlinetechnology-pqqo.vercel.app/service',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    // Dynamic routes example (you would typically fetch these from a database)
    {
      url: 'https://ledgerlinetechnology-pqqo.vercel.app/project',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://ledgerlinetechnology-pqqo.vercel.app/blog',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
        url: 'https://ledgerlinetechnology-pqqo.vercel.app/contact',
        lastModified: new Date('2025-01-09'),
        changeFrequency: 'weekly',
        priority: 0.7,
    }
  ]
}