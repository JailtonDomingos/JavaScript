/*
Esta aplicação fuciona após chamar a função 'Triangle' passando um valor da quantidade de linhas requisitada para o triangulo.
Após isto a lógica da aplicação vai desenhar o triângulo de posição vertical de cima para baixo, calculando os espaços para cada linha desenhada.
*/

function primeraLinha (desenho, controlaEspacos) { // Function que controla os espaços em branco iniciais da primeira linha
    for (let i = 1; i <= controlaEspacos; i++) { // Percorre até a metade do desenho para colocar o primeiro asterisco
        desenho += '  '
    }
    desenho += '*'
    return desenho
}

function desenhaEspacos (desenho, controlaEspacos) { // Function que controla os espaços para as demais lihas != 1º linha
    for (let j = 1; j <= controlaEspacos; j++) { // For para percorrer os espaçoes necessarios para inicio do desenho: -2 espaçoes do que a linha anterior
        desenho += '  '
    }
    return desenho
}

function desenhaTriangulo (desenho, variavelControle) {
    for (let k = 1; k <= variavelControle; k++) { // For para printar os asteriscos
        desenho += '* '  
    }
    return desenho
}

function Triangle(param) {
   let desenho = '' 
   let controlaEspacos = Math.trunc(param/2)
   let variavelControle = 1

    if (param % 2 === 0) {
        return console.log('Por favor digite um número ímpar!')
    } else {
        while (variavelControle <= param) { // Enquanto as linhas do triangulo não acabarem continua percorrendo
            if (variavelControle === 1) { // Controle para a primeira linha / Inicio do desenho
                desenho = primeraLinha(desenho, controlaEspacos)

            } else { // Controle das demais linhas
                desenho = desenhaEspacos(desenho, controlaEspacos)
                desenho = desenhaTriangulo(desenho, variavelControle)  

            }

            desenho = '' // Limpa a variavel para desenhar a próxima linha
            controlaEspacos = controlaEspacos - 1 // Variavel de controle dos espaços
            variavelControle = variavelControle + 2 // Variavel de controle dos asteriscos
        }
    }
}

console.log(Triangle(11))
