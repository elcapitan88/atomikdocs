---
sidebar_position: 3
title: "Webhook Setup Guide"
description: "Learn how to create, configure, and secure webhooks in Atomik Trading. Includes payload format, TradingView integration, rate limits, and troubleshooting."
keywords: ["webhook setup", "TradingView webhook", "trading automation webhook", "webhook payload", "webhook security"]
---

# Webhook Setup Guide

Webhooks are the core of Atomik Trading's automation. They let external platforms like TradingView send trading signals directly to your connected broker accounts — executing trades in milliseconds without manual intervention.

## How Webhooks Work

```
TradingView Alert → HTTP POST → Atomik Webhook URL → Match Strategy → Execute on Broker
```

1. You create a webhook in Atomik and get a unique URL + secret key
2. You paste that URL into TradingView (or any alert source)
3. When an alert fires, it sends a JSON payload to your webhook URL
4. Atomik validates the request, matches it to your activated strategy, and executes the trade on your linked broker account

## Creating a Webhook

1. Log in to your Atomik Trading dashboard
2. Navigate to **Webhooks** in the sidebar
3. Click **Create New Webhook**
4. Configure settings:
   - **Name**: A descriptive label (e.g., "ES Long Entry")
   - **Description**: Optional notes about what this webhook does
5. Click **Save** — you'll receive:
   - A **webhook token** (the unique URL path)
   - A **secret key** (for request validation — save this immediately, it won't be shown again)

Your full webhook URL will be:

```
https://api.atomiktrading.io/api/v1/webhooks/{your-token}?secret={your-secret-key}
```

## Webhook Payload Format

Atomik expects a JSON body with two fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `action` | string | Yes | `"BUY"` or `"SELL"` (case-insensitive) |
| `comment` | string | No | Exit signal type (see below) |

### Basic Examples

**Open a long position:**
```json
{
  "action": "BUY"
}
```

**Close a long position (full exit):**
```json
{
  "action": "SELL",
  "comment": "EXIT_FINAL"
}
```

**Partial exit (50% of position):**
```json
{
  "action": "SELL",
  "comment": "EXIT_50"
}
```

### Exit Comment Types

The `comment` field controls partial and full exits:

| Comment | Effect |
|---------|--------|
| `EXIT_50` or `EXIT_HALF` | Close 50% of position |
| `EXIT_25` | Close 25% of position |
| `EXIT_75` | Close 75% of position |
| `EXIT_FINAL`, `EXIT_ALL`, or `EXIT_100` | Close 100% of position |
| `EXIT_33` (any number) | Close that percentage of position |
| `ENTRY` | New position entry |
| *(no comment)* | Defaults to full exit (100%) |

Quantities are rounded up using `math.ceil()` to avoid leaving fractional shares.

## TradingView Integration

### Setting Up Alerts

1. Open your chart in TradingView and add your indicator or strategy
2. Click the **Alert** button (bell icon) or press `Alt+A`
3. Set your condition (e.g., "RSI crosses below 30")
4. Under **Notifications**, check **Webhook URL**
5. Paste your full Atomik webhook URL (including `?secret=`)
6. In the **Message** field, enter your payload:

**For a simple buy alert:**
```json
{"action": "BUY"}
```

**For a sell/exit alert:**
```json
{"action": "SELL", "comment": "EXIT_FINAL"}
```

### Pine Script Strategy Example

If you're using a Pine Script strategy, you can use TradingView's built-in variables:

```pinescript
//@version=5
strategy("My Strategy", overlay=true)

// Your entry/exit logic
longCondition = ta.crossover(ta.sma(close, 20), ta.sma(close, 50))
shortCondition = ta.crossunder(ta.sma(close, 20), ta.sma(close, 50))

if longCondition
    strategy.entry("Long", strategy.long, comment="ENTRY")

if shortCondition
    strategy.close("Long", comment="EXIT_FINAL")
```

Then set the webhook message to:
```json
{"action": "{{strategy.order.action}}", "comment": "{{strategy.order.comment}}"}
```

## Webhook Security

### Secret Key Validation

By default, webhooks require a valid secret key passed as a query parameter. Requests without a matching secret receive a `401 Unauthorized` response.

### IP Allowlisting

You can restrict which IP addresses can trigger your webhook:

1. Go to **Webhooks** → select your webhook → **Edit**
2. Enter allowed IPs as a comma-separated list (e.g., `52.89.214.238, 34.212.75.30`)
3. Save — any request from a non-listed IP will receive `403 Forbidden`

TradingView sends alerts from a known set of IP addresses listed in their documentation.

### Rate Limiting

Webhooks are rate-limited to **10 requests per second** to support high-frequency strategies while preventing abuse. Exceeding this limit returns `429 Too Many Requests`.

Additionally, a **1-second idempotency window** (Redis-backed) prevents duplicate executions from repeated signals.

## Webhook Limits by Tier

| Tier | Active Webhooks |
|------|----------------|
| Free | 0 |
| Starter ($49/mo) | 3 |
| Trader ($129/mo) | 10 |
| Unlimited ($249/mo) | Unlimited |

See [Subscription & Pricing](./subscription-pricing) for full tier details.

## Testing Your Webhook

1. **Check the Webhook Logs**: After triggering an alert, go to **Webhooks** → your webhook → **Logs** to see incoming requests, validation status, and any errors
2. **Use a test alert**: Create a TradingView alert with a condition that triggers immediately (e.g., "Price crosses above $0.01") to verify the connection without waiting for a real signal
3. **Paper trade first**: Connect a paper/demo broker account and test with real alerts before going live

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Alert fires but no trade executes | Check webhook logs for errors. Verify the secret key is correct in the URL. Confirm the webhook is linked to an activated strategy with an active broker account. |
| `401 Unauthorized` | Secret key is missing or incorrect. Re-copy from webhook settings. |
| `403 Forbidden` | IP not in allowlist, or your subscription is inactive. Check both. |
| `429 Too Many Requests` | You're exceeding 10 requests/second. Reduce alert frequency. |
| `404 Not Found` | Webhook token is wrong or webhook has been deleted. Verify the URL. |
| Duplicate trades | The 1-second idempotency window should prevent this. If duplicates persist, check that your alert isn't firing multiple times per bar (use "Once Per Bar Close"). |

## Response Format

Successful webhook requests return `202 Accepted`:

```json
{
  "status": "accepted",
  "message": "Webhook received and being processed",
  "webhook_id": 123,
  "timestamp": "2026-03-20T12:34:56.789123"
}
```

The trade is processed asynchronously — check your dashboard or broker account for fill confirmation.

## Next Steps

- [Your First Automated Trade](./first-trade) — End-to-end walkthrough
- [Trading Strategies](./trading-strategies) — Strategy types and configuration
- [Security Best Practices](./security) — Full security hardening guide
