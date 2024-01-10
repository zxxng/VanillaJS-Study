class Counter {
  constructor() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  decreaseCount() {
    this.count--;
  }

  increaseCount() {
    this.count++;
  }

  resetCount() {
    this.count = 0;
  }
}

export default Counter;
