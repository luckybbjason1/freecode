/* ===================================================
   PARTICLES — Canvas 기반 파티클 배경
   (particles.js 라이브러리 없이 직접 구현)
   =================================================== */
'use strict';

function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrameId;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  // 파티클 색상 (골드 + 에메랄드 + 퍼플)
  const COLORS = [
    'rgba(212,175,55,',   // gold
    'rgba(16,185,129,',   // emerald
    'rgba(124,58,237,',   // purple
    'rgba(59,130,246,',   // blue
  ];

  function createParticle() {
    return {
      x:      randomBetween(0, canvas.width),
      y:      randomBetween(0, canvas.height),
      vx:     randomBetween(-0.3, 0.3),
      vy:     randomBetween(-0.6, -0.1),
      r:      randomBetween(1, 2.5),
      alpha:  randomBetween(0.1, 0.6),
      color:  COLORS[Math.floor(Math.random() * COLORS.length)],
      life:   0,
      maxLife: randomBetween(200, 500),
    };
  }

  function initParticleList(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      const p = createParticle();
      p.life = randomBetween(0, p.maxLife); // stagger
      particles.push(p);
    }
  }

  function drawConnections() {
    const maxDist = 100;
    const maxDistSq = maxDist * maxDist;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;
        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const opacity = (1 - dist / maxDist) * 0.06;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(212,175,55,' + opacity + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawConnections();

    particles.forEach(function(p, i) {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;

      // 페이드인/아웃
      let a;
      const fadeLen = 50;
      if (p.life < fadeLen) {
        a = (p.life / fadeLen) * p.alpha;
      } else if (p.life > p.maxLife - fadeLen) {
        a = ((p.maxLife - p.life) / fadeLen) * p.alpha;
      } else {
        a = p.alpha;
      }

      // 수명 만료 시 재생성
      if (p.life >= p.maxLife) {
        particles[i] = createParticle();
        return;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + a + ')';
      ctx.fill();
    });

    animFrameId = requestAnimationFrame(update);
  }

  function start() {
    resize();
    initParticleList(60);
    update();
  }

  function stop() {
    cancelAnimationFrame(animFrameId);
  }

  let resizeTimer;
  const resizeObserver = new ResizeObserver(function() {
    resize();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() { initParticleList(60); }, 200);
  });
  resizeObserver.observe(canvas.parentElement || canvas);

  // 페이지 가시성 변경 시 절전
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) { stop(); } else { start(); }
  });

  start();

  return { stop: stop };
}
