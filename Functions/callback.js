const fabricantes = ['BMW', 'MERCEDES', 'AUDI']

function imprimir (nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

// Diferenca entra callback e sem callback
const notas = [7.2, 5.1, 6.8, 3.2, 1, 10, 9.4, 7.1]

// Sem callback
let notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback e function anonima
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

// Com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)