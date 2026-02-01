import { TESTIMONIAL_DATA, SOCIAL_LINKS, FAQS } from './data';

const BASE_URL = 'https://www.pelvfixpt.com';
const BUSINESS_NAME = 'PelvFix Physical Therapy';
const SITE_NAME = 'PelvFix';

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: SITE_NAME,
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/og-logo.jpg`,
    image: `${BASE_URL}/og-logo.jpg`,
    description:
      'Mobile pelvic floor physical therapy serving Middlesex County and Central NJ. Dr. Suzanne Chedid brings expert one-on-one care directly to your home.',
    telephone: '+1-732-853-1055',
    email: 'info@pelvfixpt.com',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Middlesex County, NJ',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Central New Jersey',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pelvic Floor Physical Therapy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pelvic Floor Physical Therapy',
            description:
              'Comprehensive pelvic floor rehabilitation including soft tissue mobilization, myofascial release, and therapeutic exercise.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prenatal Physical Therapy',
            description:
              'Specialized care for pregnant women addressing pelvic pain and preparing for delivery.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Postpartum Physical Therapy',
            description:
              'Recovery-focused therapy for new mothers addressing diastasis recti, pelvic floor weakness, and more.',
          },
        },
      ],
    },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook, SOCIAL_LINKS.tiktok],
    founder: {
      '@type': 'Person',
      name: 'Dr. Suzanne Chedid',
      jobTitle: 'Doctor of Physical Therapy',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: TESTIMONIAL_DATA.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/about#person`,
    name: 'Dr. Suzanne Chedid',
    givenName: 'Suzanne',
    familyName: 'Chedid',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'DPT',
    jobTitle: 'Pelvic Floor Physical Therapist',
    description:
      'Dr. Suzanne Chedid is a specialized pelvic floor physical therapist and certified Pregnancy and Postpartum Corrective Exercise Specialist (PCES) providing mobile, in-home care in Middlesex County and Central NJ.',
    image: `${BASE_URL}/doctor.jpg`,
    url: `${BASE_URL}/about`,
    worksFor: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Rutgers University',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Doctor of Physical Therapy (DPT)',
        credentialCategory: 'degree',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Pregnancy and Postpartum Corrective Exercise Specialist (PCES)',
        credentialCategory: 'certificate',
      },
    ],
    knowsAbout: [
      'Pelvic Floor Rehabilitation',
      'Pelvic Floor Physical Therapy',
      'Prenatal Physical Therapy',
      'Postpartum Physical Therapy',
      "Women's Health",
    ],
  };
}

export function generateFAQPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/faqs#faqpage`,
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.join(' '),
      },
    })),
  };
}

export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#reviews`,
    name: BUSINESS_NAME,
    review: TESTIMONIAL_DATA.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: testimonial.review,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: TESTIMONIAL_DATA.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };
}
