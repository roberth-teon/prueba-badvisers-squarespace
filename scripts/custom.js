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
  var hero = document.querySelector('.hero, .badv-capacidades-hero, .page-banner-wrapper');

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

  var staticContext = window.Static && window.Static.SQUARESPACE_CONTEXT;
  var collectionData = staticContext && staticContext.collection
    ? staticContext.collection
    : {};
  var pageTitle = document.querySelector('.page-title');
  var pageDescription = document.querySelector('.page-description');
  var titleText = pageTitle && pageTitle.textContent.trim()
    ? pageTitle.textContent.trim()
    : (collectionData.title || 'Nuestras Capacidades');
  var descriptionText = pageDescription && pageDescription.textContent.trim()
    ? pageDescription.textContent.trim()
    : (typeof collectionData.description === 'string'
      ? collectionData.description.replace(/<[^>]*>/g, '').trim()
      : 'Capital global para ambiciones sin fronteras.');

  var contentContainer = document.querySelector('.content-container');
  var sitePage = document.querySelector('.site-page');
  if (contentContainer && sitePage && !contentContainer.querySelector('.badv-capacidades-hero')) {
    var hero = document.createElement('section');
    var heroBackground = document.createElement('div');
    var heroContent = document.createElement('div');
    var heroLabel = document.createElement('p');
    var heroTitle = document.createElement('h1');
    var heroDescription = document.createElement('p');
    var socialImage = document.querySelector('meta[property="og:image"]');
    var mainImage = collectionData.mainImage || {};
    var heroSource = mainImage.assetUrl || mainImage.imageUrl || mainImage.url ||
      (socialImage ? socialImage.getAttribute('content') : '');

    hero.className = 'badv-capacidades-hero';
    heroBackground.className = 'badv-capacidades-hero__background';
    heroContent.className = 'badv-capacidades-hero__content';
    heroLabel.className = 'badv-capacidades-hero__label';
    heroTitle.className = 'badv-capacidades-hero__title';
    heroDescription.className = 'badv-capacidades-hero__description';
    if (heroSource) heroBackground.style.backgroundImage = 'url("' + heroSource + '")';
    heroLabel.textContent = 'Servicios';
    heroTitle.textContent = titleText;
    heroDescription.textContent = descriptionText;
    heroContent.appendChild(heroLabel);
    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroDescription);
    hero.appendChild(heroBackground);
    hero.appendChild(heroContent);
    contentContainer.insertBefore(hero, sitePage);
  }

  var bannerImage = document.querySelector('.page-banner-image');
  if (bannerImage && !bannerImage.getAttribute('src')) {
    var bannerSource = bannerImage.getAttribute('data-src');
    if (bannerSource) bannerImage.setAttribute('src', bannerSource);
  }

  var mainContent = layout.parentElement;
  if (mainContent && !mainContent.querySelector('.badv-capacidades-intro')) {
    var intro = document.createElement('section');
    var introCopy = document.createElement('div');
    var introLabel = document.createElement('p');
    var introTitle = document.createElement('h2');
    var introDescription = document.createElement('p');
    var watermark = document.createElement('div');
    var watermarkLetter = document.createElement('span');
    var watermarkDot = document.createElement('span');

    intro.className = 'badv-capacidades-intro';
    introCopy.className = 'badv-capacidades-intro__copy';
    introLabel.className = 'badv-capacidades-intro__label';
    introTitle.className = 'badv-capacidades-intro__title';
    introDescription.className = 'badv-capacidades-intro__description';
    watermark.className = 'badv-capacidades-intro__watermark';
    watermark.setAttribute('aria-hidden', 'true');
    watermarkLetter.className = 'badv-capacidades-intro__letter';
    watermarkDot.className = 'badv-capacidades-intro__dot';

    introLabel.textContent = 'Servicios';
    introTitle.textContent = titleText;
    introDescription.textContent = descriptionText;
    watermarkLetter.textContent = 'B';
    watermarkDot.textContent = '.';

    introCopy.appendChild(introLabel);
    introCopy.appendChild(introTitle);
    introCopy.appendChild(introDescription);
    watermark.appendChild(watermarkLetter);
    watermark.appendChild(watermarkDot);
    intro.appendChild(introCopy);
    intro.appendChild(watermark);
    mainContent.insertBefore(intro, layout);
  }

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

  var icons = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 9h.01M17 15h.01"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/><path d="M16 7h4v4"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V10l8-5 8 5v11"/><path d="M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01"/></svg>'
  ];

  blocks.forEach(function (block, index) {
    block.classList.add('badv-capacidades-card');
    block.classList.add('badv-capacidades-card--' + (index + 1));
    block.id = anchors[index];

    var cardCopy = block.querySelector('.image-card');
    var cardTitle = block.querySelector('.image-title');
    var cardSubtitle = block.querySelector('.image-subtitle');
    if (cardCopy && cardTitle && !cardCopy.querySelector('.badv-capacidades-card__visual')) {
      var visual = document.createElement('div');
      var heading = document.createElement('div');
      var icon = document.createElement('div');
      var headingText = document.createElement('h3');
      var description = document.createElement('p');

      visual.className = 'badv-capacidades-card__visual';
      heading.className = 'badv-capacidades-card__heading';
      icon.className = 'badv-capacidades-card__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = icons[index];
      headingText.textContent = cardTitle.textContent.trim();
      description.className = 'badv-capacidades-card__description';
      description.textContent = cardSubtitle ? cardSubtitle.textContent.trim() : '';
      heading.appendChild(icon);
      heading.appendChild(headingText);
      visual.appendChild(heading);
      visual.appendChild(description);
      cardCopy.appendChild(visual);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initNavPanel();
  initCapacidadesGrid();
  initHeaderTheme();
});
