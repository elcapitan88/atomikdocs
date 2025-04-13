// src/theme/BlogSidebar/index.js
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useLocation } from '@docusaurus/router';
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
  {
    name: "President's Thoughts",
    count: 2,
    href: '/blog/tags/presidents-thoughts',
  },
];

export default function BlogSidebar({ sidebar }) {
  const location = useLocation();
  
  if (!sidebar) {
    return null;
  }
  
  // Check if we're on the main blog page
  const isMainBlogPage = 
    ExecutionEnvironment.canUseDOM && 
    (location.pathname === '/blog' || location.pathname === '/blog/');
  
  // Don't show sidebar on main blog page
  if (isMainBlogPage) {
    return null;
  }
  
  // Get the current category path to highlight active category
  const currentPath = location.pathname;

  return (
    <>
      {/* Desktop Sidebar */}
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
        
        <Link to="/blog" className={styles.viewAllButton}>
          Back to Categories
        </Link>
      </nav>
      
      {/* Mobile Navigation Bar */}
      <div className={styles.mobileNavContainer}>
        <h3 className={styles.mobileNavTitle}>
          {translate({
            id: 'theme.blog.sidebar.title',
            message: 'Categories',
            description: 'The label for the blog sidebar',
          })}
        </h3>
        
        <div className={styles.mobileCategories}>
          {CUSTOM_CATEGORIES.map((category) => (
            <div key={category.name} className={styles.mobileCategoryItem}>
              <Link 
                to={category.href} 
                className={clsx(
                  styles.mobileCategoryLink,
                  currentPath === category.href && styles.active
                )}
              >
                <span>{category.name}</span>
                <span className={styles.mobileCategoryCount}>{category.count}</span>
              </Link>
            </div>
          ))}
        </div>
        
        <Link to="/blog" className={styles.mobileBackButton}>
          Back to Categories
        </Link>
      </div>
    </>
  );
}