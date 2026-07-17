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
  var hero = document.querySelector('.hero');

  if (!header) return;

  if (!hero) {
    header.classList.add('badv-site-header--light');
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        header.classList.toggle('badv-site-header--light', !entry.isIntersecting);
      });
    },
    { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
  );

  observer.observe(hero);
}

document.addEventListener('DOMContentLoaded', function () {
  initNavPanel();
  initHeaderTheme();
});
