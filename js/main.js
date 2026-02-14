const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const nav = document.querySelector('.nav');
window.addEventListener(
  'scroll',
  () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  },
  { passive: true }
);

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
