// docusaurus.config.js
const config = {
  title: 'AtomikTrading Documentation',
  tagline: 'Professional Trading Automation Platform',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://docs.atomiktrading.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',
  
  // GitHub pages deployment config
  organizationName: 'atomiktrading',
  projectName: 'docs',
  
  // SEO optimization settings
  trailingSlash: false, // Better for SEO to avoid duplicate content
  noIndex: false, // Ensure search engines index your site
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',
  
  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  // Enhanced metadata for SEO
  headTags: [
    // Standard meta tags
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
    // Favicon enhancements for different devices
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/img/apple-touch-icon.png',
        sizes: '180x180',
      },
    },
    // Structured data for better search results
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'AtomikTrading Documentation',
        'url': 'https://docs.atomiktrading.io',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://docs.atomiktrading.io/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }),
    },
  ],
  
  // Theme configuration for dark mode only
  themeConfig: {
    // SEO metadata for social media sharing
    metadata: [
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'AtomikTrading Documentation'},
      {property: 'og:description', content: 'Professional-grade webhook-based trading automation platform. Connect your favorite broker and automate your trading strategies with ease.'},
      {property: 'og:image', content: 'https://docs.atomiktrading.io/img/atomik-social-card.png'},
      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:site', content: '@atomiktrades'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // The rest of your theme config
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
    // Apply your dark theme
    prism: {
      theme: require('prism-react-renderer').themes.dracula,
    },
    // Enhance SEO for search engines
    algolia: {
      // If you decide to use Algolia DocSearch
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'atomiktrading',
      contextualSearch: true,
    }
  },
  
  // Plugins for enhanced SEO
  plugins: [
  ],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          // Add SEO-friendly metadata to document pages
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          // Add author pages
          authorsMapPath: 'blog/authors.yml',
          // Create blog archive pages
          blogArchiveComponent: '@theme/BlogArchivePage',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Enable SEO-friendly sitemap
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