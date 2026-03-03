# AGENTS.md — Meal-Planner
> Read this file first. Every AI coding agent working on this repository must follow these rules. Detailed rule sets are in `.agents/rules/` — load them on demand as instructed below.

---

## Project Identity

**Meal-Planner** is a web application for planning meals.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | Vite, JavaScript |
| Package manager | **npm** |

---

## Commands

```bash
npm install          # install dependencies
npm run dev              # start dev server
npm run build             # production build
npm run lint             # linting
npm test             # testing
```

---

## Mandatory Pre-Task Rules

Before writing a single line of code, load the relevant rule files:

| Task type | Load this rule file |
|---|---|
| ANY task | `.agents/rules/NON_NEGOTIABLE.md` — always load first |
| Documentation | `.agents/rules/DOCUMENTATION.md` |
| Testing | `.agents/rules/TESTING.md` |
| Security | `.agents/rules/SECURITY.md` |

---

## Permissions

### ✅ Allowed without asking
- Run tests
- Run lint
- Read all files
- Create files in src/

### ⚠️ Ask first
- Any action not listed in allowed or forbidden

### 🚫 Never do
- Push to main
- Modify secrets
- Remove tests
- Hardcode credentials

---

## PR Format

Title: `[scope] Short imperative description`
Examples: `[ui] Fix navigation spacing`, `[logic] Update meal selection algorithm`

Every PR must confirm:
- [ ] Linter passes
- [ ] Relevant tests pass
- [ ] `CHANGELOG.md` updated under `[Unreleased]`
- [ ] Docs updated if any public behavior changed

---

*This file is version-controlled. Add a new rule here the second time you correct the same agent mistake — not the first.*
