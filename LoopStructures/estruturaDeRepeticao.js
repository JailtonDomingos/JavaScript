function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/* ----- FOR ----- */
const arrayNotas = [1.2, 5, 6, 6.7, 8, 2.5, 7.8]
for (let i = 0; i < arrayNotas.length; i++) {
    console.log(`Nota ${i+1}: ${arrayNotas[i]}`)
}

/* ----- FOR-IN ----- */
const pessoa = {
    nome: 'Jailton',
    peso: 82,
    genero: 'M'
}

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}

/* ----- WHILE ----- */
let opcao = 0
while (opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Numero escolhido foi: ${opcao}`)
}

console.log('Saiu do WHILE, até a próxima!')

/* ----- DO-WHILE ----- */
let opcao = -1

console.log(`Inicio ${opcao}`)
do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Numero escolhido foi: ${opcao}`)
} while (opcao != -1);

console.log('Saiu do WHILE, até a próxima!')
