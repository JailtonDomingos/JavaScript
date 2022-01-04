/*
 Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

let param = [2, 3, 24, 11, 19, 20, 21, 22, 23, 1]
let menor = 0
let maior = 0

for (let i = 0; i < param.length; i++) {
    if (param[i] < menor) {
        menor = param[i]
    } else if (param[i] > maior){
        maior = param[i]
    }
     
}

console.log(`Menor número: ${menor} / Maior número: ${maior}`)