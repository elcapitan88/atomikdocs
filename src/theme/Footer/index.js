// src/theme/Footer/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Custom X (formerly Twitter) icon component
function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom TikTok icon component
function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

// YouTube icon
function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );
}

// Email icon
function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22,5.5 L12,13 L2,5.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Footer() {
  const productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ];

  const companyLinks = [
    { label: 'Contact', href: `mailto:${encodeURIComponent('support@atomiktrading.io')}?subject=${encodeURIComponent('[AtomikTrading Support]')}` },
    { label: 'Partners', href: '/partners' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/docs/policy/privacy-policy' },
    { label: 'Terms of Service', href: '/docs/policy/terms-of-service' },
    { label: 'Cookie Policy', href: '/docs/policy/cookie-policy' },
    { label: 'Data Protection', href: '/data-protection' },
  ];

  const socialLinks = [
    { label: 'X.com', icon: <XIcon />, href: 'https://x.com/atomiktrades', "aria-label": "X.com" },
    { label: 'YouTube', icon: <YoutubeIcon />, href: 'https://www.youtube.com/@AtomikTrading', "aria-label": "YouTube" },
    { label: 'TikTok', icon: <TikTokIcon />, href: 'https://www.tiktok.com/@atomiktrading', "aria-label": "TikTok" },
    { 
      label: 'Email', 
      icon: <MailIcon />, 
      href: `mailto:${encodeURIComponent('support@atomiktrading.io')}?subject=${encodeURIComponent('[AtomikTrading Support]')}`,
      "aria-label": "Email",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGradient}></div>
      
      <div className={styles.container}>
        <div className={styles.footerColumns}>
          {/* Company Info */}
          <div className={styles.companyColumn}>
            <Link to="/" className={styles.companyName}>
              AtomikTrading
            </Link>
            <p className={styles.companyDescription}>
              Professional-grade webhook-based trading automation platform. Connect your favorite broker and automate your trading strategies with ease.
            </p>
          </div>

          {/* Product Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Product</h3>
            <ul className={styles.linksList}>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linksList}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.linksList}>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AtomikTrading. All rights reserved.
          </p>
          
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social["aria-label"]}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;