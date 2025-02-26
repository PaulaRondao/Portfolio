document.querySelector('btn-traduction').addEventListener('click', function () {
  // Vérifier si l'utilisateur est sur la version française
  if (window.location.pathname.includes('/index.html')) {
    window.location.href = '/en/index.html'; // Rediriger vers la version anglaise
  } else {
    window.location.href = '/index.html'; // Rediriger vers la version française
  }
});