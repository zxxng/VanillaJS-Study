const getHex = () => {
  // 참고 : https://hirodaegu.tistory.com/243
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
};

const handleColor = () => {
  const color = getHex();
  const allowColor = document.querySelector("span");
  allowColor.innerText = color;
  const backgroundColor = document.querySelector("main");
  backgroundColor.style.backgroundColor = color;
};

document.getElementById("colorBtn").addEventListener("click", handleColor);
