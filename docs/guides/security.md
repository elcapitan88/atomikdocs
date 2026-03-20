---
sidebar_position: 7
title: "Security Best Practices"
description: "Protect your Atomik Trading account, webhooks, broker connections, and API keys with these security best practices."
keywords: ["trading security", "webhook security", "account protection", "API key security", "broker security", "2FA"]
---

# Security Best Practices

This guide covers how to secure your Atomik Trading account, webhooks, and broker connections.

## Account Security

### Strong Passwords

- Use a unique password of at least 12 characters
- Include uppercase, lowercase, numbers, and special characters
- Never reuse passwords from other services
- Use a password manager (1Password, Bitwarden, etc.)

### Two-Factor Authentication (2FA)

Enable 2FA in **Settings > Security > Two-Factor Authentication**:

- **Authenticator App** (recommended): Google Authenticator, Authy, or Microsoft Authenticator
- **SMS verification**: Less secure but better than nothing
- **Hardware security keys**: Most secure option (YubiKey, etc.)

Save your backup recovery codes in a secure location in case you lose access to your 2FA device.

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

## API Key Best Practices

If you interact with Atomik programmatically:

- **Rotate keys regularly** — regenerate API credentials monthly
- **Use separate keys** for different strategies or environments
- **Never commit keys to version control** — use environment variables
- **Monitor usage** — check for unexpected API calls in your account activity
- **Enable IP restrictions** when your automation runs from a fixed IP

## If Your Account Is Compromised

Take these steps immediately:

1. **Change your password** in Settings > Security
2. **Regenerate or delete all webhook secrets** — this stops any unauthorized signal execution
3. **Disconnect all broker accounts** — revokes trading access
4. **Review recent trades** — check your broker account for unauthorized activity
5. **Enable 2FA** if not already active
6. **Contact support** at [support@atomiktrading.io](mailto:support@atomiktrading.io) for further investigation

## Security Checklist

- [ ] Strong, unique password with a password manager
- [ ] 2FA enabled (authenticator app preferred)
- [ ] Webhook secret keys saved securely
- [ ] IP allowlisting on webhooks (especially for TradingView)
- [ ] Broker connections reviewed periodically
- [ ] API keys rotated regularly
- [ ] No credentials in code repositories

## Next Steps

- [Webhook Setup](./webhook-setup) — Configure webhook security settings
- [Broker Connection](./broker-connection) — Connect and manage broker accounts
- [FAQ](./faq) — Common security questions
