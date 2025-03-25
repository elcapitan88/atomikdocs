import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ParticleBackground from '../components/ParticleBackground';
import styles from './index.module.css';

// Resource card icons
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

function AutomationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
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

function WebhookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

function ResourceCard({ title, description, icon: Icon, link }) {
  return (
    <Link to={link} className={styles.resourceCard}>
      <div className={styles.resourceCardHeader}>
        <div className={styles.resourceCardIcon}>
          <Icon />
        </div>
        <h3 className={styles.resourceCardTitle}>{title}</h3>
      </div>
      <p className={styles.resourceCardDescription}>{description}</p>
      <div className={styles.resourceCardArrow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Link>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            <span className="gradient-text">{siteConfig.title}</span> 
            <span className={styles.subtitle}>Documentation</span>
          </Heading>
          <p className={styles.heroTagline}>
            The professional-grade webhook-based trading automation platform
          </p>
        </div>
      </div>
    </header>
  );
}

function ResourceGrid() {
  const resources = [
    {
      title: 'Webhook Setup',
      description: 'Learn how to create, configure, and manage webhooks to automate your trading strategies.',
      icon: WebhookIcon,
      link: '/docs/guides/webhook-setup',
    },
    {
      title: 'First Automated Trade',
      description: 'Step-by-step guide to setting up and executing your first automated trade.',
      icon: AutomationIcon,
      link: '/docs/guides/first-trade',
    },
    {
      title: 'Security Best Practices',
      description: 'Ensure your trading automation is secure with our recommended security practices.',
      icon: SecurityIcon,
      link: '/docs/guides/security',
    },
    {
      title: 'Trading Strategies',
      description: 'Explore how to implement various trading strategies using AtomikTrading.',
      icon: DocumentIcon,
      link: '/docs/guides/trading-strategies',
    },
  ];

  return (
    <div className={styles.resourceGrid}>
      {resources.map((resource, idx) => (
        <ResourceCard key={idx} {...resource} />
      ))}
    </div>
  );
}

function QuickLinks() {
  const links = [
    { title: 'Introduction', link: '/docs/intro' },
    { title: 'Guides', link: '/docs/category/guides' },
    { title: 'API References', link: '/docs/api' },
    { title: 'Broker Integrations', link: '/docs/brokers' },
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
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Professional-grade webhook-based trading automation platform. Connect your favorite broker and automate your trading strategies with ease.">
      <div className={styles.homeContainer}>
        <ParticleBackground />
        <div className={styles.pageContent}>
          <HomepageHeader />
          <main className={styles.homeMain}>
            <div className="container">
              <ResourceGrid />
              <QuickLinks />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}