//Trace the call stack for a recursive function using console.trace explain it


function countdown(num){

    console.trace(`countdown (${num})`);

    if (num ===0 ){
        console.log(" Fineshed ");
        return;
    }
 countdown(num - 1);
}
countdown(3); 
