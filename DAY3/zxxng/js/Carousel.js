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
    const item = data[this.#reviewData];

    this.#img.style.backgroundImage = `url(${item.imgUrl})`;
    this.#name.textContent = item.name;
    this.#job.textContent = item.job;
    this.#review.textContent = item.review;
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
    let randomNumber = this.#reviewData;

    // randomNumber와 this.#reviewData가 같으면 다시 생성하는 코드
    while (randomNumber === this.#reviewData) {
      randomNumber = Math.floor(Math.random() * data.length);
    }
    this.#reviewData = randomNumber;
  }
}

export default Carousel;
