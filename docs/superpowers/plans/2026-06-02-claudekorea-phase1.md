# claudekorea Phase 1 实现计划 — 激活 27 篇博客教程变现

> **For agentic workers:** 用 superpowers:executing-plans 逐任务执行。checkbox 跟踪。

**Goal:** 给现有 27 篇 evergreen 韩文教程挂上 kingskill 变现漏斗（顶部 banner + 文末转化位），把吃流量却零变现的存量内容立即货币化。

**背景发现:** blog/ 有 27 篇高质量 Claude Code 韩文教程，全部 blog.html 已链接，但 **kingskill=0、FAQPage=0**。Phase 1 = 激活变现（高 ROI）；写新教程 + FAQPage/TL;DR GEO 降为 Phase 2。

**Tech Stack:** 静态 HTML, GitHub Pages。锚点：27 篇均有 `<div id="ad-header-banner"` + `</article>`。

---

## Task 1: 27 篇顶部 kingskill banner CTA

**Files:** Modify: `blog/*.html`(27); 锚点=插在 `<div id="ad-header-banner"` 前（与主站 9 页一致）

- [ ] Step1: 脚本插入（CTA 块同主站，幂等防重复）
- [ ] Step2: 验证每篇 kingskill-cta=1
- [ ] Step3: commit

## Task 2: 27 篇文末转化 CTA（黄金位）

**Files:** Modify: `blog/*.html`(27); 锚点=插在 `</article>` 前

转化块（contextual，读者读完正想动手）:
```html
<!-- kingskill 전환 CTA -->
<div class="kingskill-end-cta" style="margin:48px 0 8px;padding:28px 24px;border-radius:14px;background:linear-gradient(135deg,rgba(245,196,81,.12),rgba(232,169,61,.06));border:1px solid rgba(245,196,81,.3);text-align:center;">
  <h3 style="margin:0 0 8px;font-size:1.25rem;">이 가이드를 실무에 바로 적용하고 싶다면?</h3>
  <p style="margin:0 0 16px;color:#9aa;font-size:.95rem;">검증된 Claude Code 스킬 5종을 번들로 — 직접 만들 시간을 아끼세요.</p>
  <a href="https://kingskill.gumroad.com/l/pfsjmu" target="_blank" rel="noopener" style="display:inline-block;padding:14px 28px;border-radius:10px;font-weight:700;text-decoration:none;color:#0b0b12;background:linear-gradient(90deg,#f5c451,#e8a93d);box-shadow:0 4px 18px rgba(232,169,61,.35);">⚡ Claude Code Skills Bundle 받기 ($19) →</a>
</div>
```

- [ ] Step1: 脚本插入文末（幂等）
- [ ] Step2: 验证每篇 kingskill-end-cta=1
- [ ] Step3: commit

## Task 3: 部署 + 公网验证

- [ ] Step1: push
- [ ] Step2: 等 Pages 部署 success
- [ ] Step3: 公网抽查 3 篇博客 kingskill≥2（顶部+文末）、HTTP 200

## Phase 2（后续）
FAQPage schema + TL;DR citability（Workflow 批量，per-post 内容）+ 写新 evergreen 教程填补主题空白。
