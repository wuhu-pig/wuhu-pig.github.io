/* 哆啦A梦交互层：阅读进度条、卡片入场、右下角机器猫看板娘
 * 性能：脚本 defer；看板娘在浏览器空闲时才插入 DOM；只用 transform/opacity；窄屏和减少动效时不加载。
 */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var narrow = window.matchMedia("(max-width: 900px)").matches;

  /* ---------- 阅读进度条 ---------- */
  var bar = document.createElement("div");
  bar.id = "dk-progress";
  document.body.appendChild(bar);
  var ticking = false;
  function updateProgress() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? h.scrollTop / max : 0;
    bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking && !reduce) {
      ticking = true;
      requestAnimationFrame(updateProgress);
    }
  }, { passive: true });
  updateProgress();

  /* ---------- 卡片入场 ---------- */
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("dk-reveal");
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: "0px 0px 8% 0px" });
    var cards = document.querySelectorAll(".recent-post-item, .card-widget");
    for (var j = 0; j < Math.min(cards.length, 12); j++) io.observe(cards[j]);
  }

  /* ---------- 看板娘：纯内联 SVG，零外部模型/图片请求 ---------- */
  if (narrow || reduce) return;

  var LINES = [
    "铜锣烧备好了，今天想读哪一篇？",
    "这一页我放进四次元口袋了，翻页不重新加载。",
    "按 Ctrl+K，坐任意门直达想看的文章。",
    "要不要戴上竹蜻蜓，去归档里飞一圈？",
    "文章都在这儿啦，交给我吧！"
  ];

  var SVG = [
    '<svg viewBox="0 0 120 132" role="img" aria-label="哆啦A梦看板娘">',
    // 头
    '<circle cx="60" cy="58" r="52" fill="#00a0e9" stroke="#0072b8" stroke-width="2"/>',
    // 脸
    '<ellipse cx="60" cy="64" rx="42" ry="38" fill="#fff"/>',
    // 眼睛（眨眼）
    '<g class="dk-eye">',
    '<ellipse cx="45" cy="44" rx="13" ry="15" fill="#fff" stroke="#0072b8" stroke-width="1.6"/>',
    '<ellipse cx="75" cy="44" rx="13" ry="15" fill="#fff" stroke="#0072b8" stroke-width="1.6"/>',
    '<circle cx="49" cy="48" r="3.6" fill="#12324a"/>',
    '<circle cx="71" cy="48" r="3.6" fill="#12324a"/>',
    "</g>",
    // 鼻子
    '<circle cx="60" cy="60" r="8" fill="#e60012" stroke="#a80010" stroke-width="1.2"/>',
    '<circle cx="57" cy="57" r="2.4" fill="#fff" opacity=".85"/>',
    // 人中与嘴
    '<path d="M60 68 L60 84" stroke="#2b3f52" stroke-width="2" fill="none"/>',
    '<path d="M34 82 Q60 102 86 82" stroke="#2b3f52" stroke-width="2" fill="none"/>',
    // 胡须
    '<g stroke="#2b3f52" stroke-width="1.5">',
    '<path d="M20 62 L43 66 M18 72 L42 74 M20 82 L43 82"/>',
    '<path d="M100 62 L77 66 M102 72 L78 74 M100 82 L77 82"/>',
    "</g>",
    // 项圈
    '<rect x="14" y="99" width="92" height="9" rx="4.5" fill="#e60012" stroke="#a80010" stroke-width="1"/>',
    // 铃铛（单独成组，CSS 可以拿它当钟摆晃）
    '<g class="dk-bell">',
    '<circle cx="60" cy="110" r="11" fill="#ffd200" stroke="#c9a200" stroke-width="1.4"/>',
    '<path d="M50 107 H70" stroke="#c9a200" stroke-width="1.4"/>',
    '<circle cx="60" cy="113" r="2.6" fill="#c9a200"/>',
    "</g>",
    "</svg>"
  ].join("");

  function build() {
    var host = document.createElement("div");
    host.id = "dk-mascot";
    host.innerHTML = '<div id="dk-bubble"></div>' + SVG;
    document.body.appendChild(host);

    var bubble = host.querySelector("#dk-bubble");
    var idx = 0;
    var timer = null;

    function say(text) {
      bubble.textContent = text;
      host.classList.add("talking");
      clearTimeout(timer);
      timer = setTimeout(function () { host.classList.remove("talking"); }, 4200);
    }

    host.addEventListener("click", function () {
      say(LINES[++idx % LINES.length]);
    });

    var isPost = !!document.querySelector("#post .post-content, article.post-content");
    setTimeout(function () {
      say(isPost ? "开始阅读了，我帮你计进度。" : "你好呀，我是哆啦A梦。");
    }, 1400);
  }

  if ("requestIdleCallback" in window) {
    requestIdleCallback(build, { timeout: 2500 });
  } else {
    setTimeout(build, 1200);
  }
})();
