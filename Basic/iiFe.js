const Counter = (function() {
  let count = 0; // private — inaccessible from outside

  function increment() {
    count++;
    return count;
  }

  function reset() {
    count = 0;
  }

  // only exposed methods are public
  return {
    increment,
    reset,
    getCount: () => count
  };
})();

Counter.increment(); // 1
Counter.increment(); // 2
console.log(Counter.count); // undefined — can't touch it directly
console.log(Counter.getCount()); // 2