---
sidebar_position: 13
sidebar_label: "Prop-Firm Accounts"
title: "Prop-Firm & Funded Accounts"
description: "Automate funded and evaluation futures accounts with Atomik: Tradovate-powered prop accounts, TopstepX, multi-account copy trading, and the rules to check first."
keywords: ["prop firm automation", "funded account automation", "TopstepX automation", "Tradovate prop firm", "evaluation account trading", "copy trading funded accounts"]
---

# Prop-Firm & Funded Accounts

Funded traders are some of Atomik's heaviest users, for a simple reason: prop accounts multiply. One trader passes an evaluation, gets funded, buys two more evaluations — and suddenly the same strategy needs to execute identically on four accounts. That's exactly what Atomik is built for.

## Check your firm's rules first

Before automating anything: **confirm automation is permitted under your specific program's rules.** Policies differ between firms, and between evaluation and funded stages at the same firm. Some allow full automation, some allow semi-automation, some prohibit it. Atomik executes what you tell it to — staying inside your firm's rules is on you. When in doubt, ask your firm in writing.

## How funded accounts connect

### Via Tradovate (available now)

Many futures prop programs provision accounts on **Tradovate** infrastructure and give you a Tradovate login. If yours does, it connects to Atomik like any Tradovate account:

1. **Dashboard → Accounts panel → + Connect Account → Tradovate**
2. Log in with the Tradovate credentials your firm gave you and authorize

The account appears in your Accounts panel and works with everything: webhook strategies, engine strategies, copy trading, and the chart's manual trading panel.

### TopstepX (private beta)

Direct TopstepX connection via API key is in private beta — it requires an active TopstepX API-access subscription on the Topstep side. Contact [support@atomiktrading.io](mailto:support@atomiktrading.io) if you want early access.

## Running one strategy across multiple funded accounts

This is [copy trading](./copy-trading), and it's the core funded-trader workflow:

1. Connect each funded/evaluation account
2. Activate the same strategy on each, with per-account position sizing
3. One signal executes on all of them — leader first, followers batched within 100ms

Per-account sizing matters here: an evaluation with a $2,000 trailing drawdown and a funded account with a $4,500 limit shouldn't trade the same size. Set each account's quantity to respect *its* risk parameters.

Copy trading requires the Pro plan or higher (Pro: 10 accounts; Elite: 25).

## Practical advice from funded traders

- **Rehearse the full loop on paper first.** A webhook misfire that costs nothing on a [paper account](./paper-trading) costs an evaluation fee on a real one.
- **Respect the daily loss limit in your strategy, not just your head.** Build exits and a flatten time into the automation (see [exit comments](./webhook-setup#exit-comment-types)) so a runaway day can't breach your firm's limit while you're away from the screen.
- **Watch the first sessions live.** Automation removes the execution work, not the supervision.
- **Consistency rules exist at many firms** (max % of profit from a single day, minimum trading days). Factor them into how aggressively your strategy sizes.

## Costs

There are no per-account fees on Atomik — a Pro plan at $129/mo covers up to 10 connected accounts, which is the practical difference between Atomik and per-account-priced tools when you're stacking evaluations. See [Subscription & Pricing](./subscription-pricing).

## Next steps

- [Broker Connection](./broker-connection) — the Tradovate OAuth flow in detail
- [Copy Trading](./copy-trading) — leader/follower execution mechanics
- [Webhook Setup](./webhook-setup) — payloads, exits, and per-signal caps
