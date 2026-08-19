---
sidebar_position: 14
sidebar_label: "MCP Connector"
title: "MCP Connector — Use Claude with Atomik"
description: "Connect Claude to your Atomik account via MCP: write, validate, backtest, and save trading strategies from a chat, using your own plan's quotas."
keywords: ["MCP connector", "Claude trading strategies", "AI agent trading", "Model Context Protocol", "Claude MCP", "AI backtest"]
---

# MCP Connector — Use Claude with Atomik

Atomik ships a **Model Context Protocol (MCP) connector**, so an AI assistant like Claude can work with your Atomik account directly from a chat: write a strategy, validate it against Atomik's strategy contract, backtest it on real futures data, and save it to your account — where it appears in your Strategy Builder, ready to activate.

If you already think through trading ideas with an AI assistant, this closes the loop: the same conversation that designs the strategy can now test it against two years of real data and hand it to you finished.

## What Claude can do once connected

| Tool | What it does |
|------|--------------|
| Get the strategy contract | Fetches Atomik's exact `BaseStrategy` interface so generated code is correct by construction |
| Validate a strategy | Checks code in the same sandbox the live engine runs — free, no quota |
| Backtest a strategy | Runs it against stored futures data (uses your plan's monthly backtest quota) |
| List available symbols | Shows the instruments your plan can backtest |
| Save / list / get strategies | Saved strategies appear under **My Strategies** in the web Builder |
| Check usage | Your remaining monthly quota |

Two things it deliberately **cannot** do from chat: place trades, and activate a strategy for live trading. Going live always happens in the Atomik app, by you.

## Connecting Claude

1. In Claude (claude.ai → **Settings → Connectors**), add a custom connector with the URL:

```
https://mcp.atomiktrading.io/mcp
```

2. Claude sends you through Atomik's authorization page — log in to your Atomik account and approve. You're approving scoped access: strategy building and backtesting only, never trading.
3. That's it. Ask Claude to build you a strategy.

You can see and revoke connected AI assistants any time in **Settings → Connected Accounts → Connected AIs**.

## A session looks like this

> **You:** Build me an opening-range breakout for MNQ on the 5-minute — 9:30–9:35 range, one long and one short per day, 30-tick stop, 60-tick target, flat by 4 PM. Backtest it on the last 90 days.
>
> **Claude:** *fetches the contract, writes the Python, shows you the complete code, validates it, asks/confirms symbol-timeframe-range, runs the backtest, and reports the results — including the losing metrics.*
>
> **You:** Save it.
>
> **Claude:** *saves it and gives you the link — it's now in your Builder's My Strategies, ready to backtest further or activate on a paper account.*

## Quotas and requirements

- Requires an **active Atomik subscription** (any plan)
- Backtests from chat consume the **same monthly quota** as the web Builder (Starter 30 / Pro 200 / Elite 500), with the same symbol and date-range limits by plan — see [Strategy Builder](./strategy-builder#symbols-and-data)
- Validation is free and unmetered — Claude is instructed to validate before ever spending a backtest

## Why this beats copy-pasting code

Without the connector, an AI assistant guesses at Atomik's API from training data — plausible-looking code that fails on real interfaces. With it, the assistant fetches the *actual current contract*, validates against the *actual sandbox*, and tests on *actual data*. The difference is a strategy that works on the first save instead of the fifth debugging round-trip.

## Next steps

- [Strategy Builder](./strategy-builder) — the same pipeline in the web UI
- [How Backtesting Works](./backtesting) — what those backtest numbers mean
- [Trading Strategies](./trading-strategies) — activating a saved strategy on an account
