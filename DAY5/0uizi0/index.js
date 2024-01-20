const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".nav-close");
const sidebar = document.querySelector(".nav-container");

const toggleSidebar = () => {
  sidebar.classList.toggle("hide");
};

toggleBtn.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);
