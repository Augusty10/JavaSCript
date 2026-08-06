// java Script is default support lexical Support 

// 1. Lexical scoping in JS — the core idea

// Scope is decided by where you write the code, not how it's called.


let x = "Global  variable";

function outer(){
    let x = "Outer variable ";

    function inner(){
    console.log(x); // "outer" — because inner is physically nested inside outer    }
   

}
 inner ()

}
outer() 


//Each function keeps a reference to its outer lexical environment at creation time. Variable lookup walks outward: local → enclosing → ... → global → ReferenceError.
