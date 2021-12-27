function primeraLinha (desenho, controlaEspacos) {
    for (let i = 1; i <= controlaEspacos; i++) {
        desenho += '  '
    }
    desenho += '*'
    return desenho
}

function desenhaEspacos (desenho, controlaEspacos) {
    for (let j = 1; j <= controlaEspacos; j++) { // For para controle dos espaços da linha
        desenho += '  '
    }
    return desenho
}

function desenhaTriangulo (desenho, variavelControle) {
    for (let k = 1; k <= variavelControle; k++) { // For para printar 
        desenho += '* '  
    }
    return desenho
}

function Rectangle(param) {
   let desenho = '' 
   let controlaEspacos = Math.trunc(param/2)
   let variavelControle = 1

    if (param % 2 === 0) {
        return console.log('Por favor digite um número ímpar!')
    } else {
        while (variavelControle <= param) {
            if (variavelControle === 1) {
                desenho = primeraLinha(desenho, controlaEspacos)

            } else {
                desenho = desenhaEspacos(desenho, controlaEspacos)
                desenho = desenhaTriangulo(desenho, variavelControle)  

            }

            desenho = '' // Limpa a variavel para desenhar a próxima linha
            controlaEspacos = controlaEspacos - 1 // Variavel de controle dos espaços
            variavelControle = variavelControle + 2 // Variavel de controle dos asteriscos
        }
    }
}

console.log(Rectangle(11))