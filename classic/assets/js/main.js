/* ==========================================================================
   Biblioteca Tirant · Landing — interacciones
   ========================================================================== */
(function () {
  'use strict';

  /* Menú móvil ------------------------------------------------------------ */
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
      });
    });
  }

  /* Cabecera transparente sobre el hero, oscura con transparencia al hacer scroll */
  var header = document.querySelector('.site-header');
  if (header) {
    var ticking = false;
    var SCROLL_THRESHOLD = 24;

    function updateHeaderState() {
      header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeaderState();
  }

  /* Animación de entrada al hacer scroll (fade-up minimalista) ------------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealSelectors = [
      '.sec-head', '.quote', '.stats .stat', '.scene', '.feat', '.step',
      '.transform-row', '.faq details', '.sofia-grid > *', '.cta-final-hero > *'
    ];
    var revealTargets = document.querySelectorAll(revealSelectors.join(','));

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

})();
