import React from 'react';
import Head from '@docusaurus/Head';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


export default function HomepageStructuredData() {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
      }
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
        "url": "https://docs.atomiktrading.io/guides/webhook-setup"
      },
      {
        "@type": "TechArticle",
        "headline": "Security Best Practices",
        "description": "Ensure your trading automation is secure with recommended security practices.",
        "url": "https://docs.atomiktrading.io/guides/security"
      },
      {
        "@type": "TechArticle",
        "headline": "Trading Strategies Guide",
        "description": "Implement various trading strategies using AtomikTrading.",
        "url": "https://docs.atomiktrading.io/guides/trading-strategies"
      },
      {
        "@type": "TechArticle",
        "headline": "Broker Connection Guide",
        "description": "Connect a Tradovate or TopstepX account, or start on the built-in paper account.",
        "url": "https://docs.atomiktrading.io/guides/broker-connection"
      },
      {
        "@type": "TechArticle",
        "headline": "Copy Trading Guide",
        "description": "Run one strategy across several of your broker accounts at once.",
        "url": "https://docs.atomiktrading.io/guides/copy-trading"
      },
      {
        "@type": "TechArticle",
        "headline": "Strategy Marketplace",
        "description": "Browse, subscribe to, and sell trading strategies on the Atomik Marketplace.",
        "url": "https://docs.atomiktrading.io/guides/marketplace"
      },
      {
        "@type": "TechArticle",
        "headline": "FAQ",
        "description": "Frequently asked questions about Atomik Trading platform.",
        "url": "https://docs.atomiktrading.io/guides/faq"
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
