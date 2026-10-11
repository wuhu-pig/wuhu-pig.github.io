# 初次发布与质量核验报告

## 仓库关系

- 已确认公开静态站点仓库：`wuhu-pig/wuhu-pig.github.io`，默认分支 `main`。
- 已确认博客前端主题：Solitude 4.0.0（通过已生成首页和 about 页面中的主题标识）。
- `wuhu-pig/hexo` 为 Hexo 框架 fork，并非博客源码仓库，不应往其中上传文章。
- 用户提到的 `Hexo-blog` 源码仓库不在当前 GitHub 连接返回的可访问库列表中。
- 因此发布方法：向已有 Pages 仓库添加独立 `study-series/` 页面，在首页增加非破坏性导航入口和展示卡片。

## 已提交的内容

- 系列首页 1 个
- 两条课程总览页 2 个
- 24 个周课程静态网页（技术 12、英语 12）
- 24 份 Hexo 兼容 Markdown 源稿
- 统一 CSS、课程索引 JSON、README 和维护文档

## 已执行的检查

- 所有 24 周课程在一个提交中创建，格式化路径为 `week-01` 到 `week-12`。
- 第 1 周/第 12 周文章和系列入口通过 GitHub 内容 API 验证存在。
- 首页导航和课程入口已增加，原有首页及旧文章未删除。
- 首次推送 commit：`979bc032da692789be3935dfb9068d325a68351c`。
- 首次 GitHub Pages 构建结果：`completed / success`，运行地址：https://github.com/wuhu-pig/wuhu-pig.github.io/actions/runs/38151714681
- 站点公开网页的浏览器端视觉检查未通过当前外部读取工具完成：该工具连站点原首页也无法打开，因此不声称已核验其真实显示效果。

## 后续必须落实的源仓迁移

直接修改生成站点并非最理想的长期维护方案。找回独立的 Hexo 源码仓后，应将 Markdown 文章和系列目录编入真正 Hexo 项目的 `source/`，在 Solitude 主题配置中添加菜单，并按现有部署流水线发布。否则下一次 `hexo deploy` 可能覆盖本次静态更新。
