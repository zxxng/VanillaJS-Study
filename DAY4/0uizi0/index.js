const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  const links = document.querySelector(".links");
  links.classList.toggle("show");
});
