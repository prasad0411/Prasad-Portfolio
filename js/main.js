import { smoothScroll } from './utils.js';

const codeSnippets = [
  'const optimizeQuery = (sql) => applyCompositeIndexing(sql);',
  'async function trainModel() { return await XGBoost.fit(data); }',
  'const microservice = new SpringBootApp({ port: 8080 });',
  'SELECT * FROM users WHERE created_at > NOW() - INTERVAL 7 DAY;',
];

let currentSnippet = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  initStatsCounter();
  initTerminal();
  initScrollReveal();
  initCodeTyping();
  initParticles();
  initSkillBars();
  initSliderInteraction();
});

function initCodeTyping() {
  const codeElement = document.getElementById('liveCode');
  if (!codeElement) return;

  function typeCode() {
    if (charIndex < codeSnippets[currentSnippet].length) {
      codeElement.textContent += codeSnippets[currentSnippet][charIndex];
      charIndex++;
      setTimeout(typeCode, 50);
    } else {
      setTimeout(() => {
        charIndex = 0;
        currentSnippet = (currentSnippet + 1) % codeSnippets.length;
        codeElement.textContent = '';
        typeCode();
      }, 3000);
    }
  }

  typeCode();
}

function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 188, 212, 0.6)';
      ctx.fill();

      particles.forEach((p2, j) => {
        if (i !== j) {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 188, 212, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

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
            const width = progress.style.width;
            progress.style.setProperty('--target-width', width);
            progress.style.width = '0';
            setTimeout(() => {
              progress.classList.add('animate');
              progress.style.width = width;
            }, 100);
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.skill-item').forEach((item) => observer.observe(item));
}

function initSliderInteraction() {
  const divider = document.getElementById('sliderDivider');
  if (!divider) return;

  let isAnimating = false;

  divider.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    divider.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
      divider.style.transform = 'rotate(0deg) scale(1)';
      isAnimating = false;
    }, 600);
  });
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

function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');

  if (!terminalInput || !terminalOutput) return;

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = e.target.value.trim().toLowerCase();
      handleCommand(command, terminalOutput);
      e.target.value = '';
    }
  });
}

function handleCommand(command, output) {
  const responses = {
    help: '📋 Available commands: help, projects, contact, resume, github, clear',
    projects: () => {
      window.location.href = 'projects.html';
    },
    contact: () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    },
    resume: () => {
      window.open('assets/resume.pdf', '_blank');
    },
    github: () => {
      window.open('https://github.com/prasad0411', '_blank');
    },
    clear: () => {
      output.textContent = '';
      return null;
    },
  };

  if (command === 'clear') {
    output.textContent = '';
    return;
  }

  if (typeof responses[command] === 'function') {
    responses[command]();
    output.textContent = `✓ Executing ${command}...`;
  } else if (responses[command]) {
    output.textContent = responses[command];
  } else if (command) {
    output.textContent = `❌ Command not found: '${command}'. Type 'help' for available commands.`;
  }
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
