/* ==========================================================================
   Biblioteca Tirant · Landing "Rebel" — interacciones
   ========================================================================== */
(function () {
  'use strict';

  /* Menú móvil (overlay a pantalla completa) ------------------------------ */
  var toggle = document.getElementById('menu-toggle');
  var closeBtn = document.getElementById('menu-close');
  var menu = document.getElementById('mobile-menu');

  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
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
  var tabs = document.querySelectorAll('.tabs .tab');
  var conceptCard = document.querySelector('.concept-card');
  var conceptIconUse = conceptCard ? conceptCard.querySelector('.concept-icon-use') : null;
  var conceptTitle = conceptCard ? conceptCard.querySelector('.concept-title') : null;
  var conceptDesc = conceptCard ? conceptCard.querySelector('.concept-desc') : null;
  var conceptTag = conceptCard ? conceptCard.querySelector('.concept-tag') : null;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
      tab.setAttribute('aria-selected', 'true');

      if (!conceptCard) return;
      if (conceptIconUse) conceptIconUse.setAttribute('href', '#' + tab.dataset.icon);
      if (conceptTitle) conceptTitle.textContent = tab.dataset.title;
      if (conceptDesc) conceptDesc.textContent = tab.dataset.desc;
      if (conceptTag) conceptTag.textContent = tab.dataset.tag;
    });
  });

  /* Nota: se retiró la animación de aparición al hacer scroll (reveal/
     IntersectionObserver) añadida inicialmente por iniciativa propia: en
     viewports grandes causaba la sensación de "contenido que falta" al
     bajar rápido con la rueda. No formaba parte del diseño Rebel. */

})();
