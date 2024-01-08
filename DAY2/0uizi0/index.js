const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let count = Number(value.textContent);

/** 음수, 0, 양수에 따른 클래스 값 지정 */
const changeColor = (num) => {
  if (num === 0) return (value.className = "zero");
  else if (num < 0) return (value.className = "negative");
  else return (value.className = "positive");
};

/** 숫자 값 변경하기 */
const changeNumber = (num, state) => {
  switch (state) {
    case "decrease":
      num--;
      break;
    case "reset":
      num = 0;
      break;
    case "increase":
      num++;
      break;
  }
  return num;
};

/** 버튼 클릭 시 이벤트 진행 */
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const state = btn.classList.item(1); // 'decrease' or 'zero' or 'increase'
    const changedNum = changeNumber(count, state);
    value.textContent = changedNum;
    changeColor(changedNum);
    count = changedNum;
  });
});
