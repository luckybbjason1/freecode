# Claude Korea (claudekorea.com) — 完整诊断与改进计划

## 仓库结构

```
freecode/
├── index.html              (603行 — 首页)
├── skills.html             (스킬 목록)
├── agents.html             (에이전트 목록)
├── commands.html           (명령어 목록)
├── mcps.html               (MCP 목록)
├── plugins.html            (플러그인 목록)
├── hooks.html              (훅 목록)
├── blog.html               (블로그 목록)
├── 404.html                (404 페이지)
├── blog/                   (博客文章 — 50+篇)
│   ├── getting-started.html
│   ├── mcp-guide.html
│   ├── claude-code-2026-features.html
│   ├── korean-ai-search-geo.html  ← 新增GEO博客
│   └── ... (共50+篇)
├── assets/
│   ├── css/
│   │   ├── tokens.css      (设计令牌 — 紫/青/金配色)
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── pages.css
│   ├── js/
│   │   ├── data.js         (214个技能数据 — 214条)
│   │   ├── tracker.js      (客户端分析引擎 — localStorage)
│   │   ├── ads.js          (Google AdSense广告)
│   │   ├── partners.js     (合作伙伴链接)
│   │   ├── search.js       (搜索功能)
│   │   └── ...
│   └── img/
│       ├── logo.svg
│       └── og-image.svg
├── docs/superpowers/       (设计规划文档)
├── xp-admin-2025/          (管理面板)
├── .github/workflows/
│   └── deploy.yml          (GitHub Pages 自动部署)
├── CNAME                   (claudekorea.com)
├── ads.txt                 (Google AdSense: pub-5138416840385352)
├── robots.txt
├── sitemap.xml
└── manifest.json
```

## 技术栈

- **纯静态HTML** — 86.7% HTML, 8.0% JS, 5.3% CSS
- **GitHub Pages** 部署
- **AOS** (Animate On Scroll) 动画
- **Google Fonts**: Noto Sans KR + Noto Serif KR + JetBrains Mono
- **Google Analytics**: G-GQHEYDXTHG
- **Google AdSense**: pub-5138416840385352
- **客户端分析**: tracker.js (localStorage, 2000条上限)
- **Naver验证**: d5f41a1e7e0ce86fc06776ed18e9a844f772f07f

## 当前变现方式

1. **Google AdSense** — 页面头部、英雄区域下方、页眉前、底部固定、弹窗 共5个广告位
2. **Gumroad联盟** — $19技能包 + $49 GEO内容技能包 (kingskill.gumroad.com)
3. **合作伙伴链接** — 底部"친구 사이트"区域的casn/baka/live/sports/slots/vip/mobile

## 🔴 紧急问题 (立即修复)

### 1. 底部"朋友网站"链接 — 赌博/赌场链接 (critical)

```html
<!-- 当前index.html 第533-541行 -->
<a href="https://casn.951951.org" ...>CASN</a>
<a href="https://baka.gotolls.com" ...>Baka</a>
<a href="https://live.gotolls.com" ...>Live</a>
<a href="https://sports.gotolls.com" ...>Sports</a>
<a href="https://slots.gotolls.com" ...>Slots</a>    ← 老虎机!
<a href="https://vip.gotolls.com" ...>VIP</a>
<a href="https://mobile.gotolls.com" ...>Mobile</a>
```

**问题**: CASN/Sports/Slots/VIP 明显是赌博/赌场网站。一个AI开发工具网站的页脚出现赌博链接：
- 严重损害网站专业性和可信度
- Google可能对网站降权
- 破坏GEO/SEO策略 — AI引擎不会引用一个底部链接赌场的技术网站

**修复**: 保留Genyboa和AI Templates，删除所有赌博相关链接。

### 2. 顶部两个促销横幅太显眼

```html
<!-- 首页第96-110行 — 两个inline style的Gumroad推广 -->
<div class="kingskill-cta">⚡ Claude Code Skills Bundle ($19)</div>
<div>🔥 NEW 네이버·ChatGPT가 인용하는 한국어 콘텐츠 스킬 ($49)</div>
```

**问题**: 导航栏正下方直接两个内联样式的促销横幅，视觉上很乱，而且覆盖了hero区域

### 3. hero区域缺少社会证明

没有用户数、下载量、好评数 — 只有4个数字(스킬1000+、에이전트600+、MCP120、명령어450)，但这些都是"库存"数量而非"用户"数量。

## 🟡 重要问题

### 4. 博客内容 — 有50+篇但SEO薄弱

- 没有结构化数据(FAQ, HowTo, Article schema)
- 没有内部链接策略
- 分类管理混乱 (多篇全是"Uncategorized")
- 缺少关键词研究支撑

### 5. 客户端分析 (tracker.js) 数据不可用

- 纯localStorage存储，最大2000条
- 地理位置功能已禁用 (CORS)
- 数据无法导出到GA4 — 只有前端统计没有后端聚合

### 6. data.js 有214条技能数据

- 首页只展示前27条
- 没有按热度/时间排序的逻辑
- 所有技能评分都是4.7-4.9，没有区分度

### 7. 缺少GEO优化

虽然有一篇korean-ai-search-geo.html博客，但整个网站没有针对AI搜索做结构化数据优化。

### 8. 缺少sitemap更新机制

sitemap.xml是静态文件，新增博客后不会自动更新。

## 🟢 可做但非紧急

### 9. 移动端体验未测试

### 10. 缺少PWA支持

### 11. 页面加载可能有性能问题

- AOS动画库 + particles背景 + 多个JS文件
- 没有看到代码分割或懒加载

---

## 改进计划

### Phase 0: 紧急修复 (1-2天)
1. 清理底部赌博链接
2. 修复顶部促销横幅
3. 添加结构化数据基础

### Phase 1: SEO/GEO强化 (3-7天)
4. 为所有博客添加Article schema
5. 添加FAQ schema到指南类页面
6. 实施pSEO策略 — 模板化比较页
7. 优化内部链接策略

### Phase 2: 内容变现优化 (1-2周)
8. 高意图内容(对比页/定价页)增加联盟链接
9. 添加 newsletter 邮件列表
10. 开发第一个数字产品(模板/指南)

### Phase 3: 设计升级 (2-4周)
11. 整体视觉升级
12. 添加动画效果
13. 移动端优化

---

## 收入估算 (基于当前数据)

- **AdSense**: 需要月5000+会话才能有可观收入。当前不知道实际流量。
- **Gumroad联盟**: $19和$49两个产品，转化率取决于内容质量
- **联盟营销**: 尚未实施 — 这是最大的未开发收入源

## 下一步

请先确认：
1. 底部赌博链接是否要删除？(我强烈建议删除)
2. 保留哪些朋友网站链接？(目前只确认保留Genyboa)
3. 你期望的月度收入目标是多少？

确认后我立即开始Phase 0。
