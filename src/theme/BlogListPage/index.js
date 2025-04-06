// src/theme/BlogListPage/index.js
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

// Automated Trading icon
function AutomatedTradingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

// Copy Trading icon
function CopyTradingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function PresidentsThoughtsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}

// Trading Fundamentals icon
function TradingFundamentalsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

// Category card component
function CategoryCard({ title, description, icon: Icon, link, count }) {
  return (
    <Link to={link} className={styles.categoryCard}>
      <div className={styles.categoryCardHeader}>
        <div className={styles.categoryCardIcon}>
          <Icon />
        </div>
        <div className={styles.categoryCardCount}>{count} posts</div>
      </div>
      <h2 className={styles.categoryCardTitle}>{title}</h2>
      <p className={styles.categoryCardDescription}>{description}</p>
      <div className={styles.categoryCardArrow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Link>
  );
}

// Blog post card component for category pages
function BlogPostCard({ post }) {
  if (!post || !post.metadata) {
    return null;
  }
  
  const { metadata } = post;
  const { title, description, date, tags = [], authors = [], readingTime = 1, permalink } = metadata;
  
  // Format the date
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : '';
  
  // Get the first author (if any)
  const author = authors && authors.length > 0 ? authors[0] : null;
  
  return (
    <div className={styles.blogPostCardWrapper}>
      <Link to={permalink} className={styles.blogPostCard}>
        <div className={styles.blogPostCardContent}>
          <div className={styles.blogPostMainContent}>
            {/* Post title */}
            <h2 className={styles.blogPostTitle}>{title || 'Untitled'}</h2>
            
            {/* Post description/excerpt */}
            <p className={styles.blogPostDescription}>{description || ''}</p>
            
            {/* Tag chips (limit to 3 for space) */}
            {tags && tags.length > 0 && (
              <div className={styles.blogPostTags}>
                {tags.slice(0, 3).map((tag) => (
                  <span key={tag.label} className={styles.blogPostTag}>
                    {tag.label}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className={styles.blogPostTagMore}>+{tags.length - 3}</span>
                )}
              </div>
            )}
          </div>
          
          {/* Card metadata on the right */}
          <div className={styles.blogPostMetaSection}>
            {/* Author info */}
            {author && (
              <div className={styles.authorInfo}>
                {author.imageURL && (
                  <img 
                    src={author.imageURL} 
                    alt={author.name}
                    className={styles.authorImage} 
                  />
                )}
                <span className={styles.authorName}>{author.name}</span>
              </div>
            )}
            
            {/* Date and reading time */}
            <div className={styles.blogPostMetaDetails}>
              {formattedDate && <span className={styles.dateDisplay}>{formattedDate}</span>}
              <span className={styles.readingTime}>
                {Math.ceil(readingTime || 1)} min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Our custom BlogListPage implementation
function CustomBlogListPage(props) {
  const { metadata, items, sidebar } = props || {};
  const { blogDescription, blogTitle } = metadata || {};
  const location = useLocation();
  
  // Define our categories
  const categories = [
    {
      title: 'Automated Trading',
      description: 'Learn how to create, configure, and manage webhooks to automate your trading strategies.',
      icon: AutomatedTradingIcon,
      link: '/blog/tags/automated-trading',
      count: 3,
    },
    {
      title: 'Copy Trading',
      description: 'Discover how to follow successful traders and replicate their trading strategies automatically.',
      icon: CopyTradingIcon,
      link: '/blog/tags/copy-trading',
      count: 2,
    },
    {
      title: 'Trading Fundamentals',
      description: 'Master the core concepts and fundamentals of trading to build a strong foundation.',
      icon: TradingFundamentalsIcon,
      link: '/blog/tags/trading-fundamentals',
      count: 4,
    },
    {
      title: "President's Thoughts",
      description: 'Market insights, analysis and company updates directly from the President of AtomikTrading.',
      icon: PresidentsThoughtsIcon,
      link: '/blog/tags/presidents-thoughts',
      count: 2,
    },
  ];
  
  // Check if we're on the main blog page - safely check without using window directly
  const isMainBlogPage = 
    ExecutionEnvironment.canUseDOM ? 
    (location.pathname === '/blog' || location.pathname === '/blog/') : 
    false;
  
  // Update the page title for category pages
  let pageTitle = blogTitle || 'Blog';
  let pageSubtitle = 'Latest insights, updates, and guides on trading automation';
  
  // For category pages, update the title to show which category we're viewing - safely check using location
  if (!isMainBlogPage && ExecutionEnvironment.canUseDOM && location.pathname.includes('/blog/tags/')) {
    const categoryPath = location.pathname.split('/blog/tags/')[1]?.replace(/\/$/, '') || '';
    const currentCategory = categories.find(cat => cat.link.includes(categoryPath));
    
    if (currentCategory) {
      pageTitle = currentCategory.title;
      pageSubtitle = currentCategory.description;
    }
  }
  
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <PageMetadata title={pageTitle} description={blogDescription || pageSubtitle} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogLayout 
        sidebar={isMainBlogPage ? null : sidebar} 
        toc={null}>
        <div className={styles.blogContainer}>
          {/* Page title */}
          <header className={styles.blogHeader}>
            <h1 className={styles.blogListTitle}>
              {isMainBlogPage ? (
                <><span className="gradient-text">AtomikTrading</span> Blog</>
              ) : (
                pageTitle
              )}
            </h1>
            <p className={styles.blogListSubtitle}>
              {pageSubtitle}
            </p>
          </header>
          
          {isMainBlogPage ? (
            /* Categories grid - only on main blog page */
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <CategoryCard 
                  key={category.title} 
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  link={category.link}
                  count={category.count}
                />
              ))}
            </div>
          ) : (
            /* Blog posts list - on category pages */
            <>
              <div className={styles.blogPostsList}>
                {items && items.length > 0 ? (
                  items.map((item) => (
                    <BlogPostCard 
                      key={item.content.metadata.permalink} 
                      post={item.content} 
                    />
                  ))
                ) : (
                  <div className={styles.emptyCategory}>
                    <h3>No posts in this category yet</h3>
                    <p>Check back soon for new content!</p>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {metadata && (metadata.nextPage || metadata.previousPage) ? (
                <BlogListPaginator metadata={metadata} />
              ) : null}
              
              {/* Back to categories button */}
              <div className={styles.backToCategoriesWrapper}>
                <Link to="/blog" className={styles.backToCategoriesBtn}>
                  Back to Categories
                </Link>
              </div>
            </>
          )}
        </div>
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}

// Export our custom component as the default
export default function BlogListPageWrapper(props) {
  return <CustomBlogListPage {...props} />;
}