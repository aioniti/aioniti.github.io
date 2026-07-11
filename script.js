
document.addEventListener('DOMContentLoaded', function() {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    if(link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});
