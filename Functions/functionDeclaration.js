// Function declaration
console.log(soma(3, 4)) // Function dessa forma pode ser invocada antes mesmo da declaração pois o JS lê todas as function antes do código
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function funtion(x, y) {
    return x - y
}
console.log(sub(2, 1)) // Só pode ser usada após a declaração

// Named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(sub(3, 3)) // Só pode ser usada após a declaração