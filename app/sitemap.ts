import { MetadataRoute } from 'next';

// Bump this date whenever page content meaningfully changes
const LAST_MODIFIED = new Date('2026-07-10');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.pelvfixpt.com',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.pelvfixpt.com/about',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.pelvfixpt.com/faqs',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.pelvfixpt.com/contact',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
