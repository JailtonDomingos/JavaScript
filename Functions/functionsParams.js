/*
 Mesmo não esperando parametros é possível recuperar os dados de parametro pelo 'arguments'
*/
function soma() {
    let soma = 0
    for (const i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2, 3, 4, 5, 'Jailton')) 