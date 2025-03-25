// docusaurus.config.js
const config = {
  title: 'AtomikTrading',
  tagline: 'Professional Trading Automation Platform',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://docs.atomiktrading.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',
  
  // GitHub pages deployment config
  organizationName: 'atomiktrading',
  projectName: 'docs',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  // Theme configuration for dark mode only
  themeConfig: {
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
          sidebarId: 'tutorialSidebar', // Change from 'mainSidebar' to 'tutorialSidebar'
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
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;