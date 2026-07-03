import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.pelvfixpt.com',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.pelvfixpt.com/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.pelvfixpt.com/faqs',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.pelvfixpt.com/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
