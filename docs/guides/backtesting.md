---
sidebar_position: 11
sidebar_label: "Backtesting"
title: "How Backtesting Works"
description: "What Atomik's backtester actually simulates: bar-by-bar execution, the pessimistic fill model, tick-level fidelity, and what backtests can and cannot tell you."
keywords: ["backtesting", "backtest futures strategy", "fill model", "look-ahead bias", "tick data backtest", "strategy testing"]
---

# How Backtesting Works

Most retail backtests are optimistic by construction — and traders find out with real money. This page explains exactly what Atomik's backtester simulates, where its limits are, and how to read results without fooling yourself.

## The simulation

Atomik backtests are **event-driven**: your strategy code — the exact same Python that runs live — is fed historical bars one at a time, in order, and its signals are executed against the data as it unfolds. Your strategy never sees a bar that hasn't "happened" yet.

- **Real market data.** Bars are built from actual exchange trades (CME/COMEX/NYMEX futures), warehoused by Atomik — roughly two years for the major contracts. Nothing is synthetic or resampled from daily data.
- **Same code as live.** There is one strategy contract. The code you backtest is byte-for-byte the code the live engine runs — the backtester is not a separate re-implementation of your logic.
- **Timeframes** from 1-second to daily. Test on the timeframe your strategy declares.

## The fill model, honestly

Fills within a bar are modeled from that bar's OHLC. When a bar's range touches both your stop and your target, the simulator **counts it as a stop** — the pessimistic reading. When a stop and target could both plausibly have filled and bar data can't tell which came first, Atomik resolves the ambiguity against you, and the result reports how often that happened.

Where 1-second data is stored, ambiguous bars can be resolved at **tick-level fidelity** — replaying the finer data to determine what actually filled first. Each backtest result reports its `fill_fidelity` so you know which model produced it.

What the simulator does **not** model: your order's own market impact, queue position, or live slippage beyond the bar data. On liquid contracts at modest size this gap is small; on thin markets or large size it is not. Treat backtest P&L as an upper bound, not a promise.

## What a backtest can tell you

- Whether the idea has *any* edge on historical data, before you spend weeks on it
- How it behaves: trade frequency, drawdown depth and length, win/loss profile
- Whether a "small tweak" actually changed anything (re-run and compare in Backtest History)

## What it cannot tell you

- **That the strategy will make money live.** Markets change; past data is the only data there is.
- **That an over-tuned strategy is good.** If you adjusted parameters until the equity curve looked nice, you fit the noise. Test the tuned version on a date range it never saw.
- **Anything about commissions unless you account for them.** A strategy netting a fraction of a point per trade can be profitable gross and losing after costs — check average win/loss size against your round-trip cost per contract.

## The pipeline that keeps you honest

```
Backtest (pessimistic fills) → Paper trade (live data, real pipeline) → Small size live → Scale
```

A good backtest earns the strategy a [paper trading](./paper-trading) run — live market data, same execution pipeline, zero risk. Only consistent paper results earn real money, and only small size at first.

## Quotas

Backtests are metered per calendar month by plan — Starter 30, Pro 200, Elite 500 — with per-backtest date-range caps (90 days / 1 year / 5 years). Symbol availability by plan is listed in the [Strategy Builder guide](./strategy-builder#symbols-and-data).

## Next steps

- [Strategy Builder](./strategy-builder) — build and test without writing code
- [Paper Trading](./paper-trading) — the next gate after a good backtest
- [Marketplace](./marketplace) — where *live-verified* results, not backtests, are what's displayed
