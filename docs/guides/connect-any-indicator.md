---
sidebar_position: 4
title: "Automate Any TradingView Indicator"
description: "Turn any TradingView indicator — including paid and protected ones — into an automated strategy with Atomik's free open-source template. Session filter, stops and targets, partial exits, and ready-made webhook alerts with zero JSON to write."
keywords: ["automate TradingView indicator", "TradingView indicator auto trading", "TradingView strategy automation", "indicator webhook automation", "auto trade indicator signals", "TradingView automation futures", "prop firm automation"]
---

# Automate Any TradingView Indicator

If an indicator on your chart prints good signals, the missing piece is execution: someone still has to be at the screen to take the trade. This guide closes that gap with our free, open-source strategy template on TradingView:

**[Webhook Strategy Template - Connect Any Indicator [Atomik]](https://www.tradingview.com/script/PnwWVJIH-Webhook-Strategy-Template-Connect-Any-Indicator-Atomik/)**

Point the template at any indicator that plots its signal — including paid and protected indicators you already own — and it wraps that indicator with a session filter, stops and targets, optional partial exits, and pre-built webhook alerts. One TradingView alert then drives entries, exits, and end-of-day flattens on every broker account you've connected to Atomik.

You never write a line of JSON. The template builds every payload internally, in exactly the format Atomik's [webhook processor](./webhook-setup) expects.

```
Your indicator's plot → Atomik Template (session / risk / brackets)
        → one TradingView alert → Atomik webhook → your broker account(s)
```

## What you need

| Requirement | Why |
|---|---|
| A TradingView **paid plan** (Essential or higher) | Webhook notifications on alerts are a paid TradingView feature |
| An Atomik plan with trade execution (any paid tier) | The Free tier can't create webhooks or execute — see [pricing](./subscription-pricing) |
| A connected broker or paper account | Start with the [built-in paper account](./paper-trading) — always |
| An indicator that **plots** its signal | See the compatibility rules below — this is the one real constraint |

## Which indicators work

The template reads your indicator through TradingView's source-input system, which has hard rules:

- ✅ **`indicator()` scripts that expose the signal via `plot()`** — any plotted series works. A value **greater than 0** on a bar is read as a signal.
- ✅ **Closed-source, protected, and invite-only indicators** — their plots still appear in the dropdown. You don't need the source code.
- ❌ **`strategy()` scripts** — TradingView never lists a strategy's plots in another script's source dropdown, no matter what it plots.
- ❌ **Signals drawn with `plotshape()`, `plotchar()`, or labels only** — arrows and markers that aren't backed by a `plot()` are not selectable.

**How to check any indicator in 10 seconds:** add it to your chart, open the template's settings, and click the **Long signal** dropdown. If the indicator's name shows up with a selectable output, it works. If it doesn't appear at all, it's either a strategy script or it only draws shapes.

## Step 1 — Create your Atomik webhook

Follow the [Webhook Setup Guide](./webhook-setup) to create a webhook and activate a strategy on it. Two things matter here:

1. **Copy the full webhook URL (including `?secret=`) immediately** — the secret is only shown once.
2. **Activate on a paper account first.** A miswired signal source fires real orders; find out on simulated money.

## Step 2 — Add the template and test the plumbing

1. Open the [template's script page](https://www.tradingview.com/script/PnwWVJIH-Webhook-Strategy-Template-Connect-Any-Indicator-Atomik/) and click **Use on chart** (or search "Atomik Template" in your chart's Indicators dialog).
2. Leave **Use external signals** OFF for now. The template trades a built-in 9/21 EMA cross in this mode — throwaway signals that exist so you can verify the pipe end to end.
3. Create the alert (Step 5 below), let a test signal fire, and confirm it in **Webhooks → your webhook → Logs** in Atomik, then as a position on your paper account.

Testing with the built-in signal first means that when you wire your real indicator, the only new variable is the indicator itself.

## Step 3 — Wire your indicator

1. Add your indicator to the same chart.
2. In the template's settings, set **Long signal** to your indicator's long plot and **Short signal** to its short plot. Any value above 0 on a bar close fires an entry.
3. Turn **Use external signals** ON.
4. **If your indicator only trades one direction, untick "Enable longs" or "Enable shorts" for the side it doesn't signal.** This matters: a source input you never assigned still has a default (`close`), which is always positive — with that side enabled, the template would fire it on every eligible bar.

Sanity-check the wiring visually before creating the alert: the template plots a small triangle at each entry it would take. Scroll back — triangles should line up with your indicator's signals inside your session window, and nowhere else.

## Step 4 — Configure the strategy

All settings live in the template's settings dialog, grouped in order:

| Group | What it controls |
|---|---|
| **Session** | The entry window (default: 09:30–11:00 New York) and its timezone. **Flatten at session end** closes any open position when the window closes — most prop firms require flat by the close, so leave it on for funded accounts. |
| **Risk** | Stop and target as fixed **ticks**, **percent** of entry price, or **ATR** multiples. Levels are fixed at entry and drawn on the chart. |
| **Partial exit** | Optional: close 50% at a first target (sent as `EXIT_50`), run the remainder to the full target or stop. |
| **Order size** | Leave **Send quantity in the alert** off unless your Atomik activation is set to take quantity [from the alert JSON](./webhook-setup#where-the-quantity-comes-from). Otherwise the size configured on your activated strategy is what trades. |

## Step 5 — Create the one alert

1. On the chart, create an alert. Set **Condition** to **Atomik Connect Any Indicator**.
2. Replace the entire **Message** box with exactly:

```
{{strategy.order.alert_message}}
```

3. Under **Notifications**, enable **Webhook URL** and paste your full Atomik webhook URL (with `?secret=`).

That single alert carries everything — entries, partial exits, bracket exits, and session flattens — because each order the template places has its complete payload attached. TradingView swaps in the right one when the order fires. **Never edit or add to the message**; hand-typed JSON is the failure mode this template exists to remove.

⚠️ **Alerts are snapshots.** TradingView freezes both scripts' settings into the alert at creation time. If you change any setting on the template or your indicator, delete the alert and create it again.

## What the alerts send

For reference, the payloads the template emits — already matching Atomik's [action and exit-comment vocabulary](./webhook-setup#webhook-payload-format):

| Event | Payload sent |
|---|---|
| Long entry | `{"action":"BUY","ticker":"...","price":...,"comment":"ENTRY"}` |
| Short entry | `{"action":"SELL","ticker":"...","price":...,"comment":"ENTRY"}` |
| Partial exit (first target) | `{"action":"EXIT",...,"comment":"EXIT_50"}` |
| Stop or full target | `{"action":"EXIT",...,"comment":"EXIT_FINAL"}` |
| Session-end flatten | `{"action":"EXIT",...,"comment":"EXIT_FINAL"}` |

`EXIT_50` closes half your position and `EXIT_FINAL` closes all of it, sized against your real position in Atomik — so partial exits behave correctly even if your configured quantity differs from the template's backtest quantity.

## Honest limits

- **Backtest fills are indicative, not guaranteed.** TradingView's strategy tester fills brackets at the exact level; your live fill is whatever the broker gives you. Expect slippage, especially on stops.
- **The template's exits replace your indicator's exits.** It manages positions with its own fixed brackets (ticks / percent / ATR). If your indicator has bespoke exit logic — trailing stops, signal-based exits — the template does not read it; only entry signals come from your indicator.
- **Signals are evaluated on bar close.** The template deliberately trades confirmed bars, not intrabar ticks. Repainting indicators will still repaint — a signal that vanishes before the bar closes never fires, but an indicator that redraws *closed* bars will show history that looks better than what actually fired.

## Troubleshooting

| Problem | Cause and fix |
|---|---|
| My indicator doesn't appear in the signal dropdown | It's a `strategy()` script, or it only draws shapes/labels. See [Which indicators work](#which-indicators-work). If you control the source, add a `plot()` of the signal (any value > 0 on signal bars). |
| Trades fire in a direction my indicator never signals | That side's source is still on its default (`close`, always positive). Untick **Enable longs**/**Enable shorts** for the unused side. |
| Entry triangles don't match my indicator's signals | Wrong plot selected (many indicators expose several), or your session window is filtering differently than the indicator's own session logic. |
| Alert fires but nothing executes | Work through the [webhook troubleshooting table](./webhook-setup#troubleshooting) — logs first. |
| I changed settings and nothing changed | Alerts snapshot settings at creation. Delete and recreate the alert. |

## Next steps

- [Webhook Setup Guide](./webhook-setup) — payload format, security, logs
- [Paper Trading](./paper-trading) — where every new setup should run first
- [Prop Firms & Funded Accounts](./prop-firms) — running automation on funded accounts
- [Copy Trading](./copy-trading) — mirroring the same signals across multiple accounts
