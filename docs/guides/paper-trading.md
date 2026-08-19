---
sidebar_position: 12
sidebar_label: "Paper Trading"
title: "Paper Trading"
description: "Atomik's built-in simulated account: $100,000 in virtual funds, live market data, and the same execution pipeline as real accounts — no broker required."
keywords: ["paper trading", "simulated trading account", "practice futures trading", "demo trading", "virtual trading account"]
---

# Paper Trading

Atomik has a built-in simulated broker: the **Atomik Paper** account. One click gives you **$100,000 in virtual funds** trading against live market data — no broker signup, no API keys, no risk.

## What makes it useful

The paper account isn't a toy chart simulator bolted on the side. Paper orders flow through the **same execution pipeline as real accounts**: the same webhook ingestion, the same strategy engine, the same position tracking, the same dashboard. When your strategy works on paper, you've tested the actual system you'll trade live with — the only thing that changes later is the account it's pointed at.

Use it to:

- **Verify your automation end to end** — TradingView alert → webhook → fill, before any real account is involved
- **Forward-test a strategy** that backtested well, on live data it has never seen
- **Trade manually** from the chart with the BUY/SELL panel, to learn the platform
- **Try marketplace strategies** before pointing them at real money

## Setting one up

1. **Dashboard → Accounts panel → + Connect Account**
2. Choose **Atomik Paper**

The account appears instantly as `ATMK-…` with a `PAPER` badge and a $100,000 balance. Paper accounts count toward your plan's account limit like any other account, and you can create more than one — handy for running two strategy candidates side by side.

## Using it

A paper account behaves like any connected account:

- **Activate strategies on it** — webhook, engine, or marketplace strategies all work ([how](./trading-strategies))
- **Trade it manually** — set its quantity, arm it, and use the chart's BUY/SELL buttons
- **Track it** — positions, open P&L, and day P&L update live on its account card and in the Positions tab

## Paper vs. live: what's different

Honest list, because the differences matter:

| | Paper | Live |
|---|---|---|
| Market data | Real, live | Real, live |
| Execution pipeline | Identical | Identical |
| Fills | Simulated against live prices | Real fills from your broker |
| Slippage & queue position | Not fully modeled — fills are optimistic | Real |
| Emotions | Absent | Very present |

A strategy that only barely works on paper will likely lose live — real fills and real psychology both cost something. Demand a margin of safety before switching a strategy to a funded or live account, and start at minimum size when you do.

## The progression that works

```
Backtest → Paper → Live at small size → Scale gradually
```

1. [Backtest](./backtesting) the idea — kill it cheaply if it has no edge
2. Run it on **paper for a couple of weeks** — live data, zero risk
3. Move to a live or funded account at **1 contract**
4. Scale only after live results match paper results

## Next steps

- [Your First Automated Trade](./first-trade) — uses a paper account start to finish
- [Broker Connection](./broker-connection) — when you're ready to connect the real thing
- [Prop-Firm Accounts](./prop-firms) — paper-test before pointing anything at an evaluation
