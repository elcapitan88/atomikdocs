---
sidebar_position: 3
---

# Trading Strategies

This guide explores how to implement various trading strategies using AtomikTrading. You'll learn how to set up common trading strategies and automate them using our platform.

## Introduction to Strategy Automation

Trading strategies can be automated in AtomikTrading through:

1. **Webhooks**: Receive signals from external platforms and execute trades
2. **API Integration**: Programmatically create and manage strategies
3. **Built-in Strategy Builder**: Create strategies directly in our platform (Coming Soon)

## Common Trading Strategies

### 1. Moving Average Crossover

A simple yet effective strategy that generates signals when fast and slow moving averages cross each other.

#### Implementation

1. **Platform Setup**: Configure TradingView or another platform to monitor moving average crossovers
2. **Webhook Configuration**:
   
   ```json
   {
     "action": "{{strategy.order.action}}",
     "symbol": "{{ticker}}",
     "quantity": "{{strategy.position_size}}",
     "orderType": "market",
     "comment": "MA Crossover: {{fast_length}} and {{slow_length}}"
   }