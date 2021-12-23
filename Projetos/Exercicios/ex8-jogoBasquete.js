/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

function comparaPontos (pontos) {
    let arrayPontos = pontos.split(' ').map(Number)
    let pontuacaoAlta = 0, pontuacaoBaixa = 0
    let arrayRetorno = [0 ,0]
    
    pontuacaoAlta = arrayPontos[0]
    pontuacaoBaixa = arrayPontos[0]

    for (let i = 0; i < arrayPontos.length; i++) {
        if (pontuacaoAlta < arrayPontos[i]) {
            pontuacaoAlta = arrayPontos[i]
            arrayRetorno[0]++
        }
        if (arrayPontos[i] < pontuacaoBaixa) {
            pontuacaoBaixa = arrayPontos[i]
            arrayRetorno[1] = i+1
        }
    }
    return arrayRetorno

}

console.log(comparaPontos('10 20 20 8 25 3 0 30 1'))
