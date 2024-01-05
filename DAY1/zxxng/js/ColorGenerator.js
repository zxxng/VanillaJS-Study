class ColorGenerator {
  constructor() {
    this.color = 'royalblue';
  }

  getColor(type) {
    if (type === 'hex') this.color = this.#generateHexColor();
    else this.color = this.#generateSimpleColor();

    return this.color;
  }

  #generateSimpleColor() {
    const colorList = ['green', 'red', 'yellow', 'salmon', 'gold', 'royalblue', 'skyblue', 'coral'];
    const randomNumber = Math.floor(Math.random() * colorList.length);
    return colorList[randomNumber];
  }

  #generateHexColor() {
    let randomcolor = '#';
    const colorList = '0123456789ABCDEF';
    while (randomcolor.length < 7) {
      const randomNumber = Math.floor(Math.random() * 16);
      randomcolor += colorList[randomNumber];
    }
    return randomcolor;
  }
}

export default ColorGenerator;
