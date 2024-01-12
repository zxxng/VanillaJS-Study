import data from './data.js';

class Carousel {
  #reviewData;
  #img;
  #name;
  #job;
  #review;

  constructor() {
    this.#reviewData = 0;
    this.#img = document.getElementById('img');
    this.#name = document.getElementById('name');
    this.#job = document.getElementById('job');
    this.#review = document.getElementById('review');
  }

  updateReviewData(type) {
    this.#chageReviewData(type);
    this.#chageDisplay();
  }

  #chageReviewData(type) {
    if (type === 'prev') this.#changeToPrevData();
    else if (type === 'next') this.#changeToNextData();
    else this.#changeToRandomData();
  }

  #chageDisplay() {
    this.#img.style.backgroundImage = `url(${data[this.#reviewData].imgUrl})`;
    this.#name.textContent = data[this.#reviewData].name;
    this.#job.textContent = data[this.#reviewData].job;
    this.#review.textContent = data[this.#reviewData].review;
  }

  #changeToPrevData() {
    this.#reviewData -= 1;
    if (this.#reviewData < 0) this.#reviewData = data.length - 1;
  }

  #changeToNextData() {
    this.#reviewData += 1;
    if (this.#reviewData === data.length) this.#reviewData = 0;
  }

  #changeToRandomData() {
    const randomNumber = Math.floor(Math.random() * data.length);
    this.#reviewData = randomNumber;
  }
}

export default Carousel;
