/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const calculoPonderada = (nota, peso) => nota * peso
const calculoMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) >= 5 ? 'Aprovado' : 'Reprovado'

function calculaNota (codigoAluno, nota1, nota2, nota3) {

    let resultado = calculoMedia(calculoPonderada(nota1, 0.3), calculoPonderada(nota2, 0.2), calculoPonderada(nota3, 0.5))
    console.log(`Código aluno: ${codigoAluno}; Nota 1: ${nota1}; Nota 2: ${nota2}; Nota3: ${nota3}; Status: ${resultado}`)
}

calculaNota(10, 7, 8, 7)