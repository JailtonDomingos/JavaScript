/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

const arrayEx = [2, 4, 5, 6, 7, 2, 3]
var media = 0;

arrayEx.forEach(value => {
    media += value
});

media = media/arrayEx.length

console.log(Math.round(media))