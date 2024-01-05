import ColorGenerator from './ColorGenerator.js';

class App {
  constructor() {
    this.simpleBtn = document.querySelector('.simple-btn');
    this.hexBtn = document.querySelector('.hex-btn');
    this.clickBtn = document.querySelector('.click-btn');
    this.main = document.getElementById('main');
    this.color = document.getElementById('color');
    this.colorGenerator = new ColorGenerator();
    this.type = 'simple';
    this.bindEvents();
  }

  bindEvents() {
    this.simpleBtn.addEventListener('click', () => {
      this.#setActiveButton('simple');
      this.type = 'simple';
    });

    this.hexBtn.addEventListener('click', () => {
      this.#setActiveButton('hex');
      this.type = 'hex';
    });

    this.clickBtn.addEventListener('click', () => {
      const color = this.colorGenerator.getColor(this.type);
      this.main.style.backgroundColor = color;
      this.color.textContent = color;
    });
  }

  #setActiveButton(type) {
    if (type === 'simple') {
      this.simpleBtn.classList.add('active');
      this.hexBtn.classList.remove('active');
    } else {
      this.hexBtn.classList.add('active');
      this.simpleBtn.classList.remove('active');
    }
  }
}

export default App;
