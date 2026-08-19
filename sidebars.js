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
      items: [
        'guides/webhook-setup',
        'guides/trading-strategies',
        'guides/copy-trading',
      ],
    },
    {
      type: 'category',
      label: 'Build & Test',
      collapsed: false,
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
      items: [
        'guides/subscription-pricing',
        'guides/security',
        'guides/faq',
      ],
    },
    {
      type: 'category',
      label: 'Compare',
      items: [
        'compare/atomik-vs-pickmytrade',
        'compare/atomik-vs-traderspost',
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
      ],
    },
  ],
};

module.exports = sidebars;
