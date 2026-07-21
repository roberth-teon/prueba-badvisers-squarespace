/* B. ADVISERS — chrome behavior, ported from public_html/js/main.js
   Only the pieces needed for the chrome (side-nav panel, header color swap on scroll)
   are included in this first test; case modal / team slider / tabs / service nav
   belong to other pages and are out of scope. */

function initNavPanel() {
  var toggle = document.getElementById('menu-toggle');
  var backdrop = document.getElementById('nav-backdrop');
  var sideNav = document.getElementById('side-nav');

  if (!toggle || !sideNav) return;

  function openNav() {
    document.body.classList.add('nav-open');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    sideNav.setAttribute('aria-hidden', 'false');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    sideNav.setAttribute('aria-hidden', 'true');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
  }

  function toggleNav() {
    if (document.body.classList.contains('nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  }

  toggle.addEventListener('click', toggleNav);

  if (backdrop) {
    backdrop.addEventListener('click', closeNav);
  }

  sideNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  sideNav.setAttribute('aria-hidden', 'true');
}

function initHeaderTheme() {
  var header = document.querySelector('.badv-site-header');
  // Las páginas hechas con Code Blocks usan `.hero`; las colecciones nativas
  // (Blog, Events, etc.) renderizan el hero como `.page-banner-wrapper`.
  var hero = document.querySelector('.hero, .page-banner-wrapper');

  if (!header) return;

  if (!hero) {
    header.classList.add('badv-site-header--light');
    return;
  }

  function updateState() {
    var stillInHero = hero.getBoundingClientRect().bottom > 72;
    header.classList.toggle('badv-site-header--light', !stillInHero);
  }

  updateState();
  window.addEventListener('scroll', updateState, { passive: true });
  window.addEventListener('resize', updateState);
}

/* Convierte los cinco bloques Imagen nativos de /capacidades en tarjetas.
   El contenido sigue perteneciendo al editor de Squarespace: aquí solo se
   añaden clases e identificadores para maquetación y enlaces internos. */
function initCapacidadesGrid() {
  var path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path !== '/capacidades') return;

  document.body.classList.add('badv-capacidades-page');

  var layout = document.querySelector('.site-page .sqs-layout');
  if (!layout) return;

  var blocks = Array.prototype.slice.call(
    layout.querySelectorAll('.sqs-block-image')
  ).slice(0, 5);

  if (!blocks.length) return;

  var parent = blocks[0].parentElement;
  var sameParent = blocks.every(function (block) {
    return block.parentElement === parent;
  });

  if (sameParent) parent.classList.add('badv-capacidades-grid');

  var anchors = [
    'levantamiento-de-capital',
    'estructuracion-vehiculos',
    'banca-de-inversion',
    'finanzas-corporativas',
    'project-finance'
  ];

  blocks.forEach(function (block, index) {
    block.classList.add('badv-capacidades-card');
    block.classList.add('badv-capacidades-card--' + (index + 1));
    block.id = anchors[index];
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initNavPanel();
  initHeaderTheme();
  initCapacidadesGrid();
});
