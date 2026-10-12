# 双轨学习专题 · 发布与源码同步核验报告（2026-10-12）

## 仓库与分支

| 内容 | 仓库 | 分支 |
|---|---|---|
| Hexo 博客源码 | `wuhu-pig/hexo_backup`（私有） | `hexo-source` |
| GitHub Pages 网站 | `wuhu-pig/wuhu-pig.github.io` | `main` |
| Hexo 框架 fork（非博客源码） | `wuhu-pig/hexo` | `master` |

源码工程包含 `_config.yml`、`_config.solitude.yml`、`package.json`、`source/_posts`、`scripts/`、`themes/solitude` 子模块，采用 Solitude 4.0.0 / Doraemon Sky。

## 已确认结果

- 线上专题共 61 个已提交文件，包含 24 个周课程 HTML 和 24 份 Markdown 原稿。
- 源码 `source/study-series/` 下也有 61 个文件；已通过 GitHub 的 Git blob SHA 验证：**61/61 完全一致**。
- 新增 / 保留导航配置、首页专题注入、独立美化 CSS。
- 源码侧 `tools/publish.js` 已增加缺失 24 周课程及 Markdown 文件时拒绝发布的检查，另有 `tools/check-study-series.js`。
- 线上发布仓库最新一次美化提交 `7f60ee7d2a1bb88f4c80bb33a781150df9a7ba8a` 的 GitHub Pages 构建状态：`completed / success`。
- 对应记录：https://github.com/wuhu-pig/wuhu-pig.github.io/actions/runs/38253887190
- 原有博客文章与 Solitude git submodule 未被本次课程同步覆盖。

## 尚未验证和限制

- GitHub 内容与提交检查不是本地的完整 `npx hexo generate` 测试，也不是浏览器端的移动设备视觉回归。
- 专题是独立的静态 HTML，编辑 Markdown **不会自动更新 HTML**；维护者需手动同步，或以后增加转换构建流程。
- 源码分支不等于自动完成网站部署；发布依赖本地 `tools/publish.js` 或以后配置的受控 CI。

不得声称已自动完成任何实际学习任务或未经验证的硬件实验。
