import React from 'react';
import Head from '@docusaurus/Head';

const BreadcrumbSchema = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url ? `https://atomiktrading.io${item.url}` : undefined
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Head>
  );
};

export default BreadcrumbSchema;