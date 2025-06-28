import React from 'react';
import Head from '@docusaurus/Head';

const CourseSchema = ({ 
  courseName, 
  description, 
  lessons = [], 
  provider = "Atomik Trading",
  url,
  difficulty = "Beginner"
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    'name': courseName,
    'description': description,
    'provider': {
      '@type': 'Organization',
      'name': provider,
      'url': 'https://atomiktrading.io',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://atomiktrading.io/docs/img/atomik-logo.svg'
      }
    },
    'educationalLevel': difficulty,
    'about': [
      {
        '@type': 'Thing',
        'name': 'Trading Automation',
        'description': 'Automated execution of trading strategies using computer algorithms'
      },
      {
        '@type': 'Thing',
        'name': 'Financial Technology',
        'description': 'Technology solutions for financial services and trading'
      }
    ],
    'teaches': [
      'Trading Automation Fundamentals',
      'TradingView Integration',
      'Webhook Configuration', 
      'Risk Management',
      'Strategy Development'
    ],
    'coursePrerequisites': [
      'Basic understanding of financial markets',
      'Computer literacy'
    ],
    'educationalCredentialAwarded': 'Certificate of Completion',
    'numberOfCredits': lessons.length,
    'timeRequired': `PT${lessons.length * 30}M`, // Estimate 30 minutes per lesson
    'inLanguage': 'en-US',
    'isAccessibleForFree': true,
    'learningResourceType': 'Course',
    'educationalUse': 'instruction',
    'interactivityType': 'mixed',
    'audience': {
      '@type': 'EducationalAudience',
      'educationalRole': 'student',
      'audienceType': ['Individual Traders', 'Retail Investors', 'Financial Professionals']
    },
    'hasPart': lessons.map((lesson, index) => ({
      '@type': 'LearningResource',
      'name': lesson.name,
      'description': lesson.description,
      'url': lesson.url,
      'position': index + 1,
      'learningResourceType': 'Lesson',
      'timeRequired': 'PT30M',
      'educationalLevel': difficulty
    })),
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'category': 'Educational'
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Head>
  );
};

export default CourseSchema;