// ============================================
// Scroll Reveal
// ============================================
const revealObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    }),
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal, .reveal-left').forEach((el) => revealObs.observe(el));

// ============================================
// Nav scroll
// ============================================
const nav = document.querySelector('.nav');
window.addEventListener(
  'scroll',
  () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  },
  { passive: true }
);

// ============================================
// Smooth anchor scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      window.scrollTo({
        top: t.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth',
      });
    }
  });
});

// ============================================
// Scroll Progress Bar
// ============================================
(function () {
  const bar = document.createElement('div');
  bar.className = 'scroll-bar';
  document.body.prepend(bar);
  window.addEventListener(
    'scroll',
    () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    },
    { passive: true }
  );
})();

// ============================================
// Back to Top
// ============================================
(function () {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);
  window.addEventListener(
    'scroll',
    () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    },
    { passive: true }
  );
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ============================================
// Spotlight Effect (follows mouse on cards)
// ============================================
(function () {
  document.querySelectorAll('.exp-card, .proj-card, .skill-card').forEach((card) => {
    let spot = card.querySelector('.spotlight');
    if (!spot) {
      spot = document.createElement('div');
      spot.className = 'spotlight';
      card.appendChild(spot);
    }
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      spot.style.left = e.clientX - rect.left + 'px';
      spot.style.top = e.clientY - rect.top + 'px';
    });
  });
})();

// ============================================
// Project Card 3D Tilt
// ============================================
(function () {
  document.querySelectorAll('.proj-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform =
        'perspective(700px) rotateX(' + y * -5 + 'deg) rotateY(' + x * 5 + 'deg) translateY(-3px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ============================================
// Counter Animation (Publication stats)
// ============================================
(function () {
  const counters = document.querySelectorAll('.pub-val');
  if (!counters.length) return;

  const cObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        cObs.unobserve(el);
        const text = el.textContent.trim();
        const match = text.match(/^([\d,.]+)(%?)$/);
        if (!match) return;

        const target = parseFloat(match[1].replace(',', ''));
        const suffix = match[2];
        const hasComma = match[1].includes(',');
        const hasDecimal = match[1].includes('.');
        const dur = 1400;
        const start = performance.now();

        function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          let v = eased * target;
          v = hasDecimal ? v.toFixed(1) : Math.round(v);
          if (hasComma) v = Number(v).toLocaleString();
          el.textContent = v + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        el.textContent = '0' + suffix;
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => cObs.observe(c));
})();

// ============================================
// Tag Stagger Animation
// ============================================
(function () {
  const tagGroups = document.querySelectorAll('.tag-anim');
  if (!tagGroups.length) return;

  const tagObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('animate');
          tagObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  tagGroups.forEach((g) => tagObs.observe(g));
})();

// ============================================
// Active Nav Link
// ============================================
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (
      (href && href.includes('work') && path.includes('work')) ||
      (href && href.includes('blog') && path.includes('blog'))
    ) {
      link.classList.add('active');
    }
  });
})();
