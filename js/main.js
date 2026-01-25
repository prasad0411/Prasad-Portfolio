import { smoothScroll } from './utils.js';

let roleIndex = 0;
const roles = document.querySelectorAll('.rotating-text .role');

document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  initStatsCounter();
  initTerminal();
  initScrollReveal();
  initRoleRotation();
});

function initRoleRotation() {
  if (roles.length === 0) return;

  setInterval(() => {
    roles[roleIndex].classList.remove('active');
    roleIndex = (roleIndex + 1) % roles.length;
    roles[roleIndex].classList.add('active');
  }, 3000);
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
