function createCounter() {
  let count = 0; // private — lives in the closure, unreachable from outside

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counterA = createCounter();
const counterB = createCounter();

counterA.increment();
counterA.increment();
counterB.increment();

console.log(counterA.getCount()); // 2
console.log(counterB.getCount()); // 1 — independent state, separate closures
console.log(counterA.count);      // undefined — truly private