//Each function keeps a reference to its outer lexical environment at creation time. Variable lookup walks outward: local → enclosing → ... → global → ReferenceError.


let a = 1;
function outer() {
  let b = 2;
  function inner() {
    let c = 3;
    console.log(a, b, c); // 1 2 3
  }
  inner();
}
outer();
