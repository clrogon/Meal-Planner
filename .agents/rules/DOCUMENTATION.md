# DOCUMENTATION.md — Documentation Rules

---

## Documentation-First Policy

Documentation is the source of truth. Any change to behavior without a documentation update is considered incomplete.

---

## What to Update and When

| You changed... | Update these files |
|---|---|
| A module's behavior or UI | `README.md` |
| A function signature | Inline JSDoc comments |
| Security controls | `SECURITY.md` |
| Any bug fix or feature | `CHANGELOG.md` under `[Unreleased]` |

---

## CHANGELOG.md Format

Always follow [Keep a Changelog](https://keepachangelog.com) format.
