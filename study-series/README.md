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
