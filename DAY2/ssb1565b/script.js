const btnGroup = document.querySelector(".btn-group");
const decrease_btn = btnGroup.querySelectorAll("button")[0];
const reset_btn = btnGroup.querySelectorAll("button")[1];
const increase_btn = btnGroup.querySelectorAll("button")[2];
let number = parseInt(document.querySelector(".number").textContent);

decrease_btn.addEventListener("click", () => {
  number -= 1;
  document.querySelector(".number").textContent = number;
  updateColor();
});

reset_btn.addEventListener("click", () => {
  number = 0;
  document.querySelector(".number").textContent = number;
  updateColor();
});

increase_btn.addEventListener("click", () => {
  number += 1;
  document.querySelector(".number").textContent = number;
  updateColor();
});

const updateColor = () => {
  const numberEl = document.querySelector(".number");
  if (number == 0) {
    numberEl.style.color = "rgb(16, 42, 66)";
  } else if (number < 0) {
    numberEl.style.color = "red";
  } else {
    numberEl.style.color = "green";
  }
};
