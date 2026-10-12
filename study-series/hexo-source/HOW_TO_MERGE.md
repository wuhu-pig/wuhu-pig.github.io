# Hexo-gan-blog：Solitude 4.0 美化源码迁移包

本目录是对已发布站点的美化功能所提供的 **源码级恢复文件**，不是已经找到或修改了用户口述的 `Hexo-gan-blog` 仓库。

## 当前情况
- 网站发布仓库：`wuhu-pig/wuhu-pig.github.io`（GitHub Pages）。
- Hexo 框架 fork：`wuhu-pig/hexo`（不能作为博客源仓）。
- `wuhu-pig/hexo_backup` 为只有 README 的私有仓库。
- `Hexo-gan-blog` 在当前已授权 GitHub 仓库以及指定 URL 下未找到，可能归属于其他账号、私有且未授权，或仅存在于本地。

## 源码持久化方法（须先定位真正 Hexo 博客根目录）
1. 核对根目录含 `_config.yml`、`package.json`、`source/`、`_config.solitude.yml`，并确认 `deploy.repo` 的目标是 `wuhu-pig/wuhu-pig.github.io`。
2. 在真实博客源码工程创建或更新 `source/css/study-upgrade.css`，内容使用本目录的同名 CSS 文件。**不要编辑 node_modules 中的主题文件。**
3. 在博客根 `_config.solitude.yml` 中找到 `extends.head`，增量加入：
   ```yaml
   extends:
     head:
       - '<link rel="stylesheet" href="/css/study-upgrade.css">'
   ```
   已有 `extends.head` 项应保留，不要整段覆盖；也不要重复添加。
4. 将发布仓库 `study-series/source/_posts/*.md` 的 24 篇 Markdown 源稿迁移至博客源码 `source/_posts/`。
5. 将发布仓库的 `study-series/` 页面和资产放入博客源码的 `source/study-series/`，或通过单独的 Hexo page/template 生成同样路径。注意避免 `source/_posts/` 的 permalink 与静态 `week-XX/index.html` 重复生成同一个 URL，**选择一种内容生成方式**：
   - 推荐长期方案：Markdown 文章作为主内容，建立 Hexo 专题索引。
   - 如果需要保留完全相同的专题视觉，可以将现有 24 个静态课程页放入 `source/study-series/`，但不要同时使用与之 URL 相同的 Markdown permalink。
6. 依 Solitude 当前 `menu` 配置增加「学习计划」入口，指向 `/study-series/`，保留其它菜单（不要覆盖整个配置）。若要复制首页专题 Hero 视觉，须在主题源码模板中为首页增加 `<section class="study-feature">...` 对应 DOM，内容可参考发布仓库首页。
7. 在本地运行 `npx hexo clean && npx hexo generate && npx hexo server`，检查首页、专题页、归档、手机、暗色模式、PJAX、链接与搜索，再使用既有 CI/CD 或 `npx hexo deploy`。
8. 如果发现现有部署仓库提交发生变化，先对比生成差异；不得强推覆盖现有在线修改。

## 为什么发布仓库还保留一份源码
本目录是紧急回滚和长期迁移的资产副本，让后来接手的 AI 能够从 Git 历史取回样式规则。它 **不等于** 原始 Hexo 源码仓库已同步。最终必须在真实 `Hexo-gan-blog` 里合并修改，才能保证再次 Hexo 部署后完全保留美化。
