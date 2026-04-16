(() => {
  'use strict';

  /* ── Scroll-reveal ── */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal, .tl__item').forEach(el => revealObserver.observe(el));

  /* ── Metric counter ── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.countTo);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const decimals = (target % 1 !== 0) ? 1 : 0;
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = eased * target;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const metricsObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.metrics__number').forEach(animateCounter);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  const metricsSection = document.querySelector('.metrics');
  if (metricsSection) metricsObserver.observe(metricsSection);

  /* ── Console easter egg ── */
  console.log(
    '%cJan Patrick McGhee',
    'font-size:20px;font-family:Georgia,serif;color:#ece8e1;background:#12110f;padding:8px 16px;border-left:3px solid #5a7d9a'
  );
  console.log(
    '%cSenior Product Manager · Founder',
    'font-size:12px;font-family:monospace;color:#8a8578;background:#12110f;padding:4px 16px'
  );
  console.log('Curious enough to open DevTools? Let\u2019s talk → https://linkedin.com/in/janmcghee/');

  /* ── Broken-image fallback ── */
  document.querySelectorAll('.product-card__img-wrap img').forEach(img => {
    img.addEventListener('error', () => img.setAttribute('data-error', ''));
  });
})();
