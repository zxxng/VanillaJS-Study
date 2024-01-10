import Counter from './Counter.js';

class App {
  constructor() {
    this.controller = new Counter();
    this.count = document.getElementById('count');
    this.decreaseBtn = document.querySelector('.decrease-btn');
    this.resetBtn = document.querySelector('.reset-btn');
    this.increaseBtn = document.querySelector('.increase-btn');
    this.bindEvents();
  }

  bindEvents() {
    this.decreaseBtn.addEventListener('click', () => {
      this.controller.decreaseCount();
      this.#updateCount();
    });

    this.resetBtn.addEventListener('click', () => {
      this.controller.resetCount();
      this.#updateCount();
    });

    this.increaseBtn.addEventListener('click', () => {
      this.controller.increaseCount();
      this.#updateCount();
    });
  }

  #updateCount() {
    this.count.textContent = this.controller.getCount();

    if (this.count.textContent < 0) this.count.style.color = 'red';
    else if (this.count.textContent > 0) this.count.style.color = 'green';
    else this.count.style.color = 'black';
  }
}

export default App;
