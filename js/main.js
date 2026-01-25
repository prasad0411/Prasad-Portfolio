import { smoothScroll } from './utils.js';

const codeChars =
  'SELECT*FROMWHEREINSERTUPDATEDELETEJOINdefclassimportpublicprivatevoidintStringreturn{}()[];0123456789';

let mouseX = -1000;
let mouseY = -1000;

document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  initMatrixRain();
  initStatsCounter();
  initScrollReveal();
  initSkillBars();
});

function initMatrixRain() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(0);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function draw() {
    ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
    ctx.font = '15px monospace';

    for (let i = 0; i < drops.length; i++) {
      const x = i * 20;
      const y = drops[i] * 20;

      const distToMouse = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));

      if (distToMouse < 100) {
        drops[i] = 0;
        continue;
      }

      const char = codeChars[Math.floor(Math.random() * codeChars.length)];
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 33);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

function initSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const progress = entry.target.querySelector('.skill-progress');
          if (progress) {
            const width = progress.getAttribute('data-width');
            progress.style.setProperty('--target-width', width + '%');
            setTimeout(() => {
              progress.classList.add('animate');
            }, 100);
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.skill-item').forEach((item) => observer.observe(item));
}

function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number-large');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          animateNumber(entry.target, 0, target, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  statNumbers.forEach((el) => observer.observe(el));
}

function animateNumber(element, start, end, duration) {
  const increment = (end - start) / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll('.project-card-detailed, .timeline-item, .leadership-card, .about-content')
    .forEach((el) => {
      observer.observe(el);
    });
}
