# 12 周双轨学习计划 · Hexo / GitHub Pages 发布说明

- **公开页面**：https://wuhu-pig.github.io/study-series/
- **专业课程**：/study-series/motor/ （12 篇）
- **英语课程**：/study-series/english/ （12 篇）
- **阶段时间**：2026-10-12 至 2027-01-03
- **已有能力**：专业方向已有 MCU / FOC 基础；英语能说简单句，但缺少流畅性。
- **基本节奏**：专业 45 分钟 + 英语 30 分钟/日；繁忙保底 15+10 分钟。

## 目录
```text
study-series/
  index.html                  # 计划首页
  motor/index.html            # 专业课程列表
  english/index.html          # 英语课程列表
  motor/week-01..12/index.html
  english/week-01..12/index.html
  assets/style.css            # 独立隔离样式，不影响旧文章
  source/_posts/*.md          # Hexo Markdown 源稿（24 篇）
  README.md
```

## 部署说明

当前 GitHub 仓库 `wuhu-pig/wuhu-pig.github.io` 是 **生成后的 GitHub Pages 静态站点**（Solitude 4.0.0），不是已确认的 Hexo 源码仓库。为了避免影响原有内容，本次将系列页面以独立静态 HTML 添加到 `study-series/` 并对首页导航做最小修改。

**重要：** 日后若从未知的 Hexo 源码仓库重新运行 `hexo generate && hexo deploy`，可能覆盖这些静态页面以及手工更新的首页。长期维护时，请把 `source/_posts/` 下的 Markdown 原稿迁入真正的 Hexo 源码仓库，将 `study-series` 作为自定义导航，并在源码主题配置中保留对应入口。严禁把 `wuhu-pig/hexo` 框架 fork 当作博客项目源码覆盖。

## 持续更新建议

1. 不覆盖历史文章；所有学习计划保持独立分类。
2. 每周把真实学习证据放入自己的笔记仓库/复盘文章，区分“计划”和“已完成”。
3. 任何主题修改先对照当前 Solitude 版本与主题配置，在独立分支验证后再发布。
4. 自动发布前运行链接测试、HTML/CSS 静态检查与目录校验。
5. 不将个人隐私、API 密钥、私有项目代码或未确认可公开的资料放进博客。

## 已知限制
- 纯静态 HTML 的打卡记录只保存在单台设备的浏览器 localStorage。
- **尚未定位到用户口述的 Hexo-blog 源码仓库**，因此源码侧的持久主题配置未改动。
- 没有宣称用户已经完成任何课程；文章均为计划及练习指引。
