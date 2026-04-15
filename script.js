/* === Navbar Scroll === */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

/* === Mobile Menu === */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuToggle.classList.remove('active');
  navLinks.classList.remove('open');
}));

/* === Particles === */
(function () {
  const c = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const s = Math.random() * 6 + 2;
    p.style.width = s + 'px';
    p.style.height = s + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 8 + 6) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    c.appendChild(p);
  }
})();

/* === Scroll Reveal === */
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* === Slider === */
const track = document.getElementById('sliderTrack');
let sliderPos = 0;
const cardW = 330;
document.getElementById('nextBtn').addEventListener('click', () => {
  const max = -(track.children.length * cardW - track.parentElement.offsetWidth);
  sliderPos = Math.max(sliderPos - cardW, max);
  track.style.transform = 'translateX(' + sliderPos + 'px)';
});
document.getElementById('prevBtn').addEventListener('click', () => {
  sliderPos = Math.min(sliderPos + cardW, 0);
  track.style.transform = 'translateX(' + sliderPos + 'px)';
});

/* === Countdown === */
(function () {
  const end = new Date();
  end.setDate(end.getDate() + 3);
  end.setHours(23, 59, 59);

  function tick() {
    const now = new Date();
    let diff = end - now;
    if (diff < 0) diff = 0;
    const d = Math.floor(diff / 864e5);
    const h = Math.floor(diff % 864e5 / 36e5);
    const m = Math.floor(diff % 36e5 / 6e4);
    const s = Math.floor(diff % 6e4 / 1e3);
    document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
})();

/* === Form Submit === */
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('🎂 Order received! We will contact you shortly.');
  this.reset();
});
