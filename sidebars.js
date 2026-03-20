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
        'guides/webhook-setup',
        'guides/trading-strategies',
        'guides/security',
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
      ],
    },
  ],
};

module.exports = sidebars;
