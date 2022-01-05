/*
 Utilizando a estrutura de repetição for, percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function noIntervalo(param, min, max) {
    return (( param - min ) * ( param - max)  <= 0 ); // Lógica para verificar se está no intervalo, pois se não estiver o valor sempre será maior que ZERO, caso contrário return true, ou seja, está no intervalo.
}

let nIntervaloTrue = 0
let nIntervaloFalse = 0

let param = [1, 2, 3, 10, 11, 19, 20, 21, 22, 23]

for (let i = 0; i < param.length; i++) {
    if (noIntervalo(param[i], 10, 20)) { // Verificação já recebendo o Boolean da function noIntervalo
        nIntervaloTrue++
    } else {
        nIntervaloFalse++
    }
}

console.log(`Quantidade de números que estão dentro do intervalo: ${nIntervaloTrue} / Quantidade de números que estão fora do intervalo: ${nIntervaloFalse}`)
