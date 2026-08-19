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
- **AI Strategy Builder** — Describe a strategy in plain English; Atomik writes the Python, validates it, and backtests it
- **Backtesting** — Test strategies against up to two years of real futures data before risking money
- **Paper Trading** — A built-in simulated account ($100k virtual) running the same execution pipeline as live
- **Copy Trading** — Replicate your strategy across multiple accounts simultaneously
- **Strategy Marketplace** — Browse, subscribe to, or sell strategies with live-verified track records
- **AI Assistant & MCP** — ARIA in the dashboard, plus an [MCP connector](./guides/mcp-connector) so Claude can build and backtest strategies on your account
- **Real-Time Dashboard** — Chart, positions, P&L, and execution status live

## How It Works

```
1. Sign Up        → Create your account and choose a plan
2. Connect Account  → Link Tradovate/IB, or start on the built-in paper account
3. Create Webhook → Get a unique URL for receiving trading signals
4. Send Signals   → Configure TradingView alerts (or any source) to hit your webhook
5. Auto-Execute   → Atomik places trades on your broker account in milliseconds
```

## Supported Brokers

| Account | Markets | Connection |
|---------|---------|------------|
| **Tradovate** | Futures (ES, NQ, MNQ, MES, etc.) — including many prop/funded accounts | OAuth 2.0 |
| **Atomik Paper** | Simulated futures, live market data | Built in — one click |
| **Interactive Brokers** | Stocks, options, futures, forex | OAuth |
| **TopstepX** | Funded futures | API key (private beta) |

See the [Broker Connection Guide](./guides/broker-connection) for setup instructions and [Prop-Firm Accounts](./guides/prop-firms) for funded-account specifics.

## Subscription Tiers

| | Starter | Pro | Elite |
|---|---|---|---|
| **Price** | $89/mo | $129/mo | $349/mo |
| **Broker Accounts** | 3 | 10 | 25 |
| **Webhooks** | 3 | 10 | Unlimited |
| **Trade Execution** | Yes | Yes | Yes |
| **Copy Trading** | No | 3 groups | Unlimited |
| **Marketplace** | Subscribe + Sell | Subscribe + Sell | Subscribe + Sell |
| **Money-Back Guarantee** | 7 days | 7 days | 7 days |

There is no free trial — every plan is full access from day one with a 7-day money-back guarantee. See [Subscription & Pricing](./guides/subscription-pricing) for full details including yearly discounts.

## What's in These Docs

### Guides
- **[Your First Automated Trade](./guides/first-trade)** — Step-by-step beginner walkthrough
- **[Broker Connection](./guides/broker-connection)** — Connect and manage broker accounts
- **[Paper Trading](./guides/paper-trading)** — The built-in simulated account
- **[Prop-Firm Accounts](./guides/prop-firms)** — Automate funded and evaluation accounts
- **[Webhook Setup](./guides/webhook-setup)** — Create webhooks and configure payloads
- **[Trading Strategies](./guides/trading-strategies)** — Strategy types, activation, and exits
- **[Strategy Builder](./guides/strategy-builder)** — AI-written strategies from plain English
- **[Backtesting](./guides/backtesting)** — How Atomik backtests work, honestly
- **[Copy Trading](./guides/copy-trading)** — Multi-account execution
- **[Marketplace](./guides/marketplace)** — Browse, subscribe, and sell strategies
- **[MCP Connector](./guides/mcp-connector)** — Use Claude to build strategies on your account
- **[Security](./guides/security)** — Account and webhook security best practices
- **[Subscription & Pricing](./guides/subscription-pricing)** — Plans, billing, and upgrades
- **[FAQ](./guides/faq)** — Common questions and troubleshooting

### Legal
- [Privacy Policy](./legal/privacy-policy)
- [Terms of Service](./legal/terms-of-service)
- [Cookie Policy](./legal/cookie-policy)

## Quick Start

The fastest path to your first automated trade:

1. [Create an account](https://atomiktrading.io) and pick a plan (7-day money-back guarantee)
2. [Connect your broker](./guides/broker-connection)
3. [Create a webhook](./guides/webhook-setup)
4. [Set up a TradingView alert](./guides/first-trade) pointing to your webhook
5. Watch the trade execute automatically

## Need Help?

- Browse the [FAQ](./guides/faq) for common questions
- Contact [support@atomiktrading.io](mailto:support@atomiktrading.io)
