---
sidebar_position: 2
title: "Broker Connection Guide"
description: "Learn how to connect your broker account to Atomik Trading. Covers Tradovate, Interactive Brokers, Binance, and Polymarket setup."
keywords: ["broker connection", "Tradovate setup", "Interactive Brokers", "Binance connection", "connect broker", "trading account"]
---

# Broker Connection Guide

Before you can execute trades through Atomik, you need to connect at least one broker account. This guide covers setup for each supported broker.

## Supported Brokers

| Broker | Markets | Connection Method | Setup Time |
|--------|---------|-------------------|------------|
| **Tradovate** | Futures (ES, NQ, MNQ, MES, etc.) | OAuth 2.0 | ~2 minutes |
| **Interactive Brokers** | Stocks, Options, Futures, Forex | API Key | ~5 minutes |
| **Binance** | Crypto spot and futures | API Key | ~3 minutes |
| **Polymarket** | Prediction markets | API Key | ~3 minutes |

## Connecting Tradovate (OAuth)

Tradovate uses OAuth 2.0 — you authorize Atomik through Tradovate's own login page. Atomik never sees your Tradovate password.

1. Go to **Settings > Broker Accounts** in your dashboard
2. Click **Connect Broker** and select **Tradovate**
3. Choose your environment:
   - **Demo** — Paper trading (recommended for testing)
   - **Live** — Real money trading
4. You'll be redirected to Tradovate's authorization page
5. Log in with your Tradovate credentials and click **Authorize**
6. You'll be redirected back to Atomik — your account should show as **Connected**

Once connected, Atomik can place orders and read positions/balances within the **trading** scope. It cannot withdraw funds or change account settings.

**Token Refresh:** Atomik automatically keeps your Tradovate connection alive via the Token Refresh Service. You don't need to re-authorize unless you explicitly disconnect.

## Connecting Interactive Brokers

Interactive Brokers connects via API credentials:

1. In your IB account, go to **Account Management > Settings > API**
2. Enable **API Access** and generate your API Key and Secret
3. In Atomik, go to **Settings > Broker Accounts > Connect Broker > Interactive Brokers**
4. Enter your API Key, Secret, and Account ID
5. Click **Test Connection** to verify, then **Save**

**Note:** IB requires Trader Workstation (TWS) or IB Gateway to be running for API access. Make sure it's active when you expect trades to execute.

## Connecting Binance

1. Log in to Binance and go to **API Management**
2. Create a new API key with **Enable Trading** permission
3. Optionally restrict to trusted IPs for security
4. In Atomik, go to **Settings > Broker Accounts > Connect Broker > Binance**
5. Enter your API Key and Secret Key
6. Click **Test Connection**, then **Save**

**Security tip:** Enable IP restrictions on your Binance API key and only allow Atomik's server IPs.

## Connecting Polymarket

1. Generate an API key from your Polymarket account settings
2. In Atomik, go to **Settings > Broker Accounts > Connect Broker > Polymarket**
3. Enter your API credentials
4. Click **Test Connection**, then **Save**

## Managing Multiple Accounts

You can connect multiple accounts from the same or different brokers. This is useful for:

- **Copy trading** — Run one strategy across several accounts
- **Broker diversification** — Spread risk across brokers
- **Separating strategies** — Dedicate different accounts to different strategies

Each connected account appears in **Settings > Broker Accounts** with its status, broker type, and environment.

### Account Limits by Tier

| Tier | Connected Accounts |
|------|-------------------|
| Free | 0 |
| Starter ($49/mo) | 2 |
| Trader ($129/mo) | 10 |
| Unlimited ($249/mo) | Unlimited |

## Disconnecting an Account

1. Go to **Settings > Broker Accounts**
2. Find the account and click **Disconnect**
3. This immediately:
   - Invalidates all stored tokens
   - Deactivates any strategies linked to this account
   - Decrements your connected accounts count

For extra security, also revoke API access from your broker's own settings page.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Connection shows "Disconnected" after working | Token may have expired. Try reconnecting. For Tradovate, re-authorize via OAuth. |
| "Account limit reached" error | You've hit your tier's account limit. Upgrade your plan or disconnect an unused account. |
| Test connection fails | Verify your API credentials are correct and that API access is enabled on your broker account. |
| Trades not executing on connected account | Check that the broker account is **Active** and that your strategy is linked to this specific account. |
| Tradovate re-authorization loop | Clear your browser cookies and try again. If persistent, disconnect and reconnect the account. |

## Next Steps

- [Your First Automated Trade](./first-trade) — Connect a broker and execute your first trade
- [Webhook Setup](./webhook-setup) — Create webhooks to receive trading signals
- [Copy Trading](./copy-trading) — Use multiple accounts with one strategy
- [Security](./security) — Secure your broker connections
