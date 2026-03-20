// docusaurus.config.js
const config = {
  title: 'Atomik Trading Documentation & Learning Center',
  tagline: 'Complete Documentation, Tutorials & Guides for Trading Automation',
  favicon: 'img/favicon.png',
  
  url: 'https://docs.atomiktrading.io',
  baseUrl: '/',
  
  // GitHub pages deployment config
  organizationName: 'atomiktrading',
  projectName: 'docs',
  
  // SEO settings remain the same
  trailingSlash: false,
  noIndex: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  
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
        href: '/img/apple-touch-icon.png',
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
            '@id': 'https://docs.atomiktrading.io#website',
            'name': 'Atomik Trading Documentation & Learning Center',
            'url': 'https://docs.atomiktrading.io',
            'description': 'Complete documentation, tutorials, and guides for trading automation',
            'publisher': {
              '@type': 'Organization',
              'name': 'Atomik Trading'
            },
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://docs.atomiktrading.io/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@type': 'LearningResource',
            '@id': 'https://docs.atomiktrading.io#learning-resource',
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
            '@id': 'https://docs.atomiktrading.io#documentation',
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
      {property: 'og:image', content: 'https://docs.atomiktrading.io/img/docusaurus-social-card.jpg'},
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
              to: '/intro',
            },
            {
              label: 'First Trade Guide',
              to: '/guides/first-trade',
            },
            {
              label: 'Broker Setup',
              to: '/guides/broker-connection',
            },
            {
              label: 'Webhook Setup',
              to: '/guides/webhook-setup',
            },
            {
              label: 'Marketplace',
              to: '/guides/marketplace',
            },
            {
              label: 'FAQ',
              to: '/guides/faq',
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
  },
  
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: true,
        indexDocs: true,
        docsRouteBasePath: '/',
      },
    ],
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