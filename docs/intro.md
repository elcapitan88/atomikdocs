---
sidebar_position: 1
title: "Introduction to Atomik Trading"
description: "Overview of Atomik Trading's webhook-based trading automation platform. Learn about key features, supported brokers, and how to get started."
keywords: ["Atomik Trading", "trading automation", "webhook trading", "automated trading platform", "copy trading"]
---

# Introduction to Atomik Trading

Welcome to Atomik Trading. Atomik runs automated trading strategies in a futures account in your name. The strategy you choose works the market. You go about your day.

## What is Atomik Trading?

You pick a strategy from the marketplace by its record, build your own with AI, or send signals from TradingView (via webhooks). Atomik places and closes the trades in your connected account, on its own servers, whether your laptop is open or not. The money stays at your broker, in your name, and you can switch any strategy off from your dashboard.

**Core capabilities:**

- **Webhook Automation** — Receive signals from TradingView or any HTTP source and execute trades instantly
- **AI Strategy Builder** — Describe a strategy in plain English; Atomik writes the Python, validates it, and backtests it
- **Backtesting** — Test strategies against up to two years of real futures data before risking money
- **Paper Trading** — A free simulated account ($100k virtual) running the same execution pipeline as live
- **Copy Trading** — Run one strategy across several of your accounts at once
- **Strategy Marketplace** — Browse, subscribe to, or sell strategies. Each has one record, with every trade from its live signals
- **AI Assistant & MCP** — ARIA in the dashboard, plus an [MCP connector](./guides/mcp-connector) so Claude can build and backtest strategies on your account
- **Real-Time Dashboard** — Chart, positions, P&L, and execution status live

## How It Works

```
1. Sign Up        → Start free on paper, or choose a plan
2. Connect Account  → Link Tradovate or TopstepX, or start on the built-in paper account
3. Create Webhook → Get a unique URL for receiving trading signals
4. Send Signals   → Configure TradingView alerts (or any source) to hit your webhook
5. Auto-Execute   → Atomik places trades on your broker account in milliseconds
```

## Supported Brokers

| Account | Markets | Connection |
|---------|---------|------------|
| **Tradovate** | Futures (ES, NQ, MNQ, MES, etc.) — including many prop/funded accounts | OAuth 2.0 |
| **Atomik Paper** | Simulated futures, live market data | Built in — one click |
| **Interactive Brokers** | Futures | Testing: it connects, but isn't available for automated orders yet |
| **TopstepX** | Funded futures | API key |

Topstep sets its own rules on automation, so check them before you switch anything on. See the [Broker Connection Guide](./guides/broker-connection) for setup instructions and [Prop-Firm Accounts](./guides/prop-firms) for funded-account specifics.

## Subscription Tiers

| | Free | Starter | Pro | Elite |
|---|---|---|---|---|
| **Price** | $0 | $89/mo | $129/mo | $349/mo |
| **Live Accounts** | — | 3 | 10 | 25 |
| **Paper Accounts** | 1 | 3 | 3 | 3 |
| **Webhooks** | — | 3 | 10 | Unlimited |
| **Trade Execution** | Paper only | Yes | Yes | Yes |
| **Copy Trading** | No | No | 3 groups | Unlimited |
| **Marketplace** | Subscribe (on paper) | Subscribe + Sell | Subscribe + Sell | Subscribe + Sell |
| **Money-Back Guarantee** | — | 7 days | 7 days | 7 days |

Try it on paper first, free and with no card. When you go live, every paid plan comes with a 7-day money-back guarantee. See [Subscription & Pricing](./guides/subscription-pricing) for full details, including yearly prices.

## What's in These Docs

### Guides
- **[Your First Automated Trade](./guides/first-trade)** — Step-by-step walkthrough, on a paper account
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

**Run a strategy from the marketplace:**

1. Open the [marketplace](https://atomiktrading.io/marketplace) and read a strategy's record
2. Click **Try it on paper** on a free one: free, no card
3. When you're ready to use your own account, pick a plan (7-day money-back guarantee) and [connect your broker](./guides/broker-connection)

**Send your own TradingView signals:**

1. [Create an account](https://atomiktrading.io) and pick a plan (webhooks come with the paid plans)
2. [Connect your broker](./guides/broker-connection), or use the built-in paper account
3. [Create a webhook](./guides/webhook-setup)
4. [Set up a TradingView alert](./guides/first-trade) pointing to your webhook
5. The trade is placed automatically

## Need Help?

- Browse the [FAQ](./guides/faq) for common questions
- Contact [support@atomiktrading.io](mailto:support@atomiktrading.io)
