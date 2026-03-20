---
sidebar_position: 4
title: "Trading Strategies Guide"
description: "Learn how to configure and manage trading strategies in Atomik Trading. Covers webhook-triggered strategies, marketplace strategies, position sizing, and partial exits."
keywords: ["trading strategies", "automated strategies", "webhook trading", "strategy marketplace", "copy trading", "partial exits"]
---

# Trading Strategies

Atomik Trading supports multiple ways to automate your trading. This guide covers how strategies work, how to configure them, and how to manage entries and exits.

## Strategy Types

### 1. Webhook-Triggered Strategies

The most common approach. You create a webhook, link it to a broker account via an **activated strategy**, and send signals from TradingView or any HTTP-capable platform.

**Flow:**
```
External Signal → Webhook → Activated Strategy → Broker Execution
```

See the [Webhook Setup Guide](./webhook-setup) for creating webhooks and configuring payloads.

### 2. Marketplace Strategies

Browse strategies published by other traders in the [Marketplace](./marketplace). When you subscribe to a marketplace strategy, it creates an activated strategy linked to your broker account — signals from the creator's webhook automatically execute on your account.

### 3. Strategy Engine (Real-Time)

Atomik's built-in Strategy Engine connects to live market data and evaluates strategy logic on every tick. When conditions are met, it sends execution signals directly to the backend — no webhook needed.

This is used for Atomik's proprietary strategies and is not yet available for custom user strategies.

## Activated Strategies

An **activated strategy** is the link between a signal source (webhook or marketplace subscription) and your broker account. It defines:

- Which webhook or strategy code generates the signals
- Which broker account receives the trades
- Whether the strategy is currently active

### Creating an Activated Strategy

1. Go to **Strategies** in the dashboard
2. Click **Activate Strategy**
3. Select the webhook (or marketplace strategy) to use as the signal source
4. Choose the broker account to trade on
5. Configure the quantity (number of contracts/shares per signal)
6. Toggle **Active** to start receiving trades

Only strategies marked as active will execute incoming signals. You can pause a strategy at any time by toggling it off.

## Position Sizing and Exits

### Entry Signals

When a `BUY` or `SELL` signal arrives with no existing position (or an `ENTRY` comment), Atomik opens a new position using the quantity configured on your activated strategy.

### Exit Signals

Exit signals use the `comment` field in the webhook payload to control how much of your position to close:

| Signal | Action |
|--------|--------|
| `{"action": "SELL", "comment": "EXIT_FINAL"}` | Close 100% of long position |
| `{"action": "SELL", "comment": "EXIT_50"}` | Close 50% of long position |
| `{"action": "SELL", "comment": "EXIT_25"}` | Close 25% of long position |
| `{"action": "BUY", "comment": "EXIT_FINAL"}` | Close 100% of short position |

### How Exit Logic Works

Atomik is position-aware:

- **BUY + no position or short position**: Opens a long (or covers a short)
- **SELL + long position**: Closes or partially exits the long
- **Exit signal + no position**: Skipped (prevents accidental reversal)

Partial exit quantities are rounded up with `math.ceil()`. For example, if you hold 7 contracts and send `EXIT_50`, it exits `ceil(7 * 0.5) = 4` contracts.

## Multi-Account Execution (Copy Trading)

If you have the same strategy activated across multiple broker accounts, signals execute on all of them:

- **Leader account**: Executes immediately with an account-level lock (30-second timeout)
- **Follower accounts**: Pooled in batches with a 100ms window, up to 10 concurrent orders

This lets you scale one strategy across multiple accounts without increasing per-account risk. See [Copy Trading](./copy-trading) for full details.

## Strategy Limits by Tier

| Tier | Active Strategies |
|------|------------------|
| Free | 0 |
| Starter ($49/mo) | 3 |
| Trader ($129/mo) | 10 |
| Unlimited ($249/mo) | Unlimited |

## Best Practices

1. **Start with paper trading** — Test your strategy on a demo account before going live
2. **Use partial exits** — Scale out of positions with `EXIT_50` / `EXIT_25` / `EXIT_FINAL` instead of all-or-nothing exits
3. **One webhook per strategy** — Keep signal sources clean and easy to debug
4. **Monitor webhook logs** — Check the logs tab on your webhook to verify signals are arriving and executing correctly
5. **Use "Once Per Bar Close"** in TradingView alerts to prevent duplicate signals within the same candle

## Next Steps

- [Webhook Setup](./webhook-setup) — Create and configure webhooks
- [Copy Trading](./copy-trading) — Scale across multiple accounts
- [Marketplace](./marketplace) — Browse and subscribe to published strategies
- [Your First Automated Trade](./first-trade) — End-to-end beginner walkthrough
