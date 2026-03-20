---
sidebar_position: 5
title: "Copy Trading Guide"
description: "Learn how to use Atomik Trading's copy trading to replicate your strategy across multiple broker accounts simultaneously."
keywords: ["copy trading", "multi-account trading", "trade replication", "leader follower", "scale trading"]
---

# Copy Trading

Copy trading in Atomik Trading means replicating **your own strategy** across multiple broker accounts simultaneously. One signal, multiple executions — scaling your edge without increasing per-account risk.

:::info This is not social trading
Atomik's copy trading is about multiplying your own proven strategy, not following other traders. You control the strategy — copy trading just scales the execution.
:::

## How It Works

```
Signal (webhook or strategy) → Leader Account executes immediately
                              → Follower Accounts execute in parallel (100ms batch)
```

When a webhook signal arrives for a strategy that's activated on multiple accounts:

1. **Leader account** executes first with an account-level lock (prevents race conditions)
2. **Follower accounts** are pooled into a batch within a 100ms window
3. The batch executes up to 10 orders concurrently via the broker APIs
4. All accounts receive the same action (BUY/SELL) with the same exit logic

## Setting Up Copy Trading

### Step 1: Connect Multiple Accounts

Connect two or more broker accounts in **Settings > Broker Accounts**. These can be:

- Multiple accounts at the same broker (e.g., 3 Tradovate accounts)
- Accounts across different brokers (e.g., Tradovate + Interactive Brokers)
- Mix of demo and live accounts

See [Broker Connection Guide](./broker-connection) for setup instructions.

### Step 2: Activate the Same Strategy on Multiple Accounts

1. Go to **Strategies** in the dashboard
2. Create or select a webhook
3. **Activate** the strategy on each broker account you want to trade
4. Set the position size independently for each account

For example, you might trade 2 contracts on your main account and 1 contract on each of two smaller accounts.

### Step 3: Send a Signal

When your TradingView alert (or other signal source) fires, the webhook triggers execution on **all accounts** with an active strategy for that webhook. No additional configuration needed.

## Execution Details

### Leader vs. Follower

- **Leader**: The first account to receive the order. Executes immediately with a distributed lock (30-second timeout, 3 retries) to prevent race conditions.
- **Followers**: Remaining accounts are pooled and executed in parallel batches.

### Order Batching

Follower orders are batched for efficiency:

- **Batch window**: 100ms — orders arriving within this window are grouped
- **Max batch size**: 10 orders per batch
- **Execution**: All orders in a batch execute concurrently via `asyncio.gather()`
- **Overflow**: If more than 10 followers, additional batches process sequentially

### Partial Exits

Exit signals (`EXIT_50`, `EXIT_25`, `EXIT_FINAL`) apply to each account independently based on that account's current position. If Account A holds 4 contracts and Account B holds 2, an `EXIT_50` signal exits 2 on A and 1 on B.

## Use Cases

### Scale Your Edge

If your strategy consistently makes $500/day on one 2-contract account, running it across 5 accounts multiplies your potential without increasing per-account exposure.

### Broker Diversification

Spread execution across multiple brokers to protect against:
- Broker outages or maintenance windows
- Per-account position limits
- Execution quality differences

### Prop Firm Accounts

Run the same strategy on multiple prop firm evaluation or funded accounts. Each account maintains its own position sizing and risk limits.

### Strategy Variants

Activate the same webhook on different accounts with different position sizes — conservative on one, aggressive on another — to build a diversified equity curve.

## Copy Trading Limits by Tier

| Tier | Copy Trading Groups | Followers per Group |
|------|--------------------|--------------------|
| Free | 0 | 0 |
| Starter ($49/mo) | 1 | 2 |
| Trader ($129/mo) | 3 | 5 |
| Unlimited ($249/mo) | Unlimited | Unlimited |

## Best Practices

1. **Test on demo accounts first** — Verify that signals execute correctly across all accounts before going live
2. **Set position sizes per account** — Don't use the same size everywhere; account for different account balances and risk tolerances
3. **Monitor all accounts** — Check the dashboard to ensure all accounts received and executed each signal
4. **Start with 2 accounts** — Add more only after you've confirmed reliable execution
5. **Use the same broker type** when possible — Execution timing is most consistent when all accounts use the same broker API

## Troubleshooting

| Problem | Solution |
|---------|----------|
| One account didn't execute | Check that the strategy is **Active** on that account. Verify the broker connection is healthy. |
| Follower accounts executed late | This is expected — followers batch in 100ms windows. For time-sensitive strategies, consider whether the delay matters. |
| Different fill prices across accounts | Normal for market orders across multiple accounts. The 100ms batching minimizes but doesn't eliminate this. |
| "Account limit reached" | You've hit your tier's account or group limit. Upgrade your plan. |

## Next Steps

- [Broker Connection](./broker-connection) — Connect additional accounts
- [Trading Strategies](./trading-strategies) — Configure strategy activation and exits
- [Subscription & Pricing](./subscription-pricing) — Upgrade for more accounts/groups
