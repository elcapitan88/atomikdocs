---
slug: stop-letting-ai-drain-databento-credits
title: Stop Letting AI Drain Your Databento Credits
authors: [Cruz]
tags: [databento, backtesting, algorithmic-trading, tutorial, automated-trading]
date: 2026-04-26
description: A practical guide to keeping AI coding assistants from burning through your Databento credits. Pull data once, save locally, and iterate forever.
---

# Stop Letting AI Drain Your Databento Credits

Now more than ever, AI coding assistants like Claude and ChatGPT have made it possible for traders with zero coding experience to build and backtest trading strategies. But there's a hidden cost that nobody talks about: every time your AI iterates on a strategy, it might be pulling fresh market data from Databento's API — and each pull costs real money.

I've personally burned through hundreds of dollars in a single weekend of backtesting, when the data itself should have cost less than $5. The problem isn't Databento's pricing. The problem is that AI is doing exactly what you asked it to do with no regard to cost. Databento gives new users **$125 in free credits** for historical data — this guide will help you make those credits last.

<!--truncate-->

---

## Who Is This For?

- Traders using AI assistants (Claude, ChatGPT, etc.) to build and test strategies
- Beginners who are new to coding and rely on AI to write their scripts
- Anyone on Databento's usage-based (pay-as-you-go) pricing for historical data
- Traders who are trying to maximize their trial credits from Databento
- Developers who want a reusable prompt template for working with Databento's API

---

## The Problem: What Typically Happens

1. You open your favorite AI in the browser
2. You ask it to build a backtest for an ES futures strategy
3. Claude writes Python code that calls `client.timeseries.get_range()` to pull historical data from Databento
4. AI runs the backtest and shows you the results
5. You don't like the results, so you ask for a different strategy
6. AI writes **new** code that pulls the **same data** from Databento again
7. You change the timeframe → AI pulls the data **again**
8. You add a volume filter → AI pulls the data **again**

**Every single iteration is a fresh API call. Every API call costs money.**

> **Real example:** Pulling one day of ES futures Trades data from Databento costs approximately $0.40–$2.00 depending on the schema and date range. That sounds cheap — but if you iterate 20 times in an afternoon (which is totally normal when developing a strategy), you've spent $8–$40 on data you only needed to buy once.

Scale that up to a week of data using a more detailed schema like MBP-1, and suddenly you're looking at **$50–$200+ for a single afternoon of experimentation**.

---

## Why AI Does This

This isn't the AI's fault, exactly. AI coding assistants don't have memory between responses in most setups, and they aren't tracking which data you've already pulled. Each time you ask for a new strategy or modification, the AI starts fresh — so it does the "safe" thing and pulls the data again.

The AI also doesn't know:

- That Databento charges per API call on usage-based plans
- That `metadata.get_cost` exists to preview costs before pulling
- Which schema is the most cost-efficient for your use case
- That you can save data locally and reuse it forever

**You don't know what you don't know. And neither does the AI, unless you tell it.**

---

## The Solution: Pull Once, Iterate Forever

The fix is simple:

1. Pull your data once and save it as a local file (CSV or Parquet)
2. Every iteration after that reads from the local file — never touching the API again
3. Split your data into in-sample and out-of-sample sets for proper validation
4. Only call the API again when you need genuinely different data (different date range, symbol, or schema)

---

## Step 1: Know What You Need BEFORE You Pull

Before making any API call, answer these questions:

- What symbol(s) do I need?
- What date range covers enough history for my strategy?
- What schema matches my actual strategy requirements?

### Schema Selection Guide

**Use the least detailed schema that gets the job done.** If you're building a simple moving average crossover, you do NOT need full order book data. `ohlcv-1d` or `ohlcv-1m` will do just fine at a fraction of the cost.

| Schema | Best For | Relative Cost |
|--------|----------|---------------|
| `ohlcv-1d` | Daily strategies, trend following | Lowest |
| `ohlcv-1m` | Intraday bar strategies | Low |
| `trades` | Tick-level entry/exit, custom bar building | Medium |
| `mbp-1` | Spread analysis, top-of-book dynamics | High |
| `mbp-10` | Full depth-of-book analysis | Higher |
| `mbo` | Individual order tracking | Highest |

### Matching Strategy Type to Schema

| Strategy Type | Recommended Schema |
|---------------|-------------------|
| Daily trend / swing | `ohlcv-1d` |
| Intraday moving average / breakout | `ohlcv-1m` |
| Custom bar building, EMA intra-bar checks | `trades` |
| Spread / queue analysis | `mbp-1` |
| Full order book reconstruction | `mbp-10` or `mbo` |

> **If you're not sure, start with the least expensive option.** You can always pull more detailed data later if your strategy actually needs it — but you can't un-pull expensive data you didn't need.

### Check the Cost Before You Pull

Databento has a built-in cost preview. **Always use this before pulling data:**

```python
import os
import databento as db
from dotenv import load_dotenv

load_dotenv()

client = db.Historical(os.environ["DATABENTO_API_KEY"])

params = dict(
    dataset="GLBX.MDP3",
    schema="trades",
    symbols=["ES.FUT"],
    stype_in="parent",
    start="2024-01-01",
    end="2024-01-22",
)

cost = client.metadata.get_cost(**params)
record_count = client.metadata.get_record_count(**params)
size_bytes = client.metadata.get_billable_size(**params)

print(f"This request will cost: ${cost:.4f}")
print(f"Trades returned:        {record_count:,}")
print(f"Data size:               {size_bytes / 1_000_000:.2f} MB")
```

This is **free to run** and gives you the full picture before you commit.

---

## Step 2: Pull Once, Save Locally

Once you've confirmed the cost, pull the data and immediately save it.

### Save as CSV

```python
import os
import databento as db
from dotenv import load_dotenv

load_dotenv()

client = db.Historical(os.environ["DATABENTO_API_KEY"])

data = client.timeseries.get_range(
    dataset="GLBX.MDP3",
    schema="trades",
    symbols=["ES.FUT"],
    stype_in="parent",
    start="2026-04-21",
    end="2026-04-22",
)

df = data.to_df()

print(f"Total rows: {len(df):,}")
print(df[["price", "size", "side", "symbol"]].head(10))

df.to_csv("data/es_trades.csv")
print("Saved to data/es_trades.csv")
```

### Save as Parquet (Recommended for Large Datasets)

Parquet files are smaller and faster to read than CSV, especially for datasets with millions of rows:

```python
df.to_parquet("es_trades_april_2026.parquet")
```

### Save as DBN (Databento's Native Format)

The most compact option — preserves all metadata:

```python
data.to_file("es_trades_april_2026.dbn")
```

After this step, you have your data saved locally. **You will not call the API again unless you need different data.**

---

## Step 3: Every Backtest Reads from the Local File

From now on, every strategy iteration reads from your saved file. The Databento API is never called again.

### Reading from CSV

```python
import pandas as pd

# Load your locally saved data — FREE, instant, unlimited reuse
df = pd.read_csv("es_trades_april_2026.csv")

# Now run your strategy
# ... your backtest code here ...
```

### Reading from Parquet

```python
import pandas as pd

df = pd.read_parquet("es_trades_april_2026.parquet")
```

---

## Step 4: Split Into In-Sample and Out-of-Sample

This step is critical for two reasons:

1. **Prevents overfitting** — you won't build a strategy that only works on data you've already seen
2. **Saves money** — you validate on data you already have instead of pulling new data

```python
import pandas as pd

# Load your data
df = pd.read_csv("es_trades_april_2026.csv")

# Calculate the split point (50/50 split)
split_index = int(len(df) * 0.5)

# Split the data
in_sample = df.iloc[:split_index]
out_of_sample = df.iloc[split_index:]

# Save both as separate files
in_sample.to_csv("es_in_sample.csv", index=False)
out_of_sample.to_csv("es_out_of_sample.csv", index=False)

print(f"In-sample: {len(in_sample)} rows (for strategy development)")
print(f"Out-of-sample: {len(out_of_sample)} rows (for validation)")
```

- Develop and iterate your strategy using **only** `es_in_sample.csv`
- Validate your **final** strategy against `es_out_of_sample.csv` — only once you're satisfied with the strategy

---

## Step 5: The Right Way to Work with AI

### Method A: Claude in the Browser (Beginner-Friendly)

**First conversation — pull and save the data:**

> "I want to backtest trading strategies on ES futures using Databento. Please write a Python script that:
> 1. Checks the cost of pulling Trades data for ES.FUT from April 1–22, 2026
> 2. Pulls the data and saves it as a CSV file called `es_trades.csv`
> 3. Splits it into in-sample (50%) and out-of-sample (50%) files
>
> Do NOT pull the data again in future responses. I will run this script once and reuse the files."

Run this script once on your machine. Done. Data is local.

**Every conversation after that:**

> "I have ES futures trades data saved in `es_in_sample.csv`. Using ONLY this local file (do NOT call the Databento API), build me a mean reversion strategy and backtest it against this data."

The instruction **"Do NOT call the Databento API"** is doing all the heavy lifting. Some browser-based AI chats now let you upload files — you can drag and drop your CSV so the AI always has it available.

---

### Method B: Claude Code in VS Code (Recommended)

Claude Code is a command-line tool that works directly with your project files. This is the ideal setup because:

- Claude Code can see all the files in your project directory
- It can read your data files directly without copy-pasting
- It remembers context within a session
- It can run code and show you results

**Recommended project structure:**

```
my-backtest-project/
├── data/
│   ├── es_trades.csv           # raw data file
│   ├── es_in_sample.csv        # development data
│   └── es_out_of_sample.csv    # validation data
├── strategies/
│   └── (your strategy files go here)
└── pull_data.py                # run this ONCE to get the data
```

**Then tell Claude Code:**

> "I have ES futures trades data in `data/es_in_sample.csv`. Build a mean reversion strategy using this data. Do NOT make any Databento API calls. All the data you need is already in the `data/` folder."

Claude Code will read the CSV, build the strategy, and run the backtest — all without touching the API.

---

## Step 6: Prompt Templates

### For Claude in the Browser

Copy and paste this at the start of any AI conversation:

```
IMPORTANT RULES FOR THIS CONVERSATION:

1. DATA HANDLING:
   - NEVER call the Databento API to pull data unless I explicitly ask you to
   - Always read from local CSV or Parquet files in the project directory
   - If no local data file exists, write a script for ME to run that pulls
     and saves the data locally. Do not run it yourself.

2. IF YOU MUST PULL DATA:
   - ALWAYS use metadata.get_cost FIRST to show me the cost
   - ASK me what type of strategy I'm building before choosing a schema
   - Use the LEAST detailed schema possible:
     * Daily strategies → use ohlcv-1d
     * Intraday strategies → use ohlcv-1m or trades
     * Only use mbp-1, mbp-10, or mbo if I specifically need order book data
   - NEVER default to trades or mbp-1 when ohlcv would work
   - Save the pulled data to a local file IMMEDIATELY
   - NEVER pull the same data twice

3. DATABENTO API RULES (if pulling is necessary):
   - Import: import databento as db
   - Historical client: client = db.Historical("db-YOUR_API_KEY")
   - Pull data: client.timeseries.get_range(dataset, schema, symbols, start, end)
   - Check cost: client.metadata.get_cost(dataset, schema, symbols, start, end)
   - Datasets are UPPERCASE: "GLBX.MDP3"
   - Symbols are UPPERCASE and in a list: ["ES.FUT"]
   - Schemas are lowercase: "trades", "mbp-1", "ohlcv-1d"
   - End date must be AFTER start date
   - Same start and end date = empty results (set end to next day)

4. BACKTESTING:
   - Always use in-sample data for strategy development
   - Only use out-of-sample data for final validation
   - Show performance metrics: total return, win rate, max drawdown,
     Sharpe ratio, profit factor, average winner, average loser,
     biggest winner, biggest loser
```

### For Claude Code

```
IMPORTANT: This project uses Databento market data that has already been
pulled and saved locally. The data files are in the data/ directory.

RULES:
- NEVER make Databento API calls. All data is pre-loaded in data/
- Read from CSV/Parquet files in data/ for all backtesting
- If I need new data, write a pull_data.py script for me to run manually
- Always check metadata.get_cost before any data pull
- Use the least detailed schema possible to minimize costs

Available data files:
- data/es_trades.csv          (raw tick data)
- data/es_in_sample.csv       (50% for development)
- data/es_out_of_sample.csv   (50% for validation)
```

---

## Common AI Mistakes with Databento

These are the most frequent errors AI coding assistants make when writing Databento code. Catching these before running saves both money and frustration.

| Mistake | What Happens | Fix |
|---------|--------------|-----|
| Re-pulling data each iteration | Charges you for every API call | Always read from local file after initial pull |
| Defaulting to `trades` or `mbp-1` | 10–100x more expensive than needed | Specify the schema in your prompt |
| Not checking cost first | Surprise charges | Always run `metadata.get_cost` first |
| Same start and end date | Empty results, wasted call | Set end date to the day after start |
| Lowercase dataset names | API error | Datasets must be UPPERCASE: `"GLBX.MDP3"` |
| String instead of list for symbols | API error | Symbols must be a list: `["ES.FUT"]` |

---

## The Bottom Line

Databento's pay-as-you-go pricing is one of the best things about the platform — you only pay for what you use. But when AI assistants are making the API calls for you, costs can spiral fast.

**The fix:** pull once, save locally, iterate forever. Separate your data acquisition from your strategy development, and you'll get all the benefits of AI-assisted backtesting without the surprise bills.

**Your data costs should look like this:**

| Day | Activity | Cost |
|-----|----------|------|
| Day 1 | Pull data, save locally | $2–$10 |
| Days 2–30 | Read from local file, iterate strategies | $0 |
| Day 31 | Need a different date range or symbol | $2–$10 |

**Not like this:**

| Day | Activity | Cost |
|-----|----------|------|
| Day 1 | Iterate 20 times with AI | $40–$200 |
| Day 2 | Iterate 20 more times | $40–$200 more |
| End of month | Surprise bill | 😬 |

The same data you pull today can power completely different strategies tomorrow. That's a major win.

**Dev smarter. Pull once.**

---

*Written by Alex Hernandez, founder of [AtomikTrading](https://atomiktrading.io) and Databento customer. Questions? Find me on X at [@atomiktrades](https://x.com/atomiktrades).*

> 💡 New Databento accounts receive **$125 in free credits** for historical data at the time of writing.
