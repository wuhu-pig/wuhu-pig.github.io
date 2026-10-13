# 28 周职业成长计划 · 三方向独立专题

## 入口
- 学习中心：https://wuhu-pig.github.io/study-series/
- 专业技能：https://wuhu-pig.github.io/study-series/motor/
- AI 提效：https://wuhu-pig.github.io/study-series/ai/
- 职业英语：https://wuhu-pig.github.io/study-series/english/
- 总路线图：https://wuhu-pig.github.io/study-series/career-roadmap/

每个专题 W01–W28 各有独立 HTML 课程页面，总计 84 篇。周二/周四/周六/周日偏技术与 AI，健身日主要 15 分钟英语练习。每周总预算 6h45m，疲劳时可缩减。

## 内容权威与来源
- Hexo 源码：私有 `wuhu-pig/hexo_backup` 的 `master` 分支，`source/study-series/` 为可原样部署的课程网页。
- 发布站点：`wuhu-pig/wuhu-pig.github.io` 的 `main` 分支。
- 机器可读数据：`source/study-series/data/motor.json`、`ai.json`、`english.json`，记录每周课程主题、行动、验收及预算，便于后续 AI 迭代。
- 旧版 12 周课程保存在 `source/study-series/legacy/motor/` 与 `legacy/english/`，AI 初期实验保存在 `legacy/ai/`。
- 旧版 24 篇 Markdown 位于 `source/study-series/source/_posts/`，不作为新 28 周网页的唯一权威来源。

## 修改与发布
目前新课程 HTML 和 JSON 是成对提交的静态内容，**单独修改 JSON 不会自动改变网页**。后续调整周任务应同步更新 JSON 与对应周 HTML，并通过完整性检查。可进一步完善生成工具，建立单一内容来源。
`_config.yml` 已将 `study-series/**` 设为 `skip_render`，防止再次 Hexo 生成时改变独立网页路径。
发布前先运行 `node tools/check-study-series.js`、`npx hexo generate`、`node tools/publish.js --dry`，检查 3×28 页面和对应 JSON、索引、原有文章无意外删除；使用普通推送，不强推。

## 2026-10-12 三方向 28 周细化版本

新增独立课程：`motor`、`ai`、`english` 各 28 周，每个方向有各自的首页和详细单周网页；旧课程移动至 `legacy/`，原文未删除。

每个方向对应 `source/study-series/data/<track>.json` 可供 AI 提取学习任务与完成标准；**当前 JSON 与 HTML 双份并存，变更周内容需要同步更新对应 HTML 与 JSON**。本版本没有自动生成脚本，不要以为改 JSON 就会上线。

每次发布先运行 `node tools/check-study-series.js` 检查总计 84 页，`tools/publish.js` 增加对 `study-series/**`、`ai/**` 的删除门禁，默认阻止意外删页。

## 2026-10-13 疲劳友好的微任务模式
新增 `/study-series/micro/`，按专业技术、AI、英语三个方向读取现有28周JSON，生成0/5/15/25分钟任务卡。学习中心和三专题都必须提供入口。原84篇详细周课程与旧版文章不删除；微任务仅表示本人练习，不等同整周完成。`localStorage`中的记录仅保存在当前浏览器。原日期为高精力规划参考，不应自动作为落后判断。
