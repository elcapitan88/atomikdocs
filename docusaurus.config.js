// docusaurus.config.js
const config = {
  title: 'Atomik Trading Documentation & Learning Center',
  tagline: 'Complete Documentation, Tutorials & Guides for Trading Automation',
  favicon: 'img/favicon.png',
  
  // Update the URL to your main domain
  url: 'https://atomiktrading.io',
  // Change the baseUrl to '/docs/' for subdirectory
  baseUrl: '/docs/',
  
  // GitHub pages deployment config
  organizationName: 'atomiktrading',
  projectName: 'docs',
  
  // SEO settings remain the same
  trailingSlash: false,
  noIndex: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  // Update URLs in metadata
  headTags: [
    // Standard meta tags stay the same
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'trading automation, automated trading documentation, trading platform guides, webhook trading, copy trading, prop trading, TradingView integration, trading tutorials',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'AtomikTrading',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    // Favicon links
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/docs/img/apple-touch-icon.png', // Updated path
        sizes: '180x180',
      },
    },
    // Comprehensive structured data for documentation, tutorials, and blog
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': 'https://atomiktrading.io/docs#website',
            'name': 'Atomik Trading Documentation & Learning Center',
            'url': 'https://atomiktrading.io/docs',
            'description': 'Complete documentation, tutorials, and guides for trading automation',
            'publisher': {
              '@type': 'Organization',
              'name': 'Atomik Trading'
            },
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://atomiktrading.io/docs/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@type': 'LearningResource',
            '@id': 'https://atomiktrading.io/docs#learning-resource',
            'name': 'Trading Automation Learning Center',
            'description': 'Comprehensive tutorials and guides for learning trading automation',
            'educationalLevel': ['Beginner', 'Intermediate', 'Advanced'],
            'teaches': [
              'Trading Automation',
              'TradingView Integration', 
              'Webhook Configuration',
              'Risk Management',
              'Prop Trading Strategies'
            ],
            'learningResourceType': ['Tutorial', 'Documentation', 'Guide'],
            'provider': {
              '@type': 'Organization',
              'name': 'Atomik Trading',
              'url': 'https://atomiktrading.io'
            }
          },
          {
            '@type': 'TechArticle',
            '@id': 'https://atomiktrading.io/docs#documentation',
            'name': 'Atomik Trading Platform Documentation',
            'description': 'Technical documentation and API reference for the Atomik Trading platform',
            'about': {
              '@type': 'SoftwareApplication',
              'name': 'Atomik Trading Platform'
            },
            'audience': {
              '@type': 'Audience',
              'audienceType': ['Developers', 'Traders', 'Financial Professionals']
            }
          }
        ]
      }),
    },
  ],
  
  themeConfig: {
    // Update social media metadata URLs
    metadata: [
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Atomik Trading Documentation & Learning Center'},
      {property: 'og:description', content: 'Complete documentation, tutorials, and guides for trading automation. From beginner tutorials to advanced reference materials for prop traders and automation experts.'},
      {property: 'og:image', content: 'https://atomiktrading.io/docs/img/atomik-social-card.png'}, // Updated URL
      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:site', content: '@atomiktrades'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // The navbar config stays the same
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'AtomikTrading Logo',
        src: 'img/atomik-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Guides',
              to: '/docs/category/guides',
            },
            {
              label: 'Policy',
              to: '/docs/category/policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X (Twitter)',
              href: 'https://x.com/atomiktrades',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@AtomikTrading',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@atomiktrading',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AtomikTrading.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.dracula,
    },
    // Algolia config remains but you'll need to update index later
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'atomiktrading',
      contextualSearch: true,
    }
  },
  
  plugins: [
  ],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '', // Change this to empty string
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        // Other settings remain the same
      },
    ],
  ],
};

module.exports = config;