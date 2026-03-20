---
sidebar_position: 1
title: "Introduction to Atomik Trading"
description: "Overview of Atomik Trading's webhook-based trading automation platform. Learn about key features, supported brokers, and how to get started."
keywords: ["Atomik Trading", "trading automation", "webhook trading", "automated trading platform", "copy trading"]
---

# Introduction to Atomik Trading

Welcome to Atomik Trading — a webhook-based trading automation platform that connects your strategies to your broker accounts for hands-free execution.

## What is Atomik Trading?

Atomik Trading receives trading signals from platforms like TradingView (via webhooks) and automatically executes them on your connected broker accounts. You keep full control of your strategy — Atomik handles the execution.

**Core capabilities:**

- **Webhook Automation** — Receive signals from TradingView or any HTTP source and execute trades instantly
- **Multi-Broker Support** — Connect Tradovate, Interactive Brokers, Binance, and Polymarket
- **Copy Trading** — Replicate your strategy across multiple accounts simultaneously
- **Strategy Marketplace** — Browse, subscribe to, or sell trading strategies
- **Real-Time Dashboard** — Monitor positions, P&L, and execution status live
- **ARIA AI Assistant** — Get trading insights and platform help from an AI assistant

## How It Works

```
1. Sign Up        → Create your account and choose a plan
2. Connect Broker → Link your Tradovate, IB, Binance, or Polymarket account
3. Create Webhook → Get a unique URL for receiving trading signals
4. Send Signals   → Configure TradingView alerts (or any source) to hit your webhook
5. Auto-Execute   → Atomik places trades on your broker account in milliseconds
```

## Supported Brokers

| Broker | Markets | Connection |
|--------|---------|------------|
| **Tradovate** | Futures (ES, NQ, MNQ, etc.) | OAuth 2.0 |
| **Interactive Brokers** | Stocks, Options, Futures, Forex | API Key |
| **Binance** | Crypto spot and futures | API Key |
| **Polymarket** | Prediction markets | API Key |

See [Broker Connection Guide](./guides/broker-connection) for setup instructions.

## Subscription Tiers

| | Free | Starter | Trader | Unlimited |
|---|---|---|---|---|
| **Price** | $0 | $49/mo | $129/mo | $249/mo |
| **Broker Accounts** | 0 | 2 | 10 | Unlimited |
| **Webhooks** | 0 | 3 | 10 | Unlimited |
| **Trade Execution** | No | Yes | Yes | Yes |
| **Marketplace** | No | Subscribe | Subscribe + Sell | Subscribe + Sell |
| **Free Trial** | — | 7 days | 7 days | 7 days |

All paid plans include a 7-day free trial. See [Subscription & Pricing](./guides/subscription-pricing) for full details including yearly discounts.

## What's in These Docs

### Guides
- **[Your First Automated Trade](./guides/first-trade)** — Step-by-step beginner walkthrough
- **[Broker Connection](./guides/broker-connection)** — Connect and manage broker accounts
- **[Webhook Setup](./guides/webhook-setup)** — Create webhooks and configure payloads
- **[Trading Strategies](./guides/trading-strategies)** — Strategy types, activation, and exits
- **[Copy Trading](./guides/copy-trading)** — Multi-account execution
- **[Marketplace](./guides/marketplace)** — Browse, subscribe, and sell strategies
- **[Security](./guides/security)** — Account and webhook security best practices
- **[Subscription & Pricing](./guides/subscription-pricing)** — Plans, billing, and upgrades
- **[FAQ](./guides/faq)** — Common questions and troubleshooting

### Legal
- [Privacy Policy](./legal/privacy-policy)
- [Terms of Service](./legal/terms-of-service)
- [Cookie Policy](./legal/cookie-policy)

## Quick Start

The fastest path to your first automated trade:

1. [Create an account](https://atomiktrading.io) and start your free trial
2. [Connect your broker](./guides/broker-connection)
3. [Create a webhook](./guides/webhook-setup)
4. [Set up a TradingView alert](./guides/first-trade) pointing to your webhook
5. Watch the trade execute automatically

## Need Help?

- Browse the [FAQ](./guides/faq) for common questions
- Contact [support@atomiktrading.io](mailto:support@atomiktrading.io)
