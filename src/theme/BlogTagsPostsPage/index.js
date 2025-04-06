// src/theme/BlogTagsPostsPage/index.js
import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function BlogPostCard({ post }) {
  if (!post) {
    return null;
  }
  
  const { metadata } = post;
  const { title, description, date, tags = [], authors = [], readingTime = 1, permalink } = metadata || {};
  
  // Format the date
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : '';
  
  // Get the first author (if any)
  const author = authors && authors.length > 0 ? authors[0] : null;
  
  return (
    <div className={styles.blogCardWrapper}>
      <Link to={permalink} className={styles.blogCard}>
        <div className={styles.blogCardContent}>
          <div className={styles.blogMainContent}>
            {/* Post title */}
            <h2 className={styles.blogTitle}>{title || 'Untitled'}</h2>
            
            {/* Post description/excerpt */}
            <p className={styles.blogDescription}>{description || ''}</p>
            
            {/* Tag chips (limit to 3 for space) */}
            {tags && tags.length > 0 && (
              <div className={styles.blogTags}>
                {tags.slice(0, 3).map((tag) => (
                  <span key={tag.label} className={styles.blogTag}>
                    {tag.label}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className={styles.blogTagMore}>+{tags.length - 3}</span>
                )}
              </div>
            )}
          </div>
          
          {/* Card metadata on the right */}
          <div className={styles.blogMetaSection}>
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
            <div className={styles.blogMetaDetails}>
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

export default function BlogTagsPostsPage(props) {
  const {tag, items, listMetadata, sidebar} = props;
  const title = tag.label;
  const description = tag.description || `Posts tagged with "${tag.label}"`;
  
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="blog_tags_posts" />
      <BlogLayout sidebar={sidebar}>
        <div className={styles.blogContainer}>
          <header className={styles.blogHeader}>
            <h1 className={styles.blogListTitle}>{title}</h1>
            <p className={styles.blogListSubtitle}>{description}</p>
          </header>
          
          <div className={styles.blogList}>
            {items.length > 0 ? (
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
          
          {listMetadata && (listMetadata.nextPage || listMetadata.previousPage) && (
            <BlogListPaginator metadata={listMetadata} />
          )}
          
          <div className={styles.backToCategoriesWrapper}>
            <Link to="/blog" className={styles.backToCategoriesBtn}>
              Back to Categories
            </Link>
          </div>
        </div>
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}