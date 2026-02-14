/* ========================================
   PRASAD KANADE - PORTFOLIO
   Advanced JavaScript Animations & Interactions
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCustomCursor();
  initNavigation();
  initScrollAnimations();
  initCounterAnimations();
  initSmoothScroll();
  initTiltEffect();
  initTypeWriter();
});

/* ========================================
   SCROLL PROGRESS BAR
   ======================================== */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

/* ========================================
   CUSTOM CURSOR
   ======================================== */
function initCustomCursor() {
  // Only on desktop
  if (window.innerWidth < 768) return;

  const cursorDot = document.createElement('div');
  const cursorOutline = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorOutline.className = 'cursor-outline';
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  let mouseX = 0,
    mouseY = 0;
  let outlineX = 0,
    outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Smooth follow for outline
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Hover effects
  const hoverElements = document.querySelectorAll(
    'a, button, .work-card, .skill-card, .contact-card, .blog-card'
  );
  hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.classList.add('hover');
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.classList.remove('hover');
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '0.5';
  });
}

/* ========================================
   NAVIGATION
   ======================================== */
function initNavigation() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add scrolled class
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide/show on scroll direction
    if (currentScroll > lastScroll && currentScroll > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href')?.includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Add stagger delay for children
        const children = entry.target.querySelectorAll('.animate-on-scroll');
        children.forEach((child, index) => {
          child.style.transitionDelay = `${index * 0.1}s`;
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  // Re-trigger animations on scroll (for repeat effect)
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top > windowHeight || rect.bottom < 0) {
          el.classList.remove('visible');
        }
      });
    }, 100);
  });
}

/* ========================================
   COUNTER ANIMATIONS
   ======================================== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-value[data-count]');

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function (ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = start + (target - start) * easeOut;

          if (target % 1 !== 0) {
            counter.textContent = current.toFixed(1);
          } else {
            counter.textContent = Math.floor(current);
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

/* ========================================
   TILT EFFECT
   ======================================== */
function initTiltEffect() {
  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

/* ========================================
   TYPEWRITER EFFECT
   ======================================== */
function initTypeWriter() {
  const codeContent = document.querySelector('.code-content code');
  if (!codeContent) return;

  const originalHTML = codeContent.innerHTML;
  codeContent.innerHTML = '';
  codeContent.style.opacity = '1';

  let charIndex = 0;
  const speed = 15;

  function type() {
    if (charIndex < originalHTML.length) {
      // Handle HTML tags
      if (originalHTML[charIndex] === '<') {
        const closeIndex = originalHTML.indexOf('>', charIndex);
        if (closeIndex !== -1) {
          codeContent.innerHTML += originalHTML.substring(charIndex, closeIndex + 1);
          charIndex = closeIndex + 1;
        }
      } else {
        codeContent.innerHTML += originalHTML[charIndex];
        charIndex++;
      }
      setTimeout(type, speed);
    }
  }

  // Start typing when code window is visible
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(type, 500);
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  const codeWindow = document.querySelector('.code-window');
  if (codeWindow) {
    observer.observe(codeWindow);
  }
}

/* ========================================
   MAGNETIC BUTTONS (Optional Enhancement)
   ======================================== */
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/* ========================================
   PARALLAX EFFECT (Optional)
   ======================================== */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-parallax') || 0.5;
      const yPos = -(window.scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

/* ========================================
   LOADING ANIMATION
   ======================================== */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  // Trigger hero animations
  const heroElements = document.querySelectorAll('.hero .animate-slide-up');
  heroElements.forEach((el, index) => {
    el.style.animationDelay = `${0.2 + index * 0.1}s`;
  });
});

/* ========================================
   KEYBOARD NAVIGATION
   ======================================== */
document.addEventListener('keydown', (e) => {
  // ESC to close any modals (if implemented)
  if (e.key === 'Escape') {
    // Handle escape key
  }

  // Arrow key navigation for work cards
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

/* ========================================
   UTILITY: DEBOUNCE
   ======================================== */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* ========================================
   UTILITY: THROTTLE
   ======================================== */
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/* ========================================
   PERFORMANCE: REQUEST IDLE CALLBACK
   ======================================== */
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    initMagneticButtons();
    initParallax();
  });
} else {
  setTimeout(() => {
    initMagneticButtons();
    initParallax();
  }, 1);
}
