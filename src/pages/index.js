// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ParticleBackground from '../components/ParticleBackground';
import styles from './index.module.css';

// Try importing with error handling
let HomepageStructuredData = () => null; // Fallback component
try {
  // Only try to import if we're in a browser environment
  if (typeof window !== 'undefined') {
    HomepageStructuredData = require('../components/SEO/HomepageStructuredData').default;
  }
} catch (error) {
  console.warn('Failed to load HomepageStructuredData component:', error);
}

// Icon components
function DocumentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function WebhookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const links = [
    { title: 'First Trade', link: '/guides/first-trade' },
    { title: 'Webhook Setup', link: '/guides/webhook-setup' },
    { title: 'Strategy Builder', link: '/guides/strategy-builder' },
    { title: 'Copy Trading', link: '/guides/copy-trading' },
    { title: 'FAQ', link: '/guides/faq' },
    { title: 'Blog', link: '/blog' },
  ];

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            <span className="gradient-text">{siteConfig.title}</span>
          </Heading>
          <p className={styles.heroTagline}>
            {siteConfig.tagline}
          </p>

          <div className={styles.heroCtas}>
            <Link to="/intro" className={styles.heroPrimaryBtn}>
              Browse the Docs &rarr;
            </Link>
            <Link to="/guides/first-trade" className={styles.heroSecondaryBtn}>
              First trade in 10 minutes
            </Link>
          </div>

          <div className={styles.headerQuickLinks}>
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.link}
                className={styles.headerQuickLink}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function StartHereSection() {
  const cards = [
    {
      title: 'New to Atomik?',
      text: 'Your first automated trade, on a paper account, in ten minutes.',
      cta: 'Start Here',
      link: '/guides/first-trade',
    },
    {
      title: 'Connect a Broker',
      text: 'Tradovate, funded accounts, IB — or the built-in paper account.',
      cta: 'Connect',
      link: '/guides/broker-connection',
    },
    {
      title: 'Wire Up TradingView',
      text: 'Webhook URLs, payloads, exits, and partial exits.',
      cta: 'Setup Guide',
      link: '/guides/webhook-setup',
    },
    {
      title: 'Build with AI',
      text: 'Describe a strategy; get validated, backtested Python.',
      cta: 'Builder Guide',
      link: '/guides/strategy-builder',
    },
  ];

  return (
    <section className={styles.docsIntroSection}>
      <div className="container">
        <div className={styles.startGrid}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.startCard}>
              <h3 className={styles.startCardTitle}>{card.title}</h3>
              <p className={styles.startCardText}>{card.text}</p>
              <Link to={card.link} className={styles.startButton}>{card.cta} &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocCategory({ title, description, icon: Icon, links }) {
  return (
    <div className={styles.docCategory}>
      <div className={styles.docCategoryHeader}>
        <div className={styles.docCategoryIcon}>
          <Icon />
        </div>
        <h3 className={styles.docCategoryTitle}>{title}</h3>
      </div>
      <p className={styles.docCategoryDescription}>{description}</p>
      <ul className={styles.docCategoryLinks}>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url} className={styles.docCategoryLink}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocsStructureSection() {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Accounts, brokers, and your first automated trade',
      icon: DocumentIcon,
      links: [
        { title: 'Your First Automated Trade', url: '/guides/first-trade' },
        { title: 'Broker Connection', url: '/guides/broker-connection' },
        { title: 'Paper Trading', url: '/guides/paper-trading' },
        { title: 'Prop-Firm Accounts', url: '/guides/prop-firms' },
      ],
    },
    {
      title: 'Automation',
      description: 'Signals in, executions out',
      icon: WebhookIcon,
      links: [
        { title: 'Webhook Setup', url: '/guides/webhook-setup' },
        { title: 'Trading Strategies', url: '/guides/trading-strategies' },
        { title: 'Copy Trading', url: '/guides/copy-trading' },
      ],
    },
    {
      title: 'Build & Test',
      description: 'From idea to validated, backtested strategy',
      icon: BuildIcon,
      links: [
        { title: 'AI Strategy Builder', url: '/guides/strategy-builder' },
        { title: 'How Backtesting Works', url: '/guides/backtesting' },
        { title: 'MCP Connector (Claude)', url: '/guides/mcp-connector' },
      ],
    },
    {
      title: 'Marketplace & Account',
      description: 'Strategies, plans, and keeping things secure',
      icon: AccountIcon,
      links: [
        { title: 'Strategy Marketplace', url: '/guides/marketplace' },
        { title: 'Subscription & Pricing', url: '/guides/subscription-pricing' },
        { title: 'Security', url: '/guides/security' },
        { title: 'FAQ', url: '/guides/faq' },
      ],
    },
  ];

  return (
    <section className={styles.docsStructureSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Browse the Docs</h2>
        <div className={styles.docCategoriesGrid}>
          {categories.map((category, index) => (
            <DocCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentUpdatesSection() {
  const updates = [
    {
      title: 'New: Strategy Builder, Backtesting, Paper Trading, Prop-Firm, and MCP Connector guides',
      date: 'August 2026',
      url: '/guides/strategy-builder',
    },
    {
      title: 'New: Atomik vs PickMyTrade, vs TradersPost, and the field — honest comparisons',
      date: 'August 2026',
      url: '/compare/atomik-vs-pickmytrade',
    },
    {
      title: 'Rewritten: First Automated Trade — real UI, real screenshots, paper-first',
      date: 'August 2026',
      url: '/guides/first-trade',
    },
  ];

  return (
    <section className={styles.recentUpdatesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Recent Documentation Updates</h2>
        <div className={styles.updatesContainer}>
          {updates.map((update, index) => (
            <div key={index} className={styles.updateItem}>
              <div className={styles.updateMeta}>
                <ClockIcon />
                <span className={styles.updateDate}>{update.date}</span>
              </div>
              <Link to={update.url} className={styles.updateTitle}>
                {update.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // Check if HomepageStructuredData is a valid component
  const hasStructuredData = typeof HomepageStructuredData === 'function';

  return (
    <Layout
      title={`${siteConfig.title} — Trading Automation Documentation`}
      description="Documentation for the Atomik Trading platform: webhook execution, broker connections, AI strategy building, backtesting, paper trading, copy trading, and the strategy marketplace.">
      {/* Only render if it's a valid component */}
      {hasStructuredData && <HomepageStructuredData />}
      <div className={styles.homeContainer}>
        <ParticleBackground />
        <div className={styles.pageContent}>
          <HomepageHeader />
          <main className={styles.homeMain}>
            <StartHereSection />
            <DocsStructureSection />
            <RecentUpdatesSection />
          </main>
        </div>
      </div>
    </Layout>
  );
}
