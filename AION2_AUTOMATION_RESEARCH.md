# AION2 NOW 官方公告自动化：第一阶段可行性调查

调查日期：2026-11-16（Asia/Hong_Kong）。仅调查与少量公开HTTP实验，未开发自动化。标签：**实测成功**表示本次实际取得；**实测失败**表示尝试未取得目标；**尚未验证**包括方案推断、文档支持但未端到端测试的功能。一次成功不代表长期稳定。

结论：**有条件可行，推荐GitHub Actions + Steam公开新闻接口／RSS + 来源证据与人工审核。NC日文完整正文尚未打通，不能声称全链路自动三语已经可用。** 不建议购买VPS。

## 1. 现有网站结构与仓库状态

【实测成功】本地AION2 NOW，origin=https://github.com/3ukio/ukn-home.git；分支redesign-v2，HEAD=5d48f71（11.11 update），开始时干净。main本地82becc2，仅本地缓存信息，不代表远程实时HEAD；未fetch、更改分支或读取秘密值。

Astro静态站，src/content/articles/{ja,en,zh-tw}/*.md；src/content.config.ts校验；src/lib/content.ts负责去重／排序／翻译关联。现有category=patch/maintenance/enforcement/event/guide，status=draft/published，sourceUrl官方HTTPS白名单。title/summary是SEO来源；全站SiteLayout加品牌，canonical/hreflang/sitemap沿用。未知官方时区在patch/maintenance允许null + timezone-unconfirmed；enforcement仍必须有有效官方日期，不得伪造绕过。

【实测成功】本地无.github工作流文件，缓存origin/main下也未列出.github文件。研究根目录只新增本报告，GPT_HANDOFF.md保持本地忽略。【尚未验证】远端仓库可见性、Actions开关／写权限／分支保护／付费计划、Cloudflare实际生产分支和预览过滤规则；网页访问仓库失败，未访问账户设置或GitHub API。生产main为用户明确约束，不能误当作本次后台实测。

## 2. 日文NC官网在线抓取

目标：https://aion2.plaync.com/ja-jp/board/update/view?articleId=6af2f930066b033317c02b1c

【实测成功】普通PowerShell HTTPS GET，无Cookie／登录／Token，HTTP200，text/html; charset=UTF-8，返回45743字节。后一个og:title含正确标题；og:description只有约200字符摘要。无JSON-LD、__NEXT_DATA__或完整正文结构。不能从此摘要取得表格、全部奖励及时间；**完整正文抓取实测失败**。web阅读工具亦只读到Input。

页面引用官方createBoard.js（2.3.9）动态渲染公告，公开boardConfig含apiPath=https://api-global-community.plaync.com/aion2_global/。【尚未验证】真实文章／列表API的请求路径、响应字段、跨区访问、修改时间与稳定性；仅取得页面直接引用的公开初始化JS，未猜测端点、未绕过验证码或调用登录接口。该地址线索不等于已公开文档或支持承诺。下一步应在正常浏览器开发者工具中只读观察页面自身公开请求，经许可／访问规则确认后验证适配器；不能直接以私有接口为长期依赖。

【实测成功】robots.txt=User-agent:* / Allow:/；仅说明爬取指示，不等于转载授权／无限频率许可。未发现页面显式RSS声明，不能断言NC不存在其他RSS。

## 3. 英文NC官网在线抓取

目标：https://aion2.plaync.com/en-us/board/update/view?articleId=6af42a1affaccc00c265785f

【实测成功】HTTP200，text/html，41974字节；正确og:title，og:description截断于The H，不是全文。未取得正文段落／表格／独立发布时间或修改时间；**完整正文抓取实测失败**。同样createBoard与相同API基址，未验证其API。

articleId可作为(source=NC,locale,board,articleId)来源键；两语言本例ID不同，不能拿ID相等做翻译匹配。【尚未验证】跨时长期稳定性及迁移／撤回行为，需保留原URL和抓取时间。附件／正文图片需从实际内容响应的img/src、附件字段提取元数据，不能从站点logo等全局img判定正文附件；正文接口未取到，附件识别尚未验证，不下载转载宣传图。

## 4. Steam在线备用实验

【实测成功】公开API：
https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=3393110&count=20&maxlength=0
普通HTTP200，application/json，125494字节；不需要API key。本次web工具访问API失败，但本机HTTP实际成功，需区分通道。匹配app=3393110、feedname=steam_community_announcements、完整标题 `[Notice] Patch Notes | Nov. 11`，不匹配封号／配服公告。

- API gid：**1849192144177826**；author=[NC] Fedal；date=**1794388188**，即2026-11-11T09:09:48Z。
- 返回URL：https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1849192144177826 （不作为现有文章sourceUrl，域名白名单不接受该CDN）。
- contents实际20514字符BBCode，含12 table、74 tr、230 td、383 p、45 list，无img标签；从Sanctuary一直到Restoration及结尾，不仅标题摘要。同样不代表以后公告不会有图片／附件。
- API没有独立updatedAt字段，tags里数字不是修改时间，不拿审核标签时间代替。date是Steam发布时刻，不应当填成NC发布时间。

【实测成功】RSS：https://store.steampowered.com/feeds/news/app/3393110/?l=english ，HTTP200，text/xml，177127字节。找到同标题item，pubDate=Wed, 11 Nov 2026 09:09:48 +0000；description为35354字符HTML，guid/link=https://store.steampowered.com/news/app/3393110/view/670633736808693813 。该Steam事件ID与API gid不同；保存两个标识与对应关系，不强行统一成同一ID。详情官方白名单URL适合作为未来sourceUrl。

【实测成功】Steam社区在线页可定位Nov.11完整公告；它混有其他公告和玩家帖子且按热门内容展示，**不可作为可靠按日期发现流**。优先API/RSS。只选官方feed，排除玩家帖子与其他app。RSS描述／API正文有结构，不应用简单正则去所有标签导致表格关联丢失；未来采用BBCode/HTML树结构保留表头、单位、嵌套列表。

【尚未验证】与NC英文“当前完整版本”逐字一致：NC仅摘要，不能声称同版本完全一致。可以确认标题主题日期和已取得片段吻合，API／RSS发布时间一致。Steam语言选择英文不保证每篇都有日文版本，不能替代日本官方术语。版本变更须基于正文哈希而非列表日期；跨语言时区不能自动按标题月份日期硬转。

## 5. 新公告发现与修订监测

【实测成功】EN/JA update/list普通GET分别200、41534／44245字节，仅站点OG，无完整条目数据，排序稳定性尚未验证。公共列表JS渲染，需先验证正常公开API或浏览器读取。

【方案，尚未验证】每60分钟（建议每小时17分，避开整点拥挤）读取Steam API/RSS，默认不变就退出；20条窗口不是永远足够，保存上次ID与抓取水位，用受限分页／enddate补齐突发期；不只处理第一条。NC列表适配器打通后监控update、notice等白名单栏目；纯商城分类跳过，混合补丁中保留玩法事实、略商品表。

持久来源索引保存provider/app/locale/board/sourceID/URL/title/publishedRaw/publishedTimezone/publishedInstant/fetchedAt/rawHash/normalizedHash/status。正文证据与事件状态必须持久化，不能只放Actions短期cache。小时无变化不得写文章或触发CF构建。每次仅重取最近有限窗口，历史正文有预算轮转检查；旧公告被删除时标记withdrawn-candidate并人工核查，不能自动删站内文章。

跨语言匹配用edition Global +公告类型 +更新事件日期 +玩法实体/事实签名；候选相似度只推荐，由人工确认首次关联。同一天多次临时维护按地区／服务器／时间拆分，不盲目合并。正文哈希变化生成revision草稿差异，不自动覆盖已审核文章；一事件+版本哈希对应一个PR键，重复运行更新现有草稿而非新建大量PR。

## 6. 关键数值提取准确性与本地PDF对照

【实测成功】本次一次性定位API原始BBCode证据片段，偏移为保存的contents中0起始字符索引；不是稳定网页行号，正文修订后会变化。此测试证明可定位，不代表已有生产级语义提取程序。

| 事实 | 原文匹配锚点 | 证据位置 | 状态 |
|---|---|---|---|
| 卢德莱时限 | `1 hour to 2 hours` | BBCode字符偏移272 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 中央炉HP | `Central Abyss Fusion Reactor` | BBCode字符偏移318 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 第5组机率 | `30% to 100%` | BBCode字符偏移513 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 困难入场 | `2800` | BBCode字符偏移1428 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 狂暴时间 | `4 minutes` | BBCode字符偏移1475 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 个人复活 | `3 revives` | BBCode字符偏移1544 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 消耗品时长 | `5 minutes to 10 minutes` | BBCode字符偏移3816 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 复活保留效果 | `persist after death` | BBCode字符偏移3892 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 碎片兑换数量 | `100 Ariel Fragments` | BBCode字符偏移2340 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 每角色兑换限制 | `30 times per character` | BBCode字符偏移2406 | 实测成功：可定位证据，语义自动判定尚未验证 |
| 对应碎片必掉 | `guaranteed 100%` | BBCode字符偏移1953 | 实测成功：可定位证据，语义自动判定尚未验证 |
| Revelation概率 | `chance to obtain a Philosopher` | BBCode字符偏移1676 | 实测成功：可定位证据，语义自动判定尚未验证 |

必须绑定上下文：Ludra Normal与Hard均1→2小时；第5奖励组30→100%，不是3种材料各必掉。Fire Temple与Ferocious Horn Den均2800、4分钟、3次。对应副本Ariel Fragment为100%；Revelation是chance加确定奖励可选，不能混合为必掉。100碎片→1结晶且每角色30次；1碎片→5强化石不限次数。没有给HP下降比例、深渊点数增幅，统一unknown，不生成数字。

【实测成功（本地文件存在；非在线抓取）】人工日文PDF：
`C:/Users/gok/Downloads/PageCapture/11月11日(水) アップデートノート _ AION2-NC-2026-11-12T05-18-16.pdf`，2358223字节。此前任务已经人工查看4页，此次没有重新OCR整份。可用于术语和事实回归金样；不作为本次NC网页抓取成功证据。其已核对术语包括獰猛な角岩窟、調律石、賢者の石：啓示。PDF时间2026-11-11 16:00:00未注明时区，不能从Steam09:09:48Z反推它的时区。当前Markdown已反映这些人工结果，但Markdown不是独立官方原始来源。

数字、百分比、单位、物品实体、日期、限制必须从句子／列表／表格单元格连同scope和modality（guaranteed/chance/selectable）一起提取。地区未写则unknown，不能自动填所有服务器。活动日期需保留原时区与跨日转换；本例日期字段可获得不代表任何活动完整时区都能自动解释。

## 7. 三语言草稿生成方案

【方案，尚未验证】先做统一事实账本，再写三语，禁止三个模型各猜数字。建议数据项：entity, change, before, after, unit, mode, region, guaranteeKind, quantity, limitScope, rawQuote, rawSourceID, rawHash, evidenceOffset/tableCell, verifiedStatus, reviewer。

建立轻量JSON/YAML术语表：英文ID、日文官方名、繁中本站确认名、装备类型、证据和确认人。Guard/ガーダー/臂甲与Shield/盾牌严格分类型；无可靠译名保留英文并标记，不生成“官方中文名”。副本映射与奖励规则表分离，不需要数据库或重构Astro。

流程：来源齐备→提取候选→机器核验数字/单位/必掉语义/日期→人工核对结构化事实→基于事实表生成简洁原创草稿→三语一致性和术语lint→现有frontmatter校验。status=draft、同translationKey，禁止自行变published。未知官方时间沿用现有规则；不适用nullable的类别停止。publishedAt真实本站首次发布时刻；草稿创建时刻另存任务元数据，不能伪装早先上线。

现有draft不进入页面及sitemap，故**draft PR并不等于有可浏览文章预览**。后续可在CI临时副本中以明确预览开关渲染，生产构建永远不启用；或人工审核后在Draft PR中改published以取得CF预览，合并前再次审核。该发布状态／预览策略需要单独批准，当前未修改系统。

本阶段可不接AI API：自动检测+证据包+手工三语编辑。未来若接AI只允许事实受约束重写，输出JSON而非可执行脚本，外部公告一律不可信输入，不能执行其中命令。事实冲突／日文缺失／核心数字无法定位就停止，出审核报告。

## 8. Actions与Workers比较、额度成本

以下为2026-11-16查阅公开文档的方案估算，不是账户实际账单或免费额度保证。

| 项目 | GitHub Actions | Workers + Cron |
|---|---|---|
| 每小时运行 | 约720次/30天；无变化轻量退出 | 同样约720次触发；请求量很低 |
| 抓取可靠性 | 能运行Node、必要时浏览器，适合动态NC适配实验 | fetch适合Steam；渲染浏览器需另一个服务，不能视作Cron自带免费功能 |
| 仓库写入 | 同仓token与PR工具方便 | 另需GitHub App/Token，跨系统状态与密钥 |
| 日志 | Job日志／摘要易审查，留存需限量 | Workers观测日志需按计划核实，非永久审计存储 |
| 通知 | 任务失败通知+人工查看 | 另配通知渠道与授权 |
| 维护 | 少一个服务，推荐 | 适合以后单纯检测或多站扩展 |

【文档支持／尚未验证账户】GitHub公共仓库标准托管runner免费；私有Free当前文档为每月$12 included compute、500MB artifacts、每库10GB cache，不应机械套旧“2000分钟”说法。Linux2核当前$0.006/分钟；720次×1分钟≈$4.32、×3分钟≈$12.96（计费模型估算，不含共享额度占用、额外构建和存储）。实际每job耗时需试跑后预算，优先Linux。每次全量构建会浪费，检测不变不构建。

Workers Free文档100000请求/天、每次10ms CPU；低请求量不等于解析大文档/AI能在10ms内完成。付费起价示例$5/月，浏览器／存储另核算。当前不需要买付费Workers。

Pages Free文档500 builds/月、同时1个；720次检测不能每次push触发构建。若每月10次更新、每次2次预览+1次生产≈30 builds，为估算；同账户其他项目也占用。预览URL数量无限不代表构建次数无限。实际CF计划与用量尚未验证。

AI API本次$0，未调用。完全自动原创多语言通常需要另行评估模型API，不能承诺“ChatGPT订阅含Actions API额度”。按事件输入8000token、输出6000token的**估算假设**，每月10篇输入80000/输出60000：月成本=0.08×输入每百万单价+0.06×输出每百万单价，再乘失败重试次数。未选择模型、没有报价或开通付费；建议先人工生成使API成本为0，选定模型时再查官网单价并确认月上限。

## 9. 推荐架构与Git安全

【方案，尚未验证端到端】每小时检测（Actions）→来源快照/ID/哈希→事件匹配→结构化事实与术语→人工/受约束三语草稿→独立automation/notice-事件分支→Draft PR(target main)→CI构建与数值/SEO检查→CF预览→用户审核→用户合并main→现有CF生产集成。

不得从redesign-v2整分支自动合并；自动分支以已确认main基线创建，只加入目标文章，若main缺少当前schema能力则先报告而非夹带改版。定时工作流须在默认分支才会运行，不能只放redesign-v2就承诺按时触发；首次启用需用户审核合并。定时可能延迟/丢弃，公库60天无活动会停用，设置无写入的可观测心跳与手动触发后续恢复，不假装精确定时。

权限：检测job contents:read；创建草稿分支/PR的job才contents:write、pull-requests:write；仓库Allow Actions create PR开关待用户确认。GITHUB_TOKEN触发其他工作流有递归限制，不能假定创建PR必触发全套CI；可在同一执行中直接做验证，或经确认用最小权限GitHub App并实测触发链。禁止自动合并、force、删旧文、读写GTA6仓库或打印Secrets。main保护要求用户review和必需checks，自动token不能绕过。

若用GitHub App，仅授此库、短期安装令牌，私钥存Actions Secrets；普通抓取和Steam无需secret，CF使用已有Git集成不额外给自动化CF部署token。不在研究报告公开秘密值。

状态持久化与审计分离：成功已审核事件索引可随内容PR保存（避免每小时空commit）；失败/待处理状态用私有artifact或专用状态存储，明确到期处理，不能靠未merge的PR承载唯一水位。报错保留sourceHash，不覆盖旧内容。

## 10. API成本与执行预算

【实测成功】Steam API/RSS这次无密钥可访问；未验证长期限额／服务保证。遵守Steam Web API条款、响应限流，建议每小时1次API+有需要才读详情，RSS备用，不高频双源轮询。NC只少量读取公开页面和引用JS，总计4个NC正文/列表、1个robots、1个官方CDNJS；未调用猜测接口。不得因200或robots Allow就认定无限复制权限。

【方案】job超时5–10分钟；请求超时15–30秒；5xx/429至多2次指数退避并尊重Retry-After；403/验证码/登录立即停，不切IP绕过；每轮详情数量上限，API预算耗尽仅记录告警。用concurrency避免同事件并发PR。日志原始全文短期保留、报告留事实引用与hash，不公开附件版权材料。

## 11. 风险与处置

| 风险 | 最小处置（方案，尚未验证） |
|---|---|
| NC结构/API改变、正文取不到 | 完整性断言，停产稿并保存HTTP状态；转Steam英文但日文仍需人审 |
| 撤回／修订 | 原始+规范化hash、来源版本归档；人工决定更正文，不自动删文 |
| JA/EN不同步、地区冲突 | 每语独立证据，设待配对窗口；不把日服活动无条件并入Global |
| 时区不明／跨日夏令时 | 原始显示时间、时区明确程度分开；unknown保持null |
| 数字错、概率变必掉 | before/after/单位/条件/概率性质绑定事实ID，强校验与逐项人审 |
| 装备技能译错 | 有证据的术语表，类型检查，未知保留原名 |
| AI虚构／提示注入 | 只能改写批准事实、输出不可执行，禁止补写缺失字段 |
| 重复PR／重复页面 | 来源ID+revisionHash+事件translationKey幂等，重复运行只更新同一草稿 |
| 构建或CF部署失败 | 阻止审核通过／合并，报告check结果；无自动生产回滚操作 |
| 额度耗尽／定时失效 | 预算、低频、短日志、手动恢复；不是实时SLA |
| 来源版权、转载规则 | 只原创归纳事实和短证据，留来源，不复刻全文或图片；API可访问不是转载许可 |
| 低质大量SEO页 | 只筛有玩家价值的更新、维护和重要运营；按原事件一个三语组，不拆同义词页；人工预览 |

默认异常停止生成可发布内容并输出审核报告，不自动发布。

## 12. 后续第一阶段需要哪些文件（仅计划，未创建）

- scripts/automation/fetch-steam.mjs：一次性公开抓取、来源身份与正文完整性验证；先手动运行。
- scripts/automation/normalize.mjs：BBCode表格/列表保持结构、正文hash。
- scripts/automation/extract-facts.mjs 与 tests/fixtures/nov11/*：原始输入／证据回归，不改Astro。
- editorial/terms.json：三语词汇/装备类型/来源状态。
- editorial/events.json与facts/*.json：来源索引、事件对应和批准事实。
- scripts/automation/check-content.mjs：数字、frontmatter、翻译对应、SEO与引用检查。
- reports/automation/：人工可读候选与旧攻略影响报告；本地报告与发布文件隔离。
- 后续单独授权才加.github/workflows/notice-monitor.yml、内容PR脚本。当前均未创建。

## 13. 分阶段路线

1. **下一步推荐**：先做手动只读Steam采集与证据包，拿Nov11作回归，输出JSON和可读报告，不生成文章或PR；同时验证NC公开正文/列表读取能否合规打通。
2. 完成术语／事实schema与三语受控草稿，本地审校并跑构建，不定时。
3. 用户批准后启用每小时只读检测，观察至少一周新文／修订／中断；调预算与报警。
4. 再授权独立分支Draft PR、验证和CF预览；用户合并main，禁止自动生产发布。

## 14. 人工审核清单与旧攻略影响实例

【实测成功】当前三语卢德莱攻略第31行已经2小时，重复影响检测应标“已同步”，不得再次强行替换。历史来源是Nov11补丁Sanctuary Normal/Hard的1→2小时句子（本次API偏移272起首个命中）。未来建议关联entity=ludra、field=run_time、modes=Normal/Hard；扫描JA/EN/ZH表格及正文提醒，给建议diff与来源hash+原句位置，不自动执行。

必须人工确认：跨语公告事件配对、完整正文与版本差异、所有数值和概率性质、装备技能正式名、区域/时间/补发资格、受影响旧攻略（尤其Boss机制）、三语原创行文和SEO、可浏览预览、最终发布状态与main合并。source原句偏移只是候选证据，需保留整段上下文及hash。

## 官方文档参考（本次已查阅，功能仍需实测）

- [Steam ISteamNews](https://partner.steamgames.com/doc/webapi/ISteamNews)：GetNewsForApp公开参数。
- [GitHub Actions计费](https://docs.github.com/en/billing/concepts/product-billing/github-actions)：当前included compute与runner计费。
- [Actions事件及定时限制](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)：默认分支、延迟、停用。
- [GITHUB_TOKEN](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token)及[工作流触发](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)：权限与递归触发限制。
- [Pages限制](https://developers.cloudflare.com/pages/platform/limits/)及[Preview部署](https://developers.cloudflare.com/pages/configuration/preview-deployments/)：构建与预览。
- [Workers价格](https://developers.cloudflare.com/workers/platform/pricing/)：请求、CPU与其他存储独立成本。

## 本次实际执行边界

仅少量公开请求、读取现有文件、一次性内存数值定位、写本地报告。临时原始返回保存在项目外 `../../work/research-*`。没有建立正式抓取脚本、轮询、workflow、PR或收费API；没有npm install/build；没有改文章/组件/配置/分支或CF。报告不等于已完成自动化部署。
