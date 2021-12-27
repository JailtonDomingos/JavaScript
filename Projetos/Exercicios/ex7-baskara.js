/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

const baskara = function (a, b ,c) {
    let delta = 0
    let result = []

    delta = (b**2) - (4 * a * c)
    if (delta < 0) {
        return `Delta é negativo`
    }

    // A função Match.sqrt() tira a raiz do number
    result.push(x2 = ((-b) + Math.sqrt(delta)) / (2 * a))
    result.push(x1 = ((-b) - Math.sqrt(delta)) / (2 * a))
    //return `x1: ${x1.toFixed(2)}, x2: ${x2.toFixed(2)}`
    return result
}

console.log(baskara(1, -1, -6))
