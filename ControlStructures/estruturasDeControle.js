function numeroAleatorio1({min = 0, max = 10}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {}

function numeroAleatorio2({min = 0, max = 10}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj2 = {}

/* ----- IF ----- */
function alunoAprovado(nota){
    if (nota >= 7) {
        console.log(`Aprovado! Nota: ${nota}`)
    } else {
        console.log(`Reprovado! Nota: ${nota}`)
    }
}

alunoAprovado(numeroAleatorio1(obj))
//Exemplo com function arrow e operador ternário
const resultado = nota => nota >=7 ? `Aprovado! Nota: ${nota}` : `Reprovado! Nota: ${nota}`
console.log(resultado(numeroAleatorio1(obj)))

/* ----- SWITCH ----- */
console.log('SWITCH CASE ')
switch (e = numeroAleatorio2(obj2)) {
    case 10: case 9: case 8: case 7:
        console.log(`Aprovado! ${e}`)
        break;
    default:
        console.log(`Reprovado! ${e}`)
        break;
}