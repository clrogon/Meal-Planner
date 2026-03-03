# NON_NEGOTIABLE.md — Global Rules
> These rules apply to every task, every file, every agent.

---

## Security Absolutes

1. **Secrets** — Never hardcode API keys, tokens, or passwords. Use environment variables.
2. **Dependencies** — Do not add packages with high/critical vulnerabilities.
3. **XSS** — Sanitize user-generated content before rendering in the UI.

**If any security issues are detected**, add a comment:
```
// SECURITY WARNING: [description of issue]
```

---

## Documentation Absolutes

- **Every behavioral change must update the docs.**
- **CHANGELOG.md must always have an `[Unreleased]` entry.**

---

## Code Quality Absolutes

- The project's linter (`npm run lint`) must pass before any commit.
- Never remove a failing test. Fix it.
- Fix all JavaScript errors introduced during development.
