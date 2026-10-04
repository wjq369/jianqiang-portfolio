# Jianqiang Personal Site

Personal portfolio site. Single HTML file, no frameworks.

## Tech

- HTML5 + CSS3 (CSS custom properties)
- Vanilla JavaScript
- Google Fonts (Playfair Display + Inter)
- GitHub Pages

## Features

- **Bilingual (ZH/EN)**: click the nav button to toggle; uses data-lang-* attributes
- **Responsive**: mobile hamburger menu, fluid grid
- **Slideshow**: auto-advances every 5s, pauses on hover
- **Music**: 8 tracks, 3 visible + 5 collapsed, toggle with js/main.js
- **3D viewer**: model-viewer component for STEP/GLB files

## Structure

`
personal-site/
  index.html        # all sections in one file
  css/style.css
  js/main.js
  articles/         # standalone article pages
  images/           # photos, music/, videos/
  UPDATE-GUIDE.md
  README.md
`

## Run locally

Open index.html directly in a browser. No server needed.

## Deploy

Push to GitHub repo. GitHub Pages builds automatically.
