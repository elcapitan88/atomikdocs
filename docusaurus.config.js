// docusaurus.config.js
const config = {
  title: 'AtomikTrading Documentation',
  tagline: 'Professional Trading Automation Platform',
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
        content: 'trading automation, copy trading, webhook trading, automated trading, trading bots, multi-account trading, futures trading, algorithmic trading',
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
    // Update structured data with new URL
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'AtomikTrading Documentation',
        'url': 'https://atomiktrading.io/docs', // Updated URL
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://atomiktrading.io/docs/search?q={search_term_string}', // Updated URL
          'query-input': 'required name=search_term_string'
        }
      }),
    },
  ],
  
  themeConfig: {
    // Update social media metadata URLs
    metadata: [
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'AtomikTrading Documentation'},
      {property: 'og:description', content: 'Professional-grade webhook-based trading automation platform. Connect your favorite broker and automate your trading strategies with ease.'},
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
          routeBasePath: 'docs', // This is already correct!
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          authorsMapPath: 'blog/authors.yml',
          blogArchiveComponent: '@theme/BlogArchivePage',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Update sitemap configuration
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
};

module.exports = config;