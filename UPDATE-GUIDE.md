# Jianqiang Personal Site - Content Update Guide

> How to replace placeholder content. All sections live in index.html.

## Structure

`
personal-site/
  index.html        # main page (all sections)
  css/style.css     # styles
  js/main.js        # interactions (slideshow, language toggle, music)
  articles/         # standalone article pages
  images/           # photos, music, videos
    music/          # MP3 files
    videos/         # video clips and thumbnails
`

## Language Toggle

Add data-lang-en and data-lang-zh attributes to any element that needs bilingual text:

`html
<span data-lang-en="English" data-lang-zh="中文">English</span>
`

The JS function applyLanguage(lang) automatically updates all such elements on toggle or page load.

## Sections

### Blog (Articles)

Each article card:
`html
<article class="card card-article">
  <div class="card-date">Sep 2026</div>
  <h3><a href="articles/xxx.html">Title</a></h3>
  <p>Summary (40-60 chars)</p>
  <a href="articles/xxx.html" class="card-link">Read more &rarr;</a>
</article>
`

### Equipment (Second-hand gear)

`html
<div class="equip-card">
  <div class="equip-img">
    <div class="equip-placeholder">&#128247; Photo</div>
    <!-- or: <img src="images/xxx.jpg" alt="..." style="width:100%;height:100%;object-fit:cover"> -->
  </div>
  <div class="equip-info">
    <span class="equip-status avail">Available</span>  <!-- avail=sold, sold=sold out -->
    <h3>Item Name</h3>
    <p class="equip-desc">Description...</p>
    <div class="equip-meta">
      <span>City &middot; Year</span>
      <span class="equip-price">&yen;Price</span>
    </div>
    <a href="mailto:email" class="btn btn-outline btn-sm">Inquire</a>
  </div>
</div>
`

### 3D Models

`html
<div class="model-card">
  <div class="model-viewer">
    <model-viewer src="images/model.glb" auto-rotate camera-controls
      shadow-intensity="1" style="height:200px;width:100%"></model-viewer>
  </div>
  <div class="model-info">
    <h3>Model Name</h3>
    <p>Short description...</p>
    <div class="model-tags">
      <span class="tag">Tag1</span>
      <span class="tag">Tag2</span>
    </div>
  </div>
</div>
`

### Creative Projects

Link each project to an article page in articles/. Replace .card-img-placeholder with <img> if needed.

### Music

MP3 files go in images/music/. Add music-hidden class to collapse songs. The "更多歌曲" button toggles visibility.

### Video

MP4 files go in images/videos/. Each card structure:
`html
<div class="video-card">
  <video controls preload="metadata" poster="images/thumb.jpg" style="width:100%">
    <source src="images/clip.mp4" type="video/mp4">
  </video>
  <div class="video-info">
    <h3><a href="articles/videos/xxx.html">Title</a></h3>
    <p class="video-desc">Description...</p>
    <div class="video-meta"><span class="tag">Category</span><span class="date">2025</span></div>
  </div>
</div>
`

### Gallery (Slideshow)

Auto-advancing slideshow (5s, pause on hover). First slide gets slide active:
`html
<div class="slide active">
  <div class="slide-img">
    <img src="images/photo.jpg" alt="Caption" style="width:100%;height:100%;object-fit:cover">
  </div>
  <div class="slide-caption">
    <h3>Photo Title</h3>
    <p>Short description...</p>
  </div>
</div>
`

### Travel

Photo grid with flexible layouts:
- photo-item (default, 1 col)
- photo-item wide (spans 2 cols)
- photo-item tall (spans 2 rows)

### Engineering

Numbered proposal items. Each links to a detail page.

### Books / Science / Bookstore

Books use SVG inline covers or <img>. Bookstore uses equip-card structure (avail/sold).

## Publishing

`powershell
cd D:\wjq-obsidian\personal-site
git add .
git commit -m "update: xxx"
git push origin main
`

Site: https://wjq369.github.io/jianqiang-portfolio/
