const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const sideBar = document.querySelector('.side-bar');

const handleCloseSidebar = () => {
  sideBar.classList.toggle('hide');
};

toggleBtn.addEventListener('click', handleCloseSidebar);
closeBtn.addEventListener('click', handleCloseSidebar);
