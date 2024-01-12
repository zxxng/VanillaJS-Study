import Carousel from './Carousel.js';

class App {
  #carousel;

  constructor() {
    this.#carousel = new Carousel();
    this.prevBtn = this.img = document.getElementById('prev-btn');
    this.nextBtn = this.img = document.getElementById('next-btn');
    this.randomBtn = this.img = document.getElementById('random-btn');
    this.#bindEvent();
  }

  #bindEvent() {
    const buttons = [
      { btn: this.prevBtn, type: 'prev' },
      { btn: this.nextBtn, type: 'next' },
      { btn: this.randomBtn, type: 'random' },
    ];

    buttons.forEach(({ btn, type }) => {
      btn.addEventListener('click', () => {
        this.#carousel.updateReviewData(type);
      });
    });
  }
}

export default App;
