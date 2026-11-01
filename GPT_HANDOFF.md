# AION2 NOW — GPT 交接报告

更新时间：2026-11-01（Asia/Hong_Kong）
项目：C:/Users/gok/Documents/Codex/2026-10-29/gu-ge/outputs/aion2-site

## 1. 本次任务与当前完整状态

在上一轮尚未提交的 Rewards 模块基础上做增量更新，没有重写首页、旧文章或导航。

- AGENTS.md 增加每次开发结束自动更新本报告并告知完整路径的长期规则。
- 现有 /ja/rewards/、/en/rewards/、/zh-tw/rewards/ 添加 AION2SPOOKYDAEVA。
- 兑换码仅按用户确认的事实录入。奖励明细未确认，不写数量或道具清单；每账号次数、具体适用服务器范围未写入。
- 统一截止时间为 2026-11-04T06:30:00Z；日文 11月4日15:30 JST，繁中11月4日14:30 UTC+8，英文显示11月4日06:30 UTC及11月3日22:30 PST。
- 新增游戏内六步教程，明确不是外部网页兑换，不需要向第三方输入游戏账号密码。
- 三语 title、description、可见正文含兑换码和自然的代码关键词。公共 Layout 品牌后缀与 canonical、hreflang 未改。
- Active Codes 与 Expired Codes 使用同一数据数组；到期转入历史，不删代码和来源日期。过期后禁用并隐藏复制，教程不再提示领取此过期码。
- 上一轮 Twitch Drops 数据、奖励和账号规则、繁中迅游说明保留不变。首页入口及三语言路由保留。

## 2. 文件清单与改动归属

本次修改已有工作区文件（这些文件在开始时尚未被 Git 跟踪，并非本次重新创建）：

| 文件 | 本次作用 |
| --- | --- |
| AGENTS.md | 添加自动 GPT_HANDOFF.md 报告规范和兑换码历史保留要求 |
| src/data/rewards.ts | 新兑换码记录、未知发布时间 null、验证依据、到期状态计算、历史查询、UTC/PST/JST/UTC+8 显示 |
| src/i18n/rewards.ts | 三语有效/过期栏目、兑换教程、安全提醒、兑换码 SEO |
| src/pages/[lang]/rewards.astro | 有效和过期表格、游戏内教程、运行时移入历史、关闭复制及定时更新 |
| src/styles/rewards.css | 仅新增 Rewards 内历史来源行与教程样式 |

本次新增：GPT_HANDOFF.md（本报告）。本次没有删除文件。

上一轮已有、此次未修改但仍未提交的文件：

- src/components/Icon.astro：礼物图标。
- src/pages/[lang]/[...route].astro：首页 Rewards 入口。
- src/pages/sitemap.xml.ts：三个 Rewards URL。
- src/components/RewardsEntry.astro：首页卡片组件。

这四项仍属于工作区的完整待提交 Rewards 版本，不是本次额外修改。此前旧文章、依赖、锁文件、全局 SEO 配置均未修改。

## 3. 关键数据与实现

兑换码记录的关键信息：

```ts
code: 'AION2SPOOKYDAEVA'
game: 'AION 2 Global'
type: 'Halloween Coupon'
expiresAt: '2026-11-04T06:30:00Z'
publishedAt: null
sourceUrl: 'https://x.com/AION2_JP'
verifiedAt: '2026-11-01T08:50:21.861Z'
```

publishedAt 为原公告发布时间，未知时保留 null；verifiedAt 是本次依据用户提供资料进行录入核对的真实时间，不代表已独立读取官方原帖。verificationBasis 明确记录此区别。

状态由公共函数计算（status 字段保留人工状态；实际有效性以此函数结果为准）：

```ts
export function couponStatus(item: Pick<Coupon,'status'|'expiresAt'>, now = Date.now()): 'active' | 'expired' {
  return item.status === 'expired' || (item.expiresAt !== null && Date.parse(item.expiresAt) <= now) ? 'expired' : 'active';
}
```

- activeCoupons 和 expiredCoupons 从相同永久数组划分记录，不复制或删除数据。
- 服务器构建时直接输出对应表格；到期后重新构建的原始 HTML 内仍有完整历史记录，可供搜索引擎读取。
- 客户端复用 couponStatus，在加载、到期计时器、切回标签页、点击复制时重新计算。
- 到期时将同一个 tr 移入过期 tbody，保留代码、奖励说明、原始来源、已知发布时间、截止时间及过期状态。
- 同时更新状态标签、空状态和教程的第六步；禁用且隐藏过期复制按钮。
- 复制调用 navigator.clipboard.writeText；失败提示手动复制。异步完成后再次检查期限。
- expiresAt 为 null 时展示 —，不自行推算；新增记录只需继续维护现有 rewards.ts。

## 4. 数据来源与核实边界

本次用户明确提供的已确认事实：代码、Halloween Coupon 类型、UTC 截止时间、日本官方账号15:30 JST的表述、游戏内兑换路径。

官方参考：

- https://help.plaync.com/faq/aion2global?faqNo=7041 — 用户指定的兑换路径参考。
- https://x.com/AION2_JP — 用户所述日本官方账号；目前只有账号链接，未取得准确公告永久链接。

客服页直接文本读取仅返回需要启用 JavaScript，没有独立读取完整客服正文。检索结果中的第三方页面与官方账号镜像可作旁证，但没有用它们补写奖励、限领次数、服务器范围或历史发布时间。

教程保留：

- JA：設定 → その他 → アカウント → クーポン登録。
- EN：Settings → Miscellaneous → Account → Enter Coupon。
- ZH-TW：設定 → 其他（Miscellaneous）→ 帳號（Account）→ 輸入兌換碼（Enter Coupon）。

此前 Drops 的参考链接仍是 https://aion2.plaync.com/en-us/twitchdrops/index 及其官方活动公告；本次未更改 Drops 事实。

## 5. 实际构建与测试

- 使用现有本机 Node.js v24.22.1 和 npm CLI 执行 npm run build：成功，退出码0，60个页面。未安装依赖。
- 项目既有 node scripts/verify.mjs：通过；60 HTML 页面、47个可索引页面，内部资源及 SEO 校验通过。
- 三语生成 HTML：title/description含真实代码、品牌后缀仅一次、canonical和三个hreflang仍正确。
- sitemap：47个 loc，无重复，每个 Rewards URL恰好一次；没有修改 sitemap 源码。
- 将本次修改前构建输出与本次输出比较：57个非 Rewards HTML逐字节一致，包括首页。不是只比较截图。
- 时间转换测试：JST15:30、UTC+8 14:30、UTC06:30、前一天22:30 PST均通过。
- 截止前1毫秒、截止时刻、截止后1毫秒的函数测试均通过。截止时刻起即 expired。
- 隔离 DOM 测试：到期记录从有效表移入历史表、数据保留、复制隐藏并禁用、状态和教程切换均通过；复制成功和剪贴板拒绝提示测试通过。
- 模拟截止时间的额外 Astro 构建：通过，输出到项目外 work/aion2-expired-review-dist。三语原始 HTML 内的过期表均保留代码、来源和截止时间，按钮 disabled + hidden。模拟时钟只在该子进程内生效，没有修改系统时间或项目源码。之后又完成一次正常 npm run build，正式本地 dist 保持当前时间版本。
- 浏览器实际点击繁中复制按钮：Navigator Clipboard调用成功，页面显示“已複製”。浏览器工具的独立剪贴板读取返回空，不能声称独立读回了系统剪贴板；写入参数的准确性已由隔离测试确认。
- 浏览器实际访问三种语言，在390px手机宽度下均无页面横向溢出；核对实际显示的三语截止时间；繁中浅色、深色截图与主题切换已查看。
- 未在游戏内实际提交兑换码、未验证奖励到账、未测试游戏账号的领取次数或服务器限制。
- git diff --check 通过；Git提示现有LF/CRLF转换提示，与构建错误无关。

浏览器审查截图保存在项目外：C:/Users/gok/Documents/Codex/2026-10-29/gu-ge/work/rewards-coupon-review.png。

## 6. 尚未解决及需要确认

1. 待提供官方兑换码公告的准确永久链接和可核实的发布时间；当前不冒充已独立验证具体原帖。
2. 奖励明细、限领次数和具体适用服务器范围没有写入，等待可靠官方依据。
3. 静态站的初始 HTML 分组由构建时间决定。客户端启用 JavaScript 时会按设备时钟自动更新；若禁用JS或设备时钟错误，旧构建的分组可能过时，需要重新构建。没有新增后台或 Cloudflare 定时任务，亦未承诺无JS旧HTML能自动改变。原码和截止时间一直存在，可读取和索引。
4. 截止后的静态归档已通过模拟构建验证，但没有安排未来自动部署。
5. 浏览器工具无法独立读回实际系统剪贴板；点击后的成功反馈和模拟写入内容都已验证。
6. 先前迅游活动支持仍未实测，此次未改变该提示。

## 7. Git 与发布状态

- 当前分支：redesign-v2。
- 最新已有提交：6d875d2088594024b9dc74836405484a23666144 Optimize multilingual SEO titles and descriptions。
- 本次没有创建提交；工作区仍有上一轮及本次未提交修改，新增文件仍未跟踪。
- 没有执行 git add、commit、push、创建PR、merge、rebase、reset、cherry-pick。
- 没有修改 main，也没有操作 Cloudflare 或部署。
- 没有安装新依赖、删除旧文件或修改文章。

### 当前 git status --short

```text
 M src/components/Icon.astro
 M src/pages/[lang]/[...route].astro
 M src/pages/sitemap.xml.ts
?? AGENTS.md
?? GPT_HANDOFF.md
?? src/components/RewardsEntry.astro
?? src/data/rewards.ts
?? src/i18n/rewards.ts
?? src/pages/[lang]/rewards.astro
?? src/styles/rewards.css
```
