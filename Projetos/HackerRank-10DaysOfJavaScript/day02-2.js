/*
Task

Implement a function named factorial that has one parameter: an integer, 'n'. 
It must return the value of 'n!' (i.e., 'n' factorial).
*/

function callFactorial(x){
    if (x - 1) { return x * callFactorial(x-1) }
    
    return 1
}

console.log(callFactorial(5))