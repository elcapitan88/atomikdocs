/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Introduction
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    // Guides
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/first-trade',
        'guides/broker-connection',
        'guides/webhook-setup',
        'guides/trading-strategies',
        'guides/copy-trading',
        'guides/marketplace',
        'guides/security',
        'guides/subscription-pricing',
        'guides/faq',
      ],
    },
    // Comparisons
    {
      type: 'category',
      label: 'Compare',
      items: [
        'compare/atomik-vs-pickmytrade',
        'compare/atomik-vs-traderspost',
        'compare/best-tradingview-automation-tools',
      ],
    },
    // Legal
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
