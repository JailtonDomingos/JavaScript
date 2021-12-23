/*
Faça um algoritmo que calcule o fatorial de um número.
*/

function callFactorial(x){
    if (x - 1) { return x * callFactorial(x-1) }
    
    return 1
}

console.log(callFactorial(9))