/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description:
          'Accounts, brokers, and your first automated trade — start on paper, go live when it works.',
        slug: '/category/getting-started',
      },
      items: [
        'guides/first-trade',
        'guides/broker-connection',
        'guides/paper-trading',
        'guides/prop-firms',
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Automation',
        description:
          'Signals in, executions out: webhooks, strategy activation, and multi-account copy trading.',
        slug: '/category/automation',
      },
      items: [
        'guides/webhook-setup',
        'guides/connect-any-indicator',
        'guides/trading-strategies',
        'guides/copy-trading',
      ],
    },
    {
      type: 'category',
      label: 'Build & Test',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Build & Test',
        description:
          'From idea to validated, backtested strategy — with AI, your own Python, or Claude via MCP.',
        slug: '/category/build-and-test',
      },
      items: [
        'guides/strategy-builder',
        'guides/backtesting',
        'guides/mcp-connector',
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      items: [
        'guides/marketplace',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      link: {
        type: 'generated-index',
        title: 'Account',
        description: 'Plans and billing, security, and answers to common questions.',
        slug: '/category/account',
      },
      items: [
        'guides/subscription-pricing',
        'guides/security',
        'guides/faq',
      ],
    },
    {
      type: 'category',
      label: 'Compare',
      link: {
        type: 'generated-index',
        title: 'Compare',
        description:
          'Honest, dated comparisons with the other TradingView automation tools.',
        slug: '/category/compare',
      },
      items: [
        'compare/atomik-vs-pickmytrade',
        {
          // Moved to the main site 2026-09-15 (nginx.conf 301s the old URL).
          type: 'link',
          label: 'Atomik vs TradersPost',
          href: 'https://atomiktrading.io/compare/atomik-vs-traderspost',
        },
        'compare/best-tradingview-automation-tools',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
        'legal/cookie-policy',
        'legal/risk-disclosure',
        'legal/testimonial-disclosure',
        'legal/affiliate-terms',
      ],
    },
  ],
};

module.exports = sidebars;
