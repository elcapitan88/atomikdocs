---
slug: automate-opening-range-breakout-strategy
title: "Your ORB Strategy Works on Paper. Here's How to Automate It With Real Money, Carefully"
authors: [Cruz]
tags: [automated-trading, automation, backtesting, beginner-traders, tutorial]
date: 2026-11-07
description: "A step-by-step path from a paper-traded opening range breakout to an automated strategy with real capital: written rules, a proper test, small size, and the checks most beginners skip."
---

# Your ORB Strategy Works on Paper. Here's How to Automate It With Real Money, Carefully

The opening range breakout (ORB) is one of the most popular first strategies, and for good reason. The rules are simple: mark the high and low of the first few minutes after the open, and trade when price breaks out of that range.

If you've been paper trading one and it's going well, that's a good start. The step to automating it with real money is where most of the mistakes happen, though, so let's walk through it in order.

<!--truncate-->

## Step 1: Ask what "going well" is based on

Before any money moves, be honest about the sample size.

- **How many trades?** A few weeks of one trade a day is maybe 15 to 30 trades. That can be a strategy that works or a strategy that caught a good stretch, and 30 trades can't tell the two apart.
- **Did the paper fills match reality?** The open is the busiest, fastest moment of the day. Paper accounts usually fill you at the price you see. Live, your stop can fill a few ticks worse, and that difference adds up fast on a strategy that trades right at the open.
- **Did you count costs?** Commissions and exchange fees on every round trip. On small targets they can be a big share of the profit.

One honest data point from our own research: when we tested a **plain** ORB on ES and NQ futures going back to 2010, the basic version, without any extra filters, didn't show an edge. That doesn't mean yours won't work. It means the details you've added are what matter, and those details need testing over years, not weeks.

To be clear about our own: Atomik's ORB strategy isn't a plain ORB. It waits for a single 5-minute candle at 9:45 AM ET, trades only in the direction that candle closed, skips the day if the candle closes flat, sets its stop from the market's recent daily range, and has no profit target: it holds until the stop is hit or 3:55 PM ET. Like any strategy, judge it by its live record, not by its description.

## Step 2: Write the rules down until there's nothing left to decide

Automation can't "use judgment." Every choice you make by feel on paper has to become a rule. For an ORB, that usually means:

- **The market and contract.** For example, MES or MNQ (micro futures).
- **The range.** The first 5, 15 or 30 minutes after the 9:30 AM ET open?
- **The entry.** The first tick through the range, or a candle *closing* outside it? Long only, short only, or both?
- **The stop.** The other side of the range, the middle of it, or a fixed number of points?
- **The target and exit.** A fixed target, a multiple of the range, a trailing stop, or out at a set time?
- **Trades per day.** One and done? What happens if the first trade stops out and price breaks the other way?
- **When not to trade.** Big economic releases, holidays, half days, or a range so wide the stop is too far away.

If you can't write a rule down, you can't automate it. Go back to paper until you can.

## Step 3: Test the written rules over years, not weeks

Now test exactly those rules on past data. A backtest is hypothetical: it shows how the rules would have behaved, not what you'll make. But it can tell you a lot that a few weeks of paper can't:

- **The worst losing streak.** Could you sit through it with real money without switching it off?
- **The worst drawdown in dollars**, at the size you plan to trade.
- **Whether it holds up in different years**, including choppy ones like 2022 and quiet ones.
- **Whether it survives costs.** Add realistic commissions and a tick or two of slippage, then see if anything is left.

Be wary of tweaking the settings until the backtest looks great. A 15-minute range that works while 14 and 16 minutes fall apart is usually luck, not an edge.

## Step 4: Choose how it will run

There are three common ways to automate a rule-based futures strategy:

1. **TradingView plus a webhook service.** Write the strategy in TradingView, set an alert, and let the alert send a webhook to a service that places the order at your broker.
2. **A strategy builder that runs it for you.** You describe the rules, test them, and the platform watches the market and places the orders itself.
3. **Code it yourself** against your broker's API. You get full control, and you also have to run it and fix it.

Atomik covers the first two. It's what I built, so it's the example I know best. You describe the rules in the Strategy Builder, backtest them against past futures data, run them on a paper account, and then switch the same strategy to a live account at Tradovate or Interactive Brokers. Whatever you choose, look for these three things:

- **Nothing depends on your laptop staying on.**
- **There's a daily loss limit outside the strategy itself**, so a bug can't keep trading.
- **You can see every order and switch it off quickly.**

## Step 5: Paper-test the automation, not just the strategy

Run the *automated* version on paper for at least a couple of weeks before real money. You're no longer testing whether ORB works. You're testing the plumbing:

- Does it enter at the time and price you expect?
- Do the stop and target show up at the broker right away?
- What happens on a half day, a holiday, or a day the range is huge?
- Does it trade only once when you said once?

Compare every automated paper trade with what you would have done yourself. Every difference is either a bug or a rule you never wrote down.

## Step 6: Go live small, then check everything

- **Start with one micro contract.** A micro contract is one tenth the size of the standard one, which makes the first live weeks much cheaper if something goes wrong.
- **Only use money you can afford to lose.** Not the emergency fund, and not money you need this year.
- **Set the daily loss limit before the first trade**, not after the first bad day.
- **Check every fill against your rules for the first month.** Is live slippage at the open close to what you assumed in Step 3?
- **Decide in advance what would make you stop**, for example a losing streak twice as long as the backtest's worst. Write it down now, while you're calm.

If you trade a funded or evaluation account, read the firm's rules on automated trading before you switch anything on. Some firms don't allow it at all.

## The short version

Paper → written rules → years of testing with costs → automated paper → one micro contract live → review every fill. It's slower than switching it on tomorrow, but every step tells you something about the strategy before real money is on the line.

---

*This article is general information, not financial or investment advice. Trading futures involves substantial risk of loss and isn't right for everyone. Backtested and paper results are hypothetical and have limits: they don't reflect real slippage, liquidity or the emotional side of trading. Past results, live or simulated, don't guarantee future results.*
