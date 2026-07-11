document.addEventListener('DOMContentLoaded', function () {
  // Active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // Hamburger toggle
  const toggle = document.querySelector('.nav-toggle');
  const headerEl = document.querySelector('header');
  if (toggle && headerEl) {
    toggle.addEventListener('click', function () {
      headerEl.classList.toggle('nav-open');
    });

    // Close menu when a nav link is clicked (mobile UX)
    headerEl.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        headerEl.classList.remove('nav-open');
      });
    });
  }

  // Inject shared footer
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(function (res) { return res.text(); })
      .then(function (html) { footerPlaceholder.outerHTML = html; });
  }
});
