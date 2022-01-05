/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function lerArray (paramArray) {
    let impar = 0
    let par = 0

    for (let i = 0; i < paramArray.length; i++) {
        if (i % 2 === 0) { // Operador para verificação de divisão sem resto.
            par++
        } else {
            impar++
        }    
    }

    console.log(`Quantidade de números impares: ${impar} / Quantidade de números pares: ${par}`)

}

lerArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
