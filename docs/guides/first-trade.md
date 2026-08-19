---
sidebar_position: 1
sidebar_label: "First Automated Trade"
title: "Your First Automated Trade"
description: "Set up and execute your first automated trade with Atomik Trading — from a paper account to a live TradingView signal, step by step with screenshots."
keywords: ["automated trading", "first automated trade", "TradingView webhook tutorial", "paper trading", "trading automation tutorial"]
---

# Your First Automated Trade

This walkthrough takes you from a fresh account to your first automatically executed trade. It uses a **paper account** — real market data, virtual money — so nothing here risks a dollar. The whole setup takes about ten minutes.

**What you'll do:**

1. Add an Atomik Paper account (no broker needed)
2. Create a webhook strategy and get your webhook URL
3. Activate the strategy on your paper account
4. Point a TradingView alert at your webhook
5. Watch the trade execute on the dashboard

## Step 1: Add a paper account

Everything happens on the **Dashboard** — chart on the left, your accounts and strategies on the right.

![The Atomik dashboard: chart, trading panel, accounts and strategies](/img/screenshots/dashboard.png)

1. In the **Accounts** panel (top right), click **+ Connect Account**
2. Choose **Atomik Paper** — a simulated account with $100,000 in virtual funds, no broker required

![Broker selection: Tradovate, IB, TopstepX, and Atomik Paper](/img/screenshots/broker-select.png)

The new account appears in your Accounts panel as `ATMK-…` with a `PAPER` badge. Paper accounts run through the same execution pipeline as live accounts, so what you learn here transfers directly.

(If you'd rather connect a real broker first, see the [Broker Connection Guide](./broker-connection) — Tradovate takes about two minutes via OAuth.)

## Step 2: Create a webhook strategy

1. In the **Strategies** panel (bottom right), click **+ Create**
2. Choose **Webhook Strategy** — your signals will come from TradingView and POST to an Atomik webhook URL

![Create a strategy: webhook or engine](/img/screenshots/create-strategy.png)

3. Pick **Personal Use** (you can share or monetize a strategy later — see the [Marketplace guide](./marketplace))
4. On the **Configuration** step, give the strategy a name (e.g. "My First Strategy"), pick the closest strategy type, and choose **TradingView Pine Script** as the signal source
5. Review and create

When the strategy is created you get its **webhook URL** with an embedded secret. **Copy it now** — for security, the full URL with the secret is only shown at creation. It looks like:

```
https://api.atomiktrading.io/api/v1/webhooks/{token}?secret={secret}
```

Your webhooks are always visible in the **Webhooks** tab of the same panel, where you can check delivery logs later.

## Step 3: Activate it on your paper account

A strategy trades only when it's **activated** on a specific account:

1. In the Strategies panel, click **Activate**
2. Select your new webhook strategy as the signal source
3. Select your paper account
4. Set the quantity (start with **1** contract)
5. Turn the strategy on

The strategy card now shows its symbol, account, and quantity, with a toggle to pause it any time.

## Step 4: Point a TradingView alert at your webhook

In TradingView (a paid TradingView plan is required for webhook alerts):

1. Open a chart and create an **Alert** (for a first test, a simple price-crossing alert is fine)
2. In the alert dialog, open the **Notifications** tab and enable **Webhook URL**
3. Paste your Atomik webhook URL
4. Set the alert **Message** to:

```json
{"action": "BUY"}
```

That's the minimum payload — Atomik reads the `action` and executes with the quantity you configured in Step 3. For exits, partial exits, and strategy-driven sizing, see the [Webhook Setup Guide](./webhook-setup).

:::tip Fire it manually
You don't have to wait for the market: you can test the pipeline with any HTTP client. Send a POST with body `{"action": "BUY"}` to your webhook URL and the trade executes immediately.
:::

## Step 5: Watch it execute

When the alert fires:

- The **Positions** tab (under the chart) shows the new open position
- Your paper account card updates its **Open P&L** in real time
- The **Webhooks** tab shows the delivery in the webhook's logs — this is the first place to look if nothing happened

To close the position, send the exit payload from another alert (or manually):

```json
{"action": "SELL", "comment": "EXIT_FINAL"}
```

## If nothing happened

Check these in order — they cover nearly every first-time miss:

1. **Webhook logs** (Webhooks tab) — did the request arrive? Any error message?
2. **Strategy is on** — the toggle on the strategy card must be active
3. **Right account** — the strategy must be linked to the account you're watching
4. **Payload is valid JSON** — `{"action": "BUY"}`, straight quotes, no trailing comma

More cases in the [FAQ](./faq).

## Where to go next

- **[Webhook Setup](./webhook-setup)** — full payload reference: exits, partial exits, quantity from the alert
- **[Broker Connection](./broker-connection)** — connect Tradovate or a funded account when you're ready for live
- **[Paper Trading](./paper-trading)** — how the simulated account works
- **[Strategy Builder](./strategy-builder)** — have AI write and backtest a strategy for you, no TradingView needed
- **[Copy Trading](./copy-trading)** — run one strategy across multiple accounts

Start on paper, verify the full loop end to end, and only then point a strategy at a funded or live account with small size.
