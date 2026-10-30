# AION2 NOW

AION2 NOW 是面向 AION2 Global / Steam / PURPLE 玩家的独立、非官方资讯网站，与 NCSOFT、Steam 无隶属关系。网站整理国际服官方更新、维护公告、营运记录和实用攻略，并提供玩家工具的规划入口；工具以实际发布状态为准。

项目使用 Astro 静态构建，不需要数据库或应用后端，未开发登录与评论功能。

## 三语言系统

- 日文：`/ja/`
- 英文：`/en/`
- 繁体中文：`/zh-tw/`

界面翻译位于 `src/i18n/`，各语言文章分别存放于 `src/content/articles/` 下的语言目录。文章通过 `translationKey` 关联译文，页面提供语言切换。关于我们、联系我们和隐私政策均提供完整三语内容。

## 本地运行与构建

项目根目录的 `.node-version` 指定 Node.js **22.23.4**，`package.json` 声明最低版本为 **22.19.0**。建议使用指定版本，并在本目录执行：

```sh
npm install
npm run dev
```

预览地址以终端实际输出为准。需要指定端口时可执行 `npm run dev -- --port 4322`。

```sh
npm run build
```

构建产物输出至 `dist/`；可执行 `npm run preview` 预览构建结果。

## 当前项目结构

```text
src/
  components/         共用界面组件
  config/site.ts      网站名称、语言及公开联系方式配置
  content/articles/  ja、en、zh-tw 三语 Markdown 文章
  content.config.ts   Astro 内容集合与文章字段校验
  i18n/               三语界面及信息页面内容
  layouts/            页面框架
  lib/                文章读取、排序及语言关联逻辑
  pages/              Astro 路由
    [lang]/[...route].astro  当前三语首页、分类、文章及信息页面
  styles/             样式文件；当前页面框架使用 notices.css
public/               图片、图标及静态资源
scripts/verify.mjs    现有构建结果验证脚本
docs/                 项目说明与验收记录；archive 为历史参考资料
astro.config.mjs      Astro 静态构建配置
package.json          依赖、运行命令及 Node.js 要求
package-lock.json     npm 依赖锁定文件
.node-version         指定 Node.js 版本
```

当前内容维护使用 Markdown 内容集合；项目中保留的旧版数据与兼容路由不作为新增三语文章的录入入口。

## Markdown 文章管理

在 `src/content/articles/ja/`、`en/`、`zh-tw/` 中新增或编辑 `.md` 文件，顶部使用 YAML frontmatter，正文使用 Markdown。完整字段规则以 `src/content.config.ts` 为准，可参考同类型现有文章。

- 基础字段包括 `uid`、`translationKey`、`slug`、`lang`、`title`、`summary` 和 `category`。
- 版本及来源字段包括 `edition: Global`、`region`、`platforms` 和 `sourceUrl`。
- 日期字段包括 `officialPublishedAt`、`publishedAt`、`updatedAt` 和 `verifiedAt`，使用含时区的 ISO 时间；官方资讯必须有可核实的官方发布时间，攻略可将该字段设为 `null`。
- 分类支持 `patch`、`maintenance`、`enforcement`、`event`、`guide`；维护与营运记录需要填写对应的附加字段。
- `status: draft` 不公开，`status: published` 才进入公开列表。`uid` 必须唯一，同一语言的 `slug` 和 `translationKey` 不得重复。
- 同一篇内容的三个语言版本使用相同的 `translationKey`，分别填写语言与正文。文章地址为 `/{lang}/articles/{slug}/`；修改已有文章时保留原有 `slug`。
- 图片文件放在 `public/`，文章内使用以 `/` 开头的路径；如填写文章 `image` 字段，须同时提供替代文字、尺寸、来源及使用许可依据。

内容应区分国际服与其他地区版本，核实官方来源，不虚构数值或日期，不直接复制其他网站文章或未经许可的图片。编辑后运行 `npm run build`；需要执行现有验证时，在构建后运行 `node scripts/verify.mjs`。

## Cloudflare Pages

- 构建命令：`npm run build`
- 构建输出目录：`dist`
- 根目录：项目文件位于 GitHub 仓库根目录时留空
- Node.js：使用 `.node-version` 中指定的 `22.23.4`，如平台另有版本设置，应保持一致

`astro.config.mjs` 使用 `output: 'static'`，站点地址为 `https://ukn-home.pages.dev`。部署使用静态构建产物，无需数据库或付费服务。不要将 `node_modules/`、构建缓存、环境密钥或个人凭证提交至仓库。
