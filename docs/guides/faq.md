---
sidebar_position: 9
title: "FAQ"
description: "Frequently asked questions about Atomik Trading — account setup, webhooks, broker connections, subscriptions, and troubleshooting."
keywords: ["Atomik FAQ", "trading automation FAQ", "webhook help", "broker connection help", "subscription help"]
---

# Frequently Asked Questions

## Account & Getting Started

### How do I create an account?

Go to [atomiktrading.io](https://atomiktrading.io), click **Get Started**, choose a plan, and complete checkout. Your account is immediately activated.

### Is there a free trial?

No — Atomik doesn't offer a free trial. Instead, every plan (Starter, Pro, Elite) is **full access from day one with a 7-day money-back guarantee**: if it's not for you, email [support@atomiktrading.io](mailto:support@atomiktrading.io) within 7 days of your first charge for a full refund.

### What brokers do you support?

- **Tradovate** — Futures (ES, NQ, MNQ, MES, etc.) — the most-used broker on Atomik, and the route in for many prop/funded accounts
- **Atomik Paper** — built-in simulated account, no broker needed
- **Interactive Brokers** — Stocks, options, futures, forex
- **TopstepX** — Funded futures accounts (private beta)

See the [Broker Connection Guide](./broker-connection) for setup instructions.

### Can I use Atomik with a demo/paper trading account?

Yes, two ways: the built-in **Atomik Paper** account ($100k virtual funds, one click, no broker — see [Paper Trading](./paper-trading)), or Tradovate's **Demo** environment when connecting Tradovate. We strongly recommend testing on paper before going live.

### Can Atomik work with my prop firm / funded account?

If your funded account comes with a Tradovate login — as many futures prop programs provide — it connects like any Tradovate account. Direct TopstepX connection is in private beta. See [Prop-Firm Accounts](./prop-firms).

## Webhooks

### My webhook fires but no trade executes. What's wrong?

Check these in order:

1. **Webhook logs** — Go to your webhook's Logs tab to see if the request arrived and any error messages
2. **Secret key** — Verify the secret in your TradingView URL matches the webhook secret
3. **Activated strategy** — Confirm a strategy is active and linked to a broker account for this webhook
4. **Broker connection** — Ensure the linked broker account is connected and active
5. **Subscription status** — Your subscription must be active

### I'm getting duplicate trades. How do I fix this?

Atomik has a 1-second idempotency window that prevents most duplicates. If you're still seeing them:

- Set TradingView alerts to **"Once Per Bar Close"** instead of "Every Tick"
- Check that you don't have multiple alerts pointing to the same webhook
- Review your Pine Script for conditions that might fire multiple times per bar

### What payload format does the webhook expect?

```json
{
  "action": "BUY",
  "comment": "EXIT_50"
}
```

- `action` (required): `"BUY"` or `"SELL"`
- `comment` (optional): Exit type like `EXIT_50`, `EXIT_25`, `EXIT_FINAL`, or `ENTRY`

See the [Webhook Setup Guide](./webhook-setup) for full payload documentation.

### What are the rate limits?

Webhooks allow **10 requests per second**. Exceeding this returns `429 Too Many Requests`.

### Can I use webhooks from sources other than TradingView?

Yes. Any system that can send an HTTP POST request with a JSON body can trigger an Atomik webhook. This includes custom scripts, other trading platforms, and automation tools like Zapier.

## Broker Connections

### My broker connection keeps disconnecting.

For Tradovate: The Token Refresh Service automatically keeps connections alive. If it still disconnects, try:
1. Disconnect the account in Settings
2. Clear browser cookies
3. Reconnect via OAuth

For other connections: reconnect via OAuth (IB) or verify your API key hasn't been revoked (TopstepX).

### Can Atomik withdraw funds from my broker account?

No. Atomik's broker access is limited to the **trading** scope — it can place/cancel orders and read balances/positions. It cannot transfer funds, change settings, or access other accounts.

### I hit my account limit. What do I do?

Either disconnect an unused account or upgrade your plan:
- Starter: 3 accounts
- Pro: 10 accounts
- Elite: 25 accounts

## Strategies & Trading

### What's an "activated strategy"?

An activated strategy links a signal source (webhook or marketplace subscription) to a specific broker account. When a signal arrives, Atomik executes the trade on that account using the configured position size.

### How do partial exits work?

Use the `comment` field in your webhook payload:
- `EXIT_50` — Close 50% of your position
- `EXIT_25` — Close 25%
- `EXIT_FINAL` — Close 100%

Quantities round up (e.g., `EXIT_50` on 7 contracts = exits 4).

### Can I run the same strategy on multiple accounts?

Yes — this is [copy trading](./copy-trading). Activate the same webhook on multiple broker accounts, and signals execute on all of them. The leader account trades first; followers batch in 100ms windows.

## Marketplace

### How do I subscribe to a marketplace strategy?

Go to **Marketplace**, find a strategy, and click **Subscribe**. Free strategies activate instantly. Paid strategies require Stripe checkout first. Then link the strategy to your broker account in **Strategies**.

Requires Starter tier or higher.

### How do I sell my strategy?

Every plan can sell on the marketplace. You need a creator profile with payouts set up:
1. Go to **Settings > Creator** and complete creator onboarding
2. Set up payouts
3. Publish your strategy with pricing

See the [Marketplace Guide](./marketplace) for full details.

### What are the creator commission tiers?

| Tier | Subscribers | Platform Fee |
|------|-----------|-------------|
| Bronze | 0–99 | 20% |
| Silver | 100–199 | 15% |
| Gold | 200+ | 10% |

Your tier upgrades automatically as subscriber count grows.

## Billing & Subscriptions

### How do I upgrade or downgrade my plan?

Go to **Settings > Billing > Manage Subscription**. Upgrades take effect immediately (prorated). Downgrades apply at the next billing date.

### What happens if my payment fails?

You get a grace period with full access while we retry. If unresolved, you'll receive warning emails, and eventually your account is suspended. Update your payment method in Settings to restore access immediately.

### Can I get a refund?

Every plan has a **7-day money-back guarantee**: email [support@atomiktrading.io](mailto:support@atomiktrading.io) within 7 days of your first charge for a full refund. For billing problems outside that window (duplicate charges, errors), contact support and we'll make it right.

### Do yearly plans auto-renew?

Yes. Cancel anytime before renewal through the billing portal.

## Security

### How is my data protected?

- Broker OAuth tokens are stored encrypted
- All communication uses HTTPS/TLS
- Webhook secrets are hashed after initial display
- JWT access tokens expire after 90 minutes

### What should I do if my account is compromised?

1. Change your password immediately
2. Delete or regenerate all webhook secrets
3. Disconnect all broker accounts
4. Enable 2FA
5. Contact [support@atomiktrading.io](mailto:support@atomiktrading.io)

See the [Security Guide](./security) for full details.

## Strategy Builder & AI

### Can Atomik write a trading strategy for me?

Yes — the [Strategy Builder](./strategy-builder) turns a plain-English description into working Python strategy code, validates it, and backtests it against up to two years of real market data. Building costs 3 AI credits, adjustments cost 1, and questions about your strategy are always free.

### Can I use Claude or another AI assistant with Atomik?

Yes. Atomik has an [MCP connector](./mcp-connector) — connect it to Claude and your AI can write, validate, backtest, and save Atomik strategies directly from a chat, using your account's quotas. Going live always happens in the Atomik app, never from chat.

### Can I run my own Python strategy on Atomik?

Yes — choose **Engine Strategy** in the dashboard's Create flow, or write it in the [Strategy Builder](./strategy-builder). Your code is validated in the same sandbox the live engine runs, backtested, and can then be activated on a paper or live account. See [Trading Strategies](./trading-strategies).

## Still Need Help?

- Browse the other [guides](/intro) in this documentation
- Email [support@atomiktrading.io](mailto:support@atomiktrading.io)
