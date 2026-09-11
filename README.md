# Hello World API

A lightweight, static-first project for testing and experimenting with LLM provider integrations. Designed as a local development playground — no server runtime required.

## Overview

This project provides a standardized API contract for interacting with multiple LLM providers through a unified interface. It ships with a browser-based health screen, provider routing configuration, and an OpenAPI specification for client generation.

**Key characteristics:**

- Zero build step for local development
- Multi-provider support via configuration
- Static health dashboard
- OpenAPI 3.0.3 compliant contract

## Project Structure

```text
llm-api-lab/
├── .github/workflows/check.yml   # CI configuration validation
├── assets/css/main.css            # compiled Tailwind output
├── config/
│   ├── providers.json             # provider routing registry
│   └── runtime.env.example        # environment variable template
├── docs/
│   ├── CHANGELOG.md               # release history
│   ├── CONTRIBUTING.md            # contribution guidelines
│   ├── integration.md             # integration and usage guide
│   └── SECURITY.md                # security policy
├── pages/
│   ├── docs.html                  # documentation page
│   └── providers.html             # provider directory
├── src/
│   ├── scripts/                   # browser behavior modules
│   └── styles/tailwind.css        # source styles
├── api-keys.env                   # LLM API key placeholders
├── index.html                     # main dashboard
├── openapi.json                   # API contract specification
├── package.json                   # scripts and dependencies
├── sample-request.json            # request/response example
└── status.json                    # service status metadata
```

## Getting Started

### Prerequisites

- A modern web browser
- Node.js (optional, for build scripts and validation)
- API keys from one or more supported providers

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zis3c/LLM-API-Lab.git
   cd LLM-API-Lab
   ```

2. Install dependencies (optional):

   ```bash
   npm install
   ```

3. Configure your API keys:

   ```bash
   cp api-keys.env .env
   # Edit .env with your actual credentials
   ```

4. Open `index.html` in your browser to access the dashboard.

## Supported Providers

| Provider | Environment Variable | Base URL |
|----------|---------------------|----------|
| OpenAI | `OPENAI_API_KEY` | `https://api.openai.com/v1` |
| Anthropic | `ANTHROPIC_API_KEY` | `https://api.anthropic.com` |
| Google AI | `GOOGLE_AI_API_KEY` | `https://generativelanguage.googleapis.com` |
| OpenRouter | `OPENROUTER_API_KEY` | `https://openrouter.ai/api/v1` |
| Mistral | `MISTRAL_API_KEY` | `https://api.mistral.ai/v1` |
| DeepSeek | `DEEPSEEK_API_KEY` | — |
| Cohere | `COHERE_API_KEY` | — |
| HuggingFace | `HUGGINGFACE_API_KEY` | — |
| Replicate | `REPLICATE_API_KEY` | — |
| Pinecone | `PINECONE_API_KEY` | — |

> Provider routing is configured in `config/providers.json`. Add new providers by extending this registry.

## API Endpoints

The project defines the following REST surface:

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Service health check |
| `GET` | `/v1/models` | List available models |
| `POST` | `/v1/chat/completions` | Create a chat completion |

Full request/response schemas are documented in `openapi.json`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run check` | Validate provider configuration and required files |
| `npm test` | Run syntax checks on browser scripts |
| `npm run build` | Compile Tailwind CSS to production output |
| `npm run watch:css` | Watch and rebuild CSS on changes |

## Development

This project requires no build step for basic usage — simply open `index.html` in a browser. For CSS changes or validation:

```bash
npm run check      # validate config
npm run build      # rebuild CSS
```

Provider endpoints are defined in `config/providers.json`. Integration documentation is available in `docs/integration.md`.

## Documentation

| Document | Description |
|----------|-------------|
| [Integration Guide](docs/integration.md) | Provider setup and endpoint usage |
| [Contributing](docs/CONTRIBUTING.md) | Development workflow and PR guidelines |
| [Changelog](docs/CHANGELOG.md) | Version history and releases |
| [Security Policy](docs/SECURITY.md) | Vulnerability reporting and credential handling |
| [OpenAPI Spec](openapi.json) | Machine-readable API contract |

## Security

- `api-keys.env` contains **non-functional placeholder values only**
- Never commit real API keys or production credentials to this repository
- Use environment-specific secrets management for live deployments
- Rotate any credentials that may have been exposed inadvertently

See [SECURITY.md](SECURITY.md) for the full security policy.

## License

MIT
