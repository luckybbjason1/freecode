# Pre-Commit Security Scan — claude-code-korea
Date: 2026-04-06 | Verdict: ✅ SAFE TO COMMIT

| Severity | New | Existing | Total |
|----------|-----|----------|-------|
| 🔴 Critical | 0 | 0 | 0 |
| 🟠 High | 0 | 0 | 0 |
| 🟡 Medium | 0 | 0 | 0 |
| 🟢 Low | 0 | 48 | 48 |
| **Total** | **0** | **48** | **48** |

Risk Score: 54/100 | No new issues in staged changes.

## Existing Findings (pre-existing, not blocked)
- gitleaks: 2x generic-api-key (false positive — localStorage key names in partners.js)
- semgrep: 46x missing-integrity (SRI missing on CDN scripts in HTML files)
