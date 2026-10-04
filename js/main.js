// Mobile nav toggle
const nav = document.getElementById('mainNav');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', function() {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Close nav on link click (mobile)
if (nav) {
  var links = nav.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  }
}

// Slideshow
const track = document.getElementById('slideshowTrack');
if (track) {
  const slides = track.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slideshowDots');
  let current = 0;
  let timer;

  slides.forEach(function(_, i) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', function() { goTo(i); });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  var nextBtn = document.querySelector('.slideshow-btn.next');
  var prevBtn = document.querySelector('.slideshow-btn.prev');
  if (nextBtn) nextBtn.addEventListener('click', function() { clearInterval(timer); next(); startTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', function() { clearInterval(timer); prev(); startTimer(); });

  function startTimer() {
    timer = setInterval(next, 5000);
  }
  startTimer();

  const slideshow = document.getElementById('slideshow');
  if (slideshow) {
    slideshow.addEventListener('mouseenter', function() { clearInterval(timer); });
    slideshow.addEventListener('mouseleave', startTimer);
  }
}

// Capture original HTML BEFORE any language switching
// Keyed by element: many elements share the same tag and class, and a selector
// based key would let one of them overwrite the others.
const _origHTML = new Map();
var langEls = document.querySelectorAll('[data-lang-en], [data-lang-zh]');
for (var i = 0; i < langEls.length; i++) {
  if (!_origHTML.has(langEls[i])) _origHTML.set(langEls[i], langEls[i].innerHTML);
}

// Swap every remaining text node listed in js/i18n.js (keys are the English
// text), and put the English original back when switching to English.
const _origTitle = document.title;
const _origText = new Map();
function translatePageText(lang) {
  const dict = window.I18N_ZH;
  if (!dict) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  for (let k = 0; k < nodes.length; k++) {
    const n = nodes[k];
    const parent = n.parentNode;
    if (!parent) continue;
    const tag = parent.nodeName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') continue;
    if (!_origText.has(n)) {
      const trimmed = n.nodeValue.trim();
      if (!trimmed || !(trimmed in dict)) continue;
      _origText.set(n, n.nodeValue);
    }
    const orig = _origText.get(n);
    if (lang === 'zh') {
      const key = orig.trim();
      const hit = dict[key];
      if (hit !== undefined) n.nodeValue = orig.replace(key, hit);
    } else {
      n.nodeValue = orig;
    }
  }
}

// Language toggle
const langToggle = document.getElementById('langToggle');
let _currentLang = 'en';
if (langToggle) {
  langToggle.addEventListener('click', function() {
    const isZh = _currentLang === 'zh';
    const target = isZh ? 'en' : 'zh';
    _currentLang = target;
    document.body.classList.toggle('lang-zh');
    document.body.classList.toggle('lang-en');
    langToggle.textContent = target === 'zh' ? 'EN / \u4e2d\u6587' : '\u4e2d\u6587 / EN';
    localStorage.setItem('lang', target);
    applyLanguage(target);
  });
  const saved = localStorage.getItem('lang');
  if (saved === 'zh') {
    _currentLang = 'zh';
    document.body.classList.add('lang-zh');
    langToggle.textContent = 'EN / \u4e2d\u6587';
  }
  applyLanguage(saved === 'zh' ? 'zh' : 'en');
}

function applyLanguage(lang) {
  // Restore all elements to their original state first
  var allLangEls = document.querySelectorAll('[data-lang-en], [data-lang-zh]');
  for (var i = 0; i < allLangEls.length; i++) {
    if (_origHTML.has(allLangEls[i])) allLangEls[i].innerHTML = _origHTML.get(allLangEls[i]);
  }
  document.body.classList.remove('lang-en', 'lang-zh');
  document.body.classList.add('lang-' + lang);
  var targetEls = document.querySelectorAll('[data-lang-' + lang + ']');
  for (var j = 0; j < targetEls.length; j++) {
    var t = targetEls[j];
    var target = t.getAttribute('data-lang-' + lang);
    if (target !== null) t.innerHTML = target;
  }
  translatePageText(lang);
  syncMusicToggle();

  if (window.I18N_ZH && window.I18N_ZH[_origTitle]) {
    document.title = lang === 'zh' ? window.I18N_ZH[_origTitle] : _origTitle;
  }
}

// Music show more toggle
const musicToggle = document.getElementById('musicToggle');
if (musicToggle) {
  musicToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const hidden = document.querySelectorAll('.music-hidden');
    const allShown = Array.from(hidden).every(function(el) { return el.classList.contains('show'); });
    hidden.forEach(function(el) { el.classList.toggle('show'); });
    syncMusicToggle();
  });
}

function syncMusicToggle() {
  const btn = document.getElementById('musicToggle');
  if (!btn) return;
  const hidden = Array.prototype.slice.call(document.querySelectorAll('.music-hidden'));
  const allShown = hidden.length > 0 && hidden.every(function(el) { return el.classList.contains('show'); });
  const zh = document.body.classList.contains('lang-zh');
  btn.textContent = allShown
    ? (zh ? '\u6536\u8d77 \u2190' : 'Show less \u2190')
    : (zh ? '\u66f4\u591a\u6b4c\u66f2 \u2192' : 'More songs \u2192');
}
