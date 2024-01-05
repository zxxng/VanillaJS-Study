const background = document.getElementById("background");
const font = document.getElementById("color");
const btn = document.querySelector("button");

/** 랜덤한 컬러를 생성하는 함수 */
const makeRandomColor = () => {
  const getRandomValue = () => Math.floor(Math.random() * 255);
  const r = getRandomValue();
  const g = getRandomValue();
  const b = getRandomValue();
  return `rgb(${r},${g},${b})`;
};

// 버튼 클릭 시 color 및 text 변경
btn.addEventListener("click", () => {
  const randomColor = makeRandomColor();
  background.style.backgroundColor = randomColor;
  font.style.color = randomColor;
  font.innerText = randomColor;
});
