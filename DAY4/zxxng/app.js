const toggleBtn = document.querySelector('.nav-toggle');
const hide = document.querySelector('.hide');

toggleBtn.addEventListener('click', () => {
  hide.classList.toggle('hide');
});
