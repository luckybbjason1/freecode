# claudekorea Phase 0 实现计划 — 起死回生 + 开始变现

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** 清掉违规/杂物、把首页从"마켓플레이스"重定位成"학습 권위", 全站植入 kingskill CTA, 让 claudekorea.com 起死回生并开始变现。

**Architecture:** 就地翻新静态 HTML 站 (9 个独立页面共享 assets/js), GitHub Pages 部署 (deploy.yml 整站 `.` 发布)。无后端。"测试"= grep 本地文件 + 部署后 curl 公网断言。

**Tech Stack:** 静态 HTML/CSS/JS, GitHub Pages, Gumroad (kingskill 收款)。

---

## File Structure

- 9 个页面 HTML (根目录): `index.html blog.html agents.html commands.html hooks.html mcps.html plugins.html skills.html 404.html` — 移除 BC.GAME、植入 kingskill CTA
- `index.html` — 额外重写 hero 文案 (定位)
- `.gitignore` (新建/追加) — 忽略扫描报告产物
- `xp-admin-2025/` — 安全处置
- 扫描报告 13 文件 — git rm

---

## Task 1: 移除 BC.GAME 赌博 banner（全 9 页）

**Files:** Modify: `index.html`(2处) `blog.html` `agents.html` `commands.html` `hooks.html` `mcps.html` `plugins.html` `skills.html` `404.html`(各1处)

待移除的块（9 文件中一致，index.html 出现 2 次）:
```html
<!-- BC.GAME Affiliate Banner (static, always visible) -->
<div class="bc-game-banner" style="width:100%;margin-top:64px;padding:12px 16px;text-align:center;background:transparent;">
  <a href="https://bc.game/i-o11rzmly-n/" target="_blank" rel="noopener noreferrer sponsored" aria-label="BC.GAME">
    <img
      src="https://bc.game/assets/banner_d3-DrARZyMG.gif"
      alt="BC.GAME"
      loading="lazy"
      style="width:100%;max-width:728px;height:auto;display:block;margin:0 auto;border-radius:8px;"
    />
  </a>
</div>
```

- [ ] **Step 1: 用 Python 脚本精确移除每个文件中的该 `<div class="bc-game-banner">…</div>` 块（连同上方注释）**

Run:
```bash
cd ~/freecode && python3 - <<'PY'
import re, glob
files = ['index.html','blog.html','agents.html','commands.html','hooks.html','mcps.html','plugins.html','skills.html','404.html']
pat = re.compile(r'[ \t]*<!-- BC\.GAME Affiliate Banner.*?</div>\s*\n', re.S)
for f in files:
    s = open(f, encoding='utf-8').read()
    new, n = pat.subn('', s)
    open(f,'w',encoding='utf-8').write(new)
    print(f, 'removed', n)
PY
```
Expected: 每文件 removed 1（index.html removed 2）

- [ ] **Step 2: 验证 BC.GAME 全清零**

Run: `cd ~/freecode && grep -ric 'bc\.game' *.html`
Expected: 所有文件 0

- [ ] **Step 3: 验证页面结构没破（nav 后直接接 ad-slot / page-hero）**

Run: `cd ~/freecode && grep -A1 '</nav>' mcps.html | head -2`
Expected: 不再有 bc-game-banner，结构完整

- [ ] **Step 4: Commit**

```bash
cd ~/freecode && git add -A && git commit -m "fix: remove BC.GAME gambling affiliate banner from all pages"
```

---

## Task 2: 扫描报告移出 repo + .gitignore

**Files:** Delete (13): `checkov-report.json checkov-stderr.txt gitleaks-report.json gitleaks-stderr.txt grype-report.json grype-stderr.txt hadolint-report.json hadolint-stderr.txt npm-audit.json npm-audit-stderr.txt semgrep-report.json semgrep-stderr.txt precommit-scan-claude-code-korea-20260406.md`; Create/Modify: `.gitignore`

- [ ] **Step 1: git rm 扫描报告**

```bash
cd ~/freecode && git rm checkov-report.json checkov-stderr.txt gitleaks-report.json gitleaks-stderr.txt grype-report.json grype-stderr.txt hadolint-report.json hadolint-stderr.txt npm-audit.json npm-audit-stderr.txt semgrep-report.json semgrep-stderr.txt precommit-scan-claude-code-korea-20260406.md
```

- [ ] **Step 2: 追加 .gitignore（防再次提交）**

```bash
cd ~/freecode && cat >> .gitignore <<'EOF'

# CI/安全扫描产物 (不入库)
*-report.json
*-stderr.txt
checkov-report.json
gitleaks-report.json
grype-report.json
hadolint-report.json
semgrep-report.json
npm-audit.json
precommit-scan-*.md
EOF
```

- [ ] **Step 3: 验证**

Run: `cd ~/freecode && git status --short && ls *-report.json 2>/dev/null | wc -l`
Expected: 报告文件已 staged for deletion；工作区即使重新生成也被 ignore

- [ ] **Step 4: Commit**

```bash
cd ~/freecode && git add .gitignore && git commit -m "chore: remove committed CI scan reports, gitignore them"
```

---

## Task 3: xp-admin-2025 安全处置

**背景:** `xp-admin-2025/index.html` 是客户端管理面板 (管 partners/ads/data via localStorage)，无任何页面链接但整站部署到 Pages → 公网 `claudekorea.com/xp-admin-2025/` 可达。无后端=无服务端密钥泄露，但应防爬虫索引 + 确认无硬编码敏感信息。

**Files:** Inspect: `xp-admin-2025/index.html` `assets/js/admin.js`; Modify: `xp-admin-2025/index.html`, `robots.txt`

- [ ] **Step 1: 确认 admin 面板无硬编码密钥/密码**

Run: `cd ~/freecode && grep -niE 'password|secret|api[_-]?key|token|sk-' xp-admin-2025/index.html assets/js/admin.js | grep -ivE 'localstorage|placeholder|//|key name' | head`
Expected: 无真实凭证（若有，停下报告主人）

- [ ] **Step 2: 给 admin 页加 noindex（防搜索引擎收录后台）**

在 `xp-admin-2025/index.html` 的 `<head>` 内（`<meta charset>` 之后）插入:
```html
<meta name="robots" content="noindex, nofollow">
```

- [ ] **Step 3: robots.txt 禁止爬 admin**

在 `robots.txt` 追加:
```
Disallow: /xp-admin-2025/
```

- [ ] **Step 4: 验证**

Run: `cd ~/freecode && grep -i noindex xp-admin-2025/index.html && grep xp-admin robots.txt`
Expected: 两处都命中

- [ ] **Step 5: Commit**

```bash
cd ~/freecode && git add xp-admin-2025/index.html robots.txt && git commit -m "security: noindex admin panel + robots disallow /xp-admin-2025/"
```

---

## Task 4: 首页 hero 重定位（마켓플레이스 → 학습 권위）

**Files:** Modify: `index.html:165-180`（hero eyebrow + subtitle）

**说明:** 保留现有 hero 精致结构/动画/搜索/stats/终端视觉，只改文案，把定位从"浏览市场"升级成"学 Claude 的权威地"。

- [ ] **Step 1: 改 eyebrow 文案 (index.html:167)**

替换:
```html
        <span class="hero__eyebrow-text">한국어 Claude Code 마켓플레이스 · 무료</span>
```
为:
```html
        <span class="hero__eyebrow-text">한국어 Claude Code 학습 허브 · 가이드 &amp; 마켓플레이스</span>
```

- [ ] **Step 2: 改 subtitle 文案 (index.html:177-180)**

替换:
```html
      <p class="hero__subtitle" data-aos="fade-up" data-aos-delay="240" data-aos-duration="600">
        터미널에서 바로 쓰는 AI 개발 파트너.<br>
        에이전트·스킬·MCP·명령어 <strong style="color:var(--text-primary);font-weight:600;">1,000개+</strong>를 한국어로 탐색하세요.
      </p>
```
为:
```html
      <p class="hero__subtitle" data-aos="fade-up" data-aos-delay="240" data-aos-duration="600">
        Claude Code, 한국어로 제대로 배우는 곳.<br>
        실전 가이드와 에이전트·스킬·MCP <strong style="color:var(--text-primary);font-weight:600;">1,000개+</strong>로 오늘 바로 시작하세요.
      </p>
```

- [ ] **Step 3: 验证**

Run: `cd ~/freecode && grep -c '학습 허브' index.html && grep -c '제대로 배우는' index.html`
Expected: 各 1

- [ ] **Step 4: Commit**

```bash
cd ~/freecode && git add index.html && git commit -m "feat: reposition homepage hero from marketplace to learning hub"
```

---

## Task 5: kingskill CTA 全站植入（替代 BC.GAME 原位）

**Files:** Modify: 全 9 页面 HTML（在原 BC.GAME banner 位置=`</nav>` 之后插入 kingskill CTA）

**CTA 块（自家产品，rel 用 noopener 即可，无需 nofollow）:**
```html
<!-- kingskill CTA -->
<div class="kingskill-cta" style="width:100%;margin-top:64px;padding:14px 16px;text-align:center;">
  <a href="https://kingskill.gumroad.com/l/pfsjmu" target="_blank" rel="noopener"
     style="display:inline-block;max-width:728px;width:100%;padding:14px 22px;border-radius:10px;font-weight:700;text-decoration:none;color:#0b0b12;background:linear-gradient(90deg,#f5c451,#e8a93d);box-shadow:0 4px 18px rgba(232,169,61,.35);">
    ⚡ Claude Code Skills Bundle — 검증된 스킬 5종, 바로 적용 ($19) →
  </a>
</div>
```

- [ ] **Step 1: 在每个页面 `</nav>` 后插入 CTA 块**

Run:
```bash
cd ~/freecode && python3 - <<'PY'
files = ['index.html','blog.html','agents.html','commands.html','hooks.html','mcps.html','plugins.html','skills.html','404.html']
cta = '''<!-- kingskill CTA -->
<div class="kingskill-cta" style="width:100%;margin-top:64px;padding:14px 16px;text-align:center;">
  <a href="https://kingskill.gumroad.com/l/pfsjmu" target="_blank" rel="noopener"
     style="display:inline-block;max-width:728px;width:100%;padding:14px 22px;border-radius:10px;font-weight:700;text-decoration:none;color:#0b0b12;background:linear-gradient(90deg,#f5c451,#e8a93d);box-shadow:0 4px 18px rgba(232,169,61,.35);">
    ⚡ Claude Code Skills Bundle — 검증된 스킬 5종, 바로 적용 ($19) →
  </a>
</div>
'''
for f in files:
    s = open(f, encoding='utf-8').read()
    if 'kingskill-cta' in s:
        print(f, 'already has CTA, skip'); continue
    # 在第一个 </nav> 后插入
    idx = s.find('</nav>')
    if idx == -1:
        print(f, 'NO </nav> — SKIP, needs manual'); continue
    pos = idx + len('</nav>')
    s = s[:pos] + '\n' + cta + s[pos:]
    open(f,'w',encoding='utf-8').write(s)
    print(f, 'CTA inserted')
PY
```
Expected: 9 文件 CTA inserted

- [ ] **Step 2: 验证每页都有 kingskill CTA 且只 1 个**

Run: `cd ~/freecode && for f in index blog agents commands hooks mcps plugins skills 404; do echo "$f: $(grep -c 'kingskill-cta' $f.html)"; done`
Expected: 每个 1

- [ ] **Step 3: 验证 Gumroad 链接正确**

Run: `cd ~/freecode && grep -c 'kingskill.gumroad.com/l/pfsjmu' index.html`
Expected: ≥1

- [ ] **Step 4: Commit**

```bash
cd ~/freecode && git add -A && git commit -m "feat: add kingskill Skills Bundle CTA site-wide (replaces removed gambling banner)"
```

---

## Task 6: 部署 + 公网验证（self-check 铁律）

- [ ] **Step 1: push 触发 GitHub Pages 部署**

```bash
cd ~/freecode && git push origin main
```

- [ ] **Step 2: 等部署完成**

Run: `cd ~/freecode && sleep 45 && gh run list --limit 1`
Expected: 最新 run status=completed result=success

- [ ] **Step 3: 公网验证 BC.GAME 已消失 + kingskill 已上线 + 站点 200**

Run:
```bash
for u in "https://claudekorea.com/" "https://claudekorea.com/skills.html" "https://claudekorea.com/blog.html"; do
  code=$(curl -s -o /tmp/ck.html -w "%{http_code}" -L --max-time 15 "$u")
  bc=$(grep -ic 'bc\.game' /tmp/ck.html)
  ks=$(grep -ic 'kingskill.gumroad.com' /tmp/ck.html)
  echo "$u → HTTP=$code BC.GAME=$bc kingskill=$ks"
done
```
Expected: 每个 HTTP=200, BC.GAME=0, kingskill≥1

- [ ] **Step 4: 验证首页新定位文案上线**

Run: `curl -s -L --max-time 15 "https://claudekorea.com/" | grep -c '제대로 배우는'`
Expected: 1

- [ ] **Step 5: 验证 admin 页 noindex 生效**

Run: `curl -s -L --max-time 15 "https://claudekorea.com/xp-admin-2025/" | grep -ci 'noindex'`
Expected: ≥1

---

## Phase 1（下一份计划，Phase 0 验证变现后再写）
教程引擎: Workflow 流程产首批 3-5 篇 evergreen 韩文教程（场景→步骤→坑→FAQ→kingskill 漏斗），加 Article/FAQPage schema + citability TL;DR。按 spec gating「先证明赚到第一块钱再扩量」，Phase 0 上线观察后单独出 Phase 1 plan。

---

## Self-Review
- **Spec 覆盖**: Task1=删BC.GAME✅ Task2=清报告✅ Task3=xp-admin安全✅ Task4=首页重定位✅ Task5=kingskill CTA✅ Task6=部署验证✅；Phase1 教程引擎=下份计划（spec gating 要求）
- **占位符**: 无 TBD/TODO，所有步骤含可执行命令/真实代码
- **一致性**: BC.GAME 块移除 (Task1) 与 CTA 插入位置 (Task5 同在 `</nav>` 后) 一致；类名 kingskill-cta / bc-game-banner 全程统一
