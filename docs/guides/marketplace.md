---
sidebar_position: 6
title: "Strategy Marketplace"
description: "Browse, subscribe to, and sell trading strategies on the Atomik Trading marketplace. Guide for both buyers and creators."
keywords: ["strategy marketplace", "buy trading strategy", "sell trading strategy", "Stripe Connect", "creator monetization"]
---

# Strategy Marketplace

The Atomik Marketplace is where traders discover strategies and creators monetize their edge. Subscribers can activate published strategies on their own broker accounts, and creators earn recurring revenue from subscriptions.

## For Subscribers

### Browsing Strategies

1. Go to **Marketplace** in the dashboard
2. Browse by category, performance, or popularity
3. Click on a strategy to see details: description, performance history, and pricing

### Subscribing to a Strategy

1. Click **Subscribe** on the strategy page
2. **Free strategies**: Instant activation — no payment required
3. **Paid strategies**: Complete Stripe checkout, then the strategy is activated
4. Go to **Strategies** to link the subscribed strategy to your broker account

Once subscribed, signals from the creator's webhook automatically execute on your linked broker account.

### Managing Subscriptions

View and manage your marketplace subscriptions in **Strategies**:

- **Activate/Deactivate**: Toggle execution on or off without unsubscribing
- **Change broker account**: Switch which account executes the strategy
- **Unsubscribe**: Stop receiving signals entirely

### Tier Requirements

| Action | Required Tier |
|--------|--------------|
| Browse marketplace | Any (including Free) |
| Subscribe to strategies | Starter ($49/mo) or higher |
| Sell strategies | Trader ($129/mo) or higher |

## For Creators

### Publishing a Strategy

To sell strategies on the marketplace, you need:

1. **Trader tier or higher** subscription
2. **Stripe Connect** account (for receiving payments)

**Setup:**

1. Go to **Settings > Creator** in the dashboard
2. Click **Set Up Stripe Connect** and complete the Stripe onboarding
3. Once connected, go to **Strategies > Publish**
4. Configure your listing:
   - **Name and description** — What the strategy does
   - **Pricing** — Free, monthly subscription, or yearly subscription
   - **Trial** — Optionally offer a free trial period
5. Publish — your strategy appears in the marketplace

### Pricing Your Strategy

You set the price — Atomik takes a platform fee based on your creator tier:

| Creator Tier | Subscriber Range | Platform Fee | You Keep |
|-------------|-----------------|-------------|----------|
| **Bronze** | 0–99 subscribers | 20% | 80% |
| **Silver** | 100–199 subscribers | 15% | 85% |
| **Gold** | 200+ subscribers | 10% | 90% |

Your creator tier upgrades automatically as your subscriber count grows. Payouts are handled through Stripe Connect.

**Example:** If you charge $29/month and have 50 subscribers (Bronze tier):
- Gross: $1,450/month
- Platform fee (20%): $290
- Your payout: $1,160/month

### Creator Tier Benefits

| | Bronze | Silver | Gold |
|---|---|---|---|
| **Platform Fee** | 20% | 15% | 10% |
| **Dashboard** | Basic | Enhanced analytics | Advanced analytics |
| **Support** | Standard | Priority | Premium |
| **Payouts** | Standard | Faster | Instant |
| **Listing** | Standard | Standard | Featured placement |

### Managing Your Strategies

In **Settings > Creator**, you can:

- View subscriber counts and earnings
- Update pricing and descriptions
- Enable/disable listings
- Track payout history

## How It Works (Under the Hood)

When a subscriber activates a marketplace strategy:

1. An **activated strategy** is created linking the creator's webhook to the subscriber's broker account
2. When the creator's webhook fires, signals go to **all subscribers** who have the strategy active
3. Each subscriber's trade executes independently with their own position sizing
4. The creator never has access to subscriber accounts or positions

## Best Practices

### For Subscribers
- **Review strategy history** before subscribing to paid strategies
- **Start with free strategies** to understand how marketplace execution works
- **Use small position sizes** initially until you trust the strategy's signals
- **Monitor execution** — check that signals match your expectations

### For Creators
- **Write clear descriptions** — explain what the strategy does, what instruments it trades, and expected risk
- **Price competitively** — check what similar strategies charge
- **Maintain your strategy** — subscribers expect consistent signal quality
- **Offer a free trial** — it builds trust and increases conversions

## Next Steps

- [Trading Strategies](./trading-strategies) — How activated strategies work
- [Copy Trading](./copy-trading) — Scale marketplace strategies across accounts
- [Subscription & Pricing](./subscription-pricing) — Tier requirements for marketplace access
