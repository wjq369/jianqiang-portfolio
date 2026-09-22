// Mobile nav toggle
const nav = document.getElementById('mainNav');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Close nav on link click (mobile)
nav && nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
  });
});

// ?? Slideshow ??
const track = document.getElementById('slideshowTrack');
if (track) {
  const slides = track.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slideshowDots');
  let current = 0;
  let timer;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
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

  document.querySelector('.slideshow-btn.next')?.addEventListener('click', () => { clearInterval(timer); next(); startTimer(); });
  document.querySelector('.slideshow-btn.prev')?.addEventListener('click', () => { clearInterval(timer); prev(); startTimer(); });

  function startTimer() {
    timer = setInterval(next, 5000);
  }
  startTimer();

  // Pause on hover
  const slideshow = document.getElementById('slideshow');
  slideshow?.addEventListener('mouseenter', () => clearInterval(timer));
  slideshow?.addEventListener('mouseleave', startTimer);
}
