/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

const arrayEx = [-1, 2, 3, -7, -2, 4, 5, -6]

var contador = 0;

for (let i = 0; i < arrayEx.length; i++) {
    if(arrayEx[i] < 0) {
        contador++
    }
    
}

console.log(`A quantidade de números negativos no array é de: ${contador}`)