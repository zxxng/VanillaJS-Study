const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  const links = document.querySelector(".links");
  const currentClass = links.classList.item(1);
  if (currentClass === "hide") {
    links.classList.remove("hide");
    links.classList.add("show");
  } else {
    links.classList.remove("show");
    links.classList.add("hide");
  }
});
