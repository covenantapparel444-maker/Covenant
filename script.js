// Animación cuando se hace clic en los links
document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', e => {
    link.classList.add('clicked');
    setTimeout(() => link.classList.remove('clicked'), 300);
  });
});

// Después de la intro, aparece la página
setTimeout(() => {
  document.querySelector('.container').classList.remove('hidden');
}, 2200);
