// src/components/BlogPostCard.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './BlogPostCard.module.css';

export default function BlogPostCard({ post }) {
  const { metadata } = post || {};
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
  );
}