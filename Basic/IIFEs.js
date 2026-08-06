// The problem IIFEs solve

// IIFEs (Immediately Invoked Function Expressions) are used to create a new scope and avoid polluting the global namespace.

// script1.js
var counter = 0;

// script2.js — oops, same name
var counter = "oops";


(function() {
  var counter = 0;
  console.log(counter);
})();

console.log(typeof counter); // "undefined" — never leaked to global scope

