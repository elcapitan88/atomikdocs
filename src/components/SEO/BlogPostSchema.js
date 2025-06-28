import React from 'react';
import Head from '@docusaurus/Head';

const BlogPostSchema = ({ 
  title, 
  description, 
  author, 
  datePublished, 
  dateModified, 
  image, 
  tags = [], 
  url,
  readingTime 
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    'headline': title,
    'description': description,
    'image': image ? `https://atomiktrading.io${image}` : 'https://atomiktrading.io/docs/img/atomik-logo.svg',
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'author': {
      '@type': 'Person',
      'name': author.name || 'Cruz Hernandez',
      'jobTitle': author.title || 'Founder & President Atomiktrading.io',
      'url': author.url || 'https://atomiktrading.io',
      'image': author.image_url ? `https://atomiktrading.io${author.image_url}` : undefined,
      'sameAs': [
        'https://x.com/newagewallst',
        'https://www.youtube.com/@AtomikTrading',
        'https://www.tiktok.com/@atomiktrades'
      ]
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Atomik Trading',
      'url': 'https://atomiktrading.io',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://atomiktrading.io/docs/img/atomik-logo.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'keywords': tags.join(', '),
    'about': [
      {
        '@type': 'Thing',
        'name': 'Trading Automation',
        'sameAs': 'https://en.wikipedia.org/wiki/Algorithmic_trading'
      },
      {
        '@type': 'Thing', 
        'name': 'Automated Trading',
        'description': 'Computer-executed trading strategies based on pre-defined rules'
      }
    ],
    'mentions': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Atomik Trading Platform',
        'url': 'https://atomiktrading.io'
      },
      {
        '@type': 'Thing',
        'name': 'TradingView',
        'sameAs': 'https://www.tradingview.com'
      }
    ],
    'isPartOf': {
      '@type': 'Blog',
      'name': 'Atomik Trading Blog',
      'url': 'https://atomiktrading.io/docs/blog'
    },
    'wordCount': readingTime ? Math.round(readingTime * 200) : undefined, // Estimate ~200 words per minute
    'timeRequired': readingTime ? `PT${Math.ceil(readingTime)}M` : undefined,
    'educationalLevel': 'Beginner',
    'learningResourceType': 'Article',
    'teaches': [
      'Trading Automation',
      'Algorithmic Trading',
      'Financial Technology'
    ]
  };

  // Remove undefined values
  const cleanSchema = JSON.parse(JSON.stringify(schema));

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(cleanSchema, null, 2)}
      </script>
    </Head>
  );
};

export default BlogPostSchema;