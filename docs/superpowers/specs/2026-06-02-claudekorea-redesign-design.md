# claudekorea.com 重定使命 — 设计文档

**日期**: 2026-06-02
**repo**: luckybbjason1/freecode (域名 claudekorea.com)
**状态**: 设计已经主人逐节确认，待写实现计划

---

## 1. 背景与愿景

claudekorea.com 是主人与 Claude 早期一起做的韩文 Claude Code 资源站，起初目的纯拉流量。Claude 发展太快导致内容过时，现几乎鸡肋（静态站，已休眠约 4 周）。

**双轮新愿景**：
- **轮1 学习权威**：升级成"用 Claude 绕不开的韩文学习权威站"——开发者进来有的学。
- **轮2 变现**：必须能持续赚钱（主人现金紧张，ROI 至上）。

**核心结合点**：真学习价值引流韩国 Claude Code 开发者 → 漏斗导向自家 kingskill「Claude Code Skills Bundle $19」+ 合法 aff。

## 2. 已确认的关键决策

| 维度 | 决策 |
|---|---|
| 目标受众 | **开发者为主**（Claude Code 重度用户） |
| 核心价值支柱 | **Evergreen 实战教程/工作流**（方法论不随版本贬值，解决"鸡肋"根因） |
| 变现主渠道 | **自家 kingskill 优先**（毛利最高、主题契合），aff 为辅 |
| 博客 | **保留复用**，并入教程体系，不删 |
| 技术方案 | **方案 A 就地翻新**（保留静态 HTML/GitHub Pages，先见钱，过 ~50 篇再议 Hugo 迁移） |

## 3. 设计

### 3.1 信息架构（保留骨架，重排重心）
- **홈 index**：重写价值主张「한국어로 Claude Code 마스터」+ 导航 + kingskill 主 CTA
- **튜토리얼/가이드（新增·核心支柱）**：evergreen 实战教程区
- **레퍼런스**（agents/commands/hooks/mcps/plugins/skills）：保留为参考库，逐步加韩文解说
- **블로그**（现有 8 篇）：保留复用、互相内链、并入教程体系

### 3.2 翻新清理（减法）
1. 删 BC.GAME 赌博 aff banner（全页）→ 换 kingskill CTA（符合不推赌博决定）
2. 扫描报告 JSON（checkov/semgrep/grype/npm-audit/gitleaks 等）移出 repo + 加 `.gitignore`
3. 检查 `xp-admin-2025/` 是否不该公开暴露（安全隐患，需确认处置）
4. npm-audit 3 HIGH / semgrep 45 警告逐项核实（静态站多半无关，按"安全报告人工复查"铁律走一遍）

### 3.3 教程引擎
- 流程（复用 dibi8/genyboa）：选题 → 子代理写韩文教程 → Claude 监工审（质量+合规+漏斗）→ 发布 → 公网验证
- 教程模板：场景/痛点 → 实战步骤 → 代码/配置 → 常见坑 → FAQ → CTA
- 选题铁律：只做不过时方法论（"Claude Code로 X 하는 법"、subagent/MCP/hook 工作流），避开版本特定内容
- 韩文母语级 + 技术准确 + 韩国开发者语境

### 3.4 变现漏斗（kingskill 优先）
- 每篇教程自然漏斗：教方法 →「这套 skills bundle 直接给你现成的」→ kingskill Gumroad CTA（$19，https://kingskill.gumroad.com/l/pfsjmu）
- kingskill 作站级 + 文章级主 CTA；aff 为辅按主题配（云/API/工具）
- 合规三件套（沿用 genyboa）：aff 外链 `nofollow sponsored` + 韩文披露；价值优先、CTA 克制

### 3.5 SEO/GEO + 韩国本地
- **Google**：每篇教程 schema（Article + FAQPage + BreadcrumbList）+ 干净 meta/OG；sitemap/robots 优化
- **GEO（AI 引用）**：robots 对 AI 爬虫全开（GPTBot/ClaudeBot/PerplexityBot…）+ llms.txt + 教程 citability（TL;DR/定义/FAQ，照 genyboa 刚做的那套）
- **Naver**：验证 meta 已有；sitemap 提交视账号情况（Naver ID 被封是独立问题，不影响爬虫收录）

## 4. 执行节奏（ROI 至上、先见钱）

| 阶段 | 内容 | 目标 |
|---|---|---|
| **Phase 0（立即·几小时）** | 翻新清理 + 首页重写 + kingskill CTA 全站植入 | 起死回生 + 开始变现 |
| Phase 1 | 第一批 3-5 篇 evergreen 教程上线 | 验证漏斗转化 |
| Phase 2 | 博客 8 篇翻新 + 内链 | 复用旧资产 |
| Phase 3 | 教程持续产出 + SEO/GEO 深化 | 规模化 |

**Gating**：先证明赚到第一块钱，再扩量——不盲目堆量烧预算。

## 5. 验证纪律（沿用铁律）
- 改动后公网 curl 验证（self-check-before-report）
- aff 合规三件套核查
- 改既存页面前 grep 旧版（grep-before-overwrite）
- 部署后实测 kingskill 链接 / aff / schema 真实生效
- backup-before-change（git commit/push）

## 6. 范围边界（YAGNI）
- 不迁 Hugo（Phase 阶段不做，过 ~50 篇且证明能赚再议）
- 不做会员/付费墙（需后端，静态站不支持，本期排除）
- 不做多语言（纯韩文站）
- 不做与变现无关的重构
