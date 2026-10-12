# 首页专题版块源码片段

下方 HTML 可嵌入 Solitude 4 的首页模板（而非直接嵌在 `_config.solitude.yml` 字符串里）。请先依据主题实际安装路径定位 `layout`，并利用主题提供的扩展点，不要覆盖主题主模板或已有首页内容。

```html
<section class="study-feature" aria-label="双轨学习计划专题">
  <div class="study-feature__main">
    <span class="study-feature__eyebrow">✦ PERSONAL LEARNING JOURNEY · 2026—2027</span>
    <h2>每天进步一点，<br>把学习变成长期能力。</h2>
    <p>12 周双轨成长计划：深入电机控制与嵌入式工程，同时系统训练英语词汇、语法、听力和口语。不是从零开始，而是从已有基础走向真正熟练。</p>
    <div class="study-feature__actions">
      <a class="study-feature__btn" href="/study-series/">探索学习计划 ↗</a>
      <a class="study-feature__secondary" href="/archives/">浏览全部文章</a>
    </div>
  </div>
  <div class="study-feature__side">
    <a class="study-feature__track" href="/study-series/motor/" aria-label="进入电机控制与嵌入式课程">
      <strong>01 · 电机控制与嵌入式 →</strong><span>FOC · 无感观测器 · MCU · 工程调试</span>
    </a>
    <a class="study-feature__track" href="/study-series/english/" aria-label="进入英语能力提升课程">
      <strong>02 · 英语综合能力 →</strong><span>Vocabulary · Grammar · Listening · Speaking</span>
    </a>
  </div>
</section>
```

需要在 `_config.solitude.yml` 的 `extends.head` 中引用 `/css/study-upgrade.css`。若不添加这一 HTML 片段，主题依然会拥有通用的微小卡片/阅读体验增强，但首页专题大卡不会出现。
