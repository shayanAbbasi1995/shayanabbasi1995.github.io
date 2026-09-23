// Site-wide motion, adapted from Saboo24/Portfolio1 (MIT) but toned down for
// the minimal Hyde theme: sections fade up as they scroll into view, and a
// small back-to-top button appears on long pages.
// Content is only hidden once this script has run (html.js), so the site stays
// fully readable without JavaScript.
(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Scroll reveal ---------------------------------------------------------
  // Top-level blocks of every page are revealed automatically; anything else
  // can opt in with class="reveal".
  var targets = document.querySelectorAll(
    '.page > h2, .page > h3, .page > p, .page > ul, .page > hr, .page > div, .reveal'
  );

  if (!reduceMotion && 'IntersectionObserver' in window) {
    root.classList.add('js-reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    // No negative bottom margin: the last block on a short page must still be
    // able to trigger even when the page can't scroll any further.
    }, { threshold: 0 });

    targets.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // --- Back to top -----------------------------------------------------------
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Back to top');
  button.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5l-7 7 1.4 1.4L11 8.8V20h2V8.8l4.6 4.6L19 12z"/></svg>';
  document.body.appendChild(button);

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      button.classList.toggle('is-shown', window.scrollY > 400);
      ticking = false;
    });
  }, { passive: true });
})();
