/* ==========================================================================
   Biblioteca Tirant · Landing "Rebel · Full width" — interacciones
   ========================================================================== */
(function () {
  'use strict';

  /* Menú móvil (overlay a pantalla completa) ------------------------------ */
  var toggle = document.getElementById('menu-toggle');
  var closeBtn = document.getElementById('menu-close');
  var menu = document.getElementById('mobile-menu');

  function getFocusableInMenu() {
    return Array.prototype.slice.call(
      menu.querySelectorAll('a[href], button:not([disabled])')
    );
  }

  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');

    var focusables = getFocusableInMenu();
    if (focusables.length) focusables[0].focus();
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.focus();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (!menu.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        closeMenu();
        return;
      }

      /* Trampa de foco: Tab y Shift+Tab ciclan solo dentro del menú ------- */
      if (e.key === 'Tab') {
        var focusables = getFocusableInMenu();
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* Acordeón FAQ ------------------------------------------------------------ */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var summary = item.querySelector('.faq-summary');
    if (!summary) return;
    summary.addEventListener('click', function () {
      var isOpen = item.getAttribute('data-open') === 'true';
      item.setAttribute('data-open', isOpen ? 'false' : 'true');
      summary.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });

  /* Tabs de la banda "Lo que está en juego" --------------------------------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs .tab'));
  var conceptCard = document.querySelector('.concept-card');
  var conceptIconUse = conceptCard ? conceptCard.querySelector('.concept-icon-use') : null;
  var conceptTitle = conceptCard ? conceptCard.querySelector('.concept-title') : null;
  var conceptDesc = conceptCard ? conceptCard.querySelector('.concept-desc') : null;
  var conceptTag = conceptCard ? conceptCard.querySelector('.concept-tag') : null;

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var isSelected = t === tab;
      t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      t.setAttribute('tabindex', isSelected ? '0' : '-1');
    });

    if (!conceptCard) return;
    if (conceptIconUse) conceptIconUse.setAttribute('href', '#' + tab.dataset.icon);
    if (conceptTitle) conceptTitle.textContent = tab.dataset.title;
    if (conceptDesc) conceptDesc.textContent = tab.dataset.desc;
    if (conceptTag) conceptTag.textContent = tab.dataset.tag;
    conceptCard.setAttribute('aria-labelledby', tab.id);
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { selectTab(tab); });

    tab.addEventListener('keydown', function (e) {
      var targetIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') targetIndex = (index + 1) % tabs.length;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') targetIndex = (index - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') targetIndex = 0;
      else if (e.key === 'End') targetIndex = tabs.length - 1;

      if (targetIndex === null) return;
      e.preventDefault();
      tabs[targetIndex].focus();
      selectTab(tabs[targetIndex]);
    });
  });

  /* Nav fija: fondo sólido al hacer scroll ----------------------------------- */
  var siteNav = document.getElementById('site-nav');
  if (siteNav) {
    var SCROLL_THRESHOLD = 24;
    var ticking = false;

    function updateNavState() {
      siteNav.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateNavState);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateNavState();
  }

  /* Aparición progresiva de tarjetas al hacer scroll ------------------------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealGroups = [
      '.facts > .fact',
      '.scenes > .scene',
      '.features > .feature',
      '.steps > .step',
      '.results-row > .result-card',
      '.footer-cols > .footer-col'
    ];

    var revealTargets = [];
    revealGroups.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', (i * 160) + 'ms');
        revealTargets.push(el);
      });
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

})();
