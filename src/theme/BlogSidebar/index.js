// src/theme/BlogSidebar/index.js
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

// List of custom categories we want to show
const CUSTOM_CATEGORIES = [
  {
    name: 'Automated Trading',
    count: 3,
    href: '/blog/tags/automated-trading',
  },
  {
    name: 'Copy Trading',
    count: 2,
    href: '/blog/tags/copy-trading',
  },
  {
    name: 'Trading Fundamentals',
    count: 4,
    href: '/blog/tags/trading-fundamentals',
  },
  {
    name: 'API Integration',
    count: 2,
    href: '/blog/tags/api-integration',
  },
];

export default function BlogSidebar({ sidebar }) {
  if (!sidebar) {
    return null;
  }
  
  // Check if we're on the main blog page
  const isMainBlogPage = window.location.pathname === '/blog' || 
                         window.location.pathname === '/blog/';
  
  // Don't show sidebar on main blog page
  if (isMainBlogPage) {
    return null;
  }

  return (
    <nav
      className={clsx(styles.sidebar, 'thin-scrollbar')}
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog categories navigation',
        description: 'The ARIA label for the blog sidebar',
      })}>
      <div className={clsx(styles.sidebarHeader, 'margin-bottom--md')}>
        <h3 className={styles.sidebarTitle}>
          {translate({
            id: 'theme.blog.sidebar.title',
            message: 'Categories',
            description: 'The label for the blog sidebar',
          })}
        </h3>
      </div>
      
      <ul className={styles.categoriesList}>
        {CUSTOM_CATEGORIES.map((category) => (
          <li key={category.name} className={styles.categoryItem}>
            <Link to={category.href} className={styles.categoryLink}>
              <span className={styles.categoryName}>{category.name}</span>
              <span className={styles.categoryCount}>{category.count}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* All posts link as a button */}
      <Link to="/blog" className={styles.viewAllButton}>
        Back to Categories
      </Link>
    </nav>
  );
}