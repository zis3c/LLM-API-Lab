# Contributing

Thank you for your interest in contributing to Hello World API. This document outlines the guidelines for submitting changes to this project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

## Development Workflow

### Making Changes

- Keep changes focused and minimal
- Follow the existing code style and conventions
- Test your changes locally before submitting

### Before Submitting

Run the following checks to ensure your changes don't break anything:

```bash
npm test            # syntax validation
npm run check       # configuration validation
npm run build       # rebuild CSS if styles changed
```

### Commit Messages

Write clear, concise commit messages that describe what changed:

- `Add DeepSeek provider support`
- `Fix CORS handling in integration docs`
- `Update README with new environment variables`

Avoid vague messages like "fix" or "update".

## Pull Request Process

1. Ensure all checks pass (`npm test` and `npm run check`)
2. Update documentation if your change affects public behavior
3. Keep pull requests small and focused on a single change
4. Provide a clear description of what changed and why

## Security

- Never commit API keys, tokens, or credentials
- Use placeholder values in configuration files
- If you discover a security issue, see [SECURITY.md](SECURITY.md)

## Questions?

Open an issue for discussion before submitting large changes.
