//Function without return
function imprimirSoma(numero1, numero2){
    console.log(numero1 + numero2)
}

console.log("Function without return")
imprimirSoma(1, 2)
imprimirSoma(1, 6, 3, 4)
imprimirSoma()

//Function with return
function imprimirSomaReturn(numero1, numero2 = 0){
    return numero1 + numero2
}

console.log("Function with return")
console.log(imprimirSomaReturn(1, 5))
console.log(imprimirSomaReturn(1))

//Storing a function
const imprimirSomaConst = function(numero1, numero2){
    console.log("Storing a function")
    console.log(numero1 + numero2)
}

imprimirSomaConst(7, 6)

//Storing a arrow function
const imprimirSomaArrow = (numero1, numero2) => {
    return numero1 + numero2
}

console.log("Storing a arrow function")
console.log(imprimirSomaArrow(9, 1))

//Abstração do return
const imprimirSubtracao =  (numero1, numero2) => numero1 - numero2
console.log("Abstracting a arrow function")
console.log(imprimirSubtracao(5, 4))