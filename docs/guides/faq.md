---
sidebar_position: 9
title: "FAQ"
description: "Frequently asked questions about Atomik Trading — account setup, webhooks, broker connections, subscriptions, and troubleshooting."
keywords: ["Atomik FAQ", "trading automation FAQ", "webhook help", "broker connection help", "subscription help"]
---

# Frequently Asked Questions

## Account & Getting Started

### How do I create an account?

Go to [atomiktrading.io](https://atomiktrading.io), click **Get Started**, choose a plan, and complete the Stripe checkout. Your account is immediately activated.

### Is there a free trial?

Yes. All paid plans (Starter, Trader, Unlimited) include a **7-day free trial** with full access. Cancel anytime during the trial and you won't be charged.

### What brokers do you support?

- **Tradovate** — Futures (ES, NQ, MNQ, MES, etc.)
- **Interactive Brokers** — Stocks, Options, Futures, Forex
- **Binance** — Crypto spot and futures
- **Polymarket** — Prediction markets

See the [Broker Connection Guide](./broker-connection) for setup instructions.

### Can I use Atomik with a demo/paper trading account?

Yes. When connecting Tradovate, you can choose "Demo" environment. We strongly recommend testing with paper trading before going live.

## Webhooks

### My webhook fires but no trade executes. What's wrong?

Check these in order:

1. **Webhook logs** — Go to your webhook's Logs tab to see if the request arrived and any error messages
2. **Secret key** — Verify the secret in your TradingView URL matches the webhook secret
3. **Activated strategy** — Confirm a strategy is active and linked to a broker account for this webhook
4. **Broker connection** — Ensure the linked broker account is connected and active
5. **Subscription status** — Your subscription must be active or trialing

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

For API-based brokers (IB, Binance): Verify your API credentials haven't expired or been revoked.

### Can Atomik withdraw funds from my broker account?

No. Atomik's broker access is limited to the **trading** scope — it can place/cancel orders and read balances/positions. It cannot transfer funds, change settings, or access other accounts.

### I hit my account limit. What do I do?

Either disconnect an unused account or upgrade your plan:
- Starter: 2 accounts
- Trader: 10 accounts
- Unlimited: No limit

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

You need Trader tier or higher plus a Stripe Connect account:
1. Go to **Settings > Creator**
2. Set up Stripe Connect
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

Contact [support@atomiktrading.io](mailto:support@atomiktrading.io) within 30 days for refund requests.

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

## Still Need Help?

- Browse the other [guides](/docs/intro) in this documentation
- Email [support@atomiktrading.io](mailto:support@atomiktrading.io)
