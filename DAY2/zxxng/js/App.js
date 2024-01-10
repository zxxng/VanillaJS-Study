import Counter from './Counter.js';

class App {
  constructor() {
    this.controller = new Counter();
    this.decreaseBtn = document.querySelector('.decrease-btn');
    this.resetBtn = document.querySelector('.reset-btn');
    this.increaseBtn = document.querySelector('.increase-btn');
    this.bindEvents();
  }

  bindEvents() {
    this.decreaseBtn.addEventListener('click', () => {
      this.controller.decreaseCount();
    });
    this.resetBtn.addEventListener('click', () => {
      this.controller.resetCount();
    });
    this.increaseBtn.addEventListener('click', () => {
      this.controller.increaseCount();
    });
  }
}

export default App;
