import Carousel from './Carousel.js';

class App {
  #carousel;
  #prevBtn;
  #nextBtn;
  #randomBtn;

  constructor() {
    this.#carousel = new Carousel();
    this.#prevBtn = document.getElementById('prev-btn');
    this.#nextBtn = document.getElementById('next-btn');
    this.#randomBtn = document.getElementById('random-btn');
    this.#bindEvent();
  }

  #bindEvent() {
    const buttons = [
      { btn: this.#prevBtn, type: 'prev' },
      { btn: this.#nextBtn, type: 'next' },
      { btn: this.#randomBtn, type: 'random' },
    ];

    buttons.forEach(({ btn, type }) => {
      btn.addEventListener('click', () => {
        this.#carousel.updateReviewData(type);
      });
    });
  }
}

export default App;
