import reviews from "./data.js";

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

/** 리뷰 정보 변경하기 */
const changeReview = (id) => {
  const item = reviews[id];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

/** 1 ~ 4 사이의 랜덤 값 구하기 */
const getRandom = () => {
  const MIN = 1;
  const MAX = reviews.length;
  return Math.floor(Math.random() * (MAX - MIN) + MIN);
};

let currentId = 0;

document.addEventListener("DOMContentLoaded", () => {
  changeReview(currentId);
});

prevBtn.addEventListener("click", () => {
  currentId--;
  if (currentId < 0) currentId = reviews.length - 1;

  changeReview(currentId);
});

nextBtn.addEventListener("click", () => {
  currentId++;
  if (currentId > reviews.length - 1) currentId = 0;

  changeReview(currentId);
});

randomBtn.addEventListener("click", () => {
  currentId = getRandom();
  changeReview(currentId);
});
