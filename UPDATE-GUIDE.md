# Jianqiang Personal Site — 内容更新指南

> 本文件说明如何替换站点中的占位内容，包括文章、设备、3D模型、音乐、视频、照片和工程方案。

## 站点结构

`
personal-site/
├── index.html      # 站点主文件（所有板块都在这个文件里）
├── css/
│   └── style.css   # 样式（一般不需要改）
├── js/
│   └── main.js     # 交互逻辑（轮播图等）
└── images/         # 存放真实图片（新建）
`

---

## 1. 文章（Blog）

**位置：** index.html 中的 <section id="blog">

每篇文章是一个 <article class="card card-article">：

`html
<article class="card card-article">
  <div class="card-date">Sep 2026</div>           <!-- 日期 -->
  <h3><a href="#">标题</a></h3>                   <!-- 点击跳转链接，# 改为实际文章页 -->
  <p>文章摘要内容...</p>                           <!-- 摘要文字 -->
  <a href="#" class="card-link">Read more &rarr;</a>
</article>
`

**要改什么：**
- card-date — 日期
- <h3> 里的标题
- <p> 里的摘要（建议 40-60 字）
- href="#" — 链接到具体文章页面

---

## 2. 二手设备（Equipment）

**位置：** index.html 中的 <section id="equipment">

每个设备是一个 <div class="equip-card">：

`html
<div class="equip-card">
  <div class="equip-img">
    <!-- 替换为真实图片： -->
    <!-- <img src="images/tess-terminal.jpg" alt="TESS Terminal"> -->
    <div class="equip-placeholder">&#128247; Photo</div>
  </div>
  <div class="equip-info">
    <span class="equip-status avail">Available</span>  <!-- avail=在售, sold=已售 -->
    <h3>设备名称</h3>
    <p class="equip-desc">描述文字...</p>
    <div class="equip-meta">
      <span>城市 &middot; 年份</span>
      <span class="equip-price">&#165;价格</span>
    </div>
    <a href="#" class="btn btn-outline btn-sm">Inquire</a>
  </div>
</div>
`

**要改什么：**
- 在 <div class="equip-img"> 里插入真实图片
- equip-status 类：vail（在售）或 sold（已售）
- 设备名称、描述、城市、年份、价格
- Inquire 按钮的链接（改为邮箱或微信）

---

## 3. 3D 模型（3D Models）

**位置：** index.html 中的 <section id="models">

每个模型卡片：

`html
<div class="model-card">
  <div class="model-viewer">
    <div class="model-placeholder">
      <!-- 这里可以嵌入模型查看器，比如 model-viewer 组件 -->
      <svg>...</svg>  <!-- 当前是 SVG 占位 -->
      <span>Interactive Viewer</span>
    </div>
  </div>
  <div class="model-info">
    <h3>模型名称</h3>
    <p>简短说明...</p>
    <div class="model-tags">
      <span class="tag">标签1</span>
      <span class="tag">标签2</span>
    </div>
  </div>
</div>
`

**展示真实 3D 模型的方法：**

在 images/ 文件夹放 GLB/OBJ 文件，然后用 <model-viewer> 组件：

`html
<div class="model-viewer">
  <model-viewer src="images/gear-assembly.glb" auto-rotate camera-controls
    alt="Gear Assembly v2" shadow-intensity="1" style="height:200px;width:100%">
  </model-viewer>
</div>
`

在 <head> 里加入：
`html
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"></script>
`

---

## 4. 创意项目（Creative）

**位置：** index.html 中的 <section id="creative">

`html
<div class="card card-creative">
  <div class="card-img-placeholder creative-1"></div>  <!-- 渐变色背景，可替换为真实图片 -->
  <div class="card-body">
    <h3><a href="#">项目名称</a></h3>
    <p>项目描述...</p>
    <div class="card-tags">
      <span class="tag">技术栈</span>
    </div>
  </div>
</div>
`

**替换图片：** 把 creative-1 等改为 <img src="images/project-screenshot.png">

---

## 5. 音乐（Music）

**位置：** index.html 中的 <section id="music">

`html
<div class="music-item">
  <div class="music-cover">
    <span class="music-icon">&#9835;</span>
    <!-- 换成真实封面： -->
    <!-- <img src="images/album-cover.jpg" alt="Album" style="width:64px;height:64px;object-fit:cover;border-radius:6px"> -->
  </div>
  <div class="music-info">
    <h3>歌曲名</h3>
    <p class="music-artist">歌手 &middot; 专辑 &middot; 年份</p>
    <p class="music-note">喜欢的原因...</p>
  </div>
  <a href="https://music平台链接" class="btn btn-outline btn-sm">Listen</a>
</div>
`

**要改什么：**
- 歌曲名、歌手、专辑
- music-note 写你的推荐理由
- href 填音乐平台链接（网易云、Spotify 等）

---

## 6. 视频（Video）

**位置：** index.html 中的 <section id="videos">

`html
<div class="video-card">
  <div class="video-thumb">
    <!-- 替换为视频缩略图： -->
    <!-- <img src="images/video-thumb.jpg" alt="Video" style="width:100%;height:180px;object-fit:cover"> -->
    <span>&#9654; Video thumbnail</span>
  </div>
  <div class="video-info">
    <h3><a href="https://youtube.com/...">视频标题</a></h3>
    <p class="video-desc">简介...</p>
    <div class="video-meta">
      <span class="tag">分类</span>
      <span class="date">年份</span>
    </div>
  </div>
</div>
`

**嵌入 YouTube/B站视频：**
`html
<iframe width="100%" height="315" 
  src="https://www.youtube.com/embed/视频ID" 
  frameborder="0" allowfullscreen>
</iframe>
`

---

## 7. 画廊轮播（Gallery Slideshow）

**位置：** index.html 中的 <section id="gallery">

5张幻灯片，每张：

`html
<div class="slide">
  <div class="slide-img">
    <!-- 替换为真实图片： -->
    <!-- <img src="images/photo-1.jpg" alt="描述" style="width:100%;height:100%;object-fit:cover"> -->
    <span>Slide 1 — 描述</span>
  </div>
  <div class="slide-caption">
    <h3>照片标题</h3>
    <p>简短说明...</p>
  </div>
</div>
`

**轮播控制** 在 js/main.js 里，默认 5 秒切换一次，鼠标悬停暂停。

---

## 8. 旅行照片网格（Travel）

**位置：** index.html 中的 <section id="travel">

`html
<div class="photo-item">
  <div class="photo-placeholder">
    <!-- 替换为真实图片 -->
    <!-- <img src="images/travel-1.jpg" alt="地点" style="width:100%;height:100%;object-fit:cover"> -->
    <span>地点描述</span>
  </div>
  <div class="photo-caption">
    <h4>地点名称</h4>
    <p>补充说明（可选）</p>
  </div>
</div>
`

特殊布局类：
- photo-item wide — 横跨 2 列
- photo-item tall — 竖跨 2 行

---

## 9. 工程方案（Engineering）

**位置：** index.html 中的 <section id="engineering">

`html
<div class="proposal-item">
  <div class="proposal-number">01</div>
  <div class="proposal-content">
    <h3>方案名称</h3>
    <p>方案摘要...</p>
    <div class="proposal-meta">
      <span class="tag">分类标签</span>
      <span class="date">2026-08</span>
    </div>
  </div>
  <a href="#" class="link-arrow">View proposal &rarr;</a>
</div>
`

---

## 图片存储

所有真实图片放在 images/ 文件夹里：

`
personal-site/
└── images/
    ├── tess-terminal.jpg        # 设备照片
    ├── gear-assembly.glb        # 3D模型文件
    ├── album-cover.jpg          # 音乐封面
    ├── video-thumb.jpg          # 视频缩略图
    ├── photo-1.jpg              # 画廊照片
    └── travel-1.jpg             # 旅行照片
`

引用方式：src="images/文件名.jpg"

---

## 发布更新

改完 index.html 后，推送到 GitHub 自动上线：

`powershell
cd D:\wjq-obsidian\personal-site
git add .
git commit -m "更新内容：xxx"
git push origin main
`

约 1-2 分钟后刷新 https://wjq369.github.io/jianqiang-portfolio/ 即可看到最新内容。

---

## 10. ?????Books?

**???** index.html ?? <section id="books">

`html
<div class="book-card">
  <div class="book-cover"><span>&#128214; Cover</span></div>
  <!-- ??????? -->
  <!-- <img src="images/book-cover.jpg" alt="??" style="width:100%;height:200px;object-fit:cover"> -->
  <div class="book-info">
    <h3>??</h3>
    <p class="book-author">???</p>
    <p class="book-desc">??????????</p>
    <div class="book-meta">
      <span class="tag">??</span>
      <span class="date">2026</span>
    </div>
  </div>
</div>
`

---

## 11. ????????Science?

**???** index.html ?? <section id="science">

?????????????

`html
<article class="card card-article">
  <div class="card-date">Sep 2026</div>
  <h3><a href="#">??????</a></h3>
  <p>???????????????????????</p>
  <a href="#" class="card-link">Read more &rarr;</a>
</article>
`

---

## 12. ?????Bookstore?

**???** index.html ?? <section id="bookstore">

??????????????

`html
<div class="equip-card">
  <div class="equip-img"><div class="equip-placeholder">&#128214; Cover</div></div>
  <div class="equip-info">
    <span class="equip-status avail">Available</span>
    <h3>??</h3>
    <p class="equip-desc">?????</p>
    <div class="equip-meta"><span>Condition: Like New</span><span class="equip-price">&#165;45</span></div>
    <a href="#" class="btn btn-outline btn-sm">Inquire</a>
  </div>
</div>
`

????vail????/ sold????

---

## ????

?? index.html ??

`powershell
cd D:\wjq-obsidian\personal-site
git add .
git commit -m "??????"
git push origin main
`

? 1-2 ????? https://wjq369.github.io/jianqiang-portfolio/
