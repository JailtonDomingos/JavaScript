/*
 Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function calculaCedulas (valor) {
    let notasEscrita = ''
    let notas = [0, 0, 0, 0, 0]
    let comparaValor = 0

    while (comparaValor != valor) {
        if ((comparaValor + 100) <= valor) {
            notas[0]++
            comparaValor += 100
        } else if ((comparaValor + 50) <= valor) {
            notas[1]++
            comparaValor += 50
        } else if ((comparaValor + 10) <= valor) {
            notas[2]++
            comparaValor += 10
        } else if ((comparaValor + 5) <= valor) {
            notas[3]++
            comparaValor += 5
        } else if ((comparaValor + 1) <= valor) {
            notas[4]++
            comparaValor += 1
        }

    }

    notas.forEach((element, index) => {
        if (element) {
            if (index == 0) {
                notasEscrita += `${element} nota(s) de R$ 100; ` 
            }
            if (index == 1) {
                notasEscrita += `${element} nota(s) de R$ 50; ` 
            }
            if (index == 2) {
                notasEscrita += `${element} nota(s) de R$ 10; ` 
            }
            if (index == 3) {
                notasEscrita += `${element} nota(s) de R$ 5; ` 
            }
            if (index == 4) {
                notasEscrita += `${element} nota(s) de R$ 1; ` 
            }
        }
    });

    return notasEscrita
}

console.log(calculaCedulas(168))