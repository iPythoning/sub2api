# Claude Code Club (CCC) — Brand Pack

> Generated 2026-04-26 · Theme: 暗黑赛博 · Audience: developers (双语)

## 1. Logo Assets (in this directory)

| File | Use |
|---|---|
| `logo.svg` | Primary mark, vector (full circular badge with glow + dashed ring) |
| `logo-mark-only.svg` | Compact rounded-square mark (for app icons / avatar) |
| `wordmark.svg` | Horizontal logo + text ("CLAUDE CODE / CLUB // CCC") |
| `logo-1024.png` | Press / OG image source |
| `logo-512.png` | **Upload to admin Settings → Logo** |
| `logo-256.png` | App store icon |
| `mark-256.png` | Square dark BG variant |
| `favicon.ico` | Browser tab |
| `favicon-32.png`, `favicon-16.png` | Per-resolution PNG fallbacks |

**Concept**: 3 nested C shapes in graduated purple → orange (Claude → Code → Club), neon-cyan terminal cursor accent (`_`), purple radial glow on near-black background. Dashed inner ring nods to retro CRT terminals.

---

## 2. Color Tokens

### Core palette (cyber-dark)

| Token | Hex | Use |
|---|---|---|
| `bg.base` | `#0A0612` | Page background |
| `bg.surface` | `#14101F` | Card |
| `bg.elevated` | `#1F1830` | Modal, dropdown |
| `border.subtle` | `#2D1B4E` | Card border |
| `border.glow` | `#B847FF` (30% alpha) | Active border, focus ring |
| `text.primary` | `#F2EEFF` | Body |
| `text.secondary` | `#9D93B8` | Caption |
| `text.muted` | `#665E80` | Disabled |

### Accent palette

| Token | Hex | Note |
|---|---|---|
| `accent.primary` | `#B847FF` | **Neon purple — main CTA, links** |
| `accent.primary-hover` | `#C66BFF` | Hover state |
| `accent.warm` | `#D97757` | Anthropic orange — secondary CTA, "Premium" badges |
| `accent.cool` | `#00FFD1` | Terminal-cyan — code highlights, success states |
| `accent.danger` | `#FF4D6D` | Error |
| `gradient.brand` | `linear-gradient(135deg, #D97757 0%, #B847FF 100%)` | Hero text, big CTA |

### Tailwind drop-in (for Phase 2 in `tailwind.config.js`)

```js
colors: {
  primary: {
    50:  '#F4EBFF', 100: '#E5D4FF', 200: '#CFA8FF', 300: '#BC85FF',
    400: '#B266FF', 500: '#B847FF',  // brand
    600: '#9B2BE5', 700: '#7C1FCC', 800: '#5C16A6', 900: '#3F0F73',
    950: '#2D1B4E',
  },
  ink: {
    50:  '#F2EEFF', 100: '#E0D8F5', 200: '#9D93B8', 300: '#665E80',
    900: '#14101F', 950: '#0A0612',
  },
  warm: { 500: '#D97757' },
  cool: { 500: '#00FFD1' },
}
```

### Fonts

- Display / wordmark: **JetBrains Mono** or **Fira Code** (monospace, 700)
- Body: **Inter** or **Geist Sans**
- Code blocks: **JetBrains Mono** 500

---

## 3. Voice & Copy (双语)

### Tagline

- EN: **"Claude Code, pooled."**
- ZH: **"Claude Code，俱乐部价"**

### Sub-tagline

- EN: "Premium Claude Code shared by developers, for developers."
- ZH: "开发者共建的 Claude Code 高级访问，按席位计价。"

### Hero copy

> EN
> # Claude Code, pooled.
> Pool the cost. Keep the power. Stay shipping.
> Join 100+ devs splitting Anthropic's top tier — without splitting their throughput.
>
> [ Join the Club ]   [ Pricing ]

> ZH
> # Claude Code，俱乐部价
> 拼车成本，独享算力，加速交付。
> 与 100+ 开发者共享 Anthropic 顶配——但不共享你的延迟。
>
> [ 加入俱乐部 ]   [ 价格 ]

### Section headings

| EN | ZH |
|---|---|
| How it works | 拼车机制 |
| Plans | 套餐 |
| Models on tap | 模型菜单 |
| Why CCC | 为什么选 CCC |
| FAQ | 常见问题 |

### Feature card copy

| EN | ZH |
|---|---|
| **Pooled accounts, fair queue.** Anthropic Max accounts, distributed across members with per-user quota and adaptive rate-limiting. | **共享账号，公平排队。** Anthropic Max 账号在会员间分配，每席位独立配额 + 自适应限速。 |
| **Drop-in for Claude Code.** Standard OpenAI-compatible endpoint. Works with `claude` CLI, Cursor, Continue, your own scripts. | **直插 Claude Code。** OpenAI 兼容端点，原生支持 `claude` CLI、Cursor、Continue 与自定义脚本。 |
| **Anonymous by default.** No identity binding required. Email is optional, not required. | **默认匿名。** 不强制实名，邮箱可选不必填。 |
| **Clubhouse on Discord.** Members-only Discord for prompt sharing, model tips, and bug bounties. | **Discord 俱乐部。** 仅会员加入的 Discord，分享 prompt、模型技巧与悬赏挑战。 |

---

## 4. Pricing — 起步参考方案

设计原则：**3 档订阅 + 算力包 add-on**，30-40 个付费用户即可冲到 $1,000/月净利目标。

| Plan | Monthly | Tokens / mo | Models | Concurrency | Best for |
|---|---|---|---|---|---|
| **Trial** | $0 | 200 K (一次性) | Sonnet 4.5 | 1 | 7-day试用 |
| **Starter** 入门 | **$9** | 5 M | Sonnet 4.5 | 1 | 个人开发者，每日少量调用 |
| **Pro** 专业 ⭐ | **$29** | 20 M | + Opus 4.5 | 2 | 主力 dev，全天 Claude Code 重度用户 |
| **Max** 旗舰 | **$69** | 60 M | + Haiku 4.5, 优先队列 | 4 | 团队/咨询/agent 跑满 |

### Add-on (灵活补充，永不过期)

- **Token Pack 5M** — $5
- **Token Pack 25M** — $19 (省 24%)
- **Token Pack 100M** — $59 (省 41%)

### 商业测算（净利 $1,000/月）

假设池成本：1 个 Max $100/月可服务约 8-10 Pro 席位（基于 token 实际利用率 ~30%）

| 组合 | 收入 | 成本 | 净利 |
|---|---|---|---|
| 30 Pro + 5 Max + 10 Starter | $30×29 + 5×69 + 10×9 = **$1,305** | 4× Max ($400) | **$905** |
| 40 Pro + 8 Max + 15 Starter | $40×29 + 8×69 + 15×9 = **$1,847** | 6× Max ($600) | **$1,247** ✓ |
| 50 Pro + 10 Max + 20 Starter | $50×29 + 10×69 + 20×9 = **$2,320** | 8× Max ($800) | **$1,520** ✓ |

→ **目标用户基数：~70-80 付费会员可稳定到 $1k+/月**

### 与 hvoy 收录的中转站差异化打法

- 我们：**席位制 + 限并发**（不按 token 计价竞争底价）
- 他们：token 计价拼便宜
- CCC 卖点：**稳定（不超卖）+ 匿名 + Discord 社群 + Claude Code 原生体验**

---

## 5. Phase 1 — Admin 后台贴入清单（**5 分钟，无代码**）

登录 https://ccc.digitalforce.cc/login (`admin@sub2api.local`)，去 **系统设置 / Settings**：

| 字段 | 改成 |
|---|---|
| 站点名称 / Site Name | `Claude Code Club` |
| 站点描述 / Description | `Premium Claude Code, pooled by developers.` |
| Logo | 上传 `branding/logo-512.png` |
| Favicon | 留空（系统会自动用 Logo） |
| 默认语言 / Default Locale | `English`（开发者主受众） |
| 公告 / Announcement | 见下文「公告模板」 |
| Discord / 社群链接 | 你的 Discord 邀请链接 |

**公告模板（贴到管理后台 Announcement）**：

```markdown
👋 Welcome to **Claude Code Club** — premium Claude Code, pooled.

🚀 What you get:
- Sonnet 4.5 + Opus 4.5 access via OpenAI-compatible endpoint
- Drop-in for `claude` CLI / Cursor / Continue
- Fair queue, per-seat quota, no oversell

💬 Join our Discord for prompt-sharing & model tips: <your-link>

⚡ New plans launching <date> — early members get 30% off first 3 months.
```

---

## 6. Phase 2 — fork + 重打镜像（半天，可选但推荐）

Phase 1 改不到的硬编码点：

| 文件 | 操作 |
|---|---|
| `frontend/index.html` | `<title>` `Sub2API` → `Claude Code Club` |
| `frontend/public/logo.png` | 替换为 `logo-512.png` |
| `frontend/public/favicon.ico` | 新增（项目当前用 logo.png 当 favicon） |
| `frontend/tailwind.config.js` | `primary` 颜色全替换为本文档第 2 节的 Tailwind tokens |
| `frontend/src/i18n/locales/en.ts` | 24 处 `Sub2API` → `Claude Code Club`（保留品牌一致性） |
| `frontend/src/i18n/locales/zh.ts` | 24 处 `Sub2API` → `Claude Code Club` |
| `frontend/src/style.css` | 检查全局 CSS 变量，加入 `--bg-base: #0A0612` 等 |

构建命令：
```bash
cd ~/sub2api
docker build -t ccc-app:latest -f Dockerfile .
# push 到自己的 registry，或直接在 38 服务器 build
```

---

## 7. 后续 (Phase 3+，按需)

- 自建落地页 `digitalforce.cc/ccc` 或 `cccclub.dev`
- Stripe 接入（sub2api 已内置 Stripe 支持）
- Discord bot：注册 → 自动发邀请
- 状态页（uptime + 平均延迟）增强信任
- SEO：发英文 blog (Medium / Dev.to) + 中文 (juejin / V2EX) 引流
