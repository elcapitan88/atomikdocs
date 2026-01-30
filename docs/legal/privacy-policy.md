---
sidebar_position: 1
---

# Privacy Policy

*Last updated: January 30, 2026*

## 1. Introduction

Atomik Trading LLC ("Atomik Trading," "we," "our," or "us") operates the Atomik Trading platform, a trade automation service that enables users to connect trading alerts to brokerage and exchange accounts. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you access or use our website at atomiktrading.io, our platform, and any related services (collectively, the "Service").

By creating an account or using the Service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with these practices, please do not use the Service.

## 2. Information We Collect

### 2.1 Information You Provide

- **Account Information:** Name, email address, username, and password when you register for an account. Passwords are stored as cryptographic hashes — we do not store your actual password in plain text.
- **Payment Information:** Billing details processed through Stripe, our third-party payment processor. We do not store your full credit card number, CVV, or complete payment card details on our servers. Stripe handles all payment data in accordance with PCI-DSS standards.
- **Broker Connection Data:** API keys and authentication credentials you provide to connect your brokerage or exchange accounts (e.g., Tradovate, NinjaTrader, Binance, Apex). These credentials are encrypted at rest using AES-256 encryption.
- **Trading Configuration:** Webhook URLs, alert configurations, strategy settings, and automation rules you create on the platform.
- **Marketplace Profile Information:** If you participate as a creator in our Strategy Marketplace, additional profile information you choose to provide, such as a bio or trading description.
- **Communications:** Information you provide when contacting our support team or participating in our Discord community.

### 2.2 Information Collected Automatically

- **Usage Data:** Pages visited, features used, actions taken within the platform, session duration, and interaction patterns.
- **Trade Execution Logs:** Records of automated trade executions processed through the platform, including timestamps, order details, and execution status.
- **Device and Browser Information:** IP address, browser type and version, operating system, device identifiers, and screen resolution.
- **Cookies and Tracking Technologies:** See Section 6 for details on our cookie practices.
- **Log Data:** Server logs including access times, referring URLs, and error reports.

### 2.3 Information from Third Parties

- **Broker and Exchange Data:** Account status, balance information, and trade execution confirmations received through connected broker APIs.
- **Authentication Providers:** If you sign in through a third-party authentication service, we receive basic profile information as authorized by that service.

## 3. How We Use Your Information

We use the information we collect to:

- **Provide the Service:** Process and route trade executions, manage webhook connections, and operate the automation platform.
- **Maintain Your Account:** Manage registration, authentication, billing, and subscription status.
- **Operate the Marketplace:** Facilitate connections between strategy creators and subscribers. Note that if you subscribe to a creator's strategy, the creator may see your name and email address.
- **Improve the Service:** Analyze usage patterns to identify bugs, optimize performance, and develop new features.
- **Communicate with You:** Send transactional emails including account confirmations, trade notifications, security alerts, billing receipts, and service updates.
- **Ensure Security:** Detect, prevent, and respond to fraud, unauthorized access, and other security incidents.
- **Comply with Legal Obligations:** Maintain records as required by applicable laws and regulations, respond to legal requests, and enforce our Terms of Service.

We do **not** use your information to provide investment advice, recommend securities, or make trading decisions on your behalf.

## 4. How We Share Your Information

We do not sell your personal information. We share your information only in the following circumstances:

### 4.1 Service Providers

We share information with third-party service providers who assist us in operating the platform:

| Provider | Purpose | Data Shared |
|----------|---------|-------------|
| **Stripe** | Payment processing | Billing name, email, payment method details |
| **Railway** | Application hosting and database (PostgreSQL) | All platform data (encrypted in transit and at rest) |
| **DigitalOcean** | Infrastructure hosting | Limited operational data |
| **Google Analytics** | Website analytics | Anonymized usage data, IP address (anonymized), page views |
| **BetterStack** | Platform monitoring and uptime tracking | Server logs, error reports, performance metrics |
| **Discord** | Community communication | Username and messages you post in our Discord server |

### 4.2 Broker and Exchange APIs

When you connect a broker or exchange account, your API credentials are transmitted securely to the respective broker to execute trades on your behalf. We send only the data necessary for trade execution. Each broker or exchange has its own privacy policy governing data it receives.

### 4.3 Strategy Marketplace

If you subscribe to a strategy in our Marketplace, the strategy creator can view your name and email address. Creators are bound by our Terms of Service and may not use subscriber data for purposes outside the Atomik platform.

### 4.4 Legal Requirements

We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.

### 4.5 Business Transfers

If Atomik Trading is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change via email or prominent notice on our platform.

## 5. Data Security

We implement the following security measures to protect your information:

- **Encryption at Rest:** Broker API keys and sensitive credentials are encrypted using AES-256 encryption before being stored in our database.
- **Encryption in Transit:** All data transmitted between your browser and our servers is protected by TLS (Transport Layer Security) encryption.
- **Authentication:** We support two-factor authentication (2FA) for account access.
- **Access Controls:** Employee and system access to user data is restricted on a need-to-know basis.
- **Infrastructure Security:** Our hosting providers (Railway, DigitalOcean) maintain their own security certifications and physical security controls.
- **Monitoring:** We use BetterStack for real-time platform monitoring and incident detection.

While we implement commercially reasonable security measures, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security of your data.

## 6. Cookies and Tracking Technologies

### 6.1 Cookies We Use

- **Essential Cookies:** Required for the platform to function, including session management and authentication. These cannot be disabled.
- **Analytics Cookies:** Google Analytics cookies that help us understand how users interact with our website. These collect anonymized data about page views, session duration, and user flow.

### 6.2 Managing Cookies

You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may prevent the platform from functioning properly.

### 6.3 Do Not Track

We do not currently respond to "Do Not Track" browser signals, as there is no industry-standard interpretation of this signal.

## 7. Data Retention

We retain your information for the following periods:

- **Account Data:** Retained for as long as your account is active. Upon account deletion, personal information is removed within 30 days, except as required by law.
- **Trade Execution Records:** Retained for a minimum of **5 years** from the date of the activity, in accordance with applicable financial recordkeeping requirements.
- **Webhook and Automation Logs:** Retained for a minimum of **5 years** from the date of the activity.
- **Billing Records:** Retained for a minimum of **7 years** for tax and accounting compliance.
- **Server Logs:** Retained for up to **12 months** for security and debugging purposes, then deleted or anonymized.

After the applicable retention period, data is either permanently deleted or anonymized so that it can no longer be associated with you.

## 8. Your Rights

Depending on your location, you may have the following rights regarding your personal information:

### 8.1 All Users

- **Access:** Request a copy of the personal data we hold about you.
- **Correction:** Request correction of inaccurate or incomplete data.
- **Deletion:** Request deletion of your personal data, subject to our legal retention obligations described in Section 7.
- **Data Export:** Request a machine-readable export of your data.
- **Opt-Out of Marketing:** Unsubscribe from marketing emails at any time using the link in any marketing email or by contacting us.
- **Revoke Broker Access:** Disconnect your broker API keys at any time through your account settings.

### 8.2 European Economic Area (EEA) and UK Residents

If you are located in the EEA or UK, you have additional rights under the General Data Protection Regulation (GDPR):

- **Legal Basis:** We process your data based on: (a) contract performance (to provide the Service), (b) legitimate interests (to improve the Service and ensure security), and (c) your consent (for analytics cookies and marketing communications).
- **Right to Restrict Processing:** Request that we limit how we use your data.
- **Right to Object:** Object to processing based on legitimate interests.
- **Right to Portability:** Receive your data in a structured, machine-readable format.
- **Right to Withdraw Consent:** Withdraw consent at any time where processing is based on consent.
- **Right to Lodge a Complaint:** File a complaint with your local data protection authority.

**International Transfers:** Your data is stored on servers in the United States. If you are located outside the US, your data will be transferred to the US for processing. We rely on standard contractual clauses and other lawful transfer mechanisms to ensure your data is protected in accordance with this Privacy Policy.

### 8.3 California Residents

If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with additional rights:

- **Right to Know:** Request details about the categories and specific pieces of personal information we have collected about you.
- **Right to Delete:** Request deletion of personal information we have collected, subject to legal exceptions.
- **Right to Non-Discrimination:** We will not discriminate against you for exercising your CCPA rights.
- **Shine the Light:** You may request information about any disclosure of personal information to third parties for their direct marketing purposes.

We do **not** sell personal information as defined under the CCPA.

To exercise any of these rights, contact us at support@atomiktrading.io. We will respond to verified requests within 30 days (or 45 days if an extension is necessary, with notice).

## 9. Children's Privacy

The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from anyone under 18. If we discover that we have collected information from a person under 18, we will delete that information promptly. If you believe a minor has provided us with personal information, please contact us at support@atomiktrading.io.

## 10. Third-Party Links

The Service may contain links to third-party websites or services, including broker platforms, TradingView, and our documentation site. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party service you access through or in connection with the platform.

## 11. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:

- Update the "Last updated" date at the top of this page.
- Notify you by email or by posting a prominent notice on the platform prior to the changes taking effect.

Your continued use of the Service after any changes indicates your acceptance of the updated Privacy Policy.

## 12. Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, contact us at:

- **Email:** support@atomiktrading.io
- **Company:** Atomik Trading LLC

For data protection inquiries from the EEA or UK, you may also contact us at the email address above with the subject line "GDPR Request."
