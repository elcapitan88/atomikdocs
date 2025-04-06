// src/pages/index.js
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ParticleBackground from '../components/ParticleBackground';
import { useHistory } from '@docusaurus/router';
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

function CopyTradingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <line x1="6" y1="9" x2="6" y2="4"></line>
      <line x1="10" y1="9" x2="10" y2="4"></line>
      <line x1="14" y1="9" x2="14" y2="4"></line>
      <line x1="18" y1="9" x2="18" y2="4"></line>
      <rect x="2" y="9" width="20" height="3" rx="1" ry="1"></rect>
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
    { title: 'Introduction', link: '/docs/intro' },
    { title: 'Webhook Setup', link: '/docs/guides/webhook-setup' },
    { title: 'Security', link: '/docs/guides/security' },
    { title: 'Trading Strategies', link: '/docs/guides/trading-strategies' },
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
            Professional-grade webhook-based trading automation platform documentation
          </p>
          
          {/* Quick Links moved to header */}
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

function DocsIntroSection() {
  return (
    <section className={styles.docsIntroSection}>
      <div className="container">
        <div className={styles.twoColumn}>
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>AtomikTrading Documentation</h2>
            <p className={styles.introText}>
              This documentation will help you set up and use AtomikTrading's webhook-based trading automation platform. 
              Learn how to connect your brokers, set up automated trades, and implement professional copy trading strategies.
            </p>
            
            <h3 className={styles.subSectionTitle}>Key Concepts</h3>
            <dl className={styles.keyConceptsList}>
              <div className={styles.conceptItem}>
                <dt>Webhooks</dt>
                <dd>HTTP callbacks that deliver data to other applications in real-time when triggered by specific events. AtomikTrading uses webhooks to receive trading signals and execute trades across multiple accounts.</dd>
              </div>
              
              <div className={styles.conceptItem}>
                <dt>Copy Trading</dt>
                <dd>A strategy that allows traders to replicate trades across multiple accounts simultaneously. Unlike social trading, professional copy trading multiplies your own strategy rather than following others.</dd>
              </div>
              
              <div className={styles.conceptItem}>
                <dt>Trading Automation</dt>
                <dd>The process of using technology to execute trading decisions without manual intervention. AtomikTrading provides the infrastructure to automate your existing trading strategies.</dd>
              </div>
            </dl>
          </div>
          
          <div className={styles.startOptions}>
            <div className={styles.startCard}>
              <h3 className={styles.startCardTitle}>New Users</h3>
              <p className={styles.startCardText}>Just getting started with AtomikTrading?</p>
              <Link to="/docs/intro" className={styles.startButton}>Begin Here →</Link>
            </div>
            
            <div className={styles.startCard}>
              <h3 className={styles.startCardTitle}>Webhook Setup</h3>
              <p className={styles.startCardText}>Ready to configure your webhooks?</p>
              <Link to="/docs/guides/webhook-setup" className={styles.startButton}>Setup Guide →</Link>
            </div>
            
            <div className={styles.startCard}>
              <h3 className={styles.startCardTitle}>Security Guide</h3>
              <p className={styles.startCardText}>Learn best practices for secure trading.</p>
              <Link to="/docs/guides/security" className={styles.startButton}>Security Docs →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className={styles.searchSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Find Documentation</h2>
        <form onSubmit={handleSearch} className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton} aria-label="Search">
            <SearchIcon />
          </button>
        </form>
        <div className={styles.popularSearches}>
          <span className={styles.popularLabel}>Popular searches:</span>
          <Link to="/docs/guides/webhook-setup" className={styles.popularLink}>Webhook Setup</Link>
          <Link to="/docs/guides/first-trade" className={styles.popularLink}>First Trade</Link>
          <Link to="/docs/guides/security" className={styles.popularLink}>Security</Link>
          <Link to="/docs/guides/trading-strategies" className={styles.popularLink}>Trading Strategies</Link>
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
      description: 'Everything you need to start using AtomikTrading',
      icon: DocumentIcon,
      links: [
        { title: 'Introduction', url: '/docs/intro' },
        { title: 'First Automated Trade', url: '/docs/guides/first-trade' },
        { title: 'Account Setup', url: '/docs/intro' },
      ],
    },
    {
      title: 'Webhook Integration',
      description: 'Connect your trading signals to AtomikTrading',
      icon: WebhookIcon,
      links: [
        { title: 'Webhook Setup', url: '/docs/guides/webhook-setup' },
        { title: 'Webhook Parameters', url: '/docs/guides/webhook-setup' },
        { title: 'Testing Webhooks', url: '/docs/guides/webhook-setup' },
      ],
    },
    {
      title: 'Copy Trading',
      description: 'Multiply your trading strategy across accounts',
      icon: CopyTradingIcon,
      links: [
        { title: 'Copy Trading Fundamentals', url: '/docs/guides/trading-strategies' },
        { title: 'Account Linking', url: '/docs/guides/trading-strategies' },
        { title: 'Position Sizing', url: '/docs/guides/trading-strategies' },
      ],
    },
    {
      title: 'Security',
      description: 'Best practices for secure trading automation',
      icon: SecurityIcon,
      links: [
        { title: 'Security Fundamentals', url: '/docs/guides/security' },
        { title: 'API Security', url: '/docs/guides/security' },
        { title: 'Account Protection', url: '/docs/guides/security' },
      ],
    },
  ];

  return (
    <section className={styles.docsStructureSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Documentation Structure</h2>
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
      title: 'Webhook Security Best Practices',
      date: 'April 2, 2024',
      url: '/docs/guides/security',
    },
    {
      title: 'New Copy Trading Features Guide',
      date: 'March 28, 2024',
      url: '/docs/guides/trading-strategies',
    },
    {
      title: 'Multi-Broker Setup Guide',
      date: 'March 15, 2024',
      url: '/docs/guides/first-trade',
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

function QuickLinks() {
  const links = [
    { title: 'Introduction', link: '/docs/intro' },
    { title: 'Webhook Setup', link: '/docs/guides/webhook-setup' },
    { title: 'Security', link: '/docs/guides/security' },
    { title: 'Trading Strategies', link: '/docs/guides/trading-strategies' },
    { title: 'Blog', link: '/blog' },
  ];

  return (
    <div className={styles.quickLinksContainer}>
      <h2 className={styles.quickLinksTitle}>Quick Links</h2>
      <div className={styles.quickLinks}>
        {links.map((link, idx) => (
          <Link 
            key={idx} 
            to={link.link} 
            className={styles.quickLink}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Check if HomepageStructuredData is a valid component
  const hasStructuredData = typeof HomepageStructuredData === 'function';
  
  return (
    <Layout
      title={`${siteConfig.title} - Trading Automation Documentation`}
      description="Comprehensive documentation for AtomikTrading's webhook-based trading automation platform. Learn how to set up webhooks, implement copy trading, secure your accounts, and scale your trading strategies.">
      {/* Only render if it's a valid component */}
      {hasStructuredData && <HomepageStructuredData />}
      <div className={styles.homeContainer}>
        <ParticleBackground />
        <div className={styles.pageContent}>
          <HomepageHeader />
          <main className={styles.homeMain}>
            <DocsIntroSection />
            <SearchSection />
            <DocsStructureSection />
            <RecentUpdatesSection />
          </main>
        </div>
      </div>
    </Layout>
  );
}