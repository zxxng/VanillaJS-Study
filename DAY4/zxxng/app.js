const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
  const hide = document.querySelector('.hide');
  hide.classList.toggle('hide');
});
