const btns = document.querySelectorAll(".btn");

/** 음수, 0, 양수에 따른 클래스 값 지정 */
const changeColor = (num) => {
  const value = document.getElementById("value");
  if (num === 0) return (value.className = "zero");
  else if (num < 0) return (value.className = "negative");
  else return (value.className = "positive");
};

/** 숫자 값 변경하기 */
const changeNumber = (num, state) => {
  switch (state) {
    case "decrease":
      return num - 1;
    case "reset":
      return 0;
    case "increase":
      return num + 1;
    default:
      return num;
  }
};

/** 버튼 클릭 시 이벤트 진행 */
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = document.getElementById("value");
    let count = Number(value.textContent);
    const state = btn.classList.item(1); // 'decrease' or 'zero' or 'increase'
    const changedNum = changeNumber(count, state);
    value.textContent = changedNum;
    changeColor(changedNum);
    count = changedNum;
  });
});
