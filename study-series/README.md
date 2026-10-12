# 12 周双轨学习计划 · 博客源码与发布说明

- 专题：https://wuhu-pig.github.io/study-series/
- 专业课程：`/study-series/motor/`（12 周）
- 英语课程：`/study-series/english/`（12 周）
- 起点：已有嵌入式和 FOC 基础；英语能说简单句，但不流畅。
- 日常节奏：45 分钟专业 + 30 分钟英语；繁忙时 15+10 分钟。

## 真实仓库关系

- **博客源码仓库：** 私有 `wuhu-pig/hexo_backup`，**hexo-source** 分支。
- **生成站点发布仓库：** `wuhu-pig/wuhu-pig.github.io`，main 分支。
- **不要修改：** `wuhu-pig/hexo` 是 Hexo 框架的 fork，不是博客源工程。
- 主题：Hexo 7.3 / Solitude 4.0，保留 Doraemon Sky 独立美化层。

## 课程源码的组织方式

`hexo_backup:hexo-source/source/study-series/` 对应线上 `wuhu-pig.github.io:main/study-series/` 的 **61 个文件**，其中含专题首页、课程总览、24 个周课程 HTML、24 份 Markdown 原稿、CSS 和文档。

- 当前网页入口和课程内容以静态 HTML 为准。
- `study-series/source/_posts/*.md` 是可编辑的参考原稿，不会自动编译为对应的专题 HTML；改内容时要双向核对。
- 源码根 `source/_posts/2026双轨学习计划总览.md` 为 Hexo 原生文章，可用于标签和归档。
- `_config.yml` 的 `skip_render` 保留 HTML，`include` 包含嵌套 Markdown，避免下次构建丢失。

## 发布检查

在完整的源码工作区：
1. `git submodule update --init --recursive && npm ci`
2. `node tools/check-study-series.js`
3. `npx hexo clean && npx hexo generate`
4. 核对 `public/study-series/` 下的 24 页 HTML、24 份 MD 和 CSS。
5. `node tools/publish.js --dry`：检查删除清单，没有意外删除后才执行发布。
6. 只能普通 Git 推送，禁止 force push。

本次已通过 GitHub API 检查“已发布 61 个专题文件与源码 61 个对应文件 blob SHA 全部一致”，且发布站点最近一次 GitHub Pages 构建成功。**尚未在用户本地运行一次完整 Hexo 构建或浏览器端视觉回归**，不将其表述为已验证。


## 2026-10-12 正式执行计划升级

原 12 周双轨文章保持为历史课程参考资料，不再要求每天 75 分钟。**当前执行权威**是 [28 周职业成长路线图](/study-series/career-roadmap/) 与 `CAREER_ROADMAP_28W.md`：每周 405 分钟，技术165m、AI135m、英语105m，三天健身日晚间仅15m。预计 2027-04-25 完成，如需要可延长至 2027年5–6月。AI 进阶路线见 /study-series/ai/；W01 AI 实验见 /study-series/ai/week-01/。
