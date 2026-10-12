# Hexo 源码同步状态（2026-10-12）

**原先“找不到源码”的说明已经过时。现已找到并同步源码：**

- 源码：[wuhu-pig/hexo_backup · hexo-source](https://github.com/wuhu-pig/hexo_backup/tree/hexo-source)
- 发布：[wuhu-pig/wuhu-pig.github.io · main](https://github.com/wuhu-pig/wuhu-pig.github.io)
- 专题网页：`source/study-series/` 对应网站 `/study-series/`。
- 导航与美化：`_config.solitude.yml`、`source/css/study-upgrade.css`、`scripts/study-series-inject.js`。
- 原生总览文章：`source/_posts/2026双轨学习计划总览.md`。

**已经同步：** 24 个课程 HTML、24 份 Markdown 原稿，以及专题索引和静态资源。源码分支保留了 Solitude 子模块和 Doraemon Sky 自定义样式。

**部署前：** 在源码工作区运行 `node tools/check-study-series.js`、`npx hexo clean && npx hexo generate`、`node tools/publish.js --dry`，检查输出、意外删除和移动端页面，再执行普通推送。不要将 24 份 Markdown 与同 URL 的静态 HTML 同时生成以免发生路由冲突。

更完整的维护说明见 `documents/STUDY_SERIES_SYNC_CHECK.md`。
