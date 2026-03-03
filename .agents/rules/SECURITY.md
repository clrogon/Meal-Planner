# SECURITY.md — Security Rules

---

## Pre-Task Security Checklist

| Category | Check |
|---|---|
| Injection | Are all inputs sanitized? |
| Secrets | No keys in code? |
| Logging | No sensitive data in console logs? |

---

## PR Security Checklist

Before marking a PR ready:
- [ ] No PII in logs or API responses
- [ ] No hardcoded credentials
- [ ] All new dependencies audited
