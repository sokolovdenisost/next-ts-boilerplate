import { makeAutoObservable } from 'mobx';

class CountStore {
  counter: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }
}

export default new CountStore();
