let neuralInitialized = false;

const UI_DELAY_MS = 10;

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  observeNeuralNetwork();
});

function observeNeuralNetwork() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !neuralInitialized) {
          neuralInitialized = true;
          setTimeout(() => {
            initNeuralNetwork();
          }, UI_DELAY_MS);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(canvas);
}

function initNeuralNetwork() {
  const canvas = document.getElementById('neuralCanvas');
  const accuracyEl = document.getElementById('accuracyValue');
  if (!canvas || !accuracyEl) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.offsetWidth;
  const height = 300;
  canvas.width = width;
  canvas.height = height;

  const layers = [5, 8, 8, 3];
  const nodes = [];
  const connections = [];

  const layerSpacing = width / (layers.length + 1);

  layers.forEach((count, layerIdx) => {
    const layerNodes = [];
    const nodeSpacing = height / (count + 1);

    for (let i = 0; i < count; i++) {
      layerNodes.push({
        x: layerSpacing * (layerIdx + 1),
        y: nodeSpacing * (i + 1),
        active: false,
      });
    }
    nodes.push(layerNodes);
  });

  for (let l = 0; l < layers.length - 1; l++) {
    for (let i = 0; i < nodes[l].length; i++) {
      for (let j = 0; j < nodes[l + 1].length; j++) {
        connections.push({
          from: nodes[l][i],
          to: nodes[l + 1][j],
          active: false,
        });
      }
    }
  }

  let currentAccuracy = 0;
  let activationIndex = 0;
  let frameCount = 0;
  const targetAccuracy = 97.6;
  const totalFrames = connections.length * 2;
  const accuracyPerFrame = targetAccuracy / totalFrames;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    connections.forEach((conn) => {
      ctx.beginPath();
      ctx.moveTo(conn.from.x, conn.from.y);
      ctx.lineTo(conn.to.x, conn.to.y);
      ctx.strokeStyle = conn.active ? 'rgba(0, 255, 65, 0.6)' : 'rgba(0, 188, 212, 0.2)';
      ctx.lineWidth = conn.active ? 2 : 1;
      ctx.stroke();
    });

    nodes.forEach((layer) => {
      layer.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = node.active ? '#00ff41' : '#00bcd4';
        ctx.fill();
        ctx.strokeStyle = node.active ? '#00ff41' : '#1a1a2e';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    });

    frameCount++;
    if (frameCount % 2 === 0 && activationIndex < connections.length) {
      connections[activationIndex].active = true;
      connections[activationIndex].from.active = true;
      connections[activationIndex].to.active = true;
      activationIndex++;
    }

    if (currentAccuracy < targetAccuracy) {
      currentAccuracy += accuracyPerFrame;
      accuracyEl.textContent = `${Math.min(currentAccuracy, targetAccuracy).toFixed(1)}%`;
    } else {
      accuracyEl.textContent = `${targetAccuracy}%`;
    }

    if (activationIndex < connections.length || currentAccuracy < targetAccuracy) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, UI_DELAY_MS);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.project-card-detailed').forEach((card) => {
    observer.observe(card);
  });
}
