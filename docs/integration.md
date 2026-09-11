# Integration Guide

This document explains how to set up and use the Hello World API with supported LLM providers.

## Prerequisites

- API key(s) from one or more supported providers
- A client capable of making HTTP requests (curl, Postman, SDK, etc.)

## Quick Start

1. Copy the environment template:

   ```bash
   cp api-keys.env .env
   ```

2. Edit `.env` and add your API key(s) for at least one provider.

3. Select a provider from `config/providers.json` and note its environment variable name.

4. Test the connection:

   ```bash
   curl -H "Authorization: Bearer $OPENAI_API_KEY" \
        https://api.openai.com/v1/models
   ```

## Provider Configuration

Provider routing is defined in `config/providers.json`:

```json
{
  "default": "openai",
  "providers": {
    "openai": {
      "env": "OPENAI_API_KEY",
      "baseUrl": "https://api.openai.com/v1"
    },
    "anthropic": {
      "env": "ANTHROPIC_API_KEY",
      "baseUrl": "https://api.anthropic.com"
    }
  }
}
```

Each provider entry includes:

| Field | Description |
|-------|-------------|
| `env` | Environment variable name containing the API key |
| `baseUrl` | Provider's API base URL |

To add a new provider, add a new entry to this file and include the corresponding environment variable in your `.env`.

## API Endpoints

### Health Check

```http
GET /health
```

Returns the service status. No authentication required.

**Response:**

```json
{
  "status": "operational"
}
```

### List Models

```http
GET /v1/models
Authorization: Bearer <API_KEY>
```

Returns available models for the configured provider.

### Chat Completions

```http
POST /v1/chat/completions
Authorization: Bearer <API_KEY>
Content-Type: application/json
```

**Request body:**

```json
{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ],
  "temperature": 0.2
}
```

**Parameters:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `model` | string | Yes | Model identifier |
| `messages` | array | Yes | Conversation messages |
| `temperature` | number | No | Sampling temperature (0-2, default: 0.2) |

**Response:**

```json
{
  "id": "cmpl-abc123",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! I'm doing well, thank you."
      }
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 12,
    "total_tokens": 22
  }
}
```

## Request Lifecycle

```text
Client Request
    │
    ▼
┌─────────────────┐
│ Select Provider │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Read API Key    │
│ from Env Var    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Attach Bearer   │
│ Authorization   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Send Request to │
│ Provider API    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Return Normalized│
│ Response        │
└─────────────────┘
```

## Status Codes

| Status | Meaning |
|--------|---------|
| `operational` | Service is available and healthy |
| `verified` | Configuration check passed |
| `degraded` | Partial functionality, provider or dependency issue |

Current status is recorded in `status.json`.

## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| `401 Unauthorized` | Invalid or missing API key | Verify the correct environment variable is set and contains a valid key |
| `404 Not Found` | Incorrect endpoint URL | Check the provider's `baseUrl` in `config/providers.json` |
| CORS Error | Browser-based request to provider | Use a server-side client or proxy |
| `npm run check` fails | Missing required files or invalid config | Ensure `index.html` exists and `config/providers.json` is valid JSON |

## Security Notes

- Never expose API keys in client-side code
- Use environment variables for all credentials
- The browser dashboard is a static health screen — it does not send provider requests
- See [SECURITY.md](SECURITY.md) for the full security policy
