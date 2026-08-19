---
sidebar_position: 7
title: "Security Best Practices"
description: "Protect your Atomik Trading account, webhooks, broker connections, and API keys with these security best practices."
keywords: ["trading security", "webhook security", "account protection", "API key security", "broker security"]
---

# Security Best Practices

This guide covers how to secure your Atomik Trading account, webhooks, and broker connections.

## Account Security

### Strong Passwords

- Use a unique password of at least 12 characters
- Include uppercase, lowercase, numbers, and special characters
- Never reuse passwords from other services
- Use a password manager (1Password, Bitwarden, etc.)

### Sign in with Google

Atomik supports **Sign in with Google**. If you use it, your Atomik login inherits every protection on your Google account — including Google's two-factor authentication and login alerts. For most people this is the strongest practical account protection available today.

### Session Security

Atomik uses JWT tokens for authentication:

- **Access tokens** expire after 90 minutes
- **Refresh tokens** expire after 7 days
- On `401 Unauthorized`, you're automatically logged out and redirected to login
- Tokens are stored in `localStorage` — always log out on shared computers

## Webhook Security

Webhooks are the entry point for trade execution, so securing them is critical.

### Secret Key Validation

Every webhook has a secret key generated at creation. By default, all incoming requests must include the correct secret as a query parameter:

```
https://api.atomiktrading.io/api/v1/webhooks/{token}?secret={secret-key}
```

Requests with a missing or incorrect secret receive `401 Unauthorized`.

**Important:** The secret key is only shown once at creation. If you lose it, delete the webhook and create a new one.

### IP Allowlisting

Restrict which IP addresses can trigger your webhook:

1. Edit your webhook in the dashboard
2. Add allowed IPs as a comma-separated list
3. Any request from an IP not on the list gets `403 Forbidden`

If you use TradingView, add their webhook IP addresses (listed in TradingView's documentation) to your allowlist.

### Rate Limiting

Webhooks are rate-limited to **10 requests per second** with a **1-second idempotency window** to prevent duplicate execution. This protects against accidental signal floods while supporting high-frequency strategies.

## Broker Connection Security

### OAuth Token Handling

When you connect a broker like Tradovate, Atomik uses **OAuth 2.0** — you authorize access through the broker's own login page. Atomik never sees your broker password.

- OAuth tokens are stored encrypted in the database
- Tokens are automatically refreshed by the Token Refresh Service
- Atomik can only perform actions within the **trading** scope you authorized

### Disconnecting a Broker

To revoke Atomik's access to a broker account:

1. Go to **Settings > Broker Accounts**
2. Click **Disconnect** on the account
3. This immediately invalidates all tokens and sets the account to inactive

For additional safety, you can also revoke API access from your broker's own settings page.

### What Atomik Can and Can't Do

| Can Do | Cannot Do |
|--------|-----------|
| Place market orders on your behalf | Withdraw funds |
| Read account balances and positions | Change account settings |
| Monitor open orders | Access other broker accounts |

## Credentials You Provide

Some connections use credentials you supply (for example a TopstepX API key), and connected AI assistants hold scoped access tokens:

- **Treat broker API keys like passwords** — never paste them anywhere except the Atomik connect dialog, and never commit them to code or notes
- **Revoke unused keys at the source** — if you stop using a connection, revoke the key on the broker's side too, not just in Atomik
- **Review connected AI assistants** — anything connected via the [MCP connector](./mcp-connector) is listed under **Settings > Connected Accounts > Connected AIs**, where you can revoke access at any time

## If Your Account Is Compromised

Take these steps immediately:

1. **Change your password** immediately
2. **Delete all webhooks and create new ones** — this rotates the secrets and stops any unauthorized signal execution
3. **Disconnect all broker accounts** — revokes trading access
4. **Revoke connected AI assistants** in Settings > Connected Accounts
5. **Review recent trades** — check your broker account for unauthorized activity
6. **Contact support** at [support@atomiktrading.io](mailto:support@atomiktrading.io) for further investigation

## Security Checklist

- [ ] Strong, unique password with a password manager (or Sign in with Google)
- [ ] Webhook secret keys saved securely
- [ ] IP allowlisting on webhooks (especially for TradingView)
- [ ] Broker connections reviewed periodically
- [ ] Connected AI assistants reviewed periodically
- [ ] No credentials in code repositories or notes

## Next Steps

- [Webhook Setup](./webhook-setup) — Configure webhook security settings
- [Broker Connection](./broker-connection) — Connect and manage broker accounts
- [FAQ](./faq) — Common security questions
