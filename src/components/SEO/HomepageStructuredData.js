// src/components/SEO/HomepageStructuredData.js
import React from 'react';
import Head from '@docusaurus/Head';

export default function HomepageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AtomikTrading Documentation",
    "url": "https://docs.atomiktrading.io",
    "description": "Comprehensive documentation for AtomikTrading's webhook-based trading automation platform.",
    "publisher": {
      "@type": "Organization",
      "name": "AtomikTrading",
      "logo": {
        "@type": "ImageObject",
        "url": "https://docs.atomiktrading.io/img/atomik-logo.svg"
      }
    },
    "hasPart": [
      {
        "@type": "TechArticle",
        "headline": "Webhook Setup Guide",
        "description": "Learn how to create, configure, and manage webhooks to automate your trading strategies.",
        "url": "https://docs.atomiktrading.io/docs/guides/webhook-setup"
      },
      {
        "@type": "TechArticle",
        "headline": "Security Best Practices",
        "description": "Ensure your trading automation is secure with recommended security practices.",
        "url": "https://docs.atomiktrading.io/docs/guides/security"
      },
      {
        "@type": "TechArticle",
        "headline": "Trading Strategies Guide",
        "description": "Implement various trading strategies using AtomikTrading.",
        "url": "https://docs.atomiktrading.io/docs/guides/trading-strategies"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://docs.atomiktrading.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
}