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
    "url": "https://atomiktrading.io/docs",
    "description": "Comprehensive documentation for AtomikTrading's webhook-based trading automation platform.",
    "publisher": {
      "@type": "Organization",
      "name": "AtomikTrading",
      "logo": {
        "@type": "ImageObject",
        "url": "https://atomiktrading.io/docs/img/atomik-logo.svg"
      }
    },
    "hasPart": [
      {
        "@type": "TechArticle",
        "headline": "Webhook Setup Guide",
        "description": "Learn how to create, configure, and manage webhooks to automate your trading strategies.",
        "url": "https://atomiktrading.io/docs/guides/webhook-setup"
      },
      {
        "@type": "TechArticle",
        "headline": "Security Best Practices",
        "description": "Ensure your trading automation is secure with recommended security practices.",
        "url": "https://atomiktrading.io/docs/guides/security"
      },
      {
        "@type": "TechArticle",
        "headline": "Trading Strategies Guide",
        "description": "Implement various trading strategies using AtomikTrading.",
        "url": "https://atomiktrading.io/docs/guides/trading-strategies"
      },
      {
        "@type": "TechArticle",
        "headline": "Broker Connection Guide",
        "description": "Connect your Tradovate, Interactive Brokers, Binance, or Polymarket broker account.",
        "url": "https://atomiktrading.io/docs/guides/broker-connection"
      },
      {
        "@type": "TechArticle",
        "headline": "Copy Trading Guide",
        "description": "Replicate your strategy across multiple broker accounts simultaneously.",
        "url": "https://atomiktrading.io/docs/guides/copy-trading"
      },
      {
        "@type": "TechArticle",
        "headline": "Strategy Marketplace",
        "description": "Browse, subscribe to, and sell trading strategies on the Atomik Marketplace.",
        "url": "https://atomiktrading.io/docs/guides/marketplace"
      },
      {
        "@type": "TechArticle",
        "headline": "FAQ",
        "description": "Frequently asked questions about Atomik Trading platform.",
        "url": "https://atomiktrading.io/docs/guides/faq"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://atomiktrading.io/docs/search?q={search_term_string}",
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
