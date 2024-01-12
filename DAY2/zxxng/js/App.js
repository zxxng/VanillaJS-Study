import Counter from './Counter.js';

class App {
  constructor() {
    this.counter = new Counter();
    this.decreaseBtn = document.querySelector('.decrease-btn');
    this.resetBtn = document.querySelector('.reset-btn');
    this.increaseBtn = document.querySelector('.increase-btn');
    this.bindEvents();
  }

  bindEvents() {
    this.decreaseBtn.addEventListener('click', () => {
      this.counter.decreaseCount();
    });
    this.resetBtn.addEventListener('click', () => {
      this.counter.resetCount();
    });
    this.increaseBtn.addEventListener('click', () => {
      this.counter.increaseCount();
    });
  }
}

export default App;
