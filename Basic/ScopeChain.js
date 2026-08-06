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


//JS resolves variables lexically via the scope chain fixed at function creation time, but resolves this dynamically based on the call site — except arrow functions, which lexically inherit this too." That sentence alone answers 80% of what interviewers are probing for.