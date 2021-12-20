const soma = function (x, y) {
    return x + y
} 

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(5, 5, (x, y) => { // Arrow function replicando a function 'soma' acima
    return x * y
})
imprimirResultado(5, 5, function (x, y) {
    return x / y
})