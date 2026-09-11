# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public issue for security vulnerabilities.**

Instead, please:

1. Email the maintainers directly, or
2. Open a private security advisory on GitHub

Include the following in your report:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if applicable)

## Credential Handling

- All API keys in `api-keys.env` are **non-functional placeholders**
- Never commit real credentials, tokens, or secrets to this repository
- Use environment variables or secrets management for production deployments

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x   | Yes       |

## Response Timeline

- Acknowledgment: within 48 hours
- Initial assessment: within 1 week
- Fix or mitigation: depends on severity

## Best Practices

- Use separate API keys for development and production
- Rotate credentials regularly
- Monitor provider dashboards for unusual activity
- Enable two-factor authentication on provider accounts
